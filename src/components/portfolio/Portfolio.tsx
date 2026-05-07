import { useEffect, useState } from "react";
import { Menu, X, Play, ArrowRight, Instagram, Mail, Sparkles, Film, Image as ImageIcon } from "lucide-react";
import portrait from "@/assets/about-portrait.jpg";
import { Slideshow } from "./Slideshow";
import {
  youtubeIds,
  vimeoShortsIds,
  posterImages,
  thumbnailImages,
} from "./data";

const INSTAGRAM_URL = "https://www.instagram.com/vibe_vault_.0?igsh=ZmFkdXd1ZmNkemN3";
const EMAIL = "statussnow22@gmail.com";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  
  { label: "Contact", href: "#contact" },
];

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all ${
          scrolled
            ? "border-b border-border/60 bg-background/80 backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg">
              V
            </span>
            <span className="font-display text-xl">Varma</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground transition hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 md:inline-flex"
          >
            Work With Me
          </a>
          <button
            className="md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((p) => !p)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <nav className="flex flex-col gap-1 px-5 py-4">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
              >
                Work With Me
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative overflow-hidden bg-hero-glow grain pt-32 pb-20 sm:pt-40 sm:pb-28"
      >
        <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-8">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Video Editor · Graphic Designer
          </div>
          <h1 className="font-display text-5xl leading-[1.05] sm:text-7xl md:text-8xl">
            I Turn Raw Clips Into{" "}
            <span className="italic text-primary">Scroll-Stopping</span> Content
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            I help content creators get more views and engagement through clean, creative
            video edits and eye-catching visuals.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Work With Me <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:bg-card"
            >
              <Play className="h-4 w-4 text-primary" /> See My Work
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/20 blur-2xl" />
            <img
              src={portrait}
              alt="Varma — video editor and graphic designer"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full rounded-3xl border border-border object-cover"
            />
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">About Me</p>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Creator-first edits, designed to keep eyes on the screen.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Hey, I'm <span className="text-foreground">Varma</span>, a video editor and
                graphic designer focused on helping content creators grow.
              </p>
              <p>
                I specialize in fast-paced edits, strong visuals, and content that keeps
                viewers watching.
              </p>
              <p>
                What makes me different is my creator-first mindset — I edit with trends,
                retention, and views in mind, not just aesthetics.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: "100+", v: "Edits Delivered" },
                { k: "10M+", v: "Views Generated" },
                { k: "24h", v: "Avg Turnaround" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-2xl border border-border bg-card p-4 text-center"
                >
                  <div className="font-display text-2xl text-primary">{s.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work / Portfolio */}
      <section id="work" className="bg-card/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">Selected Work</p>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              A reel of recent edits & designs
            </h2>
            <p className="mt-4 text-muted-foreground">
              Here's a selection of my work, showcasing recent edits and designs crafted to
              boost engagement and retention.
            </p>
          </div>

          {/* 1. Shorts & Reels */}
          <div className="mt-16">
            <CategoryHeader
              icon={<Film className="h-4 w-4" />}
              eyebrow="01 — Shorts & Reels"
              title="Turning Raw Clips Into Scroll-Stopping Content"
            />
            <div className="mx-auto mt-8 max-w-sm">
              <Slideshow
                aspect="poster"
                label="Reels"
                slides={vimeoShortsIds.map((id) => (
                  <iframe
                    key={id}
                    src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`}
                    className="absolute inset-0 h-full w-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={`Reel ${id}`}
                  />
                ))}
              />
            </div>
          </div>

          {/* 2. YouTube Videos */}
          <div className="mt-20">
            <CategoryHeader
              icon={<Play className="h-4 w-4" />}
              eyebrow="02 — Long-Form Edits"
              title="YouTube videos crafted for retention"
            />
            <div className="mx-auto mt-8 max-w-5xl">
              <Slideshow
                aspect="video"
                label="YouTube"
                slides={youtubeIds.map((id) => (
                  <iframe
                    key={id}
                    src={`https://www.youtube.com/embed/${id}`}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`YouTube ${id}`}
                  />
                ))}
              />
            </div>
          </div>

          {/* 3. Posters */}
          <div className="mt-20">
            <CategoryHeader
              icon={<ImageIcon className="h-4 w-4" />}
              eyebrow="03 — Posters"
              title="Vertical posters that command attention"
            />
            <div className="mx-auto mt-8 max-w-sm">
              <Slideshow
                aspect="poster"
                label="Posters"
                slides={posterImages.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Poster design ${i + 1}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ))}
              />
            </div>
          </div>

          {/* 4. Thumbnails */}
          <div className="mt-20">
            <CategoryHeader
              icon={<ImageIcon className="h-4 w-4" />}
              eyebrow="04 — Thumbnails"
              title="Click-worthy thumbnails built for CTR"
            />
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
              Custom thumbnails designed to maximize click-through rates and grab attention.
            </p>
            <div className="mx-auto mt-8 max-w-5xl">
              <Slideshow
                aspect="video"
                label="Thumbnails"
                slides={thumbnailImages.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Thumbnail design ${i + 1}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ))}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">Testimonials</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Trusted by creators who care about results
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real words from real creators I've helped grow their audience and engagement.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-xl">
          <Slideshow
            aspect="square"
            label="Testimonials"
            slides={testimonials.map((t, i) => (
              <div
                key={i}
                className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8 text-center sm:p-12"
              >
                <Quote className="h-10 w-10 text-primary" />
                <p className="font-display text-xl leading-snug sm:text-2xl">
                  "{t.quote}"
                </p>
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          />
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative overflow-hidden bg-hero-glow grain py-24 sm:py-32"
      >
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">Let's Talk</p>
          <h2 className="font-display text-4xl leading-tight sm:text-6xl">
            Ready to make content that <span className="italic text-primary">stops the scroll?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Whether you need edits, thumbnails, or a full content workflow — I'd love to hear
            about your project.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              <Mail className="h-4 w-4" /> Work With Me
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:bg-card"
            >
              <Instagram className="h-4 w-4 text-primary" /> @vibe_vault_.0
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            or email{" "}
            <a href={`mailto:${EMAIL}`} className="text-foreground underline underline-offset-4">
              {EMAIL}
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground font-display">
              V
            </span>
            <span className="font-display text-lg">Varma</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Varma. Crafted with care.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CategoryHeader({
  icon,
  eyebrow,
  title,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-primary backdrop-blur">
        {icon}
        {eyebrow}
      </div>
      <h3 className="mt-4 font-display text-2xl sm:text-3xl">{title}</h3>
    </div>
  );
}
