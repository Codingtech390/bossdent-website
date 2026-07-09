"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  Search,
  Phone,
  Mail,
  Layers,
  Cpu,
  ZoomIn,
  Lightbulb,
  FlaskConical,
  Droplets,
  ScanLine,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useQuoteModal } from "@/context/QuoteModalContext";

const productIconMap = {
  1: Layers,
  2: Cpu,
  3: ZoomIn,
  4: Lightbulb,
  5: FlaskConical,
  6: Droplets,
  7: ScanLine,
};

const products = [
  {
    id: 1,
    name: "E-Curve Rotary Files",
    price: "Contact for Price",
    link: "/endodontic-files",
    shortDesc: "Premium endodontic files with CTA wire",
  },
  {
    id: 2,
    name: "Platinum Handpiece",
    price: "Contact for Price",
    link: "/handpieces",
    shortDesc: "Ceramic bearings with super torque",
  },
  {
    id: 3,
    name: "Universal Zoom Loupe",
    price: "Contact for Price",
    link: "/magnification",
    shortDesc: "Magnification beyond imagination",
  },
  {
    id: 4,
    name: "5 LED Golden Series",
    price: "Contact for Price",
    link: "/handpieces",
    shortDesc: "5-LED shadowless handpiece",
  },
  {
    id: 5,
    name: "Waxone Modelling Wax",
    price: "Contact for Price",
    link: "/dental-materials",
    shortDesc: "Optimal consistency with low shrinkage",
  },
  {
    id: 6,
    name: "Bossdent Oil Spray",
    price: "Contact for Price",
    link: "/maintenance",
    shortDesc: "Premium handpiece lubricant 500ml",
  },
  {
    id: 7,
    name: "RVG Sleeves",
    price: "Contact for Price",
    link: "/accessories",
    shortDesc: "Disposable sensor sleeves",
  },
];

/* ─── Mega Dropdown (Greptile-style) ───────────────────────── */
const MegaDropdown = ({ visible }) => (
  <div
    className={`absolute left-1/2 top-full z-50 transition-all duration-200 ${
      visible
        ? "opacity-100 visible translate-y-0"
        : "opacity-0 invisible translate-y-2"
    }`}
    style={{
      transform: visible
        ? "translateX(-50%) translateY(0)"
        : "translateX(-50%) translateY(8px)",
      width: 680,
      maxWidth: "90vw",
    }}
  >
    {/* Caret arrow */}
    <div
      className="absolute left-1/2 -top-1.5 w-3 h-3 rotate-45 bg-[#26A7EB] border-l border-t border-white/10 rounded-sm"
      style={{ transform: "translateX(-50%) rotate(45deg)" }}
    />

    <div className="bg-white rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.16),0_4px_16px_rgba(0,0,0,0.08)] border border-black/[0.06] overflow-hidden mt-2">
      {/* Dark header */}
      <div className="flex items-center justify-between px-7 py-5 bg-gradient-to-r from-[#26A7EB] to-[#1B4873]">
        <div>
          <p className="text-white font-bold text-[15px] tracking-tight m-0">
            Premium Dental Products
          </p>
        </div>
        <Link
          href="/products"
          className="flex items-center gap-1.5 bg-white/10 border border-white/15 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg no-underline whitespace-nowrap hover:bg-white/20 transition-colors"
        >
          View All <ArrowRight size={13} />
        </Link>
      </div>

      {/* 3-col product grid */}
      <div className="grid grid-cols-3 gap-0 p-2 pb-3">
        {products.map((product) => {
          const Icon = productIconMap[product.id] || Layers;
          return (
            <Link
              key={product.id}
              href={`/products/category/${product.link}`}
              className="group flex items-start gap-3 p-3.5 rounded-xl border border-transparent hover:bg-[#f5f6ff] hover:border-[#e8eaff] transition-all duration-150 no-underline"
            >
              <div className="w-9 h-9 rounded-lg bg-[#f0f1ff] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#e8eaff] transition-colors">
                <Icon size={17} color="#1B4873" strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <p className="m-0 text-[13px] font-semibold text-gray-900 group-hover:text-[#26A7EB] transition-colors leading-snug">
                  {product.name}
                </p>
                <p className="m-0 mt-0.5 text-[11.5px] text-gray-500 leading-relaxed">
                  {product.shortDesc}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Footer strip */}
      <div className="flex items-center justify-between border-t border-gray-100 bg-[#fafbff] px-4 py-3">
        <Link
          href="/contact-us"
          className="text-xs font-semibold text-[#26A7EB] no-underline hover:underline"
        >
          Request Bulk Quote →
        </Link>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const { setIsOpen } = useQuoteModal();
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openDropdown = () => {
    clearTimeout(closeTimer.current);
    setIsProductsOpen(true);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setIsProductsOpen(false), 120);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsProductsOpen(false);
  };

  return (
    <>
      {/* ── Top Bar ── */}
      {/* <div className="bg-[#1B4873] text-white py-2 px-4">
        ...
      </div> */}

      {/* ── Main Navbar ── */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 3-col layout: [Logo] [Nav Links - flex-1 center] [Right Actions] */}
          <div className="flex items-center h-20 gap-6">
            {/* ── LEFT: Logo ── */}
            <div className="shrink-0">
              <Link href="/" className="flex items-center group">
                <div className="relative w-72 h-24 sm:w-64 sm:h-20 lg:w-90 lg:h-48 transform group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/products/bossdentLogo1.png"
                    alt="Bossdent Global Logo"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* ── CENTER: Desktop Nav Links ── */}
            <div className="hidden lg:flex flex-1 items-center justify-center gap-7">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#26A7EB] font-medium transition-colors whitespace-nowrap"
              >
                Home
              </Link>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-[#26A7EB] font-medium transition-all duration-200 whitespace-nowrap py-8">
                  Products
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      isProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ── MEGA DROPDOWN ── */}
                <MegaDropdown visible={isProductsOpen} />
              </div>

              <Link
                href="/about-us"
                className="text-gray-700 hover:text-[#26A7EB] font-medium transition-colors whitespace-nowrap"
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className="text-gray-700 hover:text-[#26A7EB] font-medium transition-colors whitespace-nowrap"
              >
                Contact
              </Link>
              <Link
                href="/faqs"
                className="text-gray-700 hover:text-[#26A7EB] font-medium transition-colors whitespace-nowrap"
              >
                FAQs
              </Link>
              <Link
                href="/blogs"
                className="text-gray-700 hover:text-[#26A7EB] font-medium transition-colors whitespace-nowrap"
              >
                Blogs
              </Link>
            </div>

            {/* ── RIGHT: Search + Cart + Get Quote + Hamburger ── */}
            <div className="flex items-center ml-auto lg:ml-0">
              {/* Get Quote CTA - desktop only */}
              <button
                onClick={() => setIsOpen(true)}
                className="hidden lg:block bg-[#26A7EB] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#2193cf] transition-colors shadow-sm hover:shadow-md whitespace-nowrap"
              >
                Get Quote
              </button>

              {/* Hamburger - mobile only */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 text-gray-600 hover:text-[#26A7EB] transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-3 space-y-1 max-h-[calc(100vh-140px)] overflow-y-auto">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-[#ecf5fb] hover:text-[#26A7EB] rounded-lg transition-colors font-medium"
              >
                Home
              </Link>

              {/* Products accordion */}
              <div>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-[#ecf5fb] hover:text-[#26A7EB] rounded-lg transition-colors font-medium"
                >
                  Products
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${
                      isProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isProductsOpen && (
                  <div className="mt-1 space-y-1 pl-3">
                    {products.map((product) => {
                      const Icon = productIconMap[product.id] || Layers;
                      return (
                        <Link
                          key={product.id}
                          href={`/products/category/${product.link}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex gap-3 px-3 py-2.5 rounded-lg hover:bg-[#ecf5fb] transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#f0f1ff] flex items-center justify-center shrink-0">
                            <Icon
                              size={15}
                              color="#1B4873"
                              strokeWidth={1.75}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-800 text-sm truncate m-0">
                              {product.name}
                            </p>
                            <p className="text-gray-400 text-xs mt-0.5 truncate m-0">
                              {product.shortDesc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                    <Link
                      href="/products"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-[#26A7EB] hover:text-[#1B4873] font-medium text-sm transition-colors"
                    >
                      View All Products →
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/about-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-[#ecf5fb] hover:text-[#26A7EB] rounded-lg transition-colors font-medium"
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-[#ecf5fb] hover:text-[#26A7EB] rounded-lg transition-colors font-medium"
              >
                Contact
              </Link>
              <Link
                href="/faqs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-[#ecf5fb] hover:text-[#26A7EB] rounded-lg transition-colors font-medium"
              >
                FAQs
              </Link>
              <Link
                href="/blogs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-[#ecf5fb] hover:text-[#26A7EB] rounded-lg transition-colors font-medium"
              >
                Blogs
              </Link>

              {/* Mobile Get Quote */}
              <div className="pt-2 pb-1">
                <button
                  onClick={() => {
                    setIsOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-[#26A7EB] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1B4873] transition-colors shadow-sm"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
