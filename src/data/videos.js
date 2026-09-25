// Background video clips used across the site. All are free-license clips
// from Mixkit (https://mixkit.co/license/#videoFree — free for commercial
// use, no attribution required).
//
// IMPORTANT — these `src` values point directly at Mixkit's asset CDN as a
// quick way to get a working preview without shipping large binary files
// through this tool. For a real production deploy, download each clip from
// its `sourcePage` link below and self-host it (e.g. in `public/videos/`,
// referenced as `/videos/hero.mp4`), so your site isn't depending on a
// third party's servers and stays within the letter of the free license.
export const videos = {
  hero: {
    src: 'https://assets.mixkit.co/videos/48394/48394-360.mp4',
    poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=80&auto=format&fit=crop',
    sourcePage: 'https://mixkit.co/free-stock-video/flying-over-suburban-houses-with-quiet-streets-48394/',
  },
  featuredProject: {
    src: 'https://assets.mixkit.co/videos/27543/27543-360.mp4',
    poster: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1600&q=80&auto=format&fit=crop',
    sourcePage: 'https://mixkit.co/free-stock-video/modern-house-on-the-beach-27543/',
  },
  cta: {
    src: 'https://assets.mixkit.co/videos/43607/43607-360.mp4',
    poster: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600&q=80&auto=format&fit=crop',
    sourcePage: 'https://mixkit.co/free-stock-video/aerial-shot-of-a-river-in-nature-43607/',
  },
}
