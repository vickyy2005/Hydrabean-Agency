"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MagneticButton from "@/components/ui/magnetic-button";
import { useToast } from "@/components/ui/toast";

const SERVICES = [
  {
    id: "bespoke",
    category: "Signature Journey",
    title: "Bespoke Private Itineraries",
    image: "/travel-images/b917fdc63744ad30426969f6d5402ce8.jpg",
    tagline: "Custom-sculpted travel engineered for privacy, depth, and ease.",
    description:
      "No two travelers share the exact same rhythm. We craft completely unique journeys from scratch — balancing iconic world-class highlights with secluded sanctuaries and private guides who match your intellectual curiosity.",
    features: [
      "Handpicked 5-star boutique hotels & private villa buyouts",
      "Private executive chauffeur & door-to-door luggage handling",
      "Priority reservations at Michelin & hard-to-book local dining",
      "Flexible daily pacing with built-in time for rest & serendipity",
    ],
    idealFor: "Couples, solo visionaries, and discerning families",
  },
  {
    id: "safari",
    category: "Wilderness & Nature",
    title: "Wilderness Safaris & Remote Expeditions",
    image: "/travel-images/fa6dec2785180e3f6486b6bf762d5292.jpg",
    tagline: "Track the world's greatest migrations with master naturalists.",
    description:
      "Step far off the beaten trail into preserved private conservancies. Stay in luxury tented camps with open-air copper bathtubs, private plunge pools, and uninterrupted views of the savannah or polar ice shelves.",
    features: [
      "Access to private non-public conservancies with zero crowds",
      "Certified master trackers & wildlife biologists as your guides",
      "Bush planes and chartered helicopter transfers directly to camp",
      "Full eco-certification and direct contribution to anti-poaching units",
    ],
    idealFor: "Wildlife enthusiasts, photographers, and adventure seekers",
  },
  {
    id: "culture",
    category: "Heritage & Arts",
    title: "Cultural Immersion & Historic Sanctuaries",
    image: "/travel-images/911f4d44cff2a44ffe3c206589fa738f.jpg",
    tagline: "Unlock private access to history, heritage, and sacred traditions.",
    description:
      "Experience ancient wonders after the crowds have dispersed. We arrange after-hours access to historical landmarks, private tea ceremonies in Kyoto machiyas, and exclusive atelier studio visits with master artisans.",
    features: [
      "Private evening access to UNESCO monuments without public queues",
      "Intimate culinary masterclasses with regional master chefs",
      "Direct conversations with historians, curators, and archaeologists",
      "Curated antique, art, and architectural walking tours",
    ],
    idealFor: "Culture lovers, art collectors, and inquisitive minds",
  },
  {
    id: "adventure",
    category: "High Adrenaline",
    title: "Alpine, Polar & Summit Expeditions",
    image: "/travel-images/644728dd03e03051ec91872eee56abce.jpg",
    tagline: "Reach the edges of the earth with top-tier safety and comfort.",
    description:
      "From heli-skiing untouched Alaskan powder and traversing Patagonian glaciers to snowmobiling beneath the Icelandic aurora, we blend high-octane expedition thrills with world-class safety protocols.",
    features: [
      "Internationally certified UIAGM alpine & polar expedition leads",
      "State-of-the-art satellite telemetry & medical evacuation standby",
      "Warm alpine chalets with private hot springs and bespoke chefs",
      "All technical gear provided and personally fitted upon arrival",
    ],
    idealFor: "Outdoor purists, mountaineers, and thrill-seekers",
  },
  {
    id: "yacht",
    category: "Maritime & Coastal",
    title: "Private Yacht & Island Charters",
    image: "/travel-images/1babc905994f380026708c0f1c038d8c.jpg",
    tagline: "Navigate azure lagoons and hidden coves on your private vessel.",
    description:
      "Drop anchor in secluded Mediterranean coves, island-hop through French Polynesia, or cruise the Norwegian fjords aboard private catamarans, superyachts, or traditional hand-built gulets.",
    features: [
      "Dedicated captain, deck crew, and private gourmet chef on board",
      "Secluded mooring permits away from commercial shipping lanes",
      "Full water-sports toy box: seabobs, foil boards, scuba & paddleboards",
      "Custom ashore excursions arranged at private coastal vineyards",
    ],
    idealFor: "Family gatherings, celebratory voyages, and ocean lovers",
  },
  {
    id: "corporate",
    category: "Executive & Team",
    title: "Executive Summits & Team Sanctuaries",
    image: "/travel-images/fc1d3bb67539b24e1f0a73cf4f603488.jpg",
    tagline: "Inspiring global settings for strategic breakthroughs.",
    description:
      "Elevate your company's vision in restorative, world-class estates. We engineer seamless corporate retreats that foster deep strategic focus, creative cross-pollination, and shared unforgettable adventures.",
    features: [
      "Exclusive buyout of luxury castles, ranches, or eco-resorts",
      "Encrypted high-speed Starlink broadband and keynote setups",
      "Curated leadership bonding experiences and local culinary tastings",
      "End-to-end flight, visa, and ground logistics for executive teams",
    ],
    idealFor: "Founders, executive boards, and high-performance teams",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Blueprint Consultation",
    desc: "We begin with a 1-on-1 dialogue to understand your travel tempo, preferred aesthetics, culinary tastes, and bucket-list desires.",
  },
  {
    step: "02",
    title: "Bespoke Itinerary Architecture",
    desc: "Our travel architects construct a detailed day-by-day plan with private access options, verified stays, and insider dining reservations.",
  },
  {
    step: "03",
    title: "Frictionless Booking & VIP Access",
    desc: "We secure all villas, planes, guides, and tickets. Everything is loaded into your custom digital portal with offline access.",
  },
  {
    step: "04",
    title: "24/7 Invisible On-Road Guardian",
    desc: "While you explore, your dedicated travel butler monitors flights, updates reservations, and handles any on-the-spot adjustments.",
  },
];

const INCLUDED_GUARANTEES = [
  {
    title: "VIP Room Upgrades",
    text: "Through our luxury travel network, guests receive complimentary breakfast, resort credits, and preferred room upgrades whenever available.",
  },
  {
    title: "Flight Disruption Auto-Rebook",
    text: "Our automated air traffic monitors track your flights in real-time, proactively securing backup seats before delays affect your itinerary.",
  },
  {
    title: "100% Carbon-Neutral Travel",
    text: "Every ground mile and commercial flight segment is scientifically audited and offset through certified reforestation initiatives.",
  },
  {
    title: "24/7 WhatsApp Concierge",
    text: "Connect directly with your personal travel manager on WhatsApp or signal for restaurant changes, last-minute tickets, or medical advice.",
  },
];

export default function ServicesPage() {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = ["all", "Signature Journey", "Wilderness & Nature", "Heritage & Arts", "High Adrenaline", "Maritime & Coastal", "Executive & Team"];

  const filteredServices =
    activeTab === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeTab);

  const handleServiceInquiry = (serviceTitle: string) => {
    showToast(`Redirecting to inquiry for "${serviceTitle}"`, "info", "✨");
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />

      <main className="pt-24 md:pt-32">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden px-6 pb-16 pt-12 md:px-12 md:pb-24 md:pt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-accent-green/20 blur-[130px]"
          />
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent-green" />
              Tailored Travel Architecture
            </div>

            <h1 className="font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.08] max-w-5xl">
              Curated Travel Services{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-accent-green via-[#87dc00] to-text-primary bg-clip-text text-transparent">
                  Engineered For Wonder
                </span>
                <span
                  aria-hidden
                  className="absolute bottom-2 left-0 h-3 w-full bg-accent-green/30 -z-0 rounded"
                />
              </span>
              .
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-relaxed text-text-muted md:text-xl">
              Whether you are craving a solitary polar journey, an intimate private island voyage,
              or a comprehensive cultural deep-dive across Japan, our travel architects eliminate friction
              so you can immerse yourself in the magic of the moment.
            </p>

            {/* Quick Filter Pill Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`rounded-full px-4 py-2 text-xs md:text-sm font-semibold transition-all duration-200 capitalize ${
                    activeTab === cat
                      ? "bg-text-primary text-white shadow-sm"
                      : "bg-black/5 text-text-muted hover:bg-black/10 hover:text-text-primary"
                  }`}
                >
                  {cat === "all" ? "All Services (6)" : cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="relative px-6 py-12 md:px-12 md:py-20">
          <div className="mx-auto max-w-7xl space-y-16">
            {filteredServices.map((service, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 gap-10 rounded-3xl border border-border-subtle bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-floating lg:grid-cols-12 lg:items-center lg:p-10 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-black/5 sm:h-96 lg:h-[440px] group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 rounded-full bg-black/60 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                        {service.category}
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-6 lg:p-4 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                      Service 0{idx + 1}
                    </span>
                    <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-text-primary sm:text-3xl md:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-sm font-semibold text-text-primary/80 italic">
                      &ldquo;{service.tagline}&rdquo;
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-text-muted md:text-base">
                      {service.description}
                    </p>

                    <div className="mt-6 border-t border-black/5 pt-5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary">
                        Key Inclusions & Highlights:
                      </h4>
                      <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {service.features.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-start gap-2 text-xs md:text-sm text-text-muted"
                          >
                            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-green text-[10px] font-bold text-text-primary">
                              ✓
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-5">
                      <div>
                        <span className="block text-[11px] font-semibold text-text-muted uppercase">
                          Ideal For
                        </span>
                        <span className="text-xs md:text-sm font-medium text-text-primary">
                          {service.idealFor}
                        </span>
                      </div>

                      <Link href={`/contact?service=${service.id}`}>
                        <MagneticButton
                          onClick={() => handleServiceInquiry(service.title)}
                          className="bg-accent-green px-5 py-2.5 text-xs md:text-sm font-bold text-text-primary hover:brightness-105"
                        >
                          Inquire Now
                        </MagneticButton>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* HOW WE WORK / THE 4-STEP BLUEPRINT */}
        <section className="relative bg-black/[0.02] px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block rounded-full border border-border-subtle bg-white px-4 py-1 text-xs font-bold uppercase tracking-widest text-text-muted">
                The Concierge Protocol
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                How We Bring Your Dream Trip to Life
              </h2>
              <p className="mt-4 text-text-muted text-sm md:text-base">
                From your initial dream sketch to the final return flight home, we oversee every touchpoint.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="flex flex-col rounded-3xl border border-border-subtle bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-green hover:shadow-floating"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-green font-display text-lg font-black text-text-primary">
                    {step.step}
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT'S ALWAYS INCLUDED */}
        <section className="relative px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
                  The Hydrabean Shield
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight">
                  Guarantees that come standard with every journey.
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-text-muted md:text-base">
                  When you travel with Hydrabean, you receive complete peace of mind. We don&apos;t charge extra for basic hospitality or emergency support — it is woven into the very fabric of our service.
                </p>
                <div className="mt-8">
                  <Link href="/prices">
                    <MagneticButton className="bg-text-primary px-7 py-3 text-sm font-semibold text-white hover:bg-black/80">
                      Explore Pricing & Tiers
                    </MagneticButton>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {INCLUDED_GUARANTEES.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-border-subtle bg-white p-6 shadow-sm"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-green/20 text-text-primary font-bold text-sm mb-4">
                      ★
                    </span>
                    <h4 className="font-display text-base font-bold text-text-primary">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-text-muted md:text-sm">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="relative overflow-hidden bg-bg-dark px-6 py-20 text-white md:px-12 md:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -bottom-32 h-[30rem] w-[30rem] rounded-full bg-accent-green/20 blur-[140px]"
          />
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-green backdrop-blur">
              Custom Quote
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-balance">
              Have an idea for a voyage not listed here?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
              From submarine deep-ocean dives to private architectural tours across Scandinavia, we love custom challenges. Let us know what you envision.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <MagneticButton className="bg-accent-green px-8 py-3.5 text-sm font-bold text-text-primary shadow-lg hover:brightness-110">
                  Request Custom Proposal
                </MagneticButton>
              </Link>
              <Link href="/prices">
                <button className="rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-colors">
                  View Transparent Pricing
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
