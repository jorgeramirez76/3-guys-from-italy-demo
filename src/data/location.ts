/**
 * Verified facts about the Kenilworth location.
 *
 * Phone: (908) 272-2553 — confirmed across Yelp, Tripadvisor, Restaurantji,
 * Foursquare, MenuPix, and the 2026-04-24 mega-hunt phone-enrichment scrape.
 */
export const LOCATION = {
  name: "Three Guys From Italy",
  shortName: "Three Guys From Italy — Kenilworth",
  street: "19 N 20th St",
  city: "Kenilworth",
  state: "NJ",
  zip: "07033",
  phone: "908-272-2553",
  phoneTel: "+19082722553",
  // Approximate coords for 19 N 20th St, Kenilworth NJ 07033.
  lat: 40.6767,
  lng: -74.2916,
  googleMapsQuery: "19+N+20th+St,+Kenilworth,+NJ+07033",
  canonicalUrl: "https://threeguysfromitaly-kenilworth.com/",
  established: 1982,
  founders: "three brothers from Bari, Italy",
  yearsInBusiness: 2026 - 1982,
} as const;

export const ADDRESS_ONE_LINE = `${LOCATION.street}, ${LOCATION.city}, ${LOCATION.state} ${LOCATION.zip}`;

export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${LOCATION.street}, ${LOCATION.city}, ${LOCATION.state} ${LOCATION.zip}`,
)}`;

export const MAP_EMBED_URL = `https://www.google.com/maps?q=${LOCATION.googleMapsQuery}&output=embed`;

/** Socials. Facebook page is "ThreeguysfromITALY". */
export const SOCIALS = {
  facebook: "https://www.facebook.com/ThreeguysfromITALY/",
};

/** Cash only · BYOB — repeated across every review source.
 *  Surface this prominently so first-time visitors aren't surprised. */
export const HOUSE_RULES = {
  cashOnly: true,
  byob: true,
  reservationsAccepted: true,
  takeoutAvailable: true,
  deliveryAvailable: false,
} as const;
