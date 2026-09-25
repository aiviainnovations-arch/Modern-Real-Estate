// Generates a small, elegant inline SVG placeholder as a data URI — this
// requires no network request, so it can never itself fail to load.
// Used as an onError fallback on <img> tags in case an external photo
// URL is ever unreachable (e.g. offline use, a dead hotlink, ad blockers).
export function makePlaceholder(label = 'Luxe Estates') {
  const safeLabel = String(label).slice(0, 40)
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <rect width="800" height="600" fill="#F0E7D8" />
      <g transform="translate(400,270)" fill="none" stroke="#8B6A3F" stroke-width="2.5">
        <path d="M-70 46 L-70 -14 L0 -64 L70 -14 L70 46 Z" />
        <line x1="-70" y1="46" x2="70" y2="46" />
        <rect x="-18" y="10" width="36" height="36" />
      </g>
      <text x="400" y="366" font-family="Manrope, Arial, sans-serif" font-size="16" fill="#3A3F47" text-anchor="middle" letter-spacing="0.5">${safeLabel}</text>
    </svg>
  `.trim()
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

// Attach to an <img>'s onError handler: onError={(e) => handleImageError(e, 'Some Label')}
export function handleImageError(e, label) {
  const img = e.currentTarget
  if (img.dataset.fallback === 'true') return
  img.dataset.fallback = 'true'
  img.src = makePlaceholder(label)
}
