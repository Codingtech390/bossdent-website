import CategoryPage from "./category";

// SEO data for each category
const categorySEO = {
  "endodontic-files": {
    title:
      "Endodontic Rotary Files India | E-Curve, Hyflex, NiTi Files – Bossdent",
    description:
      " Buy endodontic rotary files online in India. E-Curve, Hyflex, Protaper, K files, NiTi files & more. ISO certified, fast delivery pan India. Wholesale available.",
    keywords: [
      "Rotary files India",
      "E-Curve rotary file",
      "Hyflex rotary files",
      "NiTi files",
      "Root canal instruments",
      "K files dental India",
    ],
  },

  "dental-materials": {
    title:
      "Dental Materials India | Composites, Cements, GIC, Gutta Percha – Bossdent",
    description:
      "Buy dental materials online in India. Composites, Glass Ionomer Cement, Gutta Percha, EDTA, MTA, bonding agents, etchant & more. Wholesale available. ISO certified.",
    keywords: [
      "Dental composites India",
      "Glass Ionomer Cement India",
      "Gutta Percha India",
      "Dental cements India",
      "EDTA dental",
      "MTA dental material",
    ],
  },

  handpieces: {
    title:
      "Dental Handpieces India | Airotor, Contra Angle, LED Handpiece – Bossdent",
    description:
      " Buy dental handpieces online in India. High speed airotor, contra angle, platinum handpiece, micromotor & more. ISO certified. Pan India delivery. Wholesale pricing.",
    keywords: [
      "Dental Airotor India",
      "High speed handpiece India",
      "Contra angle handpiece",
      "LED dental handpiece",
      "Dental micromotor India",
    ],
  },

  maintenance: {
    title: "Maintenance Products | Bossdent Global",
    description:
      "Keep your dental equipment in optimal condition with Bossdent Global maintenance products including handpiece lubricant sprays.",
    keywords: [
      "dental maintenance products India",
      "handpiece lubricant spray India",
      "dental handpiece oil India",
      "dental equipment maintenance products",
      "handpiece cleaning spray dental",
      "dental lubricant spray India",
      "dental equipment cleaner India",
    ],
  },

  accessories: {
    title:
      "Dental Accessories India | RVG Sleeves, Burs, Gloves, Disinfectant – Bossdent",
    description:
      "Buy dental accessories online in India. Diamond burs, RVG sleeves, carbide burs, mouth mirrors, dental gloves, masks, disinfectants & more. Wholesale available.",
    keywords: [
      "Diamond bur dental India",
      "RVG sleeves India",
      "Dental accessories India",
      "Carbide bur India",
      "Dental disinfectant India",
      "Disposable dental products",
    ],
  },

  magnification: {
    title:
      "Dental Loupes India | TTL, Flip-up, LED Loupe with Light – Bossdent Global",
    description:
      "Buy dental loupes and magnification systems online in India. 2.5x, 3.5x TTL and flip-up loupes with LED headlight. Universal Zoom Loupe for dentists. Pan India delivery.",
    keywords: [
      "Dental loupe India",
      "Dental loupe with light India",
      "Universal Zoom Loupe",
      "2.5x dental loupe",
      "3.5x dental loupe",
      "TTL loupes India",
    ],
  },

  equipment: {
    title:
      "Dental Equipment India | Autoclave, Surgical & Implant Equipment – Bossdent",
    description:
      "Buy dental equipment online in India. Dental autoclave, UV sterilizer, surgical instruments, implant equipment & more. ISO certified. Wholesale for clinics. Pan India.",
    keywords: [
      "Dental equipment India",
      "Dental autoclave India",
      "Dental surgery equipment",
      "Dental implant instruments India",
      "UV chamber dental India",
    ],
  },
};

// Dynamic metadata generator
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const category = resolvedParams.category;

  const seo = categorySEO[category] || {
    title: "Dental Products | Bossdent Global",
    description:
      "Explore Bossdent Global dental products including equipment, handpieces, materials, and accessories.",
  };

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,

    alternates: {
      canonical: `https://bossdentglobal.com/products/category/${category}`,
    },

    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `https://bossdentglobal.com/products/category/${category}`,
      siteName: "Bossdent Global",
      images: [
        {
          url: "/bossdent-category.jpg",
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

// Page component
export default function Page({ params }) {
  return <CategoryPage params={params} />;
}
