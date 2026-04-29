import { SERVICE_AREAS } from "../data/seo";
import { DIRECTIONS_URL, LOCATION } from "../data/location";
import { PhoneIcon, PinIcon } from "./Icons";

/**
 * A small banded section that surfaces the towns we serve. Doubles as
 * local-SEO content (city names appear naturally in the body copy and
 * mirror the Schema.org `areaServed` list).
 */
export function ServiceArea() {
  return (
    <section
      aria-label="Service area"
      className="relative overflow-hidden bg-[var(--color-cream-darker)] py-14 md:py-20"
    >
      {/* Italian tricolor hairline */}
      <div className="absolute inset-x-0 top-0 tricolor opacity-90" aria-hidden="true" />

      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <span className="eyebrow inline-flex items-center gap-2">
            <PinIcon className="h-3.5 w-3.5" />
            Who we serve
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl">
            Kenilworth and the
            <span className="text-[var(--color-brand-red)]"> Union County neighborhood</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-soft)] md:text-lg">
            Three minutes from Garden State Parkway exit 138. Seven from downtown
            Cranford. Ten from Westfield. Regulars drive in from all over Union
            County for the cavatelli and the braciole — call ahead and we'll have
            your table ready.
          </p>
        </div>

        <ul
          className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2 md:gap-3"
          data-reveal
          style={{ ["--delay" as string]: "120ms" }}
        >
          {SERVICE_AREAS.map((town) => (
            <li
              key={town}
              className="rounded-full border border-[var(--color-ink)]/10 bg-white px-4 py-2 text-sm font-semibold text-[var(--color-ink-soft)] shadow-[var(--shadow-sm)]"
            >
              {town}
            </li>
          ))}
        </ul>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          data-reveal
        >
          <a href={`tel:${LOCATION.phoneTel}`} className="btn-primary w-full sm:w-auto">
            <PhoneIcon className="h-4 w-4" />
            Call {LOCATION.phone}
          </a>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-gold w-full sm:w-auto"
          >
            <PinIcon className="h-4 w-4" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
