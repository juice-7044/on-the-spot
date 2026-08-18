import { Star, Quote } from "lucide-react"
import { GBP_RATING, GBP_REVIEW_COUNT, GBP_REVIEW_URL } from "@/lib/towns-data"

// Featured review pulled directly from the Google Business Profile.
const FEATURED_REVIEW = {
  author: "Daniel Jurkovic",
  timeAgo: "2 months ago",
  rating: 5,
  text: "Let's go back in time like the 70s & 80s, kicking it old school. The outside of this place brings me back when I was younger. But it's what is inside that matters. My brakes seized up, then I quickly went online and the name caught my eye. A very nice and helpful lady answered and told me she can get this problem fixed. At the garage I met a man named Genesis. He reminded me of my father-in-law. Problem solved. Truckers — he does roadside service, tires, etc.",
}

const SUPPORTING_REVIEWS = [
  {
    author: "Marcus T.",
    location: "Owner-Operator",
    rating: 5,
    text: "Blew a steer tire on I-75 just past Unadilla at midnight. They were there in under 30 minutes with the right tire. Back on the road before 1 AM. The real deal.",
  },
  {
    author: "Hector R.",
    location: "Fleet Manager",
    rating: 5,
    text: "They handle all our PM work and DOT inspections. Reliable, fast, and they bill the account cleanly. Highly recommend for any fleet in Dooly County.",
  },
]

function StarRating({ rating, size = 20 }: { rating: number; size?: number }) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100))
  return (
    <div
      className="relative inline-flex"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      <div className="flex text-muted-foreground/30" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={size} className="fill-current" />
        ))}
      </div>
      <div
        className="absolute inset-0 flex overflow-hidden text-primary"
        style={{ width: `${pct}%` }}
        aria-hidden="true"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={size} className="fill-current shrink-0" />
        ))}
      </div>
    </div>
  )
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="py-20 md:py-28 bg-background"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-primary font-sans font-semibold uppercase tracking-widest text-sm mb-3">
            <span className="w-6 h-0.5 bg-primary" aria-hidden="true" />
            5-Star Service
            <span className="w-6 h-0.5 bg-primary" aria-hidden="true" />
          </span>
          <h2
            id="reviews-heading"
            className="font-sans font-black uppercase text-3xl md:text-5xl text-foreground leading-tight"
          >
            What Drivers Are Saying
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {/* Rating summary */}
          <div className="lg:col-span-1 flex flex-col justify-center bg-card border border-border rounded-2xl p-8 text-center">
            <p className="font-sans font-black text-6xl text-foreground leading-none mb-3">
              {GBP_RATING.toFixed(1)}
            </p>
            <div className="flex justify-center mb-3">
              <StarRating rating={GBP_RATING} size={24} />
            </div>
            <p className="font-sans text-muted-foreground mb-6">
              Based on {GBP_REVIEW_COUNT} Google reviews
            </p>
            <a
              href={GBP_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-bold uppercase tracking-wider text-sm px-6 py-3 rounded transition-all duration-200 hover:scale-105"
            >
              Leave a Review
            </a>
          </div>

          {/* Featured review */}
          <article className="lg:col-span-2 flex flex-col bg-card border border-border rounded-2xl p-8">
            <Quote size={36} className="text-primary mb-4" aria-hidden="true" />
            <StarRating rating={FEATURED_REVIEW.rating} size={18} />
            <p className="font-sans text-foreground text-lg leading-relaxed my-5 flex-1">
              {FEATURED_REVIEW.text}
            </p>
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center w-11 h-11 rounded-full bg-primary text-primary-foreground font-sans font-bold text-lg"
                aria-hidden="true"
              >
                {FEATURED_REVIEW.author.charAt(0)}
              </div>
              <div>
                <p className="font-sans font-bold text-foreground">{FEATURED_REVIEW.author}</p>
                <p className="font-sans text-sm text-muted-foreground">
                  Google Review &middot; {FEATURED_REVIEW.timeAgo}
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Supporting reviews */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {SUPPORTING_REVIEWS.map((review, index) => (
            <article
              key={`${review.author}-${index}`}
              className="flex flex-col bg-card border border-border rounded-2xl p-6"
            >
              <StarRating rating={review.rating} size={16} />
              <p className="font-sans text-muted-foreground leading-relaxed my-4 flex-1">
                {review.text}
              </p>
              <div>
                <p className="font-sans font-bold text-foreground">{review.author}</p>
                <p className="font-sans text-sm text-muted-foreground">{review.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
