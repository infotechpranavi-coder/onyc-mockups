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

export function Home2Page() {
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
    <main className="min-h-screen bg-background text-foreground home-page home-page--2">
      <div className="h2-announcement">
        Free shipping over ₹1,499 <span>✳</span> Easy returns
      </div>
      <SiteHeader cartCount={cartCount} variant="minimal" />

      <HeroCarousel variant="2" />

      <section className="h2-stats" aria-label="Brand highlights">
        <div><span>Made in India</span><em>01</em></div>
        <div><span>Lightweight build</span><em>02</em></div>
        <div><span>Easy on &amp; off</span><em>03</em></div>
        <div><span>Play-tested</span><em>04</em></div>
      </section>

      <CategoryScroll variant="2" />

      <section className="h2-section h2-products" id="new-arrivals">
        <div className="h2-section-head h2-section-head--split">
          <div>
            <p className="h2-label h2-label--play">Just landed</p>
            <h2>
              New <em>arrivals.</em>
            </h2>
          </div>
          <a className="h2-text-link" href="#best-sellers">
            Shop bestsellers <span>↗</span>
          </a>
        </div>
        <div className="h2-product-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              variant="minimal"
              wishlisted={wishlisted.includes(product.name)}
              onWishlist={() => toggleWishlist(product.name)}
              onAdd={() => setCartCount((count) => count + 1)}
            />
          ))}
        </div>
      </section>

      <VsCompareSection />

      <section className="h2-editorial" id="best-sellers">
        <div className="h2-editorial-copy">
          <p className="h2-label h2-label--play">Our point of view</p>
          <h2>
            Less noise.
            <br />
            <em>More movement.</em>
          </h2>
          <p>
            Designed for parents who want premium without the fuss — clean lines, durable materials, and shoes
            kids actually want to wear.
          </p>
          <Button asChild variant="outline" className="h2-outline-btn">
            <a href="#new-arrivals">Explore styles</a>
          </Button>
        </div>
        <div className="h2-editorial-media">
          <img src={images.lifestyle} alt="Child walking in minimal ONYC sneakers" />
          <span className="h2-editorial-badge">Play-tested</span>
        </div>
      </section>

      <PromoBanners variant="2" />

      <section className="h2-section h2-bestsellers">
        <div className="h2-section-head h2-section-head--split">
          <div>
            <p className="h2-label h2-label--play">Fan favourites</p>
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
        <div className="product-carousel h2-product-carousel" ref={bestSellersRef}>
          {products.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              variant="minimal"
              wishlisted={wishlisted.includes(product.name)}
              onWishlist={() => toggleWishlist(product.name)}
              onAdd={() => setCartCount((count) => count + 1)}
            />
          ))}
        </div>
      </section>

      <section className="h2-bento" aria-label="Brand highlights">
        <div className="h2-bento-card h2-bento-card--wide">
          <img src={images.bentoWide} alt="Sneaker detail shot" />
          <div>
            <p className="h2-label">Detail</p>
            <h3>Soft-touch uppers</h3>
          </div>
        </div>
        <div className="h2-bento-card">
          <img src={images.bentoStyle} alt="Kids footwear styling" />
          <div>
            <p className="h2-label">Style</p>
            <h3>Everyday icons</h3>
          </div>
        </div>
        <div className="h2-bento-card h2-bento-card--tall">
          <img src={images.bentoStory} alt="ONYC brand story" />
          <div>
            <p className="h2-label">Story</p>
            <h3>Born to play</h3>
          </div>
        </div>
        <div className="h2-bento-card h2-bento-card--cta">
          <p className="h2-label h2-label--play">First pair</p>
          <h3>10% off when you join the list</h3>
          <Button asChild className="button-primary">
            <a href="#footer">Sign up</a>
          </Button>
        </div>
      </section>

      <InstagramGallery />

      <FinalCta />

      <SiteFooter
        email={email}
        subscribed={subscribed}
        onEmailChange={setEmail}
        onSubscribe={() => email.trim() && setSubscribed(true)}
        variant="minimal"
      />
    </main>
  );
}
