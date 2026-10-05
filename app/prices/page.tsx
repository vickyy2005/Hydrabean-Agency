"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TiltCard from "@/components/ui/tilt-card";
import MagneticButton from "@/components/ui/magnetic-button";
import { useToast } from "@/components/ui/toast";

const TIERS = [
  {
    name: "Explorer Blueprint",
    tagline: "For independent explorers who want world-class curation.",
    priceTrip: "$1,499",
    priceAnnual: "$3,800",
    period: "per person",
    isPopular: false,
    description:
      "A complete, personalized day-by-day roadmap with hand-picked boutique stays, secret spots, and priority dining reservations.",
    features: [
      "Custom day-by-day itinerary tailored to your rhythm",
      "Hand-inspected 4-star boutique hotel reservations",
      "Offline interactive map with hidden gems & secret vistas",
      "Priority reservations at top regional dining spots",
      "24/7 Digital Concierge via WhatsApp",
      "100% Certified Carbon-Offset on all travel legs",
    ],
    ctaText: "Select Explorer",
    tierCode: "explorer",
  },
  {
    name: "Signature Journey",
    tagline: "Our hallmark all-inclusive luxury travel design.",
    priceTrip: "$2,999",
    priceAnnual: "$7,500",
    period: "per person",
    isPopular: true,
    description:
      "Seamless door-to-door luxury with private transfers, vetted local master guides, and VIP skip-the-line access to iconic wonders.",
    features: [
      "Everything in Explorer Blueprint, plus:",
      "5-star boutique hotels & historic luxury riads/ryokans",
      "Private executive airport transfers & 1st-class train passes",
      "Dedicated local English-speaking master guides for key sites",
      "Skip-the-line VIP fast-track entry to monuments & museums",
      "Private culinary masterclass or vineyard tasting session",
      "24/7 Dedicated WhatsApp Travel Butler",
      "Comprehensive trip disruption & medical assistance included",
    ],
    ctaText: "Select Signature",
    tierCode: "signature",
  },
  {
    name: "Private Elite Sovereign",
    tagline: "Ultra-luxury, door-to-door mastery for total exclusivity.",
    priceTrip: "$6,499",
    priceAnnual: "$16,000",
    period: "per person",
    isPopular: false,
    description:
      "For those who demand uncompromising seclusion: private chauffeur, private villas, chartered air/sea transfers, and after-hours access.",
    features: [
      "Everything in Signature Journey, plus:",
      "Top-tier 5-star suites, private villas, or luxury safari camps",
      "Full-time private chauffeur & luxury SUV throughout",
      "Private chartered yacht day-trips or helicopter scenic transfers",
      "Exclusive after-hours private access to historic monuments",
      "Private multi-course dinners prepared by Michelin-trained chefs",
      "VIP airport tarmac escort & luggage forwarding directly to suite",
      "Optional on-site personal Travel Director accompanying your party",
    ],
    ctaText: "Select Elite",
    tierCode: "elite",
  },
  {
    name: "Group & Corporate Buyout",
    tagline: "For executive retreats, weddings, and private gatherings.",
    priceTrip: "Custom",
    priceAnnual: "Bespoke",
    period: "per event",
    isPopular: false,
    description:
      "Full private buyout of remote castles, ranches, or coastal island estates with dedicated event staff and customized challenges.",
    features: [
      "Full property buyout with complete privacy and security",
      "Encrypted high-speed Starlink broadband & presentation setups",
      "Tailored team bonding expeditions & local cultural gala",
      "Dedicated on-site logistics manager and private medical lead",
      "Chartered group flights & luggage handling",
      "Custom payment schedules and centralized billing",
    ],
    ctaText: "Request Group Quote",
    tierCode: "group",
  },
];

const COMPARISON_ROWS = [
  { feature: "Bespoke Itinerary Architecture", explorer: "✓", signature: "✓", elite: "✓", group: "✓" },
  { feature: "Boutique Hotel Tier", explorer: "4-Star Curated", signature: "5-Star Luxury", elite: "Presidential / Villa", group: "Exclusive Buyout" },
  { feature: "Ground Transportation", explorer: "Train / Rental Arranged", signature: "Private Chauffeur Transfers", elite: "Full-Time Dedicated SUV", group: "Private Luxury Coaches" },
  { feature: "Local Master Guides", explorer: "Self-Guided + Audio", signature: "Private Guides Included", elite: "Curators & Historians", group: "Dedicated Expedition Crew" },
  { feature: "VIP Fast-Track Monument Entry", explorer: "Pre-booked passes", signature: "VIP Fast-Track", elite: "Private After-Hours", group: "Private Access" },
  { feature: "Concierge Support", explorer: "Digital App & WhatsApp", signature: "24/7 Travel Butler", elite: "Dedicated Director", group: "On-Site Management Team" },
  { feature: "Flight Disruption Auto-Rebook", explorer: "Standard", signature: "Priority Alert", elite: "Immediate VIP Tarmac", group: "Charter Support" },
  { feature: "Trip Interruption Insurance", explorer: "Optional Add-on", signature: "Included", elite: "Premium Comprehensive", group: "Custom Policy" },
];

const ADD_ONS = [
  {
    title: "Dedicated Expedition Photographer",
    price: "$650 / day",
    desc: "A professional travel photographer capturing high-resolution editorial memories of your trip.",
  },
  {
    title: "Helicopter Transfer / Glacier Landing",
    price: "From $890 / flight",
    desc: "Bypass mountain passes or coastal traffic with scenic helicopter arrivals directly to your lodge.",
  },
  {
    title: "Private Vineyard & Cellar Tasting",
    price: "$350 / person",
    desc: "Meet family vintners and taste reserve vintages not available anywhere on the commercial market.",
  },
  {
    title: "VIP Tarmac Fast-Track & Lounge Access",
    price: "$280 / airport",
    desc: "Speed through international immigration with a dedicated airside escort and access to premier lounges.",
  },
];

const FAQS = [
  {
    q: "What is included in the starting price per person?",
    a: "Our per-person tier prices cover full itinerary planning, luxury accommodations, pre-arranged private transportation, scheduled excursions with certified local guides, admission fees, and 24/7 concierge support. Long-haul international flights can be booked by our air desk or arranged independently.",
  },
  {
    q: "When do I need to pay for my journey?",
    a: "We require a 25% deposit upon final approval of your custom itinerary to lock in villas, private guides, and exclusive permits. The remaining balance is due 60 days before your departure date. We also offer flexible installment options upon request.",
  },
  {
    q: "What is your cancellation and flexibility policy?",
    a: "We understand that life happens. Every Hydrabean booking comes with flexible rebooking credits. If you need to postpone your trip up to 45 days before departure, 100% of your funds can be transferred to new travel dates within 18 months without penalty.",
  },
  {
    q: "Can we adjust our itinerary after it has been finalized?",
    a: "Absolutely. Your itinerary is never set in stone. Up until departure, your dedicated travel architect can adjust pace, swap restaurants, or add new experiences. Even on the road, our 24/7 WhatsApp butler can modify bookings in real-time.",
  },
  {
    q: "How does the Annual Wanderlust Pass work?",
    a: "Our Annual Pass is designed for frequent travelers who embark on two or more curated trips per year. It grants you unlimited itinerary design consultations, year-round access to our global VIP hotel perks (complimentary upgrades, $100 daily food credits), and priority booking for high-demand seasonal destinations.",
  },
];

export default function PricesPage() {
  const [billingCycle, setBillingCycle] = useState<"trip" | "annual">("trip");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { showToast } = useToast();

  const handleSelectTier = (tierName: string) => {
    showToast(`Inquiring about ${tierName} plan`, "success", "✈️");
  };

  const handleAddonSelect = (addonTitle: string) => {
    showToast(`Added ${addonTitle} to your wish list`, "info", "✨");
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />

      <main className="pt-24 md:pt-32">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden px-6 pb-16 pt-12 md:px-12 md:pb-24 md:pt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-accent-green/20 blur-[130px]"
          />
          <div className="relative mx-auto max-w-7xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent-green" />
              Transparent Investment
            </div>

            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.08] max-w-4xl mx-auto">
              Bespoke Luxury Travel.{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-accent-green via-[#87dc00] to-text-primary bg-clip-text text-transparent">
                  Zero Hidden Fees
                </span>
                <span
                  aria-hidden
                  className="absolute bottom-2 left-0 h-3 w-full bg-accent-green/30 -z-0 rounded"
                />
              </span>
              .
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-text-muted md:text-xl">
              From meticulous self-guided blueprints to fully staffed private expeditions,
              choose the level of curation and on-the-road support that fits your journey.
            </p>

            {/* Billing Toggle */}
            <div className="mt-10 inline-flex items-center rounded-full border border-border-subtle bg-white p-1.5 shadow-sm">
              <button
                onClick={() => setBillingCycle("trip")}
                className={`rounded-full px-5 py-2 text-xs md:text-sm font-bold transition-all duration-200 ${
                  billingCycle === "trip"
                    ? "bg-text-primary text-white shadow"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                Per-Trip Expeditions
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`rounded-full px-5 py-2 text-xs md:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                  billingCycle === "annual"
                    ? "bg-text-primary text-white shadow"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                <span>Annual Wanderlust Pass</span>
                <span className="rounded-full bg-accent-green px-2 py-0.5 text-[10px] font-extrabold text-text-primary">
                  SAVE 25%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* PRICING CARDS */}
        <section className="relative px-6 py-8 md:px-12 md:py-14">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {TIERS.map((tier) => {
              const displayPrice =
                billingCycle === "trip" ? tier.priceTrip : tier.priceAnnual;

              return (
                <TiltCard key={tier.name} max={4} className="h-full">
                  <div
                    className={`relative flex h-full flex-col rounded-3xl border bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                      tier.isPopular
                        ? "border-accent-green shadow-[0_20px_50px_rgba(182,255,60,0.22)] ring-2 ring-accent-green/60"
                        : "border-border-subtle shadow-sm hover:shadow-floating"
                    }`}
                  >
                    {tier.isPopular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent-green px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-text-primary shadow-sm">
                        Most Popular
                      </div>
                    )}

                    <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                      {tier.name}
                    </span>
                    <p className="mt-1 text-xs text-text-muted/80">{tier.tagline}</p>

                    <div className="my-5 flex items-baseline gap-1 border-b border-black/5 pb-5">
                      <span className="font-display text-4xl font-extrabold tracking-tight text-text-primary">
                        {displayPrice}
                      </span>
                      {displayPrice !== "Custom" && (
                        <span className="text-xs font-medium text-text-muted">
                          / {tier.period}
                        </span>
                      )}
                    </div>

                    <p className="text-xs leading-relaxed text-text-muted mb-6">
                      {tier.description}
                    </p>

                    <div className="flex-1 space-y-3 border-t border-black/5 pt-5">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-text-primary">
                        What's Included:
                      </span>
                      <ul className="space-y-2.5">
                        {tier.features.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-start gap-2 text-xs text-text-muted leading-tight"
                          >
                            <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-accent-green text-[9px] font-bold text-text-primary">
                              ✓
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-4 border-t border-black/5">
                      <Link href={`/contact?tier=${tier.tierCode}`}>
                        <MagneticButton
                          onClick={() => handleSelectTier(tier.name)}
                          className={`w-full py-3 text-center text-xs font-bold transition-all rounded-full ${
                            tier.isPopular
                              ? "bg-accent-green text-text-primary hover:brightness-110 shadow-sm"
                              : "bg-text-primary text-white hover:bg-black/85"
                          }`}
                        >
                          {tier.ctaText}
                        </MagneticButton>
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="relative bg-black/[0.02] px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
                Side-by-Side Analysis
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Compare Plan Features
              </h2>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-border-subtle bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-black/10 bg-black/[0.02]">
                    <th className="p-5 font-display font-bold text-text-primary">
                      Feature & Service
                    </th>
                    <th className="p-5 font-display font-bold text-text-primary">
                      Explorer
                    </th>
                    <th className="p-5 font-display font-bold text-accent-green-dark bg-accent-green/10">
                      Signature (Popular)
                    </th>
                    <th className="p-5 font-display font-bold text-text-primary">
                      Private Elite
                    </th>
                    <th className="p-5 font-display font-bold text-text-primary">
                      Group & Corporate
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature} className="hover:bg-black/[0.01]">
                      <td className="p-5 font-medium text-text-primary">
                        {row.feature}
                      </td>
                      <td className="p-5 text-xs text-text-muted">{row.explorer}</td>
                      <td className="p-5 text-xs font-semibold text-text-primary bg-accent-green/[0.05]">
                        {row.signature}
                      </td>
                      <td className="p-5 text-xs text-text-muted">{row.elite}</td>
                      <td className="p-5 text-xs text-text-muted">{row.group}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* BESPOKE ADD-ONS */}
        <section className="relative px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
                  Enhancements
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Popular Add-On Upgrades
                </h2>
              </div>
              <p className="max-w-md text-sm text-text-muted leading-relaxed">
                Elevate your itinerary with specialized private services tailored for creators, collectors, and seekers of rare access.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ADD_ONS.map((addon) => (
                <div
                  key={addon.title}
                  className="flex flex-col rounded-3xl border border-border-subtle bg-white p-6 shadow-sm transition-all hover:border-accent-green hover:shadow-floating"
                >
                  <span className="font-display text-lg font-bold text-text-primary">
                    {addon.title}
                  </span>
                  <span className="mt-2 inline-block font-display text-base font-extrabold text-accent-green bg-text-primary px-3 py-1 rounded-full w-fit">
                    {addon.price}
                  </span>
                  <p className="mt-3 text-xs leading-relaxed text-text-muted flex-1">
                    {addon.desc}
                  </p>
                  <button
                    onClick={() => handleAddonSelect(addon.title)}
                    className="mt-5 rounded-full border border-border-subtle py-2 text-xs font-semibold text-text-primary transition-colors hover:bg-black/5"
                  >
                    Add to Wishlist
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section id="faqs" className="relative bg-black/[0.02] px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
                Got Questions?
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Pricing & Booking FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;

                return (
                  <div
                    key={faq.q}
                    className="rounded-3xl border border-border-subtle bg-white overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-black/[0.02]"
                    >
                      <span className="font-display text-base md:text-lg font-bold text-text-primary pr-4">
                        {faq.q}
                      </span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/5 text-text-primary font-bold">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="border-t border-black/5 px-6 pb-6 pt-3 text-sm leading-relaxed text-text-muted">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="relative overflow-hidden bg-bg-dark px-6 py-20 text-white md:px-12 md:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -bottom-32 h-[30rem] w-[30rem] rounded-full bg-accent-green/20 blur-[140px]"
          />
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-green backdrop-blur">
              Custom Estimates
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-balance">
              Need a personalized proposal for your exact group size?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
              Tell us your target dates, dream destinations, and group preferences. We'll send an itemized, transparent travel blueprint within 4 hours.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <MagneticButton className="bg-accent-green px-8 py-3.5 text-sm font-bold text-text-primary shadow-lg hover:brightness-110">
                  Request Itinerary Estimate
                </MagneticButton>
              </Link>
              <Link href="/services">
                <button className="rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-colors">
                  Explore Experiences
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
