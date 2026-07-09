"use client";

import Link from "next/link";
import { Shield, Lock, FileText, Mail, Phone } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section
        className="relative text-white h-[380px] md:h-[500px] flex items-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `
      url('https://res.cloudinary.com/dk4npblv3/image/upload/v1779535262/Gemini_Generated_Image_6vrtbi6vrtbi6vrt_slowrz.png')
    `,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B4873]/82 to-[#163a5c]/54"></div>

        {/* Blur Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#26A7EB]/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/15 backdrop-blur-sm rounded-full mb-6">
            <Shield size={38} />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Privacy
            <span className="block text-[#7fd6ff]">Policy</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Your privacy and data protection are important to us.
          </p>
        </div>
      </section>
      {/* Content Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12 text-gray-700 leading-relaxed">
          {/* Intro */}
          <div>
            <p className="text-base md:text-lg">
              Bossdent Global (“we”, “our”, “us”) is committed to protecting the
              privacy of visitors, customers, and dental professionals who
              interact with our website and services. This Privacy Policy
              explains how we collect, use, and safeguard your information.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-[#26A7EB]" />
              <h2 className="text-2xl font-bold text-[#1B4873]">
                Information We Collect
              </h2>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Personal information such as name, phone number, email address
              </li>
              <li>
                Business or clinic details when you contact or place an order
              </li>
              <li>Information submitted through contact or inquiry forms</li>
              <li>
                Basic technical data such as browser type or device information
              </li>
            </ul>
          </div>

          {/* How We Use Information */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-[#26A7EB]" />
              <h2 className="text-2xl font-bold text-[#1B4873]">
                How We Use Your Information
              </h2>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to inquiries and provide customer support</li>
              <li>To process orders and manage business relationships</li>
              <li>To improve our products, services, and website experience</li>
              <li>
                To share important updates related to our products or services
              </li>
            </ul>
          </div>

          {/* Data Protection */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-[#26A7EB]" />
              <h2 className="text-2xl font-bold text-[#1B4873]">
                Data Protection & Security
              </h2>
            </div>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data from unauthorized access, misuse,
              alteration, or disclosure. Access to information is limited to
              authorized personnel only.
            </p>
          </div>

          {/* Sharing Information */}
          <div>
            <h2 className="text-2xl font-bold text-[#1B4873] mb-4">
              Sharing of Information
            </h2>
            <p>
              Bossdent Global does not sell, rent, or trade your personal
              information. Your data may only be shared when required by law or
              with trusted partners strictly for business operations.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-[#1B4873] mb-4">
              Cookies & Tracking
            </h2>
            <p>
              Our website may use cookies to enhance user experience and analyze
              website performance. You can choose to disable cookies through
              your browser settings.
            </p>
          </div>

          {/* Third-Party Links */}
          <div>
            <h2 className="text-2xl font-bold text-[#1B4873] mb-4">
              Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. Bossdent
              Global is not responsible for the privacy practices or content of
              those external sites.
            </p>
          </div>

          {/* Policy Updates */}
          <div>
            <h2 className="text-2xl font-bold text-[#1B4873] mb-4">
              Policy Updates
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be reflected on this page with immediate effect.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-[#ecf5fb] rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#1B4873] mb-4">
              Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions regarding this Privacy Policy, please
              contact us:
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919810768600"
                className="inline-flex items-center gap-2 font-semibold text-[#1B4873]"
              >
                <Phone size={18} />
                +91 9810-76-8600
              </a>
              <a
                href="mailto:sales@bossdentglobal.com"
                className="inline-flex items-center gap-2 font-semibold text-[#1B4873]"
              >
                <Mail size={18} />
                sales@bossdentglobal.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-[#1B4873] to-[#163a5c] text-white text-center px-4">
        <p className="text-sm md:text-base text-white/90">
          © {new Date().getFullYear()} Global. All rights reserved.
        </p>
        <div className="mt-4">
          <Link
            href="/"
            className="inline-block bg-[#26A7EB] px-6 py-3 rounded-lg font-semibold hover:bg-[#2193cf] transition"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
