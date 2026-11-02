# Mihnea Negru - Portfolio

Personal portfolio site: software engineering work in distributed systems, cloud and backend.

Live: https://mihneavnegru.github.io/my-portfolio/

## Stack
- React 18 (Create React App)
- Tailwind CSS 3
- Framer Motion (animations; respects the reduced-motion setting)
- React Router with `HashRouter`, so it works on GitHub Pages without server rewrites
- Inter, self-hosted as subsetted WOFF files in `src/fonts`
- GitHub Pages, deployed by GitHub Actions

## Editing content
All text and data live in `src/data.js`:

| Export | What it controls |
| --- | --- |
| `personalInfo` | Name, title, intro, location, GitHub and LinkedIn links. The LinkedIn icon is hidden while `linkedin` is empty. |
| `highlights` | The three proof points under the hero. |
| `skillGroups` | Skill chips on the home page. `icon` and `detail` are optional. |
| `projects` | Project cards. `repoLink` is optional; the Source button is hidden without it. |
| `caseStudies` | Architecture write-ups on the Projects page. `diagram` picks a diagram from `src/components/Diagrams.js`. |
| `experience`, `education` | The About page. |

The link-preview image is `public/og-image.png` (1200x630), and the page title, description and social tags are in `public/index.html`.

## Contact form
Without configuration the form opens the visitor's email app with a drafted message. To send directly through [Formspree](https://formspree.io), set `REACT_APP_FORMSPREE_ID` at build time (see `.env.example`).

## Development
```bash
npm install
npm start      # dev server
npm test       # data sanity tests
npm run build  # production build
```

## Deployment
Pushing to `main` runs `.github/workflows/deploy.yml`, which installs dependencies, builds the site and publishes it to GitHub Pages. A failed build does not deploy.
