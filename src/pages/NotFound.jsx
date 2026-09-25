import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-edit py-32 md:py-40 text-center">
      <p className="eyebrow mb-5">404</p>
      <h1 className="heading-serif text-4xl md:text-5xl">Page not found</h1>
      <p className="mt-5 text-charcoal-soft max-w-md mx-auto leading-relaxed">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link to="/" className="btn-primary mt-9 inline-flex">
        Back to Home
      </Link>
    </div>
  )
}
