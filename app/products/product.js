"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Filter, Search } from "lucide-react";
import "../globals.css";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // ── Brand-matched gradient backgrounds ──
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

  // Stable bg per product id (not random on every render)
  const getBgById = (id) => bgGradients[id % bgGradients.length];

  // ── Category label formatter ──
  const formatCategory = (cat) =>
    cat
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  // ===============================
  // ALL PRODUCTS
  // ===============================
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
        image:
          "https://res.cloudinary.com/dk4npblv3/image/upload/v1773137563/flexblue_vuyndh.png",
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
        image:
          "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018215/E-FLEXRT1_z1a62i.png",
        features: [
          "Variable Pitch",
          "Sharp Cutting Flutes",
          "Efficient Cutting and Guiding Tip",
        ],
      },
    ],
    "dental-materials": [
      {
        id: 7,
        name: "CALCI ONE",
        slug: "calci-one",
        shortDesc: "Calcium hydroxide paste – radiopaque, water based (3g)",
        price: "Contact for Price",
        image:
          "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018074/calci-one_ff4yex.png",
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
        image:
          "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018112/prep-one_ltsyn5.png",
        features: [
          "EDTA salts (17%)",
          "Carbamide Peroxide (10%)",
          "Paste Forming Agent",
        ],
      },
      {
        id: 9,
        name: "ETCH ONE",
        slug: "etch-one",
        shortDesc: "Dental gel for enamel & dentine etching (5ml)",
        price: "Contact for Price",
        image:
          "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018089/etch-one_wmrfsj.png",
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
        image:
          "https://res.cloudinary.com/dk4npblv3/image/upload/v1772018113/temp-one_zqy0wd.png",
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
        image: "/images/products/safe-endo/HYPOCHLOR 3.25%.jpg",
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
        image: "/images/products/safe-endo/HYPOCHLOR FORTE 5.25%.jpg",
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
        image:
          "https://res.cloudinary.com/dk4npblv3/image/upload/v1779272398/1_3_m6vph2.png",
        features: [
          "Ceramic Ball Bearings",
          "Shadow iIlumination",
          "Light Weight With Fine Grip",
        ],
      },
      {
        id: 13,
        name: "MINI HEAD HANDPIECE",
        slug: "mini-head-handpiece",
        shortDesc: "High-speed mini head handpiece for better access",
        price: "Contact for Price",
        image:
          "https://res.cloudinary.com/dk4npblv3/image/upload/v1779272097/1_2_mlr3hf.png",
        features: [
          "Ceramic Ball Bearings",
          "Shadow iIlumination",
          "Light Weight With Fine Grip",
        ],
      },
      {
        id: 14,
        name: "5 LED GOLDEN SERIES",
        slug: "5-led-golden-series",
        shortDesc: "Shadowless airotor with 5-hole water spray",
        price: "Contact for Price",
        image:
          "https://res.cloudinary.com/dk4npblv3/image/upload/v1779271205/8_e1xh0w.png",
        features: [
          "Ceramic Ball Bearings",
          "Shadow iIlumination",
          "Light Weight With Fine Grip",
        ],
      },
      {
        id: 15,
        name: "PLATINUM HANDPIECE",
        slug: "led-platinum-handpiece",
        shortDesc: "Premium stainless steel handpiece with super torque",
        price: "Contact for Price",
        image:
          "https://res.cloudinary.com/dk4npblv3/image/upload/v1779272685/1_4_xwll0g.png",
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
        image:
          "https://res.cloudinary.com/dk4npblv3/image/upload/v1779271751/1_1_z9hqgq.png",
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
        shortDesc:
          "E-Type low speed handpiece with ceramic bearings, autoclavable to 135°C",
        price: "Contact for Price",
        image:
          "https://res.cloudinary.com/dk4npblv3/image/upload/v1779526990/1_dthnay.png",
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
        image:
          "https://res.cloudinary.com/dk4npblv3/image/upload/v1779527232/4_1_lauyxy.png",
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
        shortDesc:
          "20:1 reduction implant handpiece with optic fiber illumination",
        price: "Contact for Price",
        image:
          "https://res.cloudinary.com/dk4npblv3/image/upload/v1779527375/1_1_qgsunb.png",
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

  // ── Flatten products + attach category ──
  const flatProducts = useMemo(() => {
    return Object.entries(allProducts).flatMap(([category, products]) =>
      products.map((product) => ({ ...product, category })),
    );
  }, []);

  // ── Categories with counts ──
  const categories = useMemo(() => {
    const base = [
      { id: "all", name: "All Products" },
      { id: "endodontic-files", name: "Endodontic Files" },
      { id: "handpieces", name: "Handpieces" },
      { id: "dental-materials", name: "Dental Materials" },
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

  // ── Filter products ──
  const filteredProducts = useMemo(() => {
    return flatProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [flatProducts, selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* ── Hero ── */}
      <section
        className="relative min-h-[45vh] text-white py-16 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `
      url('https://res.cloudinary.com/dk4npblv3/image/upload/v1779534336/Gemini_Generated_Image_3kowgq3kowgq3kow_qtlsmr.png')
    `,
        }}
      >
        <div className="absolute inset-0 bg-[#1B4873]/57"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <p className="text-white font-bold tracking-widest text-xs uppercase mb-3">
            Complete Collection
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-3">Our Products</h1>

          <p className="text-xl text-white/80 max-w-2xl">
            International quality dental equipment designed for precision
          </p>

          <div className="mt-5 inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium">
            {flatProducts.length} Products Available
          </div>
        </div>
      </section>
      {/* ── Filters ── */}
      <section className="bg-white border-b shadow-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
          {/* Search */}
          <div className="relative w-full lg:w-80">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#26A7EB] focus:border-transparent"
            />
          </div>

          {/* Category filter pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 w-full lg:w-auto">
            <Filter size={15} className="text-gray-400 flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? "bg-[#26A7EB] text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.name}
                <span
                  className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                    selectedCategory === cat.id
                      ? "bg-white/25 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Grid ── */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Result count */}
          <p className="mb-6 text-sm text-gray-500">
            Showing{" "}
            <span className="font-bold text-[#1B4873]">
              {filteredProducts.length}
            </span>{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
            {selectedCategory !== "all" && (
              <span className="ml-1 text-gray-400">
                in{" "}
                <span className="text-[#26A7EB] font-semibold">
                  {categories.find((c) => c.id === selectedCategory)?.name}
                </span>
              </span>
            )}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col shadow-sm"
              >
                {/* ── Image Container ── */}
                <div
                  className={`relative h-52 bg-gradient-to-br ${getBgById(product.id)} flex items-center justify-center overflow-hidden p-4`}
                >
                  {/* Decorative ring */}
                  <div className="absolute w-36 h-36 rounded-full border border-dashed border-[#1B4873]/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                  <div className="absolute w-24 h-24 rounded-full bg-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                  {/* ✅ IMAGE FIX: w-full h-full object-contain */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                  />

                  {/* Category badge */}
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#1B4873] text-[10px] font-bold px-2.5 py-1 rounded-full shadow z-20 uppercase tracking-wide">
                    {formatCategory(product.category)}
                  </span>
                </div>

                {/* Animated accent bar */}
                <div className="h-0.5 bg-gradient-to-r from-[#1B4873] to-[#26A7EB] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                {/* ── Content ── */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-base text-gray-900 group-hover:text-[#26A7EB] transition-colors duration-200 mb-1.5 line-clamp-2">
                    {product.name}
                  </h3>

                  <p className="text-xs text-gray-500 mb-3 line-clamp-2 leading-relaxed">
                    {product.shortDesc}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {product.features.slice(0, 3).map((f, i) => (
                      <li
                        key={i}
                        className="text-xs text-gray-500 flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-[#26A7EB] rounded-full flex-shrink-0 mt-1" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-[#1B4873] hover:bg-[#26A7EB] text-white py-2.5 rounded-xl text-xs font-bold transition-colors duration-200 shadow-sm"
                  >
                    View Details
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-24">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-gray-300" />
              </div>
              <p className="text-gray-400 font-medium text-lg mb-1">
                No products found
              </p>
              <p className="text-gray-300 text-sm mb-6">
                Try a different search or category
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="bg-[#26A7EB] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#2193cf] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
