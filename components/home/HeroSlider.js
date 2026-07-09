"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Phone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const heroSlides = [
  {
    id: 1,
    title: "E-Curve Rotary Files",
    subtitle: "The Endo Revolution with CTA Wire Technology",
    description:
      "High fracture resistance and excellent flexibility with ISO standardized color coding. Available in multiple tapers for narrow, medium, and large canals.",
    image:
      "https://res.cloudinary.com/dk4npblv3/image/upload/v1773132057/flexfile_nnoe75.png",
    cta: "View Endodontic Files",
    ctaLink: "/products/category/endodontic-files",
    badge: "Precision Endodontics",
  },
  {
    id: 2,
    title: "Premium Handpiece",
    subtitle: "Ceramic Ball Bearings with Super Torque",
    description:
      "Ergonomic design with stainless steel body. User-friendly design for dental professionals, reducing procedural times for patient comfort.",
    image:
      "https://res.cloudinary.com/dk4npblv3/image/upload/v1773126829/handpices_mj7bos.png",
    cta: "Explore Handpieces",
    ctaLink: "/products/category/handpieces",
    badge: "Premium Quality",
  },
  {
    id: 3,
    title: "Universal Zoom Loupe",
    subtitle: "Magnification Beyond Imagination",
    description:
      "Work to your full potential with new lens technology, sharp vision, and shadow-free lighting system. Multiple magnification options for clinician comfort.",
    image:
      "https://res.cloudinary.com/dk4npblv3/image/upload/v1773128916/zoomloup_iy98xo.png",
    cta: "Discover Loupes",
    ctaLink: "/products/category/magnification",
    badge: "Enhanced Precision",
  },
  {
    id: 5,
    title: "Waxone Modelling Wax",
    subtitle: "Smooth Texture with Optimal Consistency",
    description:
      "High-quality base plate wax with excellent workability at various temperatures. Smooth texture and low shrinkage ensure precise modelling and detailing.",
    image:
      "https://res.cloudinary.com/dk4npblv3/image/upload/v1773130917/Gemini_Generated_Image_l7bvu0l7bvu0l7bv_udltr9.png",
    cta: "View Dental Materials",
    ctaLink: "/products/category/dental-materials",
    badge: "Reliable Modelling",
  },
  {
    id: 6,
    title: "Boss Oil Spray",
    subtitle: "Premium Handpiece Lubrication Solution",
    description:
      "500ml odourless lubricant spray designed for optimal handpiece maintenance. Reduces internal debris, enhances performance, and prolongs equipment life.",
    image:
      "https://res.cloudinary.com/dk4npblv3/image/upload/v1773130216/Gemini_Generated_Image_emxt3eemxt3eemxt_w51quc.png",
    cta: "Explore Maintenance Products",
    ctaLink: "/products/category/maintenance",
    badge: "Equipment Care",
  },
  {
    id: 7,
    title: "RVG Sleeves",
    subtitle: "Ultrasoft Disposable Sensor Sleeves",
    description:
      "Universal compatibility with all RVG sensors to prevent cross-contamination. Comfortable ultrasoft texture for patient ease and quick handling for clinicians.",
    image:
      "https://res.cloudinary.com/dk4npblv3/image/upload/v1773130497/Gemini_Generated_Image_j45abmj45abmj45a_ksuotz.png",
    cta: "Explore Accessories",
    ctaLink: "/products/category/accessories",
    badge: "Hygiene Excellence",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const { setIsOpen } = useQuoteModal();

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(slideNext, 6000);
    return () => clearInterval(timer);
  }, [slideNext]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full h-[550px] lg:h-screen overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 32 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          {/* Visual Layer */}
          <div className="relative w-full h-full">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 7 }}
              src={heroSlides[current].image}
              alt={heroSlides[current].title}
              className="w-full h-full object-cover"
            />
            {/* Professional Dark Gradient - No Box Look */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
          </div>

          {/* Content Layer */}
          <div className="absolute inset-0 z-10 flex items-center">
            <div className="container mx-auto px-6 lg:px-24">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block mb-4"
                >
                  <span className="bg-[#26A7EB] text-white text-[11px] font-bold uppercase tracking-[3px] px-3 py-1.5 rounded-sm">
                    {heroSlides[current].badge}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-[1.1]"
                >
                  {heroSlides[current].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl md:text-2xl text-[#26A7EB] font-medium mb-6 leading-tight"
                >
                  {heroSlides[current].subtitle}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed max-w-lg font-light"
                >
                  {heroSlides[current].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap gap-5"
                >
                  <Link
                    href={heroSlides[current].ctaLink}
                    className="group flex items-center gap-3 bg-[#26A7EB] hover:bg-white text-white hover:text-[#26A7EB] px-8 py-4 rounded-full font-bold transition-all shadow-2xl"
                  >
                    <ShoppingBag size={20} />
                    {heroSlides[current].cta}
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>

                  <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-3 bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 backdrop-blur-md px-8 py-4 rounded-full font-bold transition-all"
                  >
                    <Phone size={20} />
                    Get a Quote
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Extreme Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 lg:px-8 pointer-events-none z-20">
        <button
          onClick={slidePrev}
          className="pointer-events-auto p-4 rounded-full bg-black/10 hover:bg-[#26A7EB] text-white backdrop-blur-sm border border-white/10 transition-all group"
        >
          <ChevronLeft
            size={28}
            className="group-hover:-translate-x-1 transition-transform"
          />
        </button>
        <button
          onClick={slideNext}
          className="pointer-events-auto p-4 rounded-full bg-black/10 hover:bg-[#26A7EB] text-white backdrop-blur-sm border border-white/10 transition-all group"
        >
          <ChevronRight
            size={28}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>

      {/* Professional Progress Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="group py-4 px-1"
          >
            <div
              className={`h-[3px] transition-all duration-500 rounded-full ${
                idx === current
                  ? "w-12 bg-[#26A7EB]"
                  : "w-6 bg-white/20 group-hover:bg-white/40"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
