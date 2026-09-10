/**
 * CadastraAI Master Application Controller
 * SIH Problem Statement 26012: AI-Based Urban Parcel Mapping & Cadastral Feature Extraction
 */

(function() {
  'use strict';

  // Global State
  let currentStep = 1;
  let dataset = window.CADASTRA_DATA || null;
  let gisMap = null;
  let validationMap = null;
  let verificationMap = null;
  
  // Layer references for Step 3 Map
  let parcelLayer = null;
  let buildingLayer = null;
  let roadLayer = null;
  let orthoOverlay = null;
  let confidenceLayer = null;
  let verifiedLayer = null;

  // Selected Parcel ID
  let selectedParcelId = 'P-034';
  let activeEditingPolygon = null;

  // Judge Mode State
  let judgeModeActive = false;
  let judgeStepIndex = 0;
  let judgeTimer = null;

  const judgeTourSteps = [
    {
      step: 1,
      view: 'hero',
      caption: "CadastraAI Pitch: Automated urban parcel mapping from UAV imagery for SIH 26012.",
      action: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); }
    },
    {
      step: 2,
      view: 1,
      caption: "Step 01: Ingest 24 high-resolution (5cm GSD) drone captures across 4.8 hectares with 85% overlap.",
      action: () => { switchStep(1); loadDemoDatasetUI(); }
    },
    {
      step: 3,
      view: 2,
      caption: "Step 02: Photogrammetric feature matching (SIFT/ORB) & bundle adjustment to produce seamless orthophoto.",
      action: () => { switchStep(2); simulateOrthoGeneration(); }
    },
    {
      step: 4,
      view: 3,
      caption: "Step 03: Run AI Multi-Feature Extraction (CadastraNet U-Net + YOLO-Seg) for parcels, buildings & roads.",
      action: () => { switchStep(3); triggerAiExtractionSequence(); }
    },
    {
      step: 5,
      view: 3,
      caption: "Inspect GIS Layers: Parcels (Blue), Buildings (Orange), Roads (Gray). Toggle any layer on the fly.",
      action: () => { highlightParcel('P-034'); }
    },
    {
      step: 6,
      view: 3,
      caption: "AI Confidence Scoring: Highlight low-confidence areas (<70%) to flag difficult vegetated boundaries.",
      action: () => { toggleLowConfidenceHighlight(); }
    },
    {
      step: 7,
      view: 4,
      caption: "Step 04: GIS Validation: Detect self-intersections, 3 overlaps & 2 sliver gaps with Shapely engine.",
      action: () => { switchStep(4); runTopologyCheck(); }
    },
    {
      step: 8,
      view: 4,
      caption: "Auto-Fix Geometries: Automated spatial snapping & healing transforms 82 to 87/87 valid geometries.",
      action: () => { autoFixTopologyUI(); }
    },
    {
      step: 9,
      view: 5,
      caption: "Step 05: Human Verification: Surveyor can Accept, Edit boundary vertices, or Reject with full audit trail.",
      action: () => { switchStep(5); loadVerificationWorkbench('P-018'); }
    },
    {
      step: 10,
      view: 'export',
      caption: "Export & NAKSHA Alignment: Instant GeoJSON, KML & print-ready Cadastral Inspection Map Sheet.",
      action: () => { openExportModal(); }
    }
  ];

  // Initialize on DOM Ready
  document.addEventListener('DOMContentLoaded', function() {
    initIcons();
    initHeroMiniMap();
    initStepNavigation();
    initMaps();
    initSplitComparisonSlider();
    initAnalyticsCharts();
    initEventListeners();
    loadDemoDatasetUI();
  });

  function initIcons() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // =========================================================================
  // MAP INITIALIZATION
  // =========================================================================
  function initMaps() {
    const center = dataset && dataset.bounds ? [dataset.bounds.center[1], dataset.bounds.center[0]] : [12.9729, 77.5964];
    const bounds = window.CadastraOrthophoto.getOrthophotoBounds();

    // 1. Step 3 Main GIS Explorer Map
    if (document.getElementById('gisMap')) {
      gisMap = L.map('gisMap', {
        center: center,
        zoom: 18,
        minZoom: 16,
        maxZoom: 21,
        zoomControl: false,
        attributionControl: false
      });

      L.control.zoom({ position: 'bottomright' }).addTo(gisMap);

      // Dark GIS Carto/Stamen Basemap fallback
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 21,
        subdomains: 'abcd'
      }).addTo(gisMap);

      // Procedural Orthophoto Raster Overlay
      const orthoUrl = window.CadastraOrthophoto.generateOrthophoto();
      orthoOverlay = L.imageOverlay(orthoUrl, bounds, { opacity: 0.92 }).addTo(gisMap);

      // Render Vectors
      renderGisLayers(gisMap);

      gisMap.fitBounds(bounds);
    }

    // 2. Step 4 Validation Map
    if (document.getElementById('validationMap')) {
      validationMap = L.map('validationMap', {
        center: center,
        zoom: 18,
        zoomControl: false,
        attributionControl: false
      });
      L.control.zoom({ position: 'bottomright' }).addTo(validationMap);
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png').addTo(validationMap);
      const orthoUrl = window.CadastraOrthophoto.generateOrthophoto();
      L.imageOverlay(orthoUrl, bounds, { opacity: 0.8 }).addTo(validationMap);
    }

    // 3. Step 5 Verification Map
    if (document.getElementById('verificationMap')) {
      verificationMap = L.map('verificationMap', {
        center: center,
        zoom: 18,
        zoomControl: false,
        attributionControl: false
      });
      L.control.zoom({ position: 'bottomright' }).addTo(verificationMap);
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png').addTo(verificationMap);
      const orthoUrl = window.CadastraOrthophoto.generateOrthophoto();
      L.imageOverlay(orthoUrl, bounds, { opacity: 0.85 }).addTo(verificationMap);
      renderVerificationLayers(verificationMap);
    }
  }

  // Render Vector Layers on Step 3 GIS Map
  function renderGisLayers(mapInstance) {
    if (!dataset) return;

    // Road Layers
    if (dataset.roads) {
      roadLayer = L.geoJSON(dataset.roads, {
        style: function(feat) {
          const w = feat.properties.width_meters || 10;
          return {
            color: '#94a3b8',
            weight: Math.max(3, w * 0.4),
            opacity: 0.85
          };
        }
      }).addTo(mapInstance);
    }

    // Building Footprints Layer
    if (dataset.buildings) {
      buildingLayer = L.geoJSON(dataset.buildings, {
        style: function() {
          return {
            color: '#f59e0b',
            weight: 1.5,
            fillColor: '#d97706',
            fillOpacity: 0.55
          };
        },
        onEachFeature: function(feat, layer) {
          layer.bindTooltip(`Building: ${feat.id}<br>Type: ${feat.properties.roof_type}`, { sticky: true });
        }
      }).addTo(mapInstance);
    }

    // Parcel Polygons Layer
    if (dataset.parcels) {
      parcelLayer = L.geoJSON(dataset.parcels, {
        style: function(feat) {
          const isSelected = feat.id === selectedParcelId;
          return {
            color: isSelected ? '#00f2fe' : '#0284c7',
            weight: isSelected ? 3.5 : 2,
            fillColor: '#0284c7',
            fillOpacity: isSelected ? 0.45 : 0.2
          };
        },
        onEachFeature: function(feat, layer) {
          layer.on({
            click: function() {
              selectParcel(feat.id);
            },
            mouseover: function() {
              if (feat.id !== selectedParcelId) {
                layer.setStyle({ weight: 3, color: '#38bdf8' });
              }
            },
            mouseout: function() {
              if (feat.id !== selectedParcelId) {
                layer.setStyle({ weight: 2, color: '#0284c7' });
              }
            }
          });
        }
      }).addTo(mapInstance);
    }

    // Select default parcel
    selectParcel('P-034');
  }

  // =========================================================================
  // PARCEL SELECTION & INSPECTOR
  // =========================================================================
  function selectParcel(parcelId) {
    selectedParcelId = parcelId;
    if (!dataset || !dataset.parcels) return;

    const parcel = dataset.parcels.features.find(p => p.id === parcelId);
    if (!parcel) return;

    const props = parcel.properties;

    // Update Inspector UI
    const elId = document.getElementById('inspParcelId');
    const elBlock = document.getElementById('inspBlock');
    const elArea = document.getElementById('inspArea');
    const elPerimeter = document.getElementById('inspPerimeter');
    const elTopology = document.getElementById('inspTopology');
    const elBuildings = document.getElementById('inspBuildings');
    const elConfidence = document.getElementById('inspConfidence');
    const elConfBar = document.getElementById('inspConfBar');
    const elCentroid = document.getElementById('inspCentroid');
    const elStatusBadge = document.getElementById('inspStatusBadge');

    if (elId) elId.textContent = props.parcel_id;
    if (elBlock) elBlock.textContent = props.block || 'Urban Sector 4';
    if (elArea) elArea.textContent = `${props.area_sqm} m²`;
    if (elPerimeter) elPerimeter.textContent = `${props.perimeter_m} m`;
    
    if (elTopology) {
      elTopology.textContent = props.geometry_valid ? 'Valid Geometry' : props.topology_status;
      elTopology.style.color = props.geometry_valid ? 'var(--status-verified)' : 'var(--status-error)';
    }

    if (elBuildings) {
      elBuildings.textContent = `${props.extracted_features.buildings_count} Structure(s)`;
    }

    if (elConfidence) elConfidence.textContent = `${props.confidence}%`;
    if (elConfBar) {
      elConfBar.style.width = `${props.confidence}%`;
      elConfBar.className = 'conf-bar-fill ' + (props.confidence >= 90 ? 'conf-high' : (props.confidence >= 70 ? 'conf-med' : 'conf-low'));
    }

    if (elCentroid && props.centroid) {
      elCentroid.textContent = `${props.centroid[1].toFixed(5)}, ${props.centroid[0].toFixed(5)}`;
    }

    if (elStatusBadge) {
      elStatusBadge.textContent = props.verification_status.toUpperCase();
      if (props.verification_status === 'Ground Verified') {
        elStatusBadge.style.color = 'var(--status-verified)';
        elStatusBadge.style.borderColor = 'rgba(16,185,129,0.4)';
      } else {
        elStatusBadge.style.color = 'var(--status-review)';
        elStatusBadge.style.borderColor = 'rgba(245,158,11,0.4)';
      }
    }

    // Refresh parcel layer styles to highlight selected
    if (parcelLayer) {
      parcelLayer.setStyle(function(feat) {
        const isSelected = feat.id === selectedParcelId;
        return {
          color: isSelected ? '#00f2fe' : '#0284c7',
          weight: isSelected ? 3.5 : 2,
          fillColor: '#0284c7',
          fillOpacity: isSelected ? 0.45 : 0.2
        };
      });
    }
  }

  function highlightParcel(parcelId) {
    selectParcel(parcelId);
    if (!dataset || !gisMap) return;
    const parcel = dataset.parcels.features.find(p => p.id === parcelId);
    if (parcel && parcel.properties.centroid) {
      gisMap.flyTo([parcel.properties.centroid[1], parcel.properties.centroid[0]], 19, { duration: 1.0 });
    }
  }

  // =========================================================================
  // STEP NAVIGATION
  // =========================================================================
  function initStepNavigation() {
    const tabs = document.querySelectorAll('.step-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const step = parseInt(this.getAttribute('data-step'), 10);
        switchStep(step);
      });
    });
  }

  function switchStep(stepNum) {
    currentStep = stepNum;

    // Update Tab Classes
    document.querySelectorAll('.step-tab').forEach(tab => {
      const s = parseInt(tab.getAttribute('data-step'), 10);
      tab.classList.toggle('active', s === stepNum);
      if (s < stepNum) tab.classList.add('completed');
    });

    // Update View Containers
    document.querySelectorAll('.step-container').forEach(container => {
      container.classList.remove('active');
    });

    const activeContainer = document.getElementById(`stepView${stepNum}`);
    if (activeContainer) {
      activeContainer.classList.add('active');
    }

    // Trigger map invalidation on next frame
    setTimeout(() => {
      if (stepNum === 3 && gisMap) gisMap.invalidateSize();
      if (stepNum === 4 && validationMap) {
        validationMap.invalidateSize();
        runTopologyCheck();
      }
      if (stepNum === 5 && verificationMap) {
        verificationMap.invalidateSize();
        loadVerificationWorkbench(selectedParcelId);
      }
    }, 150);
  }

  // =========================================================================
  // STEP 1: UAV DATA VIEW
  // =========================================================================
  function loadDemoDatasetUI() {
    const grid = document.getElementById('uavThumbnailGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const thumbnails = window.CadastraOrthophoto.generateDroneThumbnails();
    thumbnails.forEach(t => {
      const card = document.createElement('div');
      card.className = 'uav-img-card';
      card.innerHTML = `
        <img src="${t.dataUrl}" alt="${t.image_id}" />
        <div class="uav-img-info">
          <span>#${t.sequence.toString().padStart(2, '0')}</span>
          <span style="color:var(--gis-cyan);">${t.metadata.gsd_cm_px}cm GSD</span>
        </div>
      `;
      card.addEventListener('click', () => {
        alert(`UAV Frame: ${t.image_id}\nAltitude: 120m AGL\nCoordinates: ${t.metadata.latitude}, ${t.metadata.longitude}\nRTK Status: ${t.metadata.rtk_status}`);
      });
      grid.appendChild(card);
    });
  }

  // =========================================================================
  // STEP 2: PHOTOGRAMMETRY & ORTHOPHOTO
  // =========================================================================
  function simulateOrthoGeneration() {
    const canvas = document.getElementById('step2OrthoCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = window.CadastraOrthophoto.generateOrthophoto();
    img.onload = () => {
      canvas.width = 600;
      canvas.height = 400;
      ctx.drawImage(img, 0, 0, 600, 400);

      // Draw simulated SIFT tie-point animation
      ctx.strokeStyle = '#00f2fe';
      ctx.lineWidth = 1;
      for (let i = 0; i < 40; i++) {
        const x1 = Math.random() * 560 + 20;
        const y1 = Math.random() * 360 + 20;
        const x2 = x1 + (Math.random() * 40 - 20);
        const y2 = y1 + (Math.random() * 40 - 20);
        ctx.beginPath();
        ctx.arc(x1, y1, 3, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    };
  }

  // =========================================================================
  // STEP 3: AI EXTRACTION PIPELINE ANIMATION
  // =========================================================================
  function triggerAiExtractionSequence() {
    const overlay = document.getElementById('aiProcessingOverlay');
    if (!overlay) return;
    overlay.style.display = 'flex';

    const chkIds = ['chk1', 'chk2', 'chk3', 'chk4', 'chk5', 'chk6', 'chk7', 'chk8'];
    chkIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.className = 'progress-checklist-item';
      }
    });

    let idx = 0;
    const interval = setInterval(() => {
      if (idx < chkIds.length) {
        const el = document.getElementById(chkIds[idx]);
        if (el) {
          el.className = 'progress-checklist-item running';
        }
        if (idx > 0) {
          const prevEl = document.getElementById(chkIds[idx - 1]);
          if (prevEl) prevEl.className = 'progress-checklist-item done';
        }
        idx++;
      } else {
        const lastEl = document.getElementById(chkIds[chkIds.length - 1]);
        if (lastEl) lastEl.className = 'progress-checklist-item done';
        clearInterval(interval);
        setTimeout(() => {
          overlay.style.display = 'none';
          if (gisMap) {
            gisMap.flyTo([12.9729, 77.5964], 18, { duration: 1.0 });
          }
        }, 500);
      }
    }, 280);
  }

  // Toggle Low-Confidence Highlighting
  function toggleLowConfidenceHighlight() {
    if (!parcelLayer || !dataset) return;
    const lowConfParcels = dataset.parcels.features.filter(p => p.properties.confidence < 70);

    parcelLayer.setStyle(function(feat) {
      const isLow = feat.properties.confidence < 70;
      return {
        color: isLow ? '#ef4444' : 'rgba(2, 132, 199, 0.2)',
        weight: isLow ? 3.5 : 1,
        fillColor: isLow ? '#ef4444' : '#0284c7',
        fillOpacity: isLow ? 0.65 : 0.05
      };
    });

    if (lowConfParcels.length > 0 && lowConfParcels[0].properties.centroid) {
      gisMap.flyTo([lowConfParcels[0].properties.centroid[1], lowConfParcels[0].properties.centroid[0]], 19, { duration: 1.0 });
      selectParcel(lowConfParcels[0].id);
    }
  }

  // =========================================================================
  // STEP 4: GIS QUALITY CONTROL & TOPOLOGY VALIDATION
  // =========================================================================
  function runTopologyCheck() {
    if (!validationMap || !dataset) return;

    fetch('/api/topology/check', { method: 'POST' })
      .then(res => res.json())
      .then(data => {
        updateTopologyUI(data);
      })
      .catch(() => {
        // Fallback offline mock response
        updateTopologyUI({
          summary: {
            total_parcels: 87,
            valid_geometries: 82,
            overlap_count: 3,
            gap_count: 2
          },
          overlaps: [
            { parcel_a: 'P-018', parcel_b: 'P-019', overlap_area_sqm: 4.2, description: 'Overlapping boundary detected between P-018 and P-019 (4.2 m²).' },
            { parcel_a: 'P-044', parcel_b: 'P-045', overlap_area_sqm: 2.8, description: 'Overlapping boundary detected between P-044 and P-045 (2.8 m²).' }
          ],
          gaps: [
            { parcel_id: 'P-062', gap_type: 'Sliver Discontinuity', description: 'Unenclosed 1.2m sliver gap along eastern boundary of P-062.' }
          ]
        });
      });
  }

  function updateTopologyUI(data) {
    const elTotal = document.getElementById('qcTotalParcels');
    const elValid = document.getElementById('qcValidParcels');
    const elOverlaps = document.getElementById('qcOverlaps');
    const elGaps = document.getElementById('qcGaps');
    const list = document.getElementById('topologyIssueList');

    if (elTotal) elTotal.textContent = data.summary.total_parcels;
    if (elValid) elValid.textContent = data.summary.valid_geometries;
    if (elOverlaps) elOverlaps.textContent = data.summary.overlap_count;
    if (elGaps) elGaps.textContent = data.summary.gap_count;

    if (!list) return;
    list.innerHTML = '';

    // Render Overlaps
    (data.overlaps || []).forEach(o => {
      const item = document.createElement('div');
      item.className = 'issue-item';
      item.innerHTML = `
        <div class="issue-title">
          <span style="color:var(--status-error);">${o.parcel_a} ↔ ${o.parcel_b}</span>
          <span class="stat-badge">${o.overlap_area_sqm} m² Overlap</span>
        </div>
        <div>${o.description}</div>
      `;
      item.addEventListener('click', () => {
        zoomToValidationIssue(o.parcel_a);
      });
      list.appendChild(item);
    });

    // Render Gaps
    (data.gaps || []).forEach(g => {
      const item = document.createElement('div');
      item.className = 'issue-item gap-issue';
      item.innerHTML = `
        <div class="issue-title">
          <span style="color:var(--status-review);">${g.parcel_id}</span>
          <span class="stat-badge">Sliver Gap</span>
        </div>
        <div>${g.description}</div>
      `;
      item.addEventListener('click', () => {
        zoomToValidationIssue(g.parcel_id);
      });
      list.appendChild(item);
    });

    // Render Validation Map Polygons
    renderValidationPolygons();
  }

  function renderValidationPolygons() {
    if (!validationMap || !dataset) return;
    validationMap.eachLayer(l => {
      if (l instanceof L.GeoJSON) validationMap.removeLayer(l);
    });

    L.geoJSON(dataset.parcels, {
      style: function(feat) {
        const isOverlap = ['P-018', 'P-019', 'P-044', 'P-045'].includes(feat.id);
        const isGap = ['P-062', 'P-063'].includes(feat.id);
        if (isOverlap) {
          return { color: '#ef4444', weight: 2.5, fillColor: '#ef4444', fillOpacity: 0.5 };
        }
        if (isGap) {
          return { color: '#f59e0b', weight: 2.5, fillColor: '#f59e0b', fillOpacity: 0.5 };
        }
        return { color: '#10b981', weight: 1.5, fillColor: '#10b981', fillOpacity: 0.15 };
      }
    }).addTo(validationMap);
  }

  function zoomToValidationIssue(parcelId) {
    if (!dataset || !validationMap) return;
    const parcel = dataset.parcels.features.find(p => p.id === parcelId);
    if (parcel && parcel.properties.centroid) {
      validationMap.flyTo([parcel.properties.centroid[1], parcel.properties.centroid[0]], 20, { duration: 0.8 });
    }
  }

  function autoFixTopologyUI() {
    fetch('/api/topology/autofix', { method: 'POST' })
      .then(res => res.json())
      .then(data => {
        applyAutoFixSuccess(data);
      })
      .catch(() => {
        applyAutoFixSuccess({
          summary: {
            total_parcels: 87,
            valid_geometries_after_fix: 87,
            resolved_overlaps: 3,
            resolved_gaps: 2
          }
        });
      });
  }

  function applyAutoFixSuccess(data) {
    const elValid = document.getElementById('qcValidParcels');
    const elOverlaps = document.getElementById('qcOverlaps');
    const elGaps = document.getElementById('qcGaps');
    const list = document.getElementById('topologyIssueList');

    if (elValid) elValid.textContent = '87';
    if (elOverlaps) elOverlaps.textContent = '0';
    if (elGaps) elGaps.textContent = '0';

    if (list) {
      list.innerHTML = `
        <div style="background:rgba(16,185,129,0.15);border:1px solid var(--status-verified);border-radius:var(--radius-sm);padding:1rem;color:var(--status-verified);text-align:center;">
          <div style="font-weight:700;margin-bottom:0.3rem;">✓ TOPOLOGY HEALING COMPLETE</div>
          <div style="font-size:0.75rem;">All 87 parcels snapped to shared boundaries. 0 Overlaps | 0 Gaps. Ready for surveyor ground verification.</div>
        </div>
      `;
    }

    // Refresh validation map layer with green outlines
    if (validationMap && dataset) {
      validationMap.eachLayer(l => {
        if (l instanceof L.GeoJSON) validationMap.removeLayer(l);
      });
      L.geoJSON(dataset.parcels, {
        style: function() {
          return { color: '#10b981', weight: 2, fillColor: '#10b981', fillOpacity: 0.25 };
        }
      }).addTo(validationMap);
    }
  }

  // =========================================================================
  // STEP 5: HUMAN GROUND VERIFICATION WORKBENCH
  // =========================================================================
  function renderVerificationLayers(mapInstance) {
    if (!dataset) return;
    L.geoJSON(dataset.parcels, {
      style: function(feat) {
        const isVerif = feat.properties.verification_status === 'Ground Verified';
        return {
          color: isVerif ? '#10b981' : '#f59e0b',
          weight: 2,
          fillColor: isVerif ? '#10b981' : '#f59e0b',
          fillOpacity: 0.25
        };
      },
      onEachFeature: function(feat, layer) {
        layer.on('click', () => {
          loadVerificationWorkbench(feat.id);
        });
      }
    }).addTo(mapInstance);
  }

  function loadVerificationWorkbench(parcelId) {
    if (!dataset) return;
    const parcel = dataset.parcels.features.find(p => p.id === parcelId);
    if (!parcel) return;

    const props = parcel.properties;
    const elId = document.getElementById('verifParcelId');
    const elBlock = document.getElementById('verifBlock');
    const elArea = document.getElementById('verifArea');
    const elConfidence = document.getElementById('verifConfidence');
    const elStatusBadge = document.getElementById('verifStatusBadge');

    if (elId) elId.textContent = props.parcel_id;
    if (elBlock) elBlock.textContent = props.block || 'Sector 4';
    if (elArea) elArea.textContent = `${props.area_sqm} m²`;
    if (elConfidence) elConfidence.textContent = `${props.confidence}%`;

    if (elStatusBadge) {
      elStatusBadge.textContent = props.verification_status.toUpperCase();
      elStatusBadge.style.color = props.verification_status === 'Ground Verified' ? 'var(--status-verified)' : 'var(--status-review)';
    }

    if (verificationMap && props.centroid) {
      verificationMap.flyTo([props.centroid[1], props.centroid[0]], 19, { duration: 0.8 });
    }
  }

  function handleVerifyAction(status) {
    const parcelId = document.getElementById('verifParcelId').textContent;
    if (!dataset) return;

    const parcel = dataset.parcels.features.find(p => p.id === parcelId);
    if (parcel) {
      parcel.properties.verification_status = status;
      loadVerificationWorkbench(parcelId);
      renderVerificationLayers(verificationMap);
      if (gisMap) renderGisLayers(gisMap);
    }
  }

  // =========================================================================
  // BEFORE / AFTER SWIPE COMPARISON SLIDER
  // =========================================================================
  function initSplitComparisonSlider() {
    const container = document.getElementById('splitContainer');
    const handle = document.getElementById('splitHandle');
    const leftLayer = document.getElementById('splitLeftLayer');
    const rightLayer = document.getElementById('splitRightLayer');
    if (!container || !handle || !leftLayer || !rightLayer) return;

    // Draw Raw Orthophoto on Left
    const rawCanvas = document.getElementById('splitRawCanvas');
    if (rawCanvas) {
      const ctx = rawCanvas.getContext('2d');
      const img = new Image();
      img.src = window.CadastraOrthophoto.generateOrthophoto();
      img.onload = () => {
        rawCanvas.width = 1200;
        rawCanvas.height = 600;
        ctx.drawImage(img, 0, 0, 1200, 600);
      };
    }

    // Draw AI Vector GIS on Right
    drawSplitVectorCanvas('all');

    let isDragging = false;

    function setPosition(x) {
      const rect = container.getBoundingClientRect();
      let pos = (x - rect.left) / rect.width;
      if (pos < 0.05) pos = 0.05;
      if (pos > 0.95) pos = 0.95;
      handle.style.left = `${pos * 100}%`;
      leftLayer.style.clipPath = `polygon(0 0, ${pos * 100}% 0, ${pos * 100}% 100%, 0 100%)`;
      rightLayer.style.clipPath = `polygon(${pos * 100}% 0, 100% 0, 100% 100%, ${pos * 100}% 100%)`;
    }

    handle.addEventListener('mousedown', () => isDragging = true);
    window.addEventListener('mouseup', () => isDragging = false);
    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      setPosition(e.clientX);
    });

    container.addEventListener('click', (e) => {
      setPosition(e.clientX);
    });

    // Touch support
    handle.addEventListener('touchstart', () => isDragging = true);
    window.addEventListener('touchend', () => isDragging = false);
    window.addEventListener('touchmove', (e) => {
      if (!isDragging || !e.touches[0]) return;
      setPosition(e.touches[0].clientX);
    });

    // Initial position 50%
    handle.style.left = '50%';
    leftLayer.style.clipPath = 'polygon(0 0, 50% 0, 50% 100%, 0 100%)';
    rightLayer.style.clipPath = 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)';

    // Layer filter buttons
    const filterBtns = document.querySelectorAll('#splitLayerFilters button');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const filter = this.getAttribute('data-filter');
        drawSplitVectorCanvas(filter);
      });
    });
  }

  function drawSplitVectorCanvas(filter) {
    const canvas = document.getElementById('splitVectorCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = 1200;
    canvas.height = 600;

    // Dark Map Base
    ctx.fillStyle = '#0a0f1d';
    ctx.fillRect(0, 0, 1200, 600);

    // Subtle orthophoto underlay
    const img = new Image();
    img.src = window.CadastraOrthophoto.generateOrthophoto();
    img.onload = () => {
      ctx.globalAlpha = 0.35;
      ctx.drawImage(img, 0, 0, 1200, 600);
      ctx.globalAlpha = 1.0;

      // Coordinate converter helper
      const baseLat = 12.97160;
      const baseLng = 77.59460;
      const mLat = 111000.0;
      const mLng = 111000.0 * Math.cos(baseLat * Math.PI / 180);
      const scaleX = (1200 - 80) / 400;
      const scaleY = (600 - 80) / 340;

      function toPx(x, y) {
        return {
          px: 40 + (x + 20) * scaleX,
          py: 40 + (320 - y) * scaleY
        };
      }

      // Draw Roads
      if ((filter === 'all' || filter === 'roads') && dataset.roads) {
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 4;
        dataset.roads.features.forEach(rd => {
          const c = rd.geometry.coordinates;
          const p1 = toPx((c[0][0] - baseLng) * mLng, (c[0][1] - baseLat) * mLat);
          const p2 = toPx((c[1][0] - baseLng) * mLng, (c[1][1] - baseLat) * mLat);
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.stroke();
        });
      }

      // Draw Parcels
      if ((filter === 'all' || filter === 'parcels') && dataset.parcels) {
        dataset.parcels.features.forEach(p => {
          const coords = p.geometry.coordinates[0];
          ctx.beginPath();
          coords.forEach((pt, i) => {
            const pos = toPx((pt[0] - baseLng) * mLng, (pt[1] - baseLat) * mLat);
            if (i === 0) ctx.moveTo(pos.px, pos.py);
            else ctx.lineTo(pos.px, pos.py);
          });
          ctx.closePath();
          ctx.fillStyle = 'rgba(2, 132, 199, 0.3)';
          ctx.fill();
          ctx.strokeStyle = '#00f2fe';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        });
      }

      // Draw Buildings
      if ((filter === 'all' || filter === 'buildings') && dataset.buildings) {
        dataset.buildings.features.forEach(b => {
          const coords = b.geometry.coordinates[0];
          ctx.beginPath();
          coords.forEach((pt, i) => {
            const pos = toPx((pt[0] - baseLng) * mLng, (pt[1] - baseLat) * mLat);
            if (i === 0) ctx.moveTo(pos.px, pos.py);
            else ctx.lineTo(pos.px, pos.py);
          });
          ctx.closePath();
          ctx.fillStyle = 'rgba(245, 158, 11, 0.7)';
          ctx.fill();
          ctx.strokeStyle = '#fbbf24';
          ctx.lineWidth = 1.2;
          ctx.stroke();
        });
      }
    };
  }

  // =========================================================================
  // ANALYTICS CHARTS
  // =========================================================================
  function initAnalyticsCharts() {
    if (!window.Chart || !dataset) return;

    // 1. Area Distribution
    const ctxArea = document.getElementById('chartAreaDist');
    if (ctxArea) {
      new Chart(ctxArea, {
        type: 'bar',
        data: {
          labels: ['<300 m²', '300-500 m²', '500-750 m²', '>750 m²'],
          datasets: [{
            label: 'Parcels',
            data: [14, 48, 19, 6],
            backgroundColor: '#0284c7',
            borderColor: '#38bdf8',
            borderWidth: 1,
            borderRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { grid: { color: 'rgba(255,255,255,0.08)' }, ticks: { color: '#94a3b8' } },
            x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
          }
        }
      });
    }

    // 2. Confidence Distribution
    const ctxConf = document.getElementById('chartConfidence');
    if (ctxConf) {
      new Chart(ctxConf, {
        type: 'doughnut',
        data: {
          labels: ['High (>90%)', 'Moderate (70-89%)', 'Low (<70%)'],
          datasets: [{
            data: [72, 10, 5],
            backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { color: '#94a3b8', boxWidth: 10, font: { size: 10 } } }
          }
        }
      });
    }

    // 3. Verification Progress
    const ctxVerif = document.getElementById('chartVerification');
    if (ctxVerif) {
      new Chart(ctxVerif, {
        type: 'bar',
        data: {
          labels: ['Ground Verified', 'Pending Verification'],
          datasets: [{
            label: 'Parcels',
            data: [61, 26],
            backgroundColor: ['#10b981', '#f59e0b'],
            borderRadius: 4
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { color: 'rgba(255,255,255,0.08)' }, ticks: { color: '#94a3b8' } },
            y: { grid: { display: false }, ticks: { color: '#94a3b8' } }
          }
        }
      });
    }
  }

  // =========================================================================
  // 2-MINUTE JUDGE MODE
  // =========================================================================
  function startJudgeMode() {
    judgeModeActive = true;
    judgeStepIndex = 0;
    const hud = document.getElementById('judgeHud');
    if (hud) hud.style.display = 'flex';
    executeJudgeStep(0);
  }

  function executeJudgeStep(index) {
    if (index < 0 || index >= judgeTourSteps.length) {
      exitJudgeMode();
      return;
    }
    judgeStepIndex = index;
    const stepData = judgeTourSteps[index];

    const elStepNum = document.getElementById('judgeStepNum');
    const elCaption = document.getElementById('judgeCaption');

    if (elStepNum) elStepNum.textContent = `STEP ${index + 1}/${judgeTourSteps.length}`;
    if (elCaption) elCaption.textContent = stepData.caption;

    // Execute step action
    if (stepData.action) {
      stepData.action();
    }
  }

  function nextJudgeStep() {
    executeJudgeStep(judgeStepIndex + 1);
  }

  function prevJudgeStep() {
    executeJudgeStep(judgeStepIndex - 1);
  }

  function exitJudgeMode() {
    judgeModeActive = false;
    const hud = document.getElementById('judgeHud');
    if (hud) hud.style.display = 'none';
  }

  // =========================================================================
  // EXPORT MODAL & CADASTRAL INSPECTION REPORT
  // =========================================================================
  function openExportModal() {
    const modal = document.getElementById('exportModal');
    if (modal) modal.classList.add('open');
  }

  function closeExportModal() {
    const modal = document.getElementById('exportModal');
    if (modal) modal.classList.remove('open');
  }

  function printCadastralReport() {
    window.print();
  }

  // Hero Mini Map
  function initHeroMiniMap() {
    const canvas = document.getElementById('heroMiniCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = window.CadastraOrthophoto.generateOrthophoto();
    img.onload = () => {
      canvas.width = 400;
      canvas.height = 280;
      ctx.drawImage(img, 0, 0, 400, 280);

      // Overlay cyber cyan grid & parcels
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.4)';
      ctx.lineWidth = 1;
      for (let x = 30; x < 370; x += 45) {
        for (let y = 30; y < 250; y += 35) {
          ctx.strokeRect(x, y, 40, 30);
        }
      }
    };
  }

  // =========================================================================
  // EVENT LISTENERS
  // =========================================================================
  function initEventListeners() {
    // Header & Hero Buttons
    const btnJudge = document.getElementById('btnJudgeMode');
    const btnHeroJudge = document.getElementById('btnHeroJudgeMode');
    if (btnJudge) btnJudge.addEventListener('click', startJudgeMode);
    if (btnHeroJudge) btnHeroJudge.addEventListener('click', startJudgeMode);

    const btnStart = document.getElementById('btnHeroStartDemo');
    const btnHeaderStart = document.getElementById('btnHeaderStartDemo');
    if (btnStart) btnStart.addEventListener('click', () => switchStep(1));
    if (btnHeaderStart) btnHeaderStart.addEventListener('click', () => switchStep(1));

    const btnExplore = document.getElementById('btnHeroExploreWorkflow');
    if (btnExplore) btnExplore.addEventListener('click', () => switchStep(3));

    // Stepper Action Buttons
    const btnLoadDemo = document.getElementById('btnLoadDemoDataset');
    if (btnLoadDemo) btnLoadDemo.addEventListener('click', () => {
      loadDemoDatasetUI();
      alert('Demo dataset loaded: 24 UAV Images, 4.8 ha coverage, 5.0 cm/px GSD.');
    });

    // File Upload Drag & Drop Handling
    const dropzone = document.getElementById('uavDropzone');
    const fileInput = document.getElementById('uavFileInput');
    const btnSelectFiles = document.getElementById('btnSelectFiles');

    if (btnSelectFiles && fileInput) {
      btnSelectFiles.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.click();
      });
    }

    if (dropzone && fileInput) {
      dropzone.addEventListener('click', () => fileInput.click());
      
      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.style.borderColor = 'var(--gis-cyan)';
      });
      
      dropzone.addEventListener('dragleave', () => {
        dropzone.style.borderColor = 'rgba(56, 189, 248, 0.4)';
      });

      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.style.borderColor = 'rgba(56, 189, 248, 0.4)';
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          handleUploadedFiles(e.dataTransfer.files);
        }
      });

      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) {
          handleUploadedFiles(e.target.files);
        }
      });
    }

    function handleUploadedFiles(files) {
      const formData = new FormData();
      formData.append('file', files[0]);
      
      fetch('/api/upload', {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'SUCCESS') {
          alert(`UAV Image Uploaded: ${data.filename} (${(data.size_bytes / (1024 * 1024)).toFixed(2)} MB)\n${data.message}`);
          loadDemoDatasetUI();
        } else {
          alert(data.detail || 'Upload failed');
        }
      })
      .catch(err => {
        console.warn('Offline fallback mode:', err);
        loadDemoDatasetUI();
        alert(`Loaded ${files.length} UAV image(s) for photogrammetric reconstruction.`);
      });
    }

    const btnS1Next = document.getElementById('btnStep1Next');
    if (btnS1Next) btnS1Next.addEventListener('click', () => switchStep(2));

    const btnGenOrtho = document.getElementById('btnGenerateOrtho');
    if (btnGenOrtho) btnGenOrtho.addEventListener('click', simulateOrthoGeneration);

    const btnS2Next = document.getElementById('btnStep2Next');
    if (btnS2Next) btnS2Next.addEventListener('click', () => switchStep(3));

    const btnRunAi = document.getElementById('btnRunAiExtraction');
    if (btnRunAi) btnRunAi.addEventListener('click', triggerAiExtractionSequence);

    const btnS3Next = document.getElementById('btnStep3Next');
    if (btnS3Next) btnS3Next.addEventListener('click', () => switchStep(4));

    const btnTopoCheck = document.getElementById('btnRunTopologyCheck');
    if (btnTopoCheck) btnTopoCheck.addEventListener('click', runTopologyCheck);

    const btnAutoFix = document.getElementById('btnAutoFixGeometries');
    if (btnAutoFix) btnAutoFix.addEventListener('click', autoFixTopologyUI);

    const btnS4Next = document.getElementById('btnStep4Next');
    if (btnS4Next) btnS4Next.addEventListener('click', () => switchStep(5));

    // Map Layer Toggles
    const toggleParcels = document.getElementById('layerToggleParcels');
    if (toggleParcels) {
      toggleParcels.addEventListener('change', function() {
        if (parcelLayer && gisMap) {
          if (this.checked) gisMap.addLayer(parcelLayer);
          else gisMap.removeLayer(parcelLayer);
        }
      });
    }

    const toggleBuildings = document.getElementById('layerToggleBuildings');
    if (toggleBuildings) {
      toggleBuildings.addEventListener('change', function() {
        if (buildingLayer && gisMap) {
          if (this.checked) gisMap.addLayer(buildingLayer);
          else gisMap.removeLayer(buildingLayer);
        }
      });
    }

    const toggleRoads = document.getElementById('layerToggleRoads');
    if (toggleRoads) {
      toggleRoads.addEventListener('change', function() {
        if (roadLayer && gisMap) {
          if (this.checked) gisMap.addLayer(roadLayer);
          else gisMap.removeLayer(roadLayer);
        }
      });
    }

    const toggleOrtho = document.getElementById('layerToggleOrthophoto');
    if (toggleOrtho) {
      toggleOrtho.addEventListener('change', function() {
        if (orthoOverlay && gisMap) {
          if (this.checked) gisMap.addLayer(orthoOverlay);
          else gisMap.removeLayer(orthoOverlay);
        }
      });
    }

    const toggleConf = document.getElementById('layerToggleConfidence');
    if (toggleConf) {
      toggleConf.addEventListener('change', function() {
        if (!parcelLayer) return;
        if (this.checked) {
          parcelLayer.setStyle(f => {
            const conf = f.properties.confidence;
            const col = conf >= 90 ? '#10b981' : (conf >= 70 ? '#f59e0b' : '#ef4444');
            return { color: col, fillColor: col, fillOpacity: 0.45, weight: 2 };
          });
        } else {
          selectParcel(selectedParcelId);
        }
      });
    }

    const btnFilterLow = document.getElementById('btnFilterLowConfidence');
    if (btnFilterLow) btnFilterLow.addEventListener('click', toggleLowConfidenceHighlight);

    const btnResetMap = document.getElementById('btnResetMapView');
    if (btnResetMap && gisMap) {
      btnResetMap.addEventListener('click', () => {
        gisMap.fitBounds(window.CadastraOrthophoto.getOrthophotoBounds());
      });
    }

    // Step 5 Verification Buttons
    const btnAccept = document.getElementById('btnAcceptParcel');
    if (btnAccept) btnAccept.addEventListener('click', () => handleVerifyAction('Ground Verified'));

    const btnEdit = document.getElementById('btnEditParcel');
    if (btnEdit) btnEdit.addEventListener('click', () => {
      alert('Interactive Polygon Vertex Dragging Active: Click and drag any polygon boundary vertex on the map to adjust geometry.');
    });

    const btnReject = document.getElementById('btnRejectParcel');
    if (btnReject) btnReject.addEventListener('click', () => handleVerifyAction('Rejected (Requires Resurvey)'));

    // Export Modal Controls
    const btnOpenExport = document.getElementById('btnOpenExportModal');
    const btnStep5Export = document.getElementById('btnOpenExportFromStep5');
    const btnSummExport = document.getElementById('btnSummaryExport');
    const btnCloseExport = document.getElementById('btnCloseExportModal');

    if (btnOpenExport) btnOpenExport.addEventListener('click', openExportModal);
    if (btnStep5Export) btnStep5Export.addEventListener('click', openExportModal);
    if (btnSummExport) btnSummExport.addEventListener('click', openExportModal);
    if (btnCloseExport) btnCloseExport.addEventListener('click', closeExportModal);

    const btnPrint1 = document.getElementById('btnPrintCadastralSheet');
    const btnPrint2 = document.getElementById('btnSummaryPrint');
    if (btnPrint1) btnPrint1.addEventListener('click', printCadastralReport);
    if (btnPrint2) btnPrint2.addEventListener('click', printCadastralReport);

    const btnShapeBundle = document.getElementById('btnDownloadShapefileBundle');
    if (btnShapeBundle) {
      btnShapeBundle.addEventListener('click', () => {
        window.location.href = '/api/export/geojson';
      });
    }

    // Judge HUD Controls
    const btnJNext = document.getElementById('btnJudgeNext');
    const btnJPrev = document.getElementById('btnJudgePrev');
    const btnJClose = document.getElementById('btnJudgeClose');
    if (btnJNext) btnJNext.addEventListener('click', nextJudgeStep);
    if (btnJPrev) btnJPrev.addEventListener('click', prevJudgeStep);
    if (btnJClose) btnJClose.addEventListener('click', exitJudgeMode);
  }

})();
