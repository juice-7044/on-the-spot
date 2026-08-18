import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="bg-[#f5f5f5] py-24 px-6" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Text */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary" aria-hidden="true" />
              <span className="font-sans uppercase text-primary tracking-widest text-sm font-semibold">
                Our Character
              </span>
            </div>
            <h2
              id="about-heading"
              className="font-sans font-black uppercase text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] text-balance leading-none mb-6"
            >
              Rugged American<br />Workmanship.
            </h2>
            <p className="font-sans text-[#555] leading-relaxed text-base mb-6">
              We&apos;re not a flashy corporate chain. We are real mechanics who know what we&apos;re doing and get it done. When you trust us with your biggest rig or your family car, we treat it with respect and expertise.
            </p>
            <p className="font-sans text-[#555] leading-relaxed text-base mb-10">
              Located in Unadilla, GA, we built our reputation on being dependable, tough, and ready when you need us most. We fix it right, and we get you back on the road.
            </p>

            {/* Feature cards — 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-primary pl-5 py-2">
                <h3 className="font-sans font-bold text-lg text-[#1a1a1a] mb-1">No Excuses</h3>
                <p className="font-sans text-[#666] text-sm leading-relaxed">
                  We find the problem and we fix it. Period.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-5 py-2">
                <h3 className="font-sans font-bold text-lg text-[#1a1a1a] mb-1">Fast Response</h3>
                <p className="font-sans text-[#666] text-sm leading-relaxed">
                  We know time is money, especially for commercial drivers.
                </p>
              </div>
            </div>


          </div>

          {/* Image — nudged up with negative margin */}
          <div className="relative w-full lg:w-1/2 aspect-[4/3] flex-shrink-0 lg:-mt-8">
            {/* Red corner accents */}
            <div className="absolute -top-2 -right-2 w-full h-full border-t-4 border-r-4 border-primary rounded-tr-lg" aria-hidden="true" />
            <div className="absolute -bottom-2 -left-2 w-24 h-1 bg-primary" aria-hidden="true" />
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/tire-repair.jpg"
                alt="Mechanic hands working on a commercial truck wheel with an impact wrench"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
