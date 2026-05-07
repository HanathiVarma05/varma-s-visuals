import { useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideshowProps {
  slides: ReactNode[];
  aspect?: "video" | "square" | "poster";
  className?: string;
  label?: string;
}

export function Slideshow({ slides, aspect = "video", className, label }: SlideshowProps) {
  const [i, setI] = useState(0);
  const total = slides.length;
  const prev = () => setI((p) => (p - 1 + total) % total);
  const next = () => setI((p) => (p + 1) % total);

  const aspectClass =
    aspect === "video" ? "aspect-video" : aspect === "poster" ? "aspect-[2/3]" : "aspect-square";

  return (
    <div className={cn("relative w-full", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border bg-card shadow-glow",
          aspectClass,
        )}
      >
        {slides.map((s, idx) => (
          <div
            key={idx}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              idx === i ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
          >
            {s}
          </div>
        ))}

        <button
          aria-label="Previous slide"
          onClick={prev}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-background/70 text-foreground backdrop-blur transition hover:bg-primary hover:text-primary-foreground sm:h-12 sm:w-12"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Next slide"
          onClick={next}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-background/70 text-foreground backdrop-blur transition hover:bg-primary hover:text-primary-foreground sm:h-12 sm:w-12"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="pointer-events-none absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={cn(
                "h-1.5 rounded-full transition-all",
                idx === i ? "w-6 bg-primary" : "w-1.5 bg-foreground/40",
              )}
            />
          ))}
        </div>
      </div>
      {label && (
        <p className="mt-3 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {label} — {i + 1} / {total}
        </p>
      )}
    </div>
  );
}
