import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import { videos } from '../data/videos.js'
import VideoBackground from './VideoBackground.jsx'
import Tilt3D from './Tilt3D.jsx'

export default function FeaturedProject() {
  const project = projects[0]

  return (
    <section className="container-edit">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="[perspective:1200px]">
          <Tilt3D max={6} className="h-[360px] md:h-[520px] shadow-[0_30px_60px_-25px_rgba(30,33,38,0.4)]">
            <VideoBackground
              src={videos.featuredProject.src}
              poster={videos.featuredProject.poster}
              label={project.name}
              overlay="none"
              className="h-full w-full"
            />
          </Tilt3D>
        </div>

        <div>
          <p className="eyebrow mb-5">The Signature Collection</p>
          <h2 className="heading-serif text-4xl md:text-5xl leading-[1.12] max-w-md">
            Designed for those who appreciate space.
          </h2>
          <p className="mt-6 text-charcoal-soft leading-relaxed max-w-md">
            {project.description}
          </p>

          <div className="grid grid-cols-3 gap-6 mt-9 max-w-md">
            <div>
              <p className="text-xs text-charcoal-soft mb-2">Location</p>
              <p className="font-serif text-lg text-charcoal">{project.location.split(',')[0]}</p>
            </div>
            <div>
              <p className="text-xs text-charcoal-soft mb-2">Starting Price</p>
              <p className="font-serif text-lg text-charcoal">{project.startingPrice}</p>
            </div>
            <div>
              <p className="text-xs text-charcoal-soft mb-2">Available Units</p>
              <p className="font-serif text-lg text-charcoal">{project.availableUnits}</p>
            </div>
          </div>

          <Link to="/projects" className="link-underline mt-10 inline-flex">
            Explore Project →
          </Link>
        </div>
      </div>
    </section>
  )
}
