/**
 * Gallery — self-hosted from /public/gallery/ so they load reliably on
 * every mobile network without depending on third-party CDN.
 *
 * Each photo is a curated Unsplash image that matches the restaurant's
 * actual style (old-school Southern Italian trattoria, hand-rolled pasta,
 * slow-cooked red sauce). Saved 2026-04-29.
 *
 * To replace with real photography:
 *  1. Drop the photos into public/gallery/ (overwrite the current files)
 *  2. Set GALLERY_IS_PLACEHOLDER to false
 */

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  aspect?: "portrait" | "landscape" | "square";
};

export const GALLERY_IS_PLACEHOLDER = true;

// Helper: prefix paths with the Vite base so they resolve correctly on the
// `/3-guys-from-italy-demo/` GH Pages subpath.
const G = (file: string) => `${import.meta.env.BASE_URL}gallery/${file}`;

export const HERO_IMAGE = {
  srcWide: G("hero-italian-table.jpg"),
  srcPortrait: G("hero-italian-table.jpg"),
  srcFull: G("hero-italian-table.jpg"),
  alt: "Long Italian family table — handmade pasta, red sauce, fresh bread, candlelight",
  credit: "Photo: Unsplash",
};

export const BRAND_INSIDE = {
  tile: G("inside-trattoria.jpg"),
  wide: G("inside-trattoria.jpg"),
};

/** Gallery tiles — curated for old-school Southern Italian trattoria vibe. */
export const GALLERY: GalleryImage[] = [
  {
    src: G("cavatelli-broccoli.jpg"),
    alt: "Bowl of cavatelli pasta with broccoli, garlic, and parmesan",
    caption: "Cavatelli & Broccoli",
    credit: "Photo: Unsplash",
    aspect: "portrait",
  },
  {
    src: G("braciole.jpg"),
    alt: "Braised beef in slow-cooked red sauce",
    caption: "Braciole — the dish regulars name first",
    credit: "Photo: Unsplash",
    aspect: "portrait",
  },
  {
    src: G("cheese-pizza.jpg"),
    alt: "Hand-stretched cheese pizza fresh from the oven",
    caption: "Front-counter cheese pizza",
    credit: "Photo: Unsplash",
    aspect: "portrait",
  },
  {
    src: G("mussels.jpg"),
    alt: "Bowl of mussels in white wine garlic sauce",
    caption: "Mussels — marinara or white wine",
    credit: "Photo: Unsplash",
    aspect: "portrait",
  },
  {
    src: G("eggplant-parm.jpg"),
    alt: "Eggplant parmigiana with melted mozzarella",
    caption: "Eggplant Parmigiana",
    credit: "Photo: Unsplash",
    aspect: "portrait",
  },
  {
    src: G("pasta-fagioli.jpg"),
    alt: "Bowl of pasta fagioli soup with beans, ditalini, and herbs",
    caption: "Pasta Fagioli — best in Union County",
    credit: "Photo: Unsplash",
    aspect: "portrait",
  },
  {
    src: G("chicken-parm.jpg"),
    alt: "Chicken parmigiana served over spaghetti with red sauce",
    caption: "Chicken Parmigiana",
    credit: "Photo: Unsplash",
    aspect: "portrait",
  },
  {
    src: G("sea-bass.jpg"),
    alt: "Sea bass with tomatoes, capers, and olives — Livornese style",
    caption: "Sea Bass Livornese",
    credit: "Photo: Unsplash",
    aspect: "portrait",
  },
  {
    src: G("trattoria-night.jpg"),
    alt: "Cozy candle-lit Italian trattoria interior with red wine and bread",
    caption: "The dining room behind the pizza counter",
    credit: "Photo: Unsplash",
    aspect: "portrait",
  },
];
