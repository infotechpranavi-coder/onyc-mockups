import { createFileRoute } from "@tanstack/react-router";

import { Home1Page } from "@/components/home/Home1Page";

export const Route = createFileRoute("/home1")({
  head: () => ({
    meta: [
      { title: "ONYC | Home 1 — Bold & Colorful" },
      { name: "description", content: "ONYC Home 1 mockup — bold, colorful kids footwear homepage." },
    ],
  }),
  component: Home1Page,
});
