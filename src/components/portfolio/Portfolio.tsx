import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Play,
  ArrowRight,
  Instagram,
  Mail,
  Sparkles,
  TrendingUp,
  Eye,
  ArrowDown,
} from "lucide-react";
import { HorizontalRail } from "./HorizontalRail";
import {
  youtubeIds,
  vimeoShortsIds,
  posterImages,
  thumbnailImages,
} from "./data";

const INSTAGRAM_URL = "https://www.instagram.com/vibe_vault_.0?igsh=ZmFkdXd1ZmNkemN3";
const EMAIL = "statussnow22@gmail.com";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#work" },
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
          <a href="#top" className="font-display text-2xl text-primary">
            Varma
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
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90 md:inline-flex"
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
                className="mt-2 rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground"
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
        className="relative overflow-hidden bg-hero-glow bg-grid pt-40 pb-24 sm:pt-48 sm:pb-32"
      >
        <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-8">
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium text-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Video Editor &amp; Graphic Designer
          </div>
          <h1 className="font-display text-5xl leading-[1.05] sm:text-7xl md:text-[88px]">
            I Turn Raw Clips Into
            <br />
            <span className="text-primary">Scroll-Stopping</span> Content
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            I help content creators get more views and engagement through clean, creative
            video edits and eye-catching visuals.
          </p>
          <ArrowDown className="mx-auto mt-8 h-5 w-5 animate-bounce text-primary" />
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
            >
              Work With Me
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-card"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          {/* V card */}
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/30 blur-3xl" />
            <div className="relative grid aspect-[5/4] place-items-center overflow-hidden rounded-3xl border border-border bg-card shadow-glow">
              <div className="bg-grid absolute inset-0 opacity-60" />
              <div className="relative flex flex-col items-center gap-4">
                <div className="grid h-40 w-40 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow">
                  <span className="font-display text-7xl">V</span>
                </div>
                <span className="text-sm text-muted-foreground">Varma</span>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              About Me
            </p>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Hey, I&apos;m <span className="text-primary">Varma</span>
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                A video editor and graphic designer focused on helping content creators
                grow.
              </p>
              <p>
                I specialize in fast-paced edits, strong visuals, and content that keeps
                viewers watching.
              </p>
              <p>
                What makes me different is my{" "}
                <span className="font-semibold text-foreground">creator-first mindset</span>{" "}
                — I edit with trends, retention, and views in mind, not just aesthetics.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <FeatureCard
                icon={<Sparkles className="h-5 w-5" />}
                title="Creative Vision"
                desc="Unique style that stands out"
              />
              <FeatureCard
                icon={<TrendingUp className="h-5 w-5" />}
                title="Trend-Aware"
                desc="Always ahead of the curve"
              />
              <FeatureCard
                icon={<Eye className="h-5 w-5" />}
                title="Retention Focus"
                desc="Edits that keep viewers hooked"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="bg-card/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Portfolio
            </p>
            <h2 className="font-display text-4xl leading-tight sm:text-6xl">
              My <span className="text-primary">Creative Work</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A showcase of my recent projects spanning video editing and graphic design
            </p>
          </div>

          {/* 1. Shorts & Reels */}
          <CategoryBlock
            title="Shorts & Reels"
            subtitle="Turning Raw Clips Into Scroll-Stopping Content"
          >
            <HorizontalRail
              itemWidthClass="w-[220px] sm:w-[260px]"
              aspectClass="aspect-[9/16]"
              items={vimeoShortsIds.map((id) => (
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
          </CategoryBlock>

          {/* 2. YouTube Videos */}
          <CategoryBlock
            title="YouTube Videos"
            subtitle="Here's a selection of my work, showcasing my recent edits and designs creativity to boost engagement, retention"
          >
            <HorizontalRail
              itemWidthClass="w-[320px] sm:w-[480px]"
              aspectClass="aspect-video"
              items={youtubeIds.map((id) => (
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
          </CategoryBlock>

          {/* 3. Posters */}
          <CategoryBlock
            title="Posters"
            subtitle="Custom posters designed to maximize click-through rates and grab attention"
          >
            <HorizontalRail
              itemWidthClass="w-[220px] sm:w-[260px]"
              aspectClass="aspect-[2/3]"
              items={posterImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Poster design ${i + 1}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ))}
            />
          </CategoryBlock>

          {/* 4. Thumbnails */}
          <CategoryBlock
            title="Thumbnails"
            subtitle="Eye-catching thumbnails designed to drive clicks and views"
          >
            <HorizontalRail
              itemWidthClass="w-[320px] sm:w-[420px]"
              aspectClass="aspect-video"
              items={thumbnailImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Thumbnail design ${i + 1}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ))}
            />
          </CategoryBlock>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative overflow-hidden bg-hero-glow bg-grid py-24 sm:py-32"
      >
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Let&apos;s Create Something{" "}
            <span className="text-primary">Amazing Together</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Ready to take your content to the next level? I&apos;d love to hear about your
            project and see how we can work together.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
            >
              Work With Me <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-card"
            >
              <Instagram className="h-4 w-4 text-primary" /> Follow on Instagram
            </a>
          </div>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            Email me at <span className="text-foreground underline underline-offset-4">{EMAIL}</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
          <span className="font-display text-xl text-primary">Varma</span>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Varma. All rights reserved.
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

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 text-center transition hover:border-primary/60">
      <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary">
        {icon}
      </div>
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
    </div>
  );
}

function CategoryBlock({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-16">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="font-display text-3xl sm:text-4xl">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <a
          href="#contact"
          className="inline-flex w-fit items-center gap-1 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary"
        >
          View All <Play className="h-3 w-3" />
        </a>
      </div>
      {children}
    </div>
  );
}
