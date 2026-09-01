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

export function Home3Page() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlisted, setWishlisted] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const toggleWishlist = (name: string) => {
    setWishlisted((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    );
  };

  const scrollCarousel = (direction: "left" | "right") => {
    carouselRef.current?.scrollBy({ left: direction === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground home-page home-page--3">
      <div className="h3-topbar">
        <span>Free shipping ₹1,499+</span>
        <span>New season drop live</span>
        <span>Easy returns</span>
      </div>
      <SiteHeader cartCount={cartCount} variant="dark" />

      <HeroCarousel variant="3" />

      <section className="h3-marquee" aria-hidden="true">
        <div className="h3-marquee-track">
          <span>ONYC KIDS</span>
          <span>✳</span>
          <span>PLAY LOUD</span>
          <span>✳</span>
          <span>MOVE FREE</span>
          <span>✳</span>
          <span>ONYC KIDS</span>
          <span>✳</span>
          <span>PLAY LOUD</span>
          <span>✳</span>
          <span>MOVE FREE</span>
          <span>✳</span>
        </div>
      </section>

      <CategoryScroll variant="3" />

      <section className="h3-products-block" id="new-arrivals">
        <div className="h3-products-head">
          <div>
            <p className="h3-tag">Just dropped</p>
            <h2>
              New <em>arrivals.</em>
            </h2>
          </div>
          <a className="h3-link" href="#best-sellers">
            All styles →
          </a>
        </div>
        <div className="h3-product-stack">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              layout="editorial"
              wishlisted={wishlisted.includes(product.name)}
              onWishlist={() => toggleWishlist(product.name)}
              onAdd={() => setCartCount((count) => count + 1)}
            />
          ))}
        </div>
      </section>

      <VsCompareSection />

      <section className="h3-split" id="best-sellers">
        <div className="h3-split-image">
          <img src={images.lifestyle} alt="Lifestyle editorial with ONYC sneakers" />
          <span className="h3-split-badge">Editorial</span>
        </div>
        <div className="h3-split-copy">
          <p className="h3-tag">Bestsellers</p>
          <h2>
            The pairs they reach for
            <br />
            <em>every day.</em>
          </h2>
          <p>Swipe through the fan favourites — built for playground sprints and weekend wanderings.</p>
          <div className="h3-carousel-controls">
            <Button variant="outline" size="icon" aria-label="Previous" onClick={() => scrollCarousel("left")}>
              <ChevronLeft />
            </Button>
            <Button variant="outline" size="icon" aria-label="Next" onClick={() => scrollCarousel("right")}>
              <ChevronRight />
            </Button>
          </div>
          <div className="h3-carousel h3-carousel--editorial" ref={carouselRef}>
            {products.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                layout="editorial"
                wishlisted={wishlisted.includes(product.name)}
                onWishlist={() => toggleWishlist(product.name)}
                onAdd={() => setCartCount((count) => count + 1)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="h3-color-blocks">
        <div className="h3-block h3-block--pink">
          <span>01</span>
          <h3>Light as air</h3>
          <p>Featherweight soles for all-day comfort.</p>
        </div>
        <div className="h3-block h3-block--butter">
          <span>02</span>
          <h3>Easy on</h3>
          <p>Velcro and stretch — out the door in seconds.</p>
        </div>
        <div className="h3-block h3-block--coral">
          <span>03</span>
          <h3>Built tough</h3>
          <p>Playground tested, parent approved.</p>
        </div>
      </section>

      <PromoBanners variant="3" />

      <div className="h3-gallery-wrap">
        <InstagramGallery />
      </div>

      <FinalCta />

      <SiteFooter
        email={email}
        subscribed={subscribed}
        onEmailChange={setEmail}
        onSubscribe={() => email.trim() && setSubscribed(true)}
        variant="dark"
      />
    </main>
  );
}
