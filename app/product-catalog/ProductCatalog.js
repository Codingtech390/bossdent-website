"use client";
import Link from "next/link";
import { Package, ShieldCheck, Truck, Users } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

const ProductCatalog = () => {
  const { setIsOpen } = useQuoteModal();

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
      <section
        className="relative text-white min-h-[380px] md:min-h-[450px] flex items-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `
url('https://res.cloudinary.com/dk4npblv3/image/upload/v1779530811/Gemini_Generated_Image_771ht5771ht5771h_nuhxjv.png'    `,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B4873]/52 to-[#163a5c]/82"></div>

        {/* Decorative blur */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#26A7EB]/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <Package size={18} className="mr-2" />
            Premium Dental Equipment
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Dental Equipment
            <span className="block text-[#7fd6ff]">Product Catalog</span>
          </h1>

          <p className="max-w-3xl mx-auto text-white/85 text-lg md:text-xl leading-relaxed">
            Explore Bossdent Global’s complete range of premium dental chairs,
            surgical instruments, sterilization systems, and advanced clinic
            equipment designed for modern dental practices.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="bg-[#26A7EB] hover:bg-[#2193cf] px-8 py-3 rounded-xl font-semibold transition"
            >
              Request Full Catalog
            </Link>

            <Link
              href="/products"
              className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
      {/* Intro Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Premium Dental Solutions for Clinics & Hospitals
        </h2>
        <p className="text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
          Bossdent Global is a trusted supplier of high-quality dental equipment
          across India. Our product catalog includes everything required to set
          up or upgrade a dental clinic — from ergonomic dental chairs to
          precision surgical instruments and sterilization equipment. We focus
          on reliability, safety standards, and competitive wholesale pricing.
        </p>
      </section>

      {/* Product Categories */}
      <section className="bg-[#f9fafb] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Product Categories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Dental Chairs
              </h3>
              <p className="text-gray-600 mb-6">
                Ergonomic and technologically advanced dental chairs designed
                for patient comfort and efficient workflow in modern clinics.
              </p>
              <Link
                href="/products"
                className="text-[#26A7EB] font-semibold hover:underline"
              >
                View Products →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Surgical Instruments
              </h3>
              <p className="text-gray-600 mb-6">
                High-precision dental instruments built for durability,
                sterilization safety, and long-term professional use.
              </p>
              <Link
                href="/products"
                className="text-[#26A7EB] font-semibold hover:underline"
              >
                View Products →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Sterilization Equipment
              </h3>
              <p className="text-gray-600 mb-6">
                Advanced sterilizers and infection-control systems to maintain
                the highest hygiene standards in dental practices.
              </p>
              <Link
                href="/products"
                className="text-[#26A7EB] font-semibold hover:underline"
              >
                View Products →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Bossdent Global?
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-3">
                <ShieldCheck className="text-[#26A7EB]" size={20} />
                Premium Quality & Certified Products
              </li>
              <li className="flex items-center gap-3">
                <Package className="text-[#26A7EB]" size={20} />
                Competitive Wholesale Pricing
              </li>
              <li className="flex items-center gap-3">
                <Truck className="text-[#26A7EB]" size={20} />
                Pan-India Delivery Support
              </li>
              <li className="flex items-center gap-3">
                <Users className="text-[#26A7EB]" size={20} />
                Dedicated Customer Assistance
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-[#1B4873] to-[#163a5c] text-white p-10 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Bulk Orders & Distributor Inquiries
            </h3>
            <p className="text-gray-300 mb-6">
              Looking for wholesale pricing or bulk supply solutions? Contact
              our team for customized quotations and partnership opportunities.
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-[#26A7EB] hover:bg-[#2193cf] px-6 py-3 rounded-lg font-semibold transition"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductCatalog;
