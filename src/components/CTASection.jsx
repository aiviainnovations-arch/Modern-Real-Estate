import { Link } from 'react-router-dom'
import VideoBackground from './VideoBackground.jsx'
import { videos } from '../data/videos.js'

export default function CTASection() {
  return (
    <section className="container-edit">
      <div className="relative overflow-hidden min-h-[420px] flex items-center justify-center text-center px-8 py-20 md:px-20 md:py-24">
        <div className="absolute inset-0">
          <VideoBackground
            src={videos.cta.src}
            poster={videos.cta.poster}
            label="Luxe Estates"
            overlay="dark"
            className="h-full w-full"
          />
        </div>

        <div className="relative z-10">
          <h2 className="heading-serif text-4xl md:text-5xl leading-[1.1] max-w-2xl mx-auto text-ivory">
            Let's find your next address.
          </h2>
          <p className="mt-5 text-ivory/80 max-w-md mx-auto leading-relaxed">
            Tell us what you're looking for and we'll help you discover the
            right property.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">
            <Link to="/properties" className="btn-primary !bg-bronze hover:!bg-bronze-dark">
              Start Your Search
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 glass-panel-dark text-ivory px-7 py-3.5 text-sm tracking-wide transition-colors duration-300 ease-smooth hover:bg-charcoal/60"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
