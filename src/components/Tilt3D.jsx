import { useRef } from 'react'

// Wraps its children in a subtle, mouse-tracking 3D tilt — the element
// rotates slightly toward the cursor and lifts with a soft shadow, then
// eases back flat on mouse-leave. Kept deliberately gentle (a few degrees
// of rotation) so it reads as "premium depth" rather than a gimmick, and
// is skipped entirely for touch devices and reduced-motion users, where
// mouse-tracking tilt has no meaning or is actively unwanted.
export default function Tilt3D({ children, className = '', max = 8, scale = 1.02 }) {
  const ref = useRef(null)

  const supportsHover =
    typeof window !== 'undefined' && window.matchMedia?.('(hover: hover)').matches
  const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const handleMove = (e) => {
    if (!ref.current || !supportsHover || reducedMotion) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    ref.current.style.transform = `perspective(1000px) rotateY(${x * max}deg) rotateX(${-y * max}deg) scale3d(${scale}, ${scale}, ${scale})`
  }

  const handleLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`will-change-transform transition-transform duration-300 ease-smooth [transform-style:preserve-3d] ${className}`}
    >
      {children}
    </div>
  )
}
