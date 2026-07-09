import Shipping from "./Shipping";

export const metadata = {
  title: "Shipping Policy | Bossdent Global",
  description:
    "Read the Shipping Policy of Bossdent Global to learn about delivery timelines, order processing, international shipping, tracking details, and logistics for our dental equipment and medical products.",
  alternates: {
    canonical: "https://bossdentglobal.com/shipping",
  },
  openGraph: {
    title: "Shipping Policy | Bossdent Global",
    description:
      "Learn about Bossdent Global’s shipping process, delivery times, order tracking, and international logistics for dental equipment and clinic supplies.",
    url: "https://bossdentglobal.com/shipping",
    siteName: "Bossdent Global",
    images: [
      {
        url: "/shipping-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bossdent Global Shipping Policy - Dental Equipment Delivery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <Shipping />;
}
