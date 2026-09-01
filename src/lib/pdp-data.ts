import type { Product } from "@/lib/home-data";
import { lifestyleImages } from "@/lib/home-data";

export type ProductColor = {
  id: string;
  name: string;
  hex: string;
  image: string;
  available: boolean;
};
export type ProductSize = { label: string; available: boolean };
export type ProductReview = {
  id: string;
  author: string;
  title: string;
  body: string;
  rating: number;
};

export type EnrichedProduct = Product & {
  tagline: string;
  colors: ProductColor[];
  sizes: ProductSize[];
  stock: number;
  sku: string;
  reviewCount: number;
  additionalInfo: {
    countryOfOrigin: string;
    manufacturer: string;
    address: string;
  };
};

const colorMap: Record<string, string> = {
  mint: "#7EC8B8",
  white: "#F5F5F5",
  pink: "#F06292",
  cream: "#FFF4E6",
  coral: "#FF6B6B",
  citrus: "#FFB347",
  gum: "#98D8AA",
  yellow: "#FFD54F",
  lilac: "#CE93D8",
  peach: "#FFAB91",
  green: "#81C784",
  sand: "#D7CCC8",
  orange: "#FF9800",
  teal: "#26A69A",
  navy: "#1A237E",
  blush: "#F8BBD0",
  sky: "#4FC3F7",
  lemon: "#FFF176",
  grape: "#9575CD",
};

const bonusColors: Omit<ProductColor, "id" | "image">[] = [
  { name: "Coral", hex: "#FF6B6B", available: true },
  { name: "Sky Blue", hex: "#4FC3F7", available: true },
  { name: "Blush", hex: "#F8BBD0", available: false },
  { name: "Lemon", hex: "#FFF176", available: true },
  { name: "Grape", hex: "#9575CD", available: true },
  { name: "Sand", hex: "#D7CCC8", available: true },
];

function parseColors(colorLabel: string, product: Product): ProductColor[] {
  return colorLabel.split("/").map((part) => {
    const name = part.trim();
    const key = name.toLowerCase().split(" ")[0] ?? name.toLowerCase();
    return {
      id: `${product.slug}-${key}`,
      name,
      hex: colorMap[key] ?? "#CCCCCC",
      image: product.image,
      available: true,
    };
  });
}

export function getProductColorOptions(product: Product): ProductColor[] {
  if (product.colors?.length) {
    return product.colors.map((color) => ({
      id: `${product.slug}-${color.name.toLowerCase().replace(/\s+/g, "-")}`,
      name: color.name,
      hex: color.hex,
      image: product.image,
      available: true,
    }));
  }

  const base = parseColors(product.color, product);
  const hash = product.slug.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const extras = bonusColors
    .filter((color) => !base.some((item) => item.name.toLowerCase() === color.name.toLowerCase()))
    .filter((_, index) => index % 3 === hash % 3 || index % 2 === hash % 2)
    .slice(0, 2)
    .map((color) => ({
      ...color,
      id: `${product.slug}-${color.name.toLowerCase().replace(/\s+/g, "-")}`,
      image: product.image,
    }));

  return [...base, ...extras].slice(0, 5);
}

export const defaultAgeSizes: ProductSize[] = [
  { label: "12-18 Months", available: false },
  { label: "18-24 Months", available: false },
  { label: "2-2.5 Years", available: true },
  { label: "2.5-3 Years", available: false },
  { label: "3-3.5 Years", available: true },
  { label: "3.5-4 Years", available: true },
];

export const pdpFeatures = [
  { icon: "foot" as const, label: "Podiatrist-recommended" },
  { icon: "slip" as const, label: "Hassle-free wear" },
  { icon: "clean" as const, label: "Easy to clean" },
  { icon: "daily" as const, label: "Perfect for daily wear" },
];

export const bundleOffers = [
  {
    title: "Buy 2 Get 10% OFF",
    detail: "Stock up on quality footwear and still save money",
  },
  {
    title: "Buy 3 Get 15% OFF",
    detail: "Don't wait, grab before the offer slips away!",
  },
];

export const trustBadges = [
  { icon: "return" as const, label: "Hassle-free 7-day returns" },
  { icon: "trophy" as const, label: "Award-winning kids' footwear brand" },
  { icon: "cod" as const, label: "Cash on delivery (COD) available" },
];

export const deliveryPoints = [
  "Lightning-fast dispatch for all orders",
  "Eco-friendly packaging for a greener tomorrow",
  "Track your orders live anytime, anywhere",
  "Exclusive discounts with prepaid order",
];

export const refundPolicy = {
  prepaid:
    "Refunds are processed within 7 days after receiving the returned product and are credited to the original payment method without any deduction.",
  cod: "A refund link will be shared by ONYC to provide Bank/UPI details. Refunds are processed manually within 7 days after receiving the returned product.",
  note: "COD charges of ₹50 per order are non-refundable, as these are collected from customers at the time of placing the order.",
  condition:
    "Items must be returned in the same condition as received. Used or damaged items are not eligible for a refund.",
  exclusions: [
    "Products from BOGO or free-product deals are not eligible for returns.",
    "Used products cannot be returned to maintain hygiene standards.",
    "Once a product has been exchanged, it is not eligible for return. Please ensure the size, color, or item choice is correct before initiating the exchange.",
    "Exchanges can only be made once per product, unless the issue is due to a mistake on the brand's end (e.g., wrong item or defective product). Please double-check your selection before requesting an exchange.",
  ],
  contact: {
    whatsapp: "8273376777",
    instagram: "@onyc.in",
    hours: "Monday to Saturday, 10 AM – 7 PM",
  },
};

export const ratingDistribution = [
  { stars: 5, count: 133 },
  { stars: 4, count: 18 },
  { stars: 3, count: 6 },
  { stars: 2, count: 0 },
  { stars: 1, count: 0 },
];

export const customerReviews: ProductReview[] = [
  {
    id: "r1",
    author: "Aadu",
    title: "Great quality & looks",
    body: "Very nice, looks good. The design is cute and the quality is also really good.",
    rating: 5,
  },
  {
    id: "r2",
    author: "Priya",
    title: "Perfect for daily wear",
    body: "My son wears these every day. Easy to put on and they clean up well after muddy play.",
    rating: 5,
  },
  {
    id: "r3",
    author: "Meera",
    title: "Soft and lightweight",
    body: "Lightweight enough for toddlers and the grip is excellent on our tile floors.",
    rating: 4,
  },
];

export const reviewPhotos = [
  lifestyleImages.bunnyKids,
  lifestyleImages.donutKids,
  lifestyleImages.gatorKids,
  lifestyleImages.heroGirl,
];

export const reviewSortOptions = [
  "Most recent",
  "Highest rating",
  "Lowest rating",
  "Only pictures",
  "Pictures first",
  "Videos first",
  "Most helpful",
] as const;

export type StockUrgency = {
  level: "critical" | "low" | "normal";
  message: string;
  barPercent: number;
};

/** Amazon-style urgency copy — no large stock counts. */
export function getStockUrgency(slug: string): StockUrgency {
  const hash = slug.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const bucket = hash % 3;

  if (bucket === 0) {
    return {
      level: "critical",
      message: "Only a few left — order soon!",
      barPercent: 18,
    };
  }

  if (bucket === 1) {
    return {
      level: "low",
      message: "Hurry! Selling fast this week",
      barPercent: 38,
    };
  }

  return {
    level: "normal",
    message: "In stock — ready to ship",
    barPercent: 62,
  };
}

export function enrichProduct(product: Product): EnrichedProduct {
  const slugCode = product.slug.replace(/-/g, "").slice(0, 6).toUpperCase();
  const colors = getProductColorOptions(product);
  return {
    ...product,
    tagline: product.tagline ?? "Playful colour, featherlight comfort — built for little adventures.",
    colors,
    sizes: product.sizes ?? defaultAgeSizes,
    stock: product.stock ?? 1846,
    sku: product.sku ?? `KN${slugCode}23`,
    reviewCount: product.reviewCount ?? 157,
    additionalInfo: product.additionalInfo ?? {
      countryOfOrigin: "India",
      manufacturer: "Knack Innovations Pvt Ltd",
      address: "Plot No 71, Sector 7, IMT Manesar, Gurugram 122050",
    },
  };
}
