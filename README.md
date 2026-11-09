# Macar Intelligence website — production candidate v1.0

This is a **separate** static website for `macarintelligence.com`, derived from approved v0.4. No CEBIA files, repos, Workers or Supabase settings are included or modified.

## GitHub → Cloudflare Pages (recommended)

1. Create a new **private** GitHub repository `macar-intelligence-website`.
2. Upload everything from this folder (README + `public/`), ensuring `public/index.html` exists at that path.
3. Cloudflare dashboard → Workers & Pages → Create application → Pages → Connect to Git; select ONLY the new repository.
4. Static project: framework preset **None**, build command **leave blank**, build output directory **public**, production branch **main**.
5. Use the generated `*.pages.dev` URL to check `/`, `/pl/`, `/privacy/` and `/pl/privacy/`, icon loading, mobile navigation and the CEBIA outbound link.
6. Only after test: Pages project → Custom domains → Set up domain → `macarintelligence.com`. Add `www.macarintelligence.com` afterward (or redirect www to apex in Cloudflare).
7. **DO NOT** edit, delete or overwrite any DNS record for `cebia.macarintelligence.com`, or any existing CEBIA Worker route/Auth settings.

## Important outstanding item before a fully functional commercial launch

No verified Macar Intelligence business contact email or form provider was supplied. The original demonstration-only form was replaced with an honest contact-channel notice. Configure a verified business inbox or an endpoint and adjust the contact section before treating it as complete. Confirm the identity/operator information required by applicable law and review the Privacy notice against actual Cloudflare settings.

## Localization / SEO

- English is default at `/`; Polish is at `/pl/` and can be selected in the header.
- Both versions are fully static HTML for search indexing; `hreflang`, canonicals, OG tags, sitemap and robots included.
- `Independent Software` remains in English in both locales.
- No site analytics, trackers or form submissions are included.
- Demonstration-only visualization data is explicitly labeled.
- No third-party dependencies, analytics scripts or runtime API calls.

## Local test

From this directory: `python -m http.server 8000 --directory public` and visit `http://localhost:8000/` and `http://localhost:8000/pl/`.

Version: v1.0 deployment candidate; 2026-11-09.
