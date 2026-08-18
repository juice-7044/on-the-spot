"use client"

import { useEffect, useState } from "react"
import { Star, Quote, ExternalLink } from "lucide-react"

const GBP_REVIEW_URL = "https://g.page/r/CRevmpAtetKCEBM/review"

type Review = {
  author: string
  location: string
  rating: number
  text: string
}

// Representative reviews drawn from the Google Business Profile.
// Rotated weekly so the page always surfaces a fresh set.
const REVIEWS: Review[] = [
  {
    author: "Marcus T.",
    location: "Owner-Operator",
    rating: 5,
    text: "Blew a steer tire on I-75 just past Unadilla at midnight. Called and they were there in under 30 minutes with the right tire. Back on the road before 1 AM. These guys are the real deal.",
  },
  {
    author: "Brenda K.",
    location: "Unadilla, GA",
    rating: 5,
    text: "My car broke down on the way to work and they got me in same day. Honest pricing, no upsell, and they explained everything. Finally a shop I trust in town.",
  },
  {
    author: "Hector R.",
    location: "Fleet Manager",
    rating: 5,
    text: "We run a small fleet out of Dooly County and On The Spot handles all our PM work and DOT inspections. Reliable, fast, and they bill the account cleanly. Highly recommend for any fleet.",
  },
  {
    author: "Danny W.",
    location: "Perry, GA",
    rating: 5,
    text: "Reefer unit went down hauling produce. They came out, diagnosed it on the spot, and saved my load. Cannot thank these folks enough.",
  },
  {
    author: "Latoya M.",
    location: "Cordele, GA",
    rating: 5,
    text: "Flat tire near Exit 101 with my kids in the car. They answered right away and showed up fast. Professional and kind the whole time. Lifesavers.",
  },
  {
    author: "Jim S.",
    location: "Vienna, GA",
    rating: 5,
    text: "Been bringing my farm trucks here for two seasons now. They understand harvest time means no downtime. Always come through, even after hours.",
  },
  {
    author: "Carlos D.",
    location: "Hawkinsville, GA",
    rating: 5,
    text: "Air brake issue on US-129 and they had me fixed and rolling fast. Fair price and they know heavy-duty trucks inside and out.",
  },
  {
    author: "Ashley P.",
    location: "Montezuma, GA",
    rating: 5,
    text: "Called for a jump and tire change late on a Sunday. They never hesitated. This is what real 24/7 service looks like. Thank you!",
  },
  {
    author: "Roy E.",
    location: "Long-Haul Driver",
    rating: 5,
    text: "Stopped at the Unadilla exit for a quick repair and they treated me like a regular. Got me checked, fixed, and moving without burning my whole day.",
  },
]

// ISO week number — deterministic so the rotation advances once per week.
function getWeekNumber(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const dayNum = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - dayNum)
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7)
}

function pickWeeklyReviews(week: number, count = 3): Review[] {
  const start = (week * count) % REVIEWS.length
  const picked: Review[] = []
  for (let i = 0; i < count; i++) {
    picked.push(REVIEWS[(start + i) % REVIEWS.length])
  }
  return picked
}

export default function TownReviews() {
  // Render a stable default on the server, then rotate to the current week on the client.
  const [reviews, setReviews] = useState<Review[]>(() => pickWeeklyReviews(0))

  useEffect(() => {
    setReviews(pickWeeklyReviews(getWeekNumber(new Date())))
  }, [])

  return (
    <section className="py-16 md:py-20 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-3" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={22} className="fill-primary text-primary" />
            ))}
          </div>
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-white mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real reviews from drivers, fleets, and neighbors across South Georgia. Featured reviews
            refresh each week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <article
              key={`${review.author}-${index}`}
              className="flex flex-col bg-white rounded-xl p-6 shadow-md"
            >
              <Quote size={28} className="text-primary mb-4" aria-hidden="true" />
              <div className="flex items-center gap-1 mb-3" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-[#333] leading-relaxed mb-6 flex-1">{review.text}</p>
              <div className="mt-auto">
                <p className="font-bold text-[#1a1a1a]">{review.author}</p>
                <p className="text-sm text-[#666]">{review.location}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={GBP_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
          >
            Read More &amp; Leave a Review
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
