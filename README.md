# Three Guys From Italy — Kenilworth NJ

Premium demo site for Three Guys From Italy at 19 N 20th St, Kenilworth, NJ 07033 · (908) 272-2553.

Family-run Southern Italian restaurant — three brothers from Bari opened in 1982. Cash only · BYOB.

## Stack

- **Vite 6** + **React 18** + **TypeScript** + **Tailwind v4**
- 12 single-purpose components (Hero, Nav, About, Menu, Gallery, Reviews, Location, ServiceArea, Highlights, FAQ, StickyBar, Footer)
- All copy + data isolated in `src/data/*.ts` so swaps are one-file changes
- Schema.org JSON-LD: Restaurant + LocalBusiness + FoodEstablishment + Place + Menu + FAQPage + WebSite
- Hand-tuned local SEO: 12 service-area towns, 8 FAQs, geo-meta, OG/Twitter cards
- Italian flag accent stripe in nav + footer; wine/cream/gold palette tuned for old-school trattoria

## Research provenance

All location facts, hours, dishes, and reviewer quotes verified 2026-04-29 against:
- Tripadvisor (40 reviews, 4.0★, address + dishes confirmed)
- Restaurantji (141 reviews, 3.6★, hours + popular dishes confirmed)
- Yelp (107 reviews, 38 photos)
- Foursquare (legacy listing)

## What needs the owner's input

1. **Real photography** — The gallery currently uses curated Unsplash images that match the restaurant's actual style. Drop real photos into `src/assets/brand/` and update `src/data/gallery.ts` to swap the Unsplash URLs for local imports.
2. **Pricing** — Menu items list without prices since we don't have a verified sheet. Add prices to `src/data/menu.ts` if available.
3. **Custom domain** — Currently set to `threeguysfromitaly-kenilworth.com` in canonical/OG/Schema. Update `src/data/location.ts` with the production domain.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to ./dist
npm run preview  # serves ./dist
```

## Edit map

- **Location, phone, hours, address** → `src/data/location.ts` + `src/data/hours.ts`
- **Menu items** → `src/data/menu.ts`
- **Reviews + ratings** → `src/data/reviews.ts`
- **Service-area towns + FAQs + keywords** → `src/data/seo.ts`
- **Photos** → `src/data/gallery.ts` (URLs) and/or drop files in `src/assets/brand/`
- **Page-level SEO meta + JSON-LD** → `index.html` head

## License

Built by Jorge Ramirez Group / AI Sales Pipeline as a free preview for the restaurant.
