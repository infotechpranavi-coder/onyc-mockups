import { createFileRoute } from "@tanstack/react-router";

import { Home5Page } from "@/components/home/Home5Page";

export const Route = createFileRoute("/home5")({
  head: () => ({
    meta: [
      { title: "ONYC | Home 5 — Joyful Creative" },
      {
        name: "description",
        content:
          "ONYC Home 5 mockup — Home 4 playful premium base with extra joyful creative accents across sections.",
      },
    ],
  }),
  component: Home5Page,
});
