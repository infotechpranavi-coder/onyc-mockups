const product = (file: string) => `/products/${file}`;

export const brandLogo = "/ONYC log.png";

/** Transparent cutout — used in product sections */
export const heroProduct = product("prod6-removebg-preview.png");

export const images = {
  hero: heroProduct,
  heroHome2: heroProduct,
  heroHome3: heroProduct,
  sneakers: product("prod1.webp"),
  toddlers: product("prod2.webp"),
  girls: product("prod3.webp"),
  boys: product("prod4.webp"),
  lifestyle: product("prod5.webp"),
  story: product("prod3.webp"),
  galleryOne: product("prod1.webp"),
  galleryTwo: product("prod2.webp"),
  galleryThree: product("prod4.webp"),
  galleryFour: product("prod5.webp"),
};

export const navItems = ["New Arrivals", "Sneakers", "Girls", "Boys", "Toddlers", "Sale"];

export const homeVariants = [
  { id: "home1", path: "/home1", label: "Home 1", tagline: "Bold & Colorful" },
  { id: "home2", path: "/home2", label: "Home 2", tagline: "Minimal & Clean" },
  { id: "home3", path: "/home3", label: "Home 3", tagline: "Dark & Editorial" },
] as const;

export type HomeVariantId = (typeof homeVariants)[number]["id"];

export const categories = [
  { name: "Sneakers", note: "Everyday icons", image: product("prod1.webp"), tone: "category-coral" },
  { name: "Toddlers", note: "Tiny explorers", image: product("prod2.webp"), tone: "category-peach" },
  { name: "Girls", note: "Play with colour", image: product("prod3.webp"), tone: "category-pink" },
  { name: "Boys", note: "Made to move", image: product("prod4.webp"), tone: "category-yellow" },
  { name: "Sale", note: "Limited picks", image: product("prod5.webp"), tone: "category-coral" },
];

export const products = [
  { name: "Mellow Run", price: "₹1,899", originalPrice: "₹2,299", onSale: true, image: product("prod1.webp"), color: "Rose / Cloud", rating: "4.9" },
  { name: "Sunny Side", price: "₹1,699", image: product("prod2.webp"), color: "Butter / Cream", rating: "4.8" },
  { name: "Cloud High", price: "₹2,099", originalPrice: "₹2,499", onSale: true, image: product("prod3.webp"), color: "Lilac / Pink", rating: "5.0" },
  { name: "Cocoa Dash", price: "₹1,899", image: product("prod4.webp"), color: "Cocoa / Gum", rating: "4.9" },
  { name: "Petal Pop", price: "₹1,799", originalPrice: "₹2,199", onSale: true, image: product("prod5.webp"), color: "Pink / White", rating: "4.8" },
];

export const comparisonRows = [
  { label: "Comfort", onyc: "Featherlight & flexible", others: "Often stiff & heavy" },
  { label: "Grip", onyc: "Anti-skid soles", others: "Slippery nightmares" },
  { label: "Design", onyc: "Fun, bright, washable", others: "Looks good, feels bad" },
  { label: "Fit", onyc: "Podiatrist-recommended", others: "One-size-fits none" },
  { label: "Wearability", onyc: "Me-Put-On™ design", others: "Lace, cry, repeat" },
] as const;

export const features = [
  { icon: "Wind" as const, title: "Lightweight", detail: "Feather-light for all-day play" },
  { icon: "Sparkles" as const, title: "Breathable", detail: "Little feet stay fresh" },
  { icon: "Zap" as const, title: "Easy to wear", detail: "On, off, out the door" },
  { icon: "Truck" as const, title: "Play-ready", detail: "Built for every adventure" },
];

export type HeroBannerSlide = {
  id: string;
  image: string;
  tag: string;
  title: string;
  titleEm?: string;
  cta: string;
  ctaHref: string;
  caption: string;
};

/** Hero only — product & kids lifestyle. No offers. */
export const heroSlidesByVariant: Record<"1" | "2" | "3", HeroBannerSlide[]> = {
  "1": [
    {
      id: "h1-adventures",
      image: "/onyc-hero.jpg",
      tag: "For wherever they go next",
      title: "Made for little",
      titleEm: "adventures.",
      cta: "Shop now",
      ctaHref: "#best-sellers",
      caption: "ONYC / 04 — OUTSIDE IS ALWAYS A GOOD IDEA",
    },
    {
      id: "h1-personality",
      image: images.sneakers,
      tag: "New season drop",
      title: "Little feet.",
      titleEm: "Big personality.",
      cta: "Shop sneakers",
      ctaHref: "#new-arrivals",
      caption: "ONYC / PLAYFUL BY DESIGN",
    },
    {
      id: "h1-play",
      image: images.lifestyle,
      tag: "Built for kids",
      title: "Light as air.",
      titleEm: "Tough as play.",
      cta: "Explore collection",
      ctaHref: "#categories",
      caption: "ONYC / ALL-DAY COMFORT",
    },
  ],
  "2": [
    {
      id: "h2-movement",
      image: images.lifestyle,
      tag: "Everyday edit",
      title: "Less noise.",
      titleEm: "More movement.",
      cta: "Shop the edit",
      ctaHref: "#new-arrivals",
      caption: "ONYC / QUIETLY CONFIDENT",
    },
    {
      id: "h2-steps",
      image: images.galleryOne,
      tag: "Small steps",
      title: "Shoes for big",
      titleEm: "days ahead.",
      cta: "Explore styles",
      ctaHref: "#categories",
      caption: "ONYC / REFINED FOR LITTLE FEET",
    },
    {
      id: "h2-comfort",
      image: images.galleryTwo,
      tag: "Why parents love us",
      title: "Soft-touch.",
      titleEm: "All-day ease.",
      cta: "View arrivals",
      ctaHref: "#new-arrivals",
      caption: "ONYC / COMFORT WITHOUT COMPROMISE",
    },
  ],
  "3": [
    {
      id: "h3-play",
      image: images.galleryThree,
      tag: "Editorial drop",
      title: "Play loud.",
      titleEm: "Move free.",
      cta: "Shop drop",
      ctaHref: "#new-arrivals",
      caption: "ONYC / KIDS WHO RUN THE WORLD",
    },
    {
      id: "h3-joy",
      image: "/onyc-hero.jpg",
      tag: "New season",
      title: "Wear the",
      titleEm: "joy.",
      cta: "See bestsellers",
      ctaHref: "#best-sellers",
      caption: "ONYC / MAGAZINE-GRADE ATTITUDE",
    },
    {
      id: "h3-tough",
      image: images.galleryFour,
      tag: "Playground tested",
      title: "Built tough.",
      titleEm: "Feels soft.",
      cta: "Shop ONYC",
      ctaHref: "#new-arrivals",
      caption: "ONYC / PARENT APPROVED",
    },
  ],
};

export type OfferBanner = {
  id: string;
  tag?: string;
  title: string;
  detail: string;
  image: string;
  href: string;
  tone: "pink" | "teal" | "butter" | "peach";
};

export type GalleryPost = {
  id: string;
  image: string;
  alt: string;
  tag: string;
  caption: string;
  href: string;
};

/** Instagram-style gallery — lifestyle shots with playful captions. */
export const galleryPosts: GalleryPost[] = [
  {
    id: "g1",
    image: images.galleryOne,
    alt: "ONYC sneakers styled with vintage props",
    tag: "Weekend edit",
    caption: "Park-day energy, all weekend long.",
    href: "https://instagram.com/onyc",
  },
  {
    id: "g2",
    image: images.galleryTwo,
    alt: "Bright toddler shoes on a playful pink set",
    tag: "Tiny steps",
    caption: "First pairs that feel as fun as they look.",
    href: "https://instagram.com/onyc",
  },
  {
    id: "g3",
    image: images.galleryThree,
    alt: "Kids sneakers among wooden toys",
    tag: "Play mode",
    caption: "Built for blocks, bikes & backyard chaos.",
    href: "https://instagram.com/onyc",
  },
  {
    id: "g4",
    image: images.galleryFour,
    alt: "Colourful ONYC footwear close-up",
    tag: "Colour pop",
    caption: "Little looks with seriously big personality.",
    href: "https://instagram.com/onyc",
  },
];

/** Playful offer cards — compact, premium, accent colors. */
export const offerBanners: OfferBanner[] = [
  {
    id: "sale",
    tag: "Up to 30% off",
    title: "Playground favourites",
    detail: "Light pairs made for running, jumping, and everything in between.",
    image: images.sneakers,
    href: "#best-sellers",
    tone: "pink",
  },
  {
    id: "comfort",
    tag: "New season",
    title: "Tough on play",
    detail: "Gentle on feet — soft uppers, flexible soles, easy on.",
    image: images.toddlers,
    href: "#new-arrivals",
    tone: "teal",
  },
  {
    id: "shipping",
    tag: "Perk",
    title: "Free shipping",
    detail: "Complimentary delivery over ₹1,499. Easy returns, always.",
    image: images.lifestyle,
    href: "#new-arrivals",
    tone: "butter",
  },
];
