import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const interestOptions = [
  'Buying a Home',
  'Selling a Property',
  'Investment Opportunities',
  'Luxury Villas',
  'New Projects',
]

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /^[0-9+\-\s()]{7,15}$/

export default function ContactForm({
  variant = 'contact',
  submitLabel = 'Send Enquiry',
  propertyName,
}) {
  const isPropertyEnquiry = variant === 'property'

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    interest: interestOptions[0],
    message: isPropertyEnquiry && propertyName
      ? `I'm interested in ${propertyName}. Please share more details.`
      : '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.email.trim()) next.email = 'Please enter your email.'
    else if (!emailPattern.test(values.email)) next.email = 'Enter a valid email address.'
    if (!values.phone.trim()) next.phone = 'Please enter your phone number.'
    else if (!phonePattern.test(values.phone)) next.phone = 'Enter a valid phone number.'
    if (!values.message.trim()) next.message = 'Please add a short message.'
    return next
  }

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    setErrors((err) => ({ ...err, [field]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validation = validate()
    setErrors(validation)
    if (Object.keys(validation).length === 0) {
      // No backend is wired up — this is a frontend-only demo form.
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="border border-line bg-white p-8 md:p-10 text-center">
        <CheckCircle2 className="mx-auto text-bronze" size={36} />
        <h3 className="heading-serif text-2xl mt-4">Thank you, {values.name.split(' ')[0]}.</h3>
        <p className="mt-2 text-charcoal-soft leading-relaxed">
          Your enquiry has been received. A member of our team will be in
          touch within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-xs text-charcoal-soft mb-2">Name</label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={handleChange('name')}
          className="input-field"
          placeholder="Your full name"
        />
        {errors.name && <p className="text-xs text-red-600 mt-1.5">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-xs text-charcoal-soft mb-2">Email</label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange('email')}
            className="input-field"
            placeholder="you@email.com"
          />
          {errors.email && <p className="text-xs text-red-600 mt-1.5">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs text-charcoal-soft mb-2">Phone</label>
          <input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange('phone')}
            className="input-field"
            placeholder="+91 98765 43210"
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1.5">{errors.phone}</p>}
        </div>
      </div>

      {!isPropertyEnquiry && (
        <div>
          <label htmlFor="interest" className="block text-xs text-charcoal-soft mb-2">Interested In</label>
          <select
            id="interest"
            value={values.interest}
            onChange={handleChange('interest')}
            className="input-field"
          >
            {interestOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-xs text-charcoal-soft mb-2">Message</label>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={handleChange('message')}
          className="input-field resize-none"
          placeholder="Tell us a little about what you're looking for."
        />
        {errors.message && <p className="text-xs text-red-600 mt-1.5">{errors.message}</p>}
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        {submitLabel}
      </button>
    </form>
  )
}
