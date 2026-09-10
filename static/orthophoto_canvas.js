/**
 * CadastraAI Procedural High-Resolution Drone Orthophoto Generator
 * Creates photorealistic 4.8 ha urban aerial raster canvas and 24 individual drone capture tiles.
 */
window.CadastraOrthophoto = (function() {
  const WIDTH = 1800;
  const HEIGHT = 1500;
  let cachedOrthophotoDataURL = null;
  const cachedThumbnails = [];

  function generateOrthophoto() {
    if (cachedOrthophotoDataURL) return cachedOrthophotoDataURL;

    const canvas = document.createElement('canvas');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    const ctx = canvas.getContext('2d');

    // 1. Base Soil & Natural Terrain Background
    const bgGrad = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
    bgGrad.addColorStop(0, '#3a4434');
    bgGrad.addColorStop(0.5, '#424c3a');
    bgGrad.addColorStop(1, '#363e30');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Add terrain texture noise
    for (let i = 0; i < 4000; i++) {
      const rx = Math.random() * WIDTH;
      const ry = Math.random() * HEIGHT;
      const rrad = Math.random() * 8 + 2;
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(75, 90, 60, 0.15)' : 'rgba(50, 45, 35, 0.18)';
      ctx.beginPath();
      ctx.arc(rx, ry, rrad, 0, Math.PI * 2);
      ctx.fill();
    }

    // Helper: Map metric local coords (0 to 380m X, 0 to 320m Y) to canvas pixels
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

    // 2. Draw Parcel Lot Basements / Garden Lawns
    if (window.CADASTRA_DATA && window.CADASTRA_DATA.parcels) {
      const baseLat = 12.97160;
      const baseLng = 77.59460;
      const mLat = 111000.0;
      const mLng = 111000.0 * Math.cos(baseLat * Math.PI / 180);

      window.CADASTRA_DATA.parcels.features.forEach((p, idx) => {
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

        // Lot lawn texture
        const lawnColors = ['#465839', '#4d613e', '#526642', '#3f4f33', '#5a6d47', '#425337'];
        ctx.fillStyle = lawnColors[idx % lawnColors.length];
        ctx.fill();

        // Plot subtle boundary hedges
        ctx.strokeStyle = 'rgba(30, 40, 20, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Add subtle garden trees / driveways
        const centerPt = coords[0];
        const cmx = (centerPt[0] - baseLng) * mLng;
        const cmy = (centerPt[1] - baseLat) * mLat;
        const cpos = toPx(cmx, cmy);

        // Driveway gravel strip
        ctx.fillStyle = 'rgba(160, 155, 145, 0.45)';
        ctx.fillRect(cpos.px + 4, cpos.py + 4, 12, 28);

        // Trees with drop shadows
        for (let t = 0; t < (idx % 3 + 1); t++) {
          const tx = cpos.px + (t * 14) - 8;
          const ty = cpos.py + (t * 10) - 6;
          // shadow
          ctx.fillStyle = 'rgba(10, 15, 8, 0.4)';
          ctx.beginPath();
          ctx.arc(tx + 4, ty + 5, 6, 0, Math.PI * 2);
          ctx.fill();
          // tree foliage
          ctx.fillStyle = t % 2 === 0 ? '#2d471e' : '#395924';
          ctx.beginPath();
          ctx.arc(tx, ty, 6, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    }

    // 3. Draw Road Corridors & Asphalt
    if (window.CADASTRA_DATA && window.CADASTRA_DATA.roads) {
      const baseLat = 12.97160;
      const baseLng = 77.59460;
      const mLat = 111000.0;
      const mLng = 111000.0 * Math.cos(baseLat * Math.PI / 180);

      // Road sub-base / curbs
      window.CADASTRA_DATA.roads.features.forEach(rd => {
        const coords = rd.geometry.coordinates;
        const wMeters = rd.properties.width_meters || 12;
        const wPx = wMeters * scaleX;

        const p1 = toPx((coords[0][0] - baseLng) * mLng, (coords[0][1] - baseLat) * mLat);
        const p2 = toPx((coords[1][0] - baseLng) * mLng, (coords[1][1] - baseLat) * mLat);

        // Road curb/sidewalk
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.strokeStyle = '#8c8c88';
        ctx.lineWidth = wPx + 6;
        ctx.lineCap = 'square';
        ctx.stroke();

        // Asphalt surface
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.strokeStyle = '#232528';
        ctx.lineWidth = wPx;
        ctx.stroke();

        // Road centerline markings (white dashed)
        if (wMeters >= 12) {
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.strokeStyle = 'rgba(240, 240, 230, 0.85)';
          ctx.lineWidth = 1.8;
          ctx.setLineDash([12, 10]);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Road edge lines (solid white)
        if (wMeters >= 16) {
          const angle = Math.atan2(p2.py - p1.py, p2.px - p1.px) + Math.PI / 2;
          const offset = (wPx / 2) - 3;
          const ox = Math.cos(angle) * offset;
          const oy = Math.sin(angle) * offset;

          ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
          ctx.lineWidth = 1.2;

          ctx.beginPath();
          ctx.moveTo(p1.px + ox, p1.py + oy);
          ctx.lineTo(p2.px + ox, p2.py + oy);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(p1.px - ox, p1.py - oy);
          ctx.lineTo(p2.px - ox, p2.py - oy);
          ctx.stroke();
        }
      });
    }

    // 4. Draw Building Footprints (Rooftops + Realistic Sun Shadows)
    if (window.CADASTRA_DATA && window.CADASTRA_DATA.buildings) {
      const baseLat = 12.97160;
      const baseLng = 77.59460;
      const mLat = 111000.0;
      const mLng = 111000.0 * Math.cos(baseLat * Math.PI / 180);

      // Sun angle: from North-West -> shadows cast to South-East (+7px, +9px)
      const shadowOffsetX = 7;
      const shadowOffsetY = 9;

      window.CADASTRA_DATA.buildings.features.forEach((b, bidx) => {
        const coords = b.geometry.coordinates[0];
        const roofType = b.properties.roof_type;
        const stories = b.properties.stories || 2;
        const sMult = stories * 0.9;

        // A. Drop Shadow
        ctx.beginPath();
        coords.forEach((pt, i) => {
          const mx = (pt[0] - baseLng) * mLng;
          const my = (pt[1] - baseLat) * mLat;
          const pos = toPx(mx, my);
          if (i === 0) ctx.moveTo(pos.px + shadowOffsetX * sMult, pos.py + shadowOffsetY * sMult);
          else ctx.lineTo(pos.px + shadowOffsetX * sMult, pos.py + shadowOffsetY * sMult);
        });
        ctx.closePath();
        ctx.fillStyle = 'rgba(15, 20, 18, 0.55)';
        ctx.fill();

        // B. Building Rooftop Base
        ctx.beginPath();
        coords.forEach((pt, i) => {
          const mx = (pt[0] - baseLng) * mLng;
          const my = (pt[1] - baseLat) * mLat;
          const pos = toPx(mx, my);
          if (i === 0) ctx.moveTo(pos.px, pos.py);
          else ctx.lineTo(pos.px, pos.py);
        });
        ctx.closePath();

        // Roof palette based on type
        if (roofType.includes('Terrace with Solar')) {
          ctx.fillStyle = '#9e9c96'; // concrete slab
          ctx.fill();
          ctx.strokeStyle = '#5a5854';
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Add solar panels (dark navy rectangles)
          const p0 = toPx((coords[0][0] - baseLng) * mLng, (coords[0][1] - baseLat) * mLat);
          const p2 = toPx((coords[2][0] - baseLng) * mLng, (coords[2][1] - baseLat) * mLat);
          const minx = Math.min(p0.px, p2.px) + 5;
          const miny = Math.min(p0.py, p2.py) + 5;
          const bw = Math.abs(p2.px - p0.px) - 10;
          const bh = Math.abs(p2.py - p0.py) - 10;

          if (bw > 15 && bh > 15) {
            ctx.fillStyle = '#0f2b48';
            ctx.fillRect(minx, miny, bw * 0.7, bh * 0.6);
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 0.8;
            ctx.strokeRect(minx, miny, bw * 0.7, bh * 0.6);
          }
        } else if (roofType.includes('Pitched Tile')) {
          ctx.fillStyle = (bidx % 2 === 0) ? '#a6533c' : '#bd6547'; // terra-cotta
          ctx.fill();
          ctx.strokeStyle = '#6e3020';
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Ridge line
          const p0 = toPx((coords[0][0] - baseLng) * mLng, (coords[0][1] - baseLat) * mLat);
          const p1 = toPx((coords[1][0] - baseLng) * mLng, (coords[1][1] - baseLat) * mLat);
          const p2 = toPx((coords[2][0] - baseLng) * mLng, (coords[2][1] - baseLat) * mLat);
          const p3 = toPx((coords[3][0] - baseLng) * mLng, (coords[3][1] - baseLat) * mLat);

          ctx.beginPath();
          ctx.moveTo((p0.px + p3.px) / 2, (p0.py + p3.py) / 2);
          ctx.lineTo((p1.px + p2.px) / 2, (p1.py + p2.py) / 2);
          ctx.strokeStyle = 'rgba(255, 230, 210, 0.6)';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        } else if (roofType.includes('Commercial Structure')) {
          ctx.fillStyle = '#b5bcc7'; // metallic grey
          ctx.fill();
          ctx.strokeStyle = '#64748b';
          ctx.lineWidth = 2;
          ctx.stroke();

          // Industrial corrugation lines
          const p0 = toPx((coords[0][0] - baseLng) * mLng, (coords[0][1] - baseLat) * mLat);
          const p2 = toPx((coords[2][0] - baseLng) * mLng, (coords[2][1] - baseLat) * mLat);
          const minx = Math.min(p0.px, p2.px) + 4;
          const miny = Math.min(p0.py, p2.py) + 4;
          const maxx = Math.max(p0.px, p2.px) - 4;
          const maxy = Math.max(p0.py, p2.py) - 4;

          ctx.strokeStyle = 'rgba(100, 116, 139, 0.4)';
          ctx.lineWidth = 1;
          for (let ly = miny; ly < maxy; ly += 6) {
            ctx.beginPath();
            ctx.moveTo(minx, ly);
            ctx.lineTo(maxx, ly);
            ctx.stroke();
          }
        } else {
          // Flat Reinforced Concrete Roof
          const concreteShades = ['#cbd5e1', '#d1d5db', '#e2e8f0', '#94a3b8'];
          ctx.fillStyle = concreteShades[bidx % concreteShades.length];
          ctx.fill();
          ctx.strokeStyle = '#475569';
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Rooftop HVAC / water tank
          const p0 = toPx((coords[0][0] - baseLng) * mLng, (coords[0][1] - baseLat) * mLat);
          ctx.fillStyle = '#1e293b';
          ctx.fillRect(p0.px + 6, p0.py + 6, 8, 8);
        }
      });
    }

    // 5. Add Subtle Drone Survey Stamp Watermark in bottom corner
    ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
    ctx.font = '11px "JetBrains Mono", monospace';
    ctx.fillText('UAV SURVEY MISSION: BLR-SEC4-2026 | GSD: 5.0 cm/px | RTK-FIXED | ORTHOMOSAIC v2.4', 24, HEIGHT - 20);

    cachedOrthophotoDataURL = canvas.toDataURL('image/jpeg', 0.92);
    return cachedOrthophotoDataURL;
  }

  function getOrthophotoBounds() {
    if (!window.CADASTRA_DATA || !window.CADASTRA_DATA.bounds) {
      return [[12.9711, 77.5941], [12.9749, 77.5985]];
    }
    const b = window.CADASTRA_DATA.bounds;
    return [
      [b.min_lat, b.min_lng],
      [b.max_lat, b.max_lng]
    ];
  }

  function generateDroneThumbnails() {
    if (cachedThumbnails.length > 0) return cachedThumbnails;

    const uavList = (window.CADASTRA_DATA && window.CADASTRA_DATA.uav_images) ? window.CADASTRA_DATA.uav_images : [];
    
    uavList.forEach((img, i) => {
      const c = document.createElement('canvas');
      c.width = 240;
      c.height = 160;
      const ctx = c.getContext('2d');

      // Aerial background snippet
      const grad = ctx.createLinearGradient(0, 0, 240, 160);
      grad.addColorStop(0, i % 2 === 0 ? '#384633' : '#45382e');
      grad.addColorStop(1, '#2c3328');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 240, 160);

      // Draw simulated roof shapes
      ctx.fillStyle = i % 3 === 0 ? '#a6533c' : '#94a3b8';
      ctx.fillRect(40 + (i * 7) % 100, 30 + (i * 11) % 60, 60, 45);
      ctx.strokeStyle = '#1e293b';
      ctx.strokeRect(40 + (i * 7) % 100, 30 + (i * 11) % 60, 60, 45);

      // Road slice
      ctx.fillStyle = '#232528';
      ctx.fillRect(0, 100, 240, 35);
      ctx.strokeStyle = '#f8fafc';
      ctx.setLineDash([8, 8]);
      ctx.beginPath();
      ctx.moveTo(0, 117);
      ctx.lineTo(240, 117);
      ctx.stroke();
      ctx.setLineDash([]);

      // Photogrammetry SIFT Keypoints (Green circles)
      for (let k = 0; k < 28; k++) {
        const kx = (k * 37 + i * 19) % 220 + 10;
        const ky = (k * 23 + i * 29) % 140 + 10;
        ctx.strokeStyle = '#00f2fe';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(kx, ky, 3.5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = 'rgba(0, 242, 254, 0.4)';
        ctx.fill();
      }

      // Camera HUD overlay
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.lineWidth = 1.2;
      // Crosshair center
      ctx.beginPath();
      ctx.moveTo(110, 80); ctx.lineTo(130, 80);
      ctx.moveTo(120, 70); ctx.lineTo(120, 90);
      ctx.stroke();

      // Top badge
      ctx.fillStyle = 'rgba(11, 19, 43, 0.85)';
      ctx.fillRect(6, 6, 228, 22);
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 9px "JetBrains Mono", monospace';
      ctx.fillText(`IMG #${img.sequence.toString().padStart(2, '0')} | ${img.image_id}`, 10, 20);

      // Bottom telemetry
      ctx.fillStyle = 'rgba(11, 19, 43, 0.85)';
      ctx.fillRect(6, 134, 228, 20);
      ctx.fillStyle = '#10b981';
      ctx.font = '8px "JetBrains Mono", monospace';
      ctx.fillText(`ALT: 120m | GSD: 5cm | RTK: ${img.rtk_status}`, 10, 147);

      cachedThumbnails.push({
        image_id: img.image_id,
        sequence: img.sequence,
        dataUrl: c.toDataURL('image/jpeg', 0.85),
        metadata: img
      });
    });

    return cachedThumbnails;
  }

  return {
    generateOrthophoto,
    getOrthophotoBounds,
    generateDroneThumbnails
  };
})();
