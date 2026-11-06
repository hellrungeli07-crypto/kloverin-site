/* EXAMPLE: a handyman business. Modern style, split hero, Louisiana. Sample content. */

window.SITE = {
  samplePreview: true,
  style: "warm",

  business: {
    name: "Cedar Lane Home Repair",
    trade: "Handyman services",
    tagline: "Repairs, carpentry and home projects across Baton Rouge.",
    phone: "(555) 010-2264",
    email: "hello@cedarlanerepair.example",
    address: "",
    license: "Licensed and insured in Louisiana",
    yearsInBusiness: 9,
    warranty: "1-year workmanship guarantee",
    responseTime: "Most jobs scheduled within the week",
  },

  hours: {
    schedule: ["Mon-Fri 08:00-17:30", "Sat 09:00-13:00"],
    emergency: false,
    timezone: "America/Chicago",
  },

  logo: "",

  colors: {
    primary: "#4E6B3A",
    dark:    "#26301F",
    accent:  "#E2A23B",
  },

  hero: {
    headline: "Your to‑do list, handled by one local crew.",
    subhead: "From a sticking door to a brand-new deck, {name} takes care of the projects you keep putting off. Fair prices, tidy work, and we show up when we say.",
    image: "https://images.unsplash.com/photo-1773430272653-375174373c4f?w=1400&q=80&auto=format&fit=crop",
    focus: "center 40%",
    layout: "center",
    highlights: ["Licensed and insured", "Flat, upfront pricing", "1-year guarantee"],
  },

  services: [
    { icon: "hammer", name: "Carpentry and decks", text: "New decks, rotted boards, railings, trim and built-ins." },
    { icon: "door",   name: "Doors and windows", text: "Sticking doors, new hardware, storm doors and window repairs." },
    { icon: "paint",  name: "Drywall and paint", text: "Holes patched, textures matched and rooms painted clean." },
    { icon: "drill",  name: "Installs and mounting", text: "TVs, shelves, ceiling fans, blinds and fixtures, done level." },
    { icon: "tile",   name: "Tile and flooring", text: "Backsplashes, tile repairs and floating floors." },
    { icon: "home",   name: "Honey-do lists", text: "Book a half or full day and we'll work through the whole list." },
  ],

  process: [
    { title: "Send us your list", text: "Call, text or use the form. Photos help us quote faster." },
    { title: "Get a flat price", text: "One clear price for the job, not an open-ended hourly bill." },
    { title: "We get it done", text: "On time, cleaned up, and checked with you before we leave." },
  ],

  gallery: [
    { src: "https://images.unsplash.com/photo-1773430273169-3f9ca42c0077?w=1600&q=80&auto=format&fit=crop", caption: "Backyard deck build" },
    { src: "https://images.unsplash.com/photo-1788616051964-19e17fe8e0b3?w=1200&q=80&auto=format&fit=crop", caption: "Railing repair" },
    { src: "https://images.unsplash.com/photo-1773432114026-25ee626e9e8a?w=1200&q=80&auto=format&fit=crop", caption: "Custom trim cuts" },
    { src: "https://images.unsplash.com/photo-1773430272140-e8c995979750?w=1600&q=80&auto=format&fit=crop", caption: "Deck framing" },
  ],

  reviews: {
    rating: 5.0,
    count: 128,
    link: "",
    items: [
      { name: "Danielle B.", text: "They knocked out a list of eleven things in one day, from the deck boards to the closet door. Clean, friendly and exactly the price they quoted." },
      { name: "Chris L.", text: "Built our new deck in under a week. Looks amazing." },
      { name: "Pat W.", text: "Finally a handyman who shows up on time and answers the phone." },
    ],
  },

  about: {
    title: "A small crew that treats your house like ours",
    text: "Cedar Lane started as one guy with a truck and a lot of tools. Today we're a small team, but every job still gets the same care, a fair price and a clean jobsite.",
    photo: "https://images.unsplash.com/photo-1773430272884-266836364569?w=1200&q=80&auto=format&fit=crop",
    signature: "The Cedar Lane crew",
  },

  area: {
    city: "Baton Rouge, LA",
    cities: ["Baton Rouge", "Prairieville", "Denham Springs", "Zachary", "Central", "Gonzales"],
    showMap: true,
  },

  faq: [
    { q: "Is there a minimum job size?", a: "No. Small jobs are welcome, and we're happy to bundle a few together." },
    { q: "Do you charge by the hour?", a: "We give a flat price for most jobs so you know the cost before we start." },
    { q: "Do you bring the materials?", a: "Yes. We pick up what's needed and include it in your quote." },
  ],

  quoteForm: {
    sendTo: "formsubmit",
    title: "Tell us what needs fixing",
    intro: "Send your list and we'll reply with a flat price, usually the same day.",
  },

  chatbot: {
    enabled: true,
    apiUrl: "",
    greeting: "Hey! Thanks for visiting {name}. What's on your to-do list?",
  },
};
