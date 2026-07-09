"use client";

import React from "react";
import {
  RotateCcw,
  ShieldCheck,
  FileText,
  AlertCircle,
  CheckCircle,
  Truck,
  Clock,
  HelpCircle,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function ReturnsWarranty() {
  return (
    // Added pt-20 to ensure content starts below a fixed header/cart
    <main className="bg-[#f8fafc] min-h-screen font-sans text-slate-900 pt-16 md:pt-20">
      {/* Hero Section - SEO Friendly H1 & Modern Design */}
      {/* Hero Section */}
      <section
        className="
    relative
    overflow-hidden
    z-0
    text-white
    bg-cover
    bg-center
    flex
    items-center
    h-[420px]
    md:h-[350px]
    lg:h-[450px]
  "
        style={{
          backgroundImage: `
      linear-gradient(
        rgba(27,72,115,0.82),
        rgba(27,72,115,0.82)
      ),
      url("https://res.cloudinary.com/dk4npblv3/image/upload/v1779536116/Gemini_Generated_Image_39ucwk39ucwk39uc_zpvm4b.png")
    `,
        }}
      >
        {" "}
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -mr-64 -mt-64" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#26A7EB]/10 rounded-full blur-3xl -ml-32 -mb-32" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 text-center flex flex-col justify-center h-full">
          <div className="inline-flex items-center space-x-2 px-4 py-2 mb-6 text-xs md:text-sm font-semibold tracking-wide uppercase bg-white/10 border border-white/20 rounded-full text-blue-100 backdrop-blur-md">
            <ShieldCheck size={16} className="text-[#26A7EB]" />
            <span>Official Bossdent Global Protection</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            Returns & <span className="text-[#26A7EB]">Warranty</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
            Transparent policies for your peace of mind. We ensure your dental
            clinic's investments are protected with industry-leading support and
            genuine coverage.
          </p>
        </div>
      </section>
      {/* Quick Access Info Cards */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Clock className="text-[#26A7EB]" />,
              title: "7-Day Return Policy",
              desc: "Hassle-free return window",
            },
            {
              icon: <ShieldCheck className="text-[#26A7EB]" />,
              title: "Genuine Warranty",
              desc: "100% Manufacturer backed",
            },
            {
              icon: <Truck className="text-[#26A7EB]" />,
              title: "Secure Logistics",
              desc: "Safe handling for sensitive gear",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 flex flex-col items-center text-center space-y-3 border border-slate-100 hover:border-orange-200 transition-colors"
            >
              <div className="p-4 bg-orange-50 rounded-2xl mb-2">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg text-slate-800">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Policy Details Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Content (8 Columns) */}
          <div className="lg:col-span-8 space-y-20">
            {/* Return Policy Article */}
            <article>
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-12 w-2 bg-[#26A7EB] rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Return Eligibility Criteria
                </h2>
              </div>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                To maintain hygiene and safety standards in the dental industry,
                returns are accepted under strict quality protocols.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Product must be in 'As-New' condition",
                  "Original seal & labels must be intact",
                  "Includes all technical manuals & CD-ROMs",
                  "No marks of installation on dental chairs",
                ].map((text, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-5 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-shadow"
                  >
                    <CheckCircle
                      className="text-green-500 shrink-0 mr-4"
                      size={24}
                    />
                    <span className="font-medium text-slate-700">{text}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Warranty Table */}
            <article className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100">
              <div className="flex items-center space-x-4 mb-10">
                <ShieldCheck className="text-[#1B4873]" size={40} />
                <h2 className="text-3xl font-bold text-slate-900">
                  Warranty Coverage Period
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-slate-100">
                      <th className="pb-4 font-bold text-slate-400 uppercase tracking-wider text-xs">
                        Equipment Type
                      </th>
                      <th className="pb-4 font-bold text-slate-400 uppercase tracking-wider text-xs">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="group">
                      <td className="py-6 font-semibold text-slate-800 group-hover:text-[#1B4873]">
                        Dental Chairs (Hydraulic/Electric)
                      </td>
                      <td className="py-6 text-slate-600 italic">
                        24 Months Limited
                      </td>
                    </tr>
                    <tr className="group">
                      <td className="py-6 font-semibold text-slate-800 group-hover:text-[#1B4873]">
                        Digital Imaging & X-Ray Sensors
                      </td>
                      <td className="py-6 text-slate-600 italic">12 Months</td>
                    </tr>
                    <tr className="group">
                      <td className="py-6 font-semibold text-slate-800 group-hover:text-[#1B4873]">
                        Handpieces & Air Motors
                      </td>
                      <td className="py-6 text-slate-600 italic">6 Months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>

          {/* Sticky Sidebar (4 Columns) */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-[#1B4873] rounded-[2rem] p-8 text-white sticky top-28 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10">
                <FileText size={150} />
              </div>
              <h3 className="text-2xl font-bold mb-8 relative z-10 italic underline decoration-[#26A7EB]">
                Claim Process
              </h3>
              <div className="space-y-8 relative z-10">
                {[
                  {
                    n: "1",
                    t: "Documentation",
                    d: "Capture photos & videos of the issue.",
                  },
                  {
                    n: "2",
                    t: "Registration",
                    d: "Send details to support portal.",
                  },
                  {
                    n: "3",
                    t: "Verification",
                    d: "Technical remote diagnosis.",
                  },
                  {
                    n: "4",
                    t: "Resolution",
                    d: "On-site repair or replacement.",
                  },
                ].map((s, i) => (
                  <div key={i} className="flex group">
                    <div className="mr-4 flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-[#26A7EB] flex items-center justify-center font-bold text-sm shrink-0">
                        {s.n}
                      </div>
                      {i !== 3 && (
                        <div className="w-0.5 h-full bg-white/20 my-1"></div>
                      )}
                    </div>
                    <div className="pb-2">
                      <h4 className="font-bold text-lg group-hover:text-[#26A7EB] transition-colors">
                        {s.t}
                      </h4>
                      <p className="text-sm text-blue-200 leading-snug">
                        {s.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-red-50 rounded-[2rem] border border-red-100">
              <h4 className="flex items-center font-bold text-red-700 mb-4">
                <AlertCircle className="mr-2" size={20} /> Non-Covered Items
              </h4>
              <ul className="space-y-3 text-sm text-red-800/70">
                <li className="flex items-start">
                  <ArrowRight size={14} className="mt-1 mr-2 shrink-0" />
                  Consumables (Gloves, Burs, etc.)
                </li>
                <li className="flex items-start">
                  <ArrowRight size={14} className="mt-1 mr-2 shrink-0" />
                  Bulbs & Fuses
                </li>
                <li className="flex items-start">
                  <ArrowRight size={14} className="mt-1 mr-2 shrink-0" />
                  Damage due to Power Surge
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="bg-[#1B4873] py-24 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Common Questions
            </h2>
            <div className="w-24 h-1 bg-[#26A7EB] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "Can I return a chair after installation?",
                a: "No, once a dental unit is bolted or installed, it is no longer eligible for return unless a major manufacturing defect is confirmed.",
              },
              {
                q: "Who pays for return logistics?",
                a: "Shipping costs are non-refundable. The customer is responsible for safe return shipping and insurance.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition"
              >
                <h4 className="text-xl font-bold mb-3 text-[#26A7EB]">
                  Q: {faq.q}
                </h4>
                <p className="text-slate-400 leading-relaxed italic leading-relaxed">
                  A: {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Contact CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block p-4 bg-blue-50 rounded-full mb-8">
            <HelpCircle size={48} className="text-[#1B4873]" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-6">
            Need Immediate Technical Assistance?
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Our specialized engineers are ready to help with your warranty
            claims and product troubleshooting.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:info@bossdentglobal.com"
              className="bg-[#26A7EB] hover:bg-[#2193cf] text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center transition shadow-xl shadow-[#b3d2e3]"
            >
              <Mail className="mr-3" /> Email Support
            </a>
            <button className="bg-white border-2 border-slate-200 text-slate-800 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition">
              Download Full Policy
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
