"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "@/lib/gsap-config";
import MagneticButton from "@/components/ui/magnetic-button";
import { useToast } from "@/components/ui/toast";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Prices", href: "/prices" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { showToast } = useToast();

  const isHome = pathname === "/";

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const onScroll = () => {
      const isScrolled = window.scrollY > 40;

      if (!isHome || isScrolled) {
        gsap.to(nav, {
          backgroundColor: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(20px)",
          boxShadow: isScrolled ? "0 10px 40px rgba(0,0,0,0.08)" : "0 4px 20px rgba(0,0,0,0.04)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          duration: 0.4,
          ease: "power3.out",
        });
      } else {
        gsap.to(nav, {
          backgroundColor: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          borderBottom: "1px solid rgba(0,0,0,0.04)",
          duration: 0.4,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const onHeroProgress = (e: Event) => {
      if (!isHome) return;
      const progress = (e as CustomEvent<number>).detail;
      const shouldHide = progress > 0.08 && progress < 0.95;
      gsap.to(nav, {
        y: shouldHide ? -120 : 0,
        opacity: shouldHide ? 0 : 1,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    window.addEventListener("hero-scroll-progress", onHeroProgress);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hero-scroll-progress", onHeroProgress);
    };
  }, [isHome]);

  const handleNavClick = (item: NavItem) => {
    setMenuOpen(false);
    if (pathname === item.href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push(item.href);
    }
  };

  const handleLogin = () => {
    setMenuOpen(false);
    showToast("Login coming soon — stay tuned!", "info", "🔑");
  };

  const handleSignup = () => {
    setMenuOpen(false);
    showToast("Sign up is on the way! We'll notify you.", "success", "✨");
  };

  const textColor = "text-text-primary";
  const iconColor = "#0B0F0D";
  const hoverColor = "hover:text-black";
  const loginHover = "hover:text-black";

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 md:px-10 md:py-4 transition-all"
    >
      {/* Logo */}
      <Link
        href="/"
        onClick={(e) => {
          if (pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        className="flex items-center gap-2 focus:outline-none group"
        aria-label="Hydrabean Home"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-green transition-transform duration-300 group-hover:scale-105">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 12L3 4l3.5 8L3 20l18-8z"
              fill={iconColor}
              stroke={iconColor}
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span
          className={`font-display text-xl font-bold tracking-tight transition-colors duration-300 ${textColor}`}
        >
          Hydrabean
        </span>
      </Link>

      {/* Desktop nav links */}
      <div className="hidden items-center gap-1 rounded-full border border-border-subtle bg-white/70 p-1.5 backdrop-blur-md lg:flex shadow-sm">
        {NAV_ITEMS.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href === "/prices" && pathname === "/pricing");

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => {
                if (pathname === item.href) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full ${
                isActive
                  ? "bg-text-primary text-white shadow-sm"
                  : `${textColor} ${hoverColor} hover:bg-black/5`
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Desktop CTA buttons */}
      <div className="hidden items-center gap-3 md:flex">
        <button
          onClick={handleLogin}
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${textColor} ${loginHover}`}
        >
          Log in
        </button>
        <MagneticButton
          onClick={handleSignup}
          className="bg-accent-green px-6 py-2.5 text-sm font-semibold text-text-primary shadow-sm hover:shadow-md transition-shadow"
        >
          Sign Up
        </MagneticButton>
      </div>

      {/* Mobile hamburger */}
      <button
        className="flex items-center justify-center rounded-xl p-2 md:hidden"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d={menuOpen ? "M6 6L18 18M6 18L18 6" : "M4 7H20M4 12H20M4 17H20"}
            stroke={iconColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="glass absolute left-3 right-3 top-full mt-2 flex flex-col gap-1 rounded-3xl p-5 shadow-floating md:hidden border border-black/8">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === "/prices" && pathname === "/pricing");

            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors flex items-center justify-between ${
                  isActive
                    ? "bg-accent-green text-text-primary font-bold"
                    : "text-text-primary hover:bg-black/5"
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="h-2 w-2 rounded-full bg-text-primary" />}
              </button>
            );
          })}
          <div className="mt-3 flex flex-col gap-2 border-t border-black/8 pt-3">
            <button
              onClick={handleLogin}
              className="w-full rounded-full border border-border-subtle px-5 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-black/5"
            >
              Log in
            </button>
            <button
              onClick={handleSignup}
              className="w-full rounded-full bg-accent-green px-5 py-3 text-sm font-semibold text-text-primary transition-colors hover:brightness-110"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

