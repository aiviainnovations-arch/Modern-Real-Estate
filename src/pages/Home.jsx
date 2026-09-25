import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import FeaturedProject from '../components/FeaturedProject.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import LocationSection from '../components/LocationSection.jsx'
import AboutSection from '../components/AboutSection.jsx'
import CTASection from '../components/CTASection.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { properties } from '../data/properties.js'

const featured = properties.filter((p) => p.featured).slice(0, 4)

export default function Home() {
  return (
    <div className="space-y-28 md:space-y-36 pb-28 md:pb-36">
      <Hero />

      <section className="container-edit">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <SectionHeading
            eyebrow="Featured Properties"
            title="A selection worth exploring"
            description="A selection of exceptional spaces chosen for their location, design and value."
          />
          <Link to="/properties" className="link-underline hidden sm:inline-flex">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <FeaturedProject />

      <WhyChooseUs />

      <LocationSection />

      <AboutSection />

      <CTASection />
    </div>
  )
}
