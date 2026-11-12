# Macar Intelligence — v1.2.9 (mobile-refined candidate)

This update builds on the **approved desktop Products design v1.2.8**. No intentional layout modifications are applied at desktop widths 1181px or larger.

Updates:
- Properly collapses the CEBIA sidebar to a narrow icon rail on phones.
- Displays filters, settings and financial cards in legible two-column grids on phones.
- Keeps synthetic demonstration data and neutral **PROVIDER** wording.
- Keeps the link “Explore CEBIA features” removed.
- Leaves the live CEBIA application untouched.

Deployment: extract all files and upload the `public` directory and root files into the website's separate GitHub repository. Cloudflare Pages builds from `public`. Verify ENG and PL and mobile/desktop views before publishing.

## v1.2.12 — simplified footer branding

- Footer logo now uses Macar Intelligence symbol + wordmark without the “Independent Software” descriptor in both languages and all six pages.
- The larger reverse lockup in the brand/trust strip still includes the descriptor.
- Preserved navigation, contact details, and CEBIA showcase.
- Versioned, independent footer CSS avoids stale Cloudflare/browser styling.
