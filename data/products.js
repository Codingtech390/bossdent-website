// data/products.js
// ─────────────────────────────────────────────
// All product data lives here — import into any
// page or component that needs it.
// ─────────────────────────────────────────────

export const CATEGORY_NAMES = {
  "endodontic-files": "Endodontic Files",
  handpieces: "Handpieces",
  "dental-materials": "Dental Materials",
  maintenance: "Maintenance Products",
  accessories: "Accessories",
  magnification: "Magnification Equipment",
  equipment: "Dental Equipment",
};

export const getCategoryName = (slug) => CATEGORY_NAMES[slug] ?? "Products";

// ─── Product Data ────────────────────────────

export const ALL_PRODUCTS = {
  "endodontic-files": [
    {
      id: 1,
      name: "E-CURVE GOLD",
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
      name: "E-CURVE BLUE",
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
      name: "E-CURVE MINI",
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
      name: "WAXONE ",
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
  ],

  handpieces: [
    {
      id: 14,
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
      id: 15,
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
      id: 16,
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
      id: 17,
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
      id: 18,
      name: "IMPLANT HANDPIECE 20:1",
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
      id: 29,
      name: "SURGICAL HANDPIECE",
      slug: "surgical-straight-handpiece",
      shortDesc:
        "CE certified surgical straight handpiece, autoclavable to 135°C",
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
      id: 19,
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
      id: 20,
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
      id: 21,
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

/**
 * Returns products for a given category slug.
 * @param {string} category
 * @returns {Array}
 */
export const getProductsByCategory = (category) => ALL_PRODUCTS[category] ?? [];
