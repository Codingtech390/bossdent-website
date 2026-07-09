// app/products/[slug]/ProductDetailClient.js
"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Phone,
  Mail,
  CheckCircle,
  Shield,
  Truck,
  Package,
  Lock,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Info,
  Star,
  Award,
  Zap,
  BarChart2,
  BookOpen,
  Heart,
} from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

// ─── Constants ────────────────────────────────────────────────────────────────

const TRUST_BADGES = [
  { icon: Shield, label: "Quality Assured" },
  { icon: Truck, label: "Fast Delivery" },
  { icon: Package, label: "Expert Support" },
  { icon: Lock, label: "Secure Packaging" },
];

// const TABS = [
//   { id: "overview", label: "Overview", icon: BookOpen },
//   { id: "features", label: "Features", icon: Zap },
//   { id: "specifications", label: "Specifications", icon: BarChart2 },
//   { id: "usage", label: "Usage Instructions", icon: Info },
// ];

const getTabs = (product) => [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "features", label: "Features", icon: Zap },
  { id: "specifications", label: "Specifications", icon: BarChart2 },
  ...(product.variants
    ? [{ id: "variants", label: "Variants", icon: Package }]
    : []),
  { id: "usage", label: "Usage Instructions", icon: Info },
];

// ─── ImageGallery ─────────────────────────────────────────────────────────────

function ImageGallery({ images, productName }) {
  const [selected, setSelected] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const prev = () =>
    setSelected((s) => (s - 1 + images.length) % images.length);
  const next = () => setSelected((s) => (s + 1) % images.length);

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative group bg-gradient-to-br from-[#f4f5ff] via-white to-[#ecf5fb] rounded-3xl border border-gray-100 overflow-hidden h-[440px] flex items-center justify-center shadow-sm">
        {/* Decorative rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-80 h-80 rounded-full border border-dashed border-[#1B4873]/8" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-56 h-56 rounded-full bg-white/40" />
        </div>

        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 z-20 w-10 h-10 rounded-full bg-white/90 shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#1B4873] hover:border-[#1B4873]/30 transition-all opacity-0 group-hover:opacity-100 hover:scale-105"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 z-20 w-10 h-10 rounded-full bg-white/90 shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#1B4873] hover:border-[#1B4873]/30 transition-all opacity-0 group-hover:opacity-100 hover:scale-105"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        {/* Zoom btn */}
        <button
          onClick={() => setZoomed(true)}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-xl bg-white/90 shadow border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#1B4873] transition-all opacity-0 group-hover:opacity-100"
        >
          <ZoomIn size={16} />
        </button>

        <img
          src={images[selected]}
          alt={productName}
          className="relative z-10 w-full h-full object-contain p-8 transition-all duration-500 hover:scale-105 drop-shadow-xl"
        />

        {/* Counter pill */}
        {images.length > 1 && (
          <span className="absolute bottom-4 right-4 z-20 bg-white/90 backdrop-blur-sm text-[#1B4873] text-xs font-bold px-3 py-1 rounded-full shadow border border-gray-100">
            {selected + 1} / {images.length}
          </span>
        )}
      </div>
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`relative w-full h-25 rounded-2xl overflow-hidden border-2 transition-all bg-gradient-to-br from-[#f4f5ff] to-[#ecf5fb] flex items-center justify-center p-2 ${
                selected === idx
                  ? "border-[#26A7EB] shadow-md shadow-[#26A7EB]/20"
                  : "border-transparent hover:border-[#1B4873]/25"
              }`}
            >
              <img
                src={img}
                alt={`view ${idx + 1}`}
                className="w-full h-full object-contain"
              />

              {selected === idx && (
                <span className="absolute inset-0 rounded-2xl ring-2 ring-[#26A7EB]/40" />
              )}
            </button>
          ))}
        </div>
      )}{" "}
      {/* Lightbox */}
      {zoomed && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setZoomed(false)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-3xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomed(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors text-lg font-bold"
            >
              ✕
            </button>
            <img
              src={images[selected]}
              alt={productName}
              className="w-full h-auto object-contain max-h-[70vh]"
            />
          </div>
        </div>
      )}
    </div>
  );
}

// ─── TrustBadges ─────────────────────────────────────────────────────────────

function TrustBadges() {
  return (
    <div className="grid grid-cols-4 gap-2 py-4 border-t border-b border-gray-100">
      {TRUST_BADGES.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex flex-col items-center gap-1.5 text-center"
        >
          <div className="w-9 h-9 rounded-xl bg-[#f4f5ff] flex items-center justify-center">
            <Icon size={16} className="text-[#1B4873]" />
          </div>
          <p className="text-[11px] font-semibold text-gray-500 leading-tight">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}

// ─── InlineFeatures (shown in product info column) ───────────────────────────

function InlineFeatures({ features }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {features.slice(0, 6).map((f) => (
        <div key={f} className="flex items-center gap-2">
          <CheckCircle size={14} className="text-[#26A7EB] shrink-0" />
          <span className="text-[13px] text-gray-600 leading-snug">{f}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Overview Tab ─────────────────────────────────────────────────────────────

function OverviewTab({ product }) {
  // Highlight cards derived from features
  const highlights = [
    {
      icon: Zap,
      title: "Smooth & Precise Shaping",
      desc: "Optimized flutes for clean cutting.",
    },
    {
      icon: Heart,
      title: "Enhanced Flexibility",
      desc: "Ideal for curved canals and complex anatomy.",
    },
    {
      icon: Shield,
      title: "Heat Treated Strength",
      desc: "Improved durability and fatigue resistance.",
    },
    {
      icon: Award,
      title: "Safe & Efficient",
      desc: "Non-cutting tip ensures safer progression.",
    },
  ];

  return (
    <div className="space-y-6">
      <p className="text-gray-600 leading-relaxed text-[15px]">
        {product.fullDescription}
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        {highlights.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="flex gap-3 p-4 rounded-2xl border border-gray-100 bg-gray-50/60 hover:border-[#1B4873]/20 hover:bg-[#f4f5ff]/50 transition-all"
          >
            <div className="w-9 h-9 rounded-xl bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm">
              <Icon size={16} className="text-[#26A7EB]" />
            </div>
            <div>
              <p className="text-[13px] font-semibold text-gray-800 mb-0.5">
                {title}
              </p>
              <p className="text-[12px] text-gray-500 leading-snug">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Features Tab ─────────────────────────────────────────────────────────────

function FeaturesTab({ features }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {features.map((feature, idx) => (
        <div
          key={feature}
          className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-100 hover:border-[#26A7EB]/30 hover:shadow-sm transition-all group"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#ecf5fb] to-[#fde8d8] flex items-center justify-center shrink-0">
            <CheckCircle size={15} className="text-[#26A7EB]" />
          </div>
          <p className="text-[14px] text-gray-700 group-hover:text-gray-900 transition-colors pt-1 leading-snug">
            {feature}
          </p>
        </div>
      ))}
    </div>
  );
}

// ─── Specifications Tab ───────────────────────────────────────────────────────

function SpecificationsTab({ specifications }) {
  const entries = Object.entries(specifications);
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100">
      {entries.map(([key, value], idx) => (
        <div
          key={key}
          className={`flex items-center justify-between px-6 py-4 border-b border-gray-50 last:border-0 transition-colors hover:bg-[#f4f5ff]/40 ${
            idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
          }`}
        >
          <span className="text-[13px] font-semibold text-[#1B4873]">
            {key}
          </span>
          <span className="text-[13px] text-gray-700 text-right max-w-[55%]">
            {value}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Usage Tab ────────────────────────────────────────────────────────────────

function UsageTab({ usageInstructions }) {
  return (
    <div className="bg-gradient-to-br from-[#ecf5fb] to-[#fff8f4] rounded-2xl p-6 border border-orange-100/60">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 bg-[#26A7EB] rounded-xl flex items-center justify-center">
          <Info size={13} className="text-white" />
        </div>
        <h3 className="text-[15px] font-bold text-gray-900">
          Step-by-Step Instructions
        </h3>
      </div>
      <ol className="space-y-3">
        {usageInstructions.map((instruction, idx) => (
          <li key={idx} className="flex gap-4 items-start">
            <span className="shrink-0 w-7 h-7 bg-[#26A7EB] text-white rounded-full flex items-center justify-center text-[12px] font-bold shadow-sm">
              {idx + 1}
            </span>
            <p className="text-[14px] text-gray-700 leading-relaxed pt-0.5">
              {instruction}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function VariantsTab({ variants }) {
  const VARIANT_LABELS = {
    assorted1: "Assorted Pack 1",
    assorted2: "Assorted Pack 2",
    glidePathFile: "Glide Path Files",
    cuttingShapingFile: "Cutting & Shaping Files",
    largeAssorted: "Large Assorted",
    protaperSystem: "Protaper System",
  };

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {Object.entries(variants).map(([key, sizes]) => (
        <div
          key={key}
          className="rounded-2xl border border-gray-100 bg-gray-50/60 overflow-hidden"
        >
          <div className="px-4 py-3 bg-[#1B4873] text-white">
            <p className="text-[13px] font-bold tracking-wide">
              {VARIANT_LABELS[key] || key}
            </p>
          </div>
          <div className="p-3 flex flex-wrap gap-2">
            {sizes.map((size) => (
              <span
                key={size}
                className="inline-block bg-white border border-[#26A7EB]/30 text-[#1B4873] text-[12px] font-semibold px-3 py-1.5 rounded-lg hover:bg-[#ecf5fb] transition-colors"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Tabbed Section (sidebar nav + content) ───────────────────────────────────

function TabSection({ product }) {
  const [activeTab, setActiveTab] = useState("overview");
  const TABS = getTabs(product);

  return (
    <div className="mt-16 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="md:w-52 shrink-0 border-b md:border-b-0 md:border-r border-gray-100 bg-gray-50/60 p-3 flex md:flex-col gap-1">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-left text-[13px] font-medium transition-all w-full ${
                activeTab === id
                  ? "bg-[#1B4873] text-white shadow-md"
                  : "text-gray-500 hover:bg-white hover:text-gray-900 hover:shadow-sm"
              }`}
            >
              <Icon size={15} className="shrink-0" />
              <span className="truncate">{label}</span>
            </button>
          ))}
        </aside>

        {/* Content */}
        <div className="flex-1 p-6 md:p-8">
          {activeTab === "overview" && <OverviewTab product={product} />}
          {activeTab === "features" && (
            <FeaturesTab features={product.features} />
          )}
          {activeTab === "specifications" && (
            <SpecificationsTab specifications={product.specifications} />
          )}
          {activeTab === "variants" && product.variants && (
            <VariantsTab variants={product.variants} />
          )}
          {activeTab === "usage" && (
            <UsageTab usageInstructions={product.usageInstructions} />
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main ProductDetailClient ─────────────────────────────────────────────────

export default function ProductDetailClient({ product }) {
  const { setIsOpen, setSelectedProduct } = useQuoteModal();
  const categorySlug = product.slug;

  const openQuoteModal = () => {
    setSelectedProduct(product.name);
    setIsOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#f8f9fc]">
      {/* ── Breadcrumb ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center gap-2 text-sm text-gray-400 flex-wrap">
            <Link href="/" className="hover:text-[#26A7EB] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/products"
              className="hover:text-[#26A7EB] transition-colors"
            >
              Products
            </Link>
            <span>/</span>
            <Link
              href={`/products/category/${categorySlug}`}
              className="hover:text-[#26A7EB] transition-colors"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-gray-700 font-medium truncate max-w-[200px]">
              {product.name}
            </span>
          </nav>
        </div>
      </section>

      {/* ── Product Hero ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-[13px] text-[#1B4873] hover:text-[#26A7EB] font-medium transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 xl:gap-16">
            {/* Left – Gallery */}
            <ImageGallery images={product.images} productName={product.name} />

            {/* Right – Info */}
            <div className="flex flex-col gap-5">
              {/* Category badge */}
              <div>
                <span className="inline-flex items-center gap-1.5 bg-[#1B4873] text-white text-[11px] font-bold px-3 py-1.5 rounded-full tracking-widest uppercase">
                  <Star size={10} />
                  {product.category}
                </span>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight mb-2">
                  {product.name}
                </h1>
                <p className="text-[16px] text-[#26A7EB] font-semibold">
                  {product.subtitle}
                </p>
              </div>

              {/* Divider accent */}
              <div className="flex items-center gap-2">
                <div className="h-0.5 w-8 bg-[#1B4873] rounded-full" />
                <div className="w-1.5 h-1.5 bg-[#26A7EB] rounded-full" />
                <div className="h-0.5 w-8 bg-[#26A7EB] rounded-full" />
              </div>

              {/* Short description */}
              <p className="text-[14px] text-gray-500 leading-relaxed">
                {product.fullDescription.slice(0, 220)}…
              </p>

              {/* Inline features */}
              <InlineFeatures features={product.features} />

              {/* ── Price & CTA Card ── */}
              <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm relative overflow-hidden">
                {/* soft glow blobs */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#26A7EB]/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#1B4873]/6 rounded-full blur-xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="mb-4">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-0.5">
                      Price
                    </p>
                    {product.price && product.price !== "Contact for Price" ? (
                      <p className="text-2xl font-extrabold text-[#1B4873]">
                        {product.price}
                      </p>
                    ) : (
                      <span className="text-2xl font-extrabold text-[#1B4873]">
                        Contact for Price
                      </span>
                    )}
                  </div>{" "}
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="tel:+919810768600"
                      className="flex items-center justify-center gap-2 bg-[#26A7EB] hover:bg-[#2193cf] active:scale-95 text-white px-4 py-3 rounded-xl text-[13px] font-bold transition-all shadow-sm"
                    >
                      <Phone size={16} />
                      Call Now
                    </a>
                    <button
                      onClick={openQuoteModal}
                      className="flex items-center justify-center gap-2 bg-[#1B4873] hover:bg-[#163a5c] active:scale-95 text-white px-4 py-3 rounded-xl text-[13px] font-bold transition-all shadow-sm"
                    >
                      <Mail size={16} />
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <TrustBadges />
            </div>
          </div>

          {/* ── Tabbed Details ── */}
          <TabSection product={product} />
        </div>
      </section>

      {/* ── Bottom CTA Banner ── */}
      <section className="mt-8 mx-4 sm:mx-6 lg:mx-8 mb-8 max-w-7xl lg:mx-auto rounded-3xl bg-[#1B4873] overflow-hidden relative">
        {/* cross pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 px-6 py-8 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
              <Package size={22} className="text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-[17px] leading-tight">
                Looking for Bulk Orders or Custom Solutions?
              </p>
              <p className="text-white/70 text-[13px] mt-0.5">
                We provide tailored solutions for clinics, hospitals, and
                distributors.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="tel:+919810768600"
              className="inline-flex items-center justify-center gap-2 bg-[#26A7EB] hover:bg-[#2193cf] text-white px-6 py-3 rounded-xl text-[13px] font-bold transition-all whitespace-nowrap"
            >
              <Phone size={16} />
              +91 9810-76-8600
            </a>
            <button
              onClick={openQuoteModal}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#1B4873] px-6 py-3 rounded-xl text-[13px] font-bold transition-all whitespace-nowrap"
            >
              Contact Us Today
              <ArrowLeft size={14} className="rotate-180" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
