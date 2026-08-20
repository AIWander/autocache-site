# autocache-site

Source for the [autocache.ai](https://autocache.ai) website — the product page for
**Autonomous by AutoCache**.

Static site, no build step. Twelve files: pages, one stylesheet, one script, icons,
and a `_headers` file carrying the security headers.

## Why this is public

Everything here already ships to anyone who loads the site. Publishing the source
adds no disclosure — it just makes the thing auditable rather than merely observable.

That matters for a memory product. The site sets `default-src 'self'` with no external
origins whatsoever: no analytics, no trackers, no third-party fonts or scripts, no
network calls off-origin. Those are claims you can now verify by reading
[`_headers`](_headers) and [`script.js`](script.js) instead of taking our word for it.

## Layout

| file | purpose |
|---|---|
| `index.html` | landing page |
| `start.html` | getting started |
| `support.html` | support and issue reporting |
| `privacy.html` · `terms.html` | policies |
| `404.html` | not-found page |
| `styles.css` · `script.js` | styles and behaviour |
| `favicon.svg` · `social-card.*` | icons and share card |
| `_headers` | CSP, Permissions-Policy, frame/content-type protections, cache rules |

## Licensing

The **code** in this repository — HTML, CSS, JavaScript, and configuration — is
licensed under [Apache License 2.0](LICENSE).

The **AutoCache and Autonomous names, logos, product copy, and page content** are not
covered by that grant and remain the property of the owner. Reuse the markup and
styling freely; don't ship a copy of the site as if it were ours.

The Autonomous product itself is not in this repository and is separately licensed.
