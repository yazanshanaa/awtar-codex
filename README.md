# Awtar Ironworks Website

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

## Content editing

All marketing content is centralized in typed files under `/content`:

- `content/home.ts`: homepage sections (hero, services, testimonials)
- `content/services.ts`: services page sections and bullets
- `content/portfolio.ts` + `content/data.ts`: portfolio labels + language-neutral project records
- `content/quote.ts`: quote form labels, placeholders, messages
- `content/about.ts`: about story, areas served, years experience
- `content/contact.ts`: contact actions, socials, hours, map query

## Images and branding

- Replace placeholders in `/public/images` with real optimized assets.
- Update logo text/icon in `components/navbar.tsx`.
- Update color tokens in `app/globals.css`:
  - `--color-bg`
  - `--color-fg`
  - `--color-surface`
  - `--color-border`
  - `--color-gold`

## SEO and social

- Default OG image: `/public/og.svg` (replace with branded 1200x630 image).
- Localized page metadata is implemented in each page `generateMetadata`.
- `app/sitemap.ts` and `app/robots.ts` generate SEO routes.

## Deployment

Recommended: deploy on Vercel.

### Environment variables

- `NEXT_PUBLIC_SITE_URL`: canonical site URL (used in metadata/sitemap)

## Future integrations

- Quote image uploads: integrate secure storage (S3/Cloudinary) in `app/api/quote/route.ts` via server env vars.
- Quote notifications: add server-only email provider integration (Resend/SES/Postmark) in API route.
