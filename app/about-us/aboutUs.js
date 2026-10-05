"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  CheckCircle2,
  ChevronRight,
  Compass,
  Heart,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const IndiaPresenceMap = dynamic(() => import("./IndiaPresenceMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[340px] items-center justify-center bg-[#F1F6FA] sm:h-[440px]">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#D5E4EF] border-t-[#26A7EB]" />
        <span className="text-xs font-medium tracking-wide text-slate-500">
          Loading India presence map
        </span>
      </div>
    </div>
  ),
});

const stats = [
  { number: "500+", label: "Clinics served", icon: Users },
  { number: "15+", label: "Cities served", icon: MapPin },
  { number: "20+", label: "Quality products", icon: Zap },
  { number: "100%", label: "Customer satisfaction", icon: Heart },
];

const values = [
  {
    number: "01",
    icon: Award,
    title: "Quality first",
    description:
      "We never compromise on quality. Our focus is on international-quality products and rigorous quality control.",
  },
  {
    number: "02",
    icon: Users,
    title: "Customer centric",
    description:
      "Our customers are at the heart of everything we do, with dedicated support and guidance for dental professionals.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Innovation",
    description:
      "We bring dental technology and precision-focused products together to support modern clinical workflows.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Trust & reliability",
    description:
      "We build lasting relationships through honest business practices, transparent pricing, and consistent service.",
  },
];

const milestones = [
  {
    year: "2008",
    title: "The beginning",
    description: "Bossdent Global was founded to serve dental professionals.",
  },
  {
    year: "2012",
    title: "Quality commitment",
    description: "Achieved the ISO certification milestone.",
  },
  {
    year: "2015",
    title: "Product expansion",
    description: "Expanded the range to 15+ dental products.",
  },
  {
    year: "2018",
    title: "A growing network",
    description: "Reached the milestone of serving 500+ dental clinics.",
  },
  {
    year: "2020",
    title: "Digital transformation",
    description: "Introduced an online platform for easier ordering.",
  },
  {
    year: "2024",
    title: "Looking ahead",
    description: "Continued building a trusted name in dental products.",
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
    number: "01",
    name: "Quality Assurance",
    role: "Product testing & certification",
    description: "Focused on testing and maintaining product quality standards.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    name: "Sales & Support",
    role: "Customer assistance",
    description: "Providing guidance and support throughout the customer journey.",
    icon: Users,
  },
  {
    number: "03",
    name: "Technical Team",
    role: "Product development",
    description: "Working to bring relevant technology and product solutions to professionals.",
    icon: Zap,
  },
  {
    number: "04",
    name: "Distribution",
    role: "Logistics & delivery",
    description: "Coordinating product distribution and delivery to customers.",
    icon: Compass,
  },
];

const apartItems = [
  {
    title: "International quality",
    description: "A focus on quality standards and product assurance.",
  },
  {
    title: "A broad product range",
    description: "Dental solutions across multiple product categories.",
  },
  {
    title: "Dedicated assistance",
    description: "Sales and technical support for dental professionals.",
  },
  {
    title: "Long-term relationships",
    description: "Built around trust, reliability, and customer service.",
  },
];

function SectionEyebrow({ children, light = false }) {
  return (
    <div
      className={`mb-5 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] ${
        light ? "text-sky-200" : "text-[#168FCB]"
      }`}
    >
      <span className={`h-px w-7 ${light ? "bg-sky-300/70" : "bg-[#26A7EB]"}`} />
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
      <h2 className="text-3xl font-semibold leading-[1.12] tracking-[-0.045em] text-[#123452] sm:text-4xl lg:text-[46px]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

function PrimaryLink({ href, children, light = false }) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full px-6 py-3 text-[12px] font-semibold transition duration-300 hover:-translate-y-0.5 sm:px-7 sm:text-[13px] ${
        light
          ? "bg-white text-[#123452] hover:bg-sky-50"
          : "bg-[#168FCB] text-white shadow-[0_8px_24px_rgba(22,143,203,0.17)] hover:bg-[#087BB6] hover:shadow-[0_12px_30px_rgba(22,143,203,0.25)]"
      }`}
    >
      {children}
      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-[#18334A]">
      {/* ───────────────── HERO ───────────────── */}
      <section className="relative isolate min-h-[590px] overflow-hidden bg-[#071A2A] sm:min-h-[630px] lg:min-h-[660px]">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dk4npblv3/image/upload/v1779532833/Gemini_Generated_Image_s3vmhus3vmhus3vm_svorja.png')",
            }}
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,21,36,0.97)_0%,rgba(7,30,49,0.88)_44%,rgba(8,34,55,0.55)_100%)]" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071A2A] via-transparent to-[#071A2A]/25" />

          <div className="absolute -right-40 top-[-15%] h-[500px] w-[500px] rounded-full bg-[#168FCB]/20 blur-[130px] sm:h-[700px] sm:w-[700px]" />

          <div
            className="absolute inset-0 opacity-[0.11]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
              backgroundSize: "68px 68px",
            }}
          />

          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#65C9F8]/40 to-transparent" />
        </div>

        <div className="mx-auto flex min-h-[590px] max-w-[1440px] items-center px-5 py-20 sm:min-h-[630px] sm:px-10 sm:py-24 lg:min-h-[660px] lg:px-20">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#53C6FF] shadow-[0_0_12px_rgba(83,198,255,0.9)]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-sky-100 sm:text-[11px]">
                Our story · Since 2008
              </span>
            </div>

            <h1 className="max-w-3xl text-[clamp(2.9rem,7vw,6rem)] font-semibold leading-[0.99] tracking-[-0.06em] text-white">
              Precision for
              <br />
              <span className="text-[#66CBFA]">every practice.</span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-slate-200/85 sm:mt-8 sm:text-base sm:leading-8 lg:text-lg">
              Empowering dental professionals with precision tools and international-quality
              products since 2008.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
              <PrimaryLink href="/products" light>
                Explore our products
              </PrimaryLink>

              <Link
                href="/contact-us"
                className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-[12px] font-medium text-white transition duration-300 hover:border-white/40 hover:bg-white/[0.09] sm:px-7 sm:text-[13px]"
              >
                Get in touch
                <ArrowRight
                  size={15}
                  className="text-sky-300 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-6 sm:mt-14 sm:gap-x-9">
              <div>
                <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">2008</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-400">
                  Year established
                </p>
              </div>

              <div className="h-9 w-px bg-white/15" />

              <div>
                <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">500+</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-400">
                  Clinics served
                </p>
              </div>

              <div className="h-9 w-px bg-white/15" />

              <div>
                <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">India</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-400">
                  Our network
                </p>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-9 right-8 hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/40 lg:flex">
            <span>Scroll to discover</span>
            <ArrowDownRight size={16} />
          </div>
        </div>
      </section>

      {/* ───────────────── STATS ───────────────── */}
      <section className="relative z-10 border-b border-[#E5EDF3] bg-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 py-7 sm:px-10 sm:py-9 lg:grid-cols-4 lg:px-20 lg:py-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`flex items-center gap-3 px-2 py-4 sm:gap-4 sm:px-5 lg:px-7 ${
                  index % 2 === 0 ? "" : ""
                } ${index < 2 ? "border-b border-[#E7EEF4] lg:border-b-0" : ""} ${
                  index % 2 === 0 ? "lg:border-r lg:border-[#E7EEF4]" : ""
                } ${index === 2 ? "lg:border-r lg:border-[#E7EEF4]" : ""}`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EDF7FC] text-[#168FCB] sm:h-12 sm:w-12">
                  <Icon size={20} strokeWidth={1.7} />
                </div>

                <div>
                  <p className="text-2xl font-semibold tracking-[-0.05em] text-[#123452] sm:text-3xl">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ───────────────── STORY ───────────────── */}
      <section className="px-5 py-20 sm:px-10 sm:py-24 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title={
                <>
                  Built around the
                  <br className="hidden sm:block" /> needs of dentistry.
                </>
              }
              description="Bossdent Global was founded with a simple mission: to provide dental professionals with quality equipment and tools that help them deliver exceptional patient care."
            />

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
              <p>
                Since our inception, we have focused on sourcing and distributing dental products
                that bring together precision, durability, and innovation. Our journey began with an
                understanding of the challenges faced by dental practitioners and a commitment to
                becoming a trusted partner.
              </p>

              <p>
                Today, our portfolio spans products from endodontic files to handpieces and other
                dental essentials, backed by a commitment to quality and customer service.
              </p>
            </div>

            <div className="mt-8 border-l-2 border-[#26A7EB] pl-5 sm:pl-6">
              <p className="text-lg font-medium leading-7 tracking-[-0.025em] text-[#123452] sm:text-xl sm:leading-8">
                “Your one-stop solution for all dental equipment.”
              </p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#168FCB]">
                Committed to serving the dental fraternity
              </p>
            </div>

            <div className="mt-9">
              <PrimaryLink href="/products">Discover our range</PrimaryLink>
            </div>
          </div>

          {/* Editorial information panel */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-[28px] border border-[#E2EEF5] sm:-inset-5" />

            <div className="relative overflow-hidden rounded-2xl bg-[#0C2941] p-7 text-white sm:rounded-[24px] sm:p-10 lg:p-11">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#168FCB]/20 blur-[75px]" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-7">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-sky-300">
                      The Bossdent difference
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                      What sets us apart?
                    </h3>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sky-300">
                    <Sparkles size={23} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="divide-y divide-white/10">
                  {apartItems.map((item, index) => (
                    <div key={item.title} className="group flex gap-4 py-5 last:pb-0">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sky-300/20 bg-sky-300/[0.08] text-sky-300 transition-colors group-hover:bg-sky-300/15">
                        <Check size={15} />
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-white sm:text-[15px]">
                          {item.title}
                        </h4>
                        <p className="mt-1.5 text-xs leading-6 text-slate-400 sm:text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    Our commitment
                  </span>
                  <ShieldCheck size={20} className="text-sky-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── VALUES ───────────────── */}
      <section className="border-y border-[#E7EEF4] bg-[#F5F9FC] px-5 py-20 sm:px-10 sm:py-24 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What guides us"
              title={
                <>
                  Principles that
                  <br className="hidden sm:block" /> move us forward.
                </>
              }
            />

            <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
              Every relationship and product decision is shaped by the standards we set for
              ourselves.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.number}
                  className="group relative overflow-hidden rounded-2xl border border-[#E0EAF1] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B8DDF0] hover:shadow-[0_20px_50px_rgba(16,52,78,0.07)] sm:p-7 lg:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDF7FC] text-[#168FCB] transition-colors duration-300 group-hover:bg-[#168FCB] group-hover:text-white">
                      <Icon size={22} strokeWidth={1.6} />
                    </div>

                    <span className="text-xs font-medium tracking-wider text-slate-300">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-lg font-semibold tracking-[-0.025em] text-[#123452]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-7 text-slate-600">{value.description}</p>

                  <div className="mt-6 h-px w-10 bg-[#26A7EB]/60 transition-all duration-300 group-hover:w-16" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────── MISSION & VISION ───────────────── */}
      <section className="px-5 py-20 sm:px-10 sm:py-24 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            eyebrow="Our direction"
            title="Purpose in every detail."
            description="The mission that guides our work and the vision that shapes our future."
            centered
          />

          <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
            <article className="group relative overflow-hidden rounded-2xl bg-[#0C2941] p-7 text-white sm:rounded-[24px] sm:p-10 lg:p-12">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#168FCB]/15 blur-[70px] transition duration-500 group-hover:bg-[#168FCB]/25" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-300">
                    What we do
                  </span>
                  <Target size={25} className="text-sky-300" strokeWidth={1.5} />
                </div>

                <h3 className="mt-9 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                  Our mission
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-[15px] sm:leading-8">
                  To empower dental professionals with precision tools and international-quality
                  products that enable exceptional patient care. We aim to be a one-stop solution
                  for dental equipment needs through quality, innovation, and dedicated support.
                </p>

                <div className="mt-9 flex items-center gap-3 border-t border-white/10 pt-6 text-xs text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                  Quality · Precision · Support
                </div>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-[#DDEAF2] bg-[#F2F8FC] p-7 sm:rounded-[24px] sm:p-10 lg:p-12">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#26A7EB]/10 blur-[70px] transition duration-500 group-hover:bg-[#26A7EB]/20" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#168FCB]">
                    Where we are headed
                  </span>
                  <TrendingUp size={25} className="text-[#168FCB]" strokeWidth={1.5} />
                </div>

                <h3 className="mt-9 text-3xl font-semibold tracking-[-0.045em] text-[#123452] sm:text-4xl">
                  Our vision
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                  To be a trusted partner for dental professionals across India, recognised for our
                  commitment to quality, innovation, and customer service. We envision a future
                  where dental practices have access to quality equipment and dependable support.
                </p>

                <div className="mt-9 flex items-center gap-3 border-t border-[#DDEAF2] pt-6 text-xs text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#168FCB]" />
                  Trust · Progress · Partnership
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ───────────────── TIMELINE ───────────────── */}
      <section className="overflow-hidden bg-[#081E30] px-5 py-20 text-white sm:px-10 sm:py-24 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <SectionEyebrow light>Our journey</SectionEyebrow>

              <h2 className="text-3xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
                Built over time.
                <br />
                Focused on what’s next.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-400 sm:text-[15px] sm:leading-8">
                From our beginnings in 2008 to a growing network of dental professionals, each
                milestone represents another step in our journey.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs text-slate-400">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sky-300">
                  <Compass size={17} />
                </span>
                A continuing journey of service
              </div>
            </div>

            <div className="relative">
              <div className="absolute bottom-4 left-[27px] top-4 w-px bg-gradient-to-b from-[#26A7EB] via-white/15 to-transparent sm:left-[35px]" />

              <div className="space-y-2">
                {milestones.map((milestone, index) => (
                  <article
                    key={milestone.year}
                    className="group relative grid grid-cols-[56px_1fr] gap-4 rounded-xl p-3 transition-colors duration-300 hover:bg-white/[0.035] sm:grid-cols-[72px_1fr] sm:gap-5 sm:p-4"
                  >
                    <div className="relative z-[1] flex items-start justify-center pt-1">
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full border transition-colors duration-300 sm:h-9 sm:w-9 ${
                          index === 0
                            ? "border-[#26A7EB]/60 bg-[#26A7EB]/15"
                            : "border-white/15 bg-[#0A2236] group-hover:border-[#26A7EB]/60"
                        }`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#60C7F8]" />
                      </span>
                    </div>

                    <div className="border-b border-white/[0.08] pb-5 group-last:border-b-0 sm:pb-6">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                        <span className="text-sm font-semibold tracking-wide text-[#68CAFA]">
                          {milestone.year}
                        </span>
                        <span className="h-px w-5 bg-white/20" />
                        <h3 className="text-sm font-semibold text-white sm:text-base">
                          {milestone.title}
                        </h3>
                      </div>

                      <p className="mt-2 max-w-lg text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7">
                        {milestone.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── INDIA PRESENCE ───────────────── */}
      <section className="bg-[#F5F9FC] px-5 py-20 sm:px-10 sm:py-24 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionHeading
                eyebrow="Our presence"
                title={
                  <>
                    Connecting with
                    <br className="hidden sm:block" /> professionals across India.
                  </>
                }
                description="Our network connects dental professionals with Bossdent Global products and support across multiple cities."
              />
            </div>

            <div className="flex shrink-0 items-center gap-3 self-start rounded-xl border border-[#DFEAF2] bg-white px-4 py-3 md:self-auto">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EDF7FC] text-[#168FCB]">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xl font-semibold tracking-tight text-[#123452]">Pan India</p>
                <p className="mt-0.5 text-[10px] text-slate-500">Our distribution network</p>
              </div>
            </div>
          </div>

          {/* Existing Leaflet map */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-[#DFEAF2] bg-white shadow-[0_14px_45px_rgba(16,52,78,0.05)] sm:mt-14 sm:rounded-[24px]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E7EEF4] px-5 py-4 sm:px-7">
              <div>
                <p className="text-sm font-semibold text-[#123452]">Explore our presence</p>
                <p className="mt-1 text-xs text-slate-500">Geographic view of our network</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#EDF7FC] px-3 py-2 text-[10px] font-medium text-[#168FCB]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#168FCB]" />
                India network
              </span>
            </div>

            <div className="relative z-0">
              <IndiaPresenceMap />
            </div>
          </div>

          {/* Network cities */}
          <div className="mt-6 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="relative overflow-hidden rounded-2xl bg-[#0C2941] p-7 text-white sm:p-9">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#168FCB]/20 blur-[65px]" />

              <div className="relative">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-300">
                  Growing together
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                  A network built on relationships.
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Connecting with dental professionals in established and emerging markets
                  throughout India.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3 border-t border-white/10 pt-6">
                  <div>
                    <p className="text-2xl font-semibold text-white">19+</p>
                    <p className="mt-1 text-[10px] text-slate-400">Cities covered</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white">500+</p>
                    <p className="mt-1 text-[10px] text-slate-400">Clinics served</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#DFEAF2] bg-white p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-[#E7EEF4] pb-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#168FCB]">
                    Our network
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[#123452]">
                    Network cities
                  </h3>
                </div>
                <MapPin size={21} className="text-[#168FCB]" strokeWidth={1.6} />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-1 sm:grid-cols-3">
                {networkCities.map((city) => (
                  <div
                    key={city}
                    className="group flex items-center gap-2 rounded-lg px-2 py-2.5 transition-colors hover:bg-[#F2F8FC]"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#26A7EB]/70 transition-transform group-hover:scale-125" />
                    <span className="text-xs text-slate-600 transition-colors group-hover:text-[#123452] sm:text-[13px]">
                      {city}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 border-t border-[#E7EEF4] pt-4 text-[10px] leading-5 text-slate-400">
                Listed locations reflect the cities included in our current network information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── TEAM ───────────────── */}
      <section className="px-5 py-20 sm:px-10 sm:py-24 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="The people behind the work"
              title={
                <>
                  Expertise with
                  <br className="hidden sm:block" /> a shared purpose.
                </>
              }
              description="Different functions working together to support product quality, customer service, and distribution."
            />

            <div className="hidden items-center gap-2 text-xs text-slate-500 md:flex">
              Our teams
              <ChevronRight size={15} />
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {team.map((member) => {
              const Icon = member.icon;

              return (
                <article
                  key={member.number}
                  className="group rounded-2xl border border-[#E1EAF1] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B9DFF1] hover:shadow-[0_18px_45px_rgba(16,52,78,0.07)] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDF7FC] text-[#168FCB] transition-colors duration-300 group-hover:bg-[#168FCB] group-hover:text-white">
                      <Icon size={22} strokeWidth={1.6} />
                    </div>
                    <span className="text-xs tracking-wide text-slate-300">{member.number}</span>
                  </div>

                  <h3 className="mt-7 text-lg font-semibold tracking-[-0.025em] text-[#123452]">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#168FCB]">
                    {member.role}
                  </p>

                  <p className="mt-4 text-xs leading-6 text-slate-600 sm:text-[13px]">
                    {member.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────── FINAL CTA ───────────────── */}
      <section className="px-5 pb-16 sm:px-10 sm:pb-20 lg:px-20 lg:pb-24">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-2xl bg-[#0A2439] px-6 py-12 text-white sm:rounded-[28px] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute -right-20 -top-36 h-[400px] w-[400px] rounded-full bg-[#168FCB]/20 blur-[110px]" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#55C7FC]/60 to-transparent" />

          <div className="relative flex flex-col justify-between gap-9 lg:flex-row lg:items-end lg:gap-12">
            <div className="max-w-2xl">
              <SectionEyebrow light>Let's work together</SectionEyebrow>

              <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-4xl lg:text-[52px]">
                Better equipped
                <br />
                for what comes next.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                Connect with Bossdent Global to explore dental products and discuss your practice’s
                equipment needs.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryLink href="/products" light>
                Browse products
              </PrimaryLink>

              <Link
                href="/contact-us"
                className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full border border-white/20 px-5 py-3 text-xs font-medium text-white transition hover:border-white/40 hover:bg-white/[0.06] sm:px-6 sm:text-[13px]"
              >
                <Mail size={15} className="text-sky-300" />
                Contact us
              </Link>

              <a
                href="tel:+919810768600"
                className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full border border-white/20 px-5 py-3 text-xs font-medium text-white transition hover:border-white/40 hover:bg-white/[0.06] sm:px-6 sm:text-[13px]"
              >
                <Phone size={15} className="text-sky-300" />
                +91 9810-76-8600
              </a>
            </div>
          </div>

          <div className="relative mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <span>Bossdent Global · Serving the dental fraternity</span>
            <a
              href="mailto:sales@bossdentglobal.com"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              sales@bossdentglobal.com
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
