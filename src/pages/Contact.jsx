import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import ContactForm from '../components/ContactForm.jsx'

export default function Contact() {
  return (
    <div className="pt-14 md:pt-20 pb-28 md:pb-36">
      <div className="container-edit grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
        <div>
          <p className="eyebrow mb-5">Get in Touch</p>
          <h1 className="heading-serif text-4xl md:text-5xl leading-[1.12] max-w-md">
            Let's find the right space for you.
          </h1>
          <p className="mt-6 text-charcoal-soft leading-relaxed max-w-sm">
            Whether you're buying, selling or simply exploring what's
            available, our team is happy to talk through your options —
            no obligation.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-bronze mt-0.5 shrink-0" />
              <span className="text-charcoal-soft">204 Alkapuri Avenue, Vadodara, Gujarat 390007</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-bronze mt-0.5 shrink-0" />
              <span className="text-charcoal-soft">+91 98765 43210</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-bronze mt-0.5 shrink-0" />
              <span className="text-charcoal-soft">hello@luxeestates.in</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="text-bronze mt-0.5 shrink-0" />
              <span className="text-charcoal-soft">Mon – Sat, 10:00 AM – 7:00 PM</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-line p-7 md:p-10 h-fit">
          <h2 className="heading-serif text-2xl mb-2">Send an Enquiry</h2>
          <p className="text-sm text-charcoal-soft mb-7">
            Fill in your details and we'll get back to you shortly.
          </p>
          <ContactForm variant="contact" submitLabel="Send Enquiry" />
        </div>
      </div>
    </div>
  )
}
