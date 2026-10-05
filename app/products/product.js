"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Filter,
  PackageSearch,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";
import { additionalProducts } from "@/data/additional-products";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const bgGradients = [
    "from-[#f0f2ff] to-[#e8eaff]",
    "from-[#ecf5fb] to-[#fde8d8]",
    "from-[#f0f2ff] to-[#ecf5fb]",
    "from-[#eef9f0] to-[#e0f5e4]",
    "from-[#ecf5fb] to-[#f0f2ff]",
    "from-[#f5f0ff] to-[#ede8ff]",
    "from-[#f0f8ff] to-[#e0f0ff]",
    "from-[#fff8f0] to-[#ecf5fb]",
  ];

  const getBgById = (id) => bgGradients[Math.abs(Number(id) || 0) % bgGradients.length];
  const formatCategory = (cat = "") =>
    cat
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  // Complete product catalogue retained from the supplied file.
  const allProducts = {
    "endodontic-files": [
      {
        id: 1,

        name: "E-CURVE GOLD FILE",

        slug: "e-curve-gold",

        shortDesc: "Designed for enhanced flexibility and fatigue resistance.",

        price: "Contact for Price",

        image:
          "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018209/E-CurveFlex1_pjacjy.png",

        features: [
          "Variable Pitch",

          "Heat Treated Control Memory Ni-Ti Wire",

          "Sharp Cutting Flutes",

          "Safety Non-Cutting Tip",
        ],
      },

      {
        id: 2,

        name: "E-CURVE BLUE FILE",

        slug: "e-curve-blue",

        shortDesc: "Provides superior strength while maintaining flexibility",

        price: "Contact for Price",

        image: "https://res.cloudinary.com/dk4npblv3/image/upload/v1773137563/flexblue_vuyndh.png",

        features: [
          "Variable Pitch",

          "Heat Treated Control Memory Ni-Ti Wire",

          "Sharp Cutting Flutes",

          "Safety Non-Cutting Tip",
        ],
      },

      {
        id: 3,

        name: "E-CURVE MINI FILE",

        slug: "e-curve-mini",

        shortDesc: "Developed for deciduous teeth",

        price: "Contact for Price",

        image:
          "https://res.cloudinary.com/dk4npblv3/image/upload/v1773139269/Gemini_Generated_Image_johg8rjohg8rjohg-removebg-preview_iv6esu.png",

        features: [
          "Variable Pitch",

          "Heat Treated Control Memory Ni-Ti Wire",

          "Sharp Cutting Flutes",

          "Safety Non-Cutting Tip",
        ],
      },

      {
        id: 4,

        name: "E-CURVE RT",

        slug: "e-curve-rt",

        shortDesc:
          "Safe and effective removal of obturation materials without the need for solvents",

        price: "Contact for Price",

        image: "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018215/E-FLEXRT1_z1a62i.png",

        features: ["Variable Pitch", "Sharp Cutting Flutes", "Efficient Cutting and Guiding Tip"],
      },
    ],

    "dental-materials": [
      {
        id: 7,

        name: "CALCI ONE",

        slug: "calci-one",

        shortDesc: "Calcium hydroxide paste – radiopaque, water based (3g)",

        price: "Contact for Price",

        image: "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018074/calci-one_ff4yex.png",

        features: [
          "Superior antibacterial effect (pH 12.8)",

          "High radioopacity",

          "Easily removed from canals if necessary",

          "Reinforced plunger syringe",

          "Luer-Lock cap",

          "Ultra-thin dispensing tips (0.52 mm, hole size 22)",

          "Direct intracanal application",
        ],
      },

      {
        id: 8,

        name: "PREP ONE",

        slug: "prep-one",

        shortDesc: "17% EDTA gel with 10% carbamide peroxide (5ml)",

        price: "Contact for Price",

        image: "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018112/prep-one_ltsyn5.png",

        features: ["EDTA salts (17%)", "Carbamide Peroxide (10%)", "Paste Forming Agent"],
      },

      {
        id: 9,

        name: "ETCH ONE",

        slug: "etch-one",

        shortDesc: "Dental gel for enamel & dentine etching (5ml)",

        price: "Contact for Price",

        image: "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018089/etch-one_wmrfsj.png",

        features: [
          "Etching Gel for Dentin and Enamel",

          "Orthophosphoric Acid (37%)",

          "Gel Forming Agent with Aqueous Base",
        ],
      },

      {
        id: 10,

        name: "TEMP ONE",

        slug: "temp-one",

        shortDesc: "Eugenol-free temporary filling material (40g)",

        price: "Contact for Price",

        image: "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018113/temp-one_zqy0wd.png",

        features: [
          "Eugenol Free Temporary Filling Material",

          "Zinc Oxide",

          "Calcium Sulphate",

          "Poly Vinyl Acetate Resin",

          "Flavours and Additives",
        ],
      },

      {
        id: 11,

        name: "WAXONE",

        slug: "waxone-modelling-wax",

        shortDesc: "Base plate wax with smooth texture & low shrinkage",

        price: "Contact for Price",

        image:
          "https://res.cloudinary.com/dk4npblv3/image/upload/v1779270554/Waxone_Modelling_Wax_vofocv.png",

        features: [
          "Base plate wax",

          "Optimal consistency",

          "Smooth texture for fine detailing",

          "Low shrinkage",
        ],
      },

      {
        id: 30,

        name: "GC GOLD LABEL 1 – MINI",

        slug: "gc-gold-label-1-mini",

        shortDesc:
          "Premium glass ionomer luting and lining cement for reliable clinical performance.",

        price: "Contact for Price",

        image: "/images/products/gc/GC GOLD LABEL 1 – MINI -1.jpg",

        features: [
          "Glass Ionomer Luting & Lining Cement",

          "Professional Clinical Grade",

          "Easy Handling",

          "Reliable Performance",
        ],
      },

      {
        id: 31,

        name: "GC GOLD LABEL 1 – BIG",

        slug: "gc-gold-label-1-big",

        shortDesc:
          "Glass ionomer luting and lining cement supplied in larger packaging for clinical use.",

        price: "Contact for Price",

        image: "/images/products/gc/GC GOLD LABEL 1 – BIG -1.jpg",

        features: [
          "Glass Ionomer Luting & Lining Cement",

          "Professional Clinical Grade",

          "Excellent Handling",

          "Consistent Results",
        ],
      },

      {
        id: 32,

        name: "GC GOLD LABEL 2 – MINI",

        slug: "gc-gold-label-2-mini",

        shortDesc:
          "Universal restorative glass ionomer cement designed for dependable restorative procedures.",

        price: "Contact for Price",

        image: "/images/products/gc/GC GOLD LABEL 2 – MINI.jpg",

        features: [
          "Glass Ionomer Restorative Cement",

          "High Strength",

          "Easy Mixing",

          "Reliable Clinical Performance",
        ],
      },

      {
        id: 33,

        name: "GC IX EXTRA",

        slug: "gc-ix-extra",

        shortDesc:
          "High-strength posterior restorative glass ionomer material for everyday clinical applications.",

        price: "Contact for Price",

        image: "/images/products/gc/GC IX EXTRA -1.jpg",

        features: [
          "High Strength Restoration",

          "Glass Ionomer Technology",

          "Professional Clinical Grade",

          "Reliable Performance",
        ],
      },

      {
        id: 34,

        name: "GC IMPRECEED",

        slug: "gc-impreceed",

        shortDesc:
          "Professional elastomeric impression material providing accurate and dependable impressions.",

        price: "Contact for Price",

        image: "/images/products/gc/GC IMPRECEED -1.jpg",

        features: [
          "Excellent Detail Reproduction",

          "Dimensionally Stable",

          "Easy Mixing",

          "Professional Impression Material",
        ],
      },

      {
        id: 35,

        name: "GC SOLARE X COMPOSITE (5GM)",

        slug: "gc-solare-x-composite-5gm",

        shortDesc:
          "Light-cure universal composite restorative material with excellent handling characteristics.",

        price: "Contact for Price",

        image: "/images/products/gc/GC SOLARE X COMPOSITE (5GM) -1.jpg",

        features: [
          "Light Cure Composite",

          "Excellent Polishability",

          "Natural Aesthetics",

          "Reliable Clinical Performance",
        ],
      },

      {
        id: 36,

        name: "FLEXCEED PUTTY LIGHT BODY",

        slug: "flexceed-putty-light-body",

        shortDesc:
          "Addition silicone impression material system offering accurate impressions and consistent handling.",

        price: "Contact for Price",

        image: "/images/products/gc/FLEXCEED PUTTY LIGHT BODY -1.jpg",

        features: [
          "Addition Silicone Impression Material",

          "High Accuracy",

          "Excellent Elastic Recovery",

          "Professional Clinical Grade",
        ],
      },

      {
        id: 49,

        name: "BIOACTIVE 3D",

        slug: "bioactive-3d",

        shortDesc:
          "Bioactive root canal sealer formulated to provide excellent sealing ability and promote predictable endodontic outcomes.",

        price: "Contact for Price",

        image: "/images/products/safe-endo/BIOACTIVE 3D.jpg",

        features: [
          "Bioactive Root Canal Sealer",

          "Excellent Sealing Ability",

          "High Biocompatibility",

          "Professional Clinical Grade",
        ],
      },

      {
        id: 50,

        name: "BIOACTIVE RCS",

        slug: "bioactive-rcs",

        shortDesc:
          "Bioactive root canal sealer designed for reliable obturation with excellent handling characteristics.",

        price: "Contact for Price",

        image: "/images/products/safe-endo/BIOACTIVE RCS.jpg",

        features: [
          "Bioactive Root Canal Sealer",

          "Excellent Flow",

          "High Biocompatibility",

          "Professional Clinical Grade",
        ],
      },

      {
        id: 51,

        name: "CALCICURE",

        slug: "calcicure",

        shortDesc:
          "Calcium hydroxide intracanal medicament for effective disinfection and endodontic treatment.",

        price: "Contact for Price",

        image: "/images/products/safe-endo/CALCICURE.jpg",

        features: [
          "Calcium Hydroxide Formula",

          "Intracanal Medicament",

          "High pH",

          "Professional Clinical Grade",
        ],
      },

      {
        id: 52,

        name: "DEVITALIZE 8GM (JAR)",

        slug: "devitalize-8gm-jar",

        shortDesc:
          "Devitalizing paste formulated for controlled pulp devitalization during endodontic procedures.",

        price: "Contact for Price",

        image: "/images/products/safe-endo/DEVITALIZE 8GM (JAR).jpg",

        features: [
          "Devitalizing Paste",

          "Easy Application",

          "Reliable Clinical Performance",

          "Professional Clinical Grade",
        ],
      },

      {
        id: 53,

        name: "DEVITALIZE PLUS",

        slug: "devitalize-plus",

        shortDesc:
          "Advanced devitalizing paste offering dependable clinical performance and controlled application.",

        price: "Contact for Price",

        image: "/images/products/safe-endo/DEVITALIZE PLUS.jpg",

        features: [
          "Advanced Devitalizing Formula",

          "Easy Placement",

          "Reliable Performance",

          "Professional Clinical Grade",
        ],
      },

      {
        id: 54,

        name: "HYPOCHLOR 3.25%",

        slug: "hypochlor-3-25",

        shortDesc:
          "3.25% sodium hypochlorite solution for effective irrigation and canal disinfection.",

        price: "Contact for Price",

        image: "/images/products/safe-endo/HYPOCHLOR-3.25.jpg",

        features: [
          "3.25% Sodium Hypochlorite",

          "Root Canal Irrigant",

          "Effective Canal Cleaning",

          "Professional Clinical Grade",
        ],
      },

      {
        id: 55,

        name: "HYPOCHLOR FORTE 5.25%",

        slug: "hypochlor-forte-5-25",

        shortDesc:
          "5.25% sodium hypochlorite solution providing enhanced irrigation and canal debridement.",

        price: "Contact for Price",

        image: "/images/products/safe-endo/HYPOCHLOR-FORTE-5.25.jpg",

        features: [
          "5.25% Sodium Hypochlorite",

          "High Strength Irrigant",

          "Excellent Canal Cleaning",

          "Professional Clinical Grade",
        ],
      },

      {
        id: 56,

        name: "IODOCURE",

        slug: "iodocure",

        shortDesc:
          "Iodoform-based intracanal dressing formulated for effective endodontic treatment.",

        price: "Contact for Price",

        image: "/images/products/safe-endo/IODOCURE.jpg",

        features: [
          "Iodoform Based",

          "Intracanal Dressing",

          "Easy Placement",

          "Professional Clinical Grade",
        ],
      },

      {
        id: 57,

        name: "RE-CAL LC",

        slug: "re-cal-lc",

        shortDesc:
          "Light-cure calcium-based liner designed to protect the pulp and support restorative procedures.",

        price: "Contact for Price",

        image: "/images/products/safe-endo/RE-CAL LC.jpg",

        features: [
          "Light Cure Calcium Liner",

          "Pulp Protection",

          "Easy Application",

          "Professional Clinical Grade",
        ],
      },

      {
        id: 58,

        name: "RE-CREATE LC FLOW",

        slug: "re-create-lc-flow",

        shortDesc:
          "Light-cure flowable composite designed for precise placement, excellent adaptation, and esthetic restorations.",

        price: "Contact for Price",

        image: "/images/products/safe-endo/RE-CREATE LC FLOW.jpg",

        features: [
          "Light Cure Flowable Composite",

          "Excellent Adaptation",

          "Easy Handling",

          "Professional Clinical Grade",
        ],
      },

      {
        id: 59,

        name: "RE-GLASS LC",

        slug: "re-glass-lc",

        shortDesc:
          "Light-cure glass ionomer restorative material providing reliable adhesion and fluoride release.",

        price: "Contact for Price",

        image: "/images/products/safe-endo/RE-GLASS LC.jpg",

        features: [
          "Light Cure Glass Ionomer",

          "Fluoride Releasing",

          "Strong Adhesion",

          "Professional Clinical Grade",
        ],
      },

      {
        id: 60,

        name: "RECREATE LC 5 COMPOSITE KIT",

        slug: "recreate-lc-5-composite-kit",

        shortDesc:
          "Light-cure composite restorative kit with five shades for durable and natural-looking restorations.",

        price: "Contact for Price",

        image: "/images/products/safe-endo/RECREATE LC 5 COMPOSITE KIT.jpg",

        features: [
          "Light Cure Composite Kit",

          "5 Shade System",

          "High Polishability",

          "Professional Clinical Grade",
        ],
      },

      {
        id: 61,

        name: "RECREATE LC 7 COMPOSITE KIT",

        slug: "recreate-lc-7-composite-kit",

        shortDesc:
          "Comprehensive seven-shade light-cure composite kit for highly esthetic direct restorations.",

        price: "Contact for Price",

        image: "/images/products/safe-endo/RECREATE LC 7 COMPOSITE KIT.jpg",

        features: [
          "Light Cure Composite Kit",

          "7 Shade System",

          "Excellent Esthetics",

          "Professional Clinical Grade",
        ],
      },

      {
        id: 62,

        name: "SECURE T",

        slug: "secure-t",

        shortDesc:
          "Temporary luting cement formulated to provide reliable retention and easy removal of provisional restorations.",

        price: "Contact for Price",

        image: "/images/products/safe-endo/SECURE T.jpg",

        features: [
          "Temporary Luting Cement",

          "Reliable Retention",

          "Easy Removal",

          "Professional Clinical Grade",
        ],
      },

      {
        id: 63,

        name: "SMART ETCH",

        slug: "smart-etch",

        shortDesc:
          "Phosphoric acid etching gel formulated for effective enamel and dentin conditioning before bonding procedures.",

        price: "Contact for Price",

        image: "/images/products/safe-endo/SMART ETCH.jpg",

        features: [
          "Phosphoric Acid Etching Gel",

          "Excellent Viscosity",

          "Easy Rinsing",

          "Professional Clinical Grade",
        ],
      },

      {
        id: 64,

        name: "SMART PREP LIQUID 100 ML",

        slug: "smart-prep-liquid-100ml",

        shortDesc:
          "Canal preparation liquid formulated to facilitate cleaning and conditioning during endodontic procedures.",

        price: "Contact for Price",

        image: "/images/products/safe-endo/SMART PREP LIQUID 100 ML.jpg",

        features: [
          "Canal Preparation Solution",

          "Effective Cleaning",

          "Easy Application",

          "Professional Clinical Grade",
        ],
      },

      {
        id: 65,

        name: "SMART PREP",

        slug: "smart-prep",

        shortDesc:
          "Root canal preparation gel designed to lubricate instruments and assist efficient canal preparation.",

        price: "Contact for Price",

        image: "/images/products/safe-endo/SMART PREP.jpg",

        features: [
          "Canal Preparation Gel",

          "Instrument Lubrication",

          "Efficient Canal Preparation",

          "Professional Clinical Grade",
        ],
      },

      {
        id: 66,

        name: "SMART TEMP",

        slug: "smart-temp",

        shortDesc:
          "Temporary filling material formulated to provide dependable sealing between dental treatment appointments.",

        price: "Contact for Price",

        image: "/images/products/safe-endo/SMART TEMP.jpg",

        features: [
          "Temporary Filling Material",

          "Excellent Seal",

          "Easy Placement & Removal",

          "Professional Clinical Grade",
        ],
      },
    ],

    handpieces: [
      {
        id: 12,

        name: "NORMAL LED HANDPIECE",

        slug: "normal-led-handpiece",

        shortDesc: "Ceramic bearing handpiece with shadow illumination",

        price: "Contact for Price",

        image: "https://res.cloudinary.com/dk4npblv3/image/upload/v1779272398/1_3_m6vph2.png",

        features: ["Ceramic Ball Bearings", "Shadow iIlumination", "Light Weight With Fine Grip"],
      },

      {
        id: 13,

        name: "MINI HEAD HANDPIECE",

        slug: "mini-head-handpiece",

        shortDesc: "High-speed mini head handpiece for better access",

        price: "Contact for Price",

        image: "https://res.cloudinary.com/dk4npblv3/image/upload/v1779272097/1_2_mlr3hf.png",

        features: ["Ceramic Ball Bearings", "Shadow iIlumination", "Light Weight With Fine Grip"],
      },

      {
        id: 14,

        name: "5 LED GOLDEN SERIES",

        slug: "5-led-golden-series",

        shortDesc: "Shadowless airotor with 5-hole water spray",

        price: "Contact for Price",

        image: "https://res.cloudinary.com/dk4npblv3/image/upload/v1779271205/8_e1xh0w.png",

        features: ["Ceramic Ball Bearings", "Shadow iIlumination", "Light Weight With Fine Grip"],
      },

      {
        id: 15,

        name: "PLATINUM HANDPIECE",

        slug: "led-platinum-handpiece",

        shortDesc: "Premium stainless steel handpiece with super torque",

        price: "Contact for Price",

        image: "https://res.cloudinary.com/dk4npblv3/image/upload/v1779272685/1_4_xwll0g.png",

        features: [
          "Ceram ic Ball Bearings",

          "Ergonomic Design",

          "Stainless Steel Body",

          "Super Torque",
        ],
      },

      {
        id: 16,

        name: "IMPLANT HANDPIECE 20:2",

        slug: "implant-handpiece-20-1",

        shortDesc: "High torque implant handpiece with ceramic bearings",

        price: "Contact for Price",

        image: "https://res.cloudinary.com/dk4npblv3/image/upload/v1779271751/1_1_z9hqgq.png",

        features: [
          "Ceramic Ball Bearings",

          "Powerful, Quiet And Large Torque",

          "Light Weight With Fine Grip",
        ],
      },

      {
        id: 26,

        name: "STRAIGHT HANDPIECE",

        slug: "straight-handpiece",

        shortDesc: "E-Type low speed handpiece with ceramic bearings, autoclavable to 135°C",

        price: "Contact for Price",

        image: "https://res.cloudinary.com/dk4npblv3/image/upload/v1779526990/1_dthnay.png",

        features: [
          "Ceramic Ball Bearings",

          "E-Type Low Speed Handpiece",

          "Autoclavable up to 135°C",
        ],
      },

      {
        id: 29,

        name: "SURGICAL HANDPIECE",

        slug: "surgical-straight-handpiece",

        shortDesc: "CE certified surgical handpiece, autoclavable to 135°C",

        price: "Contact for Price",

        image: "https://res.cloudinary.com/dk4npblv3/image/upload/v1779527232/4_1_lauyxy.png",

        features: [
          "CE Certified",

          "Autoclavable up to 135°C",

          "Twist-Lock Bur Chuck",

          "Ceramic Ball Bearings",
        ],
      },

      {
        id: 28,

        name: "OPTIC FIBER IMPLANT HANDPIECE 20:1",

        slug: "optic-fiber-implant-handpiece-20-1",

        shortDesc: "20:1 reduction implant handpiece with optic fiber illumination",

        price: "Contact for Price",

        image: "https://res.cloudinary.com/dk4npblv3/image/upload/v1779527375/1_1_qgsunb.png",

        features: [
          "Ceramic Ball Bearings",

          "High Hardness Stainless Material",

          "Light Weight With Fine Grip",

          "Ergonomic Design",

          "Optic Fiber Illumination",
        ],
      },
    ],

    maintenance: [
      {
        id: 17,

        name: "BOSS SPRAY",

        slug: "boss-spray",

        shortDesc: "Handpiece lubricant spray – 500ml",

        price: "Contact for Price",

        image:
          "https://res.cloudinary.com/dk4npblv3/image/upload/v1779270274/Boss_Spray_ry6hps.png",

        features: [
          "Quantity 500ml",

          "Premium Quality",

          "Odourless",

          "Best Lubrication For Handpiece",
        ],
      },
    ],

    accessories: [
      {
        id: 18,

        name: "RVG SLEEVES",

        slug: "rvg-sleeves",

        shortDesc: "Disposable sleeves to prevent cross-contamination",

        price: "Contact for Price",

        image:
          "https://res.cloudinary.com/dk4npblv3/image/upload/v1779269845/RVG_Sleeves_kldm7s.png",

        features: [
          "Compatible With Every Sensor",

          "Fine & Smooth Texture",

          "Ultrasoft For Patient Comfort",
        ],
      },
    ],

    magnification: [
      {
        id: 19,

        name: "UNIVERSAL ZOOM LOUPE",

        slug: "universal-zoom-loupe",

        shortDesc: "Professional magnification with LED lighting",

        price: "Contact for Price",

        image:
          "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018528/universal-zoom-loupe_x94uo7.png",

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
      },
    ],

    equipment: [],
  };

  const flatProducts = useMemo(() => {
    const mergedProducts = { ...allProducts };
    Object.entries(additionalProducts || {}).forEach(([category, products]) => {
      mergedProducts[category] = [
        ...(mergedProducts[category] || []),
        ...(Array.isArray(products) ? products : []),
      ];
    });

    return Object.entries(mergedProducts).flatMap(([category, products]) =>
      (Array.isArray(products) ? products : []).map((product) => ({
        ...product,
        category,
        name: product.name || "Untitled product",
        shortDesc: product.shortDesc || "Professional dental product.",
        features: Array.isArray(product.features) ? product.features : [],
      })),
    );
  }, []);

  const categories = useMemo(() => {
    const base = [
      { id: "all", name: "All products" },
      { id: "endodontic-files", name: "Endodontic files" },
      { id: "handpieces", name: "Handpieces" },
      { id: "dental-materials", name: "Dental materials" },
      { id: "burs", name: "Burs" },
      { id: "maintenance", name: "Maintenance" },
      { id: "accessories", name: "Accessories" },
      { id: "magnification", name: "Magnification" },
      { id: "equipment", name: "Equipment" },
    ];
    return base.map((cat) => ({
      ...cat,
      count:
        cat.id === "all"
          ? flatProducts.length
          : flatProducts.filter((p) => p.category === cat.id).length,
    }));
  }, [flatProducts]);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const results = flatProducts.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const searchable = [
        product.name,
        product.shortDesc,
        product.category,
        ...(product.features || []),
      ]
        .join(" ")
        .toLowerCase();
      return matchesCategory && (!query || searchable.includes(query));
    });

    if (sortBy === "name-asc") results.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "name-desc") results.sort((a, b) => b.name.localeCompare(a.name));
    return results;
  }, [flatProducts, selectedCategory, searchQuery, sortBy]);

  const activeCategory =
    categories.find((category) => category.id === selectedCategory)?.name || "All products";

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSortBy("featured");
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#142f49]">
      {/* Editorial hero */}
      <section className="relative isolate overflow-hidden bg-[#102f4d] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_10%,rgba(38,167,235,0.32),transparent_38%),radial-gradient(ellipse_at_5%_95%,rgba(86,133,177,0.2),transparent_35%)]" />
        <div className="absolute -right-24 -top-32 -z-10 h-[440px] w-[440px] rounded-full border border-white/10" />
        <div className="absolute -right-8 -top-16 -z-10 h-[310px] w-[310px] rounded-full border border-white/10" />
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-12 lg:pb-24 lg:pt-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-100">
              <Sparkles size={13} /> Precision in every detail
            </div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-sky-200">
              The Bossdent collection
            </p>
            <h1 className="max-w-3xl text-4xl font-medium leading-[1.06] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Equipment and essentials for{" "}
              <span className="font-serif italic font-normal text-sky-200">better dentistry.</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Explore a carefully assembled range of dental instruments, materials and clinical
              essentials built around the needs of modern practices.
            </p>
            <a
              href="#catalogue"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3.5 text-xs font-bold text-[#153958] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-sky-100"
            >
              Explore the catalogue <ArrowRight size={15} />
            </a>
          </div>
          <div className="grid grid-cols-3 gap-3 lg:justify-self-end lg:min-w-[350px]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur sm:p-5">
              <span className="block text-2xl font-medium tracking-tight sm:text-3xl">
                {flatProducts.length}
              </span>
              <span className="mt-2 block text-[10px] leading-4 text-white/60 sm:text-xs">
                Listed products
              </span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur sm:p-5">
              <span className="block text-2xl font-medium tracking-tight sm:text-3xl">
                {categories.length - 1}
              </span>
              <span className="mt-2 block text-[10px] leading-4 text-white/60 sm:text-xs">
                Categories
              </span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur sm:p-5">
              <span className="block text-2xl font-medium tracking-tight sm:text-3xl">B.</span>
              <span className="mt-2 block text-[10px] leading-4 text-white/60 sm:text-xs">
                Clinical focus
              </span>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1440px] items-center justify-between border-t border-white/10 px-5 py-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45 sm:px-8 lg:px-12">
          <span>Instruments · Materials · Equipment</span>
          <span>
            Browse the range <span aria-hidden="true">↘</span>
          </span>
        </div>
      </section>

      {/* Catalogue controls */}
      <section id="catalogue" className="scroll-mt-24 px-5 pb-20 pt-10 sm:px-8 sm:pt-14 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#2388bf]">
                Product catalogue
              </p>
              <h2 className="text-3xl font-medium tracking-[-0.04em] text-[#173650] sm:text-4xl">
                Find what your practice needs.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                Search the collection or choose a category to narrow your selection.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" /> Catalogue ready
              to explore
            </div>
          </div>

          <div className="mb-6 rounded-2xl border border-[#e5eaf0] bg-white p-3 shadow-[0_8px_30px_rgba(17,48,73,0.04)] sm:p-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <label className="relative block min-w-0 flex-1">
                <Search
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="search"
                  placeholder="Search by product, feature or category..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="w-full rounded-xl border border-[#e7ecf0] bg-[#f9fbfc] py-3.5 pl-11 pr-10 text-sm text-[#173650] outline-none transition placeholder:text-slate-400 focus:border-[#69b9df] focus:bg-white focus:ring-4 focus:ring-sky-100"
                  aria-label="Search products"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                  >
                    <X size={15} />
                  </button>
                )}
              </label>
              <div className="flex items-center gap-2">
                <label
                  htmlFor="product-sort"
                  className="flex shrink-0 items-center gap-2 text-xs font-semibold text-slate-500"
                >
                  <SlidersHorizontal size={15} /> Sort
                </label>
                <select
                  id="product-sort"
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="min-w-0 flex-1 rounded-xl border border-[#e7ecf0] bg-white px-3 py-3.5 text-xs font-semibold text-[#173650] outline-none focus:border-[#69b9df] sm:min-w-[170px]"
                >
                  <option value="featured">Featured order</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1">
              <Filter size={15} className="mr-1 shrink-0 text-slate-400" />
              {categories.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    aria-pressed={active}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2.5 text-[11px] font-semibold transition ${active ? "border-[#173e60] bg-[#173e60] text-white shadow-sm" : "border-[#e7ecf0] bg-white text-slate-600 hover:border-sky-200 hover:bg-sky-50 hover:text-[#173e60]"}`}
                  >
                    {cat.name}
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[9px] ${active ? "bg-white/15 text-white" : "bg-slate-100 text-slate-500"}`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-slate-500" aria-live="polite">
              Showing{" "}
              <strong className="font-bold text-[#173650]">{filteredProducts.length}</strong>{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
              {selectedCategory !== "all" && (
                <>
                  {" "}
                  in <strong className="font-semibold text-[#2388bf]">{activeCategory}</strong>
                </>
              )}
              {searchQuery.trim() && (
                <>
                  {" "}
                  matching{" "}
                  <strong className="font-semibold text-[#173650]">“{searchQuery.trim()}”</strong>
                </>
              )}
            </p>
            {(selectedCategory !== "all" || searchQuery || sortBy !== "featured") && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2588b8] transition hover:text-[#173e60]"
              >
                <X size={13} /> Clear filters
              </button>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product, index) => (
                <article
                  key={`${product.category}-${product.id}-${product.slug}`}
                  className="group flex min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#e6ebef] bg-white shadow-[0_3px_16px_rgba(17,48,73,0.035)] transition duration-300 hover:-translate-y-1 hover:border-[#d4e4ed] hover:shadow-[0_18px_40px_rgba(17,48,73,0.10)]"
                >
                  <Link
                    href={`/products/${product.slug}`}
                    className="block"
                    aria-label={`View ${product.name}`}
                  >
                    <div
                      className={`relative flex h-[235px] items-center justify-center overflow-hidden bg-gradient-to-br ${getBgById(product.id)} p-7 sm:h-[250px]`}
                    >
                      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80" />
                      <div className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/45 blur-xl" />
                      <img
                        src={product.image}
                        alt={product.name}
                        loading={index < 8 ? "eager" : "lazy"}
                        className="relative z-10 h-full w-full object-contain drop-shadow-[0_14px_12px_rgba(29,48,65,0.12)] transition duration-500 ease-out group-hover:scale-[1.06]"
                      />
                      <span className="absolute left-3 top-3 z-20 max-w-[calc(100%-24px)] truncate rounded-full border border-white/80 bg-white/85 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.1em] text-[#31536a] shadow-sm backdrop-blur">
                        {formatCategory(product.category)}
                      </span>
                      <span className="absolute bottom-3 right-3 z-20 grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-white text-[#173e60] opacity-0 shadow-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowRight size={15} />
                      </span>
                    </div>
                  </Link>

                  <div className="flex flex-1 flex-col p-5 sm:p-5">
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <h3 className="line-clamp-2 min-h-[44px] text-[14px] font-bold leading-5 tracking-[-0.01em] text-[#173650] transition group-hover:text-[#2588b8]">
                        {product.name}
                      </h3>
                    </div>
                    <p className="mb-4 line-clamp-2 min-h-[40px] text-[11px] leading-[1.8] text-slate-500">
                      {product.shortDesc}
                    </p>

                    {product.features.length > 0 && (
                      <ul className="mb-5 space-y-2">
                        {product.features.slice(0, 3).map((feature, featureIndex) => (
                          <li
                            key={`${product.slug}-feature-${featureIndex}`}
                            className="flex items-start gap-2 text-[10px] leading-[1.55] text-slate-600"
                          >
                            <span className="mt-[2px] flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#eaf6fb] text-[#2488b9]">
                              <Check size={9} strokeWidth={2.5} />
                            </span>
                            <span className="line-clamp-2">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-auto border-t border-[#edf0f2] pt-4">
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                          Pricing
                        </span>
                        <span className="text-[11px] font-bold text-[#173e60]">
                          {product.price || "Contact for Price"}
                        </span>
                      </div>
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#173e60] px-4 py-3 text-[11px] font-bold text-white transition hover:bg-[#2588b8] focus:outline-none focus:ring-4 focus:ring-sky-100"
                      >
                        View product{" "}
                        <ArrowRight size={13} className="transition group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-[#d7e1e8] bg-white px-5 py-20 text-center">
              <span className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-[#edf6fa] text-[#2588b8]">
                <PackageSearch size={27} strokeWidth={1.5} />
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-[#173650]">
                No products found
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                We couldn’t find a product matching your current search and category. Try a broader
                search or clear your filters.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#173e60] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#2588b8]"
              >
                Clear all filters <ArrowRight size={14} />
              </button>
            </div>
          )}

          <div className="mt-12 flex flex-col justify-between gap-5 rounded-2xl border border-[#dce8ef] bg-[#eef6fa] p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-[#2588b8] shadow-sm">
                <Sparkles size={19} />
              </span>
              <div>
                <h3 className="text-base font-semibold text-[#173650]">
                  Need help finding the right product?
                </h3>
                <p className="mt-1 max-w-xl text-xs leading-6 text-slate-600">
                  Our team can help you explore the range and find the right fit for your clinical
                  requirements.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#173e60] px-5 py-3.5 text-xs font-bold text-white transition hover:bg-[#2588b8]"
            >
              Contact our team <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
