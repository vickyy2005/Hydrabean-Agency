"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TiltCard from "@/components/ui/tilt-card";
import Reveal from "@/components/ui/reveal";
import MagneticButton from "@/components/ui/magnetic-button";
import { useToast } from "@/components/ui/toast";

const STATS = [
  { value: "12,000+", label: "Voyagers Guided Worldwide" },
  { value: "52", label: "Countries & Curated Territories" },
  { value: "99.4%", label: "Five-Star Traveler Satisfaction" },
  { value: "100%", label: "Carbon-Offset Guaranteed" },
];

const VALUES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#0B0F0D" strokeWidth="1.8" />
        <path d="M12 7v5l3 3" stroke="#0B0F0D" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Uncompromising Curation",
    description:
      "We never rely on commercial booking aggregators. Every private villa, riad, expedition boat, and local guide is hand-scouted and rigorously vetted by our in-house team.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          stroke="#0B0F0D"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Regenerative & Ethical Travel",
    description:
      "Tourism should protect, not deplete. 5% of every expedition fee directly funds local community conservancies, marine sanctuaries, and heritage restoration programs.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="#0B0F0D"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Invisible Concierge Logistics",
    description:
      "From tarmac tarmac VIP customs clearance to baggage forwarding and automatic flight rebooking, we manage all moving parts silently in the background.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          stroke="#0B0F0D"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Unscripted Wonder",
    description:
      "True luxury is space for the unexpected. Our itineraries balance choreographed high points with generous open hours for spontaneous local encounters and contemplation.",
  },
];

const LEADERS = [
  {
    name: "Elena Vance",
    role: "Founder & Creative Travel Architect",
    region: "Tokyo & Kyoto Specialist",
    bio: "Former documentary photographer who spent 14 years mapping remote archipelagoes and ancient mountain pilgrimages.",
    image: "/travel-images/0fa4c41f84e6f6e70057623bc670741c.jpg",
  },
  {
    name: "Julian Thorne",
    role: "Director of Expedition Logistics",
    region: "Patagonia & Arctic Routes",
    bio: "Alpine expedition leader with 20+ summits. Master of remote cold-chain logistics, private air routing, and polar wildlife safety.",
    image: "/travel-images/644728dd03e03051ec91872eee56abce.jpg",
  },
  {
    name: "Soraya Al-Khatib",
    role: "Head of Cultural & Heritage Access",
    region: "Levant & Mediterranean",
    bio: "Archaeological historian specializing in private access to UNESCO sanctuaries, royal archives, and culinary heritage.",
    image: "/travel-images/918a169bbf090069562831cff42108b1.jpg",
  },
  {
    name: "Marcus Lindqvist",
    role: "Lead Naturalist & Safari Designer",
    region: "East Africa & Sub-Saharan",
    bio: "Conservation biologist and master safari guide who champions low-impact migratory tracking and luxury bush camps.",
    image: "/travel-images/fa6dec2785180e3f6486b6bf762d5292.jpg",
  },
];

const TIMELINE = [
  {
    year: "2016",
    title: "The Founding spark",
    desc: "Established as a bespoke boutique consultancy in Tokyo and London with a simple ethos: reject cookie-cutter itineraries.",
  },
  {
    year: "2019",
    title: "Carbon-Neutral Pledge",
    desc: "Became one of the first luxury travel agencies to calculate and offset 100% of flight emissions for every guest automatically.",
  },
  {
    year: "2022",
    title: "Private Aviation & Rail Fleet",
    desc: "Introduced chartered rail journeys and bespoke private flight transfers connecting remote wilderness outposts seamlessly.",
  },
  {
    year: "2026",
    title: "12,000+ Journeys & Beyond",
    desc: "A globally recognized collective of 42 on-ground scouts and travel architects across 52 sovereign territories.",
  },
];

export default function AboutPage() {
  const { showToast } = useToast();

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />

      <main className="pt-24 md:pt-32">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden px-6 pb-20 pt-12 md:px-12 md:pb-28 md:pt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-accent-green/20 blur-[130px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 top-20 h-[30rem] w-[30rem] rounded-full bg-black/[0.03] blur-[100px]"
          />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent-green" />
              About Hydrabean Travel
            </div>

            <h1 className="font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] max-w-5xl">
              We engineer journeys that awaken your senses and{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-accent-green via-[#8be000] to-text-primary bg-clip-text text-transparent">
                  redefine luxury travel
                </span>
                <span
                  aria-hidden
                  className="absolute bottom-2 left-0 h-3 w-full bg-accent-green/30 -z-0 rounded"
                />
              </span>
              .
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-relaxed text-text-muted md:text-xl">
              Hydrabean is an independent, award-winning travel architecture agency.
              We reject mass tour buses, rigid timetables, and standardized hotel rooms.
              Instead, we craft one-of-a-kind expeditions tailored to your passions —
              uniting exquisite taste with deep cultural connection.
            </p>

            {/* Quick Stats Bar */}
            <div className="mt-14 grid grid-cols-2 gap-4 rounded-3xl border border-border-subtle bg-white/80 p-6 shadow-floating backdrop-blur-md sm:grid-cols-4 md:p-8">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col ${
                    i > 0 ? "sm:border-l sm:border-black/10 sm:pl-6" : ""
                  }`}
                >
                  <span className="font-display text-3xl font-extrabold tracking-tight text-text-primary md:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-xs font-medium text-text-muted md:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR STORY & VISUAL COLLAGE */}
        <section className="relative bg-black/[0.02] px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
            {/* Text narrative */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-text-muted">
                  The Genesis
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl leading-tight">
                  Born from the belief that travel is an art form.
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-text-muted md:text-base">
                  <p>
                    A decade ago, we noticed a dispiriting trend in international travel:
                    it had become industrialized. Travelers were being funneled into the
                    exact same queues, tasting commercialized food, and sleeping in sterile
                    corporate suites indistinguishable between Paris and Bangkok.
                  </p>
                  <p>
                    Hydrabean was founded as an antidote. We spent two years building relationships
                    with remote lodge keepers, indigenous wilderness trackers, artisan vintners,
                    and private historians.
                  </p>
                  <p>
                    Today, whether you are traversing the silence of the Atacama desert by private
                    glamping caravan or dining in a centuries-old Kyoto machiya closed to the public,
                    every Hydrabean voyage is hand-carved like a bespoke sculpture.
                  </p>
                </div>

                <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                  <blockquote className="italic text-text-primary text-sm md:text-base font-medium">
                    &ldquo;We don’t measure a trip by how many landmarks you photograph.
                    We measure it by the moment your pulse slows, your perspective widens,
                    and you realize you’re experiencing something truly unrepeatable.&rdquo;
                  </blockquote>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-accent-green">
                      <Image
                        src="/travel-images/0fa4c41f84e6f6e70057623bc670741c.jpg"
                        alt="Elena Vance"
                        width={40}
                        height={40}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary">Elena Vance</p>
                      <p className="text-xs text-text-muted">Founder & Chief Architect</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Collage of real photographs */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 overflow-hidden rounded-3xl shadow-md transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/travel-images/1babc905994f380026708c0f1c038d8c.jpg"
                    alt="Coastal Archipelago"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur-md">
                    Tropical Solitude
                  </div>
                </div>
                <div className="relative h-80 overflow-hidden rounded-3xl shadow-md transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/travel-images/644728dd03e03051ec91872eee56abce.jpg"
                    alt="Alpine Summit"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur-md">
                    Swiss Ridge Traverse
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="relative h-80 overflow-hidden rounded-3xl shadow-md transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/travel-images/918a169bbf090069562831cff42108b1.jpg"
                    alt="Desert Sanctuary"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur-md">
                    Wadi Rum Private Camp
                  </div>
                </div>
                <div className="relative h-64 overflow-hidden rounded-3xl shadow-md transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/travel-images/b917fdc63744ad30426969f6d5402ce8.jpg"
                    alt="Bespoke Villa"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 rounded-full bg-accent-green px-3 py-1 text-xs font-semibold text-text-primary shadow">
                    Private Villa Buyouts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES / THE HYDRABEAN STANDARD */}
        <section className="relative px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-text-primary shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
                The Hydrabean Standard
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                The Principles That Guide Every Mile We Plan
              </h2>
              <p className="mt-4 text-text-muted text-sm md:text-base">
                We believe exceptional luxury should leave the traveler enlightened and the host community enriched.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((val, idx) => (
                <TiltCard key={val.title} max={6} className="h-full">
                  <div className="flex h-full flex-col rounded-3xl border border-border-subtle bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-green hover:shadow-[0_16px_40px_rgba(182,255,60,0.18)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-green/20 ring-1 ring-accent-green/40">
                      {val.icon}
                    </div>
                    <span className="mt-5 text-xs font-extrabold tracking-widest text-text-muted/60 uppercase">
                      Pillar 0{idx + 1}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold text-text-primary">
                      {val.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted">
                      {val.description}
                    </p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM LEADERS */}
        <section className="relative bg-black/[0.02] px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-text-muted">
                  The Architects
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Meet the Explorers Designing Your Journey
                </h2>
              </div>
              <p className="max-w-md text-sm text-text-muted leading-relaxed">
                Our directors are not office desk agents. They spend over 120 days a year on the ground,
                testing new hiking tracks, inspecting secret villas, and uncovering private passages.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {LEADERS.map((leader) => (
                <div
                  key={leader.name}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-border-subtle bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-floating"
                >
                  <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-black/5">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="inline-block rounded-full bg-accent-green px-2.5 py-0.5 text-[11px] font-bold text-text-primary mb-1">
                        {leader.region}
                      </span>
                      <h3 className="font-display text-lg font-bold text-white leading-tight">
                        {leader.name}
                      </h3>
                      <p className="text-xs text-white/80">{leader.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 px-2 pb-2 text-xs leading-relaxed text-text-muted">
                    {leader.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MILESTONES TIMELINE */}
        <section className="relative px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
                Our Evolution
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
                A Decade of Thoughtful Exploration
              </h2>
            </div>

            <div className="relative border-l-2 border-accent-green/40 pl-6 md:pl-10 space-y-12 ml-4 md:ml-12">
              {TIMELINE.map((item) => (
                <div key={item.year} className="relative group">
                  <div className="absolute -left-[31px] md:-left-[47px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-accent-green font-display text-xs font-bold text-text-primary ring-4 ring-white shadow">
                    ✓
                  </div>
                  <span className="font-display text-2xl font-black text-text-primary">
                    {item.year}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              ))}
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
              Begin Your Chapter
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-balance">
              Ready to see the world through a completely different lens?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
              Talk directly with a Hydrabean travel architect today. No automated forms or canned packages — just genuine bespoke travel design.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <MagneticButton className="bg-accent-green px-8 py-3.5 text-sm font-bold text-text-primary shadow-lg hover:brightness-110">
                  Plan Your Itinerary
                </MagneticButton>
              </Link>
              <Link href="/services">
                <button className="rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-colors">
                  Explore All Services
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
