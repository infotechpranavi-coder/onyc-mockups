import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  Instagram,
  Menu,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  UserRound,
  Wind,
  X,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const imageBase = "https://images.unsplash.com/";
const images = {
  hero: `${imageBase}photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1800&q=88`,
  sneakers: `${imageBase}photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1100&q=88`,
  toddlers: `${imageBase}photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1100&q=88`,
  girls: `${imageBase}photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1100&q=88`,
  boys: `${imageBase}photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1100&q=88`,
  lifestyle: `${imageBase}photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1800&q=88`,
  story: `${imageBase}photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=88`,
  galleryOne: `${imageBase}photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=800&q=88`,
  galleryTwo: `${imageBase}photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=800&q=88`,
  galleryThree: `${imageBase}photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=88`,
  galleryFour: `${imageBase}photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=88`,
};

const navItems = ["New Arrivals", "Sneakers", "Girls", "Boys", "Toddlers", "Sale"];

const categories = [
  { name: "Sneakers", note: "Everyday icons", image: images.sneakers, tone: "category-coral" },
  { name: "Toddlers", note: "Tiny explorers", image: images.toddlers, tone: "category-peach" },
  { name: "Girls", note: "Play with colour", image: images.girls, tone: "category-pink" },
  { name: "Boys", note: "Made to move", image: images.boys, tone: "category-yellow" },
];

const products = [
  { name: "Mellow Run", price: "₹1,899", image: images.sneakers, color: "Rose / Cloud", rating: "4.9" },
  { name: "Sunny Side", price: "₹1,699", image: images.toddlers, color: "Butter / Cream", rating: "4.8" },
  { name: "Cloud High", price: "₹2,099", image: images.girls, color: "Lilac / Pink", rating: "5.0" },
  { name: "Cocoa Dash", price: "₹1,899", image: images.boys, color: "Cocoa / Gum", rating: "4.9" },
  { name: "Petal Pop", price: "₹1,799", image: images.galleryFour, color: "Pink / White", rating: "4.8" },
];

const features = [
  { icon: Wind, title: "Lightweight", detail: "Feather-light for all-day play" },
  { icon: Sparkles, title: "Breathable", detail: "Little feet stay fresh" },
  { icon: Zap, title: "Easy to wear", detail: "On, off, out the door" },
  { icon: Truck, title: "Play-ready", detail: "Built for every adventure" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ONYC | Playful shoes for little adventures" },
      { name: "description", content: "Discover ONYC kids footwear: playful, lightweight shoes made in India for little adventures." },
      { property: "og:title", content: "ONYC | Little feet. Big personality." },
      { property: "og:description", content: "Playful shoes made for little adventures." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlisted, setWishlisted] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const bestSellersRef = useRef<HTMLDivElement>(null);

  const toggleWishlist = (name: string) => {
    setWishlisted((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    );
  };

  const scrollBestSellers = (direction: "left" | "right") => {
    bestSellersRef.current?.scrollBy({ left: direction === "left" ? -340 : 340, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="announcement-bar">Free shipping on orders over ₹1,499 <span>✳</span> Easy returns, always</div>
      <header className="site-header">
        <div className="header-inner">
          <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <Menu />
          </Button>
          <a href="#top" className="brand-mark" aria-label="ONYC home">ONYC<span>®</span></a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => <a href={`#${item.toLowerCase().replace(" ", "-")}`} key={item}>{item}</a>)}
          </nav>
          <div className="header-actions">
            <Button variant="ghost" size="icon" aria-label="Search" onClick={() => setSearchOpen((current) => !current)}><Search /></Button>
            <Button variant="ghost" size="icon" aria-label="Account"><UserRound /></Button>
            <Button variant="ghost" size="icon" aria-label={`Shopping bag, ${cartCount} items`} className="bag-button"><ShoppingBag /><span>{cartCount}</span></Button>
          </div>
        </div>
        {searchOpen && <div className="search-drawer"><Search /><input autoFocus placeholder="Search tiny adventures" aria-label="Search products" /><Button variant="ghost" size="icon" aria-label="Close search" onClick={() => setSearchOpen(false)}><X /></Button></div>}
      </header>
      {menuOpen && <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}><aside className="mobile-menu" onClick={(event) => event.stopPropagation()}><div className="mobile-menu-top"><a href="#top" className="brand-mark">ONYC<span>®</span></a><Button variant="ghost" size="icon" aria-label="Close menu" onClick={() => setMenuOpen(false)}><X /></Button></div>{navItems.map((item) => <a href={`#${item.toLowerCase().replace(" ", "-")}`} onClick={() => setMenuOpen(false)} key={item}>{item}<ArrowRight /></a>)}</aside></div>}

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">The new everyday</p>
          <h1>Little feet.<br /><em>Big personality.</em></h1>
          <p className="hero-subtitle">Playful shoes made for little adventures.</p>
          <div className="hero-actions"><Button asChild size="lg" className="button-primary"><a href="#new-arrivals">Shop sneakers <ArrowRight /></a></Button><a className="text-link" href="#categories">Explore collection <span>↗</span></a></div>
          <div className="hero-meta"><span>01</span><div className="hero-line"><i /></div><span>03</span><span className="hero-meta-label">New season / 2024</span></div>
        </div>
        <div className="hero-media"><img src={images.hero} alt="Colourful children's sneakers styled for a playful adventure" /><div className="hero-sticker">Made<br /><strong>to move</strong></div><div className="hero-shape hero-shape-one" /><div className="hero-shape hero-shape-two" /></div>
      </section>

      <section className="ticker" aria-label="ONYC values"><div>Born in India <span>✳</span> Made for everywhere</div><div>Move freely <span>✳</span> Dream loudly <span>✳</span> Play daily</div></section>

      <section className="content-section category-section" id="categories">
        <div className="section-heading"><div><p className="eyebrow">Find their pair</p><h2>Shop by <em>mood.</em></h2></div><a className="text-link" href="#new-arrivals">View all <span>↗</span></a></div>
        <div className="category-grid">{categories.map((category) => <a className={`category-card ${category.tone}`} href={`#${category.name.toLowerCase()}`} key={category.name}><img src={category.image} alt={`${category.name} kids footwear collection`} /><div className="category-wash" /><div className="category-copy"><span>{category.note}</span><h3>{category.name}</h3><ArrowRight /></div></a>)}</div>
      </section>

      <section className="content-section arrivals-section" id="new-arrivals">
        <div className="section-heading"><div><p className="eyebrow">Just landed</p><h2>New <em>arrivals.</em></h2></div><a className="text-link" href="#new-arrivals">Shop all <span>↗</span></a></div>
        <div className="product-grid">{products.slice(0, 4).map((product) => <ProductCard key={product.name} product={product} wishlisted={wishlisted.includes(product.name)} onWishlist={() => toggleWishlist(product.name)} onAdd={() => setCartCount((count) => count + 1)} />)}</div>
      </section>

      <section className="feature-strip">{features.map(({ icon: Icon, title, detail }) => <div className="feature" key={title}><div className="feature-icon"><Icon /></div><div><h3>{title}</h3><p>{detail}</p></div></div>)}</section>

      <section className="editorial-banner"><img src={images.lifestyle} alt="Child exploring outdoors in bright ONYC sneakers" /><div className="editorial-overlay" /><div className="editorial-copy"><p className="eyebrow">For wherever they go next</p><h2>Made for little<br /><em>adventures.</em></h2><Button asChild className="button-light"><a href="#best-sellers">Shop now <ArrowRight /></a></Button></div><span className="editorial-caption">ONYC / 04 — OUTSIDE IS ALWAYS A GOOD IDEA</span></section>

      <section className="content-section best-section" id="best-sellers">
        <div className="section-heading"><div><p className="eyebrow">The ones they reach for</p><h2>Best <em>sellers.</em></h2></div><div className="carousel-controls"><Button variant="outline" size="icon" aria-label="Previous products" onClick={() => scrollBestSellers("left")}><ChevronLeft /></Button><Button variant="outline" size="icon" aria-label="Next products" onClick={() => scrollBestSellers("right")}><ChevronRight /></Button></div></div>
        <div className="product-carousel" ref={bestSellersRef}>{products.map((product) => <ProductCard key={product.name} product={product} wishlisted={wishlisted.includes(product.name)} onWishlist={() => toggleWishlist(product.name)} onAdd={() => setCartCount((count) => count + 1)} />)}</div>
      </section>

      <section className="story-section"><div className="story-image"><img src={images.story} alt="ONYC sneaker detail in a warm editorial setting" /><span>01 / 03</span></div><div className="story-copy"><p className="eyebrow">Our point of view</p><h2>Childhood is<br /><em>the first great</em><br />adventure.</h2><p>We make shoes for the wonderfully in-between moments: first steps, fast dashes, muddy detours and everything worth chasing. Designed in India, made to keep up.</p><a className="text-link" href="#footer">Meet ONYC <span>↗</span></a><div className="story-scribble">keep<br />going</div></div></section>

      <section className="content-section gallery-section"><div className="section-heading"><div><p className="eyebrow">Spotted in the wild</p><h2>Little looks, <em>big energy.</em></h2></div><a className="social-link" href="#footer"><Instagram /> Follow us @onyc</a></div><div className="gallery-grid"><img src={images.galleryOne} alt="ONYC shoes in a colourful setting" /><img src={images.galleryTwo} alt="Child wearing bright casual footwear" /><img src={images.galleryThree} alt="Close-up of playful kids sneakers" /><img src={images.galleryFour} alt="ONYC footwear styling detail" /></div></section>

      <section className="final-cta"><div className="cta-sparkle">✳</div><p className="eyebrow">The good stuff starts here</p><h2>Ready for their<br /><em>next adventure?</em></h2><Button asChild size="lg" className="button-dark"><a href="#new-arrivals">Shop ONYC <ArrowRight /></a></Button><div className="cta-shape cta-shape-left" /><div className="cta-shape cta-shape-right" /></section>

      <footer className="site-footer" id="footer"><div className="footer-top"><div className="footer-brand"><a href="#top" className="brand-mark">ONYC<span>®</span></a><p>Play loudly.<br />Move freely.</p><div className="social-icons"><a href="#footer" aria-label="Instagram"><Instagram /></a><a href="#footer" aria-label="Pinterest"><span className="pinterest-icon">P</span></a></div></div><div className="footer-links"><div><h3>Shop</h3><a href="#new-arrivals">New arrivals</a><a href="#sneakers">Sneakers</a><a href="#girls">Girls</a><a href="#boys">Boys</a><a href="#toddlers">Toddlers</a></div><div><h3>About</h3><a href="#footer">Our story</a><a href="#footer">Journal</a><a href="#footer">Stores</a><a href="#footer">Careers</a></div><div><h3>Help</h3><a href="#footer">Contact us</a><a href="#footer">Shipping & returns</a><a href="#footer">Size guide</a><a href="#footer">FAQs</a></div></div><div className="newsletter"><h3>Get the good stuff</h3><p>New drops, tiny joys and 10% off your first pair.</p>{subscribed ? <p className="subscribed-message">You’re on the list. See you soon ✳</p> : <form onSubmit={(event) => { event.preventDefault(); if (email.trim()) setSubscribed(true); }}><input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" aria-label="Your email address" /><Button size="icon" aria-label="Subscribe"><ArrowRight /></Button></form>}</div></div><div className="footer-bottom"><span>© 2024 ONYC. Designed for little legends.</span><div><a href="#footer">Privacy</a><a href="#footer">Terms</a><a href="#footer">India / INR</a></div></div></footer>
    </main>
  );
}

function ProductCard({ product, wishlisted, onWishlist, onAdd }: { product: typeof products[number]; wishlisted: boolean; onWishlist: () => void; onAdd: () => void }) {
  return <article className="product-card"><div className="product-image"><img src={product.image} alt={`${product.name} ${product.color} kids shoes`} loading="lazy" /><Button variant="ghost" size="icon" className={wishlisted ? "wish-button is-wishlisted" : "wish-button"} aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`} onClick={onWishlist}><Heart fill={wishlisted ? "currentColor" : "none"} /></Button><Button className="quick-add" size="sm" onClick={onAdd}>Add to bag <span>+</span></Button></div><div className="product-info"><div><h3>{product.name}</h3><p>{product.color}</p></div><strong>{product.price}</strong></div><div className="product-rating"><span><Star fill="currentColor" /> {product.rating}</span><span>Kids / 2024</span></div></article>;
}
