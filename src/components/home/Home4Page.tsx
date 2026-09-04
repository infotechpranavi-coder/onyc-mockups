import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { PromoBanners } from "@/components/PromoBanners";
import { CategoryScroll } from "@/components/CategoryScroll";
import { VsCompareSection } from "@/components/VsCompareSection";
import { ProductCard } from "@/components/ProductCard";
import { InstagramGallery } from "@/components/InstagramGallery";
import { FinalCta } from "@/components/FinalCta";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";
import { images, products } from "@/lib/home-data";

/** Home 4 — Home 1 layout + playful premium blush backgrounds & kids patterns */
export function Home4Page() {
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
    <main className="min-h-screen overflow-hidden bg-background text-foreground home-page home-page--1 home-page--4">
      <div className="announcement-bar">
        Free shipping on orders over ₹1,499 <span>✳</span> Easy returns, always
      </div>
      <SiteHeader cartCount={cartCount} variant="light" />

      <HeroCarousel variant="1" />

      <CategoryScroll variant="1" />

      <section className="content-section arrivals-section" id="new-arrivals">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Just landed</p>
            <h2>
              New <em>arrivals.</em>
            </h2>
          </div>
          <a className="text-link" href="#new-arrivals">
            Shop all <span>↗</span>
          </a>
        </div>
        <div className="product-grid product-grid--stack">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              layout="premium"
              linkToDetail
              wishlisted={wishlisted.includes(product.name)}
              onWishlist={() => toggleWishlist(product.name)}
              onAdd={() => setCartCount((count) => count + 1)}
            />
          ))}
        </div>
      </section>

      <VsCompareSection />

      <PromoBanners variant="1" />

      <section className="content-section best-section" id="best-sellers">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The ones they reach for</p>
            <h2>
              Best <em>sellers.</em>
            </h2>
          </div>
          <div className="carousel-controls">
            <Button variant="outline" size="icon" aria-label="Previous products" onClick={() => scrollBestSellers("left")}>
              <ChevronLeft />
            </Button>
            <Button variant="outline" size="icon" aria-label="Next products" onClick={() => scrollBestSellers("right")}>
              <ChevronRight />
            </Button>
          </div>
        </div>
        <div className="product-carousel product-carousel--premium" ref={bestSellersRef}>
          {products.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              layout="premium"
              linkToDetail
              wishlisted={wishlisted.includes(product.name)}
              onWishlist={() => toggleWishlist(product.name)}
              onAdd={() => setCartCount((count) => count + 1)}
            />
          ))}
        </div>
      </section>

      <section className="story-section">
        <div className="story-image">
          <img src={images.story} alt="ONYC sneaker detail in a warm editorial setting" />
          <span>01 / 03</span>
        </div>
        <div className="story-copy">
          <p className="type-eyebrow">Our point of view</p>
          <h2 className="type-heading type-heading--story">
            <span className="type-heading__line1">
              <em>childhood</em>
            </span>
            <span className="type-heading__line2">
              <em>is</em> the first great
            </span>
            <span className="type-heading__line3">adventure.</span>
          </h2>
          <p>
            We make shoes for the wonderfully in-between moments: first steps, fast dashes, muddy detours and
            everything worth chasing. Designed in India, made to keep up.
          </p>
          <a className="text-link" href="#footer">
            Meet ONYC <span>↗</span>
          </a>
          <div className="story-scribble">
            keep
            <br />
            going
          </div>
        </div>
      </section>

      <InstagramGallery />

      <FinalCta />

      <SiteFooter
        email={email}
        subscribed={subscribed}
        onEmailChange={setEmail}
        onSubscribe={() => email.trim() && setSubscribed(true)}
      />
    </main>
  );
}
