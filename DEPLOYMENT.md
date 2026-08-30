# CadastraAI Cloud Deployment Guide

This guide provides exact, step-by-step instructions to deploy **CadastraAI** to the cloud using **Render** (recommended) or any cloud hosting platform that supports Python (Railway, Fly.io, Heroku, DigitalOcean App Platform).

---

## 🏗️ Deployment Architecture

- **Backend Framework**: FastAPI (`app.py`)
- **Production Server**: Uvicorn ASGI
- **Geospatial Processing**: Shapely 2.0 + GEOS (built-in geometry validation & auto-healing)
- **Frontend**: Single-page Leaflet GIS application served directly by FastAPI via `/static`
- **Data Layer**: Self-contained `cadastra_dataset.json` (no external database or GPU required)

---

## 📋 Prerequisites

1. A [GitHub](https://github.com/) account
2. A [Render](https://render.com/) account (free tier available)
3. Python 3.10+ installed locally (for testing)

---

## 🚀 Step-by-Step Deployment Instructions

### STEP 1 — Test Locally

Open a terminal or command prompt inside the project folder:

```bash
cd cadastra-ai

# Install dependencies
pip install -r requirements.txt

# Run the local server
python -m uvicorn app:app --host 0.0.0.0 --port 8000
```

Open [http://localhost:8000](http://localhost:8000) in your browser. Verify that:
- The dashboard loads
- The map and parcel overlays appear
- Quality control and auto-fix work
- GeoJSON / KML downloads work

Press `Ctrl + C` in the terminal to stop the server when done testing.

---

### STEP 2 — Create a GitHub Repository

1. Go to [GitHub.com](https://github.com/) and log in.
2. Click the **`+`** icon in the top-right corner and select **`New repository`**.
3. Name your repository: **`cadastra-ai`** (or any name you prefer).
4. Choose **Public**.
5. Leave **Initialize this repository with** unchecked (we already have `.gitignore` and `README.md`).
6. Click **`Create repository`**.

---

### STEP 3 — Upload Project to GitHub

In your project directory, run:

```bash
git init
git add .
git commit -m "Initial release of CadastraAI for SIH 26012"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/cadastra-ai.git
git push -u origin main
```

*(Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username)*

---

### STEP 4 — Create a New Web Service on Render

1. Log in to your [Render Dashboard](https://dashboard.render.com/).
2. Click the **`New +`** button in the top navigation bar.
3. Select **`Web Service`**.

---

### STEP 5 — Connect Your GitHub Repository

1. Under **Connect a repository**, find your `cadastra-ai` repository.
2. Click **`Connect`**.
   *(If your repo isn't listed, click "Configure account" to grant Render access to your repository)*

---

### STEP 6 — Configure the Build and Runtime Settings

Fill in the service details on Render:

| Setting | Value |
|---|---|
| **Name** | `cadastra-ai` |
| **Region** | Choose the closest region (e.g., *Singapore*, *Frankfurt*, *Oregon*) |
| **Branch** | `main` |
| **Runtime** | `Python 3` |
| **Build Command** | `pip install -r requirements.txt` |
| **Start Command** | `uvicorn app:app --host 0.0.0.0 --port $PORT` |
| **Instance Type** | `Free` |

---

### STEP 7 — Set Environment Variables

Scroll down to the **Environment Variables** section and click **`Add Environment Variable`**:

| Key | Value | Description |
|---|---|---|
| `ENVIRONMENT` | `production` | Production mode |
| `CORS_ORIGINS` | `*` | Allows cross-origin API requests |

*(Note: Render automatically sets and manages the `PORT` environment variable)*

---

### STEP 8 — Deploy the Application

1. Click **`Create Web Service`** at the bottom of the page.
2. Render will automatically:
   - Clone your GitHub repository
   - Install Python dependencies (`pip install -r requirements.txt`)
   - Start the Uvicorn server (`uvicorn app:app --host 0.0.0.0 --port $PORT`)
3. Watch the build logs. Within 1–2 minutes, you will see:
   ```
   ==> Application started
   ==> Your service is live 🎉
   ```

---

### STEP 9 — Find Your Public URL

Your live web application URL will appear at the top left of the Render service dashboard:
```
https://cadastra-ai.onrender.com
```
*(or your customized domain name)*

---

### STEP 10 — Test the Live Deployment

Visit your live URL and test the following checklist:

- [ ] **Health Probe**: Navigate to `https://<your-app>.onrender.com/api/health` — should return `{"status": "healthy"}`
- [ ] **Dashboard**: Verify stats (87 Parcels, 142 Buildings, 3.6 km Roads, 91.4% Confidence)
- [ ] **Live Demo Wizard**: Click `[ START LIVE DEMO ]` and walk through Steps 01 to 05
- [ ] **AI Extraction**: Click `[ RUN AI EXTRACTION ]` on Step 03 and toggle layers
- [ ] **Topology Auto-Fix**: Click `[ RUN TOPOLOGY CHECK ]` and `[ AUTO-FIX GEOMETRIES ]` on Step 04
- [ ] **Ground Verification**: Accept/Edit parcels on Step 05
- [ ] **Exports**: Click `[ EXPORT GIS DATA ]` and download GeoJSON and KML files
- [ ] **2-Minute Judge Mode**: Click `[ 2-MINUTE JUDGE MODE ]` in the top header

---

## 🔧 Alternative Deployment Platforms

### Deploying to Railway.app
1. Create a new project on [Railway.app](https://railway.app/).
2. Select **Deploy from GitHub repo**.
3. Railway automatically detects `requirements.txt` and `Procfile`.
4. Add environment variable `PORT=8000` (Railway injects `$PORT` dynamically).

### Deploying to Docker / Cloud Run
A standard `Dockerfile` can be created as:
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["sh", "-c", "uvicorn app:app --host 0.0.0.0 --port ${PORT:-8000}"]
```
