import TermsPage from "./termCondition";

export const metadata = {
  title: "Terms & Conditions | Bossdent Global",
  description:
    "Read the Terms and Conditions of Bossdent Global to understand our policies regarding dental equipment purchases, payments, shipping, warranties, returns, and website usage. Please review these terms before placing an order.",
  alternates: {
    canonical: "https://bossdentglobal.com/term-condition",
  },
  openGraph: {
    title: "Terms & Conditions | Bossdent Global",
    description:
      "Review the official Terms and Conditions of Bossdent Global covering product purchases, warranties, returns, shipping policies, and use of our dental equipment website.",
    url: "https://bossdentglobal.com/term-condition",
    siteName: "Bossdent Global",
    images: [
      {
        url: "/terms-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bossdent Global Terms and Conditions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <TermsPage />;
}
