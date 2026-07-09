import PrivacyPolicyPage from "./privacyPolicy";

export const metadata = {
  title: "Privacy Policy | Bossdent Global - Secure Dental Equipment Store",
  description:
    "Review Bossdent Global's Privacy Policy. Learn how we protect your personal data, clinic information, and payment security when purchasing dental equipment and services.",
  alternates: {
    canonical: "https://bossdentglobal.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Bossdent Global",
    description:
      "Your privacy matters to us. Read how Bossdent Global handles your data securely and ensures a safe shopping experience for dental professionals.",
    url: "https://bossdentglobal.com/privacy-policy",
    siteName: "Bossdent Global",
    images: [
      {
        url: "/privacy-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bossdent Global Privacy & Data Protection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
