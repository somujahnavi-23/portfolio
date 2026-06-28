# Deploying this portfolio to Vercel

This portfolio is a **fully static React app** (no backend / no environment variables required).

## Option A — Deploy from a Git repo (recommended)

1. Push the project to GitHub/GitLab/Bitbucket.
2. In Vercel: **Add New → Project** and import the repo.
3. Set **Root Directory** to `frontend` (the React app lives there).
4. Vercel auto-detects **Create React App**. The included `frontend/vercel.json` already sets:
   - Build command: `yarn build`
   - Output directory: `build`
   - SPA rewrites so routes like `/project/cardiovascular-risk-prediction` work on refresh/direct load.
5. Click **Deploy**. Done.

## Option B — Deploy with the Vercel CLI

```bash
cd frontend
npm i -g vercel
vercel        # follow prompts (first deploy)
vercel --prod # production deploy
```

## Notes
- **No env vars needed** — the contact form was removed; the site only links out to email/LinkedIn/GitHub.
- Résumés are served from external URLs, so no files need bundling.
- The `@emergentbase/visual-edits` dev-only package was removed so `yarn install` runs cleanly on Vercel.
