/* =====================================================================
   SITE SETTINGS: the only file you edit for a new business.
   Change the values, save, refresh index.html.
   Text goes inside "quotes". Keep the commas at the end of lines.
   Leave a value "" (or a list []) to hide that part of the page.
   ===================================================================== */

window.SITE = {

  /* true = small "Example site" banner and the form sends nothing.
     Set false before a business sees its mock-up. */
  samplePreview: true,

  /* ---------- Look ----------
     style: "luxe" (elegant serif headlines, fine lines) or "modern" (clean sans, softer corners).
     hero.layout below: "split" (photo beside the headline) or "full" (wide photo behind it). */
  style: "luxe",

  /* ---------- Business basics ---------- */
  business: {
    name: "Summit Plumbing Co.",
    trade: "Plumbing",                          // one or two words: "Plumbing", "Electrical", "Handyman services"
    tagline: "Fast, honest plumbing for homes across North Texas.",
    phone: "(555) 010-4821",
    email: "office@summitplumbing.example",     // quote requests are sent here
    address: "",                                // optional street address ("" hides it)
    license: "Licensed in Texas",               // license line for the footer ("" hides it)
    yearsInBusiness: 12,                        // 0 hides it
    warranty: "1-year workmanship warranty",    // optional
    responseTime: "We call back within the hour", // shown under the call button
  },

  /* ---------- Hours ----------
     One line per group of days, 24-hour times. Used for the live
     "Open now" badge. Example: "Mon-Fri 07:00-18:00", "Sat 08:00-12:00".
     emergency: true adds "24/7 emergency line" when closed. */
  hours: {
    schedule: ["Mon-Sat 07:00-19:00"],
    emergency: true,
    timezone: "America/Chicago",
  },

  /* ---------- Logo ----------
     Save the file into the assets folder and write e.g. "assets/logo.png".
     "" = the business name as a clean wordmark with a small trade icon. */
  logo: "",

  /* ---------- Colors ----------
     primary: their brand color (buttons, icons, links). Pick it from their
     logo, truck or uniform. dark: the quote section and footer background.
     Text colors adjust automatically, so any color stays readable. */
  colors: {
    primary: "#14304F",   // buttons and links: deep, rich colors look most premium
    dark:    "#0E1A29",   // reviews band, quote section and footer
    accent:  "#A9844B",   // small details: stars, check marks, dividers
  },

  /* ---------- Hero ----------
     image: their best photo (truck, team, or a job in progress). From their
     Google Business profile is ideal. Can be a file in assets/ or a link.
     focus: which part of the photo to keep in view ("center", "70% 30%"). */
  hero: {
    headline: "Plumbing done right, the same day you call.",
    subhead: "Licensed plumbers serving {city} and nearby towns. Upfront pricing, clean work, and a real person who picks up the phone.",
    image: "https://images.unsplash.com/photo-1676210134050-6f12c6898395?w=1400&q=80&auto=format&fit=crop",
    focus: "60% center",
    layout: "split",
    highlights: ["Licensed and insured", "Upfront pricing", "1-year warranty"],  // 2 to 4 short checkmarks under the buttons
  },

  /* ---------- Services ----------
     icon options: wrench, drop, heater, drain, pipe, toilet, bolt, panel,
     outlet, light, fan, hammer, drill, paint, door, tile, home, shield,
     clock, leaf, snow, flame, check */
  services: [
    { icon: "drop",   name: "Leak repair",        text: "Dripping faucets to hidden slab leaks, found and fixed fast." },
    { icon: "drain",  name: "Drain cleaning",     text: "Sinks, tubs and main lines cleared, with camera inspection." },
    { icon: "heater", name: "Water heaters",      text: "Tank and tankless repair or replacement, often same day." },
    { icon: "toilet", name: "Toilets and fixtures", text: "Repairs and installs for toilets, faucets, sinks and showers." },
    { icon: "pipe",   name: "Repiping",           text: "Whole-home and partial repipes in PEX or copper." },
    { icon: "clock",  name: "Emergency service",  text: "Burst pipe or no water? Call any time, day or night." },
  ],

  /* ---------- How it works (3 short steps) ---------- */
  process: [
    { title: "Call or request a quote", text: "Tell us what's going on. You'll talk to a real person, not a call center." },
    { title: "Get a clear price first", text: "We diagnose the problem and give you the price before any work starts." },
    { title: "Fixed and cleaned up", text: "We do the job right, test it, and leave your home as clean as we found it." },
  ],

  /* ---------- Recent work photos (3 to 6) ----------
     Pull these from their Google Business profile. */
  gallery: [
    { src: "https://images.unsplash.com/photo-1749532125405-70950966b0e5?w=1600&q=80&auto=format&fit=crop", caption: "Bathroom fixture replacement" },
    { src: "https://images.unsplash.com/photo-1676210134190-3f2c0d5cf58d?w=1200&q=80&auto=format&fit=crop", caption: "Under-sink drain repair" },
    { src: "https://images.unsplash.com/photo-1650551182991-b07558247564?w=1200&q=80&auto=format&fit=crop", caption: "Water heater install" },
    { src: "https://images.unsplash.com/photo-1542013936693-884638332954?w=1200&q=80&auto=format&fit=crop", caption: "Kitchen faucet upgrade" },
  ],

  /* ---------- Reviews ----------
     Paste their real Google reviews (first name + last initial).
     The first one is shown large. */
  reviews: {
    rating: 4.9,
    count: 186,
    link: "",               // link to their Google reviews page (optional)
    items: [
      { name: "Sarah M.", text: "Called at 8am with a leak under the sink and they were here by 10. Fair price, explained everything, and cleaned up after. This is who we call from now on." },
      { name: "James R.", text: "Replaced our water heater the same day. Professional from the first call to the final invoice." },
      { name: "Linda P.", text: "Honest and on time. They told me I didn't need the expensive fix another company quoted me." },
    ],
  },

  /* ---------- About / owner ---------- */
  about: {
    title: "Family-owned, and we answer our own phone",
    text: "Summit started with one truck and a promise to treat every home like our own. Twelve years later we're still local, still licensed, and still show up when we say we will.",
    photo: "https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?w=1200&q=80&auto=format&fit=crop",
    signature: "The Summit team",
  },

  /* ---------- Service area ---------- */
  area: {
    city: "Prosper, TX",     // main city; also fills {city} in text
    cities: ["Prosper", "Frisco", "Celina", "McKinney", "Allen", "Little Elm", "Aubrey", "Plano"],
    showMap: true,
  },

  /* ---------- FAQ (optional) ---------- */
  faq: [
    { q: "Do you charge for estimates?", a: "No. Quotes are free, and you'll know the price before any work starts." },
    { q: "Are you licensed and insured?", a: "Yes. We're fully licensed in Texas and carry liability insurance on every job." },
    { q: "Do you offer emergency service?", a: "Yes. Call any time, including nights and weekends, for leaks, burst pipes or no water." },
    { q: "Is your work guaranteed?", a: "Every job comes with a 1-year workmanship warranty." },
  ],

  /* ---------- Quote form ----------
     "formsubmit" emails requests to business.email (the first one sends a
     one-time confirm email to that inbox). Or paste any form endpoint URL. */
  quoteForm: {
    sendTo: "formsubmit",
    title: "Get a free quote",
    intro: "Tell us what's going on and we'll get back to you within the hour during business hours.",
  },

  /* ---------- Kloverin chatbot ----------
     apiUrl "" = preview bubble that greets visitors and points to call/quote.
     Paste the client's Kloverin chat URL (…/chat) to turn on the AI. */
  chatbot: {
    enabled: true,
    apiUrl: "",
    greeting: "Hi! Thanks for visiting {name}. What can we help you with today?",
  },
};
