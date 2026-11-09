# Macar Intelligence Website — v1.2.6 / CEBIA Showcase

Production-ready candidate for Macar Intelligence website, **not** for the separate CEBIA app.

## Highlights
- Rebuilt CEBIA preview in Products to use the available width rather than squeezing a complete dashboard into a narrow column.
- More faithful CEBIA UI: true mark from provided screenshot, navy sidebar, overview and filters, CAP settings, billing model, KPI cards, Not Set warning.
- Settings use a measured 3-column grid; responsive breakpoints prevent right-side controls from escaping the card.
- Responsive compact rail, 2-column settings and KPI cards on phones.
- All data are synthetic. Neutral PROVIDER labels; no customer or employer-sensitive data.
- Only the Macar Intelligence website is changed; CEBIA app files and configuration are untouched.

## Publish
1. Review locally by opening `public/index.html` (some absolute `/assets` links require a local static server).
2. Upload all extracted contents at the GitHub repo root, preserving the `public` tree.
3. Verify Cloudflare Pages deployment.
4. Check `/`, `/pl/`, `/products/cebia/` and `/pl/products/cebia/` on desktop and mobile.

Note: the dashboard is an illustrative synthetic reconstruction, not a live screenshot.
