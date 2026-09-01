const product = (file: string) => `/products/${file}`;
const newProduct = (file: string) => `/products/new-products/${encodeURIComponent(file)}`;

export const brandLogo = "/ONYC log.png";

/** Shoe-only cutouts — product cards, category thumbs, offer media */
export const shoeImages = {
  kudo: newProduct("v5 kudo shoes staic_.png"),
  donut: newProduct("kid donut shoes_.png"),
  lolly: newProduct("Lolly Yellow Purple v2.png"),
  mango: newProduct("Mango_.png"),
  muffin: newProduct("Muffin ONYC .png"),
  muskmelon: newProduct("muskmelon static_.png"),
  orange: newProduct("orange.png"),
  sharkCroc: newProduct("shark and croc  shoes.png"),
} as const;

/** Lifestyle / kids-in-scene — hero banners, editorial, gallery, bento */
export const lifestyleImages = {
  heroGirl: newProduct("final.jpeg"),
  heroBoy: newProduct("final.png"),
  bunnyKids: newProduct("Bunny kid ONYC .png"),
  donutKids: newProduct("2 kid donut shoes_.png"),
  gatorKids: newProduct("aligator kid static .png"),
} as const;

export const images = {
  hero: shoeImages.kudo,
  heroHome2: lifestyleImages.heroGirl,
  heroHome3: lifestyleImages.heroBoy,
  sneakers: shoeImages.kudo,
  toddlers: shoeImages.muffin,
  girls: shoeImages.lolly,
  boys: shoeImages.sharkCroc,
  lifestyle: lifestyleImages.heroGirl,
  story: lifestyleImages.heroBoy,
  galleryOne: lifestyleImages.bunnyKids,
  galleryTwo: lifestyleImages.donutKids,
  galleryThree: lifestyleImages.gatorKids,
  galleryFour: lifestyleImages.heroGirl,
  bentoWide: lifestyleImages.donutKids,
  bentoStyle: lifestyleImages.gatorKids,
  bentoStory: lifestyleImages.bunnyKids,
};

export type NavLink = {
  label: string;
  to: "/shop" | "/home1" | "/home2" | "/home3";
  hash?: string;
  /** Highlight when pathname starts with this prefix (e.g. shop pages). */
  activePrefix?: "/shop";
};

export const navLinks: NavLink[] = [
  { label: "Products", to: "/shop", activePrefix: "/shop" },
  { label: "New Arrivals", to: "/home1", hash: "new-arrivals" },
  { label: "Sneakers", to: "/shop" },
  { label: "Girls", to: "/shop" },
  { label: "Boys", to: "/shop" },
  { label: "Toddlers", to: "/shop" },
  { label: "Sale", to: "/shop" },
];

export const homeVariants = [
  { id: "home1", path: "/home1", label: "Home 1", tagline: "Bold & Colorful" },
  { id: "home2", path: "/home2", label: "Home 2", tagline: "Minimal & Clean" },
  { id: "home3", path: "/home3", label: "Home 3", tagline: "Dark & Editorial" },
] as const;

export type HomeVariantId = (typeof homeVariants)[number]["id"];

export const categories = [
  { name: "Sneakers", note: "Everyday icons", image: shoeImages.kudo, tone: "category-coral" },
  { name: "Toddlers", note: "Tiny explorers", image: shoeImages.muffin, tone: "category-peach" },
  { name: "Girls", note: "Play with colour", image: shoeImages.lolly, tone: "category-pink" },
  { name: "Boys", note: "Made to move", image: shoeImages.sharkCroc, tone: "category-yellow" },
  { name: "Sale", note: "Limited picks", image: shoeImages.donut, tone: "category-coral" },
];

export type Product = {
  slug: string;
  name: string;
  price: string;
  originalPrice?: string;
  onSale?: boolean;
  image: string;
  color: string;
  rating: string;
  description: string;
  highlights: string[];
  tagline?: string;
  colors?: { name: string; hex: string; id?: string; image?: string; available?: boolean }[];
  sizes?: { label: string; available: boolean }[];
  stock?: number;
  sku?: string;
  reviewCount?: number;
  additionalInfo?: {
    countryOfOrigin: string;
    manufacturer: string;
    address: string;
  };
};

export const products: Product[] = [
  {
    slug: "kudo-v5",
    name: "Kudo V5",
    price: "₹1,899",
    originalPrice: "₹2,299",
    onSale: true,
    image: shoeImages.kudo,
    color: "Mint / White",
    rating: "4.9",
    description: "Lightweight knit upper with a flexible sole built for first steps, playground sprints, and everything in between.",
    highlights: ["Breathable mesh upper", "Anti-skid rubber outsole", "Easy velcro closure"],
  },
  {
    slug: "donut-pop",
    name: "Donut Pop",
    price: "₹1,699",
    image: shoeImages.donut,
    color: "Pink / Cream",
    rating: "4.8",
    description: "Soft-touch sneaker with playful colour blocking and all-day cushioning for busy little feet.",
    highlights: ["Washable upper", "Me-Put-On™ design", "Podiatrist-friendly fit"],
  },
  {
    slug: "mango-sprint",
    name: "Mango Sprint",
    price: "₹1,899",
    image: shoeImages.mango,
    color: "Citrus / Gum",
    rating: "4.9",
    description: "Bright citrus tones meet featherlight construction — made for kids who never sit still.",
    highlights: ["Ultra-light build", "Flexible forefoot", "Reinforced toe cap"],
  },
  {
    slug: "lolly-mix",
    name: "Lolly Mix",
    price: "₹1,799",
    originalPrice: "₹2,199",
    onSale: true,
    image: shoeImages.lolly,
    color: "Yellow / Lilac",
    rating: "4.8",
    description: "Two-tone colour pop with a cushioned insole — fun looks, serious comfort.",
    highlights: ["Dual-density sole", "Soft collar lining", "Easy on & off"],
  },
  {
    slug: "muffin-step",
    name: "Muffin Step",
    price: "₹1,699",
    image: shoeImages.muffin,
    color: "Peach / Cream",
    rating: "4.9",
    description: "Minimal slip-on with a rounded toe and grippy sole — perfect for toddlers finding their stride.",
    highlights: ["Slip-on entry", "Wide toe box", "Machine-washable"],
  },
  {
    slug: "melon-fresh",
    name: "Melon Fresh",
    price: "₹1,899",
    image: shoeImages.muskmelon,
    color: "Green / Sand",
    rating: "4.8",
    description: "Fresh summer palette with breathable panels and a flexible outsole for warm-weather play.",
    highlights: ["Ventilated panels", "Lightweight EVA midsole", "All-day comfort"],
  },
  {
    slug: "citrus-pop",
    name: "Citrus Pop",
    price: "₹1,799",
    image: shoeImages.orange,
    color: "Orange / White",
    rating: "4.9",
    description: "Bold orange accents on a clean white base — everyday icon energy for little adventurers.",
    highlights: ["Durable outsole", "Soft step feel", "Kid-approved style"],
  },
  {
    slug: "reef-runner",
    name: "Reef Runner",
    price: "₹2,099",
    image: shoeImages.sharkCroc,
    color: "Teal / Navy",
    rating: "5.0",
    description: "Character-led design with premium materials and grip that keeps up with wild imaginations.",
    highlights: ["Character detailing", "Extra grip tread", "Premium finish"],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((item) => item.slug === slug);
}

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

/** Hero only — lifestyle & product shots. No offers. */
export const heroSlidesByVariant: Record<"1" | "2" | "3", HeroBannerSlide[]> = {
  "1": [
    {
      id: "h1-adventures",
      image: lifestyleImages.heroGirl,
      tag: "For wherever they go next",
      title: "Made for little",
      titleEm: "adventures.",
      cta: "Shop now",
      ctaHref: "#best-sellers",
      caption: "ONYC / 04 — OUTSIDE IS ALWAYS A GOOD IDEA",
    },
    {
      id: "h1-personality",
      image: lifestyleImages.bunnyKids,
      tag: "New season drop",
      title: "Little feet.",
      titleEm: "Big personality.",
      cta: "Shop sneakers",
      ctaHref: "#new-arrivals",
      caption: "ONYC / PLAYFUL BY DESIGN",
    },
    {
      id: "h1-play",
      image: lifestyleImages.donutKids,
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
      image: lifestyleImages.heroGirl,
      tag: "Everyday edit",
      title: "Less noise.",
      titleEm: "More movement.",
      cta: "Shop the edit",
      ctaHref: "#new-arrivals",
      caption: "ONYC / QUIETLY CONFIDENT",
    },
    {
      id: "h2-steps",
      image: lifestyleImages.bunnyKids,
      tag: "Small steps",
      title: "Shoes for big",
      titleEm: "days ahead.",
      cta: "Explore styles",
      ctaHref: "#categories",
      caption: "ONYC / REFINED FOR LITTLE FEET",
    },
    {
      id: "h2-comfort",
      image: lifestyleImages.donutKids,
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
      image: lifestyleImages.gatorKids,
      tag: "Editorial drop",
      title: "Play loud.",
      titleEm: "Move free.",
      cta: "Shop drop",
      ctaHref: "#new-arrivals",
      caption: "ONYC / KIDS WHO RUN THE WORLD",
    },
    {
      id: "h3-joy",
      image: lifestyleImages.heroBoy,
      tag: "New season",
      title: "Wear the",
      titleEm: "joy.",
      cta: "See bestsellers",
      ctaHref: "#best-sellers",
      caption: "ONYC / MAGAZINE-GRADE ATTITUDE",
    },
    {
      id: "h3-tough",
      image: lifestyleImages.bunnyKids,
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

/** Instagram-style gallery — kids & lifestyle scenes */
export const galleryPosts: GalleryPost[] = [
  {
    id: "g1",
    image: images.galleryOne,
    alt: "Kids wearing ONYC bunny sneakers in a playful studio set",
    tag: "Weekend edit",
    caption: "Little moments, big personality — spotted in the wild.",
    href: "https://instagram.com/onyc",
  },
  {
    id: "g2",
    image: images.galleryTwo,
    alt: "Child enjoying donuts while wearing ONYC sneakers",
    tag: "Tiny steps",
    caption: "Playful pairs for snack breaks and sprint finishes.",
    href: "https://instagram.com/onyc",
  },
  {
    id: "g3",
    image: images.galleryThree,
    alt: "Child laughing in ONYC gator-themed sneakers",
    tag: "Play mode",
    caption: "Built for blocks, bikes & backyard chaos.",
    href: "https://instagram.com/onyc",
  },
  {
    id: "g4",
    image: images.galleryFour,
    alt: "Girl stepping down in bright yellow ONYC slip-ons",
    tag: "Colour pop",
    caption: "Clean lines, bold colour, all-day comfort.",
    href: "https://instagram.com/onyc",
  },
];

/** Offer cards — shoe cutouts in card media */
export const offerBanners: OfferBanner[] = [
  {
    id: "sale",
    tag: "Up to 30% off",
    title: "New season pairs",
    detail: "Fresh cutouts and colourways from the latest ONYC drop.",
    image: shoeImages.kudo,
    href: "#best-sellers",
    tone: "pink",
  },
  {
    id: "comfort",
    tag: "New arrivals",
    title: "Soft from day one",
    detail: "Light uppers, flexible soles, and easy on-and-off for busy mornings.",
    image: shoeImages.muffin,
    href: "#new-arrivals",
    tone: "teal",
  },
  {
    id: "shipping",
    tag: "Perk",
    title: "Free shipping",
    detail: "Complimentary delivery over ₹1,499. Easy returns, always.",
    image: shoeImages.muskmelon,
    href: "#new-arrivals",
    tone: "butter",
  },
];
