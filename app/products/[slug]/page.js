  import ProductDetailPage, { getProductBySlug } from "./productDetails";

  // helper function
  function getFirstSentence(text) {
    if (!text) return "";
    const index = text.indexOf(".");
    return index !== -1 ? text.slice(0, index + 1) : text;
  }

  // Dynamic title & description
  export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const product = getProductBySlug(resolvedParams.slug);

    const description = product?.fullDescription
      ? getFirstSentence(product.fullDescription)
      : "Explore premium dental equipment and medical products at Bossdent Global.";

    return {
      title: product
        ? `${product.name} | Bossdent Global`
        : "Product | Bossdent Global",

      description,

      alternates: {
        canonical: `https://bossdentglobal.com/products/${resolvedParams.slug}`,
      },

      openGraph: {
        title: product ? `${product.name} | Bossdent Global` : "Bossdent Global",

        description,

        url: `https://bossdentglobal.com/products/${resolvedParams.slug}`,

        siteName: "Bossdent Global",

        images: [
          {
            url: product?.images?.[0] || "/shipping-og-image.jpg",
            width: 1200,
            height: 630,
            alt: product?.name || "Bossdent Global",
          },
        ],

        locale: "en_US",
        type: "website",
      },
    };
  }

  export default function Page({ params }) {
    return <ProductDetailPage params={params} />;
  }
