"use client";

import { Truck, Clock, Globe, PackageCheck, AlertTriangle } from "lucide-react";

export default function Shipping() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[35vh] flex items-center text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dk4npblv3/image/upload/v1779534336/Gemini_Generated_Image_3kowgq3kowgq3kow_qtlsmr.png')",
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(27,72,115,0.50), rgba(22,58,92,0.55))",
          }}
        />

        {/* Pattern */}
        <div className="absolute inset-0 opacity-[0.06]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(255,255,255,.18) 1px, transparent 1px)
        `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10 py-24">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20">
            <Truck size={40} />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Shipping Policy
          </h1>

          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Learn about our order processing timelines, shipping methods,
            delivery schedules, and international shipping procedures at
            Bossdent Global.
          </p>
        </div>
      </section>
      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        {/* Card 1 */}
        <div className="bg-white border rounded-xl p-8 shadow-sm hover:shadow-md transition">
          <Clock className="text-[#26A7EB] mb-4" size={28} />
          <h2 className="text-xl font-semibold mb-3">
            1. Order Processing Time
          </h2>
          <p className="text-gray-600">
            Orders are processed within 1–3 business days after payment
            confirmation. Customized or bulk dental equipment orders may require
            additional preparation time.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border rounded-xl p-8 shadow-sm hover:shadow-md transition">
          <PackageCheck className="text-[#26A7EB] mb-4" size={28} />
          <h2 className="text-xl font-semibold mb-3">2. Shipping Methods</h2>
          <p className="text-gray-600">
            We collaborate with trusted courier and freight partners to ensure
            safe delivery of dental chairs, instruments, and clinic equipment
            across India and internationally.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border rounded-xl p-8 shadow-sm hover:shadow-md transition">
          <Truck className="text-[#26A7EB] mb-4" size={28} />
          <h2 className="text-xl font-semibold mb-3">3. Delivery Timeline</h2>
          <p className="text-gray-600">
            Delivery time depends on your region and selected shipping method.
            International orders may require additional time due to customs
            clearance procedures.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white border rounded-xl p-8 shadow-sm hover:shadow-md transition">
          <Globe className="text-[#26A7EB] mb-4" size={28} />
          <h2 className="text-xl font-semibold mb-3">
            4. International Shipping
          </h2>
          <p className="text-gray-600">
            Bossdent Global ships internationally. Import duties, customs
            charges, and local taxes (if applicable) are the responsibility of
            the customer.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white border rounded-xl p-8 shadow-sm hover:shadow-md transition md:col-span-2">
          <AlertTriangle className="text-[#26A7EB] mb-4" size={28} />
          <h2 className="text-xl font-semibold mb-3">
            5. Damaged or Lost Shipments
          </h2>
          <p className="text-gray-600">
            If your shipment arrives damaged or is lost during transit, please
            contact our support team immediately. We will investigate and
            provide a suitable resolution as quickly as possible.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Help With Your Shipment?
          </h2>
          <p className="text-gray-600 mb-8">
            For tracking details, delivery queries, or shipping assistance,
            contact our support team today.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-[#26A7EB] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2193cf] transition"
          >
            Contact Support
          </a>
        </div>
      </section>
    </main>
  );
}
