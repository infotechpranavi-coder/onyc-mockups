import { createFileRoute } from "@tanstack/react-router";

import { Home4Page } from "@/components/home/Home4Page";

export const Route = createFileRoute("/home4")({
  head: () => ({
    meta: [
      { title: "ONYC | Home 4 — Playful Premium" },
      {
        name: "description",
        content: "ONYC Home 4 mockup — Home 1 layout with playful premium blush backgrounds and kids patterns.",
      },
    ],
  }),
  component: Home4Page,
});
