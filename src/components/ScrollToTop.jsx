import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Ensures every route change starts scrolled to the top of the page,
// which React Router does not do automatically.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])

  return null
}
