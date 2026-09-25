export const projects = [
  {
    id: 1,
    name: 'The Signature Collection',
    location: 'Vadodara, Gujarat',
    description:
      'A collection of forty-two low-density residences arranged around two acres of shared gardens, designed for buyers who want space without leaving the city.',
    startingPrice: '₹1.65 Cr',
    availableUnits: 14,
    status: 'Under Construction',
    possession: 'Dec 2027',
    image:
      'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1600&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Meridian Business Bay',
    location: 'Ahmedabad, Gujarat',
    description:
      'A mixed-use development pairing boutique office floors with a small number of duplex residences above, built around a shared central atrium.',
    startingPrice: '₹2.10 Cr',
    availableUnits: 8,
    status: 'Under Construction',
    possession: 'Mar 2028',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Coral Bay Residences',
    location: 'Mumbai, Maharashtra',
    description:
      'A single 28-storey tower on the Worli coastline, with no more than four residences per floor and uninterrupted sea views from every unit.',
    startingPrice: '₹5.80 Cr',
    availableUnits: 6,
    status: 'Nearing Completion',
    possession: 'Aug 2026',
    image:
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1600&q=80&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Willowbrook Gardens',
    location: 'Gandhinagar, Gujarat',
    description:
      'Twenty-six independent villas set along a private lane, each built to one of three architectural typefaces so no two neighbouring homes look alike.',
    startingPrice: '₹2.75 Cr',
    availableUnits: 11,
    status: 'Under Construction',
    possession: 'Jun 2027',
    image:
      'https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=1600&q=80&auto=format&fit=crop',
  },
]

export const getProjectById = (id) => projects.find((p) => p.id === Number(id))
