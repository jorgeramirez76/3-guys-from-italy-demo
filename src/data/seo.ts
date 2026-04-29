/**
 * SEO + local-search content. Editing this file should be the only place
 * required to update what appears in the page copy AND the Schema.org
 * structured data, so they never drift apart.
 */

/** Towns inside ~5 miles of 19 N 20th St, Kenilworth NJ.
 *  Used in: visible service-area band + Schema.org `areaServed`. */
export const SERVICE_AREAS = [
  "Kenilworth",
  "Cranford",
  "Roselle Park",
  "Roselle",
  "Westfield",
  "Garwood",
  "Union",
  "Springfield",
  "Mountainside",
  "Clark",
  "Linden",
  "Elizabeth",
] as const;

/** Cuisine + topical keywords used in copy AND `knowsAbout` schema. */
export const KEYWORDS = [
  "Italian restaurant Kenilworth NJ",
  "BYOB Italian Kenilworth",
  "Southern Italian Union County",
  "best braciole NJ",
  "homemade pasta Kenilworth",
  "old-school Italian trattoria",
  "Italian dinner near Cranford",
  "pasta fagioli Kenilworth",
  "cavatelli broccoli Union County",
  "chicken parmigiana Kenilworth",
  "veal parmigiana NJ",
  "BYOB cash-only Italian",
  "family-run Italian since 1982",
  "Sea Bass Livornese NJ",
] as const;

/** FAQs surfaced visibly + injected as FAQPage schema. */
export const FAQS = [
  {
    q: "Where is Three Guys From Italy?",
    a: "We're at 19 N 20th St, Kenilworth, NJ 07033 — a residential block off Boulevard, three minutes from the Garden State Parkway exit 138 and seven minutes from downtown Cranford. Call (908) 272-2553.",
  },
  {
    q: "What are your hours?",
    a: "Monday through Saturday 11:00 AM to 9:00 PM, Sunday 2:00 PM to 8:30 PM. Open for lunch, dinner, and takeout. Closed major holidays — call ahead during the holiday weeks.",
  },
  {
    q: "Are you BYOB?",
    a: "Yes. Bring whatever wine pairs with the menu — we're a BYOB establishment with no corkage fee. Most regulars walk in with a Chianti or a Barolo.",
  },
  {
    q: "Do you take credit cards?",
    a: "Cash only — please plan accordingly. There's an ATM on-site if you forget. We accept reservations by phone for parties of 4 or more.",
  },
  {
    q: "What's the dining room actually like?",
    a: "Small, quiet, intimate. Most first-timers walk in expecting a pizzeria — the slice counter is at the front — but the real Italian dining room sits behind it. Cozy old-school trattoria, mostly local regulars, family-run since 1982 by three brothers from Bari, Italy.",
  },
  {
    q: "What should I order?",
    a: "Most reviewers name three dishes first: the braciole in slow-cooked red sauce, the cavatelli with broccoli, and the pasta fagioli (often called the best in Union County). Other quiet legends: the potato croquettes, the Sea Bass Livornese, and the tortoni for dessert.",
  },
  {
    q: "Do you take takeout and delivery?",
    a: "Yes for takeout — call (908) 272-2553 and we'll have it ready when you arrive. Delivery isn't currently in-house; you can use third-party apps for the pizzeria menu but the full Italian kitchen is best ordered for pickup or dine-in.",
  },
  {
    q: "Can you accommodate large parties?",
    a: "We can seat parties up to ~12 with notice. Call ahead — we're a small dining room and reservations help us set the room up properly.",
  },
] as const;

/** Display-friendly comma-separated string of service areas. */
export const SERVICE_AREAS_LINE = SERVICE_AREAS.join(" · ");
