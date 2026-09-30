<div align="center">

# Luxe Estates

**Curated luxury real estate, residences and developments.**

A premium, light-palette real estate website built with React, Vite and Tailwind CSS.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Site-1E2126?style=for-the-badge)](https://aiviainnovations-arch.github.io/Modern-Real-Estate/)
[![License: MIT](https://img.shields.io/badge/License-MIT-8B6A3F?style=for-the-badge)](LICENSE)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white)

<img src="public/screenshots/Screenshot%202026-10-01%20012733.png" alt="Luxe Estates home page with hero and property search" width="900">

</div>

---

## Table of contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Customisation](#customisation)
- [Images and video](#images-and-video)
- [The 3D depth effects](#the-3d-depth-effects)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
- [Notes](#notes)
- [License](#license)

---

## Overview

Luxe Estates is a six-page real estate site: Home, Properties, Property Details, Projects, About and Contact. It has working property filtering, a validated enquiry form, and a design system built on a warm ivory and sand palette with a bronze accent. The sample content is set in Gujarat and Mumbai and is easy to replace with real listings.

## Screenshots

### Home

<p align="center">
  <img src="public/screenshots/Screenshot%202026-10-01%20012733.png" alt="Home: Find a place worth coming home to, with floating search panel" width="900">
</p>

<sub>Full-bleed hero with a frosted-glass search panel for location, property type and price range.</sub>

### Properties and About

<table>
  <tr>
    <td width="50%"><img src="public/screenshots/Screenshot%202026-10-01%20012748.png" alt="Explore Properties page with filters"><br><sub><b>Explore Properties</b> - filter by location, type, bedrooms, price and sort order</sub></td>
    <td width="50%"><img src="public/screenshots/Screenshot%202026-10-01%20012800.png" alt="About Luxe Estates page"><br><sub><b>About</b> - brand story and approach</sub></td>
  </tr>
</table>

### Contact and Projects

<table>
  <tr>
    <td width="50%"><img src="public/screenshots/Screenshot%202026-10-01%20012805.png" alt="Contact page with enquiry form"><br><sub><b>Contact</b> - validated enquiry form with office details</sub></td>
    <td width="50%"><img src="public/screenshots/Screenshot%202026-10-01%20012830.png" alt="Projects page with The Signature Collection"><br><sub><b>Projects</b> - developments shaping tomorrow's addresses</sub></td>
  </tr>
</table>

### Featured development

<p align="center">
  <img src="public/screenshots/Screenshot%202026-10-01%20012841.png" alt="Coral Bay Residences project detail" width="900">
</p>

<sub>Project cards show status, location, starting price, available units and possession date.</sub>

---

## Features

- **Six pages:** Home, Properties, Property Details, Projects, About, Contact (plus a 404 page)
- **Functional filtering:** location, property type, bedrooms, price and sort, driven by numeric `priceValue` / `areaValue` fields
- **Validated enquiry forms** on the Contact and Property Details pages
- **Cinematic video backgrounds** with poster fallbacks, lazy loading and pause-when-off-screen
- **Glassmorphism** search panel and buttons layered over video
- **Mouse-tracking 3D tilt** on property card images and the featured project
- **Resilient images:** every `<img>` swaps to an inline SVG placeholder if a photo fails to load
- **Design tokens** for colour, type and motion in `tailwind.config.js`
- **Accessible:** visible keyboard focus, reduced-motion support
- **GitHub Pages ready:** SPA deep-link refresh handled via `404.html`

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | React 18 (JavaScript / JSX) |
| Build | Vite 5 |
| Styling | Tailwind CSS 3, PostCSS |
| Routing | React Router v6 |
| Icons | Lucide React |
| Fonts | Cormorant Garamond and Manrope (Google Fonts) |
| Deployment | gh-pages |

## Getting started

Requires **Node.js 18+** and npm.

```bash
git clone https://github.com/aiviainnovations-arch/Modern-Real-Estate.git
cd Modern-Real-Estate

npm install
npm run dev      # http://localhost:5173
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run deploy` | Build and publish `dist/` to the `gh-pages` branch |

## Project structure

```text
src/
├── components/   Navbar, Footer, Hero, PropertyCard, PropertySearch,
│                 PropertyFilters, FeaturedProject, LocationSection,
│                 WhyChooseUs, AboutSection, CTASection, ContactForm,
│                 SectionHeading, ScrollToTop, Tilt3D, VideoBackground
├── pages/        Home, Properties, PropertyDetails, Projects, About,
│                 Contact, NotFound
├── data/         properties.js, projects.js, videos.js - sample content
├── utils/        imagePlaceholder.js - inline SVG fallback for images
├── App.jsx       Route definitions
├── main.jsx      Entry point (BrowserRouter, base URL)
└── index.css     Tailwind directives and shared utility classes
public/
├── 404.html      SPA redirect for GitHub Pages deep links
└── screenshots/  README screenshots
```

## Customisation

**Listings and projects.** Edit `src/data/properties.js` and `src/data/projects.js`. Each property carries `priceValue` and `areaValue` (plain numbers) alongside the display strings `price` and `area`; the filters and sort options use the numeric values.

**Colours and type.** Change the `colors` and `fontFamily` blocks in `tailwind.config.js`. The palette is ivory `#FAF6EE`, sand `#F0E7D8`, charcoal `#1E2126` and bronze `#8B6A3F`.

**Forms.** The enquiry forms are frontend-only. Replace the `handleSubmit` logic in `src/components/ContactForm.jsx` to send data to your email service or backend.

## Images and video

Photos load from Unsplash by URL, so there are no local image files to manage. Three background clips (hero, featured project, closing CTA) come from Mixkit's free stock library; `src/data/videos.js` lists each clip and its source page.

For production, download each clip from its `sourcePage` link, self-host it (for example `public/videos/hero.mp4`) and update the reference. That keeps the site independent of a third party's servers and follows Mixkit's free license.

The `VideoBackground` component always renders a poster underneath, only mounts the `<video>` near the viewport, pauses it when scrolled away, and stays on the poster for visitors with `prefers-reduced-motion` set.

## The 3D depth effects

- **Video backgrounds:** the Hero and closing CTA use looping clips under a dark gradient for text contrast, and the Hero video has a gentle scroll parallax (`src/components/Hero.jsx`).
- **Glassmorphism:** the floating search panel (`.glass-panel` in `src/index.css`) and the CTA's secondary button use a frosted backdrop blur.
- **3D tilt:** `src/components/Tilt3D.jsx` applies a subtle perspective tilt that follows the cursor. It is skipped on touch devices and under reduced motion.

## Deploying to GitHub Pages

1. **Set the base path** in `vite.config.js` to match the repository name:

   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/Modern-Real-Estate/',
   })
   ```

   For a user site (`<username>.github.io`) or a custom domain, use `base: '/'`.

2. **Update `public/404.html`.** `pathSegmentsToKeep` must equal the number of path segments in `base` (1 for `/Modern-Real-Estate/`, 0 for `/`). Together with the script in `index.html`, this lets a hard refresh on a deep link such as `/properties/2` work on GitHub Pages.

3. **Deploy:**

   ```bash
   npm install
   npm run deploy
   ```

4. **Enable Pages:** Settings → Pages → Deploy from branch → `gh-pages` → `/ (root)`.

The site will be live at `https://<username>.github.io/Modern-Real-Estate/`.

**Other static hosts (Netlify, Vercel):** run `npm run build` and point the host at `dist/`. You can usually set `base: '/'` and skip the `404.html` workaround.

## Notes

- Listings, prices, contact details and company information are sample content for demonstration.
- Reduced-motion preferences are respected (see `src/index.css`) and all interactive elements have a visible keyboard focus state.

## License

Released under the [MIT License](LICENSE). Third-party assets, including Unsplash photos and Mixkit video clips, remain under their own licenses.

---

<div align="center">

Designed and built by **AIVA**.

</div>
