# SS Chat — React + FastAPI

A small full-stack chat demo combining a Next.js (App Router) frontend and a FastAPI backend. This repo contains both services and simple instructions to run and develop locally.

## Repo layout

- `backend/` — FastAPI app
  - `main.py` — FastAPI app entrypoint
  - `crud/`, `schemas/`, `routers/` — app modules
  - Run with `uvicorn main:app --reload --port 8000` from the `backend` folder

- `frontend/app-chat/` — Next.js (App Router) frontend
  - `app/` — Next.js app files (layouts, pages, components)
  - `public/` — static assets
  - `next.config.ts`, `package.json`, `tsconfig.json`
  - The frontend expects an environment variable `NEXT_PUBLIC_API_URL` (defaults to `http://localhost:8000/api/v1`)

## Prerequisites

- Node.js (16+ recommended) and npm (or pnpm/yarn)
- Python 3.10+ and a virtual environment tool (venv/conda)
- Git

## Local development

Open two terminals (or use your editor terminals) — one for the backend and one for the frontend.

1) Backend (FastAPI)

PowerShell commands (from repo root):

```powershell
# create and activate venv (Windows PowerShell)
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
# run the server
uvicorn main:app --reload --port 8000
```

The API will be available at: `http://localhost:8000` and the API root prefix is `/api/v1` (e.g. `http://localhost:8000/api/v1/conversations`).

2) Frontend (Next.js)

```powershell
cd frontend/app-chat
npm install
npm run dev
```

Open the app in your browser at `http://localhost:3000`.

Note: The frontend uses `NEXT_PUBLIC_API_URL` (see `app/api/apiConfig.ts`). If this variable isn't set, it falls back to `http://localhost:8000/api/v1`.

## Running tests

- Backend tests (if present) can be run from the `backend/` folder using `pytest`.

## Common tasks / Git workflow

- Stage and commit:

```powershell
git add -A
git commit -m "feat(frontend): add chat UI"
git push
```

- To undo local unstaged changes:

```powershell
git restore path\to\file
```

- To unstage a file:

```powershell
git restore --staged path\to\file
```

## Deployment notes

- Build the frontend for production with `npm run build` from `frontend/app-chat` and deploy to Vercel, Netlify, or another static host that supports Next.js.
- The backend can be containerized or deployed to any Python host supporting ASGI (e.g., Uvicorn + Gunicorn behind nginx, or as an app on a cloud provider).

## Troubleshooting

- If the frontend shows an error about an async Client Component (e.g. "<ChatWindow> is an async Client Component"), check that any component with `"use client"` is not declared `async` and that data fetching happens in client-safe lifecycle hooks (e.g., `useEffect`) or by converting the component to a Server Component (remove `"use client"`).

- If you run into Git submodule/subtree issues with `frontend/app-chat` appearing as a submodule, remove the cached submodule and re-add the files (already handled in this repo):

```powershell
git rm --cached frontend/app-chat
git add frontend/app-chat
git commit -m "Add frontend files"
git push
```

## Useful files

- `frontend/app-chat/app/api/apiConfig.ts` — frontend API URL configuration (reads `NEXT_PUBLIC_API_URL`)
- `backend/main.py` — FastAPI app entry

## Contact / Author

Created as a training/demo project.

---

If you want, I can extend this README with: a Visual Studio Code launch configuration, a Makefile, or dedicated troubleshooting examples for the ChatWindow async/client issue. Which would you like next?
