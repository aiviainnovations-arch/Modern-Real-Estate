import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { locationsList, propertyTypesList } from '../data/properties.js'

const priceRanges = [
  { label: 'Any Price', value: '' },
  { label: 'Under ₹1 Cr', value: '0-10000000' },
  { label: '₹1 Cr – ₹2.5 Cr', value: '10000000-25000000' },
  { label: '₹2.5 Cr – ₹5 Cr', value: '25000000-50000000' },
  { label: 'Above ₹5 Cr', value: '50000000-999999999' },
]

export default function PropertySearch() {
  const navigate = useNavigate()
  const [location, setLocation] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (location) params.set('location', location)
    if (type) params.set('type', type)
    if (price) params.set('price', price)
    navigate(`/properties?${params.toString()}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="glass-panel px-5 py-5 md:px-6 md:py-6 w-full md:w-[820px] mx-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] gap-4 items-end">
        <label className="block">
          <span className="block text-xs text-charcoal-soft mb-2">Location</span>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input-field border-0 border-b rounded-none px-0 py-2 focus:border-bronze"
          >
            <option value="">Any Location</option>
            {locationsList.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="block text-xs text-charcoal-soft mb-2">Property Type</span>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="input-field border-0 border-b rounded-none px-0 py-2 focus:border-bronze"
          >
            <option value="">Any Type</option>
            {propertyTypesList.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="block text-xs text-charcoal-soft mb-2">Price Range</span>
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="input-field border-0 border-b rounded-none px-0 py-2 focus:border-bronze"
          >
            {priceRanges.map((p) => (
              <option key={p.label} value={p.value}>{p.label}</option>
            ))}
          </select>
        </label>

        <button type="submit" className="btn-primary w-full lg:w-auto h-[42px]">
          <Search size={16} />
          <span className="lg:hidden">Search</span>
        </button>
      </div>
    </form>
  )
}
