"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MagneticButton from "@/components/ui/magnetic-button";
import { useToast } from "@/components/ui/toast";

const DESTINATIONS = [
  "Japan & Ancient Kyoto",
  "Swiss Alps & Dolomites",
  "Serengeti Safari & Zanzibar",
  "Amalfi Coast & Greek Cyclades",
  "Iceland Glaciers & Aurora",
  "Patagonia & Atacama Desert",
  "Norway Fjords & Arctic",
  "Custom / Multiple Territories",
];

const TRIP_STYLES = [
  "Bespoke Luxury",
  "Wilderness & Safari",
  "Culinary & Wine",
  "Cultural & Historic",
  "High Adventure",
  "Wellness & Thermal",
  "Romantic Honeymoon",
  "Family Multi-Gen",
];

const OFFICES = [
  {
    city: "Tokyo Studio",
    address: "6-10-1 Roppongi, Minato-ku, Tokyo 106-0032",
    country: "Japan",
    timeZone: "JST (UTC+9)",
  },
  {
    city: "London Mayfair",
    address: "14 Berkeley Square, Mayfair, London W1J 6BQ",
    country: "United Kingdom",
    timeZone: "GMT (UTC+0)",
  },
  {
    city: "New York SoHo",
    address: "450 West Broadway, SoHo, New York, NY 10012",
    country: "United States",
    timeZone: "EST (UTC-5)",
  },
  {
    city: "Zürich Atelier",
    address: "Bahnhofstrasse 28, 8001 Zürich",
    country: "Switzerland",
    timeZone: "CET (UTC+1)",
  },
];

export default function ContactPage() {
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "Japan & Ancient Kyoto",
    season: "Autumn 2026",
    travelers: "2 Travelers (Couple)",
    budget: "$5,000 - $10,000 / person",
    notes: "",
  });

  const [selectedStyles, setSelectedStyles] = useState<string[]>([
    "Bespoke Luxury",
    "Culinary & Wine",
  ]);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleStyle = (style: string) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      showToast("Please provide your name and email address.", "warning", "✉️");
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      showToast(
        "Inquiry received! Our travel architect will email you within 4 hours.",
        "success",
        "🎉"
      );
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />

      <main className="pt-24 md:pt-32">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden px-6 pb-12 pt-12 md:px-12 md:pb-20 md:pt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-accent-green/20 blur-[130px]"
          />
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent-green" />
              Direct Travel Concierge
            </div>

            <h1 className="font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] max-w-4xl">
              Let&apos;s Plan Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-accent-green via-[#87dc00] to-text-primary bg-clip-text text-transparent">
                  Next Masterpiece
                </span>
                <span
                  aria-hidden
                  className="absolute bottom-2 left-0 h-3 w-full bg-accent-green/30 -z-0 rounded"
                />
              </span>
              .
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted md:text-xl">
              Every Hydrabean expedition begins with a conversation. Share your destination dreams,
              timing, and rhythm — our architects will prepare an initial consultation briefing
              within 4 business hours.
            </p>
          </div>
        </section>

        {/* SPLIT LAYOUT: INFO ON LEFT, FORM ON RIGHT */}
        <section className="relative px-6 pb-20 md:px-12 md:pb-28">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* LEFT COLUMN: CONTACT CHANNELS & STUDIOS */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct channels card */}
              <div className="rounded-3xl border border-border-subtle bg-white p-7 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                  Direct Inquiries
                </span>
                <h3 className="mt-1 font-display text-2xl font-bold text-text-primary">
                  Speak With an Architect
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  Prefer a direct phone conversation? Reach out directly to our central concierge lines.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent-green text-text-primary font-bold">
                      ☎
                    </span>
                    <div>
                      <span className="block text-xs font-semibold text-text-muted">
                        Toll-Free (US & Canada)
                      </span>
                      <a
                        href="tel:+18008924910"
                        className="font-display text-base font-bold text-text-primary hover:text-black hover:underline"
                      >
                        +1 (800) 892-4910
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent-green text-text-primary font-bold">
                      ✈
                    </span>
                    <div>
                      <span className="block text-xs font-semibold text-text-muted">
                        International & UK Line
                      </span>
                      <a
                        href="tel:+442079460192"
                        className="font-display text-base font-bold text-text-primary hover:text-black hover:underline"
                      >
                        +44 20 7946 0192
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent-green text-text-primary font-bold">
                      ✉
                    </span>
                    <div>
                      <span className="block text-xs font-semibold text-text-muted">
                        Concierge Email
                      </span>
                      <a
                        href="mailto:concierge@hydrabean.travel"
                        className="font-display text-base font-bold text-text-primary hover:text-black hover:underline"
                      >
                        concierge@hydrabean.travel
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-7 rounded-2xl bg-accent-green/20 p-4 border border-accent-green/40">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent-green animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider text-text-primary">
                      Response Guarantee
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-text-primary/90 leading-relaxed font-medium">
                    All new journey inquiries submitted on business days are reviewed within 4 hours by a dedicated senior travel architect.
                  </p>
                </div>
              </div>

              {/* Physical Global Studios */}
              <div className="rounded-3xl border border-border-subtle bg-white p-7 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                  Global Footprint
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-text-primary">
                  Our International Studios
                </h3>
                <p className="mt-1 text-xs text-text-muted">
                  Private consultations available in-person by appointment.
                </p>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {OFFICES.map((office) => (
                    <div
                      key={office.city}
                      className="rounded-2xl border border-black/5 bg-black/[0.015] p-3.5"
                    >
                      <h4 className="font-display text-sm font-bold text-text-primary">
                        {office.city}
                      </h4>
                      <p className="mt-1 text-[11px] leading-snug text-text-muted">
                        {office.address}
                      </p>
                      <span className="mt-2 inline-block rounded bg-white px-2 py-0.5 text-[10px] font-bold text-text-primary border border-border-subtle">
                        {office.timeZone}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: INTERACTIVE TRIP INQUIRY FORM */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-border-subtle bg-white p-8 shadow-floating sm:p-10">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent-green text-3xl font-black text-text-primary shadow-lg animate-bounce">
                      ✓
                    </div>
                    <span className="mt-6 inline-block rounded-full bg-accent-green/20 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-text-primary">
                      Inquiry Logged
                    </span>
                    <h2 className="mt-3 font-display text-3xl font-bold text-text-primary">
                      Thank You, {formData.name || "Explorer"}!
                    </h2>
                    <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-text-muted">
                      Your travel blueprint request has been assigned to our senior regional architect for{" "}
                      <span className="font-bold text-text-primary">
                        {formData.destination}
                      </span>
                      . Expect an initial itinerary briefing in your inbox at{" "}
                      <span className="font-bold text-text-primary">
                        {formData.email}
                      </span>{" "}
                      within 4 hours.
                    </p>

                    <div className="mt-8">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            destination: "Japan & Ancient Kyoto",
                            season: "Autumn 2026",
                            travelers: "2 Travelers (Couple)",
                            budget: "$5,000 - $10,000 / person",
                            notes: "",
                          });
                        }}
                        className="rounded-full bg-black/5 px-6 py-2.5 text-xs font-bold text-text-primary hover:bg-black/10 transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                        Step 1 of 1
                      </span>
                      <h3 className="font-display text-2xl font-bold text-text-primary">
                        Tailor Your Expedition
                      </h3>
                      <p className="mt-1 text-xs text-text-muted">
                        Fill out your preferences below to receive a custom proposal and quote.
                      </p>
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Eleanor Rigby"
                          className="w-full rounded-2xl border border-border-subtle bg-black/[0.02] px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-text-primary focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="eleanor@domain.com"
                          className="w-full rounded-2xl border border-border-subtle bg-black/[0.02] px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-text-primary focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Phone & Destination Row */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-2">
                          Phone / WhatsApp (Optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+1 (555) 000-0000"
                          className="w-full rounded-2xl border border-border-subtle bg-black/[0.02] px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-text-primary focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-2">
                          Destination of Interest
                        </label>
                        <select
                          value={formData.destination}
                          onChange={(e) =>
                            setFormData({ ...formData, destination: e.target.value })
                          }
                          className="w-full rounded-2xl border border-border-subtle bg-black/[0.02] px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-text-primary focus:bg-white"
                        >
                          {DESTINATIONS.map((dest) => (
                            <option key={dest} value={dest}>
                              {dest}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Season, Travelers & Budget */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-2">
                          Target Season
                        </label>
                        <select
                          value={formData.season}
                          onChange={(e) =>
                            setFormData({ ...formData, season: e.target.value })
                          }
                          className="w-full rounded-2xl border border-border-subtle bg-black/[0.02] px-3 py-3 text-xs text-text-primary outline-none focus:border-text-primary focus:bg-white"
                        >
                          <option>Spring 2026</option>
                          <option>Summer 2026</option>
                          <option>Autumn 2026</option>
                          <option>Winter 2026/27</option>
                          <option>Flexible Dates</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-2">
                          Party Size
                        </label>
                        <select
                          value={formData.travelers}
                          onChange={(e) =>
                            setFormData({ ...formData, travelers: e.target.value })
                          }
                          className="w-full rounded-2xl border border-border-subtle bg-black/[0.02] px-3 py-3 text-xs text-text-primary outline-none focus:border-text-primary focus:bg-white"
                        >
                          <option>Solo Traveler</option>
                          <option>2 Travelers (Couple)</option>
                          <option>3 - 4 Travelers</option>
                          <option>5+ Family or Group</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-2">
                          Target Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) =>
                            setFormData({ ...formData, budget: e.target.value })
                          }
                          className="w-full rounded-2xl border border-border-subtle bg-black/[0.02] px-3 py-3 text-xs text-text-primary outline-none focus:border-text-primary focus:bg-white"
                        >
                          <option>$2,000 - $5,000 / person</option>
                          <option>$5,000 - $10,000 / person</option>
                          <option>$10,000 - $20,000 / person</option>
                          <option>Ultra-Luxury / Uncapped</option>
                        </select>
                      </div>
                    </div>

                    {/* Trip Style Checkboxes */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-2">
                        Preferred Travel Style (Select all that apply)
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {TRIP_STYLES.map((style) => {
                          const isSelected = selectedStyles.includes(style);
                          return (
                            <button
                              type="button"
                              key={style}
                              onClick={() => toggleStyle(style)}
                              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                                isSelected
                                  ? "bg-accent-green text-text-primary shadow-sm ring-1 ring-accent-green font-bold"
                                  : "bg-black/5 text-text-muted hover:bg-black/10"
                              }`}
                            >
                              {style} {isSelected ? "✓" : "+"}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-2">
                        Tell Us About Your Vision & Bucket-List Desires
                      </label>
                      <textarea
                        rows={4}
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        placeholder="e.g. Celebrating a 10th anniversary, interested in private onsen ryokans in Hakone, contemporary art in Naoshima, and private sushi omakase with local masters..."
                        className="w-full rounded-2xl border border-border-subtle bg-black/[0.02] px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-text-primary focus:bg-white"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <MagneticButton
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-accent-green py-4 text-center text-sm font-bold text-text-primary shadow-floating hover:brightness-110 disabled:opacity-50"
                      >
                        {submitting ? "Transmitting to Concierge Desk..." : "Submit Travel Blueprint Request →"}
                      </MagneticButton>
                    </div>

                    <p className="text-center text-[11px] text-text-muted">
                      🔒 Your personal information is encrypted and never shared with commercial aggregators.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
