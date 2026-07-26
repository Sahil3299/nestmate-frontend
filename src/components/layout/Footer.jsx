import { Link } from "react-router-dom";
import { ArrowUpRight, Shield } from "lucide-react";
import logo from "../../assets/logo.png";

const FOOTER_LINKS = {
  Index: [
    { label: "Home", href: "/" },
    { label: "Browse", href: "/browse" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "About Us", href: "/about" },
  ],
  Services: [
    { label: "Post Free Ad", href: "/post-room" },
    { label: "Sign Up", href: "/signup" },
    { label: "Sign In", href: "/login" },
    { label: "Messages", href: "/messages" },
  ],
  Legal: [
    { label: "Privacy Protected", href: "#privacy" },
    { label: "Verified Listings", href: "#verified-listings" },
    { label: "Zero Brokerage", href: "#zero-brokerage" },
    { label: "Help Center", href: "#help" },
  ],
};

function FooterLink({ href, children }) {
  if (href.startsWith("/")) {
    return (
      <Link
        to={href}
        className="group inline-flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white"
      >
        {children}
        <ArrowUpRight size={12} className="opacity-0 transition-opacity group-hover:opacity-100" />
      </Link>
    );
  }

  return (
    <a
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white"
    >
      {children}
      <ArrowUpRight size={12} className="opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-200 hover:border-white hover:bg-white hover:text-[#0A0A0A]"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0A] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_55%)]" />
      <div className="container-max relative pt-24 lg:pt-28">
        <div className="grid grid-cols-2 gap-8 pb-16 md:grid-cols-5 lg:gap-12">
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="mb-5 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white">
                <img src={logo} alt="NestMate" className="h-11 w-11 object-cover" />
              </span>
              <div>
                <span className="block font-serif text-2xl font-extrabold leading-none tracking-tight text-white">
                  NestMate
                </span>
                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">
                  Find Your Match
                </span>
              </div>
            </Link>

            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/50">
              Find your perfect flatmate, hassle-free. Serving Mumbai, Pune, Bangalore, Thane, Delhi, and Hyderabad with verified profiles and zero brokerage.
            </p>

            <div className="mb-7 space-y-2 text-sm text-white/40">
              <p>India-first flatmate and tenant matching platform.</p>
              <p>Contact: in-app support for listings, chats, and profile help.</p>
            </div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Find us on</p>
            <div className="flex gap-2">
              <SocialIcon href="#" label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="4" />
                  <path d="M8 11v5" />
                  <path d="M8 8v0" />
                  <path d="M12 16v-5" />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0 -5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([section, items]) => (
            <div key={section}>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white">{section}</h4>
              <ul className="space-y-3.5">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <FooterLink href={href}>{label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} NestMate. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-white/50">
              <Shield size={13} className="text-white" />
              Privacy Protected
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/50">
              <span className="h-1.5 w-1.5 rounded-full bg-[#14B8A6]" />
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
