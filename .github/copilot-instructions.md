# Copilot instructions for `mi-portafolio` 🧭

**Purpose:** Help an AI coding agent be immediately productive in this small static portfolio site (vanilla HTML/CSS/JS).

## Big picture
- This is a single-page static portfolio served as plain files (no build step). Key files:
  - `index.html` — page structure, navigation, section IDs (`#inicio`, `#habilidades`, `#proyectos`, `#contacto`).
  - `estilos.css` — theme variables and responsive CSS (uses CSS variables such as `--primary-color`).
  - `script.js` — data-driven rendering of the projects list and small UI behavior (smooth scroll).
- The site is lightweight by design — prefer simple, readable vanilla JS and semantic HTML over frameworks.

## Developer workflows & commands
- Local preview: open `index.html` in a browser, or run a simple HTTP server for correct CORS/asset behavior:
  - Python: `python -m http.server 8000` and visit `http://localhost:8000`
  - VS Code: use **Live Server** extension
- Deployment: typically hosted via GitHub Pages (site is ready-to-serve from repository root).

## Project-specific conventions & patterns
- Language: Spanish (page `lang="es"`) — keep UI text & comments in Spanish when editing existing content.
- Data-driven pattern: `script.js` exports a `proyectos` array of objects with fields:

```js
{
  titulo: "...",
  descripcion: "...",
  imagen: "https://...",
  repoLink: "https://github.com/...",
  demoLink: "https://..."
}
```
- Rendering: `cargarProyectos()` iterates `proyectos` and appends `.project-card` elements to `#projects-container`. When adding projects, update `proyectos` (no further wiring required).
- Smooth-scroll: anchors (`a[href^="#"]`) are intercepted in `script.js` and scrolled via `scrollIntoView({behavior:'smooth'})`. Ensure target IDs exist.
- Styling: use and prefer existing CSS variables in `estilos.css` for color/theme changes.

## Integration points & gotchas
- Font Awesome is loaded from CDN in `index.html` — changes to icon set require updating the CDN link or switching to local assets.
- Images: examples use external placeholder URLs; prefer storing project images under `images/` and referencing them relatively.
- Placeholders to fix: a repo URL `https://github.com/tuusuario/proyecto3` should be replaced with the real repo; contact email is in `index.html`.
- Mobile navigation: `.hamburger` is present but no toggle logic is implemented — adding a small event listener to toggle `.nav-links` is the expected pattern.

## How to make common edits (examples)
- Add a project: append an object to `proyectos` (see structure above), then test by refreshing the page.
- Change theme color: edit `--primary-color` in `estilos.css`.
- Add local images: put them in `images/` and update `proyecto.imagen` to `images/miimagen.jpg`.

## Testing & debugging tips
- Use browser DevTools console to inspect `#projects-container` and check for JS errors.
- For layout issues, toggle CSS variables in DevTools and inspect `.project-card` styles.

## PR guidance for AI agents
- Keep changes small and focused (one feature or fix per PR).
- Add a short description in Spanish explaining the intent and manual verification steps (how to preview, what to click).
- When modifying `script.js`, preserve the `DOMContentLoaded` handler and existing small-function organization.

---

If anything here is unclear or you'd like more examples (e.g., add the hamburger toggle implementation or an image optimization guideline), let me know and I will expand this file.