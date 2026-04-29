import { LOCATION, DIRECTIONS_URL } from "../data/location";
import { HOURS_ONE_LINE } from "../data/hours";
import { HERO_IMAGE } from "../data/gallery";
import { PhoneIcon, MenuIcon, PinIcon, StarIcon } from "./Icons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-20 md:pt-28"
    >
      {/* Background — portrait on mobile, wide on md+; slow Ken-Burns for life */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <picture>
          <source media="(min-width: 768px)" srcSet={HERO_IMAGE.srcWide} />
          <img
            src={HERO_IMAGE.srcPortrait}
            alt={HERO_IMAGE.alt}
            className="ken-burns h-full w-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        {/* Strong bottom overlay so text stays legible over busy food background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,6,5,0.55) 0%, rgba(10,6,5,0.65) 40%, rgba(10,6,5,0.92) 95%)",
          }}
        />
        {/* Left-side darken on desktop so pizza stays visible on the right */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,6,5,0.88) 0%, rgba(10,6,5,0.55) 42%, rgba(10,6,5,0) 72%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container-x flex flex-1 flex-col justify-end pb-14 pt-8 md:justify-center md:pb-24 md:pt-24">
        <div className="max-w-3xl text-cream">
          <span className="hero-in hero-in-1 inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--color-gold-bright)]/60 bg-black/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-gold-bright)] backdrop-blur sm:tracking-[0.22em] md:text-xs">
            <StarIcon className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate sm:whitespace-normal">Family-run since 1982 · Three brothers from Bari</span>
          </span>

          <h1 className="hero-in hero-in-2 mt-5 text-[2.6rem] leading-[0.95] text-white sm:text-[3.25rem] md:text-[4.25rem] lg:text-[5.5rem] xl:text-[6.5rem]">
            Old-school Italian.
            <br />
            <span className="text-[var(--color-gold-bright)]">Hidden in Kenilworth.</span>
          </h1>

          <p className="hero-in hero-in-3 mt-5 max-w-xl text-base leading-relaxed text-cream/90 md:text-lg">
            Hand-rolled cavatelli. Slow-cooked braciole. Pasta fagioli the way it's
            supposed to taste. The dining room behind the pizza counter has been
            quietly serving Kenilworth since 1982.
          </p>

          {/* Hours + address strip */}
          <div className="hero-in hero-in-4 mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cream/85 md:text-sm">
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-gold-bright)] shadow-[0_0_10px_rgba(230,180,94,0.9)]" />
              {HOURS_ONE_LINE}
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-white/25 md:inline-block" />
            <span className="text-[var(--color-gold-bright)]">{LOCATION.street}, {LOCATION.city}</span>
          </div>

          <div className="hero-in hero-in-5 mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={`tel:${LOCATION.phoneTel}`}
              className="btn-primary w-full text-base sm:w-auto"
              aria-label={`Call ${LOCATION.shortName} at ${LOCATION.phone}`}
            >
              <PhoneIcon className="h-5 w-5" />
              Call {LOCATION.phone}
            </a>
            <a href="#menu" className="btn-gold w-full text-base sm:w-auto">
              <MenuIcon className="h-5 w-5" />
              See the Menu
            </a>
            <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className="btn-outline w-full text-base sm:w-auto">
              <PinIcon className="h-5 w-5" />
              Directions
            </a>
          </div>

          {/* House rules — surfaced up front */}
          <p className="hero-in hero-in-5 mt-5 text-xs text-cream/70 md:text-[13px]">
            <span className="text-[var(--color-gold-bright)] font-bold">CASH ONLY · BYOB.</span> Reservations welcome — call ahead for parties of 4+.
          </p>
        </div>
      </div>

      {/* Cream bleed into next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[var(--color-cream)] md:h-24"
      />
    </section>
  );
}
