"use client";

import Link from "next/link";
import {
  Package,
  Truck,
  BadgePercent,
  Building2,
  ClipboardList,
  Phone,
} from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function BulkOrders() {
  const { setIsOpen } = useQuoteModal();

  const benefits = [
    {
      icon: BadgePercent,
      title: "Competitive Wholesale Pricing",
      content:
        "Get special pricing and volume discounts on bulk purchases of dental chairs, instruments, and clinic equipment.",
    },
    {
      icon: Building2,
      title: "Complete Clinic Setup Solutions",
      content:
        "We provide end-to-end solutions for new dental clinics, hospital setups, and multi-branch expansions.",
    },
    {
      icon: Truck,
      title: "Reliable Nationwide & International Delivery",
      content:
        "Safe and timely logistics support for large shipments across India and global destinations.",
    },
    {
      icon: ClipboardList,
      title: "Customized Quotations",
      content:
        "Receive tailored quotations based on your specific equipment list and quantity requirements.",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section
        className="
relative
text-white
h-[420px]
md:h-[450px]
flex
items-center
overflow-hidden
bg-cover
bg-center
"
        style={{
          backgroundImage: `
      url('https://res.cloudinary.com/dk4npblv3/image/upload/v1779536116/Gemini_Generated_Image_39ucwk39ucwk39uc_zpvm4b.png')
    `,
        }}
      >
        {" "}
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1B4873]/67"></div>
        {/* Decorative Blur */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#26A7EB]/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/15 backdrop-blur-sm rounded-full mb-6">
            <Package size={36} />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            Bulk Orders &
            <span className="block text-[#7fd6ff]">Wholesale Supply</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Partner with Bossdent Global for large quantity purchases of premium
            dental equipment, medical instruments, and complete clinic setup
            solutions with reliable nationwide delivery.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-[#26A7EB] hover:bg-[#2193cf] px-8 py-3 rounded-xl font-semibold transition"
            >
              Get Bulk Quote
            </button>

            <Link
              href="/contact-us"
              className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition"
            >
              Contact Team
            </Link>
          </div>
        </div>
      </section>
      {/* Intro Section */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-[#ecf5fb] border-l-4 border-[#26A7EB] rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Trusted B2B Dental Equipment Supplier
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Bossdent Global specializes in bulk supply of high-quality dental
              chairs, surgical instruments, sterilization equipment, and clinic
              essentials. Whether you are setting up a new clinic, expanding
              your practice, or supplying multiple branches, we ensure reliable
              products, competitive pricing, and smooth logistics support.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us for Bulk Orders?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1B4873] to-[#163a5c] rounded-lg flex items-center justify-center">
                    <item.icon className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            How to Place a Bulk Order
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-semibold text-[#1B4873] mb-2">
                1. Share Your Requirement
              </h3>
              <p className="text-gray-700 text-sm">
                Send us your equipment list, required quantities, and delivery
                location details.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#1B4873] mb-2">
                2. Receive Custom Quotation
              </h3>
              <p className="text-gray-700 text-sm">
                Our team will provide a detailed quotation with pricing,
                timelines, and logistics details.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#1B4873] mb-2">
                3. Confirm & Dispatch
              </h3>
              <p className="text-gray-700 text-sm">
                Once confirmed, we process your order and arrange safe and
                timely shipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#1B4873] to-[#163a5c] rounded-xl p-10 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Place a Bulk Order?
            </h2>
            <p className="text-white/90 mb-8">
              Contact our team today to receive a customized quotation and
              expert consultation for your dental clinic or institution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-[#26A7EB] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2193cf] transition-colors"
              >
                <Phone size={18} />
                Get a Quote
              </button>

              <a
                href="tel:+919810768600"
                className="inline-flex items-center justify-center gap-2 bg-white/20 border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
              >
                Call: +91 9810-76-8600
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
