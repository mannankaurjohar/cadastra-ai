/**
 * CadastraAI Procedural High-Resolution Drone Orthophoto Generator
 * Multi-Zone Synthesizer for SIH 2026 PS-26012
 */
window.CadastraOrthophoto = (function() {
  const WIDTH = 1800;
  const HEIGHT = 1500;
  const cachedOrthophotos = {};
  const cachedThumbnails = {};

  function getActiveData() {
    return window.CADASTRA_DATA || (window.CADASTRA_DATASETS && window.CADASTRA_DATASETS.datasets ? window.CADASTRA_DATASETS.datasets['bengaluru_urban'] : null);
  }

  function generateOrthophoto(zoneId) {
    const data = getActiveData();
    const currentZone = zoneId || (data ? data.zone_id : 'bengaluru_urban');

    if (cachedOrthophotos[currentZone]) {
      return cachedOrthophotos[currentZone];
    }

    const canvas = document.createElement('canvas');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    const ctx = canvas.getContext('2d');

    // Base Terrain Gradient based on zone
    const bgGrad = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
    if (currentZone === 'varanasi_dense') {
      bgGrad.addColorStop(0, '#3d3832');
      bgGrad.addColorStop(0.5, '#453e36');
      bgGrad.addColorStop(1, '#342f28');
    } else if (currentZone === 'svamitva_periurban') {
      bgGrad.addColorStop(0, '#424f33');
      bgGrad.addColorStop(0.5, '#4e5d3c');
      bgGrad.addColorStop(1, '#3a462b');
    } else {
      bgGrad.addColorStop(0, '#384333');
      bgGrad.addColorStop(0.5, '#404c3a');
      bgGrad.addColorStop(1, '#333e2f');
    }
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Terrain Texture Noise
    for (let i = 0; i < 3500; i++) {
      const rx = Math.random() * WIDTH;
      const ry = Math.random() * HEIGHT;
      const rrad = Math.random() * 7 + 2;
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(70, 85, 55, 0.15)' : 'rgba(45, 40, 32, 0.18)';
      ctx.beginPath();
      ctx.arc(rx, ry, rrad, 0, Math.PI * 2);
      ctx.fill();
    }

    const padX = 60;
    const padY = 60;
    const scaleX = (WIDTH - 120) / 400;
    const scaleY = (HEIGHT - 120) / 340;

    function toPx(x, y) {
      return {
        px: padX + (x + 20) * scaleX,
        py: padY + (320 - y) * scaleY
      };
    }

    if (data && data.parcels) {
      const bounds = data.bounds;
      const baseLat = bounds ? bounds.center[1] - (150 / 111000.0) : 12.97160;
      const baseLng = bounds ? bounds.center[0] - (180 / (111000.0 * Math.cos(baseLat * Math.PI / 180))) : 77.59460;
      const mLat = 111000.0;
      const mLng = 111000.0 * Math.cos(baseLat * Math.PI / 180);

      // 1. Draw Parcels (Lawns / Courtyards / Farmland)
      data.parcels.features.forEach((p, idx) => {
        const coords = p.geometry.coordinates[0];
        ctx.beginPath();
        coords.forEach((pt, i) => {
          const mx = (pt[0] - baseLng) * mLng;
          const my = (pt[1] - baseLat) * mLat;
          const pos = toPx(mx, my);
          if (i === 0) ctx.moveTo(pos.px, pos.py);
          else ctx.lineTo(pos.px, pos.py);
        });
        ctx.closePath();

        let lawnColors = ['#445638', '#4b5f3d', '#506441', '#3d4d32', '#586b45'];
        if (currentZone === 'varanasi_dense') {
          lawnColors = ['#4a453d', '#524c43', '#3f3a32', '#595248'];
        } else if (currentZone === 'svamitva_periurban') {
          lawnColors = ['#4f6338', '#5b7340', '#637e45', '#485b32'];
        }
        ctx.fillStyle = lawnColors[idx % lawnColors.length];
        ctx.fill();

        ctx.strokeStyle = 'rgba(25, 35, 18, 0.4)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Garden trees & landscaping
        const centerPt = coords[0];
        const cmx = (centerPt[0] - baseLng) * mLng;
        const cmy = (centerPt[1] - baseLat) * mLat;
        const cpos = toPx(cmx, cmy);

        if (currentZone !== 'varanasi_dense') {
          for (let t = 0; t < (idx % 3 + 1); t++) {
            const tx = cpos.px + (t * 12) - 6;
            const ty = cpos.py + (t * 8) - 4;
            ctx.fillStyle = 'rgba(12, 18, 10, 0.35)';
            ctx.beginPath();
            ctx.arc(tx + 4, ty + 4, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = t % 2 === 0 ? '#2c451d' : '#385723';
            ctx.beginPath();
            ctx.arc(tx, ty, 5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // 2. Draw Pathways / Access Corridors
      if (data.pathways) {
        data.pathways.features.forEach(pw => {
          const c = pw.geometry.coordinates;
          const p1 = toPx((c[0][0] - baseLng) * mLng, (c[0][1] - baseLat) * mLat);
          const p2 = toPx((c[1][0] - baseLng) * mLng, (c[1][1] - baseLat) * mLat);
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.strokeStyle = '#a3a39e';
          ctx.lineWidth = 4.5;
          ctx.stroke();
        });
      }

      // 3. Draw Roads
      if (data.roads) {
        data.roads.features.forEach(rd => {
          const coords = rd.geometry.coordinates;
          const wMeters = rd.properties.width_meters || 12;
          const wPx = wMeters * scaleX;

          const p1 = toPx((coords[0][0] - baseLng) * mLng, (coords[0][1] - baseLat) * mLat);
          const p2 = toPx((coords[1][0] - baseLng) * mLng, (coords[1][1] - baseLat) * mLat);

          // Curb
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.strokeStyle = '#7c7c78';
          ctx.lineWidth = wPx + 5;
          ctx.lineCap = 'square';
          ctx.stroke();

          // Asphalt
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.strokeStyle = '#222426';
          ctx.lineWidth = wPx;
          ctx.stroke();

          // Centerline marking
          if (wMeters >= 12) {
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = 'rgba(245, 245, 235, 0.8)';
            ctx.lineWidth = 1.6;
            ctx.setLineDash([12, 10]);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        });
      }

      // 4. Draw Buildings with Sun Shadows
      if (data.buildings) {
        const shadowOffsetX = 6;
        const shadowOffsetY = 8;

        data.buildings.features.forEach((b, bidx) => {
          const coords = b.geometry.coordinates[0];
          const roofType = b.properties.roof_type || 'Flat Concrete';
          const stories = b.properties.stories || 2;
          const sMult = stories * 0.85;

          // Shadow
          ctx.beginPath();
          coords.forEach((pt, i) => {
            const mx = (pt[0] - baseLng) * mLng;
            const my = (pt[1] - baseLat) * mLat;
            const pos = toPx(mx, my);
            if (i === 0) ctx.moveTo(pos.px + shadowOffsetX * sMult, pos.py + shadowOffsetY * sMult);
            else ctx.lineTo(pos.px + shadowOffsetX * sMult, pos.py + shadowOffsetY * sMult);
          });
          ctx.closePath();
          ctx.fillStyle = 'rgba(14, 18, 16, 0.5)';
          ctx.fill();

          // Rooftop
          ctx.beginPath();
          coords.forEach((pt, i) => {
            const mx = (pt[0] - baseLng) * mLng;
            const my = (pt[1] - baseLat) * mLat;
            const pos = toPx(mx, my);
            if (i === 0) ctx.moveTo(pos.px, pos.py);
            else ctx.lineTo(pos.px, pos.py);
          });
          ctx.closePath();

          if (roofType.includes('Terrace') || roofType.includes('Solar')) {
            ctx.fillStyle = '#9ca3af';
            ctx.fill();
            ctx.strokeStyle = '#4b5563';
            ctx.lineWidth = 1.2;
            ctx.stroke();

            const p0 = toPx((coords[0][0] - baseLng) * mLng, (coords[0][1] - baseLat) * mLat);
            const p2 = toPx((coords[2][0] - baseLng) * mLng, (coords[2][1] - baseLat) * mLat);
            const minx = Math.min(p0.px, p2.px) + 4;
            const miny = Math.min(p0.py, p2.py) + 4;
            const bw = Math.abs(p2.px - p0.px) - 8;
            const bh = Math.abs(p2.py - p0.py) - 8;
            if (bw > 12 && bh > 12) {
              ctx.fillStyle = '#1e3a8a';
              ctx.fillRect(minx, miny, bw * 0.65, bh * 0.55);
            }
          } else if (roofType.includes('Pitched') || currentZone === 'varanasi_dense') {
            ctx.fillStyle = (bidx % 2 === 0) ? '#a14a34' : '#b8593f';
            ctx.fill();
            ctx.strokeStyle = '#68291c';
            ctx.lineWidth = 1.2;
            ctx.stroke();
          } else {
            const shades = ['#cbd5e1', '#d1d5db', '#e2e8f0', '#94a3b8'];
            ctx.fillStyle = shades[bidx % shades.length];
            ctx.fill();
            ctx.strokeStyle = '#475569';
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        });
      }
    }

    // Survey Stamp
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = '11px "JetBrains Mono", monospace';
    ctx.fillText(`UAV CADASTRE: ${currentZone.toUpperCase()} | GSD: 5.0 cm/px | SIH 2026 PS-26012 | METRIC ORTHOPHOTO`, 24, HEIGHT - 20);

    cachedOrthophotos[currentZone] = canvas.toDataURL('image/jpeg', 0.92);
    return cachedOrthophotos[currentZone];
  }

  function getOrthophotoBounds() {
    const data = getActiveData();
    if (!data || !data.bounds) {
      return [[12.9711, 77.5941], [12.9749, 77.5985]];
    }
    const b = data.bounds;
    return [
      [b.min_lat, b.min_lng],
      [b.max_lat, b.max_lng]
    ];
  }

  function generateDroneThumbnails(zoneId) {
    const data = getActiveData();
    const currentZone = zoneId || (data ? data.zone_id : 'bengaluru_urban');

    if (cachedThumbnails[currentZone]) {
      return cachedThumbnails[currentZone];
    }

    const uavList = (data && data.uav_images) ? data.uav_images : [];
    const thumbnails = [];

    uavList.forEach((img, i) => {
      const c = document.createElement('canvas');
      c.width = 240;
      c.height = 160;
      const ctx = c.getContext('2d');

      const grad = ctx.createLinearGradient(0, 0, 240, 160);
      grad.addColorStop(0, i % 2 === 0 ? '#384433' : '#42382e');
      grad.addColorStop(1, '#2a3126');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 240, 160);

      // Structure snippet
      ctx.fillStyle = i % 3 === 0 ? '#a14a34' : '#94a3b8';
      ctx.fillRect(40 + (i * 7) % 100, 30 + (i * 11) % 60, 60, 45);
      ctx.strokeStyle = '#1e293b';
      ctx.strokeRect(40 + (i * 7) % 100, 30 + (i * 11) % 60, 60, 45);

      // Road slice
      ctx.fillStyle = '#222426';
      ctx.fillRect(0, 100, 240, 35);

      // Tie points (SIFT/ORB matching)
      for (let k = 0; k < 26; k++) {
        const kx = (k * 37 + i * 19) % 220 + 10;
        const ky = (k * 23 + i * 29) % 140 + 10;
        ctx.strokeStyle = '#0284c7';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(kx, ky, 3, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = 'rgba(2, 132, 199, 0.4)';
        ctx.fill();
      }

      // Camera HUD overlay
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(110, 80); ctx.lineTo(130, 80);
      ctx.moveTo(120, 70); ctx.lineTo(120, 90);
      ctx.stroke();

      // Top info bar
      ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
      ctx.fillRect(6, 6, 228, 20);
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 9px "JetBrains Mono", monospace';
      ctx.fillText(`FRAME #${img.sequence.toString().padStart(2, '0')} | ${img.image_id}`, 10, 19);

      // Bottom info bar
      ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
      ctx.fillRect(6, 134, 228, 20);
      ctx.fillStyle = '#10b981';
      ctx.font = '8px "JetBrains Mono", monospace';
      ctx.fillText(`ALT: ${img.altitude_agl_m}m | GSD: ${img.gsd_cm_px}cm | RTK: ${img.rtk_status}`, 10, 147);

      thumbnails.push({
        image_id: img.image_id,
        sequence: img.sequence,
        dataUrl: c.toDataURL('image/jpeg', 0.85),
        metadata: img
      });
    });

    cachedThumbnails[currentZone] = thumbnails;
    return thumbnails;
  }

  function clearCache() {
    for (let k in cachedOrthophotos) delete cachedOrthophotos[k];
    for (let k in cachedThumbnails) delete cachedThumbnails[k];
  }

  return {
    generateOrthophoto,
    getOrthophotoBounds,
    generateDroneThumbnails,
    clearCache
  };
})();
