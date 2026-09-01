import { createFileRoute, notFound } from "@tanstack/react-router";

import { ProductDetailPage } from "@/components/shop/ProductDetailPage";
import { getProductBySlug } from "@/lib/home-data";

export const Route = createFileRoute("/shop/$slug")({
  head: ({ params }) => {
    const product = getProductBySlug(params.slug);
    return {
      meta: [
        { title: product ? `ONYC | ${product.name}` : "ONYC | Product" },
        { name: "description", content: product?.description ?? "ONYC kids footwear product detail." },
      ],
    };
  },
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  component: ProductDetailRoute,
});

function ProductDetailRoute() {
  const { product } = Route.useLoaderData();
  return <ProductDetailPage product={product} />;
}
