import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Varma — Video Editor & Graphic Designer" },
      {
        name: "description",
        content:
          "Varma turns raw clips into scroll-stopping content. Video editing, thumbnails and graphics built for retention and growth.",
      },
      { property: "og:title", content: "Varma — Scroll-Stopping Edits & Designs" },
      {
        property: "og:description",
        content:
          "Creator-first video editor and graphic designer. Edits, reels, thumbnails and posters built for views.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return <Portfolio />;
}
