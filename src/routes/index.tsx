import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Clock,
  Dumbbell,
  Facebook,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  Quote,
  X,
} from "lucide-react";

import heroImg from "@/assets/hero-gym.jpg";
import facilityImg from "@/assets/facility.jpg";
import tanningImg from "@/assets/tanning.jpg";
import { Reveal } from "@/components/site/Reveal";
import { business, nav, reels, stats, training } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ultimate Fitness And Tanning | 24/7 Gym in Chandler, TX" },
      {
        name: "description",
        content:
          "Chandler, Texas' largest locally owned 24-hour gym and tanning facility. Strength, bodybuilding, athletic performance and personal training at the lowest prices.",
      },
      {
        property: "og:title",
        content: "Ultimate Fitness And Tanning | 24/7 Gym in Chandler, TX",
      },
      {
        property: "og:description",
        content:
          "Largest facility, lowest prices, open 24 hours. Locally owned gym and tanning in Chandler, Texas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

/* ---------------------------------- nav ---------------------------------- */

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-ember">
            <Dumbbell className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="min-w-0 leading-none">
            <span className="display block truncate text-lg tracking-wide sm:text-xl">
              Ultimate Fitness
            </span>
            <span className="block text-[0.6rem] tracking-[0.34em] text-muted-foreground uppercase">
              And Tanning
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-2 rounded-sm bg-ember px-5 py-3 text-xs font-bold tracking-[0.18em] text-primary-foreground uppercase transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="animate-fade-in border-t border-border bg-background/95 px-5 pb-6 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="display border-b border-border py-4 text-2xl text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={business.phoneHref}
            className="mt-5 flex items-center justify-center gap-2 rounded-sm bg-ember px-5 py-4 text-sm font-bold tracking-[0.18em] text-primary-foreground uppercase"
          >
            <Phone className="h-4 w-4" />
            {business.phone}
          </a>
        </div>
      )}
    </header>
  );
}

/* ---------------------------------- hero --------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={heroImg}
        alt="Loaded barbell in the Ultimate Fitness And Tanning weight room"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_20%,transparent_0%,var(--background)_78%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/70" />
      <div className="grid-lines absolute inset-0 opacity-40" />
      <div className="ember-pulse pointer-events-none absolute -top-24 right-[-10%] h-[38rem] w-[38rem] rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pt-32 pb-14 lg:px-8 lg:pb-20">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 backdrop-blur">
            <span className="ember-pulse h-2 w-2 rounded-full bg-primary" />
            <span className="text-[0.65rem] font-semibold tracking-[0.28em] text-foreground uppercase">
              Open 24 Hours · Chandler, Texas
            </span>
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="display mt-7 text-[clamp(3rem,13vw,9.5rem)]">
            <span className="block">Train Like It</span>
            <span className="text-ember block">Actually Matters</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              The largest locally owned gym and tanning facility in Chandler — built
              for bodybuilders, powerlifters, competitors, athletes and everyone who
              just wants to get better. Lowest prices in town. Doors never close.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={business.phoneHref}
                className="glow inline-flex items-center justify-center gap-2 rounded-sm bg-ember px-8 py-5 text-sm font-bold tracking-[0.2em] text-primary-foreground uppercase transition-transform hover:scale-[1.03]"
              >
                Start Training
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#facility"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-8 py-5 text-sm font-bold tracking-[0.2em] text-foreground uppercase transition-colors hover:bg-surface"
              >
                See The Facility
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- marquee -------------------------------- */

function Marquee() {
  const items = [
    "24/7 Access",
    "Powerlifting",
    "Bodybuilding",
    "Tanning",
    "Personal Training",
    "In-Person Classes",
    "Locally Owned",
  ];
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-surface/40 py-5">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="display text-xl text-muted-foreground sm:text-2xl">
              {t}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------- facility ------------------------------- */

function Facility() {
  return (
    <section id="facility" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <span className="eyebrow">The Facility</span>
              <h2 className="display mt-5 text-[clamp(2.4rem,6vw,4.5rem)]">
                Big enough for
                <span className="text-ember"> everyone</span>. Priced for
                <span className="text-ember"> anyone</span>.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-7 max-w-xl leading-relaxed text-muted-foreground">
                Ultimate Fitness And Tanning is locally owned and run right here in
                Chandler. We built the largest floor in the area and kept the price
                the lowest — free weights, machines, platforms, cardio and tanning
                all under one roof, accessible any hour of the day or night.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Clock, t: "24-Hour Access", d: "Member entry any hour" },
                  { icon: MapPin, t: "Locally Owned", d: "Chandler people, Chandler gym" },
                  { icon: Dumbbell, t: "Largest Floor", d: "No waiting on equipment" },
                  { icon: Play, t: "In-Person Classes", d: "Coached, on the schedule" },
                ].map((f) => (
                  <div key={f.t} className="panel rounded-sm p-5">
                    <f.icon className="h-5 w-5 text-primary" />
                    <p className="mt-4 text-sm font-bold tracking-[0.12em] uppercase">
                      {f.t}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div className="relative overflow-hidden rounded-sm border border-border">
              <img
                src={facilityImg}
                alt="The main weight floor at Ultimate Fitness And Tanning"
                loading="lazy"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="glow relative -mt-16 ml-auto w-40 overflow-hidden rounded-sm border border-border sm:w-56 lg:-mr-8">
              <img
                src={tanningImg}
                alt="Tanning room at Ultimate Fitness And Tanning"
                loading="lazy"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- training ------------------------------- */

function Training() {
  return (
    <section id="training" className="relative border-t border-border py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <span className="eyebrow">Training</span>
          <h2 className="display mt-5 max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)]">
            Whatever you came here to build
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {training.map((t, i) => (
            <Reveal key={t.title} delay={i * 60}>
              <article className="group relative h-full bg-background p-8 transition-colors duration-500 hover:bg-surface">
                <span className="display text-sm text-primary">{t.tag}</span>
                <h3 className="display mt-6 text-2xl sm:text-3xl">{t.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {t.copy}
                </p>
                <span className="mt-8 block h-px w-0 bg-ember transition-all duration-500 group-hover:w-full" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- why ---------------------------------- */

function Why() {
  return (
    <section
      id="why"
      className="relative overflow-hidden border-t border-border py-24 lg:py-36"
    >
      <div className="ember-pulse pointer-events-none absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-primary/15 blur-[150px]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-end">
          <Reveal>
            <span className="eyebrow">Why Ultimate Fitness</span>
            <h2 className="display mt-5 text-[clamp(2.4rem,6vw,4.5rem)]">
              The numbers
              <span className="text-ember"> speak</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="leading-relaxed text-muted-foreground lg:pb-3">
              From first-time members to state champions, this is where Chandler
              trains. No corporate contracts, no crowded waiting lists — just the
              biggest room, the best hours and a community that shows up.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="h-full bg-background p-8 lg:p-10">
                <p className="display text-ember text-[clamp(3rem,7vw,4.5rem)]">
                  {s.value}
                </p>
                <p className="mt-3 text-sm tracking-[0.14em] text-muted-foreground uppercase">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- reels -------------------------------- */

function Reels() {
  return (
    <section id="reels" className="relative border-t border-border py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <Reveal>
            <span className="eyebrow">From The Floor</span>
            <h2 className="display mt-5 text-[clamp(2.4rem,6vw,4.5rem)]">
              Facebook Reels
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <a
              href={business.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary uppercase"
            >
              Follow us <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reels.map((reel, i) => (
            <Reveal key={reel.url} delay={i * 80}>
              <a
                href={reel.url}
                target="_blank"
                rel="noreferrer"
                className="panel group relative flex aspect-[9/16] w-full overflow-hidden rounded-sm"
                aria-label={`Watch Facebook reel: ${reel.title}`}
              >
                <img
                  src={reel.image}
                  alt={reel.alt}
                  loading="lazy"
                  width={400}
                  height={711}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <span className="ember-pulse absolute inset-x-8 bottom-0 h-32 rounded-full bg-primary/15 blur-3xl" />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full border border-primary/50 bg-background/40 text-primary backdrop-blur transition-transform duration-500 group-hover:scale-110">
                    <Play className="h-6 w-6" />
                  </span>
                </span>
                <span className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.2em] text-primary uppercase">
                    <Facebook className="h-3.5 w-3.5" />
                    Watch on Facebook
                  </span>
                  <span className="mt-2 block line-clamp-2 text-sm font-medium leading-snug text-foreground">
                    {reel.title}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ testimonials ----------------------------- */

function Reviews() {
  const slots = [1, 2, 3];
  return (
    <section id="reviews" className="relative border-t border-border py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <span className="eyebrow">Social Proof</span>
          <h2 className="display mt-5 max-w-2xl text-[clamp(2.4rem,6vw,4.5rem)]">
            What members say
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {slots.map((n, i) => (
            <Reveal key={n} delay={i * 80}>
              <figure
                data-review-slot={n}
                className="panel flex h-full flex-col rounded-sm p-8"
              >
                <Quote className="h-7 w-7 text-primary" />
                <blockquote className="mt-6 flex-1 leading-relaxed text-muted-foreground">
                  Real member review {n} goes here — add a verified quote from
                  Facebook or Google.
                </blockquote>
                <figcaption className="mt-8 border-t border-border pt-5 text-sm font-bold tracking-[0.14em] uppercase">
                  Member name
                  <span className="mt-1 block text-xs font-medium tracking-[0.2em] text-muted-foreground">
                    Chandler, TX
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- CTA ---------------------------------- */

function FinalCta() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-border py-28 lg:py-40"
    >
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      <div className="ember-pulse pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[150px]" />

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <span className="eyebrow">Ready when you are</span>
          <h2 className="display mt-6 text-[clamp(2.8rem,9vw,6.5rem)]">
            Start Your
            <span className="text-ember block">Fitness Journey</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-7 max-w-xl leading-relaxed text-muted-foreground">
            Walk in, call, or message us on Facebook. Memberships start today and the
            doors are open 24 hours.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={business.phoneHref}
              className="glow inline-flex items-center justify-center gap-2 rounded-sm bg-ember px-8 py-5 text-sm font-bold tracking-[0.2em] text-primary-foreground uppercase transition-transform hover:scale-[1.03]"
            >
              <Phone className="h-4 w-4" />
              {business.phone}
            </a>
            <a
              href={`mailto:${business.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-8 py-5 text-sm font-bold tracking-[0.2em] text-foreground uppercase transition-colors hover:bg-surface"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- footer -------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-ember">
                <Dumbbell className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="display text-xl">Ultimate Fitness And Tanning</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Locally owned 24-hour gym and tanning facility in Chandler, Texas.
              Largest facility, lowest prices.
            </p>
            <a
              href={business.facebook}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-sm border border-border px-4 py-3 text-xs font-bold tracking-[0.18em] uppercase transition-colors hover:bg-surface"
            >
              <Facebook className="h-4 w-4 text-primary" />
              Facebook
            </a>
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-3 transition-colors hover:text-foreground"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {business.address}
                </a>
              </li>
              <li>
                <a
                  href={business.phoneHref}
                  className="flex gap-3 transition-colors hover:text-foreground"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex min-w-0 gap-3 transition-colors hover:text-foreground"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="break-all">{business.email}</span>
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Open 24 hours, 7 days a week
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Explore</p>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-xs tracking-[0.14em] text-muted-foreground uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ultimate Fitness And Tanning</p>
          <p>Chandler, Texas · Open 24/7</p>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Marquee />
      <Facility />
      <Training />
      <Why />
      <Reels />
      <Reviews />
      <FinalCta />
      <Footer />
    </main>
  );
}
