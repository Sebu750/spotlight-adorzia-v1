# Deployment Guide - Spotlight Adorzia

## Prerequisites

- Node.js 22.12+ (use nvm: `nvm install 22 && nvm use 22`)
- Cloudflare account
- Wrangler CLI installed globally: `npm install -g wrangler`
- Supabase project configured

## Initial Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your actual Supabase credentials.

3. **Authenticate with Cloudflare**
   ```bash
   wrangler login
   ```

## Deployment

### Deploy to Production

```bash
npm run deploy
```

This command will:
1. Build the application for production
2. Deploy to Cloudflare Workers/Pages

### Deploy to Staging

```bash
npm run deploy:staging
```

## Local Development

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Build for Production (Without Deploy)

```bash
npm run build
```

Output will be in the `dist/` directory.

## Preview Production Build Locally

```bash
npm run preview
```

## Environment Variables

The following environment variables must be configured:

- `SUPABASE_PUBLISHABLE_KEY` - Your Supabase anonymous/public key
- `SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_PROJECT_ID` - Your Supabase project ID
- `VITE_SUPABASE_PUBLISHABLE_KEY` - Your Supabase anonymous/public key (Vite)
- `VITE_SUPABASE_URL` - Your Supabase project URL (Vite)

For Cloudflare deployment, set these in:
- Cloudflare Dashboard > Workers & Pages > Your Project > Settings > Environment Variables
- Or using Wrangler: `wrangler secret put <KEY>`

## Project Structure

- `src/` - Application source code
- `src/components/site/` - Landing page components
- `src/components/ui/` - Reusable UI components (shadcn/ui)
- `src/routes/` - TanStack Router routes
- `src/integrations/supabase/` - Supabase client and configuration
- `supabase/` - Supabase migrations and configuration
- `wrangler.jsonc` - Cloudflare Workers configuration

## CI/CD Pipeline (Optional)

For automated deployments, add this to your CI/CD configuration:

```yaml
# Example GitHub Actions
name: Deploy to Cloudflare
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
      - run: npm run build
      - run: wrangler deploy
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
```

## Troubleshooting

### Build Fails
- Ensure you're using Node.js 22.12+
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`

### Deployment Fails
- Verify you're logged in: `wrangler login`
- Check environment variables are set in Cloudflare dashboard
- Verify project name in `wrangler.jsonc` is unique

### Runtime Errors
- Check Cloudflare Workers logs in the dashboard
- Verify Supabase credentials are correct
- Ensure all environment variables are configured

## Additional Commands

- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run cf-typegen` - Generate Cloudflare types
