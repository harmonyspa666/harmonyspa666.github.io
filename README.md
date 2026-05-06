# Harmony Acupuncture & Wellness Spa

Marketing website for Harmony Acupuncture & Wellness Spa, hosted at
[theharmonyspa.com](https://theharmonyspa.com).

This is a plain static site — no build step, no dependencies. Open
`index.html` in a browser and it works.

## Project structure

```
Harmony/
├── index.html              # Homepage
├── pages/
│   └── reviews.html        # Client reviews / testimonials page
├── assets/
│   ├── css/
│   │   └── main.css        # All styles for the entire site
│   ├── js/
│   │   └── site-config.js  # Phone, address, email — single source of truth
│   └── images/             # (reserved for future image assets)
├── CNAME                   # GitHub Pages custom-domain config
├── README.md
└── .gitignore
```

### Why this layout

- **`index.html` at the root** so default URLs work (`theharmonyspa.com/`
  serves the homepage).
- **`pages/`** for additional top-level pages so the root stays uncluttered
  as the site grows.
- **`assets/`** groups static resources by type (CSS, JS, images). When a
  backend gets added later, this folder maps cleanly to the static-files
  directory of most frameworks (Express `public/`, Flask `static/`,
  Next.js `public/`, etc.).

## Editing common things

### Change the phone number, address, or email

Edit the values at the top of [`assets/js/site-config.js`](assets/js/site-config.js):

```js
const SITE_CONFIG = {
  phone:        "(703) 555-0192",
  phoneHref:    "tel:+17035550192",
  addressLine1: "1234 Chain Bridge Rd",
  addressLine2: "McLean, VA 22101",
  addressFull:  "1234 Chain Bridge Rd, McLean, VA 22101",
  email:        "hello@harmonywellness.com",
};
```

These values are injected into any element on any page tagged with
`data-config="<key>"` or `data-config-html="<key>"`.

### Change colors, spacing, or fonts

Edit the design tokens in the `:root { ... }` block at the top of
[`assets/css/main.css`](assets/css/main.css).

### Add a new page

1. Copy `pages/reviews.html` as a starting template.
2. Update the `<title>`, `<header class="page-header">`, and the page body.
3. Add a link to it in the nav of `index.html` and any other pages that
   should reference it.
4. Remember: pages inside `pages/` use `../assets/css/main.css` and
   `../assets/js/site-config.js`, while the root `index.html` uses
   `assets/css/main.css` and `assets/js/site-config.js`.

## Running locally

Either of these works:

- Open `index.html` directly in a browser.
- Or, for a more accurate local server:
  ```
  python3 -m http.server 8000
  ```
  then visit `http://localhost:8000`.

## Deployment

Deployed via GitHub Pages with the custom domain configured in `CNAME`.
Pushing to the `main` branch publishes the site.

## Future: adding a backend

The current structure is friendly to a future backend migration. Likely
path:

1. Add a `server/` (or `api/`) folder for backend code.
2. Keep static files in `assets/` — most frameworks can serve a static
   directory verbatim.
3. Replace static form posting in `index.html` (`onclick="alert(...)"`)
   with a real `fetch()` to a backend endpoint.
