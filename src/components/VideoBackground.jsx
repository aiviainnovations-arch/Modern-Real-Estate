import { useEffect, useRef, useState } from 'react'
import { handleImageError } from '../utils/imagePlaceholder.js'

// A full-bleed, autoplaying background video with production-minded guards:
//  - Respects prefers-reduced-motion by never loading the video at all —
//    the poster image is shown instead, permanently.
//  - Only attaches the real video `src` once the element is near the
//    viewport (IntersectionObserver), so a page with several of these
//    doesn't pull down every clip on first paint.
//  - Pauses playback whenever the section scrolls off-screen, and resumes
//    when it returns, to save battery/CPU on long pages.
//  - Falls back to the shared inline-SVG placeholder if the video itself
//    fails to load for any reason.
export default function VideoBackground({ src, poster, label = 'Luxe Estates', overlay = 'dark', className = '' }) {
  const videoRef = useRef(null)
  const wrapperRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mql.matches)
    const onChange = (e) => setReducedMotion(e.matches)
    mql.addEventListener?.('change', onChange)
    return () => mql.removeEventListener?.('change', onChange)
  }, [])

  useEffect(() => {
    if (reducedMotion || !wrapperRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          videoRef.current?.play?.().catch(() => {})
        } else {
          videoRef.current?.pause?.()
        }
      },
      { rootMargin: '200px 0px' }
    )
    observer.observe(wrapperRef.current)
    return () => observer.disconnect()
  }, [reducedMotion])

  const overlayClass =
    overlay === 'dark'
      ? 'bg-gradient-to-b from-charcoal/55 via-charcoal/25 to-charcoal/60'
      : overlay === 'light'
      ? 'bg-ivory/40'
      : ''

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden ${className}`}>
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        onError={(e) => handleImageError(e, label)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          shouldLoad && !reducedMotion && !failed ? 'opacity-0' : 'opacity-100'
        }`}
      />
      {!reducedMotion && shouldLoad && !failed && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
          onError={() => setFailed(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      {overlayClass && <div className={`absolute inset-0 ${overlayClass}`} />}
    </div>
  )
}
