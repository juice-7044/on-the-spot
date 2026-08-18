import { Phone } from "lucide-react"

export default function EmergencyMarquee() {
  const content = (
    <>
      <span className="flex items-center gap-3 px-8">
        <Phone size={18} className="flex-shrink-0" aria-hidden="true" />
        <span>Need Immediate Roadside Assistance?</span>
        <a
          href="tel:4782447008"
          className="font-bold underline underline-offset-2 hover:no-underline"
        >
          Call 478-244-7008
        </a>
      </span>
      <span className="px-8" aria-hidden="true">•</span>
      <span className="flex items-center gap-3 px-8">
        <Phone size={18} className="flex-shrink-0" aria-hidden="true" />
        <span>Need Immediate Roadside Assistance?</span>
        <a
          href="tel:4782447008"
          className="font-bold underline underline-offset-2 hover:no-underline"
        >
          Call 478-244-7008
        </a>
      </span>
      <span className="px-8" aria-hidden="true">•</span>
      <span className="flex items-center gap-3 px-8">
        <Phone size={18} className="flex-shrink-0" aria-hidden="true" />
        <span>Need Immediate Roadside Assistance?</span>
        <a
          href="tel:4782447008"
          className="font-bold underline underline-offset-2 hover:no-underline"
        >
          Call 478-244-7008
        </a>
      </span>
      <span className="px-8" aria-hidden="true">•</span>
    </>
  )

  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
      <div className="animate-scroll-left flex whitespace-nowrap font-semibold text-sm uppercase tracking-wide">
        {content}
        {content}
      </div>
    </div>
  )
}
