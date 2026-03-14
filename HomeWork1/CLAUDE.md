# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Full-stack tourism/travel booking application. Frontend is a React SPA; backend is an ASP.NET Core Minimal API. Currently the frontend uses static JSON files for data while the backend data layer exists but its endpoints are not yet wired to the frontend.

## Commands

### Frontend (`Front/`)
```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build
npm run lint      # ESLint
npm run preview   # Preview production build
```

### Backend (`Backend/sesc.API/`)
```bash
dotnet build      # Build
dotnet run        # Run (HTTP: localhost:5122, HTTPS: localhost:7107)
```

## Architecture

### Frontend (React 19 + Vite + React Router 7)

- **`src/App.jsx`** — Router setup with two routes: `/` → `TurismoPage`, `/turismo/tour` → `TourPage`
- **`src/pages/`** — Top-level page components
- **`src/containers/`** — Stateful components: `FilterBar`, `ExcursionList/`, `TourRequestForm/`
- **`src/components/`** — Presentational components split by page (`TurismoPage/`, `TourPage/`, `Layout/`)

Filter state is persisted in URL query parameters so search survives page refresh.

Static data is served from:
- `public/api/tours.json` — list of tours
- `public/api/filters.json` — available filter options (origins, destinations, tags)

### Backend (ASP.NET Core 10 Minimal API)

- **`Program.cs`** — Entry point; configures OpenAPI/Swagger (dev only) and HTTP pipeline
- **`Data/Tour.cs`** — Tour entity (id, name, image, status, description, tags, origin, destination, date, capacity, costs)
- **`Data/Filter.cs`** — Filter options shape
- **`Data/DataSeed.cs`** — Hardcoded seed data (6 sample tours)

The backend currently only exposes a demo `/weatherforecast` endpoint. Tour/filter endpoints need to be added and connected to the frontend.

### Data Flow Gap

Backend `DataSeed.cs` and frontend `public/api/*.json` contain duplicate tour data and are not synchronized. When implementing backend API endpoints, the frontend fetch calls should be updated to point to the API instead of static files.
