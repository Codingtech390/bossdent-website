"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useQuoteModal } from "@/context/QuoteModalContext";

const ACCENT = "#26A7EB";
const AUTOPLAY_DELAY = 6500;

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
    x: direction > 0 ? 24 : -24,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: {
      opacity: { duration: 0.3 },
      x: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -24 : 24,
    transition: { duration: 0.2 },
  }),
};

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const { setIsOpen } = useQuoteModal();

  const activeSlide = heroSlides[current];

  const goToSlide = useCallback(
    (index) => {
      if (index === current) return;
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
    const timer = window.setInterval(slideNext, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [slideNext]);

  return (
    <section
      aria-label="Featured dental products"
      className="relative isolate w-full overflow-hidden bg-[#071321] text-white"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#071321_0%,#0A1C30_52%,#102B43_100%)]" />
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#168DD0]/15 blur-[80px] sm:h-[420px] sm:w-[420px] sm:blur-[110px]" />
        <div className="absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-[#164B75]/20 blur-[90px] sm:left-[15%] sm:h-[420px] sm:w-[420px]" />
        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-4 pb-5 pt-7 sm:px-6 sm:pb-7 sm:pt-10 md:px-8 lg:px-12 lg:py-10 xl:px-16">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={activeSlide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid min-w-0 grid-cols-1 items-center gap-5 sm:gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 xl:gap-12"
          >
            {/* Text content */}
            <div className="relative z-10 mx-auto w-full min-w-0 max-w-2xl lg:mx-0 lg:py-5">
              <div className="mb-4 flex min-w-0 items-center gap-2.5 sm:mb-6 sm:gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#26A7EB]/30 bg-[#26A7EB]/10 text-[#58C5FF] sm:h-9 sm:w-9">
                  <Sparkles size={16} />
                </span>
                <span className="min-w-0 text-[9px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-[#8CD7FF] sm:text-[11px] sm:tracking-[0.23em]">
                  {activeSlide.badge}
                </span>
                <span className="h-px w-7 shrink-0 bg-white/20 sm:w-12" />
              </div>

              <h1 className="max-w-[650px] break-words text-[clamp(2rem,8.5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-[clamp(2.6rem,5.5vw,4.25rem)] lg:text-[clamp(2.8rem,4.2vw,4.7rem)] xl:text-[4.8rem]">
                {activeSlide.title}
                <span className="mt-2 block text-[0.42em] font-normal leading-[1.4] tracking-[-0.02em] text-[#67C8FA] sm:mt-3">
                  {activeSlide.subtitle}
                </span>
              </h1>

              <p className="mt-4 max-w-[540px] text-[13px] leading-6 text-slate-300 sm:mt-5 sm:text-[15px] sm:leading-7 lg:mt-6">
                {activeSlide.description}
              </p>

              <div className="mt-4 flex items-start gap-2 text-[11px] leading-5 text-slate-400 sm:mt-5 sm:text-xs">
                <ShieldCheck size={16} className="mt-0.5 shrink-0 text-[#69C9FA]" />
                <span>Solutions for modern dental professionals</span>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-2.5 min-[390px]:grid-cols-2 sm:mt-7 sm:flex sm:flex-wrap sm:gap-3">
                <Link
                  href={activeSlide.ctaLink}
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-[#26A7EB] px-4 py-3 text-center text-xs font-semibold text-white shadow-[0_10px_30px_rgba(38,167,235,0.18)] transition hover:bg-[#48B9F4] sm:w-auto sm:px-5 sm:text-[13px]"
                >
                  <ShoppingBag size={16} className="shrink-0" />
                  <span>{activeSlide.cta}</span>
                  <ArrowUpRight
                    size={15}
                    className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-3 text-xs font-medium text-white transition hover:border-white/35 hover:bg-white/[0.09] sm:w-auto sm:px-5 sm:text-[13px]"
                >
                  <Phone size={15} className="shrink-0 text-[#73D0FF]" />
                  Request a Quote
                </button>
              </div>

              <div className="mt-5 flex items-center gap-2.5 text-[9px] uppercase tracking-[0.12em] text-slate-500 sm:mt-7 sm:text-[10px] sm:tracking-[0.17em]">
                <span className="h-px w-6 shrink-0 bg-[#26A7EB]/60 sm:w-8" />
                <span>Explore the Bossdent collection</span>
              </div>
            </div>

            {/* Product showcase */}
            <div className="relative mx-auto flex h-[245px] w-full min-w-0 max-w-[580px] items-center justify-center sm:h-[340px] md:h-[390px] lg:h-[440px] xl:h-[500px]">
              <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#6ACBFF]/15" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#188CCB]/20 blur-[45px] sm:blur-[75px]" />

              <div className="pointer-events-none absolute bottom-[7%] left-1/2 h-7 w-[58%] -translate-x-1/2 rounded-[50%] border border-white/10 bg-[#16344C]/60 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:h-10" />
              <div className="pointer-events-none absolute bottom-[10%] left-1/2 h-px w-[48%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#62C8FF]/60 to-transparent" />

              <motion.div
                key={`${activeSlide.id}-image`}
                initial={{ opacity: 0, scale: 0.94, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-[1] flex h-full w-full items-center justify-center px-3 py-4 sm:px-5"
              >
                <motion.img
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  draggable={false}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-[1] max-h-[82%] max-w-[84%] select-none object-contain drop-shadow-[0_22px_35px_rgba(0,0,0,0.28)] sm:max-h-[88%] sm:max-w-[88%]"
                />
              </motion.div>

              {/* Featured product label */}
              <div className="absolute right-0 top-[6%] z-10 flex items-center gap-2 rounded-xl border border-white/10 bg-[#10263A]/90 px-2.5 py-2 shadow-xl backdrop-blur-xl sm:right-[2%] sm:top-[10%] sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3">
                <span className="text-lg font-light tracking-tight sm:text-2xl">
                  {activeSlide.number}
                </span>
                <span className="h-6 w-px bg-white/15 sm:h-7" />
                <span className="text-[8px] font-medium uppercase leading-3 tracking-[0.12em] text-slate-400 sm:text-[9px] sm:leading-4 sm:tracking-[0.16em]">
                  Featured
                  <br />
                  Product
                </span>
              </div>

              {/* Product trust label */}
              <div className="absolute bottom-[8%] left-0 z-10 flex max-w-[88%] items-center gap-2 rounded-full border border-white/10 bg-[#10263A]/90 px-2.5 py-2 shadow-xl backdrop-blur-xl sm:bottom-[11%] sm:left-[1%] sm:gap-3 sm:px-4 sm:py-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#26A7EB]/15 text-[#70D0FF]">
                  <ShieldCheck size={15} />
                </span>
                <span className="text-[9px] font-medium leading-4 text-slate-200 sm:text-[11px]">
                  Professional Dental Solutions
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide controls are in normal flow, never overlay the content */}
        <div className="mt-3 border-t border-white/10 pt-4 sm:mt-5 sm:pt-5">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <span className="text-sm font-medium tabular-nums text-white sm:text-base">
                {String(current + 1).padStart(2, "0")}
              </span>
              <span className="h-px w-5 bg-white/20 sm:w-10" />
              <span className="text-xs tabular-nums text-slate-500 sm:text-sm">
                {String(heroSlides.length).padStart(2, "0")}
              </span>
            </div>

            <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5 sm:gap-2">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                  aria-current={index === current ? "true" : undefined}
                  onClick={() => goToSlide(index)}
                  className="group flex h-8 min-w-0 flex-1 max-w-16 items-center py-3"
                >
                  <span
                    className={`relative block h-[3px] w-full overflow-hidden rounded-full ${
                      index === current ? "bg-white/20" : "bg-white/15"
                    }`}
                  >
                    {index === current && (
                      <motion.span
                        key={`${activeSlide.id}-progress`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: AUTOPLAY_DELAY / 1000,
                          ease: "linear",
                        }}
                        className="absolute inset-0 origin-left rounded-full bg-[#26A7EB]"
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={slidePrev}
                aria-label="Previous slide"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/80 transition hover:border-[#26A7EB]/70 hover:bg-[#26A7EB]/15 sm:h-11 sm:w-11"
              >
                <ChevronLeft size={19} />
              </button>
              <button
                type="button"
                onClick={slideNext}
                aria-label="Next slide"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/80 transition hover:border-[#26A7EB]/70 hover:bg-[#26A7EB]/15 sm:h-11 sm:w-11"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#26A7EB]/50 to-transparent" />
    </section>
  );
}
