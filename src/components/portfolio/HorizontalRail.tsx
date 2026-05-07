import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface RailProps {
  items: ReactNode[];
  itemWidthClass: string; // e.g. "w-[260px]" or "w-[360px]"
  aspectClass: string; // e.g. "aspect-[9/16]"
}

export function HorizontalRail({ items, itemWidthClass, aspectClass }: RailProps) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };
  return (
    <div className="relative">
      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((node, idx) => (
          <div
            key={idx}
            className={cn(
              "relative shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card shadow-glow",
              itemWidthClass,
              aspectClass,
            )}
          >
            {node}
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll(-1)}
        aria-label="Scroll left"
        className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-foreground backdrop-blur transition hover:bg-primary hover:text-primary-foreground sm:block"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => scroll(1)}
        aria-label="Scroll right"
        className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-foreground backdrop-blur transition hover:bg-primary hover:text-primary-foreground sm:block"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
