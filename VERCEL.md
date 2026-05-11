# Vercel Deployment Guide — THE CUT

This project is configured to deploy to **Vercel** as a Vite SPA build.

## One-time setup

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Vercel → **Add New Project** → import the repo.
3. Vercel auto-detects settings from `vercel.json`:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/client`
   - **Node version**: 22
4. Add **Environment Variables** (Project → Settings → Environment Variables):

   | Key | Value |
   |---|---|
   | `VITE_SUPABASE_URL` | `https://gzbnrnucmfxqprddnuet.supabase.co` |
   | `VITE_SUPABASE_PUBLISHABLE_KEY` | *(from your `.env`)* |
   | `VITE_SUPABASE_PROJECT_ID` | `gzbnrnucmfxqprddnuet` |
   | `SUPABASE_URL` | same as above |
   | `SUPABASE_PUBLISHABLE_KEY` | same as publishable key |

   Apply to **Production**, **Preview**, and **Development**.

5. Click **Deploy**.

## Local commands

```bash
npm install
npm run build      # outputs to dist/client
npm run preview    # preview the production build locally
```

## Notes

- SPA rewrites in `vercel.json` route every path to `/index.html` so TanStack Router handles client-side routing on refresh / deep links.
- The Supabase backend (database + forms) runs on Lovable Cloud and works from any host — no extra config required for Vercel.
- Custom domain: Vercel → Project → **Domains** → add your domain and update DNS.
