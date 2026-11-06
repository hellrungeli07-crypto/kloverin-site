/* EXAMPLE: a roofing company. Luxe style with a full-width photo hero. Sample content. */

window.SITE = {
  samplePreview: true,
  style: "dark",

  business: {
    name: "Ridgeline Roofing",
    trade: "Roofing",
    tagline: "Roof replacement and repair for homes across Denton County.",
    phone: "(555) 010-3390",
    email: "office@ridgelineroofing.example",
    address: "",
    license: "Licensed and insured in Texas",
    yearsInBusiness: 18,
    warranty: "10-year workmanship warranty",
    responseTime: "Free inspections, usually within 48 hours",
  },

  hours: {
    schedule: ["Mon-Fri 07:30-18:00", "Sat 09:00-14:00"],
    emergency: false,
    timezone: "America/Chicago",
  },

  logo: "",

  colors: {
    primary: "#2A2F36",
    dark:    "#16191D",
    accent:  "#C08A54",
  },

  hero: {
    headline: "A roof built to outlast the next storm.",
    subhead: "Replacements, repairs and insurance claims for homeowners in {city} and across Denton County. One crew, one point of contact, start to finish.",
    image: "https://images.unsplash.com/photo-1635424824849-1b09bdcc55b1?w=2400&q=80&auto=format&fit=crop",
    focus: "70% 30%",
    layout: "full",
    highlights: ["Free roof inspection", "Insurance claim help", "10-year warranty"],
  },

  services: [
    { icon: "home",   name: "Roof replacement",   text: "Architectural shingle and metal roofs, installed and cleaned up in as little as a day." },
    { icon: "shield", name: "Storm and hail repair", text: "Fast tarping and lasting repairs after wind and hail, documented for your insurer." },
    { icon: "check",  name: "Insurance claims",   text: "We inspect, photograph and meet your adjuster so you're paid for the full scope." },
    { icon: "drop",   name: "Leak repair",        text: "Flashing, vents and valleys found and sealed before water reaches the ceiling." },
    { icon: "leaf",   name: "Gutters",            text: "Seamless gutters and guards sized for Texas downpours." },
    { icon: "clock",  name: "Annual inspections", text: "A yearly check that catches small problems while they're still cheap." },
  ],

  process: [
    { title: "Free inspection", text: "We get on the roof, photograph what we find and walk you through it." },
    { title: "Clear proposal", text: "A written price and timeline, plus help with your insurance claim if there is one." },
    { title: "Installed and inspected", text: "Our crew finishes fast, magnets the yard for nails and checks every detail." },
  ],

  gallery: [
    { src: "https://images.unsplash.com/photo-1643225523483-e2c434191bba?w=1600&q=80&auto=format&fit=crop", caption: "Full replacement, Denton" },
    { src: "https://images.unsplash.com/photo-1635424709870-cdc6e64f0e20?w=1200&q=80&auto=format&fit=crop", caption: "Shingle install, Argyle" },
    { src: "https://images.unsplash.com/photo-1633759593085-1eaeb724fc88?w=1200&q=80&auto=format&fit=crop", caption: "Tear-off and re-deck, Corinth" },
    { src: "https://images.unsplash.com/photo-1635424825057-7fb6dcd651ef?w=1600&q=80&auto=format&fit=crop", caption: "Ridge vent upgrade, Flower Mound" },
  ],

  reviews: {
    rating: 4.9,
    count: 312,
    link: "",
    items: [
      { name: "Karen D.", text: "After the hail storm they handled everything with our insurance and had a new roof on in one day. The yard was cleaner than before they came." },
      { name: "Mike T.", text: "Honest inspection. They told us we only needed a repair, not a whole roof." },
      { name: "Alicia R.", text: "On time, on budget, and the crew was respectful of our home and our neighbors." },
    ],
  },

  about: {
    title: "Eighteen years on Denton County roofs",
    text: "Ridgeline is a local crew, not a storm-chasing outfit. We've replaced thousands of roofs here, we answer for every one of them, and we'll still be here when your warranty matters.",
    photo: "https://images.unsplash.com/photo-1635424709961-f3a150459ad4?w=1200&q=80&auto=format&fit=crop",
    signature: "The Ridgeline crew",
  },

  area: {
    city: "Denton, TX",
    cities: ["Denton", "Argyle", "Corinth", "Flower Mound", "Lake Dallas", "Aubrey", "Krum", "Sanger"],
    showMap: true,
  },

  faq: [
    { q: "Is the inspection really free?", a: "Yes. We inspect, photograph and explain what we find with no obligation." },
    { q: "Will my insurance cover a new roof?", a: "If storm damage is found, it often does. We document everything and can meet your adjuster on site." },
    { q: "How long does a replacement take?", a: "Most homes are done in one day, two for larger or steeper roofs." },
    { q: "What warranty do you offer?", a: "A 10-year workmanship warranty on top of the manufacturer's shingle warranty." },
  ],

  quoteForm: {
    sendTo: "formsubmit",
    title: "Book a free roof inspection",
    intro: "Tell us about your roof and we'll call to schedule a time that works for you.",
  },

  chatbot: {
    enabled: true,
    apiUrl: "",
    greeting: "Hi! Thanks for visiting {name}. Need a roof inspection or a repair?",
  },
};
