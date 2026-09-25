# Luxe Estates

A premium, light-palette real estate website built with React, Vite, Tailwind CSS and React Router. Six pages (Home, Properties, Property Details, Projects, About, Contact), functional property filtering, a validated enquiry form, and a design system built around a warm ivory/sand palette with a bronze accent.

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- React Router v6
- Lucide React (icons)
- Plain JavaScript (JSX), no TypeScript

## Getting Started

Requires Node.js 18+ and npm.

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` (or the next free port).

### Production build

```bash
npm run build
npm run preview   # serve the production build locally to double-check it
```

The build output goes to `dist/`.

## Project Structure

```text
src/
├── components/      Reusable UI: Navbar, Footer, Hero, PropertyCard,
│                    PropertySearch, PropertyFilters, FeaturedProject,
│                    LocationSection, WhyChooseUs, AboutSection,
│                    CTASection, ContactForm, SectionHeading, ScrollToTop
├── pages/           Home, Properties, PropertyDetails, Projects, About,
│                    Contact, NotFound
├── data/            properties.js, projects.js — sample content
├── utils/           imagePlaceholder.js — inline SVG fallback for images
├── App.jsx          Route definitions
├── main.jsx         App entry point (BrowserRouter, base URL)
└── index.css        Tailwind directives + shared utility classes
```

Property and project data lives in `src/data/` — edit those two files to
replace the sample listings with real content. Each property object also
carries `priceValue`/`areaValue` (plain numbers) alongside the display
strings (`price`/`area`), which is what the filters and sort options use.

## Images & Video

Photos are pulled from Unsplash by URL (no local image files to manage), and
three background video clips (hero, featured project, closing CTA) come from
Mixkit's free stock library — see `src/data/videos.js` for the exact clips
and their source pages.

**Note on the videos:** for a fast working preview, `src/data/videos.js`
points directly at Mixkit's asset CDN. That's fine to ship, but for a real
production deploy it's better to download each clip from the `sourcePage`
link in that file and self-host it (e.g. `public/videos/hero.mp4`, then
reference `/videos/hero.mp4`) — that keeps your site independent of a third
party's servers and is the intended way to use Mixkit's free license.

Every `<img>` has an `onError` handler (see `src/utils/imagePlaceholder.js`)
that swaps in a small inline SVG placeholder if a photo ever fails to load,
so the layout never shows a broken-image icon. The `VideoBackground`
component (`src/components/VideoBackground.jsx`) does the same for video:
it always renders a poster image underneath, only swaps in the actual
`<video>` once the section nears the viewport, pauses playback when
scrolled off-screen, and falls back to the poster permanently for anyone
with `prefers-reduced-motion` set.

## The "3D" depth effects

Three techniques combine to give the layered, dimensional feel:

- **Full-bleed video backgrounds** — Hero and the closing CTA use a
  cinematic looping clip with a dark gradient overlay for text contrast;
  the Hero's video also has a gentle scroll parallax (`src/components/Hero.jsx`).
- **Glassmorphism** — the floating search panel (`.glass-panel` in
  `src/index.css`) and the CTA's secondary button use a frosted,
  semi-transparent backdrop-blur so they read as sitting *above* the video.
- **Mouse-tracking 3D tilt** — `src/components/Tilt3D.jsx` wraps property
  card images and the featured-project video in a subtle perspective tilt
  that follows the cursor. It's skipped automatically on touch devices and
  for anyone with `prefers-reduced-motion` set.

## Deploying to GitHub Pages

1. **Set the base path.** Open `vite.config.js` and set `base` to match your
   repository name exactly:

   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/',
   })
   ```

   If you're deploying to a *user site* (a repo literally named
   `<your-username>.github.io`) or a custom domain, use `base: '/'` instead.

2. **Update `public/404.html`.** The `pathSegmentsToKeep` variable there
   must equal the number of path segments in your `base` (1 for
   `/your-repo-name/`, 0 for `/`). This file — together with the small
   script in `index.html`'s `<head>` — is what allows a hard refresh on a
   deep link like `/properties/2` to work correctly on GitHub Pages, since
   GitHub Pages otherwise has no way to route unknown paths back into the
   single-page app.

3. **Push your code to GitHub**, then deploy:

   ```bash
   npm install
   npm run deploy
   ```

   `npm run deploy` (via the included `gh-pages` package) builds the app and
   pushes `dist/` to a `gh-pages` branch.

4. **Enable Pages** in your repository settings: Settings → Pages → Source
   → Deploy from branch → select the `gh-pages` branch, `/ (root)` folder.

5. Your site will be live at `https://<your-username>.github.io/<your-repo-name>/`.

### Alternative: any static host (Netlify, Vercel, etc.)

Just run `npm run build` and upload/point the host at the `dist/` folder.
On these hosts you can generally set `base: '/'` in `vite.config.js` and
skip the `404.html` trick, since most of them already redirect unknown
paths to `index.html` for single-page apps.

## Notes

- The enquiry forms (Contact page and Property Details page) are
  frontend-only: they validate input and show a success state, but there is
  no backend wired up to actually send the data anywhere. Connect them to
  your email service or backend of choice by replacing the `handleSubmit`
  logic in `src/components/ContactForm.jsx`.
- Reduced-motion preferences are respected (see `src/index.css`), and all
  interactive elements have a visible keyboard focus state.
