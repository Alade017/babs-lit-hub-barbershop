import { useEffect, useRef, useState } from "react"

const HERO = "/hero.webp"
const BRAND = "Babs Lit Hub Barbershop"
const PHONE = "+2348028293299"
const DISPLAY_PHONE = "0802 829 3299"
const ADDRESS = "QG4G+P68, Ladipo St, behind Bovas, Osogbo 230284, Osun"
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=QG4G%2BP68%2C%20Ladipo%20St%2C%20behind%20Bovas%2C%20Osogbo%20230284%2C%20Osun"
const WHATSAPP_URL = `https://wa.me/2348028293299?text=${encodeURIComponent(`Hello ${BRAND}, I would like to ask about your services.`)}`

const SERVICES = [
  { title: "Hair Colouring", text: "Professional colour services for a fresh, confident look." },
  { title: "Beard Care", text: "Beard conditioning, dyeing, maintenance and clean trims." },
  { title: "Head Shave", text: "A clean, close shave with careful attention to detail." },
  { title: "Children's Cuts", text: "Neat, comfortable cuts for younger clients." },
  { title: "Scalp Treatment", text: "Care-focused scalp and hair treatment services." },
  { title: "Hair Care Products", text: "Selected grooming and hair-care products available in-store." },
]

const SERVICE_LIST = [
  "Hair colouring", "Beard conditioning", "Beard dyeing", "Beard maintenance",
  "Beard trim", "Head shave", "Children's cuts", "Scalp treatment", "Shave",
  "Hair care products", "Clippers"
]

const FAQS = [
  { q: "Do I need an appointment?", a: `Call or WhatsApp ${BRAND} to confirm availability before you come around.` },
  { q: "Where are you located?", a: `${BRAND} is on Ladipo Street, behind Bovas, Osogbo, Osun.` },
  { q: "Do you offer beard services?", a: "Yes. Listed services include beard conditioning, dyeing, maintenance and beard trims." },
  { q: "Do you cut children's hair?", a: "Yes. Children's cuts are among the services listed for the business." },
]

function Tag({ children }) {
  return <span className="font-mono text-[10.5px] uppercase tracking-[0.3em] text-[#f97316]">{children}</span>
}

function Title({ children, className = "" }) {
  return <h2 className={`font-[var(--font-tpl-serif)] text-[clamp(2rem,4.6vw,3.4rem)] font-normal leading-[1.03] tracking-[-0.025em] text-[#f5f0e8] ${className}`}>{children}</h2>
}

function Rise({ children, className = "" }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === "undefined") return setOn(true)
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setOn(true); io.disconnect() }
    }, { rootMargin: "-50px" })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`bb-rise ${on ? "bb-in" : ""} ${className}`}>{children}</div>
}

function TopBar() {
  return <div className="border-b border-[#f97316]/25 bg-[#f97316] text-[#17120e]">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-1 px-5 py-2.5 text-center font-mono text-[10px] font-bold uppercase tracking-[0.18em] sm:px-8">
      <span>{BRAND}</span><span className="hidden sm:inline">·</span><span>Osogbo, Osun</span><span className="hidden sm:inline">·</span><span>Closes 10:30 PM</span>
    </div>
  </div>
}

function Hero() {
  return <header className="relative overflow-hidden bg-[#141210]">
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <img src={HERO} alt="" className="h-full w-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#141210] via-[#141210]/80 to-[#141210]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-transparent" />
    </div>
    <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-6 sm:px-8">
      <a href="#top" className="font-[var(--font-tpl-serif)] text-[21px] tracking-tight text-[#f5f0e8]">{BRAND}</a>
      <div className="hidden items-center gap-7 font-mono text-[10px] uppercase tracking-[0.2em] text-[#f5f0e8]/60 md:flex">
        <a href="#services" className="hover:text-[#f97316]">Services</a>
        <a href="#about" className="hover:text-[#f97316]">About</a>
        <a href="#faq" className="hover:text-[#f97316]">FAQ</a>
        <a href="#contact" className="hover:text-[#f97316]">Contact</a>
      </div>
      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-sm bg-[#f97316] px-4 py-2.5 text-[11px] font-bold uppercase tracking-wide text-[#17120e] transition hover:bg-[#fb923c]">WhatsApp</a>
    </nav>
    <div id="top" className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-10 sm:px-8 sm:pb-32 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
      <div>
        <Tag>Your local barbershop · Osogbo</Tag>
        <h1 className="mt-6 max-w-3xl font-[var(--font-tpl-serif)] text-[clamp(3rem,7.5vw,6.2rem)] font-normal leading-[.94] tracking-[-0.045em] text-[#f5f0e8]">
          Clean cuts.<br /><span className="text-[#f97316]">Sharp confidence.</span>
        </h1>
        <p className="mt-7 max-w-xl text-[16px] leading-7 text-[#f5f0e8]/65">Looking sharp in Osogbo starts with a good cut. Call or WhatsApp the shop to ask about services and plan your visit.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-sm bg-[#f97316] px-6 py-4 text-[13px] font-bold uppercase tracking-wide text-[#17120e] hover:bg-[#fb923c]">Book on WhatsApp</a>
          <a href={MAP_URL} target="_blank" rel="noreferrer" className="rounded-sm border border-[#f5f0e8]/20 px-6 py-4 text-[13px] font-semibold uppercase tracking-wide text-[#f5f0e8]/85 hover:border-[#f97316]/60">Get Directions</a>
        </div>
      </div>
      <Rise className="rounded-lg border border-[#f5f0e8]/10 bg-[#1e1a17]/90 p-7 backdrop-blur-sm sm:p-8">
        <div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#f97316]" /><Tag>Visit {BRAND}</Tag></div>
        <p className="mt-6 font-[var(--font-tpl-serif)] text-4xl leading-tight text-[#f5f0e8]">Your next clean look starts here.</p>
        <div className="mt-7 space-y-4 border-t border-[#f5f0e8]/10 pt-6 text-sm text-[#f5f0e8]/60">
          <p><strong className="text-[#f5f0e8]">Location</strong><br />{ADDRESS}</p>
          <p><strong className="text-[#f5f0e8]">Phone</strong><br /><a href={`tel:${PHONE}`} className="hover:text-[#f97316]">{DISPLAY_PHONE}</a></p>
          <p><strong className="text-[#f5f0e8]">Closing time</strong><br />10:30 PM</p>
        </div>
      </Rise>
    </div>
  </header>
}

function Services() {
  return <section id="services" className="border-y border-[#f5f0e8]/10 bg-[#1a1714] py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <Rise><Tag>What we offer</Tag><Title className="mt-5 max-w-3xl">Grooming services built around the details.</Title><p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-[#f5f0e8]/55">From clean cuts and beard maintenance to colour and scalp care, choose the service that fits your look.</p></Rise>
      <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-[#f5f0e8]/10 bg-[#f5f0e8]/10 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => <Rise key={s.title} className="bg-[#141210] p-7"><span className="font-mono text-[10px] text-[#f97316]">0{i + 1}</span><h3 className="mt-7 font-[var(--font-tpl-serif)] text-[25px] text-[#f5f0e8]">{s.title}</h3><p className="mt-3 text-[14px] leading-relaxed text-[#f5f0e8]/50">{s.text}</p></Rise>)}
      </div>
    </div>
  </section>
}

function About() {
  return <section id="about" className="bg-[#141210] py-20 sm:py-28">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
      <Rise><Tag>About the shop</Tag><Title className="mt-5">Your neighbourhood barbershop in Osogbo.</Title><p className="mt-6 max-w-xl text-[16px] leading-7 text-[#f5f0e8]/55">Babs Lit Hub Barbershop is a local spot for a fresh cut and personal grooming. Get in touch to ask about available services and plan your visit.</p><div className="mt-8 flex flex-wrap gap-2">{SERVICE_LIST.slice(0, 7).map(x => <span key={x} className="rounded-full border border-[#f5f0e8]/10 bg-[#1e1a17] px-4 py-2 text-[12px] text-[#f5f0e8]/60">{x}</span>)}</div></Rise>
      <Rise className="relative overflow-hidden rounded-lg border border-[#f5f0e8]/10 bg-[#1e1a17]"><img src={HERO} alt="Barber shop atmosphere" className="h-[420px] w-full object-cover opacity-70" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#141210] to-transparent p-7 pt-24"><p className="font-mono text-[10px] uppercase tracking-[.25em] text-[#f97316]">Osogbo · Osun State</p></div></Rise>
    </div>
  </section>
}

function ServiceList() {
  return <section className="border-y border-[#f5f0e8]/10 bg-[#1a1714] py-16 sm:py-20"><div className="mx-auto max-w-7xl px-5 sm:px-8"><Rise><Tag>Full service list</Tag><Title className="mt-5">Services for your next fresh look.</Title></Rise><Rise className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{SERVICE_LIST.map((s, i) => <div key={s} className="flex items-center gap-4 rounded-sm border border-[#f5f0e8]/10 bg-[#141210] px-5 py-4"><span className="font-mono text-[10px] text-[#f97316]">{String(i + 1).padStart(2, "0")}</span><span className="text-[14px] text-[#f5f0e8]/75">{s}</span></div>)}</Rise></div></section>
}

function Reviews() {
  return <section className="bg-[#141210] py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 sm:px-8"><Rise><Tag>Google rating</Tag><Title className="mt-5">5.0 out of 5.</Title><p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#f5f0e8]/50">Babs Lit Hub Barbershop has a 5.0 Google rating from 1 review.</p></Rise><Rise className="mt-10 grid gap-4 md:grid-cols-3"><div className="rounded-lg border border-[#f5f0e8]/10 bg-[#1e1a17] p-7"><p className="font-[var(--font-tpl-serif)] text-4xl text-[#f97316]">5.0</p><p className="mt-2 text-sm text-[#f5f0e8]/50">Google rating</p></div><div className="rounded-lg border border-[#f5f0e8]/10 bg-[#1e1a17] p-7"><p className="font-[var(--font-tpl-serif)] text-4xl text-[#f97316]">1</p><p className="mt-2 text-sm text-[#f5f0e8]/50">Google review</p></div><div className="rounded-lg border border-[#f5f0e8]/10 bg-[#1e1a17] p-7"><p className="font-[var(--font-tpl-serif)] text-4xl text-[#f97316]">10:30 PM</p><p className="mt-2 text-sm text-[#f5f0e8]/50">Listed closing time</p></div></Rise></div></section>
}

function FAQ() {
  return <section id="faq" className="border-t border-[#f5f0e8]/10 bg-[#1a1714] py-20 sm:py-28"><div className="mx-auto max-w-4xl px-5 sm:px-8"><Rise><Tag>Questions</Tag><Title className="mt-5">Before you visit.</Title></Rise><Rise className="mt-10 divide-y divide-[#f5f0e8]/10 overflow-hidden rounded-lg border border-[#f5f0e8]/10 bg-[#1e1a17]">{FAQS.map(f => <details key={f.q} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden sm:px-8"><summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-semibold text-[#f5f0e8]">{f.q}<span className="font-mono text-[#f97316] transition group-open:rotate-45">+</span></summary><p className="mt-4 max-w-[70ch] text-[14.5px] leading-relaxed text-[#f5f0e8]/55">{f.a}</p></details>)}</Rise></div></section>
}

function Contact() {
  return <section id="contact" className="border-t border-[#f5f0e8]/10 bg-[#141210] py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 sm:px-8"><Rise className="grid overflow-hidden rounded-lg border border-[#f97316]/25 bg-[#1a1714] lg:grid-cols-[1.1fr_.9fr]">
    <div className="p-8 sm:p-12"><Tag>Visit or get in touch</Tag><Title className="mt-5">Ready for your next clean look?</Title><p className="mt-5 max-w-xl text-[15px] leading-7 text-[#f5f0e8]/55">Call or WhatsApp Babs Lit Hub Barbershop to ask about services and availability before you come around.</p><div className="mt-8 flex flex-wrap gap-3"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-sm bg-[#f97316] px-6 py-4 text-[13px] font-bold uppercase tracking-wide text-[#17120e] hover:bg-[#fb923c]">Chat on WhatsApp</a><a href={`tel:${PHONE}`} className="rounded-sm border border-[#f5f0e8]/15 px-6 py-4 text-[13px] font-semibold uppercase tracking-wide text-[#f5f0e8]/80 hover:border-[#f97316]/50">Call {DISPLAY_PHONE}</a></div></div>
      <div className="border-t border-[#f5f0e8]/10 p-8 sm:p-12 lg:border-l lg:border-t-0"><Tag>Find us</Tag><p className="mt-5 font-[var(--font-tpl-serif)] text-3xl text-[#f5f0e8]">Ladipo Street, behind Bovas</p><p className="mt-3 text-[14px] leading-relaxed text-[#f5f0e8]/50">QG4G+P68, Osogbo 230284, Osun</p><a href={MAP_URL} target="_blank" rel="noreferrer" className="mt-7 inline-flex rounded-sm border border-[#f97316]/40 px-5 py-3 text-[12px] font-bold uppercase tracking-wide text-[#f97316] hover:bg-[#f97316] hover:text-[#17120e]">Open in Google Maps</a></div>
  </Rise></div></section>
}

function Footer() {
  return <footer className="border-t border-[#f5f0e8]/10 bg-[#141210] py-10"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 text-[12px] sm:px-8"><span className="text-[#f5f0e8]/30">© {new Date().getFullYear()} {BRAND}.</span><span className="text-[#f5f0e8]/30">Website template by <a href="https://www.spicerdesigns.com" className="text-[#f97316] hover:underline">Spicer Designs</a></span></div></footer>
}

export default function BarberShopTemplate() {
  return <div className="min-h-screen bg-[#141210] font-[var(--font-tpl-body)] antialiased"><style>{`@keyframes bb-rise { from { opacity:0; transform:translateY(14px) } to { opacity:1; transform:none } } .bb-rise{opacity:0;transform:translateY(14px);transition:opacity .6s ease,transform .6s ease}.bb-in{opacity:1;transform:none}@media (prefers-reduced-motion:reduce){.bb-rise{opacity:1;transform:none;transition:none}}`}</style><TopBar/><Hero/><Services/><About/><ServiceList/><Reviews/><FAQ/><Contact/><Footer/></div>
}
