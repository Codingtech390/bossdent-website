"use client";

import Link from "next/link";
import {
  Wrench,
  Headphones,
  ShieldCheck,
  Clock,
  Phone,
  Mail,
  Settings,
} from "lucide-react";

export default function TechnicalSupport() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 md:py-28 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `
      url('https://res.cloudinary.com/dk4npblv3/image/upload/v1779535262/Gemini_Generated_Image_6vrtbi6vrtbi6vrt_slowrz.png')
    `,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1B4873]/52"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/15 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <Wrench size={36} />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Technical Support
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Professional installation assistance, maintenance guidance, and
            troubleshooting support for all Bossdent Global dental equipment.
          </p>
        </div>
      </section>
      {/* Support Services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Settings,
              title: "Installation Assistance",
              desc: "Step-by-step guidance for installing dental chairs, compressors, X-ray units, and other clinic equipment.",
            },
            {
              icon: ShieldCheck,
              title: "Warranty Support",
              desc: "Quick processing of warranty claims and product inspections for manufacturing defects.",
            },
            {
              icon: Headphones,
              title: "Remote Troubleshooting",
              desc: "Expert remote assistance via phone or video call to resolve technical issues efficiently.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#1B4873] to-[#163a5c] rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-white" size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Maintenance Info Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Clock className="mx-auto text-[#26A7EB] mb-4" size={40} />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Preventive Maintenance Services
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
            Regular maintenance ensures the longevity and optimal performance of
            your dental equipment. Bossdent Global provides scheduled servicing,
            calibration support, and performance checks for modern dental
            clinics across India.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-[#26A7EB] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2193cf] transition"
          >
            Request Maintenance Support
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#1B4873] to-[#163a5c] rounded-2xl p-10 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Immediate Technical Help?
            </h2>
            <p className="text-white/90 mb-8">
              Our dedicated technical team is available to assist with urgent
              equipment issues, installation queries, and warranty support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919810768600"
                className="flex items-center justify-center gap-2 bg-[#26A7EB] px-6 py-3 rounded-lg font-semibold hover:bg-[#2193cf] transition"
              >
                <Phone size={18} /> Call Support
              </a>
              <a
                href="mailto:sales@bossdentglobal.com"
                className="flex items-center justify-center gap-2 bg-white text-[#1B4873] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                <Mail size={18} /> Email Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
