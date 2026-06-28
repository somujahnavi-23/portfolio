# Deploying this portfolio to Vercel

This portfolio is a **fully static React app** — no backend, no env vars, no data storage.

## What was configured for Vercel
- **`frontend/package.json`** pins **Node 20.x** (`engines`) and the Corepack `packageManager` hash was removed (that hash mismatch is the usual cause of `yarn install` exiting 1 on Vercel's Node 22 + Corepack).
- **Repo-root `vercel.json`** builds only the frontend (`cd frontend && yarn install && yarn build`, output `frontend/build`) with SPA rewrites.
- **Repo-root `.vercelignore`** excludes `backend/` so Vercel never tries to build the Python app (which fails on the internal `emergentintegrations` package).
- **`frontend/vercel.json`** provides the same rewrites if you deploy with Root Directory = `frontend`.

## Deploy (recommended — cleanest)
1. Push the repo to GitHub.
2. Vercel → **Add New → Project** → import the repo.
3. **Project Settings → General → Root Directory = `frontend`.**
4. Vercel auto-detects Create React App. Click **Deploy**.

This path reads `frontend/package.json` (Node 20.x), never sees the backend, and uses `frontend/vercel.json` for routing.

## Deploy (alternative — repo root)
If you leave Root Directory at the repo root, the repo-root `vercel.json` + `.vercelignore` handle it: the backend is ignored and only the frontend is built. Set the **Node.js Version to 20.x** in Project Settings if the build picks Node 22.

## CLI
```bash
cd frontend
npm i -g vercel
vercel --prod
```

## Notes
- No environment variables required.
- Résumés are external URLs (nothing to bundle).
- Routes like `/project/cardiovascular-risk-prediction` work on refresh via the SPA rewrites.
