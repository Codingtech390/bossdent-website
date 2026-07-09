import ContactPage from "./contactUs";

export const metadata = {
  title: "Contact Us | Bossdent Global",
  description:
    "Get in touch with Bossdent Global for premium dental equipment, medical instruments, and clinic solutions. Contact our team for product inquiries, pricing details, and professional support for your dental practice.",
  alternates: {
    canonical: "https://bossdentglobal.com/contact-us",
  },
  openGraph: {
    title: "Contact Us | Bossdent Global",
    description:
      "Contact Bossdent Global for high-quality dental equipment, advanced dental tools, and medical clinic solutions. Our team is ready to assist you with product information and support.",
    url: "https://bossdentglobal.com/contact-us",
    siteName: "Bossdent Global",
    images: [
      {
        url: "/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Bossdent Global - Dental Equipment Supplier",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <ContactPage />;
}
