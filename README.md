# CadastraAI — AI-Powered Urban Parcel Mapping & Cadastral Feature Extraction

> **Smart India Hackathon Problem Statement 26012**  
> *“From drone imagery to verification-ready parcel maps — automatically.”*

---

## 🎯 Executive Summary & Objective

**CadastraAI** is an AI-based geospatial system built for municipal authorities, survey departments, and urban development agencies. It automates the difficult preliminary stage of cadastral surveying: converting raw, high-resolution UAV (drone) imagery into topologically validated, verification-ready preliminary GIS parcel maps, building footprints, and road corridors.

### 🛡️ Responsible AI & Legal Cadastral Notice
> **CadastraAI strictly automates preliminary spatial extraction.**  
> **CadastraAI does NOT determine land ownership and does NOT claim legal cadastral authority.**  
> All generated parcel boundaries are designated as preliminary GIS assets requiring ground verification by authorized government surveyors before inclusion in statutory land records.

---

## 🚀 Quickstart & Running Locally

### Local Development
```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Run the application (binds to 0.0.0.0 and PORT env)
python -m uvicorn app:app --host 0.0.0.0 --port 8000
```
Open your web browser at: **`http://localhost:8000`**

### Cloud Deployment (Render, Railway, Fly.io)
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `uvicorn app:app --host 0.0.0.0 --port $PORT`
- See **[`DEPLOYMENT.md`](./DEPLOYMENT.md)** for complete 10-step deployment instructions.

---

## 🧭 The 5-Step Automated Workflow

```
[01 UAV DATA] ───> [02 ORTHOPHOTO] ───> [03 AI EXTRACTION] ───> [04 GIS VALIDATION] ───> [05 VERIFICATION]
  24 Drone Images     SIFT Tie-Points       U-Net + YOLO-Seg        Topology Validation    Surveyor Console
  5 cm/px GSD         Mosaic Stitch         Parcels, Bldgs, Roads   Auto-Healing (Shapely)  Accept / Edit / Reject
```

1. **Step 01 — UAV Data**: Ingests 24 raw overlapping drone frames across 4.8 ha with 85% forward overlap and RTK-locked positional telemetry.
2. **Step 02 — Orthophoto**: Photogrammetric tie-point matching and bundle adjustment producing a 5.0 cm/px metric orthomosaic.
3. **Step 03 — AI Multi-Feature Extraction**: PyTorch U-Net & YOLO-Seg segmenting 87 parcels, 142 building footprints, and 3.6 km of road corridors with confidence scoring.
4. **Step 04 — GIS Topology Validation**: Automated Shapely spatial quality check identifying boundary overlaps and sliver gaps, with **Auto-Fix Geometries** healing them into 87/87 valid polygons.
5. **Step 05 — Human Surveyor Verification**: Ground truthing workbench enabling surveyors to **Accept**, **Edit** vertices on map, or **Reject** with automated audit timestamps.

---

## 🏆 2-Minute Judge Mode

Click **`[ 2-MINUTE JUDGE MODE ]`** in the top navigation bar or hero banner to launch the automated guided tour through all 10 key milestones in 90–120 seconds.

---

## 📊 Technical Architecture & Tech Stack

- **Frontend**: Responsive Government Dark/Light GIS Interface, Leaflet 1.9, Turf.js, Chart.js, Lucide Icons
- **Backend API**: Python 3.13 + FastAPI + Uvicorn
- **Geospatial Engine**: Shapely 2.0, GEOS 3.12 (Topology healing & validation)
- **Raster Generation**: High-fidelity procedural 5cm orthomosaic canvas engine
- **Interoperability**: RFC 7946 Standard GeoJSON, OGC KML, GeoPackage bundle, Printable Cadastral Map Sheet

---

## 🏛️ Government Workflow Alignment

- **SVAMITVA & NAKSHA Framework**: Accelerates the Drone Survey & Feature Extraction phases.
- **ULPIN / Bhu-Aadhaar Integration**: Prepared for 14-digit unique parcel identification assignment post ground verification.
- **State Land Record Portals**: Pre-formatted for seamless ingestion into Bhoomi, Dharani, Banglarbhumi, and Meebhoomi.
