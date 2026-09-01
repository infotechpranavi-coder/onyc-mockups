import { createFileRoute } from "@tanstack/react-router";

import { Home2Page } from "@/components/home/Home2Page";

export const Route = createFileRoute("/home2")({
  head: () => ({
    meta: [
      { title: "ONYC | Home 2 — Minimal & Clean" },
      { name: "description", content: "ONYC Home 2 mockup — minimal, clean kids footwear homepage." },
    ],
  }),
  component: Home2Page,
});
