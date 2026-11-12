# Macar Intelligence v1.2.13 — Brand lockup repair

## What was fixed

- Replaced broken split-header logo with a single scalable SVG wordmark. The logo has a safe intrinsic width/height and an inline responsive width, independent of stale CSS rules.
- Created **new versioned SVG files** for the primary and reverse wordmarks without the `Independent Software` subline.
- Used the no-subline wordmark consistently in the header, blue brand strip and footer, ENG and PL, including privacy and product pages.
- Removed `Independent Software` from the tiny copyright/legal strip text, leaving existing SEO meta and approved positioning unchanged.
- Referenced a uniquely named copy of site CSS (v1.2.13), preventing old CSS cache from breaking the logo layout.
- No changes to the CEBIA application, demo data, billing logic, sitemap, routing or Cloudflare infrastructure.

## Deployment

Unzip and upload the **contents** to the root of GitHub repository `macar-intelligence-website`, preserving the `public/` directory structure; commit to `main`. Cloudflare Pages can deploy the update automatically. Never upload the ZIP itself as website source.
