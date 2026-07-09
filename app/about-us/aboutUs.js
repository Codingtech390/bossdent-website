// app/about/page.js
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Award,
  Users,
  Zap,
  Target,
  Heart,
  TrendingUp,
  Shield,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import dynamic from "next/dynamic";
// import IndiaPresenceMap from "./IndiaPresenceMap";

// Dynamically import map (no SSR — Leaflet needs browser)
const IndiaPresenceMap = dynamic(() => import("./IndiaPresenceMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] rounded-2xl bg-gray-100 animate-pulse flex items-center justify-center">
      <span className="text-gray-400 text-sm">Loading map...</span>
    </div>
  ),
});

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Clinics Served", icon: Users },
    { number: "15+", label: "Cities Served", icon: MapPin },
    { number: "20+", label: "Quality Products", icon: Zap },
    { number: "100%", label: "Customer Satisfaction", icon: Heart },
  ];

  const values = [
    {
      icon: Award,
      title: "Quality First",
      description:
        "We never compromise on quality. All our products meet international standards with ISO certification and rigorous quality control.",
    },
    {
      icon: Users,
      title: "Customer Centric",
      description:
        "Our customers are at the heart of everything we do. We provide dedicated support and guidance to ensure your success.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We constantly innovate and bring cutting-edge dental technology to empower professionals with precision tools.",
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description:
        "Building long-term relationships through honest business practices, transparent pricing, and consistent quality.",
    },
  ];

  const milestones = [
    {
      year: "2008",
      event: "Bossdent Global Founded",
      description: "Started our journey to serve dental professionals",
    },
    {
      year: "2012",
      event: "ISO Certification",
      description: "Achieved international quality standards",
    },
    {
      year: "2015",
      event: "Product Expansion",
      description: "Expanded to 15+ premium dental products",
    },
    {
      year: "2018",
      event: "500+ Clinics",
      description: "Reached milestone of serving 500+ dental clinics",
    },
    {
      year: "2020",
      event: "Digital Transformation",
      description: "Launched online platform for easier ordering",
    },
    {
      year: "2024",
      event: "Market Leader",
      description: "Recognized as trusted name in dental excellence",
    },
  ];

  const networkCities = [
    "Dehradun",
    "Delhi",
    "Kashmir",
    "Kolkata",
    "Mathura",
    "Patna",
    "Raipur",
    "Rohtak",
    "Shimoga",
    "Silligudi",
    "Sonipat",
    "Gurgaon",
    "Hajipur",
    "Muzzafarpur",
    "Darbhanga",
    "Purnia",
    "Katihar",
    "Bhagalpur",
    "Chhapra",
  ];

  const team = [
    {
      name: "Quality Assurance",
      role: "Product Testing & Certification",
      description:
        "Rigorous testing ensures every product meets international standards",
    },
    {
      name: "Sales & Support",
      role: "Customer Assistance",
      description: "Dedicated team providing expert guidance and support",
    },
    {
      name: "Technical Team",
      role: "Product Development",
      description:
        "Innovation-focused professionals bringing latest technology",
    },
    {
      name: "Distribution",
      role: "Logistics & Delivery",
      description:
        "Efficient delivery network ensuring timely product delivery",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] flex items-center text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dk4npblv3/image/upload/v1779532833/Gemini_Generated_Image_s3vmhus3vmhus3vm_svorja.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#1B4873]/67"></div>

        {/* Pattern Overlay (optional) */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,...")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About Bossdent Global
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Empowering Dental Professionals with Precision Tools Since 2008
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-[#26A7EB] px-8 py-4 rounded-lg font-semibold hover:bg-[#2193cf]"
              >
                View Our Products
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#26A7EB] to-[#2193cf] rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={28} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1B4873] mb-2">
                  {stat.number}
                </h3>
                <p className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B4873] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg">
                  Bossdent Global was founded with a simple yet powerful
                  mission: to provide dental professionals with the highest
                  quality equipment and tools that enable them to deliver
                  exceptional patient care.
                </p>
                <p className="text-base md:text-lg">
                  Since our inception, we have been committed to sourcing and
                  distributing international quality dental products that
                  combine precision, durability, and innovation. Our journey
                  began with a deep understanding of the challenges faced by
                  dental practitioners, and we set out to become their trusted
                  partner.
                </p>
                <p className="text-base md:text-lg">
                  Today, we are proud to serve over 500 dental clinics across
                  India, offering a comprehensive range of products from
                  endodontic files to advanced handpieces, all backed by our
                  commitment to quality and customer satisfaction.
                </p>
                <p className="text-base md:text-lg font-semibold text-[#26A7EB]">
                  "Your One Stop Solution for All Dental Equipments" - Committed
                  to Serve Dental Fraternity
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1B4873] to-[#163a5c] rounded-2xl p-8 md:p-12 text-white shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  What Sets Us Apart?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-[#26A7EB] flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        International Quality
                      </h4>
                      <p className="text-white/90 text-sm">
                        Products meeting global standards with ISO certification
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-[#26A7EB] flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Widest Product Range
                      </h4>
                      <p className="text-white/90 text-sm">
                        Complete dental solutions under one roof
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-[#26A7EB] flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Expert Support
                      </h4>
                      <p className="text-white/90 text-sm">
                        Dedicated sales and technical assistance
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-[#26A7EB] flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Trusted Name
                      </h4>
                      <p className="text-white/90 text-sm">
                        Recognized for excellence in dental equipment
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-20 bg-[#ecf5fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4873] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#1B4873] to-[#163a5c] rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-gradient-to-br from-[#1B4873] to-[#163a5c] rounded-2xl p-8 md:p-12 text-white">
              <div className="flex items-center gap-4 mb-6">
                <Target size={40} className="text-[#26A7EB]" />
                <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                To empower dental professionals with precision tools and
                international quality products that enable them to provide
                exceptional patient care. We are committed to being the one-stop
                solution for all dental equipment needs, delivering excellence
                through innovation, quality, and dedicated support.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#26A7EB] to-[#2193cf] rounded-2xl p-8 md:p-12 text-white">
              <div className="flex items-center gap-4 mb-6">
                <TrendingUp size={40} className="text-white" />
                <h2 className="text-2xl md:text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                To be the most trusted and preferred partner for dental
                professionals across India, recognized for our commitment to
                quality, innovation, and customer satisfaction. We envision a
                future where every dental practice has access to world-class
                equipment and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR PRESENCE PAN INDIA ── */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[#26A7EB] font-semibold uppercase tracking-widest text-sm mb-2">
              Our Presence
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1B4873] leading-tight">
              Pan India
            </h2>
            <p className="text-gray-500 mt-3 text-base md:text-lg">
              Bringing Premium Dental Excellence Closer to You
            </p>
          </div>

          {/* Leaflet Map */}
          <div className="relative z-0 rounded-2xl overflow-hidden shadow-2xl border border-[#e0f0fb]">
            <IndiaPresenceMap />
          </div>

          {/* City grid below map */}
          <div className="mt-10 bg-white rounded-2xl shadow-lg border border-[#e0f0fb] p-6 md:p-8">
            <div className="mb-6">
              <div className="bg-[#1B4873] rounded-xl px-5 py-3 inline-block">
                <h3 className="text-white font-bold text-base tracking-wide uppercase">
                  Our Network Cities
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-3">
              {networkCities.map((city, index) => (
                <div key={index} className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#26A7EB] flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">
                    {city}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-[#ecf5fb] rounded-xl px-5 py-3">
                <span className="text-2xl font-extrabold text-[#1B4873]">
                  19+
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  Cities Covered
                </span>
              </div>
              <div className="flex items-center gap-3 bg-[#ecf5fb] rounded-xl px-5 py-3">
                <span className="text-2xl font-extrabold text-[#1B4873]">
                  500+
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  Clinics Served
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4873] mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to serving the dental community
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#1B4873] to-[#163a5c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-[#26A7EB] font-semibold text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-[#1B4873] to-[#163a5c]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Join 500+ dental professionals who trust Bossdent Global for their
            equipment needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-[#26A7EB] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2193cf] transition-colors shadow-xl"
            >
              Browse Products
            </Link>
            <a
              href="tel:+919810768600"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1B4873] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl"
            >
              <Phone size={20} />
              Call: +91 9810-76-8600
            </a>
            <a
              href="mailto:sales@bossdentglobal.com"
              className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              <Mail size={20} />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
