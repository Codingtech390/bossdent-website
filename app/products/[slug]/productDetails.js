// app/products/[slug]/page.js
import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Phone,
  Mail,
  CheckCircle,
  Package,
  Shield,
  Truck,
  Info,
} from "lucide-react";
import ProductDetailClient from "./ProductDetailClient";
import { additionalProducts } from "@/data/additional-products";

// ─────────────────────────────────────────────────────────────
// Convert products from additional-products.js into the
// structure expected by ProductDetailClient.
// ─────────────────────────────────────────────────────────────

const getAdditionalProductBySlug = (slug) => {
  for (const [categorySlug, products] of Object.entries(additionalProducts)) {
    const product = products.find((item) => item.slug === slug);

    if (!product) continue;

    const categoryNames = {
      "endodontic-files": "Endodontic Files",
      handpieces: "Handpieces",
      "dental-materials": "Dental Materials",
      burs: "Burs",
      maintenance: "Maintenance Products",
      accessories: "Accessories",
      magnification: "Magnification Equipment",
      equipment: "Dental Equipment",
    };

    return {
      id: product.id,

      name: product.name,

      brand: product.brand,

      // IMPORTANT:
      // This is the CATEGORY slug, not the product URL slug.
      // ProductDetailClient uses product.slug for the category breadcrumb.
      slug: categorySlug,

      category: categoryNames[categorySlug] || "Products",

      subtitle: product.shortDesc,

      fullDescription: `${product.name} by ${product.brand} is a professional dental product supplied for clinical dental applications. The product is presented according to the information available in the supplied product catalog. Please contact us for product availability, specifications, pack configuration and pricing.`,

      price: product.price || "Contact for Price",

      images: product.images?.length > 0 ? product.images : [product.image],

      features: product.features || [],

      specifications: {
        Brand: product.brand || "Not specified",
        Product: product.name,
        Category: categoryNames[categorySlug] || "Products",
        Availability: "Contact for availability",
        Pricing: product.price || "Contact for Price",
      },

      usageInstructions: [
        "Review the product information before use.",
        "Follow the manufacturer's instructions and recommended clinical protocol.",
        "Use the product only for its intended dental application.",
        "Store and handle the product according to the manufacturer's recommendations.",
        "Contact us for detailed specifications, pack configuration and availability.",
      ],

      variants: undefined,

      relatedProducts: [],
    };
  }

  return null;
};


// This would come from your database/API in production
export const getProductBySlug = (slug) => {
  const products = {
    "e-curve-gold": {
      id: 22,
      name: "E-CURVE GOLD FILE",
      category: "Endodontic Files",
      slug: "endodontic-files",
      subtitle: "Designed for enhanced flexibility and fatigue resistance.",
      fullDescription:
        "E-CURVE Gold files support smooth shaping in complex and highly curved canal anatomies, delivering consistent and predictable results across a wide range of clinical cases. Manufactured using gold heat-treated control memory NiTi alloy, these files maintain excellent cutting efficiency while offering enhanced control during instrumentation. The advanced heat treatment process improves flexibility and cyclic fatigue resistance, significantly helping to reduce the risk of file separation during clinical procedures. The file design features sharp cutting flutes and a variable pitch configuration that enhances cutting performance and prevents locking or screwing effects inside the canal. A safety non-cutting guiding tip ensures safe progression toward the working length while minimizing ledge formation and canal transportation.",
      price: "From ₹1,300",

      images: [
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018209/E-CurveFlex1_pjacjy.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1772877592/flex-file-gold4_pmybwh.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1772877719/flex-file-gold3_lwdhpe.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1772877882/flex-file-gold-5_f28rrv.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779273201/Screenshot_2026-05-20_160238_cobbdi.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779273355/Screenshot_2026-05-20_160538_era4ab.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779273795/GoldFlex_rhm7nu.png",
      ],

      features: [
        "Variable Pitch",
        "Heat Treated Control Memory Ni-Ti Wire",
        "Sharp Cutting Flutes",
        "Safety Non-Cutting Tip",
      ],

      specifications: {
        Material: "Gold Heat Treated NiTi",
        TipSizes: "17, 19, 20, 25",
        TaperOptions: "2%, 4%, 6%, 8%",
        Length: "21mm / 25mm / 31mm",
        Speed: "300–350 rpm",
        Torque: "2.5–3 N·cm",
        Pack: "Pack of 6 Files",
      },

      usageInstructions: [
        "Begin with glide path preparation",
        "Use recommended speed and torque settings",
        "Irrigate canal during instrumentation",
        "Inspect file before and after use",
        "Follow standard crown-down shaping technique",
      ],

      //new
      variants: {
        assorted1: [
          "17/8/19mm",
          "19/2/(21/25mm)",
          "20/4/(21/25mm)",
          "20/6/(21/25mm)",
          "25/4/(21/25mm)",
          "25/6/(21/25mm)",
        ],
        assorted2: [
          "17/8/19mm",
          "17/4/(21/25mm)",
          "20/4/(21/25mm)",
          "20/6/(21/25mm)",
          "25/4/(21/25mm)",
          "25/6/(21/25mm)",
        ],
        glidePathFile: [
          "13/2/(21/25mm)",
          "16/2/(21/25mm)",
          "19/2/(21/25mm)",
          "15/3/(21/25mm)",
        ],
        cuttingShapingFile: [
          "15/4/(21/25mm)",
          "20/4/(21/25mm)",
          "25/4/(21/25mm)",
          "30/4/(21/25mm)",
          "35/4/(21/25mm)",
          "40/4/(21/25mm)",
          "15/6/(21/25mm)",
          "20/6/(21/25mm)",
          "25/6/(21/25mm)",
          "30/6/(21/25mm)",
          "35/6/(21/25mm)",
          "40/6/(21/25mm)",
        ],
        largeAssorted: [
          "30/4/(21/25mm)",
          "35/4/(21/25mm)",
          "40/4/(21/25mm)",
          "30/6/(21/25mm)",
          "35/6/(21/25mm)",
          "40/6/(21/25mm)",
        ],
        protaperSystem: [
          "Sx/19mm",
          "S1/(21/25mm)",
          "S2/(21/25mm)",
          "F1/(21/25mm)",
          "F2/(21/25mm)",
          "F3/(21/25mm)",
        ],
      },

      relatedProducts: [23, 24, 25],
    },
    "e-curve-blue": {
      id: 23,
      name: "E-CURVE BLUE",
      category: "Endodontic Files",
      slug: "endodontic-files",

      subtitle: "Provides superior strength while maintaining flexibility",
      fullDescription:
        "E-CURVE Blue files combine high torsional strength with adaptive flexibility to effectively negotiate a wide range of canal anatomies, delivering reliable shaping performance across varying clinical conditions. The advanced blue heat treatment process enhances durability and cyclic fatigue resistance, enabling consistent canal shaping with reduced risk of instrument failure during procedures. The optimized flute geometry promotes efficient debris removal and smooth cutting action, while the variable pitch design prevents locking or screwing effects inside the canal. A safety non-cutting tip ensures guided canal progression while minimizing the chances of perforation, ledge formation, and canal transportation.",
      price: "From ₹1,500",

      images: [
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1773137563/flexblue_vuyndh.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1772884059/eflex-blue1_dlgvac.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1772884280/Screenshot_2026-03-07_172015-removebg-preview_zloreu.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779274860/Gemini_Generated_Image_libcavlibcavlibc_p20nz5.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779275020/Gemini_Generated_Image_n62lpxn62lpxn62l_q0rdec.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779275140/Gemini_Generated_Image_dpndcbdpndcbdpnd_yteuqp.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779275400/Gemini_Generated_Image_utiw4jutiw4jutiw_qivhfm.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779275534/Gemini_Generated_Image_l3tgb1l3tgb1l3tg_n9psrr.png",
      ],

      features: [
        "Variable Pitch",
        "Heat Treated Control Memory Ni-Ti Wire",
        "Sharp Cutting Flutes",
        "Safety Non-Cutting Tip",
      ],

      specifications: {
        Material: "Blue Heat Treated NiTi",
        TipSizes: "15, 20, 25, 30, 35, 40",
        TaperOptions: "4%, 6%",
        Length: "21mm / 25mm / 31mm",
        Speed: "300–350 rpm",
        Torque: "2.5–3 N·cm",
        Pack: "Pack of 6 Files",
      },

      usageInstructions: [
        "Create glide path before instrumentation",
        "Operate with recommended speed and torque",
        "Use adequate irrigation during shaping",
        "Avoid excessive pressure",
        "Dispose file if deformation occurs",
      ],
      variants: {
        assorted1: [
          "17/8/19mm",
          "19/2/(21/25mm)",
          "20/4/(21/25mm)",
          "20/6/(21/25mm)",
          "25/4/(21/25mm)",
          "25/6/(21/25mm)",
        ],
        assorted2: [
          "17/8/19mm",
          "17/4/(21/25mm)",
          "20/4/(21/25mm)",
          "20/6/(21/25mm)",
          "25/4/(21/25mm)",
          "25/6/(21/25mm)",
        ],
        glidePathFile: [
          "13/2/(21/25mm)",
          "16/2/(21/25mm)",
          "19/2/(21/25mm)",
          "15/3/(21/25mm)",
        ],
        cuttingShapingFile: [
          "15/4/(21/25mm)",
          "20/4/(21/25mm)",
          "25/4/(21/25mm)",
          "30/4/(21/25mm)",
          "35/4/(21/25mm)",
          "40/4/(21/25mm)",
          "15/6/(21/25mm)",
          "20/6/(21/25mm)",
          "25/6/(21/25mm)",
          "30/6/(21/25mm)",
          "35/6/(21/25mm)",
          "40/6/(21/25mm)",
        ],
        largeAssorted: [
          "30/4/(21/25mm)",
          "35/4/(21/25mm)",
          "40/4/(21/25mm)",
          "30/6/(21/25mm)",
          "35/6/(21/25mm)",
          "40/6/(21/25mm)",
        ],
      },

      relatedProducts: [22, 24, 25],
    },
    "e-curve-mini": {
      id: 24,
      name: "E-CURVE MINI FILE",
      category: "Endodontic Files",
      slug: "endodontic-files",

      subtitle: "Developed for deciduous teeth",
      fullDescription:
        "E-CURVE Blue files combine high torsional strength with adaptive flexibility to effectively negotiate a wide range of canal anatomies, delivering reliable shaping performance across varying clinical conditions. The advanced blue heat treatment process enhances durability and cyclic fatigue resistance, enabling consistent canal shaping with reduced risk of instrument failure during procedures. The optimized flute geometry promotes efficient debris removal and smooth cutting action, while the variable pitch design prevents locking or screwing effects inside the canal. A safety non-cutting tip ensures guided canal progression while minimizing the chances of perforation, ledge formation, and canal transportation.",
      price: "From ₹1,500",

      images: [
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1773139269/Gemini_Generated_Image_johg8rjohg8rjohg-removebg-preview_iv6esu.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1773139528/flexmini6_tjc3jl.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1773138175/glexmini5_gjxktu.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779275812/Gemini_Generated_Image_gdr874gdr874gdr8_wiocfc.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779275945/Gemini_Generated_Image_4k2egb4k2egb4k2e_k0vbzs.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779276082/Gemini_Generated_Image_c2ng7hc2ng7hc2ng_vgwisu.png",
      ],

      features: [
        "Variable Pitch",
        "Heat Treated Control Memory Ni-Ti Wire",
        "Sharp Cutting Flutes",
        "Safety Non-Cutting Tip",
      ],

      specifications: {
        Application: "Deciduous / Pediatric Teeth",
        TipSizes: "17, 20, 25, 30",
        TaperOptions: "4%, 6%, 8%",
        Length: "16mm",
        Speed: "300–350 rpm",
        Torque: "2.5–3 N·cm",
        Pack: "Pack of 6 Files",
      },

      usageInstructions: [
        "Use with pediatric endodontic protocols",
        "Operate at recommended speed",
        "Ensure proper irrigation",
        "Avoid excessive pressure",
        "Check file condition after each use",
      ],
      variants: {
        cuttingShapingFile: [
          "20/4/16mm",
          "25/4/16mm",
          "30/4/16mm",
          "20/6/16mm",
          "25/6/16mm",
          "30/6/16mm",
        ],
      },

      relatedProducts: [22, 23, 25],
    },
    "e-curve-rt": {
      id: 25,
      name: "E-CURVE RT",
      category: "Endodontic Files",
      slug: "endodontic-files",
      subtitle:
        "Safe and effective removal of obturation materials without the need for solvents",
      fullDescription:
        "E-CURVE RT files are engineered specifically for endodontic retreatment procedures, enabling efficient removal of gutta-percha and filling materials from previously treated root canals while maintaining canal integrity throughout the process. The specialized cutting and guiding tip design allows the instrument to penetrate and remove obturation materials effectively, significantly reducing reliance on chemical solvents and making the procedure safer for both clinician and patient. Variable pitch configuration and sharp cutting flutes enhance debris removal and prevent instrument locking during operation, ensuring smooth and controlled progression through the canal. With reliable cutting performance and enhanced procedural safety, E-CURVE RT files support predictable cleaning and reshaping of root canals during retreatment.",
      price: "From ₹1,500",
      images: [
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018215/E-FLEXRT1_z1a62i.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1773138642/Screenshot_2026-03-10_155903-removebg-preview_g4uc69.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779276450/Gemini_Generated_Image_bc3x8pbc3x8pbc3x_gxfi9x.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779276652/Gemini_Generated_Image_x362vvx362vvx362_hjyosm.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779276843/Gemini_Generated_Image_lliwkzlliwkzlliw_vyfsb9.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779277001/Gemini_Generated_Image_sn8r35sn8r35sn8r_ce631m.png",
      ],

      features: [
        "Variable Pitch",
        "Sharp Cutting Flutes",
        "Efficient Cutting and Guiding Tip",
      ],

      specifications: {
        Application: "Retreatment",
        TipSizes: "20, 25, 30",
        TaperOptions: "7%, 8%, 9%",
        Length: "16mm / 18mm / 22mm",
        Speed: "350 rpm",
        Torque: "2 N·cm",
        Pack: "Pack of 6 Files",
      },

      usageInstructions: [
        "Use for removal of obturation materials",
        "Operate with recommended speed and torque",
        "Use irrigation during retreatment",
        "Do not apply excessive pressure",
        "Inspect file for wear before reuse",
      ],
      variants: {
        cuttingShapingFile: [
          "20/7/(21/25mm)",
          "25/8/(21/25mm)",
          "30/9/(21/25mm)",
        ],
      },

      relatedProducts: [22, 23, 24],
    },
    "normal-led-handpiece": {
      id: 29,
      name: "NORMAL LED HANDPIECE",
      category: "Handpieces",
      slug: "handpieces",
      subtitle:
        "Ceramic Bearing High-Speed Handpiece with Shadow-Free Illumination",
      fullDescription:
        "Normal LED Handpiece is built for dental professionals who need reliable performance and a comfortable working experience throughout the day. The ceramic ball bearings keep rotation smooth and steady, cutting down on vibration so you can work with better control and less fatigue. The LED shadow-free lighting gives you a clear view of the operating site without any distracting shadows, which makes a real difference during detailed procedures. Its lightweight and ergonomic body means you are not fighting the handpiece — it just feels natural in your hand. Designed to reduce procedural time without compromising on quality, it helps keep patients comfortable while making your workflow more efficient.",
      price: "Contact for Price",
      images: [
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779272398/1_3_m6vph2.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779272399/2_3_ce2tyb.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779272405/4_1_zvmcoc.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779272408/3_2_nttwzt.png",
        // "https://res.cloudinary.com/dk4npblv3/image/upload/v1773301573/Normal_LED_Handpiece_jvwhxn.png",
        // "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018464/normal-led2_hi2wpc.png",
        // "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018466/normal-led3_ohz7s9.png",
        // "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018462/normal-led1_nkm4u8.png",
      ],
      features: [
        "Ceramic Ball Bearings",
        "Shadow iIlumination",
        "Light Weight With Fine Grip",
      ],
      specifications: {
        Type: "High-Speed LED Handpiece",
        Bearings: "Ceramic Ball Bearings",
        Illumination: "LED Shadow-Free",
        Design: "Lightweight & Ergonomic",
        CoolingSystem: "Water Spray",
        Sterilization: "Autoclavable",
        Coupling: "Standard",
      },
      usageInstructions: [
        "Ensure proper connection to dental unit",
        "Use recommended burs only",
        "Maintain adequate water coolant flow",
        "Lubricate regularly for smooth operation",
        "Sterilize according to manufacturer guidelines",
        "Inspect for vibration or noise before use",
      ],
      relatedProducts: [28],
    },
    "mini-head-handpiece": {
      id: 30,
      name: "MINI HEAD HANDPIECE",
      category: "Handpieces",
      slug: "handpieces",
      subtitle: "High-Speed Mini Head Design for Improved Access & Precision",
      fullDescription:
        "Mini Head Handpiece is specially designed to provide superior accessibility and precision in posterior and restricted areas of the oral cavity. The compact mini head design allows better visibility and improved maneuverability, making it ideal for pediatric dentistry, endodontic access preparation, and procedures in patients with limited mouth opening. Equipped with high-quality ceramic ball bearings, the handpiece ensures smooth, stable rotation with reduced vibration and noise. Its ergonomic and fine-grip design enhances operator comfort and control, minimizing hand fatigue during extended clinical procedures. The integrated cooling system and durable construction ensure reliable performance, efficient cutting, and long service life in everyday dental practice.",
      price: "Contact for Price",
      images: [
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779272097/1_2_mlr3hf.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779272104/2_2_igcm3d.png",
        // "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018455/mini-head_qoxcko.png",
        // "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018460/mini-head3_uoqqx7.png",
      ],
      features: [
        "Ceramic Ball Bearings",
        "Shadow iIlumination",
        "Light Weight With Fine Grip",
      ],
      specifications: {
        Type: "High-Speed Mini Head Handpiece",
        Bearings: "Ceramic Ball Bearings",
        Design: "Compact Mini Head",
        Grip: "Fine Ergonomic Grip",
        CoolingSystem: "Water Spray",
        Sterilization: "Autoclavable",
        Coupling: "Standard",
      },
      usageInstructions: [
        "Connect securely to dental unit",
        "Use appropriate burs for procedures",
        "Ensure proper water coolant flow",
        "Lubricate regularly for smooth operation",
        "Sterilize after each use",
        "Check for vibration or unusual sound before use",
      ],
      relatedProducts: [29],
    },
    "5-led-golden-series": {
      id: 31,
      name: "5 LED GOLDEN SERIES",
      category: "Handpieces",
      subtitle: "High-Speed Shadowless Airotor with 5 LED & 5-Hole Water Spray",
      fullDescription:
        "5 LED Golden Series is a high-speed airotor handpiece that brings together powerful illumination and smooth cutting performance for everyday clinical use. With 5 LED lights built in, it throws shadowless light right where you need it, giving you a clear and unobstructed view of the operating field at all times. The five-hole water spray system keeps things cool during high-speed operation, protecting the tooth structure and clearing debris efficiently. Ceramic ball bearings make the rotation feel smooth and quiet, reducing vibration so you stay in control without unnecessary strain. The fine grip and lightweight body mean you can work through longer procedures without your hand tiring out.",
      price: "Contact for Price",
      images: [
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779271205/8_e1xh0w.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779271235/9_imyqwm.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779271202/4_nsmdx2.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779271202/3_ugrc3i.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779271201/1_ng7rqj.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779271200/2_qvwvrv.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779271199/6_zz8geb.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779271199/7_cqqs3h.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1773648032/Gemini_Generated_Image_fryw0nfryw0nfryw_bmmwrg.png",
        // "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018441/5LEDGoldenSeries2_yd6cha.png",
        // "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018443/5LEDGoldenSeries3_n3dogx.png",
        // "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018439/5LEDGoldenSeries1_yzf2bt.png",
      ],
      features: [
        "Ceramic Ball Bearings",
        "Shadow iIlumination",
        "Light Weight With Fine Grip",
      ],
      specifications: {
        Type: "High-Speed Airotor Handpiece",
        Illumination: "5 LED Shadowless System",
        SpraySystem: "5-Hole Water Spray",
        Speed: "High-Speed",
        Design: "Ergonomic Golden Series",
        CoolingSystem: "Multi-point Water Spray",
        Sterilization: "Autoclavable",
        Coupling: "Standard",
      },
      usageInstructions: [
        "Ensure secure connection to dental unit",
        "Use recommended burs only",
        "Maintain adequate water coolant flow",
        "Lubricate regularly for optimal performance",
        "Sterilize according to standard protocol",
        "Inspect before each procedure for smooth operation",
      ],
      relatedProducts: [29, 30],
    },
    "led-platinum-handpiece": {
      id: 32,
      name: "PLATINUM HANDPIECE",
      category: "Handpieces",
      slug: "handpieces",
      subtitle: "Premium Stainless Steel with Super Torque",
      fullDescription:
        "Platinum Handpiece is built for clinicians who want a dependable, high-performing tool that holds up through busy clinical days. The stainless steel body feels solid and well-made, and the ceramic ball bearings keep the rotation smooth and consistent with minimal vibration. Super torque ensures you get steady cutting power even during demanding procedures, so there are no unexpected slowdowns mid-treatment. The ergonomic design fits naturally in your hand, reducing fatigue when you are working through back-to-back cases. Clean, reliable, and built to last — the Platinum Handpiece is a straightforward choice for any dental setup.",
      price: "Contact for Price",
      images: [
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779272685/1_4_xwll0g.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779272686/2_4_nomrbv.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779272686/3_3_gwyas4.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779272687/4_2_qtmpxp.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779272719/5_no1vhd.png",
        // "https://res.cloudinary.com/dk4npblv3/image/upload/v1772885869/platinum_s6zhjk.png",
        // "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018454/led-platinum-handpiece3_vqdocq.png",
      ],
      features: [
        "Ceram ic Ball Bearings",
        "Ergonomic Design",
        "Stainless Steel Body",
        "Super Torque",
      ],
      specifications: {
        Type: "High-Speed Handpiece",
        "Body Material": "Stainless Steel",
        Bearings: "Ceramic Ball Bearings",
        Illumination: "LED Shadow-free",
        Design: "Ergonomic",
        Torque: "Super Torque",
        Weight: "Lightweight",
        Sterilization: "Autoclavable",
        Coupling: "Standard",
        "Water Spray": "Triple spray",
      },
      usageInstructions: [
        "Clean and lubricate before each use",
        "Use only recommended burs",
        "Ensure proper water coolant flow",
        "Regular maintenance prolongs lifespan",
        "Sterilize according to manufacturer guidelines",
        "Check for unusual vibration or noise",
      ],
      relatedProducts: [6, 7, 8],
    },
    "implant-handpiece-20-1": {
      id: 33,
      name: "IMPLANT HANDPIECE 20:1",
      category: "Implantology",
      slug: "handpieces",
      subtitle: "High Torque 20:1 Reduction Handpiece for Implant Procedures",
      fullDescription:
        "Implant Handpiece 20:1 is designed with the dental professional in mind, making implant procedures feel more controlled and less tiring from start to finish. The 20:1 reduction gear ratio gives you powerful torque at low speeds, so you can place implants with confidence and precision without overworking the handpiece. Ceramic ball bearings keep the operation smooth and quiet, which matters a lot during longer surgical cases where noise and vibration add unnecessary stress. The lightweight body with a fine grip sits comfortably in your hand, giving you better control and reducing fatigue even through extended procedures. Built to reduce procedural time while keeping the patient comfortable, it is a reliable tool that just works when you need it to.",
      price: "Contact for Price",
      images: [
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779271751/1_1_z9hqgq.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779271752/2_1_fuvjcj.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779271761/3_1_z6ca72.png",
        // "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018447/Implant_Handpiece_2012_qa0orl.png",
        // "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018445/Implant_Handpiece_2011_ud2cxt.png",
        // "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018447/Implant_Handpiece_2012_qa0orl.png",
      ],
      features: [
        "Ceramic Ball Bearings",
        "Powerful, Quiet And Large Torque",
        "Light Weight With Fine Grip",
      ],
      specifications: {
        Type: "Implant Surgical Handpiece",
        GearRatio: "20:1 Reduction",
        Bearings: "Ceramic Ball Bearings",
        Speed: "Low-Speed High Torque",
        Application: "Implant Drilling & Placement",
        Sterilization: "Autoclavable",
        Coupling: "Standard E-Type",
      },
      usageInstructions: [
        "Attach securely to compatible implant motor",
        "Set recommended torque and speed settings",
        "Ensure proper irrigation during osteotomy preparation",
        "Avoid excessive pressure during drilling",
        "Sterilize according to standard surgical protocol",
        "Inspect gear mechanism before each surgical use",
      ],
      relatedProducts: [29, 31],
    },
    "straight-handpiece": {
      id: 45,
      name: "STRAIGHT HANDPIECE",
      category: "Handpieces",
      slug: "handpieces",
      subtitle:
        "E-Type Low Speed Handpiece with Ceramic Bearings for Smooth & Precise Control",
      fullDescription:
        "Straight Handpiece is built for dental professionals who need a dependable low-speed instrument for polishing, finishing, and laboratory work. The ceramic ball bearings ensure smooth and consistent rotation with minimal vibration, giving you better tactile control and a more comfortable working experience throughout the day. Designed as an E-Type low-speed handpiece, it connects easily with standard dental units and motors, making it a practical choice for everyday clinical and lab use. Its autoclavable construction supports sterilization at up to 135°C, ensuring complete infection control compliance without compromising the integrity of the instrument. Lightweight and well-balanced, the Straight Handpiece reduces operator fatigue and delivers reliable performance across a wide range of low-speed procedures.",
      price: "Contact for Price",
      images: [
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779526990/1_dthnay.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779526990/2_ihzmmg.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779526989/7_rvwdu3.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779526990/4_qwaif1.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779526990/3_jfrt7a.png",
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779526996/5_skqwem.png",
      ],
      features: [
        "Ceramic Ball Bearings",
        "E-Type Low Speed Handpiece",
        "Autoclavable up to 135°C",
      ],
      specifications: {
        Type: "Straight Low-Speed Handpiece",
        Bearings: "Ceramic Ball Bearings",
        Connection: "E-Type",
        Speed: "Low Speed",
        Sterilization: "Autoclavable up to 135°C",
        Coupling: "E-Type Standard",
      },
      usageInstructions: [
        "Connect securely to compatible low-speed motor",
        "Use appropriate burs or attachments for the procedure",
        "Operate within recommended speed range",
        "Lubricate regularly for smooth performance",
        "Sterilize at up to 135°C as per standard protocol",
        "Inspect for wear or play before each use",
      ],
      relatedProducts: [46, 33, 29],
    },
    "surgical-straight-handpiece": {
      id: 48,
      name: "SURGICAL HANDPIECE",
      category: "Handpieces",
      slug: "handpieces",
      subtitle:
        "CE Certified Surgical Straight Handpiece, Autoclavable to 135°C",
      fullDescription:
        "Surgical Handpiece is built for dental and oral surgery professionals who need a dependable, precision instrument for a wide range of surgical and clinical procedures. The straight design provides excellent access and a natural line of sight during surgeries, making it a preferred choice for extractions, implant site preparation, and other oral surgical applications. Manufactured to CE standards and autoclavable at up to 135°C, it meets the strictest infection control and sterilization requirements in modern dental practice. The smooth twist-lock mechanism ensures secure bur attachment and easy release, saving time during procedures without compromising stability. Ceramic ball bearings deliver quiet, vibration-free rotation for better tactile feedback and operator control. Its lightweight and ergonomic body reduces hand fatigue during extended clinical sessions, while the durable stainless steel construction ensures long-lasting performance in demanding surgical environments.",
      price: "Contact for Price",
      images: [
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779527232/4_1_lauyxy.png",
      ],
      features: [
        "CE Certified",
        "Autoclavable up to 135°C",
        "Twist-Lock Bur Chuck",
        "Ceramic Ball Bearings",
        "Straight Surgical Design",
        "Lightweight & Ergonomic",
      ],
      specifications: {
        Type: "Surgical Straight Handpiece",
        Certification: "CE Certified (0197)",
        Sterilization: "Autoclavable up to 135°C",
        ChuckType: "Twist-Lock",
        Bearings: "Ceramic Ball Bearings",
        Design: "Straight Low-Speed",
        Connection: "E-Type Standard",
        BodyMaterial: "Stainless Steel",
      },
      usageInstructions: [
        "Insert bur using the twist-lock mechanism and ensure secure fit",
        "Connect securely to compatible low-speed motor or micromotor",
        "Operate at recommended speed for the procedure",
        "Maintain adequate lubrication before and after use",
        "Sterilize at up to 135°C as per standard surgical protocol",
        "Inspect for smooth rotation and bur stability before each procedure",
        "Store in a clean, dry place when not in use",
      ],
      relatedProducts: [45, 46, 33],
    },

    "optic-fiber-implant-handpiece-20-1": {
      id: 47,
      name: "OPTIC FIBER IMPLANT HANDPIECE 20:1",
      category: "Implantology",
      slug: "handpieces",
      subtitle:
        "High Hardness Stainless Steel 20:1 Reduction Implant Handpiece with Optic Fiber",
      fullDescription:
        "Optic Fiber Implant Handpiece 20:1 is engineered for dental implant procedures that demand precision, strength, and clear visibility at the surgical site. The integrated optic fiber illumination system directs focused light exactly where you need it, ensuring an unobstructed view during osteotomy preparation and implant placement. Built from high-hardness stainless material, the handpiece offers outstanding durability and resists the demanding conditions of surgical use without compromising its lightweight and ergonomic character. The 20:1 reduction gear ratio delivers powerful, high-torque rotation at low speed, giving clinicians the precise control required for safe and efficient implant drilling. Ceramic ball bearings maintain smooth and quiet operation throughout extended surgical procedures, reducing vibration and improving tactile feedback. The fine grip and ergonomic design reduce hand fatigue, making it a practical and reliable choice for both straightforward and complex implant cases. User-friendly by design — built to reduce procedural times and keep patients comfortable.",
      price: "Contact for Price",
      images: [
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779527375/1_1_qgsunb.png",
      ],
      features: [
        "Ceramic Ball Bearings",
        "High Hardness Stainless Material",
        "Light Weight With Fine Grip",
        "Ergonomic Design",
        "Optic Fiber Illumination",
      ],
      specifications: {
        Type: "Optic Fiber Implant Surgical Handpiece",
        GearRatio: "20:1 Reduction",
        Bearings: "Ceramic Ball Bearings",
        BodyMaterial: "High Hardness Stainless Steel",
        Illumination: "Optic Fiber",
        Speed: "Low Speed High Torque",
        Application: "Implant Drilling & Placement",
        Sterilization: "Autoclavable",
        Coupling: "Standard E-Type",
      },
      usageInstructions: [
        "Attach securely to compatible implant motor unit",
        "Set recommended torque and speed for the implant system",
        "Ensure proper irrigation during osteotomy preparation",
        "Use optic fiber illumination for clear surgical site visibility",
        "Avoid excessive pressure to prevent overheating",
        "Sterilize thoroughly according to surgical protocol after each use",
        "Inspect gear mechanism and fiber optic connection before surgery",
      ],
      relatedProducts: [33, 29, 31],
    },
    "universal-zoom-loupe": {
      id: 34,
      name: "UNIVERSAL ZOOM LOUPE",
      category: "Magnification",
      subtitle: "Advanced Magnification System with LED Shadow-Free Lighting",
      fullDescription:
        "Work to your full potential and enhance precision and accuracy in every procedure with the all-new Universal Zoom Loupe — a revolution in magnification technology. Engineered with cutting-edge lens technology, it delivers sharp vision and distortion-free focus for superior clinical clarity. The shadow-free LED lighting system ensures bright, even illumination directly at the working field, eliminating visual fatigue during extended procedures. Fully wireless with a rechargeable battery system, the loupe offers complete freedom of movement. Its adjustable angle and elevation, customizable interpupillary distance, and multiple magnification options cater to every clinician's individual comfort and working distance preference. Built-in UV filters provide essential eye protection, while the lightweight frame and comfortable headband ensure fatigue-free wear through long procedures. Universal Zoom Loupe by Xyradent — precision redefined.",
      price: "Contact for Price",
      images: [
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018528/universal-zoom-loupe_x94uo7.png",
      ],
      features: [
        "Light Weight",
        "Wireless Battery",
        "Adjustable Angle & Elevation",
        "New Lens Technology",
        "Sharp Vision & Cutting Edge Focus",
        "Shadow free Lighting System",
        "Comfortable HeadBand",
        "LED Light",
        "Adjustable Interpupillary Distance",
        "Magnification & Working Distance",
        "Multiple Magnification Options As Per Clinicians Comfort",
        "UV Filters",
      ],
      specifications: {
        Magnification: "Multiple adjustable options",
        LightSource: "LED Shadow-Free Illumination",
        PowerSource: "Rechargeable Wireless Battery",
        IPDAdjustment: "Yes",
        WorkingDistance: "Adjustable",
        LensTechnology: "Advanced Multi-Layer Coating",
        Weight: "Lightweight Design",
        Headband: "Ergonomic & Adjustable",
      },
      usageInstructions: [
        "Adjust interpupillary distance according to eye alignment",
        "Set preferred magnification level",
        "Adjust working distance and angle for ergonomic posture",
        "Charge battery before extended use",
        "Clean lenses with microfiber cloth only",
        "Store in protective case when not in use",
      ],
      relatedProducts: [29, 31],
    },
    "calci-one": {
      id: 35,
      name: "CALCI ONE - CALCIUM HYDROXIDE PASTE, RADIOPAQUE WATER BASED",
      category: "Dental Materials",
      slug: "dental-materials",
      subtitle: "Radiopaque Water-Based Calcium Hydroxide Paste (3g)",
      fullDescription:
        "Calci ONE is a radiopaque, water-based calcium hydroxide paste designed for intracanal use in endodontic procedures. With a superior antibacterial effect at pH 12.8, it effectively eliminates residual bacteria and supports periapical healing. Its high radioopacity ensures clear visibility under radiographic examination for accurate placement and monitoring. The paste can be easily removed from canals when required, offering flexibility between appointments. Supplied in a syringe with a reinforced plunger and Luer-Lock cap, it is convenient to hold and ensures leak-proof delivery. Ultra-thin dispensing tips (0.52 mm, hole size 22) allow direct and precise intracanal application. Indicated for irreversible pulpitis, conservative treatment of all forms of chronic periodontitis, and apexification and apexogenesis procedures. Calci ONE by Easendo — precise, reliable, and clinically proven.",
      price: "Contact for Price",
      images: [
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018074/calci-one_ff4yex.png",
      ],
      features: [
        "Superior antibacterial effect (pH 12.8)",
        "High radioopacity",
        "Easily removed from canals if necessary",
        "Reinforced plunger syringe",
        "Luer-Lock cap",
        "Ultra-thin dispensing tips (0.52 mm, hole size 22)",
        "Direct intracanal application",
      ],
      specifications: {
        Composition: "Calcium Hydroxide Paste",
        Base: "Water-Based",
        Radiopacity: "Yes",
        Indication: "Intracanal Medicament",
        Packaging: "3g Syringe/Pack",
        Application: "Endodontic Treatment",
      },
      usageInstructions: [
        "Clean and dry the root canal before application",
        "Place Calci ONE inside the canal using appropriate delivery tip",
        "Seal temporarily between appointments",
        "Remove completely before final obturation",
        "Store in a cool and dry place",
      ],
      relatedProducts: [24, 27],
    },
    "prep-one": {
      id: 36,
      name: "PREP ONE - 17% EDTA GEL WITH 10% CARBAMIDE PEROXIDE",
      category: "Dental Materials",
      slug: "dental-materials",
      subtitle:
        "17% EDTA Gel with 10% Carbamide Peroxide for Effective Canal Preparation",
      fullDescription:
        "Prep ONE is a 17% EDTA gel with 10% Carbamide Peroxide, formulated for orifice detection and chemical enlargement of root canals. The EDTA salts effectively chelate the inorganic components of the smear layer, opening dentinal tubules and improving canal cleanliness. Carbamide Peroxide provides effervescent action that assists in debris removal and enhances lubrication during instrumentation. Its smooth paste consistency ensures easy placement and controlled application within the canal, reducing friction between files and canal walls for improved cutting efficiency. Prep ONE by Easendo — engineered for precise and efficient canal preparation.",
      price: "Contact for Price",
      images: [
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018112/prep-one_ltsyn5.png",
      ],
      features: [
        "EDTA salts (17%)",
        "Carbamide Peroxide (10%)",
        "Paste Forming Agent",
      ],
      specifications: {
        Composition: "17% EDTA + 10% Carbamide Peroxide",
        Form: "Gel",
        Function: "Canal Preparation & Lubrication",
        Action: "Chelating & Effervescent",
        Packaging: "5ml Syringe/Pack",
        Application: "Endodontic Procedures",
      },
      usageInstructions: [
        "Apply small amount into the root canal before instrumentation",
        "Proceed with hand or rotary files as recommended",
        "Irrigate thoroughly after use",
        "Do not leave inside canal for prolonged periods",
        "Store in a cool and dry place",
      ],
      relatedProducts: [34, 24],
    },
    "etch-one": {
      id: 37,
      name: "Etching Gel for Dentin and Enamel Orthophosphoric acid (37%), Gel forming agent with aqueous base",
      category: "Dental Materials",
      slug: "dental-materials",
      subtitle: "Dental Etching Gel for Enamel & Dentine Conditioning (5ml)",
      fullDescription:
        "Etch ONE is a 37% Orthophosphoric Acid etching gel formulated for precise conditioning of dentin and enamel prior to bonding procedures. Its high colour contrast allows easy visual control during application, ensuring accurate placement without unwanted flow. The efficient consistency enables point-specific application directly where needed. Etch ONE rinses away cleanly with a simple stream of water and air, making removal quick and residue-free. Designed for ease of use in routine restorative and adhesive procedures, it delivers reliable etching performance for consistent bond strength. Etch ONE by Easendo — simple, precise, and effective.",
      price: "Contact for Price",
      images: [
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018089/etch-one_wmrfsj.png",
      ],
      features: [
        "Effective enamel etching",
        "Controlled dentine conditioning",
        "Improves bonding strength",
        "Consistent and controlled viscosity",
        "Precise application",
        "Easy rinse-off formula",
        "Uniform etching pattern",
        "5ml clinical pack",
      ],
      specifications: {
        Type: "Dental Etching Gel",
        Application: "Enamel & Dentine Etching",
        Consistency: "Controlled Viscosity Gel",
        Indication: "Bonding & Restorative Procedures",
        Packaging: "5ml Syringe/Pack",
      },
      usageInstructions: [
        "Isolate and clean the tooth surface",
        "Apply Etch ONE to enamel for recommended time",
        "Apply to dentine for shorter recommended duration",
        "Rinse thoroughly with water",
        "Dry gently before applying bonding agent",
        "Store in a cool and dry place",
      ],
      relatedProducts: [35, 34],
    },
    "temp-one": {
      id: 38,
      name: "TEMP ONE - EUGENOL FREE TEMPORARY FILLING MATERIAL",
      category: "Dental Materials",
      slug: "dental-materials",
      subtitle: "Eugenol-Free Temporary Filling Material (40g Pack)",
      fullDescription:
        "Temp ONE is a eugenol-free temporary filling material formulated for root canal procedures, cavity restoration, inlays, and implant abutment sealing. Its eugenol-free composition ensures full compatibility with resin-based materials and adhesive systems, preventing any interference with bonding procedures. Formulated with Zinc Oxide, Calcium Sulphate, and Poly Vinyl Acetate Resin, it provides reliable sealing ability to protect the cavity from contamination and bacterial ingress during the interim period. Temp ONE adapts smoothly to cavity walls, is easy to place, and remains simple to remove when required. Temp ONE by Easendo — dependable, compatible, and easy to use.",
      price: "Contact for Price",
      images: [
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018113/temp-one_zqy0wd.png",
      ],
      features: [
        "Eugenol Free Temporary Filling Material",
        "Zinc Oxide",
        "Calcium Sulphate",
        "Poly Vinyl Acetate Resin",
        "Flavours and Additives",
      ],
      specifications: {
        Type: "Temporary Filling Material",
        Composition: "Eugenol-Free",
        Indication: "Interim Restorations",
        Setting: "Self-Setting",
        Packaging: "40g Pack",
        Application: "Short-Term Cavity Sealing",
      },
      usageInstructions: [
        "Clean and dry the cavity before placement",
        "Place required amount into the cavity",
        "Adapt gently to cavity walls",
        "Allow material to set completely",
        "Remove easily during the next appointment",
        "Store in a cool and dry place",
      ],
      relatedProducts: [36, 35],
    },
    "waxone-modelling-wax": {
      id: 39,
      name: "WAXONE MODELLING WAX",
      category: "Dental Materials",
      slug: "dental-materials",
      subtitle: "Base Plate Modelling Wax with Smooth Texture & Low Shrinkage",
      fullDescription:
        "Waxone is a modelling wax engineered for excellent workability at various temperatures, making it reliable across different laboratory and clinical conditions. Formulated as a base plate wax, it offers optimal consistency and a smooth texture for fine detailing in denture base fabrication, wax-up procedures, and pattern formation. Its low shrinkage property preserves dimensional accuracy during modelling, ensuring precise and distortion-free results. Supplied in a pack of 12 sheets, Waxone provides efficient and consistent performance for everyday dental laboratory use. Waxone by Easendo — consistent, precise, and easy to work with.",
      price: "Contact for Price",
      images: [
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779270554/Waxone_Modelling_Wax_vofocv.png",
      ],
      features: [
        "Base plate wax",
        "Optimal consistency",
        "Smooth texture for fine detailing",
        "Low shrinkage",
      ],
      specifications: {
        Type: "Base Plate Modelling Wax",
        Texture: "Smooth & Uniform",
        Shrinkage: "Low",
        Application: "Denture Base & Wax-Up Procedures",
        Stability: "Dimensional Stability After Cooling",
        UsageArea: "Dental Laboratory & Prosthodontics",
        Pack: "12 sheets in a pack",
      },
      usageInstructions: [
        "Soften wax using controlled heat",
        "Adapt over cast or base plate as required",
        "Shape and contour using carving instruments",
        "Allow to cool and stabilize before further processing",
        "Store in a cool and dry place away from direct heat",
      ],
      relatedProducts: [37, 36],
    },

    "gc-gold-label-1-mini": {
      id: 30,
      name: "GC GOLD LABEL 1 – MINI",
      category: "Glass Ionomer Cement",
      slug: "gc-gold-label-1-mini",
      subtitle: "Premium Glass Ionomer Luting & Lining Cement",
      fullDescription:
        "GC Gold Label 1 – Mini is a premium glass ionomer luting and lining cement designed to provide reliable bonding and dependable clinical performance. It offers excellent handling characteristics, consistent results, and is suitable for routine cementation and lining procedures in modern dental practice.",
      price: "Contact for Price",
      images: ["/images/products/gc/GC GOLD LABEL 1 – MINI -1.jpg"],
      features: [
        "Glass Ionomer Luting & Lining Cement",
        "Professional Clinical Grade",
        "Easy Handling",
        "Reliable Performance",
      ],
      specifications: {
        Type: "Glass Ionomer Luting & Lining Cement",
        Packaging: "Mini Pack",
        Application: "Luting & Lining",
        Grade: "Professional Clinical",
      },
      usageInstructions: [
        "Prepare the tooth according to standard clinical protocol.",
        "Mix the material as per manufacturer's instructions.",
        "Apply immediately after mixing.",
        "Seat the restoration with gentle pressure.",
        "Remove excess cement after initial setting.",
      ],
      relatedProducts: [31, 32],
    },

    "gc-gold-label-1-big": {
      id: 31,
      name: "GC GOLD LABEL 1 – BIG",
      category: "Glass Ionomer Cement",
      slug: "gc-gold-label-1-big",
      subtitle: "Professional Glass Ionomer Luting & Lining Cement",
      fullDescription:
        "GC Gold Label 1 – Big is a professional glass ionomer luting and lining cement supplied in a larger package for regular clinical use. It provides dependable adhesion, excellent handling, and consistent performance for everyday restorative procedures.",
      price: "Contact for Price",
      images: ["/images/products/gc/GC GOLD LABEL 1 – BIG -1.jpg"],
      features: [
        "Glass Ionomer Luting & Lining Cement",
        "Professional Clinical Grade",
        "Excellent Handling",
        "Consistent Results",
      ],
      specifications: {
        Type: "Glass Ionomer Luting & Lining Cement",
        Packaging: "Large Pack",
        Application: "Luting & Lining",
        Grade: "Professional Clinical",
      },
      usageInstructions: [
        "Prepare the restoration and tooth surface.",
        "Mix according to manufacturer's instructions.",
        "Apply evenly before seating restoration.",
        "Allow proper setting time.",
        "Remove excess material after initial set.",
      ],
      relatedProducts: [30, 32],
    },

    "gc-gold-label-2-mini": {
      id: 32,
      name: "GC GOLD LABEL 2 – MINI",
      category: "Glass Ionomer Cement",
      slug: "gc-gold-label-2-mini",
      subtitle: "Universal Restorative Glass Ionomer Cement",
      fullDescription:
        "GC Gold Label 2 – Mini is a universal restorative glass ionomer cement designed for dependable restorative procedures. It provides reliable strength, easy mixing, and consistent clinical performance for everyday restorative applications.",
      price: "Contact for Price",
      images: ["/images/products/gc/GC GOLD LABEL 2 – MINI.jpg"],
      features: [
        "Glass Ionomer Restorative Cement",
        "High Strength",
        "Easy Mixing",
        "Reliable Clinical Performance",
      ],
      specifications: {
        Type: "Glass Ionomer Restorative Cement",
        Packaging: "Mini Pack",
        Application: "Restorative",
        Strength: "High",
      },
      usageInstructions: [
        "Condition the cavity if required.",
        "Mix material as recommended.",
        "Place into the prepared cavity.",
        "Contour before setting.",
        "Finish and polish after complete setting.",
      ],
      relatedProducts: [30, 31],
    },

    "gc-ix-extra": {
      id: 33,
      name: "GC IX EXTRA",
      category: "Glass Ionomer Cement",
      slug: "gc-ix-extra",
      subtitle: "High-Strength Posterior Restorative Material",
      fullDescription:
        "GC IX Extra is a high-strength posterior restorative glass ionomer material designed for reliable everyday restorative procedures. It combines excellent handling with dependable strength and long-lasting clinical performance.",
      price: "Contact for Price",
      images: ["/images/products/gc/GC IX EXTRA -1.jpg"],
      features: [
        "High Strength Restoration",
        "Glass Ionomer Technology",
        "Professional Clinical Grade",
        "Reliable Performance",
      ],
      specifications: {
        Type: "Posterior Restorative Glass Ionomer",
        Application: "Posterior Restorations",
        Technology: "Glass Ionomer",
        Grade: "Professional Clinical",
      },
      usageInstructions: [
        "Prepare the cavity.",
        "Mix according to manufacturer's instructions.",
        "Place into the cavity.",
        "Shape before setting.",
        "Finish after complete hardening.",
      ],
      relatedProducts: [30, 32],
    },

    "gc-impreceed": {
      id: 34,
      name: "GC IMPRECEED",
      category: "Impression Material",
      slug: "gc-impreceed",
      subtitle: "Professional Elastomeric Impression Material",
      fullDescription:
        "GC Impreceed is a professional elastomeric impression material developed to produce accurate, dimensionally stable impressions with excellent detail reproduction and dependable handling characteristics.",
      price: "Contact for Price",
      images: ["/images/products/gc/GC IMPRECEED -1.jpg"],
      features: [
        "Excellent Detail Reproduction",
        "Dimensionally Stable",
        "Easy Mixing",
        "Professional Impression Material",
      ],
      specifications: {
        Type: "Elastomeric Impression Material",
        Stability: "Dimensionally Stable",
        Mixing: "Easy",
        Application: "Dental Impressions",
      },
      usageInstructions: [
        "Prepare the tray.",
        "Mix base and catalyst as instructed.",
        "Load the tray evenly.",
        "Take the impression.",
        "Disinfect before laboratory use.",
      ],
      relatedProducts: [36],
    },

    "gc-solare-x-composite-5gm": {
      id: 35,
      name: "GC SOLARE X COMPOSITE (5GM)",
      category: "Composite Restorative",
      slug: "gc-solare-x-composite-5gm",
      subtitle: "Light Cure Universal Composite Restorative",
      fullDescription:
        "GC Solare X Composite is a light-cure universal restorative composite that delivers excellent handling, natural aesthetics, superior polishability, and reliable clinical performance for direct restorative procedures.",
      price: "Contact for Price",
      images: ["/images/products/gc/GC SOLARE X COMPOSITE (5GM) -1.jpg"],
      features: [
        "Light Cure Composite",
        "Excellent Polishability",
        "Natural Aesthetics",
        "Reliable Clinical Performance",
      ],
      specifications: {
        Type: "Light Cure Composite",
        Weight: "5gm",
        Application: "Direct Restorations",
        Finish: "High Polish",
      },
      usageInstructions: [
        "Prepare the cavity.",
        "Apply bonding agent.",
        "Place composite incrementally.",
        "Light cure each layer.",
        "Finish and polish restoration.",
      ],
      relatedProducts: [32],
    },

    "flexceed-putty-light-body": {
      id: 36,
      name: "FLEXCEED PUTTY LIGHT BODY",
      category: "Impression Material",
      slug: "flexceed-putty-light-body",
      subtitle: "Addition Silicone Impression Material System",
      fullDescription:
        "Flexceed Putty Light Body is an addition silicone impression material system designed to deliver highly accurate impressions with excellent elastic recovery, dependable dimensional stability, and smooth handling characteristics.",
      price: "Contact for Price",
      images: ["/images/products/gc/FLEXCEED PUTTY LIGHT BODY -1.jpg"],
      features: [
        "Addition Silicone Impression Material",
        "High Accuracy",
        "Excellent Elastic Recovery",
        "Professional Clinical Grade",
      ],
      specifications: {
        Type: "Addition Silicone Impression Material",
        Accuracy: "High",
        ElasticRecovery: "Excellent",
        Application: "Dental Impressions",
      },
      usageInstructions: [
        "Mix putty and light body according to instructions.",
        "Load the impression tray.",
        "Inject light body around preparation.",
        "Seat tray firmly.",
        "Allow complete setting before removal.",
      ],
      relatedProducts: [34],
    },

    "bioactive-3d": {
      id: 49,
      name: "BIOACTIVE 3D",
      category: "Endodontics",
      slug: "bioactive-3d",
      subtitle: "Bioactive Root Canal Sealer",
      fullDescription:
        "BIOACTIVE 3D is a bioactive root canal sealer formulated to provide excellent sealing ability, high biocompatibility, and predictable long-term endodontic outcomes. It offers reliable handling characteristics for professional root canal obturation.",
      price: "Contact for Price",
      images: ["/images/products/safe-endo/BIOACTIVE 3D.jpg"],
      features: [
        "Bioactive Root Canal Sealer",
        "Excellent Sealing Ability",
        "High Biocompatibility",
        "Professional Clinical Grade",
      ],
      specifications: {
        Type: "Bioactive Root Canal Sealer",
        Biocompatibility: "High",
        SealingAbility: "Excellent",
        Application: "Root Canal Obturation",
      },
      usageInstructions: [
        "Prepare and clean the root canal thoroughly.",
        "Mix or dispense sealer as instructed.",
        "Apply evenly inside the canal.",
        "Complete obturation using the preferred technique.",
        "Verify final seal radiographically.",
      ],
      relatedProducts: [50, 51],
    },

    "bioactive-rcs": {
      id: 50,
      name: "BIOACTIVE RCS",
      category: "Endodontics",
      slug: "bioactive-rcs",
      subtitle: "Bioactive Root Canal Sealer",
      fullDescription:
        "BIOACTIVE RCS is a bioactive root canal sealer designed for reliable obturation with excellent flow, high biocompatibility, and dependable sealing performance during endodontic procedures.",
      price: "Contact for Price",
      images: ["/images/products/safe-endo/BIOACTIVE RCS.jpg"],
      features: [
        "Bioactive Root Canal Sealer",
        "Excellent Flow",
        "High Biocompatibility",
        "Professional Clinical Grade",
      ],
      specifications: {
        Type: "Bioactive Root Canal Sealer",
        Flow: "Excellent",
        Biocompatibility: "High",
        Application: "Root Canal Obturation",
      },
      usageInstructions: [
        "Prepare the canal following standard protocol.",
        "Apply the sealer into the canal.",
        "Insert obturation material.",
        "Complete obturation.",
        "Check the final seal before restoration.",
      ],
      relatedProducts: [49, 51],
    },

    calcicure: {
      id: 51,
      name: "CALCICURE",
      category: "Endodontics",
      slug: "calcicure",
      subtitle: "Calcium Hydroxide Intracanal Medicament",
      fullDescription:
        "CALCICURE is a calcium hydroxide intracanal medicament formulated to provide effective canal disinfection, maintain a high pH environment, and support successful endodontic treatment.",
      price: "Contact for Price",
      images: ["/images/products/safe-endo/CALCICURE.jpg"],
      features: [
        "Calcium Hydroxide Formula",
        "Intracanal Medicament",
        "High pH",
        "Professional Clinical Grade",
      ],
      specifications: {
        Type: "Calcium Hydroxide Medicament",
        pH: "High",
        Application: "Intracanal Dressing",
        Usage: "Endodontic Treatment",
      },
      usageInstructions: [
        "Clean and dry the canal.",
        "Place medicament into the canal.",
        "Seal temporarily.",
        "Leave as clinically indicated.",
        "Remove before final obturation.",
      ],
      relatedProducts: [49, 50],
    },

    "devitalize-8gm-jar": {
      id: 52,
      name: "DEVITALIZE 8GM (JAR)",
      category: "Endodontics",
      slug: "devitalize-8gm-jar",
      subtitle: "Devitalizing Paste",
      fullDescription:
        "DEVITALIZE 8GM (JAR) is a professional devitalizing paste formulated for controlled pulp devitalization with reliable clinical performance and convenient application.",
      price: "Contact for Price",
      images: ["/images/products/safe-endo/DEVITALIZE 8GM (JAR).jpg"],
      features: [
        "Devitalizing Paste",
        "Easy Application",
        "Reliable Clinical Performance",
        "Professional Clinical Grade",
      ],
      specifications: {
        Type: "Devitalizing Paste",
        Packaging: "8 gm Jar",
        Application: "Pulp Devitalization",
        Usage: "Endodontic Procedures",
      },
      usageInstructions: [
        "Isolate the tooth.",
        "Apply a small quantity onto the pulp exposure.",
        "Seal with temporary restoration.",
        "Review according to clinical protocol.",
        "Proceed with endodontic treatment.",
      ],
      relatedProducts: [53],
    },

    "devitalize-plus": {
      id: 53,
      name: "DEVITALIZE PLUS",
      category: "Endodontics",
      slug: "devitalize-plus",
      subtitle: "Advanced Devitalizing Paste",
      fullDescription:
        "DEVITALIZE PLUS is an advanced devitalizing paste that provides dependable performance, easy placement, and controlled application during endodontic procedures.",
      price: "Contact for Price",
      images: ["/images/products/safe-endo/DEVITALIZE PLUS.jpg"],
      features: [
        "Advanced Devitalizing Formula",
        "Easy Placement",
        "Reliable Performance",
        "Professional Clinical Grade",
      ],
      specifications: {
        Type: "Devitalizing Paste",
        Formula: "Advanced",
        Application: "Pulp Devitalization",
        Usage: "Endodontic Procedures",
      },
      usageInstructions: [
        "Apply carefully over exposed pulp.",
        "Avoid excess material.",
        "Seal the cavity temporarily.",
        "Recall patient as required.",
        "Continue treatment after devitalization.",
      ],
      relatedProducts: [52],
    },

    "hypochlor-3-25": {
      id: 54,
      name: "HYPOCHLOR 3.25%",
      category: "Endodontics",
      slug: "hypochlor-3-25",
      subtitle: "3.25% Sodium Hypochlorite Root Canal Irrigant",
      fullDescription:
        "HYPOCHLOR 3.25% is a sodium hypochlorite root canal irrigating solution formulated for effective canal irrigation, debris removal, and disinfection during endodontic treatment.",
      price: "Contact for Price",
      images: ["/images/products/safe-endo/HYPOCHLOR 3.25%.jpg"],
      features: [
        "3.25% Sodium Hypochlorite",
        "Root Canal Irrigant",
        "Effective Canal Cleaning",
        "Professional Clinical Grade",
      ],
      specifications: {
        Type: "Root Canal Irrigant",
        Concentration: "3.25%",
        ActiveIngredient: "Sodium Hypochlorite",
        Application: "Canal Irrigation",
      },
      usageInstructions: [
        "Irrigate the canal using a suitable syringe.",
        "Avoid extrusion beyond the apex.",
        "Use throughout instrumentation.",
        "Flush thoroughly.",
        "Complete treatment following standard protocol.",
      ],
      relatedProducts: [55],
    },

    "hypochlor-forte-5-25": {
      id: 55,
      name: "HYPOCHLOR FORTE 5.25%",
      category: "Endodontics",
      slug: "hypochlor-forte-5-25",
      subtitle: "5.25% Sodium Hypochlorite Root Canal Irrigant",
      fullDescription:
        "HYPOCHLOR FORTE 5.25% is a high-strength sodium hypochlorite irrigating solution designed for enhanced canal cleaning, tissue dissolution, and disinfection during root canal procedures.",
      price: "Contact for Price",
      images: ["/images/products/safe-endo/HYPOCHLOR FORTE 5.25%.jpg"],
      features: [
        "5.25% Sodium Hypochlorite",
        "High Strength Irrigant",
        "Excellent Canal Cleaning",
        "Professional Clinical Grade",
      ],
      specifications: {
        Type: "Root Canal Irrigant",
        Concentration: "5.25%",
        ActiveIngredient: "Sodium Hypochlorite",
        Application: "Canal Irrigation",
      },
      usageInstructions: [
        "Use with an irrigation syringe.",
        "Deliver solution carefully into the canal.",
        "Avoid apical extrusion.",
        "Irrigate throughout instrumentation.",
        "Complete final rinse as required.",
      ],
      relatedProducts: [54],
    },

    iodocure: {
      id: 56,
      name: "IODOCURE",
      category: "Endodontics",
      slug: "iodocure",
      subtitle: "Iodoform Intracanal Dressing",
      fullDescription:
        "IODOCURE is an iodoform-based intracanal dressing formulated to provide effective intracanal medication with easy placement and dependable clinical performance.",
      price: "Contact for Price",
      images: ["/images/products/safe-endo/IODOCURE.jpg"],
      features: [
        "Iodoform Based",
        "Intracanal Dressing",
        "Easy Placement",
        "Professional Clinical Grade",
      ],
      specifications: {
        Type: "Intracanal Dressing",
        Base: "Iodoform",
        Application: "Endodontic Medication",
        Usage: "Root Canal Therapy",
      },
      usageInstructions: [
        "Dry the canal completely.",
        "Place dressing into the canal.",
        "Seal temporarily.",
        "Review according to treatment plan.",
        "Remove before obturation.",
      ],
      relatedProducts: [51],
    },

    "re-cal-lc": {
      id: 57,
      name: "RE-CAL LC",
      category: "Restorative Materials",
      slug: "re-cal-lc",
      subtitle: "Light Cure Calcium Liner",
      fullDescription:
        "RE-CAL LC is a light-cure calcium-based liner designed to protect the dental pulp while providing a durable base beneath restorative materials.",
      price: "Contact for Price",
      images: ["/images/products/safe-endo/RE-CAL LC.jpg"],
      features: [
        "Light Cure Calcium Liner",
        "Pulp Protection",
        "Easy Application",
        "Professional Clinical Grade",
      ],
      specifications: {
        Type: "Light Cure Calcium Liner",
        Curing: "Light Cure",
        Application: "Pulp Protection",
        Usage: "Cavity Lining",
      },
      usageInstructions: [
        "Apply a thin layer over deep dentin.",
        "Light cure according to instructions.",
        "Proceed with restorative material.",
        "Finish restoration.",
        "Verify complete curing.",
      ],
      relatedProducts: [51],
    },

    "re-create-lc-flow": {
      id: 58,
      name: "RE-CREATE LC FLOW",
      category: "Restorative Materials",
      slug: "re-create-lc-flow",
      subtitle: "Light Cure Flowable Composite",
      fullDescription:
        "RE-CREATE LC FLOW is a light-cure flowable composite formulated for precise placement, excellent adaptation, and highly esthetic direct restorations. Its smooth handling and optimal flow characteristics make it suitable for a wide range of restorative procedures.",
      price: "Contact for Price",
      images: ["/images/products/safe-endo/RE-CREATE LC FLOW.jpg"],
      features: [
        "Light Cure Flowable Composite",
        "Excellent Adaptation",
        "Easy Handling",
        "Professional Clinical Grade",
      ],
      specifications: {
        Type: "Flowable Composite",
        Curing: "Light Cure",
        Application: "Direct Restorations",
        Handling: "Excellent Flow",
      },
      usageInstructions: [
        "Prepare and isolate the cavity.",
        "Apply bonding agent as recommended.",
        "Dispense composite directly into the preparation.",
        "Light cure according to instructions.",
        "Finish and polish the restoration.",
      ],
      relatedProducts: [60, 61],
    },

    "re-glass-lc": {
      id: 59,
      name: "RE-GLASS LC",
      category: "Restorative Materials",
      slug: "re-glass-lc",
      subtitle: "Light Cure Glass Ionomer Restorative",
      fullDescription:
        "RE-GLASS LC is a light-cure glass ionomer restorative material designed to provide reliable adhesion, fluoride release, and durable restorations for a variety of clinical applications.",
      price: "Contact for Price",
      images: ["/images/products/safe-endo/RE-GLASS LC.jpg"],
      features: [
        "Light Cure Glass Ionomer",
        "Fluoride Releasing",
        "Strong Adhesion",
        "Professional Clinical Grade",
      ],
      specifications: {
        Type: "Glass Ionomer Restorative",
        Curing: "Light Cure",
        FluorideRelease: "Yes",
        Application: "Restorative Dentistry",
      },
      usageInstructions: [
        "Clean and prepare the cavity.",
        "Mix or dispense the material as directed.",
        "Place into the cavity preparation.",
        "Light cure completely.",
        "Finish and polish after curing.",
      ],
      relatedProducts: [57],
    },

    "recreate-lc-5-composite-kit": {
      id: 60,
      name: "RECREATE LC 5 COMPOSITE KIT",
      category: "Restorative Materials",
      slug: "recreate-lc-5-composite-kit",
      subtitle: "Light Cure Composite Restorative Kit",
      fullDescription:
        "RECREATE LC 5 COMPOSITE KIT is a light-cure composite restorative system containing five shades to produce durable, esthetic, and natural-looking restorations with excellent handling characteristics.",
      price: "Contact for Price",
      images: ["/images/products/safe-endo/RECREATE LC 5 COMPOSITE KIT.jpg"],
      features: [
        "Light Cure Composite Kit",
        "5 Shade System",
        "High Polishability",
        "Professional Clinical Grade",
      ],
      specifications: {
        Type: "Composite Restorative Kit",
        Shades: "5",
        Curing: "Light Cure",
        Application: "Direct Restorations",
      },
      usageInstructions: [
        "Prepare and isolate the tooth.",
        "Apply adhesive system.",
        "Place composite incrementally.",
        "Light cure each increment.",
        "Finish and polish the restoration.",
      ],
      relatedProducts: [58, 61],
    },

    "recreate-lc-7-composite-kit": {
      id: 61,
      name: "RECREATE LC 7 COMPOSITE KIT",
      category: "Restorative Materials",
      slug: "recreate-lc-7-composite-kit",
      subtitle: "Light Cure Composite Restorative Kit",
      fullDescription:
        "RECREATE LC 7 COMPOSITE KIT is a comprehensive light-cure composite restorative system with seven shades, providing excellent esthetics, strength, and polishability for advanced restorative procedures.",
      price: "Contact for Price",
      images: ["/images/products/safe-endo/RECREATE LC 7 COMPOSITE KIT.jpg"],
      features: [
        "Light Cure Composite Kit",
        "7 Shade System",
        "Excellent Esthetics",
        "Professional Clinical Grade",
      ],
      specifications: {
        Type: "Composite Restorative Kit",
        Shades: "7",
        Curing: "Light Cure",
        Application: "Direct Restorations",
      },
      usageInstructions: [
        "Prepare the cavity conservatively.",
        "Apply bonding agent.",
        "Place composite in layers.",
        "Light cure every layer.",
        "Contour and polish the restoration.",
      ],
      relatedProducts: [58, 60],
    },

    "secure-t": {
      id: 62,
      name: "SECURE T",
      category: "Dental Cements",
      slug: "secure-t",
      subtitle: "Temporary Luting Cement",
      fullDescription:
        "SECURE T is a temporary luting cement formulated to provide dependable retention of provisional crowns and bridges while allowing easy removal when required.",
      price: "Contact for Price",
      images: ["/images/products/safe-endo/SECURE T.jpg"],
      features: [
        "Temporary Luting Cement",
        "Reliable Retention",
        "Easy Removal",
        "Professional Clinical Grade",
      ],
      specifications: {
        Type: "Temporary Cement",
        Application: "Temporary Crowns & Bridges",
        Removal: "Easy",
        Usage: "Provisional Cementation",
      },
      usageInstructions: [
        "Clean and dry the restoration.",
        "Mix cement if required.",
        "Apply a thin layer inside the restoration.",
        "Seat restoration firmly.",
        "Remove excess cement after seating.",
      ],
      relatedProducts: [66],
    },

    "smart-etch": {
      id: 63,
      name: "SMART ETCH",
      category: "Restorative Materials",
      slug: "smart-etch",
      subtitle: "Phosphoric Acid Etching Gel",
      fullDescription:
        "SMART ETCH is a phosphoric acid etching gel formulated to effectively condition enamel and dentin prior to adhesive restorative procedures, ensuring reliable bond strength.",
      price: "Contact for Price",
      images: ["/images/products/safe-endo/SMART ETCH.jpg"],
      features: [
        "Phosphoric Acid Etching Gel",
        "Excellent Viscosity",
        "Easy Rinsing",
        "Professional Clinical Grade",
      ],
      specifications: {
        Type: "Etching Gel",
        Base: "Phosphoric Acid",
        Application: "Enamel & Dentin Etching",
        Rinsing: "Easy",
      },
      usageInstructions: [
        "Apply gel to the prepared tooth surface.",
        "Etch for the recommended time.",
        "Rinse thoroughly with water.",
        "Dry according to bonding protocol.",
        "Proceed with adhesive application.",
      ],
      relatedProducts: [60, 61],
    },

    "smart-prep-liquid-100-ml": {
      id: 64,
      name: "SMART PREP LIQUID 100 ML",
      category: "Endodontics",
      slug: "smart-prep-liquid-100-ml",
      subtitle: "Canal Preparation Liquid",
      fullDescription:
        "SMART PREP LIQUID is a canal preparation solution formulated to assist cleaning, conditioning, and efficient preparation of root canals during endodontic treatment.",
      price: "Contact for Price",
      images: ["/images/products/safe-endo/SMART PREP LIQUID 100 ML.jpg"],
      features: [
        "Canal Preparation Solution",
        "Effective Cleaning",
        "Easy Application",
        "Professional Clinical Grade",
      ],
      specifications: {
        Type: "Preparation Liquid",
        Volume: "100 ml",
        Application: "Root Canal Preparation",
        Usage: "Endodontics",
      },
      usageInstructions: [
        "Dispense the solution as required.",
        "Apply during canal preparation.",
        "Use together with endodontic instruments.",
        "Irrigate according to clinical protocol.",
        "Complete canal preparation before obturation.",
      ],
      relatedProducts: [65],
    },

    "smart-prep": {
      id: 65,
      name: "SMART PREP",
      category: "Endodontics",
      slug: "smart-prep",
      subtitle: "Canal Preparation Gel",
      fullDescription:
        "SMART PREP is a root canal preparation gel formulated to lubricate endodontic instruments and facilitate efficient canal preparation while improving clinical handling.",
      price: "Contact for Price",
      images: ["/images/products/safe-endo/SMART PREP.jpg"],
      features: [
        "Canal Preparation Gel",
        "Instrument Lubrication",
        "Efficient Canal Preparation",
        "Professional Clinical Grade",
      ],
      specifications: {
        Type: "Preparation Gel",
        Application: "Root Canal Preparation",
        Lubrication: "Excellent",
        Usage: "Endodontics",
      },
      usageInstructions: [
        "Apply gel onto the endodontic file.",
        "Introduce the instrument into the canal.",
        "Prepare the canal using standard technique.",
        "Irrigate frequently during instrumentation.",
        "Complete cleaning before obturation.",
      ],
      relatedProducts: [64],
    },

    "smart-temp": {
      id: 66,
      name: "SMART TEMP",
      category: "Temporary Restorative Material",
      slug: "smart-temp",
      subtitle: "Temporary Filling Material",
      fullDescription:
        "SMART TEMP is a temporary filling material designed to provide a dependable seal between treatment appointments while allowing easy placement and removal.",
      price: "Contact for Price",
      images: ["/images/products/safe-endo/SMART TEMP.jpg"],
      features: [
        "Temporary Filling Material",
        "Excellent Seal",
        "Easy Placement & Removal",
        "Professional Clinical Grade",
      ],
      specifications: {
        Type: "Temporary Filling Material",
        Application: "Temporary Restorations",
        Sealing: "Excellent",
        Removal: "Easy",
      },
      usageInstructions: [
        "Prepare and clean the cavity.",
        "Place the material into the preparation.",
        "Adapt gently using suitable instruments.",
        "Allow the material to set.",
        "Remove easily at the next appointment.",
      ],
      relatedProducts: [62],
    },

    "boss-spray": {
      id: 40,
      name: "BOSS SPRAY HANDPIECE LUBRICANT SPRAY",
      category: "Maintenance & Lubrication",
      slug: "maintenance",
      subtitle: "High-Performance Handpiece Lubricant Spray (500ml)",
      fullDescription:
        "Boss Spray is a premium-quality handpiece lubricant spray designed for routine maintenance of dental handpieces. It delivers best-in-class lubrication, effectively reducing friction between internal components for smooth and efficient operation. Its odourless formulation ensures a comfortable clinical environment during and after maintenance. Regular use helps flush out debris and contaminants, minimizing wear and tear and extending handpiece lifespan. Supplied in a 500ml can, Boss Spray is ideal for both high-speed and low-speed handpiece maintenance. Boss Spray by Easendo — premium, odourless, and built for performance.",
      price: "Contact for Price",
      images: [
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779270274/Boss_Spray_ry6hps.png",
        // "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018554/bossSpray1_ulfz8w.png",
        // "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018557/bossSpray2_hqidqz.png",
        // "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018559/bossSpray3_f2sl1l.png",
      ],
      features: [
        "Quantity 500ml",
        "Premium Quality",
        "Odourless",
        "Best Lubrication For Handpiece",
      ],
      specifications: {
        Type: "Handpiece Lubricant Spray",
        Volume: "500ml",
        Application: "High-speed & Low-speed Handpieces",
        Formulation: "Odourless Cleaning & Lubricating Spray",
        Function: "Lubrication & Internal Cleaning",
      },
      usageInstructions: [
        "Remove bur before lubrication",
        "Attach nozzle to handpiece inlet",
        "Spray for 2–3 seconds to flush debris",
        "Run handpiece for few seconds to distribute lubricant",
        "Wipe excess oil before sterilization",
        "Use regularly for optimal performance",
      ],
      relatedProducts: [13, 14, 16],
    },
    "rvg-sleeves": {
      id: 41,
      name: "DISPOSABLE RVG SENSER SLEEVES",
      category: "Infection Control",
      subtitle: "Disposable Protective Sleeves for RVG Sensors",
      fullDescription:
        "RVG Sleeves are disposable protective covers designed for use with RVG sensors during intraoral radiographic procedures. Compatible with every sensor, they ensure a secure fit while maintaining optimal sensor performance and image clarity. The fine and smooth texture, combined with ultrasoft material, ensures maximum patient comfort during placement. Each sleeve acts as an effective barrier against saliva, blood, and contaminants, supporting strict infection control protocols in dental clinics. Supplied in a pack of 500 pieces, RVG Sleeves are ideal for high-volume clinical use. RVG Sleeves by Xyradent — compatible, comfortable, and clinically reliable.",
      price: "Contact for Price",
      images: [
        "https://res.cloudinary.com/dk4npblv3/image/upload/v1779269845/RVG_Sleeves_kldm7s.png",
        // "https://res.cloudinary.com/dk4npblv3/image/upload/v1772017767/RVGSleeves1_c6orx2.png",
        // "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018032/RVGSleeves3_vuzck0.png",
        // "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018012/RVGSleeves2_pvlrue.png",
      ],
      features: [
        "Compatible With Every Sensor",
        "Fine & Smooth Texture",
        "Ultrasoft For Patient Comfort",
      ],
      specifications: {
        Type: "Disposable RVG Sensor Cover",
        Material: "Ultrasoft Medical-Grade Plastic",
        Compatibility: "Universal Fit for RVG Sensors",
        Usage: "Single Use",
        Function: "Barrier Protection & Infection Control",
        Pack: "500 pieces pack",
      },
      usageInstructions: [
        "Select appropriate sleeve size for sensor",
        "Insert RVG sensor carefully into the sleeve",
        "Ensure proper sealing before intraoral placement",
        "Dispose of sleeve after single use",
        "Follow standard infection control guidelines",
      ],
      relatedProducts: [39, 13],
    },
  };

  const existingProduct = products[slug];

  if (existingProduct) {
    return existingProduct;
  }

  // If it is not an existing product, check the new products
  // from data/additional-products.js.
  return getAdditionalProductBySlug(slug);
};

export default function ProductDetailPage({ params }) {
  // Unwrap the params Promise
  const resolvedParams = use(params);
  const product = getProductBySlug(
    resolvedParams?.slug || "e-curve-rotary-files-rc25",
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <Link href="/products" className="text-[#26A7EB] hover:underline">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return <ProductDetailClient product={product} />;
}
