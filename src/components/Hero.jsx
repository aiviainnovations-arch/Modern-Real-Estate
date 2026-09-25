import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PropertySearch from './PropertySearch.jsx'
import VideoBackground from './VideoBackground.jsx'
import { videos } from '../data/videos.js'

export default function Hero() {
  const parallaxRef = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const scrolled = window.scrollY
        // Move the video at a fraction of scroll speed for a gentle
        // parallax "depth" effect, capped so it never drifts too far.
        setOffset(Math.min(scrolled * 0.25, 160))
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative">
      <div
        ref={parallaxRef}
        className="relative h-[86vh] min-h-[560px] max-h-[880px] w-full overflow-hidden"
      >
        <div
          className="absolute inset-0 h-[calc(100%+160px)]"
          style={{ transform: `translateY(-${offset}px)` }}
        >
          <VideoBackground
            src={videos.hero.src}
            poster={videos.hero.poster}
            label="Luxe Estates"
            overlay="dark"
            className="h-full w-full"
          />
        </div>

        <div className="relative z-10 h-full container-edit flex flex-col justify-end pb-16 md:pb-24">
          <div className="animate-fadeUp text-ivory">
            <p className="eyebrow mb-5 !text-bronze-light">Curated Real Estate</p>
            <h1 className="heading-serif text-[2.6rem] leading-[1.08] sm:text-6xl md:text-[4.2rem] max-w-3xl text-ivory">
              Find a place worth
              <br className="hidden sm:block" /> coming home to.
            </h1>
            <p className="mt-6 text-ivory/80 text-base md:text-lg max-w-lg leading-relaxed">
              Discover thoughtfully selected residences, spaces and investment
              opportunities across Gujarat and Mumbai.
            </p>
          </div>
        </div>
      </div>

      <div className="container-edit">
        <div className="relative md:-mt-10 z-10">
          <PropertySearch />
        </div>
      </div>

      <div className="container-edit mt-12 md:mt-16 flex items-center justify-between flex-wrap gap-4">
        <p className="text-sm text-charcoal-soft tracking-wide">
          120+ Properties <span className="text-line mx-2">•</span> 8 Locations
        </p>
        <Link to="/properties" className="link-underline">
          View all properties →
        </Link>
      </div>
    </section>
  )
}
