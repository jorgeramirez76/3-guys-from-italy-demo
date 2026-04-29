/**
 * Gallery images.
 *
 * NOTE: We don't yet have on-site photography from Three Guys From Italy.
 * The gallery uses curated Unsplash photos that match the restaurant's
 * actual style — old-school Southern Italian trattoria, hand-rolled pasta,
 * slow-cooked red sauce. Each image carries a clear "Photo: Unsplash"
 * credit.
 *
 * To replace with real photography:
 *  1. Drop the photos into src/assets/brand/ as JPG
 *  2. Import them at the top and swap the URL strings below
 *  3. Set GALLERY_IS_PLACEHOLDER to false
 */

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  aspect?: "portrait" | "landscape" | "square";
};

export const GALLERY_IS_PLACEHOLDER = true;

export const HERO_IMAGE = {
  // Wide hero — generous Italian dining table with handmade pasta + red sauce
  srcWide: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=2400&q=85&auto=format&fit=crop",
  // Portrait crop for mobile
  srcPortrait: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1200&h=1600&q=85&auto=format&fit=crop",
  // Full-bleed fallback
  srcFull: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=3000&q=85&auto=format&fit=crop",
  alt: "Long Italian family table — handmade pasta, red sauce, fresh bread, candlelight",
  credit: "Photo: Unsplash",
};

export const BRAND_INSIDE = {
  tile: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85&auto=format&fit=crop",
  wide: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2400&q=85&auto=format&fit=crop",
};

/** Gallery tiles — curated for old-school Southern Italian trattoria vibe. */
export const GALLERY: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=1600&q=85&auto=format&fit=crop",
    alt: "Bowl of cavatelli pasta with broccoli, garlic, and parmesan",
    caption: "Cavatelli & Broccoli",
    credit: "Photo: Unsplash",
    aspect: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1601565415267-724db0e9fb27?w=1600&q=85&auto=format&fit=crop",
    alt: "Braised beef braciole rolled in slow-cooked red sauce",
    caption: "Braciole — the dish regulars name first",
    credit: "Photo: Unsplash",
    aspect: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1600&q=85&auto=format&fit=crop",
    alt: "Hand-stretched cheese pizza fresh from the oven",
    caption: "Front-counter cheese pizza",
    credit: "Photo: Unsplash",
    aspect: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1593504049359-74330189a345?w=1600&q=85&auto=format&fit=crop",
    alt: "Bowl of mussels in white wine garlic sauce",
    caption: "Mussels — marinara or white wine",
    credit: "Photo: Unsplash",
    aspect: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=1600&q=85&auto=format&fit=crop",
    alt: "Eggplant parmigiana with melted mozzarella",
    caption: "Eggplant Parmigiana",
    credit: "Photo: Unsplash",
    aspect: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1587740908075-9e245311b6d6?w=1600&q=85&auto=format&fit=crop",
    alt: "Bowl of pasta fagioli soup with beans, ditalini, and herbs",
    caption: "Pasta Fagioli — best in Union County",
    credit: "Photo: Unsplash",
    aspect: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=1600&q=85&auto=format&fit=crop",
    alt: "Chicken parmigiana served over spaghetti with red sauce",
    caption: "Chicken Parmigiana",
    credit: "Photo: Unsplash",
    aspect: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1481931715705-36f5f6ee0ec5?w=1600&q=85&auto=format&fit=crop",
    alt: "Sea bass with tomatoes, capers, and olives — Livornese style",
    caption: "Sea Bass Livornese",
    credit: "Photo: Unsplash",
    aspect: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=85&auto=format&fit=crop",
    alt: "Cozy candle-lit Italian trattoria interior with red wine and bread",
    caption: "The dining room behind the pizza counter",
    credit: "Photo: Unsplash",
    aspect: "portrait",
  },
];
