import Returnswarranty from "./returnWarrenty";

export const metadata = {
  title:
    "Return & Warranty Policy | Bossdent Global - Dental Equipment Protection",
  description:
    "Learn about Bossdent Global's return eligibility and warranty coverage for dental chairs, X-ray units, and instruments. 7-day easy returns and genuine manufacturer warranty support.",
  alternates: {
    canonical: "https://bossdentglobal.com/returns-warranty",
  },
  openGraph: {
    title: "Return & Warranty Policy | Bossdent Global",
    description:
      "Understand our transparent return process and comprehensive warranty protection for your dental clinic equipment. Secure your investment with Bossdent Global.",
    url: "https://bossdentglobal.com/returns-warranty",
    siteName: "Bossdent Global",
    images: [
      {
        url: "/returns-warranty-og.jpg",
        width: 1200,
        height: 630,
        alt: "Bossdent Global Return and Warranty Policy",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function Page() {
  return <Returnswarranty />;
}
