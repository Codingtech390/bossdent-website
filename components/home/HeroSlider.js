"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Phone,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuoteModal } from "@/context/QuoteModalContext";

const ACCENT = "#26A7EB";

const heroSlides = [
  {
    id: 1,
    title: "E-Curve Rotary Files",
    subtitle: "The Endo Revolution with CTA Wire Technology",
    description:
      "High fracture resistance and excellent flexibility with ISO standardized color coding. Available in multiple tapers for narrow, medium, and large canals.",
    image: "https://res.cloudinary.com/dk4npblv3/image/upload/v1773132057/flexfile_nnoe75.png",
    cta: "Explore Endodontics",
    ctaLink: "/products/category/endodontic-files",
    badge: "Precision Endodontics",
    number: "01",
  },
  {
    id: 2,
    title: "Premium Handpieces",
    subtitle: "Ceramic Ball Bearings. Exceptional Torque.",
    description:
      "Designed for dental professionals who value performance, precision, and control. An ergonomic profile supports a comfortable and efficient workflow.",
    image: "https://res.cloudinary.com/dk4npblv3/image/upload/v1773126829/handpices_mj7bos.png",
    cta: "Explore Handpieces",
    ctaLink: "/products/category/handpieces",
    badge: "Professional Equipment",
    number: "02",
  },
  {
    id: 3,
    title: "Universal Zoom Loupe",
    subtitle: "See More. Work With Precision.",
    description:
      "Discover magnification solutions with sharp vision, advanced lens technology, and illumination options designed to support clinical precision.",
    image: "https://res.cloudinary.com/dk4npblv3/image/upload/v1773128916/zoomloup_iy98xo.png",
    cta: "Discover Loupes",
    ctaLink: "/products/category/magnification",
    badge: "Enhanced Precision",
    number: "03",
  },
  {
    id: 5,
    title: "Waxone Modelling Wax",
    subtitle: "Consistency That Shapes Every Detail.",
    description:
      "High-quality base plate wax with excellent workability across a range of temperatures. Its smooth texture supports precise modelling and detailing.",
    image:
      "https://res.cloudinary.com/dk4npblv3/image/upload/v1773130917/Gemini_Generated_Image_l7bvu0l7bvu0l7bv_udltr9.png",
    cta: "View Dental Materials",
    ctaLink: "/products/category/dental-materials",
    badge: "Dental Materials",
    number: "04",
  },
  {
    id: 6,
    title: "Boss Oil Spray",
    subtitle: "Care That Keeps Equipment Performing.",
    description:
      "A 500 ml odourless lubricant spray designed for handpiece maintenance, helping reduce internal debris and support reliable equipment performance.",
    image:
      "https://res.cloudinary.com/dk4npblv3/image/upload/v1773130216/Gemini_Generated_Image_emxt3eemxt3eemxt_w51quc.png",
    cta: "Explore Maintenance",
    ctaLink: "/products/category/maintenance",
    badge: "Equipment Care",
    number: "05",
  },
  {
    id: 7,
    title: "RVG Sleeves",
    subtitle: "A Thoughtful Layer of Clinical Protection.",
    description:
      "Ultrasoft disposable sensor sleeves designed for compatibility with RVG sensors, supporting convenient handling and everyday clinical hygiene.",
    image:
      "https://res.cloudinary.com/dk4npblv3/image/upload/v1773130497/Gemini_Generated_Image_j45abmj45abmj45a_ksuotz.png",
    cta: "Explore Accessories",
    ctaLink: "/products/category/accessories",
    badge: "Clinical Hygiene",
    number: "06",
  },
];

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction >= 0 ? 45 : -45,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: {
      opacity: { duration: 0.45 },
      x: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction >= 0 ? -35 : 35,
    transition: {
      opacity: { duration: 0.25 },
      x: { duration: 0.35, ease: "easeInOut" },
    },
  }),
};

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const { setIsOpen } = useQuoteModal();

  const activeSlide = heroSlides[current];

  const goToSlide = useCallback(
    (index) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current],
  );

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrent((previous) => (previous + 1) % heroSlides.length);
  }, []);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setCurrent((previous) => (previous - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(slideNext, 6500);
    return () => window.clearInterval(timer);
  }, [slideNext]);

  return (
    <section
      aria-label="Featured dental products"
      className="relative isolate w-full overflow-hidden bg-[#071321] text-white"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,#071321_0%,#0A1C30_48%,#102B43_100%)]" />

        <div className="absolute -right-32 top-[-15%] h-[520px] w-[520px] rounded-full bg-[#168DD0]/15 blur-[120px] sm:h-[700px] sm:w-[700px]" />

        <div className="absolute -bottom-56 left-[15%] h-[420px] w-[420px] rounded-full bg-[#164B75]/20 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "linear-gradient(to right, transparent, black 45%, black)",
          }}
        />

        <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-transparent via-[#26A7EB]/70 to-transparent" />
      </div>

      {/* Main slider */}
      <div className="relative min-h-[700px] sm:min-h-[740px] lg:min-h-[650px] xl:min-h-[690px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeSlide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <div className="mx-auto grid min-h-[700px] max-w-[1440px] grid-cols-1 items-center gap-4 px-5 pb-28 pt-12 sm:min-h-[740px] sm:px-10 sm:pb-32 lg:min-h-[650px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-4 lg:px-14 lg:pb-28 lg:pt-8 xl:px-20">
              {/* Text content */}
              <div className="relative z-10 mx-auto w-full max-w-[610px] lg:mx-0 lg:py-10">
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.5 }}
                  className="mb-5 flex items-center gap-3 sm:mb-7"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#26A7EB]/30 bg-[#26A7EB]/10 text-[#58C5FF]">
                    <Sparkles size={17} strokeWidth={1.7} />
                  </span>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8CD7FF] sm:text-[11px] sm:tracking-[0.28em]">
                    {activeSlide.badge}
                  </span>

                  <span className="h-px w-9 bg-white/20 sm:w-14" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.6 }}
                  className="max-w-[650px] text-[clamp(2.55rem,6vw,5.1rem)] font-semibold leading-[0.99] tracking-[-0.055em] text-white"
                >
                  {activeSlide.title}
                  <span className="mt-2 block text-[0.43em] font-normal leading-[1.3] tracking-[-0.025em] text-[#67C8FA] sm:mt-3">
                    {activeSlide.subtitle}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.55 }}
                  className="mt-5 max-w-[500px] text-[13px] leading-7 text-slate-300 sm:mt-7 sm:text-[15px] sm:leading-8"
                >
                  {activeSlide.description}
                </motion.p>

                {/* Trust detail */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.36, duration: 0.5 }}
                  className="mt-5 flex items-center gap-2.5 text-[11px] text-slate-400 sm:mt-6 sm:text-xs"
                >
                  <ShieldCheck size={16} className="shrink-0 text-[#69C9FA]" />
                  <span>Solutions for modern dental professionals</span>
                </motion.div>

                {/* Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.44, duration: 0.5 }}
                  className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4"
                >
                  <Link
                    href={activeSlide.ctaLink}
                    className="group inline-flex min-h-[49px] items-center justify-center gap-3 rounded-full bg-[#26A7EB] px-5 py-3 text-[12px] font-semibold text-white shadow-[0_10px_35px_rgba(38,167,235,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#48B9F4] hover:shadow-[0_14px_40px_rgba(38,167,235,0.28)] sm:min-h-[54px] sm:px-6 sm:text-[13px]"
                  >
                    <ShoppingBag size={16} />
                    {activeSlide.cta}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="inline-flex min-h-[49px] items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-[12px] font-medium text-white backdrop-blur-md transition duration-300 hover:border-white/35 hover:bg-white/[0.09] sm:min-h-[54px] sm:px-6 sm:text-[13px]"
                  >
                    <Phone size={15} className="text-[#73D0FF]" />
                    Request a Quote
                  </button>
                </motion.div>

                {/* Small credibility note */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="mt-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-slate-500 sm:mt-9 sm:text-[11px]"
                >
                  <span className="h-px w-7 bg-[#26A7EB]/60" />
                  Explore the Bossdent collection
                </motion.div>
              </div>

              {/* Product showcase */}
              <div className="relative mx-auto flex h-[270px] w-full max-w-[580px] items-center justify-center sm:h-[330px] lg:h-[470px] xl:h-[510px]">
                {/* Decorative orbit */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />

                <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[59%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#6ACBFF]/15" />

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#188CCB]/20 blur-[65px] sm:blur-[85px]" />

                {/* Product platform */}
                <div className="pointer-events-none absolute bottom-[6%] left-1/2 h-9 w-[58%] -translate-x-1/2 rounded-[50%] border border-white/10 bg-[#16344C]/60 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:bottom-[5%] sm:h-12" />

                <div className="pointer-events-none absolute bottom-[9%] left-1/2 h-px w-[48%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#62C8FF]/60 to-transparent" />

                {/* Product image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.88, y: 18 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: 0.12,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative z-[1] flex h-full w-full items-center justify-center"
                >
                  <motion.img
                    src={activeSlide.image}
                    alt={activeSlide.title}
                    draggable="false"
                    animate={{ y: [0, -7, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-[1] max-h-[95%] max-w-[92%] select-none object-contain drop-shadow-[0_22px_35px_rgba(0,0,0,0.28)]"
                  />
                </motion.div>

                {/* Floating product index */}
                <div className="absolute right-[3%] top-[10%] z-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#10263A]/80 px-3.5 py-3 shadow-xl backdrop-blur-xl sm:right-[2%] sm:top-[12%] sm:px-4">
                  <span className="text-xl font-light tracking-tight text-white sm:text-2xl">
                    {activeSlide.number}
                  </span>
                  <span className="h-7 w-px bg-white/15" />
                  <span className="text-[9px] font-medium uppercase leading-4 tracking-[0.16em] text-slate-400">
                    Featured
                    <br />
                    Product
                  </span>
                </div>

                {/* Floating label */}
                <div className="absolute bottom-[12%] left-[2%] z-10 flex items-center gap-2.5 rounded-full border border-white/10 bg-[#10263A]/85 px-3 py-2 shadow-xl backdrop-blur-xl sm:bottom-[13%] sm:left-[1%] sm:gap-3 sm:px-4 sm:py-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#26A7EB]/15 text-[#70D0FF]">
                    <ShieldCheck size={15} />
                  </span>
                  <span className="text-[10px] font-medium text-slate-200 sm:text-[11px]">
                    Professional Dental Solutions
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom navigation and progress */}
        <div className="absolute inset-x-0 bottom-0 z-20">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 pb-6 sm:px-10 sm:pb-7 lg:px-14 xl:px-20">
            {/* Slide counter */}
            <div className="flex shrink-0 items-center gap-3 sm:gap-4">
              <span className="text-sm font-medium tabular-nums text-white sm:text-base">
                {String(current + 1).padStart(2, "0")}
              </span>

              <div className="h-px w-8 bg-white/20 sm:w-12" />

              <span className="text-xs tabular-nums text-slate-500 sm:text-sm">
                {String(heroSlides.length).padStart(2, "0")}
              </span>
            </div>

            {/* Clickable progress */}
            <div className="flex flex-1 items-center justify-center gap-1.5 sm:gap-2.5">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                  aria-current={index === current ? "true" : undefined}
                  onClick={() => goToSlide(index)}
                  className="group flex h-8 flex-1 max-w-[64px] items-center py-3"
                >
                  <span
                    className={`relative block h-[3px] w-full overflow-hidden rounded-full transition-colors duration-300 ${
                      index === current ? "bg-white/20" : "bg-white/15 group-hover:bg-white/30"
                    }`}
                  >
                    {index === current && (
                      <motion.span
                        key={`${activeSlide.id}-progress`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 6.5, ease: "linear" }}
                        className="absolute inset-0 origin-left rounded-full bg-[#26A7EB]"
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>

            {/* Arrow controls */}
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={slidePrev}
                aria-label="Previous slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/80 transition duration-300 hover:border-[#26A7EB]/70 hover:bg-[#26A7EB]/15 hover:text-white sm:h-11 sm:w-11"
              >
                <ChevronLeft size={19} strokeWidth={1.6} />
              </button>

              <button
                type="button"
                onClick={slideNext}
                aria-label="Next slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/80 transition duration-300 hover:border-[#26A7EB]/70 hover:bg-[#26A7EB]/15 hover:text-white sm:h-11 sm:w-11"
              >
                <ChevronRight size={19} strokeWidth={1.6} />
              </button>
            </div>
          </div>

          {/* Fine bottom accent */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#26A7EB]/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
