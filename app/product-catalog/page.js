import ProductCatalog from "./ProductCatalog";

export const metadata = {
  title: "Product Catalog | Bossdent Global - Dental Equipment Supplier",
  description:
    "Explore the complete product catalog of Bossdent Global featuring premium dental chairs, instruments, sterilization units, and clinic equipment. Discover high-quality dental solutions for clinics and hospitals.",
  alternates: {
    canonical: "https://bossdentglobal.com/product-catalog",
  },
  openGraph: {
    title: "Product Catalog | Bossdent Global",
    description:
      "Browse Bossdent Global’s dental equipment catalog including dental chairs, surgical instruments, and clinic setup solutions.",
    url: "https://bossdentglobal.com/product-catalog",
    siteName: "Bossdent Global",
    images: [
      {
        url: "/catalog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bossdent Global Dental Equipment Product Catalog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <ProductCatalog />;
}
