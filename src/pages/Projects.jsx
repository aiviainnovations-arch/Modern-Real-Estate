import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import { handleImageError } from '../utils/imagePlaceholder.js'

export default function Projects() {
  return (
    <div className="pt-14 md:pt-20 pb-28 md:pb-36">
      <div className="container-edit mb-16 md:mb-20">
        <p className="eyebrow mb-4">Developments</p>
        <h1 className="heading-serif text-4xl md:text-5xl leading-[1.1] max-w-xl">
          Projects shaping tomorrow's addresses
        </h1>
        <p className="mt-5 text-charcoal-soft max-w-lg leading-relaxed">
          A small number of developments we've chosen to represent — each
          vetted for design quality, location and long-term value.
        </p>
      </div>

      <div className="space-y-24 md:space-y-32">
        {projects.map((project, index) => {
          const reversed = index % 2 === 1
          return (
            <section key={project.id} className="container-edit">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className={`img-zoom h-[320px] md:h-[460px] ${reversed ? 'lg:order-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    onError={(e) => handleImageError(e, project.name)}
                  />
                </div>

                <div className={reversed ? 'lg:order-1' : ''}>
                  <p className="eyebrow mb-4">{project.status}</p>
                  <h2 className="heading-serif text-3xl md:text-4xl leading-[1.15] max-w-md">
                    {project.name}
                  </h2>
                  <p className="mt-2 text-charcoal-soft">{project.location}</p>
                  <p className="mt-5 text-charcoal-soft leading-relaxed max-w-md">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-6 mt-8 max-w-md">
                    <div>
                      <p className="text-xs text-charcoal-soft mb-2">Starting Price</p>
                      <p className="font-serif text-lg text-charcoal">{project.startingPrice}</p>
                    </div>
                    <div>
                      <p className="text-xs text-charcoal-soft mb-2">Available Units</p>
                      <p className="font-serif text-lg text-charcoal">{project.availableUnits}</p>
                    </div>
                    <div>
                      <p className="text-xs text-charcoal-soft mb-2">Possession</p>
                      <p className="font-serif text-lg text-charcoal">{project.possession}</p>
                    </div>
                  </div>

                  <Link to="/contact" className="link-underline mt-9 inline-flex">
                    Explore Project →
                  </Link>
                </div>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
