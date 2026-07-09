"use client";

import Link from "next/link";
import { Map, Home, Info, Phone, FileText, Settings } from "lucide-react";

export default function SiteMap() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1B4873] to-[#163a5c] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <Map size={36} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Website Sitemap
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Explore all important pages of Bossdent Global website in one place.
          </p>
        </div>
      </section>

      {/* Sitemap Links Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {/* Main Pages */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 bg-gradient-to-br from-[#1B4873] to-[#163a5c] rounded-lg flex items-center justify-center mb-4">
              <Home className="text-white" size={26} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Main Pages</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/" className="hover:text-[#1B4873] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-[#1B4873] transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#1B4873] transition"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-[#1B4873] transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal Pages */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 bg-gradient-to-br from-[#1B4873] to-[#163a5c] rounded-lg flex items-center justify-center mb-4">
              <Settings className="text-white" size={26} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Support & Policies
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link
                  href="/technical-support"
                  className="hover:text-[#1B4873] transition"
                >
                  Technical Support
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-information"
                  className="hover:text-[#1B4873] transition"
                >
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link
                  href="/returns-warranty"
                  className="hover:text-[#1B4873] transition"
                >
                  Returns & Warranty
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#1B4873] transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#1B4873] to-[#163a5c] rounded-2xl p-10 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need Assistance?</h2>
            <p className="text-white/90 mb-8">
              If you are unable to find a specific page, feel free to contact
              our support team.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-[#26A7EB] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2193cf] transition"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
