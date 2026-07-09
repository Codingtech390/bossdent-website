import TechnicalSupport from "./technicalSupport";

export const metadata = {
  title: "Technical Support | Bossdent Global - Dental Equipment Assistance",
  description:
    "Get professional technical support for dental chairs, instruments, and clinic equipment from Bossdent Global. Contact our expert team for installation guidance, troubleshooting, maintenance assistance, and warranty support.",
  alternates: {
    canonical: "https://bossdentglobal.com/technical-support",
  },
  openGraph: {
    title: "Technical Support | Bossdent Global",
    description:
      "Need help with Bossdent Global dental equipment? Our technical support team provides installation assistance, maintenance guidance, and warranty services across India.",
    url: "https://bossdentglobal.com/technical-support",
    siteName: "Bossdent Global",
    images: [
      {
        url: "/technical-support-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bossdent Global Technical Support for Dental Equipment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <TechnicalSupport />;
}
