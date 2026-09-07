// Canonical business + Google Business Profile review data.
// SINGLE SOURCE OF TRUTH — update these values in one place when the GBP totals change.
// Used by the homepage schema, the Reviews section, and every town-page schema so the
// aggregateRating markup never conflicts across the site.
export const SITE_URL = "https://www.onthespotrepairservicestires.com"
export const GBP_RATING = 4.4
export const GBP_REVIEW_COUNT = 35
export const GBP_REVIEW_URL = "https://g.page/r/CRevmpAtetKCEBM/review"

export interface TownData {
  slug: string
  name: string
  county: string
  distance: string
  miles: string
  highway: string
  landmarks: string[]
  industries: string[]
  competitiveGap: string
  seasonalNote?: string
  metaTitle: string
  metaDescription: string
  h1Title?: string
  heroIntro: string
  heroSecondary: string
  localContent: string
  spanishContent?: string
  commonCalls: string[]
  faqs: { question: string; answer: string }[]
  services: { service: string; availability: string }[]
  schemaDescription: string
  coordinates: { lat: number; lng: number }
  nearbyTowns?: { name: string; slug: string }[]
}

export const TOWNS: Record<string, TownData> = {
  unadilla: {
    slug: "unadilla",
    name: "Unadilla",
    county: "Dooly",
    distance: "0",
    miles: "0",
    highway: "I-75 & US-41",
    landmarks: [
      "I-75 Exit 121",
      "US-41 & GA-230 intersection",
      "Downtown Unadilla",
      "Dooly County industrial corridor"
    ],
    industries: ["Trucking hub", "Local businesses", "Agriculture", "Retail"],
    competitiveGap: "Our home base means fastest response times in the region",
    metaTitle: "Truck & Tire Repair Unadilla GA | Serving Perry, Vienna, Cordele, Hawkinsville & All South Georgia",
    metaDescription: "On The Spot Truck & Tire Repair in Unadilla, GA. Full-service shop with 24/7 mobile roadside service across South Georgia — Perry, Vienna, Cordele, Hawkinsville, Elko, Byromville & Montezuma. Call now!",
    h1Title: "24-Hour Truck & Tire Repair in Unadilla, GA",
    heroIntro: "Welcome to our home base. On The Spot Repair Service & Tires is located right here in Unadilla at the crossroads of I-75 and US-41 — the heart of Middle and South Georgia trucking country. As the Dooly County seat shop closest to the interstate, we deliver the fastest response in our entire service area.",
    heroSecondary: "Whether you are a local resident with a flat tire, a trucker passing through on I-75, or a fleet operator based anywhere in South Georgia, our full-service shop handles everything from emergency roadside tire changes to complete engine rebuilds. We dispatch 24/7 mobile units to Perry, Vienna, Cordele, Hawkinsville, Elko, Byromville, and Montezuma. Walk-in service available Monday through Saturday.",
    localContent: `**Your Hometown Mechanic Shop**

On The Spot Repair Service & Tires has called Unadilla home since day one. Located at **990 2nd Street**, we sit at the strategic intersection of **I-75 and US-41** — two of the busiest commercial corridors in Middle Georgia. This location was no accident. We are positioned to serve the thousands of trucks that pass through Unadilla daily, as well as the local community that depends on reliable vehicle service.

**Why Unadilla is the Perfect Hub**

Unadilla sits at **I-75 Exit 121**, making us accessible to northbound and southbound traffic within minutes. Truckers heading between Atlanta and Florida know this exit well — it is a natural stopping point, and when something goes wrong, we are right here waiting.

For local Unadilla residents, we are your neighbor. We service:

- Family cars and pickup trucks
- Local delivery vehicles
- Farm equipment and agricultural trucks
- School buses and municipal vehicles
- Small business fleet vehicles

**Full Shop Capabilities**

Unlike mobile-only services, our Unadilla location has a **complete shop facility** with:

- Multiple service bays for simultaneous repairs
- Heavy-duty lifts for semi-trucks and commercial vehicles
- Diagnostic computers for both commercial and passenger vehicles
- Tire mounting and balancing equipment for all sizes
- Parts inventory for common repairs — no waiting for orders

**24/7 Emergency Service Starts Here**

Even when you call us at 2 AM from Cordele or Perry, the dispatch happens from Unadilla. Our mobile units roll out from this location, fully stocked and ready to reach you anywhere within our 30-mile service radius. Being based in Unadilla means we can cover I-75 from Perry to Cordele, US-41 from Vienna to Elko, and every backroad in between.

**Community Roots**

We are not a chain. We are not a franchise. We are a local business built by mechanics who live and work in this community. When you bring your vehicle to us, you are supporting Unadilla — and getting the kind of personalized service that only a hometown shop can provide.

**Centrally Located in Dooly County — Serving All of South Georgia**

Unadilla is part of **Dooly County**, and our shop sits in one of the most strategically central locations in South Georgia. Positioned at **I-75 Exit 121** with direct access to US-41, GA-230, US-129, and GA-26, we can reach almost any community in Middle and South Georgia quickly. That central position is exactly why we serve as the hub for a wide regional service area.

From our Unadilla home base, our 24/7 mobile units regularly dispatch across the region:

- **Perry, GA** — 18 miles north via I-75
- **Vienna, GA** — 12 miles south via US-41
- **Cordele, GA** — 22 miles south via I-75
- **Hawkinsville, GA** — 16 miles east via US-129
- **Elko, GA** — 8 miles north via US-341
- **Byromville, GA** — 10 miles west via GA-90
- **Montezuma, GA** — 20 miles west via GA-26

No matter where you break down in South Georgia, the call routes back to Unadilla — and a fully-stocked mobile unit rolls out to reach you. Being centrally located means **mobile tire repair South Georgia** drivers can count on, with faster response than shops tucked away in any single town.

**Right at the I-75 & US-41 Crossroads**

Unadilla doesn't look like a truck repair hub — until you're broken down on I-75 at mile marker 138 with no shoulder and traffic flying past at 80 mph. Our shop sits right where I-75 and US-41 cross, which means we're positioned to respond north toward Perry, south toward Cordele, east toward Dublin, or west toward Montezuma faster than any shop in a bigger city. Local construction on West Mary Street and ongoing drainage improvements mean more heavy equipment and dump trucks moving through town this summer, and those rigs don't run on 9-to-5 schedules. Whether you're a local fleet running county road maintenance or a through-trucker who picked the wrong exit, our bays and mobile units are ready. This is where we live, where we work, and where we answer the phone at midnight.

**Harvest Season Puts Unadilla in Overdrive**

Sitting in the middle of Dooly County farm country, Unadilla feels every shift in the agricultural calendar. When peanut, cotton, and pecan harvests hit in late summer and fall, the trucks change: loaded grain haulers, module trucks, and produce reefers pour onto US-41 and the I-75 on-ramps, running long days on hot tires and pushing equipment that's been idle since the last season. Those are the weeks our phone rings the most — worn steer tires giving out under a full load, brakes overheating on repeat trips to the gin, and jump-starts for rigs that sat all winter. We stock heavy-duty ag and commercial tires year-round precisely because we know that when Unadilla's fields are ready, nothing about the harvest waits for a repair appointment.`,
    commonCalls: [
      "Walk-in tire service for local residents",
      "I-75 breakdown recovery and repair",
      "Fleet maintenance for Dooly County businesses",
      "DOT inspections and compliance work",
      "Engine diagnostics for check-engine lights",
      "Brake service for passenger and commercial vehicles"
    ],
    faqs: [
      {
        question: "Where exactly is On The Spot Repair Service & Tires located in Unadilla?",
        answer: "We are located at 990 2nd Street in Unadilla, GA 31091, right off I-75 Exit 121. Our shop is easy to find — just minutes from both the interstate and downtown Unadilla. Walk-in service is available Monday through Saturday during regular shop hours."
      },
      {
        question: "Do I need an appointment for service at your Unadilla shop?",
        answer: "For most services, no appointment is needed — just stop by during shop hours (Mon-Fri 8am-5pm, Sat 8am-12pm). For major repairs or fleet maintenance scheduling, we recommend calling ahead at 478-244-7008 so we can allocate the right time and resources for your job."
      },
      {
        question: "Can Unadilla residents get 24/7 emergency service too?",
        answer: "Absolutely. While our shop has regular walk-in hours, our 24/7 emergency roadside service is available to everyone — including Unadilla locals. If you have a flat tire at midnight or your truck will not start on a Sunday, call us and we will come to you."
      },
      {
        question: "Where can I find truck repair near Unadilla, GA?",
        answer: "On The Spot Repair Service & Tires is the leading truck repair shop near Unadilla, GA, located at 990 2nd Street right off I-75 Exit 121. We are a full-service facility with heavy-duty lifts and diagnostic equipment for semis, plus 24/7 mobile dispatch across the region. Call 478-244-7008 anytime."
      },
      {
        question: "Do you offer mobile tire repair across South Georgia?",
        answer: "Yes. Mobile tire repair South Georgia drivers rely on is one of our core services. From our central Unadilla location, we dispatch mobile units to Perry, Vienna, Cordele, Hawkinsville, Elko, Byromville, Montezuma, and everywhere in between. We carry commercial and passenger tires to handle on-site mounting and balancing without a tow."
      },
      {
        question: "Is there 24 hour roadside service in Dooly County?",
        answer: "Absolutely. On The Spot Repair Service & Tires provides true 24 hour roadside service Dooly County wide — and well beyond. As the Dooly County seat-area shop closest to I-75, we cover the interstate, US-41, US-129, and the rural county roads around the clock for tire blowouts, breakdowns, jump-starts, and emergency repairs."
      },
      {
        question: "Where can I get tire repair near me in Unadilla?",
        answer: "On The Spot Repair Service & Tires is your closest option for tire repair near me in Unadilla — located at 990 2nd Street, right off I-75 Exit 121. We handle flat repairs, new tire mounting and balancing, and commercial truck tires for every size, with walk-in service Monday through Saturday and 24/7 mobile tire repair when you cannot make it to the shop."
      }
    ],
    services: [
      { service: "Walk-in Tire Service", availability: "Yes — shop hours" },
      { service: "24/7 Emergency Roadside", availability: "Yes — mobile dispatch" },
      { service: "Semi-Truck Engine Repair", availability: "Yes — full shop facility" },
      { service: "DOT Inspections", availability: "Yes — by appointment" },
      { service: "Fleet Maintenance Programs", availability: "Yes — account billing available" },
      { service: "Passenger Vehicle Repair", availability: "Yes — walk-in or appointment" },
      { service: "Computer Diagnostics", availability: "Yes — commercial and passenger" }
    ],
    schemaDescription: "Home base for On The Spot Repair Service & Tires in Unadilla, GA. Full-service mechanic shop at I-75 Exit 121 with 24/7 emergency mobile dispatch across South Georgia — serving Perry, Vienna, Cordele, Hawkinsville, Elko, Byromville, and Montezuma.",
    coordinates: { lat: 32.26042556762695, lng: -83.7447509765625 },
    nearbyTowns: [
      { name: "Perry", slug: "perry" },
      { name: "Vienna", slug: "vienna" },
      { name: "Cordele", slug: "cordele" },
      { name: "Hawkinsville", slug: "hawkinsville" },
      { name: "Elko", slug: "elko" },
      { name: "Byromville", slug: "byromville" },
      { name: "Montezuma", slug: "montezuma" }
    ]
  },

  perry: {
    slug: "perry",
    name: "Perry",
    county: "Houston",
    distance: "20",
    miles: "18",
    highway: "I-75",
    landmarks: [
      "I-75 Exit 135 & 136",
      "Georgia National Fairgrounds",
      "Houston Medical Center",
      "Perry Industrial Park",
      "Perry Parkway"
    ],
    industries: ["Medical delivery", "Distribution", "Manufacturing", "Retail", "Events & Fairgrounds"],
    competitiveGap: "Most Perry shops close at 5 or 6 PM — we are the 24 hour truck repair near I-75 that answers at 2 AM",
    metaTitle: "Truck Repair Perry GA | 24 Hour Truck Repair Near I-75 | On The Spot",
    metaDescription: "Truck repair Perry GA right off I-75. 24 hour truck repair near I-75 for semi truck breakdown I-75 Georgia. Mobile truck repair Houston County GA. Exit 135/136. Call now!",
    h1Title: "24-Hour Truck & Tire Repair Near Perry, GA — Right Off I-75",
    heroIntro: "Semi truck breakdown on I-75 in Georgia? On The Spot Repair Service & Tires provides 24 hour truck repair near I-75 — serving Perry, Houston County, and the entire I-75 corridor from Exit 127 to Exit 146. We are the closest mobile mechanic to the Georgia National Fairgrounds.",
    heroSecondary: "From steer tire blowouts at Exit 136 to reefer unit failures at the Industrial Park, we handle truck repair Perry GA drivers trust. Semis, box trucks, fleet vehicles — no tow needed. Mobile truck repair Houston County GA dispatched within 20 minutes.",
    localContent: `**I-75 Truck Breakdown? We Cover the Perry Exit**

Perry sits at **I-75 Exits 135 and 136** — one of the busiest commercial corridors between Atlanta and Florida. Every day, thousands of semi-trucks haul freight through Houston County on this critical north-south artery. When your truck breaks down on I-75 near Perry, you need **24 hour truck repair near I-75** that responds fast — not a dispatcher telling you to wait until morning.

On The Spot Repair Service & Tires is the **truck repair Perry GA** drivers call first. We are based just 18 miles south in Unadilla, positioned for rapid response to I-75 breakdowns anywhere between Perry and Cordele.

**I-75 Corridor Coverage — Exit 127 to Exit 146**

We provide mobile truck repair along the entire Houston County stretch of I-75:

- **Exit 146 (Byron/GA-49)** — northern Houston County access
- **Exit 142 (GA-127)** — Houston County Industrial Park
- **Exit 136 (US-341/Perry)** — Georgia National Fairgrounds, medical district
- **Exit 135 (US-41/Perry)** — downtown Perry, warehouse district
- **Exit 127 (Unadilla)** — our home base, fastest response

**Georgia National Fairgrounds Support**

The **Georgia National Fairgrounds** in Perry hosts major events year-round — agricultural shows, truck pulls, concerts, and conventions. Event traffic means more trucks on I-75 and more potential breakdowns. We provide:

- On-call service during major fairground events
- Vendor truck and trailer repair
- After-hours emergency response for event logistics
- Mobile tire service in fairground parking areas

**Houston County Industrial & Medical District**

Perry is not just a pass-through town. It is a **commercial hub** with the Houston Medical Center, Perry Industrial Park, and distribution facilities that generate constant truck traffic. We service:

- **Houston Medical Center** — pharmaceutical delivery trucks, medical supply vehicles, ambulance fleet support
- **Perry Industrial Park** — manufacturing fleet accounts, box trucks, semi-trailers
- **Warehouse District** — loading dock breakdowns, trailer repairs, forklift tire service
- **Retail Distribution** — last-mile delivery vehicles, regional carriers

**Semi Truck Breakdown I-75 Georgia — Fast Response**

When you have a **semi truck breakdown I-75 Georgia**, every hour of downtime costs money — detention fees, missed delivery windows, HOS violations. We understand the urgency. Our mobile units carry:

- Commercial steer tires, drive tires, and trailer tires
- Air brake components and gladhand repair kits
- Electrical diagnostic tools for trailer lighting and ABS
- Jump packs and auxiliary power for dead batteries
- Fuel delivery for diesel runouts

**Mobile Truck Repair Houston County GA**

We are the **mobile truck repair Houston County GA** businesses rely on. Whether you are a local fleet operator or a driver passing through, we bring full-service repair capabilities to your location — I-75 shoulder, truck stop, loading dock, or fairground lot.

**Summer Heat & Perry's Event Season**

July in Perry means two things: the Georgia National Fairgrounds are gearing up for fall events, and the summer heat is pushing tire pressure to the limit. We've already handled a dozen blowouts this month on I-75 near Exit 136 — most from trucks running hot loads with underinflated steers. Perry's Summer Breeze Block Party and the Independence Day Celebration bring extra delivery traffic to the Industrial Park, which means more box trucks, more reefers, and more breakdowns when the daytime shops are closed. If you're hauling into Perry for the NBHA Summer Run or stocking shelves for Perry Bites and Beats in September, don't wait until a 100-degree afternoon turns a soft tire into a shredded casing. We run 24/7 because Perry's economy doesn't stop when the thermometer hits 95.

**The Trucks That Keep Perry Running**

Perry runs on delivery, and the trucks behind that delivery are the ones we keep moving. Houston County schools depend on food-service and supply trucks rolling in before the first bell, Houston Healthcare's Perry campus takes pharmaceutical and medical-supply runs around the clock, and the grocery and retail corridor along Sam Nunn Boulevard sees box trucks and reefers restocking day and night. When one of those vehicles goes down, it isn't just one driver's problem — it's a missed cafeteria delivery, a delayed medical shipment, or empty shelves. That's why so many Perry fleet managers and delivery contractors keep our number on file: a fast roadside fix means the whole town's schedule stays on track.`,
    spanishContent: `**Reparación de Camiones en Perry, GA — Servicio 24 Horas**

¿Tiene una avería de camión en la I-75 cerca de Perry? On The Spot Repair Service & Tires ofrece reparación móvil de camiones las 24 horas del día, los 7 días de la semana en el condado de Houston. Reparamos llantas, frenos, motores y sistemas eléctricos directamente en su ubicación. No necesita remolque. Hablamos español. Llame ahora: 478-244-7008.`,
    commonCalls: [
      "Steer tire blowouts on I-75 Exit 135/136",
      "Semi truck breakdown I-75 Georgia — engine failures",
      "Reefer unit alarms at Perry Industrial Park",
      "Trailer brake failures on loaded freight",
      "Dead batteries at truck stops and rest areas",
      "DOT inspection repairs for out-of-service violations"
    ],
    faqs: [
      {
        question: "Where can I find truck repair in Perry, GA?",
        answer: "On The Spot Repair Service & Tires provides truck repair Perry GA drivers trust. We are based in Unadilla, just 18 miles south on I-75, and offer 24/7 mobile service throughout Perry, Houston County, and the I-75 corridor from Exit 127 to Exit 146. Call 478-244-7008 anytime."
      },
      {
        question: "Is there 24 hour truck repair near I-75 in Georgia?",
        answer: "Yes. On The Spot Repair Service & Tires is your 24 hour truck repair near I-75 option in Middle Georgia. We cover I-75 from Byron (Exit 146) through Perry (Exits 135/136) to Cordele (Exit 101). Whether it is 2 AM or noon on Sunday, we dispatch mobile units to your breakdown location."
      },
      {
        question: "What do I do if I have a semi truck breakdown on I-75 in Georgia?",
        answer: "Call On The Spot Repair Service & Tires at 478-244-7008 immediately. We specialize in semi truck breakdown I-75 Georgia emergencies. Our mobile units carry commercial tires, brake components, and diagnostic equipment. We can reach most I-75 locations near Perry within 20-30 minutes and get you rolling without a tow."
      },
      {
        question: "Do you offer mobile truck repair in Houston County, GA?",
        answer: "Yes. We provide mobile truck repair Houston County GA businesses depend on. From the Georgia National Fairgrounds to Perry Industrial Park to I-75 rest areas, we bring full-service repair to your location. Fleet accounts, one-time emergencies, and everything in between."
      }
    ],
    services: [
      { service: "24/7 I-75 Roadside Tire Repair", availability: "Yes — Exit 127 to 146" },
      { service: "Semi-Truck Engine Repair", availability: "Yes — mobile or tow to shop" },
      { service: "Brake Service & DOT Inspections", availability: "Yes — by appointment or emergency" },
      { service: "Fleet Maintenance Programs", availability: "Yes — account billing available" },
      { service: "Reefer Unit Diagnostics", availability: "Yes — mobile" },
      { service: "Fairground Event Support", availability: "Yes — on-call during events" },
      { service: "Passenger Vehicle Repair", availability: "Yes — tow to Unadilla shop" }
    ],
    schemaDescription: "Truck repair Perry GA and 24 hour truck repair near I-75. Mobile service for semi truck breakdown I-75 Georgia at Exits 135/136. Mobile truck repair Houston County GA.",
    coordinates: { lat: 32.4582, lng: -83.7316 },
    nearbyTowns: [
      { name: "Unadilla", slug: "unadilla" },
      { name: "Elko", slug: "elko" },
      { name: "Hawkinsville", slug: "hawkinsville" }
    ]
  },

  "warner-robins": {
    slug: "warner-robins",
    name: "Warner Robins",
    county: "Houston",
    distance: "40",
    miles: "30",
    highway: "I-75 & GA-247 / Russell Parkway",
    landmarks: [
      "Robins Air Force Base",
      "Museum of Aviation",
      "GA-247 / Russell Parkway",
      "Houston County industrial district"
    ],
    industries: ["Defense logistics", "Commercial trucking", "Manufacturing", "Distribution", "Fleet operations"],
    competitiveGap: "Warner Robins has plenty of traffic but limited after-hours heavy-duty repair — we answer 24/7 from Unadilla",
    metaTitle: "Truck Repair Warner Robins GA | 24 Hour Truck Repair | On The Spot",
    metaDescription: "Truck repair Warner Robins GA with 24 hour truck repair, mobile truck repair Houston County GA, semi truck breakdown response near Robins Air Force Base. Call On The Spot now!",
    h1Title: "24-Hour Truck & Tire Repair Near Warner Robins, GA",
    heroIntro: "Need truck repair Warner Robins GA drivers can count on? On The Spot Repair Service & Tires provides 24 hour truck repair and mobile roadside service throughout Houston County, just 30 miles south in Unadilla via I-75 and GA-247.",
    heroSecondary: "We respond to semi truck breakdowns, fleet emergencies, and tire blowouts around Robins Air Force Base, the Museum of Aviation, the industrial district, and the busy Russell Parkway corridor. No tow needed — we come to you day or night.",
    localContent: `**Supporting the Trucking Traffic Around Robins Air Force Base**

Warner Robins is one of Middle Georgia's busiest logistics centers. **Robins Air Force Base** is one of the largest Air Force logistics bases in the country, and the commercial trucks, contractors, supply vehicles, and fleet traffic supporting it keep the GA-247 corridor moving every hour of the day.

When a truck breaks down near the base, along Russell Parkway, or on the route from Macon, you need a mobile mechanic who answers after regular shop hours. On The Spot Repair Service & Tires dispatches from Unadilla — about **30 miles and 35–40 minutes** away — via I-75 and GA-247, bringing commercial tires, air-brake parts, jump packs, and diagnostic equipment directly to your location.

**I-75 Corridor Coverage to Warner Robins**

Our route runs north from Unadilla on I-75 toward the Warner Robins exits, then east along GA-247 and Russell Parkway. We cover:

- I-75 Exit 146 and the Byron / Macon approach
- GA-247 and Russell Parkway commercial traffic
- Robins Air Force Base access roads and contractor lots
- Warner Robins industrial and distribution districts
- Loading docks, truck stops, fleet yards, and roadside shoulders

**Museum of Aviation & Houston County Industrial District**

The **Museum of Aviation** and the surrounding base community draw steady visitor, service, and delivery traffic. Across Houston County's industrial district, manufacturers, parts suppliers, warehouses, and defense contractors depend on trucks arriving on schedule. We provide mobile truck repair Houston County GA businesses can call when a vehicle will not start, a trailer loses a tire, or a loaded rig cannot safely continue.

**The Trucks That Keep Warner Robins Running**

Warner Robins runs on logistics: parts deliveries to the base, contractor trucks, warehouse reefers, school and municipal vehicles, construction rigs, and box trucks restocking businesses along Russell Parkway. A breakdown can delay a critical shipment or leave a fleet vehicle blocking a loading dock. Our 24/7 response keeps those trucks moving and supports the drivers, dispatchers, and fleet managers who keep Houston County on schedule.

We also regularly reach nearby **Centerville, Bonaire, and Kathleen**, along with Perry and the I-75 corridor, for mobile tire service and emergency repairs.

**Summer Heat, Base Traffic & Fleet Downtime**

Houston County heat is hard on steer tires, batteries, and cooling systems, especially for trucks idling in traffic or making repeated trips between Macon, the base, and local warehouses. We handle the blowouts, dead batteries, overheating, brake issues, and electrical faults that do not wait for Monday morning.

**Distance & Directions from Warner Robins**

Our shop is at **990 2nd Street, Unadilla, GA 31091**. From Warner Robins, the drive is approximately **30 miles / 35–40 minutes via I-75 and GA-247 / Russell Parkway**. For a roadside emergency, do not wait to reach the shop — call 478-244-7008 and we will come to you.`,
    spanishContent: `**Reparación de Camiones en Warner Robins, GA — Servicio 24 Horas**

¿Tiene una avería de camión cerca de Warner Robins o Robins Air Force Base? On The Spot Repair Service & Tires ofrece reparación móvil de camiones las 24 horas, los 7 días de la semana en el condado de Houston. Reparamos llantas, frenos, motores y sistemas eléctricos directamente en su ubicación. No necesita remolque. Hablamos español. Llame ahora: 478-244-7008.`,
    commonCalls: [
      "Semi truck breakdowns near Robins Air Force Base",
      "Steer and drive tire blowouts on I-75 and GA-247",
      "Trailer brake and air-line failures at loading docks",
      "Dead batteries for contractor and fleet vehicles",
      "Engine overheating in Houston County traffic",
      "DOT inspection repairs and out-of-service violations"
    ],
    faqs: [
      {
        question: "Where can I find truck repair in Warner Robins, GA?",
        answer: "On The Spot Repair Service & Tires provides 24/7 mobile truck repair throughout Warner Robins and Houston County. We dispatch from Unadilla, about 30 miles away via I-75 and GA-247, to Robins Air Force Base, Russell Parkway, industrial districts, loading docks, and roadside locations. Call 478-244-7008 anytime."
      },
      {
        question: "Is there 24 hour truck repair near Robins Air Force Base?",
        answer: "Yes. We provide 24 hour truck repair near Robins Air Force Base for semi truck breakdowns, tire blowouts, brake problems, jump-starts, and emergency fleet repairs. Our mobile units respond day or night throughout Warner Robins and Houston County."
      },
      {
        question: "Do you offer mobile truck repair in Houston County, GA?",
        answer: "Yes. Our mobile truck repair Houston County GA service reaches Warner Robins, Robins Air Force Base, Centerville, Bonaire, Kathleen, Perry, and the surrounding I-75 and GA-247 corridors. We bring commercial tires and repair equipment to your truck instead of requiring a tow."
      },
      {
        question: "How far is your shop from Warner Robins?",
        answer: "Our shop is at 990 2nd Street in Unadilla, approximately 30 miles or 35–40 minutes from Warner Robins via I-75 and GA-247 / Russell Parkway. For breakdowns, call 478-244-7008 for mobile service at your location."
      }
    ],
    services: [
      { service: "24/7 Mobile Truck & Tire Repair", availability: "Yes — Warner Robins and Houston County" },
      { service: "I-75 & GA-247 Roadside Service", availability: "Yes — mobile dispatch" },
      { service: "Semi-Truck Engine Repair", availability: "Yes — mobile or tow to shop" },
      { service: "Brake Service & DOT Inspections", availability: "Yes — emergency or scheduled" },
      { service: "Fleet Maintenance Programs", availability: "Yes — account billing available" },
      { service: "Contractor & Base-Support Fleet Service", availability: "Yes — priority dispatch available" },
      { service: "Passenger Vehicle Repair", availability: "Yes — tow to Unadilla shop" }
    ],
    schemaDescription: "Truck repair Warner Robins GA and 24 hour mobile truck repair Houston County GA. Emergency semi truck breakdown service near Robins Air Force Base, GA-247, Russell Parkway, and I-75.",
    coordinates: { lat: 32.613, lng: -83.624 }
  },

  vienna: {
    slug: "vienna",
    name: "Vienna",
    county: "Dooly",
    distance: "15",
    miles: "12",
    highway: "US-41",
    landmarks: [
      "Dooly County Courthouse",
      "Downtown Vienna Historic District",
      "US-41 corridor",
      "Vienna Farmers Market"
    ],
    industries: ["Government", "Agriculture", "Small business", "Retail"],
    competitiveGap: "Small town with no after-hours repair options — nearest 24-hour service south of Macon is us",
    seasonalNote: "Harvest season agricultural urgency",
    metaTitle: "Tire Repair Vienna GA | 24-Hour Truck Repair Dooly County | On The Spot",
    metaDescription: "Tire repair Vienna GA & 24-hour truck repair Dooly County. Fleet tire service Vienna GA for semis, farm trucks & box trucks on US-41. Mobile roadside service. Call now!",
    h1Title: "24-Hour Truck & Tire Repair Near Vienna, GA",
    heroIntro: "Need tire repair near me in Vienna GA? On The Spot Repair Service & Tires provides 24/7 truck repair Dooly County GA drivers trust — just 15 minutes east on US-41 from Vienna. We are the closest mobile mechanic serving Dooly County, pecan country, and the US-41 corridor.",
    heroSecondary: "From tire blowouts at the Vienna Farmers Market to fleet tire service Vienna GA businesses depend on, we handle semis, box trucks, farm haulers, and fleet vehicles. Mobile service — no tow needed. We come to you, day or night.",
    localContent: `**Serving Vienna's Historic Corridors**

Vienna sits at the heart of **Dooly County** along **US-41**, a major north-south route that sees steady commercial truck traffic between Macon, Cordele, and the Florida line. Whether you are delivering to the **courthouse district** on Union Street, hauling cotton through the rural county roads, or passing through on US-41, a breakdown here puts you miles from the nearest open shop.

We know Vienna. Our mobile repair units regularly service trucks at:

- **Dooly County Courthouse** — county fleet vehicles, delivery trucks, service vans
- **Downtown Vienna Historic District** — local business delivery trucks, box trucks
- **US-41 at the Vienna city limits** — highway blowouts, steer tire failures
- **Union Street & 3rd Street corridor** — local route breakdowns, fleet parking areas
- **Rural Dooly County roads** — farm trucks, agricultural equipment, harvest season emergencies

**Why Vienna Drivers Call Us First**

Vienna is a **small town with limited commercial repair options** — and none open after dark. The nearest 24-hour truck service south of Macon is us. If your steer tire shreds on US-41 at 11 PM, or your reefer unit alarms at the county warehouse on a Saturday, we are the only call that gets a human answer.

Our shop in Unadilla is just **12 miles west on US-41** — close enough for fast response, positioned to cover the gap between Macon's shops and Cordele's limited after-hours service. We fill the critical need: **night, weekend, and emergency service** when Vienna's daytime economy shuts down.

**Agricultural & Farm Truck Support**

Dooly County is **peanut and cotton country**. During harvest season, farm trucks and agricultural equipment run hard and break down in the field — often after regular shop hours. We service:

- Farm trucks and grain haulers on county roads
- Equipment trailers with tire and brake issues
- Diesel pickups used for farm operations
- Seasonal harvest fleet maintenance

We understand that when cotton is ready, downtime costs more than repair bills.

**Dooly County, Pecan Country & the US-41 Corridor**

Vienna proudly calls itself the heart of **Dooly County** — and Dooly County is famous as Georgia **pecan country**, anchored by the historic Ellis Brothers Pecans on I-75 and surrounded by groves and processing operations. During pecan harvest and shelling season, trucks haul nuts from the orchards to the processors and out to market, and every one of them runs on tires that wear hard on the rural clay roads. A **truck repair Dooly County** call during harvest is one of the most common reasons drivers reach us after dark.

The **US-41 corridor** runs straight through Vienna parallel to I-75, carrying freight between Macon, Cordele, and the Florida line. For drivers who need **tire repair Vienna GA** wide — from downtown Union Street to the pecan groves on the county's edge — we provide mobile dispatch from Unadilla, just 12 miles east. We bring commercial tires, air brake parts, and diagnostic tools right to your location, so a flat or breakdown on US-41 never means a long wait or a costly tow.

**Farm Country Runs on Our Response Time**

Vienna's downtown historic district and the Dooly County Courthouse draw steady traffic, but what keeps our phones ringing is the agricultural reality surrounding this town. Peanut and cotton fields don't break down on a schedule — harvest equipment fails at dusk, grain haulers blow tires on county roads with no streetlights, and the Vienna Farmers Market depends on delivery trucks that can't afford a missed morning. We know the difference between a downtown breakdown on Union Street and a rural call on a red clay road past the city limits. Our mobile units carry the heavy-duty tires and field-service tools that Vienna's farm trucks and county fleet need, and we're close enough that "rural" doesn't mean "waiting until tomorrow."

**From Pig Jig Spring to Peanut Harvest Fall**

Vienna's truck traffic runs on a seasonal rhythm, and we plan for both ends of it. Every spring the Big Pig Jig — Georgia's official barbecue championship — floods the town with vendor rigs, catering trucks, and equipment haulers that all need to arrive and set up on a tight schedule. Then the calendar swings to fall, when peanut harvest turns US-41 into a steady line of loaded haulers moving crop from field to buying point, often well after dark. Spring event freight and autumn ag hauling stress vehicles in completely different ways, but both leave drivers stranded if a tire or brake lets go at the wrong moment. We keep our dispatch ready for whichever season Vienna is in, so a festival load or a harvest run never sits waiting on the shoulder.`,
    commonCalls: [
      "Steer tire blowouts on US-41",
      "Brake failures on loaded farm trucks",
      "Battery and electrical issues in county fleet vehicles",
      "Reefer unit diagnostics at warehouse loading docks",
      "Engine overheating on rural roads",
      "After-hours jump-starts for delivery trucks downtown"
    ],
    faqs: [
      {
        question: "Where can I get tire repair near me in Vienna, GA?",
        answer: "On The Spot Repair Service & Tires provides tire repair Vienna GA drivers count on. We are based in Unadilla, just 15 minutes east on US-41, and dispatch mobile units throughout Vienna, Dooly County, and the US-41 corridor 24/7. We handle steer tires, drive tires, and trailer tires for semis, farm trucks, and passenger vehicles — on-site, no tow needed."
      },
      {
        question: "Do you offer fleet tire maintenance in Georgia?",
        answer: "Yes. Fleet tire service Vienna GA businesses rely on is one of our specialties. We offer scheduled fleet tire maintenance Georgia operators can build into their routes — including tire rotation, replacement, pressure checks, and DOT-compliant inspections. We provide account billing and priority dispatch for fleet customers across Dooly County and Middle Georgia."
      },
      {
        question: "Is there 24-hour truck repair in Dooly County, GA?",
        answer: "Absolutely. On The Spot Repair Service & Tires is the closest 24-hour truck repair Dooly County GA option south of Macon. From the Vienna courthouse district to rural pecan and cotton roads, we provide round-the-clock mobile repair for tire blowouts, brake failures, engine trouble, and electrical issues. Call 478-244-7008 day or night."
      },
      {
        question: "Can you service farm and pecan haul trucks during harvest season?",
        answer: "Yes. Dooly County is pecan and cotton country, and harvest season runs trucks hard. We travel the rural roads around Vienna to service farm trucks, grain and nut haulers, and equipment trailers — carrying commercial-grade tires and diesel repair tools to get agricultural vehicles back to work fast, even after dark."
      }
    ],
    services: [
      { service: "24/7 Emergency Tire Repair", availability: "Yes — mobile" },
      { service: "Semi-Truck Engine Repair", availability: "Yes — mobile or tow to shop" },
      { service: "Brake Service & DOT Inspections", availability: "Yes — by appointment or emergency" },
      { service: "Fleet Maintenance Programs", availability: "Yes — account billing available" },
      { service: "Roadside Assistance", availability: "Yes — 24/7" },
      { service: "Agricultural Equipment Repair", availability: "Yes — mobile to farm locations" },
      { service: "Passenger Vehicle Repair", availability: "Yes — tow to Unadilla shop" }
    ],
    schemaDescription: "Tire repair Vienna GA and 24-hour truck repair Dooly County. Fleet tire service Vienna GA on the US-41 corridor. Mobile service to Dooly County Courthouse, downtown Vienna, pecan country, and rural farm locations.",
    coordinates: { lat: 32.0915, lng: -83.7957 },
    nearbyTowns: [
      { name: "Cordele", slug: "cordele" },
      { name: "Unadilla", slug: "unadilla" },
      { name: "Hawkinsville", slug: "hawkinsville" }
    ]
  },

  hawkinsville: {
    slug: "hawkinsville",
    name: "Hawkinsville",
    county: "Pulaski",
    distance: "18",
    miles: "16",
    highway: "US-129",
    landmarks: [
      "Taylor Regional Hospital",
      "Pulaski County Industrial Park",
      "Commerce Street corridor",
      "Pulaski County Courthouse"
    ],
    industries: ["Medical", "Light manufacturing", "Agriculture", "County government"],
    competitiveGap: "All Hawkinsville shops close by 6 PM despite being a commercial hub",
    seasonalNote: "Cotton gin season",
    metaTitle: "Truck Repair Hawkinsville GA | 24-Hour Heavy-Duty Semi & Diesel Service",
    metaDescription: "Truck repair Hawkinsville GA — 24-hour heavy-duty semi, diesel, and mobile tire repair across Pulaski County. Roadside truck breakdown service on US-129 & US-341. Call now!",
    h1Title: "Truck Repair in Hawkinsville, GA — 24-Hour Heavy-Duty & Tire Service",
    heroIntro: "Truck breakdown in Hawkinsville GA? We provide 24-hour truck repair Hawkinsville GA drivers trust — heavy-duty semi, diesel, and trailer service just 18 minutes southwest on US-129. We are the closest mobile truck mechanic serving Pulaski County, the Ocmulgee River corridor, and US-341.",
    heroSecondary: "From air brake failures at the Pulaski County Industrial Park to roadside truck repair on US-129, we handle semis, box trucks, and commercial fleets. Mobile tire repair Pulaski County — no tow needed. We come to you, day or night. Passenger vehicles are also welcome by tow to our Unadilla shop.",
    localContent: `**Serving Pulaski County's Commercial Hub**

Hawkinsville is the **seat of Pulaski County** and sits at the junction of **US-129, US-341, and GA-26** — a critical crossroads for commercial traffic moving between Macon, Cochran, Dublin, and the I-75 corridor. Whether you are delivering medical supplies to **Taylor Regional Hospital**, hauling freight through the **Pulaski County Industrial Park**, or running cotton gins during harvest, a breakdown here strands you far from 24-hour help.

We know Hawkinsville. Our mobile repair units regularly service trucks at:

- **Taylor Regional Hospital** — medical supply delivery trucks, ambulance fleet, service vehicles
- **Pulaski County Industrial Park** — manufacturing fleet accounts, box trucks, semis
- **Commerce Street & Broad Street corridor** — downtown business delivery trucks
- **US-129 at the Hawkinsville bypass** — highway blowouts, steer tire failures, brake issues
- **Cotton gin operations on rural Pulaski County roads** — seasonal agricultural trucks, grain haulers
- **Pulaski County Courthouse** — county fleet vehicles, municipal equipment

**Why Hawkinsville Drivers Call Us First**

Hawkinsville has **more daytime repair options than smaller towns** — but every single one closes by 6 PM. For a city that serves as the commercial and medical hub of Pulaski County, that is a dangerous gap. If your ambulance fleet vehicle goes down at 9 PM, or your semi's air brakes fail on US-129 at midnight, waiting until morning is not an option.

Our shop in Unadilla is just **16 miles southwest on US-129** — close enough for fast response, positioned to cover the corridor between Macon and Dublin that lacks overnight commercial service. We fill the gap: **night, weekend, and emergency service** when Hawkinsville's industrial economy keeps running but its repair shops do not.

**Medical & Industrial Fleet Support**

Hawkinsville's economy revolves around **Taylor Regional Hospital** and **light manufacturing** in the Industrial Park. These operations cannot afford downtime:

- Hospital delivery trucks with refrigerated cargo
- Just-in-time manufacturing parts delivery
- County emergency vehicle readiness
- Industrial equipment transport

We offer **account billing, priority dispatch, and preventive maintenance scheduling** that aligns with your operating hours — not ours.

**Agricultural & Cotton Gin Season**

Pulaski County is **cotton country**, and Hawkinsville sits at the center of it. During gin season, trucks run 18-hour days and break down when shops are closed.

**The Ocmulgee River Corridor & US-341 Crossroads**

Hawkinsville grew up along the **Ocmulgee River**, historically a steamboat port and today a hub where **US-341, US-129, and GA-26** converge. That river-bottom geography means freight traffic funnels through Hawkinsville from every direction — north toward Macon, south toward Vienna, and east toward Dublin. For drivers needing **roadside tire repair near Hawkinsville**, that crossroads location is exactly why a blowout or breakdown here can leave you stranded between commercial repair options.

We provide **mobile tire repair Pulaski County** wide — from the US-341 river bridge to the rural gin roads on the county's western edge. A **truck breakdown Hawkinsville GA** drivers experience on the Ocmulgee corridor is our specialty: we dispatch a fully-equipped mobile unit from Unadilla and reach most Hawkinsville and Pulaski County locations fast, carrying commercial tires, air brake components, and diagnostic tools to get you rolling without a tow.

**A Growing Crossroads with Expanding Freight Demand**

Hawkinsville isn't just the seat of Pulaski County — it's the crossroads where US-129, US-341, and GA-26 converge, making it a natural hub for freight moving between Dublin, Macon, and the coast. What most people don't know is that Hawkinsville's industrial footprint is quietly expanding. The Pulaski County Industrial Park is drawing new manufacturing interest, and the RFP for adaptive reuse of a 20,000 sq. ft. warehouse on the edge of town signals more commercial truck traffic ahead. That means more delivery deadlines, more just-in-time freight, and more breakdowns when the nearest open shop is 30 miles away. We already service Taylor Regional Hospital's supply chain and several county fleet accounts — we know Hawkinsville's roads, its warehouse districts, and the fact that when a truck goes down here, "tomorrow morning" isn't an acceptable timeline.

**Where Harness Racing Heritage Meets Working Freight**

Hawkinsville has a character all its own. It's long been known as the harness-racing capital of Georgia — the historic Lawrence Bennet Harness Horse Training Facility still draws horse trailers and hauling rigs into town every training season — and that same blend of tradition and industry defines the local truck traffic. On any given day the roads here carry livestock and horse trailers, cotton and timber loads coming off Pulaski County farms, and delivery trucks feeding a manufacturing base that keeps quietly growing. It's a working town where agriculture, light industry, and freight all share the same two-lane highways. We service every one of those rigs, because in Hawkinsville the difference between a good week and a lost contract often comes down to whether the truck rolls on time.`,
    commonCalls: [
      "Air brake failures on US-129 with loaded trailers",
      "Steer tire blowouts on the Hawkinsville bypass",
      "Refrigerated truck unit failures at Taylor Regional",
      "Electrical issues in county fleet vehicles",
      "Engine overheating on GA-26",
      "After-hours jump-starts for industrial park delivery trucks"
    ],
    faqs: [
      {
        question: "Is there 24 hour truck repair in Hawkinsville, GA?",
        answer: "Yes. On The Spot Repair Service & Tires provides 24 hour truck repair Hawkinsville GA drivers rely on. We are based in Unadilla, just 18 minutes southwest on US-129, and dispatch mobile units throughout Hawkinsville, Pulaski County, and the Ocmulgee River corridor any time of day or night — including after every local daytime shop has closed."
      },
      {
        question: "What do I do if I have a truck breakdown in Hawkinsville, GA?",
        answer: "Call On The Spot Repair Service & Tires at 478-244-7008. We specialize in truck breakdown Hawkinsville GA emergencies — tire blowouts, air brake failures, engine trouble, and electrical issues. Our mobile units carry commercial tires and diagnostic equipment, so we can get you back on US-129, US-341, or GA-26 without a tow."
      },
      {
        question: "Do you offer mobile tire repair in Pulaski County?",
        answer: "Absolutely. Mobile tire repair Pulaski County is one of our core services. From the Hawkinsville bypass to rural cotton gin roads, we provide on-site mounting, balancing, and replacement for semi-trucks, fleet vehicles, and agricultural haulers. No need to drive on a damaged tire — we come to you."
      },
      {
        question: "Can I get roadside tire repair near Hawkinsville at night?",
        answer: "Yes. We provide 24/7 roadside tire repair near Hawkinsville for steer tires, drive tires, and trailer tires. Whether you are broken down on the US-341 river bridge at 2 AM or stuck at Taylor Regional with a flat, call us and we will dispatch a mobile unit right away."
      }
    ],
    services: [
      { service: "24/7 Emergency Tire Repair", availability: "Yes — mobile" },
      { service: "Semi-Truck Engine Repair", availability: "Yes — mobile or tow to shop" },
      { service: "Brake Service & DOT Inspections", availability: "Yes — by appointment or emergency" },
      { service: "Fleet Maintenance Programs", availability: "Yes — account billing available" },
      { service: "Roadside Assistance", availability: "Yes — 24/7" },
      { service: "Refrigerated Truck Unit Repair", availability: "Yes — mobile emergency" },
      { service: "Agricultural Equipment Repair", availability: "Yes — mobile to gin locations" },
      { service: "Passenger Vehicle Repair", availability: "Yes — tow to Unadilla shop" }
    ],
    schemaDescription: "24 hour truck repair Hawkinsville GA and mobile tire repair Pulaski County. Roadside tire repair near Hawkinsville on US-129, US-341, and the Ocmulgee River corridor. Serving Taylor Regional Hospital, Pulaski County Industrial Park, and cotton gin operations.",
    coordinates: { lat: 32.2838, lng: -83.4721 },
    nearbyTowns: [
      { name: "Perry", slug: "perry" },
      { name: "Unadilla", slug: "unadilla" },
      { name: "Vienna", slug: "vienna" }
    ]
  },

  cordele: {
    slug: "cordele",
    name: "Cordele",
    county: "Crisp",
    distance: "25",
    miles: "22",
    highway: "I-75",
    landmarks: [
      "I-75 Exit 101",
      "Lake Blackshear",
      "Cordele Intermodal Services",
      "Downtown Cordele"
    ],
    industries: ["Agriculture", "Tourism", "Distribution", "Food processing"],
    competitiveGap: "Cordele shops close early despite being a major I-75 hub — truckers need overnight help",
    seasonalNote: "Watermelon harvest season brings heavy agricultural traffic",
    metaTitle: "Truck Repair Cordele GA | Emergency Tire Repair I-75 Exit 101 | On The Spot",
    metaDescription: "Truck repair Cordele GA & emergency tire repair Cordele. I-75 truck breakdown Cordele GA? 24-hour roadside service Crisp County for semis, reefers & fleets. Exit 101. Call now!",
    h1Title: "24-Hour Truck & Tire Repair Near Cordele, GA — Right Off I-75",
    heroIntro: "I-75 truck breakdown in Cordele GA? On The Spot Repair Service & Tires provides 24-hour truck repair Cordele GA drivers trust — covering I-75 Exit 101 and the entire Crisp County corridor. We are the closest overnight mobile mechanic to Lake Blackshear and the produce warehouses.",
    heroSecondary: "From emergency tire repair Cordele blowouts on the interstate to reefer unit failures at the Intermodal yard, we handle semis, refrigerated trailers, and fleet vehicles. 24 hour roadside service Crisp County — no tow needed. We come to you.",
    localContent: `**Serving the Watermelon Capital of the World**

Cordele proudly calls itself the **Watermelon Capital of the World** — and that agricultural heritage means trucks. Lots of trucks. Located at **I-75 Exit 101** in **Crisp County**, Cordele is a major shipping hub for produce, peanuts, pecans, and agricultural products moving between South Georgia farms and markets across the country.

We know Cordele. Our mobile repair units regularly service trucks at:

- **I-75 Exit 101** — interstate blowouts, steer tire failures, brake emergencies
- **Cordele Intermodal Services** — container haulers, flatbeds, refrigerated trailers
- **Produce warehouses and cold storage facilities** — reefer unit emergencies
- **Lake Blackshear resort corridor** — RV and tourist vehicle breakdowns
- **Downtown Cordele** — local delivery trucks, fleet vehicles

**Why Cordele Drivers Call Us First**

Cordele sits at a **critical I-75 junction** between Atlanta and Florida — thousands of trucks pass through daily. But when the sun sets, Cordele's repair shops close. If your produce load is spoiling because the reefer went down at 10 PM, or your steer tire shreds on I-75 at 3 AM, you need someone who answers the phone.

Our shop in Unadilla is just **22 miles north on I-75** — we can reach Exit 101 in about 25 minutes. We are the closest 24-hour commercial truck service for Cordele and Crisp County.

**Agricultural & Produce Hauling Support**

Cordele's economy runs on **agriculture**. During watermelon season (May through August), the roads fill with loaded produce trucks racing to meet delivery windows. A breakdown is not just an inconvenience — it is lost revenue and spoiled cargo.

We provide:

- Emergency reefer unit diagnostics and repair
- Tire service for overloaded produce haulers
- Brake inspections for trucks running scale houses
- After-hours service during peak harvest

**Lake Blackshear Tourism Support**

Lake Blackshear and Georgia Veterans State Park bring **RV traffic** and tourists through Cordele year-round. We service:

- RV tire blowouts and mechanical failures
- Recreational vehicle towing assistance
- Tourist vehicle breakdowns on US-280

**I-75 Exit 101 — A Major Crisp County Trucking Stop**

Cordele is one of the most important **I-75 trucking stops** between Macon and the Florida line. **Exit 101** feeds a cluster of truck stops, fuel islands, and the Cordele Intermodal Services rail-to-truck terminal, making it a constant magnet for commercial traffic. When you have an **I-75 truck breakdown Cordele GA** drivers know the local shops keep daytime hours — which is exactly the gap we fill. On The Spot Repair Service & Tires provides **24 hour roadside service Crisp County** wide, covering I-75 in both directions around Exit 101.

This is **watermelon country**, and during the May-through-August harvest, loaded produce trucks pour onto I-75 racing delivery windows. A blowout on a hot interstate shoulder or a reefer alarm at 2 AM can spoil an entire load. That is why **emergency tire repair Cordele** and reefer diagnostics are among our most frequent overnight calls. We dispatch a fully-equipped mobile unit from Unadilla — just 22 miles north on I-75 — carrying commercial tires, air brake parts, and refrigeration diagnostic tools to get you rolling without a tow.

**The I-75 Exit 101 Corridor Never Sleeps**

Cordele sits at I-75 Exit 101 — one of the busiest freight corridors in Georgia — and that interchange doesn't sleep. Watermelon season, the Smokin' on Blackshear BBQ Festival, and steady agricultural traffic keep trucks moving through Crisp County around the clock. But when your reefer unit alarms at 2 AM on I-75 southbound, or your trailer brakes lock up pulling off at the Love's truck stop, there isn't a shop in Cordele open to help. We're 25 minutes north in Unadilla, which puts us closer than Macon and faster than anyone coming up from Valdosta. We monitor I-75 traffic cameras and Waze reports near the US-280 interchange so we know when the corridor backs up — and when trucks are stranded in the median waiting for help that isn't coming until morning.

**I-75 at Exit 101: Busier Than Ever**

The Exit 101 interchange has only gotten busier. Truck-stop expansion around the Love's and Pilot lots keeps overnight parking full, which means more rigs doing pre-trip checks in the dark and finding a flat or a dead battery before they ever get back on the interstate. Add the steady stream of produce reefers running north out of South Georgia, the fuel and freight traffic feeding Cordele's industrial park, and detour spillover whenever I-75 construction backs up the mainline, and Exit 101 stays in near-constant motion. We work this stretch every week, so we already know the pull-off spots, the blind shoulders, and the fastest route to reach you when the corridor is jammed bumper to bumper.`,
    commonCalls: [
      "Steer tire blowouts on I-75 Exit 101",
      "Reefer unit failures at produce warehouses",
      "Brake emergencies on loaded agricultural trucks",
      "RV breakdowns near Lake Blackshear",
      "Engine overheating in summer Georgia heat",
      "After-hours fuel delivery on the interstate"
    ],
    faqs: [
      {
        question: "Where can I find truck repair in Cordele, GA?",
        answer: "On The Spot Repair Service & Tires provides truck repair Cordele GA drivers rely on. We are based in Unadilla, just 25 minutes north on I-75, and offer 24/7 mobile service throughout Cordele, Crisp County, and the I-75 corridor at Exit 101. We handle semis, reefers, fleet vehicles, and passenger cars — on-site, no tow needed."
      },
      {
        question: "Do you offer emergency tire repair on I-75 near Cordele?",
        answer: "Yes. Emergency tire repair I-75 Cordele is one of our most common calls, especially during watermelon harvest. We carry commercial steer, drive, and trailer tires on our mobile units and can mount, balance, and get you rolling on either side of I-75 near Exit 101 — day or night, without a tow."
      },
      {
        question: "What do I do if I have an I-75 truck breakdown in Cordele, GA?",
        answer: "Call On The Spot Repair Service & Tires at 478-244-7008. We specialize in I-75 truck breakdown Cordele GA emergencies — tire blowouts, air brake failures, engine trouble, and reefer alarms. Our mobile units reach Exit 101 in about 25 minutes from Unadilla and carry the tires, parts, and diagnostic tools to get you back on the road."
      },
      {
        question: "Is there 24 hour roadside service in Crisp County?",
        answer: "Absolutely. On The Spot Repair Service & Tires is the closest 24 hour roadside service Crisp County option. From I-75 Exit 101 to Lake Blackshear to downtown Cordele, we provide round-the-clock mobile repair for trucks, RVs, and produce haulers — including emergency reefer diagnostics to protect perishable loads."
      },
      {
        question: "Is there 24-hour truck repair near Cordele?",
        answer: "Yes. On The Spot Repair Service & Tires offers true 24-hour truck repair near Cordele, GA. We answer the phone at 2 AM, on weekends, and on holidays — exactly when Cordele's daytime shops are closed. Our mobile units dispatch from Unadilla and reach Cordele and I-75 Exit 101 in about 25 minutes with the tires, parts, and tools to fix you on the spot."
      },
      {
        question: "Can you reach I-75 near Cordele?",
        answer: "Definitely. I-75 near Cordele is one of our most-covered stretches. Our shop sits just 22 miles north at Unadilla (Exit 121), so we can reach Exit 101 and the surrounding Cordele corridor in roughly 25 minutes — northbound or southbound. Whether you have a steer tire blowout on the shoulder or a reefer alarm at a truck stop, we come to your exact location, no tow required."
      }
    ],
    services: [
      { service: "24/7 Emergency Tire Repair", availability: "Yes — mobile" },
      { service: "Semi-Truck Engine Repair", availability: "Yes — mobile or tow to shop" },
      { service: "Refrigerated Trailer Repair", availability: "Yes — emergency reefer service" },
      { service: "Brake Service & DOT Inspections", availability: "Yes — by appointment or emergency" },
      { service: "Fleet Maintenance Programs", availability: "Yes — account billing available" },
      { service: "RV & Recreational Vehicle Service", availability: "Yes — mobile" },
      { service: "Roadside Assistance", availability: "Yes — 24/7" },
      { service: "Passenger Vehicle Repair", availability: "Yes — tow to Unadilla shop" }
    ],
    schemaDescription: "Truck repair Cordele GA and emergency tire repair Cordele. 24 hour roadside service Crisp County for I-75 truck breakdown Cordele GA at Exit 101. Mobile service to Lake Blackshear, produce warehouses, and Crisp County agricultural operations.",
    coordinates: { lat: 31.9635, lng: -83.7821 },
    nearbyTowns: [
      { name: "Vienna", slug: "vienna" },
      { name: "Unadilla", slug: "unadilla" },
      { name: "Perry", slug: "perry" }
    ]
  },

  elko: {
    slug: "elko",
    name: "Elko",
    county: "Houston",
    distance: "10",
    miles: "8",
    highway: "US-341",
    landmarks: [
      "US-341 corridor",
      "Houston County line",
      "Telfair County border",
      "Elko community center",
      "Rural residential areas"
    ],
    industries: ["Residential", "Light commercial", "Agriculture", "Commuter community"],
    competitiveGap: "Tiny community with zero local repair options — we are the closest truck repair shop to Elko with 30-minute dispatch",
    metaTitle: "Closest Truck Repair Shop to Elko, GA | 24-Hour Tire & Semi Service",
    metaDescription: "Closest truck repair shop to Elko, GA. 24 hr road service near me for semi tire repair, roadside assistance & mobile mechanic. 30-min dispatch on US-341. Call now!",
    h1Title: "24-Hour Truck & Tire Repair Near Elko, GA",
    heroIntro: "Looking for the closest truck repair shop to Elko? On The Spot Repair Service & Tires is just 10 minutes south on US-341 — the nearest 24/7 mobile mechanic serving Elko, Houston County, and the Telfair County border. We dispatch within 30 minutes.",
    heroSecondary: "Whether you need roadside semi tire repair near me, 24 hr road service near me, or truck tire repair near me — we bring the shop to you. No tow needed. Semis, fleet trucks, and passenger vehicles. Day or night.",
    localContent: `**The Closest Truck Repair Shop to Elko, GA**

Elko is one of those **blink-and-you-miss-it communities** along US-341 at the Houston/Telfair County line — but that does not mean its residents and the trucks passing through deserve slow service. Located just **8 miles north of Unadilla**, Elko sits on a busy commercial corridor that connects Perry to McRae-Helena and sees steady truck traffic daily.

**Why We Are the Closest Truck Repair Shop to Elko**

Elko has **no local repair shops** — none. The nearest options are Perry (15 minutes north) or our Unadilla shop (10 minutes south). But here is the difference: we offer **24/7 mobile service with 30-minute dispatch** to Elko. When you call us at 2 AM with a blown steer tire on US-341, we are already rolling — not telling you to wait until morning.

**US-341 Corridor Coverage**

US-341 is a critical east-west route connecting I-75 to southeast Georgia. Commercial trucks hauling freight between the interstate and coastal markets pass through Elko daily. We provide:

- **Roadside semi tire repair** — steer tires, drives, trailer tires
- **24 hr road service** — brake failures, air leaks, electrical issues
- **Mobile truck tire repair** — on-site mounting and balancing
- **Emergency fuel delivery** — when you run dry on the highway

**30-Minute Dispatch to Elko**

Our Unadilla shop is positioned for **fast response to Elko and the US-341 corridor**. When you call, we can typically have a fully-equipped mobile unit on-site within 30 minutes — faster than any Perry shop and far faster than calling someone from Macon or Warner Robins.

**Telfair County Border Service**

Elko sits right at the **Houston/Telfair County line**. We cover both sides — whether you break down just east of Elko in Telfair County or west toward Perry in Houston County, you are in our service area.

**Why Elko Drivers Save Our Number Before They Need It**

Elko sits right where US-341 meets the heart of Houston County, and that intersection sees more commercial truck traffic than most people realize. With Perry's industrial growth spilling southward and the steady flow of freight moving between Macon and Cordele, Elko has become a critical pass-through for box trucks and semis that can't afford downtime. Our mobile units are stationed just 10 minutes south in Unadilla, which means when your steer tire blows on US-341 or your air compressor fails heading to a Perry delivery, we're already closer than any shop in Macon. We know this stretch of road — the tight shoulders, the limited pull-off spots, the fact that there's no 24-hour service for miles in either direction. That's why Elko drivers save our number before they need it.

**Full List of Truck & Tire Services We Bring to Elko**

Because Elko has no local shop of its own, we bring the full shop to you. Our mobile units serving Elko and the US-341 corridor handle:

- **Roadside semi tire repair** — steer, drive, and trailer tires mounted and balanced on-site
- **24-hour emergency road service** — air brake failures, air leaks, and electrical faults
- **Diesel engine diagnostics** — no-start, overheating, and check-engine troubleshooting
- **Jump-starts and battery replacement** — for trucks, fleet vehicles, and passenger cars
- **Emergency fuel delivery** — when you run dry on the highway
- **Lockout assistance and farm equipment service** — around the clock, seven days a week
- **Passenger vehicle repair** — available by tow to our Unadilla shop

**Minutes from I-75 Exit 121**

Elko's biggest advantage is how close it sits to the interstate. Our Unadilla home base is right at **I-75 Exit 121**, just 8 miles south, and US-341 ties Elko directly into that interstate freight corridor between Perry (Exit 135) and the Cordele stretch to the south. Whether you break down on US-341 near the **Houston/Telfair County line**, on a rural feeder road, or after pulling off I-75 to route through Elko, we reach you fast from a location built for interstate response. That proximity is exactly why we can promise 30-minute dispatch when shops in Macon or Warner Robins would leave you waiting for hours.

**Growth Along the Perry–Elko Corridor**

Elko is feeling the ripple effect of Houston County's southward expansion. Perry's push to grow warehousing and light-industrial space around the I-75 Exit 135 and Exit 136 interchanges — plus the year-round event schedule at the Georgia National Fairgrounds just up the road — is steadily pulling more freight down US-341 through Elko than the corridor saw even a few years ago. New distribution and agricultural-supply traffic means more loaded trucks on a two-lane stretch that still has no repair shop of its own. As that development creeps closer to Elko, we've positioned our mobile units to cover the gap, so a growing freight route never outpaces the emergency service behind it.`,
    spanishContent: `**Servicio de Reparación de Camiones — Elko, GA**

¿Necesita reparación de llantas de camión cerca de Elko? On The Spot Repair Service & Tires ofrece servicio móvil las 24 horas del día, los 7 días de la semana para camiones comerciales, semirremolques y vehículos de pasajeros. Estamos a solo 10 minutos al sur de Elko en la US-341. Hablamos su idioma y entendemos la urgencia cuando su camión está varado. Llame ahora: 478-244-7008.`,
    commonCalls: [
      "Roadside semi tire repair on US-341",
      "24 hr road service for truck breakdowns",
      "Truck tire repair near Elko",
      "Dead batteries in residential driveways",
      "Farm truck breakdowns on county roads",
      "After-hours lockout assistance"
    ],
    faqs: [
      {
        question: "What is the closest truck repair shop to Elko, GA?",
        answer: "On The Spot Repair Service & Tires in Unadilla is the closest truck repair shop to Elko — just 10 minutes south on US-341. We offer 24/7 mobile service with 30-minute dispatch, so we can come to you for roadside repairs without the need for a tow."
      },
      {
        question: "Do you offer 24 hr road service near me in Elko?",
        answer: "Yes. We provide true 24/7 emergency road service to Elko and the US-341 corridor. Whether it is 2 AM on a Tuesday or noon on Sunday, call 478-244-7008 and we will dispatch a mobile unit to your location — typically within 30 minutes."
      },
      {
        question: "Can you do roadside semi tire repair near me in Elko?",
        answer: "Absolutely. Roadside semi tire repair is one of our most common calls on US-341. We carry commercial-grade steer tires, drive tires, and trailer tires on our mobile units. We can mount, balance, and get you rolling without a tow — right where you broke down."
      },
      {
        question: "Is there truck tire repair near me if I break down near Elko?",
        answer: "Yes. On The Spot Repair Service & Tires provides mobile truck tire repair throughout Elko, Houston County, and the Telfair County border. We service semi-trucks, box trucks, delivery vans, and fleet vehicles. Call us anytime — we are the closest 24/7 option to Elko."
      }
    ],
    services: [
      { service: "24/7 Roadside Semi Tire Repair", availability: "Yes — 30-min dispatch" },
      { service: "24 Hr Road Service", availability: "Yes — mobile" },
      { service: "Truck Tire Repair", availability: "Yes — mobile" },
      { service: "Farm Equipment Service", availability: "Yes �� mobile" },
      { service: "Passenger Vehicle Repair", availability: "Yes — tow to Unadilla shop" },
      { service: "Jump-starts & Battery Service", availability: "Yes — mobile" },
      { service: "Lockout Assistance", availability: "Yes — 24/7" }
    ],
    schemaDescription: "Closest truck repair shop to Elko, GA. 24/7 mobile semi tire repair, roadside assistance, and emergency road service on US-341. 30-minute dispatch from Unadilla.",
    coordinates: { lat: 32.3318, lng: -83.7654 },
    nearbyTowns: [
      { name: "Unadilla", slug: "unadilla" },
      { name: "Hawkinsville", slug: "hawkinsville" },
      { name: "Perry", slug: "perry" }
    ]
  },

  byromville: {
    slug: "byromville",
    name: "Byromville",
    county: "Dooly",
    distance: "12",
    miles: "10",
    highway: "GA-90",
    landmarks: [
      "GA-90 corridor",
      "Rural Dooly County farmland",
      "Peanut and cotton farms",
      "Byromville community"
    ],
    industries: ["Agriculture", "Peanut farming", "Cotton farming", "Rural residential"],
    competitiveGap: "Rural farm town with no local repair options — farmers depend on mobile service during harvest",
    seasonalNote: "Peanut and cotton harvest seasons bring emergency calls from the fields",
    metaTitle: "24-Hour Truck Repair in Byromville, GA | On The Spot Repair Service & Tires",
    metaDescription: "24/7 truck repair near me & tire repair near me in Byromville, GA. Mobile farm truck service. Peanut & cotton harvest support. Call now!",
    heroIntro: "Farm truck broken down during harvest? Flat tire on a Dooly County backroad? On The Spot Repair Service & Tires is your 24/7 emergency repair team — just 12 minutes from Byromville. We bring the shop to the field.",
    heroSecondary: "Byromville is farm country, and we understand that when peanuts are ready or cotton is waiting, you cannot afford downtime. From grain hauler tire blowouts to diesel engine failures, we provide mobile service to Byromville's agricultural operations.",
    localContent: `**Serving Byromville's Farming Community**

Byromville is the heart of **Dooly County farm country** — a small community surrounded by **peanut fields, cotton farms, and working agricultural land**. There is no mechanic shop in Byromville. There is no tire store. When a farm truck breaks down on GA-90 or a grain hauler blows a tire on a dirt road during harvest, the nearest help has always been a long drive away.

Until now. We bring the shop to you.

We know Byromville. Our mobile repair units regularly service vehicles at:

- **GA-90 through Byromville** — highway breakdowns, farm truck emergencies
- **Peanut farms and cotton fields** — harvest equipment, grain haulers, diesel trucks
- **Rural Dooly County dirt roads** — equipment trailers, farm pickups, irrigation vehicles
- **Byromville residential areas** — family cars, personal trucks, daily drivers

**Why Byromville Farmers Call Us First**

Farming does not run on a 9-to-5 schedule — and neither do we. During **peanut harvest** (September through November) and **cotton harvest** (October through December), trucks run from dawn until well past dark. Breakdowns happen at midnight. Flat tires happen in the field. Engine failures happen on Sunday.

We are the **only 24/7 repair service** that covers Byromville with true mobile capability. Our shop in Unadilla is just **10 miles away on GA-90** — we can reach your location in about 12 minutes.

**Harvest Season Emergency Support**

When the weather is right and the crop is ready, every hour counts:

- Peanut diggers and combines running 16-hour days
- Grain carts and module builders moving constantly
- Farm trucks hauling loads to the processor
- Equipment trailers shuttling between fields

A breakdown during harvest is not just an inconvenience — it is lost revenue, spoiled crop, missed delivery windows. We provide **emergency harvest support** to keep Byromville's farms running.

**Year-Round Farm Fleet Service**

Beyond harvest season, Byromville's farms depend on trucks and equipment year-round for irrigation, planting, spraying, and maintenance. We service the entire farm fleet.

**No Other Option That Answers After Dark**

Byromville is the definition of rural Georgia — peanut fields, cotton rows, and two-lane roads where a blown tire means you're walking farther than you want to in July heat. There are no truck shops in Byromville. No 24-hour service. No tow truck that can handle a loaded semi without calling Macon and waiting two hours. We know this because we've been called to Byromville at 11 PM, at 4 AM, and on Sunday afternoons when harvest can't wait. Our mobile units carry commercial-grade tires, air brake tools, and diesel diagnostics because out here, "I'll fix it tomorrow" costs more than the repair bill — it costs the crop, the contract, and the week's revenue. We come to you because in Byromville, there isn't another option that answers the phone after dark.

**A Small Town on the Line Between Two Counties**

Byromville sits tucked into the northeast corner of Dooly County, right where the farm roads start blurring into Crawford and Macon County territory — and that in-between location is exactly what leaves drivers stranded. A truck that breaks down here is often too far off I-75 for the interstate services to bother with, yet too far from any town for a local garage to exist. GA-90 and the county roads feeding it carry peanut and cotton loads, propane and fuel trucks serving the outlying farms, and the occasional through-driver who trusted a shortcut. We treat Byromville as core service area, not an afterthought, because we're the shop that actually knows where these roads go. When the map runs out of options, we're still the number that picks up.`,
    commonCalls: [
      "Farm truck tire blowouts during harvest",
      "Diesel engine failures in the field",
      "Grain hauler brake problems",
      "Equipment trailer tire service on dirt roads",
      "After-hours fuel delivery to farm equipment",
      "Jump-starts for farm trucks and pickups"
    ],
    faqs: [
      {
        question: "Do you provide 24/7 truck repair near Byromville, GA?",
        answer: "Yes. We are based in Unadilla, just 12 minutes from Byromville on GA-90, and provide 24-hour mobile truck and tire repair throughout rural Dooly County. We specialize in farm truck service and harvest season emergency support."
      },
      {
        question: "Can you come to my farm field for a breakdown during harvest?",
        answer: "Absolutely. We provide true mobile service — we come to you, wherever you are. If your grain hauler breaks down on a dirt road at 10 PM during peanut harvest, call us. We will find you and get you running."
      },
      {
        question: "Do you service peanut and cotton farming equipment in Byromville?",
        answer: "Yes. We service farm trucks, grain haulers, equipment trailers, and diesel pickups used in peanut and cotton operations. We understand harvest urgency and provide priority response during peak season."
      }
    ],
    services: [
      { service: "24/7 Emergency Tire Repair", availability: "Yes — mobile to field locations" },
      { service: "Farm Truck Engine Repair", availability: "Yes — mobile or tow to shop" },
      { service: "Agricultural Equipment Service", availability: "Yes — mobile" },
      { service: "Harvest Season Priority Response", availability: "Yes — call for availability" },
      { service: "Roadside Assistance", availability: "Yes — 24/7" },
      { service: "Diesel Repair", availability: "Yes — mobile" },
      { service: "Passenger Vehicle Repair", availability: "Yes — tow to Unadilla shop" }
    ],
    schemaDescription: "24/7 truck repair and tire repair near Byromville, GA. Mobile farm truck service for peanut and cotton harvest operations in rural Dooly County.",
    coordinates: { lat: 32.2046, lng: -83.9082 }
  },

  montezuma: {
    slug: "montezuma",
    name: "Montezuma",
    county: "Macon",
    distance: "22",
    miles: "20",
    highway: "GA-26",
    landmarks: [
      "Macon County Courthouse",
      "Downtown Montezuma",
      "GA-26 corridor",
      "Peanut processing facilities"
    ],
    industries: ["Peanut farming", "Agriculture", "County government", "Small business"],
    competitiveGap: "Rural county seat with limited repair options — no 24-hour service available locally",
    seasonalNote: "Peanut harvest brings heavy truck traffic through Montezuma",
    metaTitle: "Truck Repair Montezuma GA | On The Spot Repair Services",
    metaDescription: "Truck repair Montezuma GA — 24/7 mobile truck & tire repair across Macon County. Roadside service on GA-26 for peanut haulers, fleets & farm trucks. Call now!",
    h1Title: "Truck & Tire Repair in Montezuma, GA — 24-Hour Mobile Service",
    heroIntro: "Truck trouble outside the Macon County Courthouse? Flat tire hauling peanuts on GA-26? Our 24/7 emergency repair team is just 22 minutes from Montezuma — and we bring the shop to you.",
    heroSecondary: "Montezuma sits in the heart of Georgia peanut country, and we understand that agricultural operations cannot wait. From loaded peanut haulers to county fleet vehicles, we provide mobile truck and tire service throughout Macon County.",
    localContent: `**Serving Macon County's Agricultural Hub**

Montezuma is the **seat of Macon County** and the center of one of Georgia's most productive **peanut farming regions**. Located along **GA-26** between Americus and I-75, Montezuma sees steady truck traffic hauling peanuts, cotton, and agricultural products to processors and markets across the state.

We know Montezuma. Our mobile repair units regularly service vehicles at:

- **Macon County Courthouse** — county fleet vehicles, law enforcement, municipal equipment
- **Downtown Montezuma** — local business delivery trucks, service vehicles
- **GA-26 corridor** — highway breakdowns, peanut haulers, agricultural trucks
- **Peanut processing facilities** — loaded trailers, refrigerated units, fleet trucks
- **Rural Macon County roads** — farm equipment, grain haulers, diesel pickups

**Why Montezuma Drivers Call Us First**

Montezuma is a **county seat without 24-hour truck service**. The local shops close by early evening, and the nearest alternatives are in Americus or Perry — both 20+ minutes away with no guarantee of overnight availability.

Our shop in Unadilla is just **20 miles east on GA-26** — we can reach Montezuma in about 22 minutes. We are the reliable 24-hour option for Macon County when local shops are closed.

**Peanut Country Support**

Macon County grows **peanuts** — a lot of them. During harvest season (September through November), the roads fill with:

- Peanut haulers running to processing facilities
- Farm trucks moving between fields and storage
- Equipment trailers and combines
- Diesel pickups supporting harvest operations

When a loaded peanut truck breaks down at 9 PM, the processor does not care why you are late — they just need the load. We provide **emergency harvest support** to keep Montezuma's peanut industry moving.

**County Government Fleet Support**

As the Macon County seat, Montezuma houses **county government operations** that depend on fleet vehicles:

- Sheriff's department vehicles
- County maintenance trucks
- Municipal equipment
- Emergency service vehicles

We offer account billing and priority dispatch for government fleet accounts.

**Downtown Revitalization & Rising Freight**

Montezuma's Downtown Development Authority has been actively revitalizing the commercial district since 1981, and that investment is starting to pay off with new storefronts, façade grants, and increased freight traffic serving the growing business base. The CDBG-funded infrastructure work on S. Dooly Street and Lavender Street means more construction vehicles, more delivery trucks, and more pressure on local roads that weren't built for modern commercial traffic. When a box truck delivering to a renovated downtown storefront clips a curb and blows a steer tire, or when a contractor's diesel pickup won't start at the job site, Montezuma doesn't have a 24-hour option — except us. We're 22 minutes west in Unadilla, and we know Macon County's backroads well enough to find you even when GPS loses signal.

**A Rail-and-Road Crossroads Getting Busier**

Montezuma has always been a crossroads town — it grew up around the rail line and the Flint River, and today US-26 and GA-49 carry the freight that keeps the twin communities of Montezuma and Oglethorpe supplied. That location is drawing fresh interest: as regional shippers look for lower-cost sites off the crowded I-75 corridor, the industrial and warehouse ground around Macon County's rail access is exactly the kind of spot that attracts new distribution activity. More freight funneling onto GA-49 and US-26 means more heavy trucks on roads that were laid out for a quieter era. We're already covering that traffic today, and we're positioned to keep up as Montezuma's crossroads role continues to grow.`,
    commonCalls: [
      "Peanut hauler tire blowouts on GA-26",
      "Brake failures on loaded agricultural trucks",
      "County fleet vehicle breakdowns",
      "Engine overheating on rural Macon County roads",
      "After-hours service for processing facility trucks",
      "Farm truck diesel repairs"
    ],
    faqs: [
      {
        question: "Do you offer 24/7 truck repair near Montezuma, GA?",
        answer: "Yes. We are based in Unadilla, just 22 minutes east on GA-26, and provide 24-hour mobile truck and tire repair throughout Montezuma and Macon County. We are the closest 24/7 commercial truck service to Montezuma."
      },
      {
        question: "Can you service peanut haulers and agricultural trucks in Macon County?",
        answer: "Absolutely. Montezuma is peanut country, and we regularly service peanut haulers, grain trucks, and agricultural equipment throughout Macon County — especially during harvest season when downtime costs money."
      },
      {
        question: "Do you work with Macon County government fleet vehicles?",
        answer: "Yes. We service county fleet vehicles, law enforcement vehicles, and municipal equipment in Montezuma. We offer account billing and priority dispatch for government accounts."
      }
    ],
    services: [
      { service: "24/7 Emergency Tire Repair", availability: "Yes — mobile" },
      { service: "Semi-Truck Engine Repair", availability: "Yes — mobile or tow to shop" },
      { service: "Agricultural Truck Service", availability: "Yes — mobile" },
      { service: "Brake Service & DOT Inspections", availability: "Yes — by appointment or emergency" },
      { service: "Fleet Maintenance Programs", availability: "Yes — account billing available" },
      { service: "Roadside Assistance", availability: "Yes — 24/7" },
      { service: "Passenger Vehicle Repair", availability: "Yes — tow to Unadilla shop" }
    ],
    schemaDescription: "24/7 truck repair and tire repair in Montezuma, GA. Mobile service to Macon County Courthouse, GA-26 corridor, and peanut farming operations.",
    coordinates: { lat: 32.3052, lng: -84.0274 }
  }
}

export const TOWN_SLUGS = Object.keys(TOWNS)

export function getTownData(slug: string): TownData | null {
  return TOWNS[slug.toLowerCase()] || null
}
