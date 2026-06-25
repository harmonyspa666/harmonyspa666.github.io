# Interior photos — "Our Space" gallery

Drop your interior photos into this folder using these exact filenames so they
appear in the homepage gallery (the `<!-- GALLERY -->` section in `index.html`):

| Filename         | Where it shows  |
|------------------|-----------------|
| `interior-1.jpg` | Left tile       |
| `interior-2.jpg` | Middle tile     |
| `interior-3.jpg` | Right tile      |

To add more photos, copy a `<figure class="gallery-item">` block in
`index.html` and point its `src` at a new `interior-N.jpg`.

Tips:
- Use `.jpg` (or update the `src` extensions in `index.html` if you prefer `.png`/`.webp`).
- Landscape photos around **1600×1100 px** look best; they're cropped to fill each tile.
- Keep each file under ~400 KB for fast loading (the gallery already lazy-loads them).
- To add/remove photos, edit the matching `<figure class="gallery-item">` blocks
  in `index.html` and adjust the grid count.
