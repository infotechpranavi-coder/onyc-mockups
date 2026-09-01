import { createFileRoute } from "@tanstack/react-router";

import { ShopPage } from "@/components/shop/ShopPage";

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title: "ONYC | Shop all pairs" },
      { name: "description", content: "Browse the full ONYC kids footwear collection." },
    ],
  }),
  component: ShopPage,
});
