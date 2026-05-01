import { MapPin, ExternalLink } from 'lucide-react'

export default function ContactMap() {
  const mapSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.7!2d121.097!3d14.652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b808b7f62f4b%3A0x1a4c3f2b2b2b2b2b!2sMarikina%20Heights%2C%20Marikina%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph'

  return (
    <section className="py-20 bg-[#f5f0eb]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-[#f58c23] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Find Us
          </span>
          <h2 className="font-sans font-black text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-3">
            Our <span className="text-[#f58c23]">Location</span>
          </h2>
          <p className="font-inter text-[#6b6b6b] text-sm leading-relaxed max-w-xl mx-auto">
            Visit our office at Espasyo Learning and Recreation Hub, #6 Torres Bugallon Street,
            Marikina Heights, Marikina City.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-[#e8e0d8] shadow-xl shadow-[#383838]/10 relative">
          <iframe
            src={mapSrc}
            width="100%"
            height="450"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jexpress Tourist Transport Cooperative Location — Marikina Heights, Marikina City"
            aria-label="Google Map showing JTTC office location in Marikina Heights"
          />

          <div className="absolute bottom-5 left-5 bg-white rounded-xl shadow-lg border border-[#e8e0d8] px-5 py-4 flex items-start gap-3 max-w-xs">
            <div className="w-9 h-9 rounded-lg bg-[#f58c23] flex items-center justify-center flex-shrink-0">
              <MapPin size={16} className="text-white" strokeWidth={2} />
            </div>
            <div>
              <p className="font-sans font-bold text-[#383838] text-xs uppercase tracking-wide mb-0.5">
                JTTC Office
              </p>
              <p className="font-inter text-[#6b6b6b] text-xs leading-relaxed">
                Espasyo Learning and Recreation Hub,<br />
                Marikina Heights, Marikina City
              </p>
              <a
                href="https://maps.google.com/?q=Marikina+Heights+Marikina+City"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#f58c23] text-xs font-bold mt-1.5 hover:underline"
              >
                Open in Maps
                <ExternalLink size={11} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
