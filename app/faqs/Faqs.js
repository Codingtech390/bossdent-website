"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Minus,
  Phone,
  Mail,
  Shield,
  Package,
  HelpCircle,
} from "lucide-react";

const faqData = [
  {
    category: "General",
    icon: HelpCircle,
    faqs: [
      {
        question: "What is Bossdent Global?",
        answer:
          "Bossdent Global is a trusted dental equipment brand providing international-quality dental products designed to enhance precision, efficiency, and predictable clinical outcomes for dental professionals.",
      },
      {
        question: "Since when has Bossdent Global been operating?",
        answer:
          "Bossdent Global has been serving the dental fraternity since 2008, empowering professionals with reliable and innovative dental solutions.",
      },
      {
        question: "Where is Bossdent Global located?",
        answer:
          "Bossdent Global is based in New Delhi, India, and serves dental clinics and professionals across the country.",
      },
    ],
  },
  {
    category: "Products",
    icon: Package,
    faqs: [
      {
        question: "What types of dental products does Bossdent Global offer?",
        answer:
          "We offer a wide range of dental products including rotary endodontic files, handpieces, modelling wax, oil spray lubricants, RVG sleeves, zoom loupes, implant handpieces, and more.",
      },
      {
        question:
          "Are Bossdent products compatible with standard dental equipment?",
        answer:
          "Yes, our products are designed to be compatible with standard dental systems and equipment used by professionals.",
      },
      {
        question:
          "Do you offer different sizes and configurations for endodontic files?",
        answer:
          "Yes, our E-Curve and Flex File systems are available in multiple tapers, lengths, and configurations to suit narrow, medium, and large canals.",
      },
    ],
  },
  {
    category: "Quality & Certification",
    icon: Shield,
    faqs: [
      {
        question: "Are Bossdent products ISO certified?",
        answer:
          "Yes, Bossdent Global products meet international quality standards and undergo strict quality control to ensure safety, durability, and performance.",
      },
      {
        question: "How do you ensure product quality?",
        answer:
          "Each product goes through rigorous testing, quality checks, and compliance procedures before reaching dental professionals.",
      },
      {
        question: "Are Bossdent products safe for clinical use?",
        answer:
          "Absolutely. All products are designed with patient safety, clinician comfort, and clinical efficiency in mind.",
      },
    ],
  },
  {
    category: "Orders & Distribution",
    icon: Package,
    faqs: [
      {
        question: "How can I place an order?",
        answer:
          "You can place orders by contacting our sales team via phone or email, or by reaching out through our website contact form.",
      },
      {
        question: "Do you have a distribution network?",
        answer:
          "Yes, Bossdent Global has a regular and reliable distribution network ensuring timely delivery across India.",
      },
      {
        question: "Do you support bulk or clinic-level orders?",
        answer:
          "Yes, we support bulk orders and long-term partnerships with dental clinics and distributors.",
      },
    ],
  },
  {
    category: "Support",
    icon: HelpCircle,
    faqs: [
      {
        question: "Do you provide after-sales support?",
        answer:
          "Yes, we offer dedicated sales and technical support to assist dental professionals with product usage and guidance.",
      },
      {
        question: "How can I contact Bossdent Global?",
        answer:
          "You can contact us via phone at +91 9810-76-8600 or email us at sales@bossdentglobal.com.",
      },
      {
        question: "Can I get product guidance before purchasing?",
        answer:
          "Yes, our expert team is always available to help you choose the right products based on your clinical needs.",
      },
    ],
  },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        {open ? (
          <Minus className="text-[#26A7EB]" />
        ) : (
          <Plus className="text-[#26A7EB]" />
        )}
      </button>

      {open && (
        <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section
        className="relative text-white min-h-[420px] md:min-h-[400px] flex items-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dk4npblv3/image/upload/v1779533658/Gemini_Generated_Image_mjxpvmmjxpvmmjxp_cleanup_sg9ir1.png')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B4873]/85 to-[#163a5c]/65"></div>

        {/* Decorative blur */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#26A7EB]/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/15 rounded-full backdrop-blur-sm mb-6">
            <HelpCircle size={36} />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            Frequently Asked
            <span className="block text-[#7fd6ff]">Questions</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Everything you need to know about BossDent Global and our products
          </p>
        </div>
      </section>
      {/* FAQ Content */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {faqData.map((section, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1B4873] to-[#163a5c] flex items-center justify-center">
                  <section.icon className="text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B4873]">
                  {section.category}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {section.faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1B4873] to-[#163a5c] text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Our team is here to help you with expert guidance and support
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919810768600"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1B4873] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              <Phone size={20} />
              Call Us
            </a>
            <a
              href="mailto:sales@bossdentglobal.com"
              className="inline-flex items-center justify-center gap-2 bg-[#26A7EB] px-8 py-4 rounded-lg font-semibold hover:bg-[#2193cf] transition"
            >
              <Mail size={20} />
              Email Support
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
