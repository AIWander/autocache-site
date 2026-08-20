# autocache-site

Source for the [autocache.ai](https://autocache.ai) website — the product page for
**Autonomous by AutoCache**.

Static site, no build step. Everything that gets served lives in [`public/`](public) —
twelve files: pages, one stylesheet, one script, icons, and a `_headers` file
carrying the security headers. Cloudflare Pages is configured with `public` as its
build output directory, which is what keeps this README and the LICENSE off
autocache.ai.

## Why this is public

Everything here already ships to anyone who loads the site. Publishing the source
adds no disclosure — it just makes the thing auditable rather than merely observable.

That matters for a memory product. The site sets `default-src 'self'` with no external
origins whatsoever: no analytics, no trackers, no third-party fonts or scripts, no
network calls off-origin. Those are claims you can now verify by reading
[`public/_headers`](public/_headers) and [`public/script.js`](public/script.js) instead of taking our word for it.

## Layout

| file | purpose |
|---|---|
| `public/index.html` | landing page |
| `public/start.html` | getting started |
| `public/support.html` | support and issue reporting |
| `public/privacy.html` · `terms.html` | policies |
| `public/404.html` | not-found page |
| `public/styles.css` · `script.js` | styles and behaviour |
| `public/favicon.svg` · `social-card.*` | icons and share card |
| `public/_headers` | CSP, Permissions-Policy, frame/content-type protections, cache rules |

## Licensing

The **code** in this repository — HTML, CSS, JavaScript, and configuration — is
licensed under [Apache License 2.0](LICENSE).

The **AutoCache and Autonomous names, logos, product copy, and page content** are not
covered by that grant and remain the property of the owner. Reuse the markup and
styling freely; don't ship a copy of the site as if it were ours.

The Autonomous product itself is not in this repository and is separately licensed.
