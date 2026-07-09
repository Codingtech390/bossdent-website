// app/terms/page.js
"use client";

import Link from "next/link";
import {
  FileText,
  Shield,
  AlertCircle,
  CheckCircle,
  Scale,
  Package,
  CreditCard,
  RefreshCw,
} from "lucide-react";

export default function TermsPage() {
  const lastUpdated = "December 24, 2024";

  const sections = [
    {
      id: "acceptance",
      icon: CheckCircle,
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using the Bossdent Global website (www.bossdentglobal.com) and purchasing our products, you accept and agree to be bound by the terms and conditions outlined in this agreement.",
        "If you do not agree with any part of these terms, please do not use our website or services.",
        "We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.",
      ],
    },
    {
      id: "definitions",
      icon: FileText,
      title: "2. Definitions",
      content: [
        '"Company," "we," "us," or "our" refers to Bossdent Global, located at 653, Rishi Nagar, Rani Bagh, New Delhi - 110034.',
        '"Customer," "you," or "your" refers to the individual or entity purchasing products or using our services.',
        '"Products" refers to all dental equipment, instruments, and supplies offered by Bossdent Global.',
        '"Website" refers to www.bossdentglobal.com and all associated pages and platforms.',
      ],
    },
    {
      id: "product-info",
      icon: Package,
      title: "3. Product Information & Pricing",
      content: [
        "We strive to provide accurate product descriptions, specifications, and images. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, or error-free.",
        "All prices are subject to change without notice. Prices displayed on the website are in Indian Rupees (INR) unless otherwise stated.",
        "We reserve the right to modify or discontinue any product without prior notice.",
        "Product availability is subject to stock levels. In case of unavailability, we will notify you promptly and offer alternatives or a full refund.",
        "Bulk order pricing and special discounts are available upon request and subject to separate quotations.",
      ],
    },
    {
      id: "ordering",
      icon: CreditCard,
      title: "4. Ordering & Payment",
      content: [
        "Orders can be placed through our website, email (sales@bossdentglobal.com), or by phone (+91 9810-76-8600).",
        "All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order at our discretion.",
        "Payment terms will be communicated at the time of order confirmation. We accept various payment methods including bank transfer, credit/debit cards, and UPI.",
        "For bulk orders, advance payment or mutually agreed payment terms may apply.",
        "All payments must be completed before product shipment unless credit terms have been pre-approved.",
        "Invoices will be provided for all purchases and must be retained for warranty claims.",
      ],
    },
    {
      id: "shipping",
      icon: Package,
      title: "5. Shipping & Delivery",
      content: [
        "We ship products across India through our trusted logistics partners.",
        "Delivery timelines are estimates and may vary based on location and product availability. Typical delivery is 5-10 business days for metros and 7-15 business days for other locations.",
        "Shipping charges are calculated based on product weight, dimensions, and delivery location.",
        "Risk of loss and title for products pass to you upon delivery to the shipping carrier.",
        "You must inspect products upon delivery and report any damage or discrepancies within 48 hours.",
        "Delivery to remote or difficult-to-access locations may incur additional charges and extended timelines.",
        "We are not responsible for delays caused by courier services, natural disasters, or circumstances beyond our control.",
      ],
    },
    {
      id: "returns",
      icon: RefreshCw,
      title: "6. Returns & Refunds",
      content: [
        "Products may be returned within 7 days of delivery if they are defective, damaged, or not as described.",
        "Products must be unused, in original packaging, and accompanied by the original invoice for returns to be accepted.",
        "Custom-ordered or specially manufactured products are not eligible for return unless defective.",
        "Return shipping costs are the responsibility of the customer unless the product is defective or incorrectly shipped.",
        "Refunds will be processed within 7-10 business days after receipt and inspection of returned products.",
        "Refunds will be issued to the original payment method used for purchase.",
        "Products damaged due to misuse, negligence, or improper handling are not eligible for return or refund.",
      ],
    },
    {
      id: "warranty",
      icon: Shield,
      title: "7. Warranty & Product Quality",
      content: [
        "All products sold by Bossdent Global come with manufacturer warranties as specified for each product.",
        "Warranty periods and terms vary by product and manufacturer. Specific warranty information is provided with each product.",
        "Warranty covers manufacturing defects and does not cover damage from misuse, accidents, or normal wear and tear.",
        "To claim warranty service, customers must provide proof of purchase and contact us within the warranty period.",
        "We reserve the right to repair, replace, or refund products at our discretion based on warranty terms.",
        "Products must be used according to manufacturer instructions for warranty to remain valid.",
        "Extended warranty and maintenance packages may be available for certain products at additional cost.",
      ],
    },
    {
      id: "liability",
      icon: Scale,
      title: "8. Limitation of Liability",
      content: [
        "Bossdent Global shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our products or services.",
        "Our total liability for any claim arising from product purchase shall not exceed the amount paid for the specific product.",
        "We are not liable for any damages or injuries resulting from improper use, installation, or maintenance of products.",
        "Customers are responsible for ensuring products meet their specific requirements and obtaining necessary training for proper use.",
        "We do not provide medical advice. All products should be used by trained dental professionals only.",
        "Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.",
      ],
    },
    {
      id: "intellectual-property",
      icon: Shield,
      title: "9. Intellectual Property",
      content: [
        "All content on the Bossdent Global website, including text, graphics, logos, images, and software, is owned by Bossdent Global or its licensors.",
        "You may not reproduce, distribute, modify, or create derivative works from our website content without explicit written permission.",
        "Product names, brand names, and trademarks are the property of their respective owners.",
        "The Bossdent Global name and logo are trademarks of Bossdent Global and may not be used without permission.",
      ],
    },
    {
      id: "privacy",
      icon: Shield,
      title: "10. Privacy & Data Protection",
      content: [
        "We collect and use your personal information in accordance with our Privacy Policy.",
        "Your information is used solely for order processing, customer service, and communication about our products and services.",
        "We implement appropriate security measures to protect your personal and financial information.",
        "We do not sell or share your personal information with third parties except as necessary for order fulfillment.",
        "By using our services, you consent to the collection and use of information as described in our Privacy Policy.",
      ],
    },
    {
      id: "user-conduct",
      icon: AlertCircle,
      title: "11. User Conduct & Prohibited Activities",
      content: [
        "You agree not to use our website or services for any unlawful purpose or in violation of these terms.",
        "You may not attempt to gain unauthorized access to our systems or interfere with website functionality.",
        "You may not use our products in any manner that could damage, disable, or impair our business or brand reputation.",
        "Resale of products without authorization is prohibited.",
        "You may not post false, misleading, or defamatory content about our products or services.",
      ],
    },
    {
      id: "termination",
      icon: AlertCircle,
      title: "12. Termination",
      content: [
        "We reserve the right to terminate or suspend access to our services immediately, without prior notice, for conduct that violates these terms.",
        "Upon termination, your right to use our services will immediately cease.",
        "Termination does not affect any rights or obligations that accrued prior to termination.",
        "Outstanding orders and payments remain valid and must be fulfilled according to agreed terms.",
      ],
    },
    {
      id: "governing-law",
      icon: Scale,
      title: "13. Governing Law & Dispute Resolution",
      content: [
        "These terms shall be governed by and construed in accordance with the laws of India.",
        "Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of courts in New Delhi, India.",
        "We encourage customers to contact us directly to resolve any disputes or concerns before pursuing legal action.",
        "Both parties agree to attempt good faith resolution of disputes through negotiation and mediation before litigation.",
      ],
    },
    {
      id: "modifications",
      icon: RefreshCw,
      title: "14. Modifications to Terms",
      content: [
        "We reserve the right to update or modify these terms at any time without prior notice.",
        "Changes will be effective immediately upon posting on our website.",
        "Your continued use of our services after changes constitutes acceptance of the modified terms.",
        "We recommend reviewing these terms periodically to stay informed of any updates.",
        "Material changes will be highlighted and communicated through our website or email notifications.",
      ],
    },
    {
      id: "contact",
      icon: FileText,
      title: "15. Contact Information",
      content: [
        "If you have any questions or concerns about these terms and conditions, please contact us:",
        "Bossdent Global",
        "Address: , Rishi Nagar, Rani Bagh, New Delhi - 110034Bossgent Global India Pvt Ltd, UG 11, Vardhman Golden Plaza, Road No 44, Pitam Pura, Above Goldy Motors, near Sewa Rasoi",
        "Phone: +91 9810-76-8600",
        "Email: sales@bossdentglobal.com / admin@bossdentglobal.com",
        "Website: www.bossdentglobal.com",
        "Business Hours: Monday - Saturday, 9:00 AM - 6:00 PM IST",
      ],
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative max-h-[45vh] flex items-center overflow-hidden text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dk4npblv3/image/upload/v1779535262/Gemini_Generated_Image_6vrtbi6vrtbi6vrt_slowrz.png')",
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(27,72,115,0.55), rgba(22,58,92,0.60))",
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
              backgroundSize: "42px 42px",
            }}
          />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 mb-8">
              <Scale className="text-white" size={40} />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
              Terms & Conditions
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
              Please read these terms carefully before using our services
            </p>

            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 px-5 py-3 rounded-full">
              <FileText size={18} />
              <span className="text-sm font-medium">
                Last Updated: {lastUpdated}
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Quick Navigation */}
      <section className="bg-gray-50 py-6 sticky top-20 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
              Quick Links:
            </span>
            <div className="flex gap-2">
              {sections.slice(0, 6).map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-xs md:text-sm px-3 py-1.5 bg-white border border-gray-300 rounded-lg hover:bg-[#26A7EB] hover:text-white hover:border-[#26A7EB] transition-colors whitespace-nowrap"
                >
                  {section.title.split(".")[1]?.trim() || section.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-[#ecf5fb] border-l-4 border-[#26A7EB] rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <AlertCircle
                className="text-[#26A7EB] flex-shrink-0 mt-1"
                size={24}
              />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Important Notice
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms and Conditions ("Terms") govern your use of the
                  Bossdent Global website and the purchase of our products. By
                  accessing our website or making a purchase, you acknowledge
                  that you have read, understood, and agree to be bound by these
                  Terms. Please read them carefully.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-32">
                <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1B4873] to-[#163a5c] rounded-lg flex items-center justify-center flex-shrink-0">
                      <section.icon className="text-white" size={24} />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 flex-1">
                      {section.title}
                    </h2>
                  </div>
                  <div className="ml-16 space-y-3">
                    {section.content.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-gray-700 leading-relaxed text-sm md:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-gradient-to-r from-[#1B4873] to-[#163a5c] rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Agreement Acknowledgment
            </h2>
            <p className="text-white/90 leading-relaxed mb-6">
              By using Bossdent Global's website and services, you acknowledge
              that you have read these Terms and Conditions in their entirety
              and agree to be bound by them. If you do not agree to these terms,
              please discontinue use of our services immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-[#26A7EB] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2193cf] transition-colors"
              >
                Have Questions? Contact Us
              </Link>
              <Link
                href="/privacy-policy"
                className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
              >
                Read Privacy Policy
              </Link>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Related Pages
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/privacy-policy"
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-[#ecf5fb] hover:border-[#26A7EB] border border-gray-200 transition-all group"
              >
                <Shield
                  className="text-[#1B4873] group-hover:text-[#26A7EB]"
                  size={24}
                />
                <span className="font-semibold text-gray-900">
                  Privacy Policy
                </span>
              </Link>
              <Link
                href="/returns"
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-[#ecf5fb] hover:border-[#26A7EB] border border-gray-200 transition-all group"
              >
                <RefreshCw
                  className="text-[#1B4873] group-hover:text-[#26A7EB]"
                  size={24}
                />
                <span className="font-semibold text-gray-900">
                  Returns & Refunds
                </span>
              </Link>
              <Link
                href="/shipping"
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-[#ecf5fb] hover:border-[#26A7EB] border border-gray-200 transition-all group"
              >
                <Package
                  className="text-[#1B4873] group-hover:text-[#26A7EB]"
                  size={24}
                />
                <span className="font-semibold text-gray-900">
                  Shipping Policy
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Need Clarification?
          </h2>
          <p className="text-gray-600 mb-8">
            If you have any questions about these terms, our team is here to
            help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919810768600"
              className="inline-flex items-center justify-center gap-2 bg-[#26A7EB] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2193cf] transition-colors"
            >
              Call: +91 9810-76-8600
            </a>
            <a
              href="mailto:sales@bossdentglobal.com"
              className="inline-flex items-center justify-center gap-2 bg-[#1B4873] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#163a5c] transition-colors"
            >
              Email: sales@bossdentglobal.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
