/* EXAMPLE: an electrician. Copy this over site-settings.js in a site folder
   to see the template switch trades, colors, photos and city. Sample content. */

window.SITE = {
  samplePreview: true,

  business: {
    name: "Brightline Electric",
    trade: "Electrical",
    tagline: "Safe, code-right electrical work for homes in Frisco and nearby.",
    phone: "(555) 010-7730",
    email: "hello@brightline.example",
    address: "",
    license: "TECL #00000",
    yearsInBusiness: 8,
    warranty: "2-year labor warranty",
    responseTime: "Same-day callbacks, every weekday",
  },

  hours: {
    schedule: ["Mon-Fri 07:00-18:00", "Sat 08:00-13:00"],
    emergency: false,
    timezone: "America/Chicago",
  },

  logo: "",

  colors: {
    primary: "#1E7A4C",
    accent:  "#FFD23F",
    dark:    "#0D1A14",
  },

  hero: {
    headline: "Electrical work done safely, and done to code.",
    subhead: "Licensed electricians serving {city} homeowners. Clear quotes, on-time arrivals, and work that passes inspection.",
    image: "https://images.unsplash.com/photo-1660330589487-39cc0177ba89?w=2000&q=80&auto=format&fit=crop",
    focus: "60% center",
  },

  services: [
    { icon: "panel",  name: "Panel upgrades",     text: "200-amp upgrades and panel replacements, permits handled." },
    { icon: "outlet", name: "Outlets and switches", text: "New outlets, GFCI protection, USB and smart switches." },
    { icon: "light",  name: "Lighting",           text: "Recessed, landscape and fixture installs inside and out." },
    { icon: "fan",    name: "Ceiling fans",       text: "Fan installs and replacements, including new boxes and wiring." },
    { icon: "bolt",   name: "EV chargers",        text: "Level 2 home chargers installed and ready to use." },
    { icon: "shield", name: "Safety inspections", text: "Whole-home checks for buyers, sellers and older homes." },
  ],

  process: [
    { title: "Tell us about the job", text: "Call or send a request. We'll ask a few questions and set a time that works." },
    { title: "Get a written quote", text: "You see the full price before we start. No surprises on the invoice." },
    { title: "Done to code", text: "We pull permits when needed, finish clean, and test everything before we leave." },
  ],

  gallery: [
    { src: "https://images.unsplash.com/photo-1676630656246-3047520adfdf?w=1200&q=80&auto=format&fit=crop", caption: "Fixture install" },
    { src: "https://images.unsplash.com/photo-1635335874521-7987db781153?w=1200&q=80&auto=format&fit=crop", caption: "Panel rewire" },
    { src: "https://images.unsplash.com/photo-1473308822086-710304d7d30c?w=1200&q=80&auto=format&fit=crop", caption: "Lighting upgrade" },
  ],

  reviews: {
    rating: 5.0,
    count: 74,
    link: "",
    items: [
      { name: "Marcus T.", text: "Upgraded our panel in one day and explained every step. The work was spotless and it passed inspection the first time." },
      { name: "Priya K.",  text: "Installed our EV charger quickly and the price matched the quote exactly." },
      { name: "Dan W.",    text: "Found a wiring problem two other companies missed. Very thorough." },
    ],
  },

  about: {
    title: "Local electricians who show up on time",
    text: "Brightline is a small, licensed crew based in Frisco. We keep our schedule tight so we can arrive when we say, and we explain the work in plain English.",
    photo: "https://images.unsplash.com/photo-1660330589693-99889d60181e?w=1200&q=80&auto=format&fit=crop",
    signature: "The Brightline crew",
  },

  area: {
    city: "Frisco, TX",
    cities: ["Frisco", "Prosper", "Little Elm", "The Colony", "Plano", "McKinney"],
    showMap: true,
  },

  faq: [
    { q: "Do you pull permits?", a: "Yes. We handle permits and inspections for panel upgrades, new circuits and EV chargers." },
    { q: "How soon can you come out?", a: "Most jobs are scheduled within two business days. Call for the next open slot." },
    { q: "Is there a trip charge?", a: "No trip charge inside our service area. Quotes are free." },
  ],

  quoteForm: {
    sendTo: "formsubmit",
    title: "Get a free estimate",
    intro: "Tell us about the job and we'll reply the same business day.",
  },

  chatbot: {
    enabled: true,
    apiUrl: "",
    greeting: "Hi! Thanks for visiting {name}. What electrical project can we help with?",
  },
};
