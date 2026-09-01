import { createFileRoute } from "@tanstack/react-router";

import { Home3Page } from "@/components/home/Home3Page";

export const Route = createFileRoute("/home3")({
  head: () => ({
    meta: [
      { title: "ONYC | Home 3 — Dark & Editorial" },
      { name: "description", content: "ONYC Home 3 mockup — dark editorial kids footwear homepage." },
    ],
  }),
  component: Home3Page,
});
