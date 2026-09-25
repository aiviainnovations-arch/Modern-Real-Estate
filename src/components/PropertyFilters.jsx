import { locationsList, propertyTypesList } from '../data/properties.js'

const priceRanges = [
  { label: 'Any Price', value: '' },
  { label: 'Under ₹1 Cr', value: '0-10000000' },
  { label: '₹1 Cr – ₹2.5 Cr', value: '10000000-25000000' },
  { label: '₹2.5 Cr – ₹5 Cr', value: '25000000-50000000' },
  { label: 'Above ₹5 Cr', value: '50000000-999999999' },
]

const bedroomOptions = ['Any', '2', '3', '4', '5+']

const sortOptions = [
  { label: 'Newest', value: 'default' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Area: Largest First', value: 'area-desc' },
]

export default function PropertyFilters({ filters, onChange, onReset, resultCount }) {
  const set = (field) => (e) => onChange({ ...filters, [field]: e.target.value })

  return (
    <div className="bg-white border border-line p-6 md:p-7 mb-10">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 items-end">
        <label className="block col-span-1">
          <span className="block text-xs text-charcoal-soft mb-2">Location</span>
          <select value={filters.location} onChange={set('location')} className="input-field">
            <option value="">Any Location</option>
            {locationsList.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </label>

        <label className="block col-span-1">
          <span className="block text-xs text-charcoal-soft mb-2">Property Type</span>
          <select value={filters.type} onChange={set('type')} className="input-field">
            <option value="">Any Type</option>
            {propertyTypesList.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>

        <label className="block col-span-1">
          <span className="block text-xs text-charcoal-soft mb-2">Bedrooms</span>
          <select value={filters.bedrooms} onChange={set('bedrooms')} className="input-field">
            {bedroomOptions.map((b) => (
              <option key={b} value={b === 'Any' ? '' : b}>{b}</option>
            ))}
          </select>
        </label>

        <label className="block col-span-1">
          <span className="block text-xs text-charcoal-soft mb-2">Price</span>
          <select value={filters.price} onChange={set('price')} className="input-field">
            {priceRanges.map((p) => (
              <option key={p.label} value={p.value}>{p.label}</option>
            ))}
          </select>
        </label>

        <label className="block col-span-2 md:col-span-1">
          <span className="block text-xs text-charcoal-soft mb-2">Sort By</span>
          <select value={filters.sort} onChange={set('sort')} className="input-field">
            {sortOptions.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex items-center justify-between mt-6 pt-5 border-t border-line">
        <p className="text-sm text-charcoal-soft">
          {resultCount} {resultCount === 1 ? 'property' : 'properties'} found
        </p>
        <button type="button" onClick={onReset} className="link-underline text-sm">
          Reset filters
        </button>
      </div>
    </div>
  )
}
