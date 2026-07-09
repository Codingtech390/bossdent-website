import SiteMap from "./siteMap";

export const metadata = {
  title: "Sitemap | Bossdent Global",
  description:
    "Browse the complete sitemap of Bossdent Global. Find all important pages including dental products, technical support, policies, contact details, and more in one place.",
  alternates: {
    canonical: "https://www.bossdentglobal.com/site-map",
  },
  openGraph: {
    title: "Sitemap | Bossdent Global",
    description:
      "Explore all website pages of Bossdent Global including products, support services, company information, and policies.",
    url: "https://www.bossdentglobal.com/site-map",
    siteName: "Bossdent Global",
    images: [
      {
        url: "/sitemap-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bossdent Global Website Sitemap",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <SiteMap />;
}
