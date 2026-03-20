# TileTap Pitch Site

Single-page VC pitch website for TileTap, built with Next.js and structured around a typed content model in [`/Users/amansaryal/Codex Apps/tile-tap/src/content/pitch.ts`](/Users/amansaryal/Codex Apps/tile-tap/src/content/pitch.ts).

## Local development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checks

```bash
npm run lint
npm run build
```

## Content and asset updates

- Update all pitch copy in [`/Users/amansaryal/Codex Apps/tile-tap/src/content/pitch.ts`](/Users/amansaryal/Codex Apps/tile-tap/src/content/pitch.ts).
- Replace placeholder commuter art in [`/Users/amansaryal/Codex Apps/tile-tap/public/images/tiletap-commuter-rickshaw.svg`](/Users/amansaryal/Codex Apps/tile-tap/public/images/tiletap-commuter-rickshaw.svg) and [`/Users/amansaryal/Codex Apps/tile-tap/public/images/tiletap-ride-confirmed.svg`](/Users/amansaryal/Codex Apps/tile-tap/public/images/tiletap-ride-confirmed.svg) with the original attached images before launch.
- Replace placeholder CTA targets in [`/Users/amansaryal/Codex Apps/tile-tap/src/content/pitch.ts`](/Users/amansaryal/Codex Apps/tile-tap/src/content/pitch.ts).
- Set `NEXT_PUBLIC_SITE_URL` in Vercel once you have a production domain.

## Deploy to Vercel

1. Push this project to a Git repository.
2. Import the repo into Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to the production URL or custom domain.
4. Redeploy after swapping the placeholder CTA links and image assets.

The app is static-first and does not require server-side secrets for the current build.
