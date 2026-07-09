import FAQPage from "./Faqs";

export const metadata = {
  title: "FAQs | Bossdent Global - Dental Equipment & Clinic Solutions",
  description:
    "Find answers to common questions about Bossdent Global dental equipment, medical instruments, product quality, pricing, shipping, and clinic setup solutions. Get reliable information for your dental practice needs.",
  alternates: {
    canonical: "https://bossdentglobal.com/faqs",
  },
  openGraph: {
    title: "FAQs | Bossdent Global",
    description:
      "Explore frequently asked questions about our dental equipment, medical devices, and clinic solutions. Learn more about product support, orders, and services at Bossdent Global.",
    url: "https://bossdentglobal.com/faqs",
    siteName: "Bossdent Global",
    images: [
      {
        url: "/faq-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bossdent Global FAQs - Dental Equipment Supplier",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <FAQPage />;
}
