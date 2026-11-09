# Macar Intelligence — SEO v1.2 (2026-11-09)

Based on the exact uploaded v1.1 website. Replace the matching files in GitHub branch `main` with this full package. Cloudflare Pages uses `public` as build output.

## Changes
- Added dedicated CEBIA product pages: `/products/cebia/` and `/pl/products/cebia/`
- Added an internal product details link to both homepage product sections and footers
- Added Organization and WebSite JSON-LD on the homepages, Organization/WebSite/SoftwareApplication on product pages
- Added product URLs and language alternates to `public/sitemap.xml` (six URLs total)
- Added product-page styling, reusing existing CSS, logo files and demo UI component
- Contact, CEBIA application, Cloudflare configuration and privacy pages remain otherwise untouched

## Caution
- SoftwareApplication markup contains only documented facts. No invented pricing, offers or reviews. Google rich results for software applications require further properties; this markup is descriptive and makes no promise of rich results.
- Demo values are synthetic; the illustrative product UI is not an actual application screenshot.
- No backend, forms, tracking or external scripts added.

## Post-deploy
1. Validate `/`, `/pl/`, `/products/cebia/`, `/pl/products/cebia/`, `/sitemap.xml`.
2. Test navigation and mobile widths.
3. Re-submit `https://macarintelligence.com/sitemap.xml` in Search Console, then inspect the two new product URLs.
4. Use Google Rich Results Test / Schema Markup Validator to validate JSON-LD.


## Demo refresh v1.2.1
- Replaced the old illustrative CEBIA widget with a more modern Overview Dashboard demo on ENG/PL home and product pages.
- Removed company-specific references from all demo transaction rows and interface descriptions.
- Created `public/assets/brand/cebia-logo-demo.svg` as an illustrative vector interpretation of the geometric C / ascending bars direction. This is **not** asserted to be the exact official CEBIA master mark; replace with approved official SVG from the separate CEBIA project when provided.
- All figures and transactions are synthetic. No changes to CEBIA deployment or credentials.

## v1.2.2 — CEBIA screenshot-based visual refinement
Uses the user-provided CEBIA Overview Dashboard screenshot solely as a visual reference. The isolated logo icon is cropped from the provided image; this is not an original master vector asset. Displayed KPI, status, file-name, and settings values are fictional, and no real sensitive data from the screenshot are included. Replaces the four illustrative demos (home and product, ENG and PL); no changes to CEBIA app.

- Replaced legacy provider-specific wording with the neutral label `PROVIDER` in the CEBIA demo where applicable.
