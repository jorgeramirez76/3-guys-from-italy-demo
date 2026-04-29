import { ADDRESS_ONE_LINE, DIRECTIONS_URL, LOCATION, SOCIALS } from "../data/location";
import { HOURS_ONE_LINE } from "../data/hours";
import logoPng from "../assets/brand/logo.png";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-[var(--color-char)] pb-12 pt-14 text-cream md:pt-16">
      {/* Italian tricolor — 3px accent stripe at very top */}
      <div className="absolute inset-x-0 top-0 tricolor opacity-90" aria-hidden="true" />

      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <img src={logoPng} alt="Three Guys From Italy logo" className="h-14 w-auto" width={70} height={58} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/75">
              Old-school Southern Italian — hand-rolled pasta, slow-cooked sauces,
              the recipes three brothers brought from Bari in 1982. Cash only. BYOB.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href={SOCIALS.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-[var(--color-gold-bright)] hover:bg-white/5 hover:text-[var(--color-gold-bright)]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H8v-2.89h2.44V9.8c0-2.4 1.43-3.73 3.62-3.73 1.05 0 2.14.19 2.14.19v2.36h-1.2c-1.19 0-1.56.74-1.56 1.5v1.8h2.65l-.42 2.89h-2.23v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-gold-bright)]">
              Kenilworth
            </p>
            <address className="mt-3 not-italic text-sm leading-relaxed text-cream/85">
              {ADDRESS_ONE_LINE}
              <br />
              <a href={`tel:${LOCATION.phoneTel}`} className="text-white hover:text-[var(--color-gold-bright)]">
                {LOCATION.phone}
              </a>
            </address>
            <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-semibold text-[var(--color-gold-bright)] hover:underline">
              Get directions →
            </a>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-gold-bright)]">
              Hours
            </p>
            <p className="mt-3 text-sm text-cream/85">{HOURS_ONE_LINE}</p>
            <p className="mt-2 text-xs text-cream/65">CASH ONLY · BYOB</p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-gold-bright)]">
              Jump to
            </p>
            <ul className="mt-3 space-y-2 text-sm text-cream/85">
              <li><a href="#menu" className="hover:text-white">Menu</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
              <li><a href="#location" className="hover:text-white">Location</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs leading-relaxed text-cream/55">
          <p>
            © {year} Three Guys From Italy — Kenilworth NJ. Family-run since 1982.
            Menu items, hours, and availability are subject to change.
          </p>
        </div>
      </div>
    </footer>
  );
}
