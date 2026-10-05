// app/page.js
import HeroSlider from "@/components/home/HeroSlider";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Headset,
  PackageCheck,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Truck,
} from "lucide-react";
import Link from "next/link";

// ─── Metadata ─────────────────────────────────

export const metadata = {
  title: "Bossdent Global | Dental Products Supplier in Delhi, India",
  description:
    "Buy affordable dental products online in India. Bossdent Global supplies ISO-certified rotary files, handpieces, loupes & dental materials. Wholesale available. Delhi-based distributor.",
  alternates: {
    canonical: "https://www.bossdentglobal.com",
  },
  keywords: [
    "dental products India",
    "Dental supplier Delhi",
    "Buy dental products online India",
    "Dental equipment India",
    "Dental products distributor India",
  ],
  openGraph: {
    title: "Bossdent Global | Dental Equipment Supplier",
    description:
      "Explore international quality dental equipment including rotary files, handpieces, loupes, and accessories.",
    url: "https://www.bossdentglobal.com",
    siteName: "BossDent Global",
    images: [
      {
        url: "/images/products/bossdentLogo.jpeg",
        width: 1200,
        height: 630,
        alt: "Bossdent Global Dental Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bossdent Global | Dental Equipment Supplier",
    description:
      "Buy international quality dental equipment including rotary files, handpieces, and accessories. Trusted supplier across India.",
    images: ["/images/products/bossdentLogo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      noarchive: false,
    },
    bingBot: {
      index: true,
      follow: true,
      noimageindex: false,
      noarchive: false,
    },
  },
};

// ─── Theme ────────────────────────────────────

const COLORS = {
  navy: "#163A5C",
  blue: "#1B4873",
  accent: "#26A7EB",
  pale: "#F2F8FC",
  border: "#E4EDF4",
};

// ─── Featured Products ────────────────────────

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "E-Curve Rotary Files",
    category: "endodontic-files",
    categoryLabel: "Endodontic Files",
    shortDesc: "For narrow canals with taper and non-cutting safety tip",
    price: "Contact for Price",
    image:
      "https://res.cloudinary.com/dk4npblv3/image/upload/v1779516768/flexfile_cleanup_kgqfy0.png",
    slug: "category/endodontic-files",
    features: ["Non-cutting tip", "ISO color coding", "21mm & 25mm length"],
    badge: "Best Seller",
    badgeColor: "bg-[#1B4873]",
  },
  {
    id: 2,
    name: "Premium Handpiece",
    category: "handpieces",
    categoryLabel: "Handpieces",
    shortDesc: "Premium stainless steel handpiece with ergonomic design and super torque",
    price: "Contact for Price",
    image:
      "https://res.cloudinary.com/dk4npblv3/image/upload/v1779515585/PrimiumHandpices_mpjyuk.png",
    slug: "category/handpieces",
    features: ["Stainless steel body", "Super torque", "Ergonomic design", "Ceramic bearings"],
    badge: "Premium",
    badgeColor: "bg-[#163A5C]",
  },
  {
    id: 3,
    name: "Universal Zoom Loupe",
    category: "magnification",
    categoryLabel: "Magnification",
    shortDesc: "Professional magnification system with LED light and adjustable optics",
    price: "Contact for Price",
    image: "https://res.cloudinary.com/dk4npblv3/image/upload/v1773127886/zoomloop_ldm7bv.png",
    slug: "category/magnification",
    features: [
      "Light Weight",
      "Wireless Battery",
      "Adjustable Angle & Elevation",
      "New Lens Technology",
    ],
    badge: "New Arrival",
    badgeColor: "bg-[#147D91]",
  },
  {
    id: 5,
    name: "Waxone Modelling Wax",
    category: "dental-materials",
    categoryLabel: "Dental Materials",
    shortDesc: "Base plate wax with smooth texture and low shrinkage",
    price: "Contact for Price",
    image:
      "https://res.cloudinary.com/dk4npblv3/image/upload/v1779516581/waxOne_cleanup_srfa9i.png",
    slug: "category/dental-materials",
    features: [
      "Base plate wax",
      "Optimal consistency",
      "Smooth texture for fine detailing",
      "Low shrinkage",
    ],
    badge: "Dental Material",
    badgeColor: "bg-[#956A25]",
  },
  {
    id: 6,
    name: "Boss Spray",
    category: "maintenance",
    categoryLabel: "Maintenance",
    shortDesc: "Premium handpiece lubricant spray providing effective maintenance",
    price: "Contact for Price",
    image:
      "https://res.cloudinary.com/dk4npblv3/image/upload/v1779516675/BossSpray_cleanup_ioycwn.png",
    slug: "category/maintenance",
    features: ["Quantity 500ml", "Premium Quality", "Odourless", "Best Lubrication For Handpiece"],
    badge: "Essential",
    badgeColor: "bg-[#246A8D]",
  },
];

// ─── Trust Indicators ─────────────────────────

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Quality-focused selection",
    desc: "Products for professional dental practice",
  },
  {
    icon: PackageCheck,
    title: "Broad product range",
    desc: "Materials, instruments and equipment",
  },
  {
    icon: Headset,
    title: "Sales assistance",
    desc: "Help with product and quote enquiries",
  },
  {
    icon: Truck,
    title: "Distribution support",
    desc: "Speak to our team about your requirements",
  },
];

// ─── Why Choose Bossdent ──────────────────────

const WHY_CHOOSE_ITEMS = [
  {
    icon: BadgeCheck,
    number: "01",
    title: "Quality First",
    desc: "A carefully presented selection of dental products for professional use.",
  },
  {
    icon: PackageCheck,
    number: "02",
    title: "A Wide Product Range",
    desc: "Explore endodontic files, handpieces, dental materials and equipment.",
  },
  {
    icon: Headset,
    number: "03",
    title: "Sales Support",
    desc: "Connect with our team for product information and pricing enquiries.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Professional Partnership",
    desc: "A customer-focused approach to dental product sourcing and distribution.",
  },
];

// ─── How to Order ─────────────────────────────

const HOW_TO_ORDER_STEPS = [
  {
    step: "01",
    title: "Explore the catalogue",
    desc: "Browse our product range and find the instruments or materials you need.",
  },
  {
    step: "02",
    title: "Request a quotation",
    desc: "Contact our sales team to enquire about pricing, availability and details.",
  },
  {
    step: "03",
    title: "Speak with our team",
    desc: "Coordinate your requirements and get assistance with your order.",
  },
];

// ─── Categories ───────────────────────────────

const CATEGORY_CARDS = [
  {
    href: "/products/category/endodontic-files",
    number: "01",
    title: "Endodontic Files",
    desc: "Explore files and instruments for endodontic procedures.",
    tag: "Precision instruments",
    icon: "E",
    background: "from-[#173B60] via-[#1B4873] to-[#287FB0]",
  },
  {
    href: "/products/category/handpieces",
    number: "02",
    title: "Handpieces",
    desc: "Discover handpieces and related clinical equipment.",
    tag: "Clinical equipment",
    icon: "H",
    background: "from-[#146B8A] via-[#168BB4] to-[#26A7EB]",
  },
  {
    href: "/products/category/accessories",
    number: "03",
    title: "Accessories",
    desc: "Browse supporting products, materials and maintenance essentials.",
    tag: "Practice essentials",
    icon: "A",
    background: "from-[#163A5C] via-[#28577C] to-[#4C86A8]",
  },
];

// ─── Reusable visual elements ─────────────────

function SectionHeading({ eyebrow, title, description, align = "center", light = false }) {
  const centered = align === "center";

  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : "text-left"}`}>
      <div
        className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] ${
          light
            ? "border-white/20 bg-white/10 text-white/90"
            : "border-[#D8EAF6] bg-[#EAF6FD] text-[#1B4873]"
        }`}
      >
        <Sparkles size={13} />
        {eyebrow}
      </div>

      <h2
        className={`text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[2.8rem] ${
          light ? "text-white" : "text-[#163A5C]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-sm leading-7 sm:text-base ${
            light ? "text-white/75" : "text-slate-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* ── Hero ── */}
      <HeroSlider />

      {/* ── Trust Strip ── */}
      <section className="relative z-10 border-y border-[#E5EEF5] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 py-5 sm:px-6 lg:grid-cols-4 lg:px-8 lg:py-7">
          {TRUST_ITEMS.map(({ icon: Icon, title, desc }, index) => (
            <div
              key={title}
              className={`flex items-start gap-3 px-3 py-3 sm:px-5 ${
                index > 1 ? "lg:border-l lg:border-[#E5EEF5]" : ""
              } ${index % 2 === 1 ? "border-l border-[#E5EEF5] lg:border-l-0" : ""} ${
                index >= 2 ? "border-t border-[#E5EEF5] lg:border-t-0" : ""
              }`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF6FD] text-[#1B4873]">
                <Icon size={19} strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-xs font-bold leading-5 text-[#163A5C] sm:text-sm">{title}</p>
                <p className="mt-1 text-[11px] leading-5 text-slate-500 sm:text-xs">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="relative bg-[#F6FAFD] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#DCEFFC]/50 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#E7F3FA]/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              align="left"
              eyebrow="The Bossdent selection"
              title="Products chosen for your practice"
              description="Explore our featured dental instruments, equipment and materials. Contact our team for product details and pricing."
            />

            <Link
              href="/products"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-[#D6E5F0] bg-white px-5 py-3 text-sm font-bold text-[#1B4873] shadow-sm transition-all duration-300 hover:border-[#26A7EB] hover:bg-[#F2F9FE]"
            >
              Explore catalogue
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {FEATURED_PRODUCTS.map((product) => (
              <article
                key={product.id}
                className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#E3ECF3] bg-white shadow-[0_4px_20px_rgba(22,58,92,0.035)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C7E4F5] hover:shadow-[0_18px_45px_rgba(22,58,92,0.11)]"
              >
                {/* Product image */}
                <Link
                  href={`/products/${product.slug}`}
                  aria-label={`View ${product.name}`}
                  className="relative block overflow-hidden border-b border-[#EDF2F6] bg-gradient-to-br from-[#F4F9FD] to-[#EAF4FB]"
                >
                  <div className="absolute inset-0 opacity-60">
                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-[#B9D9ED]/70" />
                    <div className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-white/60" />
                  </div>

                  <div className="relative flex h-56 items-center justify-center p-5 sm:h-52">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="relative z-10 h-full w-full object-contain drop-shadow-[0_10px_12px_rgba(22,58,92,0.10)] transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  <span
                    className={`absolute left-3 top-3 z-20 rounded-md ${product.badgeColor} px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-white shadow-sm`}
                  >
                    {product.badge}
                  </span>

                  <span className="absolute bottom-3 right-3 z-20 max-w-[65%] truncate rounded-md border border-white/80 bg-white/90 px-2.5 py-1 text-[9px] font-semibold text-[#1B4873] shadow-sm backdrop-blur">
                    {product.categoryLabel}
                  </span>
                </Link>

                {/* Product content */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="text-[15px] font-bold leading-6 tracking-[-0.02em] text-[#163A5C] transition-colors group-hover:text-[#168AC2]">
                    {product.name}
                  </h3>

                  <p className="mt-2 min-h-[60px] text-xs leading-5 text-slate-500">
                    {product.shortDesc}
                  </p>

                  <ul className="mb-5 mt-4 space-y-2">
                    {product.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-[11px] leading-4 text-slate-600"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E7F5FC] text-[#168AC2]">
                          <Check size={10} strokeWidth={3} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto border-t border-[#EDF2F6] pt-4">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-400">
                      Pricing
                    </p>

                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold leading-4 text-[#1B4873]">
                        {product.price}
                      </span>

                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#1B4873] px-3 py-2.5 text-[10px] font-bold text-white transition-all duration-200 hover:bg-[#26A7EB]"
                      >
                        Details
                        <ChevronRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:mt-14">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#163A5C] px-7 py-4 text-sm font-bold text-white shadow-[0_8px_24px_rgba(22,58,92,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1B4873] hover:shadow-[0_12px_30px_rgba(22,58,92,0.24)]"
            >
              <ShoppingCart size={18} />
              View all products
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="text-xs text-slate-500">
              Looking for a specific product? Browse the catalogue or contact our team.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Choose Bossdent ── */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <SectionHeading
              eyebrow="The Bossdent difference"
              title="A dependable partner for dental supplies"
              description="A straightforward product-discovery and enquiry experience, supported by a team focused on dental professionals."
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_ITEMS.map(({ icon: Icon, number, title, desc }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-[#E3ECF3] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8E5F5] hover:shadow-[0_16px_40px_rgba(22,58,92,0.08)] sm:p-7"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF6FD] text-[#1B4873] transition-colors group-hover:bg-[#1B4873] group-hover:text-white">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>
                  <span className="text-xs font-bold tracking-[0.15em] text-[#B5CBDC]">
                    {number}
                  </span>
                </div>

                <h3 className="text-base font-bold tracking-[-0.02em] text-[#163A5C]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{desc}</p>

                <div className="mt-6 h-1 w-10 rounded-full bg-[#26A7EB] transition-all duration-300 group-hover:w-16" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shop by Category ── */}
      <section className="bg-[#F4F8FB] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Explore the range"
              title="Find what your practice needs"
              description="Start with a product category and explore the range of instruments, equipment and clinical essentials."
            />

            <Link
              href="/products"
              className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-[#1B4873] transition-colors hover:text-[#168AC2]"
            >
              All categories
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {CATEGORY_CARDS.map(({ href, number, title, desc, tag, icon, background }) => (
              <Link
                key={href}
                href={href}
                className={`group relative isolate min-h-[285px] overflow-hidden rounded-2xl bg-gradient-to-br ${background} p-6 text-white shadow-[0_10px_30px_rgba(22,58,92,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(22,58,92,0.20)] sm:p-8`}
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0A2035]/60 via-transparent to-white/5" />
                <div className="absolute -right-12 -top-14 -z-10 h-48 w-48 rounded-full border border-white/15 transition-transform duration-500 group-hover:scale-125" />
                <div className="absolute -right-3 top-12 -z-10 h-28 w-28 rounded-full border border-white/10" />

                <div className="flex items-start justify-between">
                  <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white/90 backdrop-blur">
                    {tag}
                  </span>

                  <span className="text-xs font-semibold tracking-[0.18em] text-white/55">
                    {number}
                  </span>
                </div>

                <div className="mt-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-2xl font-bold text-white shadow-sm backdrop-blur transition-all duration-300 group-hover:rotate-[-5deg] group-hover:bg-white/20">
                  {icon}
                </div>

                <div className="mt-7">
                  <h3 className="text-xl font-bold tracking-[-0.025em] sm:text-2xl">{title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/75">{desc}</p>
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-white">
                  Explore category
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#1B4873]">
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Order ── */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Simple and straightforward"
            title="How to order from Bossdent"
            description="From exploring the catalogue to speaking with our team, getting started is simple."
          />

          <div className="relative mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            <div className="absolute left-[16.66%] right-[16.66%] top-8 hidden h-px bg-[#D7E8F3] md:block" />

            {HOW_TO_ORDER_STEPS.map(({ step, title, desc }) => (
              <article
                key={step}
                className="relative rounded-2xl border border-[#E3ECF3] bg-white p-6 text-center transition-all duration-300 hover:border-[#C8E5F5] hover:shadow-[0_16px_40px_rgba(22,58,92,0.07)] sm:p-8"
              >
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D8EAF6] bg-[#EAF6FD] text-lg font-bold text-[#1B4873] shadow-[0_0_0_8px_white]">
                  {step}
                </div>

                <h3 className="mt-7 text-lg font-bold tracking-[-0.02em] text-[#163A5C]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Premium CTA ── */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#163A5C] px-6 py-14 shadow-[0_24px_70px_rgba(22,58,92,0.20)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Decorative background */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(38,167,235,0.28),transparent_48%),radial-gradient(ellipse_at_bottom_left,rgba(38,167,235,0.16),transparent_40%)]" />

          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-5 -top-12 h-44 w-44 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-28 left-[35%] h-60 w-60 rounded-full bg-[#26A7EB]/10 blur-2xl" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/85 backdrop-blur">
              <Sparkles size={13} />
              Your dental supply partner
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              The right products for your dental practice
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Explore our product catalogue or get in touch with our team for pricing, availability
              and product enquiries.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#26A7EB] px-6 py-4 text-sm font-bold text-white shadow-[0_8px_25px_rgba(38,167,235,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1696D9] hover:shadow-[0_12px_30px_rgba(38,167,235,0.30)]"
              >
                <ShoppingCart size={17} />
                Browse products
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/25 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:border-white/50 hover:bg-white/15"
              >
                <Headset size={17} />
                Contact our team
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-medium text-white/65">
              <span className="inline-flex items-center gap-1.5">
                <Check size={13} className="text-[#7DD3FC]" />
                Product enquiries
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check size={13} className="text-[#7DD3FC]" />
                Pricing assistance
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check size={13} className="text-[#7DD3FC]" />
                Sales support
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
