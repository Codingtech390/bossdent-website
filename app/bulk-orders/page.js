import BulkOrders from "./bulkOrders";

export const metadata = {
  title: "Bulk Orders | Bossdent Global - Dental Equipment Supplier",
  description:
    "Place bulk orders for high-quality dental equipment, medical instruments, and clinic supplies at Bossdent Global. Get competitive pricing, customized solutions, and reliable worldwide delivery for large quantity purchases.",
  alternates: {
    canonical: "https://bossdentglobal.com/bulk-orders",
  },
  openGraph: {
    title: "Bulk Orders | Bossdent Global",
    description:
      "Order dental chairs, instruments, and medical clinic equipment in bulk from Bossdent Global. Contact us for wholesale pricing and customized supply solutions.",
    url: "https://bossdentglobal.com/bulk-orders",
    siteName: "Bossdent Global",
    images: [
      {
        url: "/bulk-orders-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bossdent Global Bulk Orders - Dental Equipment Wholesale",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <BulkOrders />;
}
