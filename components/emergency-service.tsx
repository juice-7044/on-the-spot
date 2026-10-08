import { Phone } from "lucide-react"

export default function EmergencyService() {
  return (
    <section
      id="emergency-service"
      aria-labelledby="emergency-service-heading"
      className="bg-card border-y border-border px-4 py-14 sm:px-6 md:py-20"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-6 break-words">
        <h2
          id="emergency-service-heading"
          className="font-sans text-3xl font-black uppercase leading-tight text-foreground text-balance md:text-5xl"
        >
          <span aria-hidden="true">🚨 </span>
          24/7 Emergency Tire &amp; Repair Service
        </h2>

        <div className="flex flex-col gap-3 font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            <strong className="text-foreground">Shop hours:</strong> Mon–Fri 8:00 AM – 5:00 PM, Sat 8:00 AM – 12:00
            PM: no call-out fee for work at the shop during these hours.
          </p>
          <p>
            <strong className="text-foreground">After hours, weekends &amp; holidays:</strong> Emergency service is
            available 24/7 at{" "}
            <a
              href="tel:+14788183967"
              className="font-bold text-primary underline underline-offset-4 hover:no-underline"
            >
              (478) 818-3967
            </a>
            .
          </p>
        </div>

        <div className="rounded-lg border-2 border-primary bg-primary p-5 text-primary-foreground shadow-lg md:p-7">
          <p className="font-sans text-lg leading-snug md:text-2xl">
            A <strong className="font-black uppercase">$250 call-out fee</strong> applies to:
          </p>
          <ul className="mt-4 flex list-disc flex-col gap-2 pl-6 font-sans text-base md:text-lg">
            <li>Every roadside and mobile service call, any time, day or night</li>
            <li>
              Any service at the shop outside shop hours, including drive-ins after closing,{" "}
              <strong className="font-black">even if staff are still on site</strong>
            </li>
          </ul>
        </div>

        <p className="font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
          The call-out fee is in addition to parts and labor. Roadside labor is $150 per hour. We&apos;ll always give
          you the full price before any work begins, and nothing starts until you approve it.
        </p>

        <dl className="flex flex-col gap-2 font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
          <div>
            <dt className="inline font-bold text-foreground">Service area: </dt>
            <dd className="inline">
              30 mile radius miles from Unadilla, GA. Mileage beyond that: additional charges may apply.
            </dd>
          </div>
          <div>
            <dt className="inline font-bold text-foreground">Payment accepted: </dt>
            <dd className="inline">credit/debit or Zelle</dd>
          </div>
        </dl>

        <a
          href="tel:+14788183967"
          className="inline-flex w-full items-center justify-center gap-3 rounded bg-primary px-6 py-4 font-sans text-base font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto sm:self-start"
          aria-label="Call emergency service at (478) 818-3967"
        >
          <Phone size={20} aria-hidden="true" />
          Call (478) 818-3967
        </a>
      </div>
    </section>
  )
}
