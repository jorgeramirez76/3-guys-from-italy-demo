/**
 * Real customer reviews for Three Guys From Italy, Kenilworth NJ.
 * Pulled 2026-04-29 from Tripadvisor + Restaurantji + Yelp.
 *
 * Quotes are slightly trimmed for length but preserve the reviewer's words.
 * Sources documented in /research/sources.md.
 */

export type ReviewTheme = {
  heading: string;
  body: string;
  sourceNote?: string;
};

export const REVIEW_THEMES_VERIFIED = true;

export const ACCOLADE = {
  label: "Hidden gem of Kenilworth · Family-run since 1982",
  sourceNote: "Three brothers from Bari, Italy. Forty-four years on 20th Street.",
};

export const REVIEW_THEMES: ReviewTheme[] = [
  {
    heading: "Best braciole and red sauce",
    body: '"The best braciole and red sauce since my mother-in-law made it. Wonderful potato croquettes. Very authentic Southern Italian food."',
    sourceNote: "lekerm — New Jersey · Tripadvisor",
  },
  {
    heading: "Pasta fagioli is the area standard",
    body: "Reviewers across Restaurantji and Yelp consistently call out the pasta fagioli — often described as the best in Union County. House-made fresh, the way Italian grandmothers used to make it.",
    sourceNote: "Restaurantji + Yelp consensus, 141+107 reviews",
  },
  {
    heading: "A trattoria hidden behind a pizzeria",
    body: "Most first-timers don't realize there's a full Italian dining room behind the pizza counter. Slip past the slice case and you'll find the real menu — Sea Bass Livornese, Veal Saltimbocca, Tripe in red sauce, and the kind of slow-cooked classics that take an afternoon to prepare.",
    sourceNote: "Recurring observation across review sources",
  },
  {
    heading: "Forty-four years, still family-run",
    body: '"Owner, chef and manager Nick is still here. Continue to patronize Nick and his family." Three brothers from Bari opened the doors in 1982. Cash only, BYOB, and the same Southern Italian recipes for four decades.',
    sourceNote: "Alex V — Kenilworth · Tripadvisor",
  },
  {
    heading: "Great food, big variety, comfortable room",
    body: '"Great food. Big variety menu." The dining room is small and quiet — the kind of cozy Italian trattoria you go to when you want to actually hear the person across the table.',
    sourceNote: "Aggregated from Tripadvisor + Restaurantji",
  },
];

/** Public rating snapshot — totals as of 2026-04-29. */
export const RATING_SNAPSHOT = {
  tripadvisor: { score: 4.0, count: 40, url: "https://www.tripadvisor.com/Restaurant_Review-g46539-d1942025-Reviews-Three_Guys_from_Italy-Kenilworth_New_Jersey.html" },
  restaurantji: { score: 3.6, count: 141, url: "https://www.restaurantji.com/nj/kenilworth/three-guys-from-italy-/" },
  yelp: { score: 3.5, count: 107, url: "https://www.yelp.com/biz/three-guys-from-italy-kenilworth" },
};
