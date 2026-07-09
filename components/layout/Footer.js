// components/Footer.js
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Send,
} from "lucide-react";
import Image from "next/image";

// ─── Constants ────────────────────────────────

const PRODUCT_CATEGORIES = [
  { name: "Endodontic Files", href: "/products/category/endodontic-files" },
  { name: "Handpieces", href: "/products/category/handpieces" },
  { name: "Dental Materials", href: "/products/category/dental-materials" },
  { name: "Magnification", href: "/products/category/magnification" },
  { name: "Accessories", href: "/products/category/accessories" },
  { name: "Equipment", href: "/products/category/equipment" },
];

const QUICK_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "All Products", href: "/products" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "FAQs", href: "/faqs" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

const SUPPORT_LINKS = [
  { name: "Shipping Information", href: "/shipping-information" },
  { name: "Returns & Warranty", href: "/returns-warranty" },
  { name: "Terms & Conditions", href: "/term-condition" },
  { name: "Technical Support", href: "/technical-support" },
  { name: "Product Catalog", href: "/product-catalog" },
  { name: "Bulk Orders", href: "/bulk-orders" },
];

const SOCIAL_LINKS = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/bossdentfor",
    label: "Facebook",
  },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  {
    icon: Instagram,
    href: "https://www.instagram.com/bossdentglobalindiapvtltd/",
    label: "Instagram",
  },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const TRUST_BADGES = [
  {
    label: "Fast Delivery",
    sub: "Pan India",
    svgPath: (
      <>
        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
      </>
    ),
  },
  {
    label: "Warranty",
    sub: "Extended Support",
    svgPath: (
      <path
        fillRule="evenodd"
        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    ),
  },
  {
    label: "24/7 Support",
    sub: "Expert Help",
    svgPath: (
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    ),
  },
];

const PAYMENT_METHODS = ["VISA", "MC", "UPI"];

// ─── Reusable Components ──────────────────────

function FooterHeading({ children }) {
  return (
    <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 flex items-center gap-2">
      <span className="w-1 h-6 bg-[#26A7EB] rounded" />
      {children}
    </h4>
  );
}

function FooterNavLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm md:text-base text-white/80 hover:text-[#26A7EB] transition-colors flex items-center gap-2 group"
      >
        <ArrowRight
          size={14}
          className="group-hover:translate-x-1 transition-transform flex-shrink-0"
        />
        <span className="break-words">{children}</span>
      </Link>
    </li>
  );
}

// ─── Footer ───────────────────────────────────

export default function Footer() {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: wire up newsletter API
    console.log("Subscribe email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#163a5c] text-white">
      {/* ── Newsletter ── */}
      <div className="bg-gradient-to-r from-[#1B4873] to-[#163a5c] py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left w-full md:w-auto">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Stay Updated
              </h3>
              <p className="text-sm md:text-base text-white/90">
                Subscribe to get updates on new products and special offers
              </p>
            </div>

            {/* ✅ Fixed: now a proper <form> so e.preventDefault() works correctly */}
            <form
              onSubmit={handleSubscribe}
              className="w-full md:w-auto md:min-w-[350px] lg:min-w-[400px]"
            >
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-lg w-full
    bg-white/10 border border-white/30
    text-white placeholder-white/50
    focus:outline-none focus:ring-2 focus:ring-[#26A7EB] focus:border-transparent
    transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#26A7EB] hover:bg-[#2193cf] px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 whitespace-nowrap w-full sm:w-auto"
                >
                  <Send size={20} />
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image
                src="/images/products/bossdentLogo.jpeg"
                alt="Bossdent Global"
                width={70}
                height={50}
                className="object-contain"
                priority
              />

              <div className="leading-tight">
                <p className="text-xl font-bold text-white">
                  <span className="text-[#26A7EB]">Boss</span>dent
                </p>
                <p className="text-xs text-white/60">Global</p>
              </div>
            </Link>{" "}
            <p className="text-sm md:text-base text-white/80 mb-6 leading-relaxed">
              Empowering Dental Professionals with Precision Tools. Your
              one-stop solution for all dental equipment.
            </p>
            <div className="space-y-3 md:space-y-4">
              <a
                href="tel:+919810768600"
                className="flex items-center gap-3 text-white/80 hover:text-[#26A7EB] transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#26A7EB] transition-colors flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-white/60">Call Us</p>
                  <p className="text-sm md:text-base font-semibold">
                    +91 9810-76-8600
                  </p>
                </div>
              </a>

              <a
                href="mailto:sales@bossdentglobal.com"
                className="flex items-center gap-3 text-white/80 hover:text-[#26A7EB] transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#26A7EB] transition-colors flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-white/60">Email Us</p>
                  <p className="text-xs md:text-sm font-semibold break-all">
                    sales@bossdentglobal.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3 text-white/80">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-white/60 mb-1">Visit Us</p>
                  <p className="text-xs md:text-sm font-semibold leading-relaxed">
                    Bossdent Global India Pvt Ltd, UG 11, Vardhman Golden Plaza,
                    Road No 44, Pitam Pura, Above Goldy Motors, near Sewa Rasoi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <FooterHeading>Product Categories</FooterHeading>
            <ul className="space-y-2 md:space-y-3">
              {PRODUCT_CATEGORIES.map(({ name, href }) => (
                <FooterNavLink key={name} href={href}>
                  {name}
                </FooterNavLink>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="space-y-2 md:space-y-3">
              {QUICK_LINKS.map(({ name, href }) => (
                <FooterNavLink key={name} href={href}>
                  {name}
                </FooterNavLink>
              ))}
            </ul>
          </div>

          {/* Support + Social */}
          <div>
            <FooterHeading>Support</FooterHeading>
            <ul className="space-y-2 md:space-y-3">
              {SUPPORT_LINKS.map(({ name, href }) => (
                <FooterNavLink key={name} href={href}>
                  {name}
                </FooterNavLink>
              ))}
            </ul>

            <div className="mt-6 md:mt-8">
              <h5 className="text-sm md:text-base font-semibold mb-3 md:mb-4">
                Follow Us
              </h5>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 md:w-10 md:h-10 bg-white/10 hover:bg-[#26A7EB] rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Trust Badges ── */}
      <div className="border-t border-white/10 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {TRUST_BADGES.map(({ label, sub, svgPath }) => (
              <div
                key={label}
                className="flex flex-col sm:flex-row items-center gap-2 md:gap-3 text-center sm:text-left"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {svgPath}
                  </svg>
                </div>
                <div>
                  <p className="text-sm md:text-base font-semibold">{label}</p>
                  <p className="text-xs text-white/60">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10 bg-[#0f0d1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-white/60">
            <p className="text-center md:text-left">
              © {currentYear}{" "}
              <span className="text-white font-semibold">Bossdent Global</span>.
              All rights reserved
            </p>

            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
              <Link
                href="/privacy-policy"
                className="hover:text-[#26A7EB] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/term-condition"
                className="hover:text-[#26A7EB] transition-colors"
              >
                Terms of Service
              </Link>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-xs">We Accept:</span>
              <div className="flex gap-1 md:gap-2">
                {PAYMENT_METHODS.map((method) => (
                  <div
                    key={method}
                    className="w-8 h-6 md:w-10 md:h-7 bg-white/10 rounded flex items-center justify-center text-[9px] md:text-[10px] font-bold"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
