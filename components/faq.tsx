import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ_ITEMS = [
  {
    question: "Do you offer 24/7 truck tire repair near me?",
    answer:
      "Yes. On The Spot Repair Service & Tires provides 24/7 emergency truck tire repair throughout Unadilla, GA and the surrounding area. Whether you have a blowout on I-75, a slow leak at the shipper, or a flat in the yard at 2 AM, our mobile service can come to you. Call us anytime — day, night, or weekend.",
  },
  {
    question: "Do you service both semi-trucks and passenger vehicles?",
    answer:
      "Yes. While our main customer base is semi-trucks and heavy-duty fleets, we are a full-service mechanic shop for both commercial trucks and passenger cars. From a flat tire on the highway to a full engine rebuild, we have the tools, expertise, and equipment to handle any job on any vehicle.",
  },
  {
    question: "What areas do you cover for roadside truck repair?",
    answer:
      "We cover Unadilla, GA and surrounding communities including Perry, Vienna, Hawkinsville, Cordele, and along major corridors like I-75 and US-41. If you're broken down within a reasonable radius of our shop, we can dispatch a technician to your location for emergency roadside service.",
  },
  {
    question: "Can you handle major engine and driveline repairs, or just tires?",
    answer:
      "We do it all. On The Spot is a full-service mechanic shop — not just a tire bay. We handle engine rebuilds, transmission work, brake jobs, driveline repair, electrical diagnostics, PM services, and full DOT inspections in addition to tire repair and replacement. Our shop is equipped to service heavy-duty trucks from bumper to bumper.",
  },
]

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 md:py-28 bg-secondary"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-primary font-sans font-semibold uppercase tracking-widest text-sm mb-3">
            <span className="w-6 h-0.5 bg-primary" aria-hidden="true" />
            Got Questions?
            <span className="w-6 h-0.5 bg-primary" aria-hidden="true" />
          </span>
          <h2
            id="faq-heading"
            className="font-sans font-black uppercase text-3xl md:text-5xl text-foreground leading-tight"
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-border/50 bg-card rounded-lg mb-3 px-6 border"
            >
              <AccordionTrigger className="font-sans font-bold text-base md:text-lg text-foreground hover:no-underline hover:text-primary transition-colors py-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-sans text-muted-foreground text-base leading-relaxed pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="font-sans text-muted-foreground mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <a
            href="tel:4782447008"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-bold uppercase tracking-wider text-sm px-6 py-3 rounded transition-all duration-200 hover:scale-105"
          >
            Call 478-244-7008
          </a>
        </div>
      </div>
    </section>
  )
}
