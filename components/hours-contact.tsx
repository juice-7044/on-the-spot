import { Clock, MapPin, Phone, Mail } from "lucide-react"

const HOURS = [
  { day: "Monday", hours: "8:00 AM – 5:00 PM", open: true },
  { day: "Tuesday", hours: "8:00 AM – 5:00 PM", open: true },
  { day: "Wednesday", hours: "8:00 AM – 5:00 PM", open: true },
  { day: "Thursday", hours: "8:00 AM – 5:00 PM", open: true },
  { day: "Friday", hours: "8:00 AM – 5:00 PM", open: true },
  { day: "Saturday", hours: "8:00 AM – 12:00 PM", open: true },
  { day: "Sunday", hours: "Closed (Call-Out Available)", open: false },
]

export default function HoursContact() {
  return (
    <section id="hours" className="bg-background py-24 px-6" aria-labelledby="hours-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block font-sans uppercase text-primary tracking-widest text-sm font-semibold mb-3">
            Plan Your Visit
          </span>
          <h2
            id="hours-heading"
            className="font-sans font-black uppercase text-4xl md:text-6xl text-foreground leading-none"
          >
            Hours &{" "}
            <span className="text-primary">Contact</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Hours card */}
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center" aria-hidden="true">
                <Clock size={20} className="text-primary" />
              </div>
              <h3 className="font-sans font-bold uppercase text-xl text-foreground tracking-wide">
                Shop Hours
              </h3>
            </div>

            <ul className="flex flex-col gap-0 divide-y divide-border" role="list">
              {HOURS.map(({ day, hours, open }) => (
                <li
                  key={day}
                  className="flex items-center justify-between py-3.5"
                >
                  <span className="font-sans font-semibold uppercase tracking-wide text-sm text-foreground">
                    {day}
                  </span>
                  <span
                    className={`font-sans text-sm ${
                      open ? "text-muted-foreground" : "text-primary"
                    }`}
                  >
                    {hours}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                <span className="text-primary font-semibold">Note:</span> We are closed on Sundays but remain available for 24 hour emergency roadside assistance.
              </p>
            </div>
          </div>

          {/* Contact card */}
          <div id="contact" className="flex flex-col gap-6">
            <div className="bg-card border border-border rounded-lg p-8 flex-1">
              <h3 className="font-sans font-bold uppercase text-xl text-foreground tracking-wide mb-8">
                Get In Touch
              </h3>

              <div className="flex flex-col gap-6">
                <a
                  href="tel:4782447008"
                  className="flex items-center gap-4 group"
                  aria-label="Call us at 478-244-7008"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0" aria-hidden="true">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-sans uppercase text-xs tracking-widest text-muted-foreground mb-0.5">Phone</p>
                    <p className="font-sans font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      478-244-7008
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:onthespotrepair23@gmail.com"
                  className="flex items-center gap-4 group"
                  aria-label="Email us at onthespotrepair23@gmail.com"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0" aria-hidden="true">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-sans uppercase text-xs tracking-widest text-muted-foreground mb-0.5">Email</p>
                    <p className="font-sans font-bold text-base text-foreground group-hover:text-primary transition-colors break-all">
                      onthespotrepair23@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=990+2nd+Street+Unadilla+GA+31091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                  aria-label="Get directions to 990 2nd Street Unadilla GA 31091"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0" aria-hidden="true">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-sans uppercase text-xs tracking-widest text-muted-foreground mb-0.5">Address</p>
                    <p className="font-sans font-bold text-base text-foreground group-hover:text-primary transition-colors">
                      990 2nd Street<br />Unadilla, GA 31091
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-lg overflow-hidden border border-border h-56 w-full bg-card relative">
              <iframe
                title="On The Spot Repair Services & Tires location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.5!2d-83.734!3d32.262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s990+2nd+Street%2C+Unadilla%2C+GA+31091!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
