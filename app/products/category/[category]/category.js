// app/products/category/[category]/page.js
import Link from "next/link";
import { ArrowRight, ArrowLeft, ShoppingCart } from "lucide-react";
import { getProductsByCategory, getCategoryName } from "@/data/products";

// ─── Product Card ─────────────────────────────

function ProductCard({ product, categoryName }) {
  const bgGradients = [
    "from-[#f0f2ff] to-[#e8eaff]",
    "from-[#ecf5fb] to-[#fde8d8]",
    "from-[#f0f2ff] to-[#ecf5fb]",
    "from-[#eef9f0] to-[#e0f5e4]",
    "from-[#ecf5fb] to-[#f0f2ff]",
    "from-[#f5f0ff] to-[#ede8ff]",
    "from-[#f0f8ff] to-[#e0f0ff]",
    "from-[#fff8f0] to-[#ecf5fb]",
  ];

  const getBgById = (id) => bgGradients[id % bgGradients.length];

  return (
    <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col shadow-sm">
      {/* ── Image Container ── */}
      <div
        className={`relative h-56 bg-gradient-to-br ${getBgById(product.id)} flex items-center justify-center overflow-hidden p-4`}
      >
        {/* Decorative ring behind image */}
        <div className="absolute w-40 h-40 rounded-full border border-dashed border-[#1B4873]/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-28 h-28 rounded-full bg-white/40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* ✅ IMAGE FIX: w-full h-full object-contain */}
        <img
          src={product.image}
          alt={product.name}
          className="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
        />

        {/* Category Badge — top left */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#1B4873] text-[10px] font-semibold px-2.5 py-1 rounded-full shadow z-20">
          {categoryName}
        </span>
      </div>

      {/* Animated accent bar on hover */}
      <div className="h-0.5 bg-gradient-to-r from-[#1B4873] to-[#26A7EB] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

      {/* ── Content ── */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-base font-bold text-gray-900 mb-1.5 line-clamp-2 group-hover:text-[#26A7EB] transition-colors duration-200">
          {product.name}
        </h3>

        {/* Description */}
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
  );
}

// ─── Empty State ──────────────────────────────

function EmptyState() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Category Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The category you&apos;re looking for doesn&apos;t exist or has no
            products.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#26A7EB] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2193cf] transition-colors"
          >
            <ArrowLeft size={20} />
            Back to All Products
          </Link>
        </div>
      </section>
    </main>
  );
}

// ─── Page ─────────────────────────────────────

export default async function CategoryPage({ params }) {
  const { category } = await params;

  const products = getProductsByCategory(category);
  const categoryName = getCategoryName(category);

  if (products.length === 0) return <EmptyState />;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* ── Hero ── */}
      <section
        className="text-white py-16 md:py-20 relative overflow-hidden bg-fit bg-center"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dk4npblv3/image/upload/v1779530811/Gemini_Generated_Image_771ht5771ht5771h_nuhxjv.png')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#1B4873]/55"></div>

        {/* Pattern (optional) */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,...")`,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Back to All Products
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold mb-3">
            {categoryName}
          </h1>

          <p className="text-lg text-white/80 mb-6">
            Browse our complete range of {categoryName.toLowerCase()}
          </p>

          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
            <ShoppingCart size={16} />
            <span className="text-sm font-medium">
              {products.length} Products Available
            </span>
          </div>
        </div>
      </section>
      {/* ── Products Grid ── */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                categoryName={categoryName}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 bg-[#ecf5fb]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1B4873] mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Our experts can help you find the perfect products for your practice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919810768600"
              className="inline-flex items-center justify-center gap-2 bg-[#26A7EB] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2193cf] transition-colors"
            >
              Call: +91 9810-76-8600
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-[#1B4873] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#163a5c] transition-colors"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
