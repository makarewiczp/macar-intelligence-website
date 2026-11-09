# Macar Intelligence Website v1.2.5 — CEBIA demo style repair

This release fixes the unstyled CEBIA demo in Products, which resulted from the
HTML layout and stale CSS being out of sync after deployment.

- Stylesheet cache-busted via `/assets/css/site-v1.2.5.css` across HTML pages.
- CEBIA-specific styles embedded as a fallback on the four pages with the demo.
- Demo content and existing layout otherwise unchanged.
- PROVIDER label retained; no LST or LS Technics reference in site files.
- No changes to the live CEBIA app or its authentication.

Deployment: upload the contents of this archive (not the archive itself) to the GitHub
repo root, preserving the `public/` directory, then commit to `main`.
