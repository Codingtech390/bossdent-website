// app/page.js
import HeroSlider from "@/components/home/HeroSlider";
import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";

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

// ─── Constants ────────────────────────────────

const TRUST_ITEMS = [
  "International Quality Products",
  "Trusted by Dental Professionals",
  "Regular Distribution Network",
];

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
    badgeColor: "bg-[#26A7EB]",
  },
  {
    id: 2,
    name: "Premium Handpiece",
    category: "handpieces",
    categoryLabel: "Handpieces",
    shortDesc:
      "Premium stainless steel handpiece with ergonomic design and super torque",
    price: "Contact for Price",
    image:
      "https://res.cloudinary.com/dk4npblv3/image/upload/v1779515585/PrimiumHandpices_mpjyuk.png",
    slug: "category/handpieces",
    features: [
      "Stainless steel body",
      "Super torque",
      "Ergonomic design",
      "Ceramic bearings",
    ],
    badge: "Premium",
    badgeColor: "bg-[#1B4873]",
  },
  {
    id: 3,
    name: "Universal Zoom Loupe",
    category: "magnification",
    categoryLabel: "Magnification",
    shortDesc:
      "Professional magnification system with LED light and adjustable optics",
    price: "Contact for Price",
    image:
      "https://res.cloudinary.com/dk4npblv3/image/upload/v1773127886/zoomloop_ldm7bv.png",
    slug: "category/magnification",
    features: [
      "Light Weight",
      "Wireless Battery",
      "Adjustable Angle & Elevation",
      "New Lens Technology",
    ],
    badge: "New",
    badgeColor: "bg-green-600",
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
    badge: "Material",
    badgeColor: "bg-amber-600",
  },
  {
    id: 6,
    name: "Boss Spray",
    category: "maintenance",
    categoryLabel: "Maintenance",
    shortDesc:
      "Premium handpiece lubricant spray providing effective maintenance",
    price: "Contact for Price",
    image:
      "https://res.cloudinary.com/dk4npblv3/image/upload/v1779516675/BossSpray_cleanup_ioycwn.png",
    slug: "category/maintenance",
    features: [
      "Quantity 500ml",
      "Premium Quality",
      "Odourless",
      "Best Lubrication For Handpiece",
    ],
    badge: "Essential",
    badgeColor: "bg-cyan-600",
  },
];

const WHY_CHOOSE_ITEMS = [
  {
    gradient: "from-[#26A7EB] to-[#1B4873]",
    title: "Quality First",
    desc: "International quality products with ISO certification and rigorous testing",
    svgPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    gradient: "from-[#1B4873] to-[#163a5c]",
    title: "Widest Range of Products",
    desc: "Complete dental solutions from endodontic files to advanced equipment",
    svgPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    gradient: "from-[#26A7EB] to-[#1B4873]",
    title: "Support on Sales",
    desc: "Dedicated sales support and technical assistance for all products",
    svgPath:
      "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    gradient: "from-[#1B4873] to-[#163a5c]",
    title: "Trusted Excellence",
    desc: "Trusted name in dental excellence with regular distribution",
    svgPath:
      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

const HOW_TO_ORDER_STEPS = [
  {
    step: 1,
    gradient: "from-[#26A7EB] to-[#1B4873]",
    title: "Browse Products",
    desc: "Explore our comprehensive catalog of international quality dental products",
  },
  {
    step: 2,
    gradient: "from-[#1B4873] to-[#163a5c]",
    title: "Contact for Quote",
    desc: "Get in touch with our sales team for pricing and product details",
  },
  {
    step: 3,
    gradient: "from-[#26A7EB] to-[#1B4873]",
    title: "Receive & Support",
    desc: "Get your equipment with dedicated support and maintenance guidance",
  },
];

const CATEGORY_CARDS = [
  {
    href: "/products/category/endodontic-files",
    gradient: "from-[#1B4873] to-[#163a5c]",
    title: "Endodontic Files",
    desc: "E-Curve rotary files with CTA wire technology",
    arrowColor: "text-white",
  },
  {
    href: "/products/category/handpieces",
    gradient: "from-[#26A7EB] to-[#1B4873]",
    title: "Handpieces",
    desc: "LED, mini head, and implant handpieces",
    arrowColor: "text-white",
  },
  {
    href: "/products/category/accessories",
    gradient: "from-[#1B4873] to-[#163a5c]",
    title: "Accessories",
    desc: "Loupes, sprays, wax, and maintenance tools",
    arrowColor: "text-white",
  },
];

// ─── Page ─────────────────────────────────────

export default function Home() {
  return (
    <main>
      {/* ── Hero Slider ── */}
      <HeroSlider />

      {/* ── Featured Products ── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-[#26A7EB] font-semibold tracking-widest text-xs uppercase mb-3">
              Premium Collection
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4873] mb-4">
              Our Premium Products
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              International quality dental products designed for precision,
              efficiency, and predictable clinical outcomes
            </p>
            {/* Decorative underline */}
            <div className="flex items-center justify-center gap-2 mt-5">
              <div className="h-0.5 w-12 bg-[#1B4873] rounded" />
              <div className="h-1.5 w-1.5 bg-[#26A7EB] rounded-full" />
              <div className="h-0.5 w-12 bg-[#26A7EB] rounded" />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {FEATURED_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col shadow-sm"
              >
                {/* ── Image Container ── */}
                <div className="relative h-56 bg-gradient-to-br from-[#f0f2ff] to-[#ecf5fb] flex items-center justify-center overflow-hidden p-4">
                  {/* Decorative circle behind image */}
                  <div className="absolute w-44 h-44 rounded-full border border-dashed border-[#1B4873]/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute w-32 h-32 rounded-full bg-white/50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                  {/* ✅ IMAGE FIX: w-full h-full object-contain */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="relative z-10 w-full h-full object-fit transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                  />

                  {/* Badge — top left */}
                  <span
                    className={`absolute top-3 left-3 ${product.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide uppercase shadow z-20`}
                  >
                    {product.badge}
                  </span>

                  {/* Category pill — top right */}
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#1B4873] text-[10px] font-semibold px-2.5 py-1 rounded-full shadow z-20">
                    {product.categoryLabel}
                  </span>
                </div>

                {/* Animated accent bar on hover */}
                <div className="h-0.5 bg-gradient-to-r from-[#1B4873] to-[#26A7EB] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                {/* ── Card Content ── */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-gray-900 mb-1.5 group-hover:text-[#26A7EB] transition-colors duration-200">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                    {product.shortDesc}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-5">
                    {product.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="text-xs text-gray-500 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-[#26A7EB] rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-sm font-bold text-[#1B4873]">
                      {product.price}
                    </span>

                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#26A7EB] hover:bg-[#2193cf] px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm"
                    >
                      View Details
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#1B4873] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#163a5c] transition-colors text-lg shadow-lg hover:shadow-xl"
            >
              <ShoppingCart size={22} />
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Bossdent ── */}
      <section className="py-16 px-4 bg-[#ecf5fb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4873] mb-4">
              What Sets Us Apart?
            </h2>
            <p className="text-gray-600 text-lg">
              Committed to serve dental fraternity with excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_ITEMS.map(({ gradient, title, desc, svgPath }) => (
              <div
                key={title}
                className="text-center bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={svgPath}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shop by Category ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4873] mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 text-lg">
              Find the perfect equipment for your dental practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CATEGORY_CARDS.map(
              ({ href, gradient, title, desc, arrowColor }) => (
                <Link
                  key={href}
                  href={href}
                  className={`group relative overflow-hidden rounded-xl h-64 bg-gradient-to-br ${gradient}`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                  <div className="relative h-full flex flex-col justify-end p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{title}</h3>
                    <p className="text-white/90 mb-4">{desc}</p>
                    <span
                      className={`inline-flex items-center gap-2 ${arrowColor} font-semibold`}
                    >
                      Explore <ArrowRight size={20} />
                    </span>
                  </div>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── How to Order ── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4873] mb-4">
              How to Order
            </h2>
            <p className="text-gray-600 text-lg">
              Simple process to get premium dental equipment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {HOW_TO_ORDER_STEPS.map(({ step, gradient, title, desc }) => (
              <div key={step} className="text-center">
                <div
                  className={`w-24 h-24 bg-gradient-to-br ${gradient} text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-xl`}
                >
                  {step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#1B4873] to-[#163a5c] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Your One Stop Solution for All Dental Equipments
          </h2>
          <p className="text-white/90 text-xl mb-8">
            Empowering dental professionals with precision tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-[#26A7EB] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2193cf] transition-colors text-lg shadow-xl"
            >
              <ShoppingCart size={22} />
              Browse Products
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1B4873] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-xl"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
