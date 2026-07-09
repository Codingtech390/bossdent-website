import ProductsPage from "./product";

export const metadata = {
  title:
    "Dental Products | Rotary Files, Handpieces & Equipment | Bossdent Global",

  description:
    "Explore high-quality dental products from Bossdent Global including rotary files, endodontic instruments, dental handpieces, loupes, and clinic equipment. Trusted supplier across India.",

  alternates: {
    canonical: "https://bossdentglobal.com/products",
  },

  openGraph: {
    title: "Dental Products Collection | Bossdent Global",
    description:
      "Browse premium dental equipment and instruments from Bossdent Global. ISO-certified rotary files, handpieces, and dental accessories available.",

    url: "https://bossdentglobal.com/products",

    siteName: "Bossdent Global",

    images: [
      {
        url: "/images/products/bossdentLogo.jpeg",
        width: 1200,
        height: 630,
        alt: "Bossdent Global Dental Products",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bossdent Global Dental Products",
    description:
      "Shop rotary files, handpieces, and dental equipment from Bossdent Global.",
    images: ["/images/products/bossdentLogo.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ProductsPage />;
}
