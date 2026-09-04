import { useRef, useState, type ReactNode } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CloudSun,
  Footprints,
  Heart,
  PartyPopper,
  Rocket,
  Smile,
  Sparkles,
} from "lucide-react";
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

type JoyIconName = "heart" | "smile" | "footprints" | "cloud" | "party" | "rocket" | "wink" | "sparkles";

function JoyGhost({ icon, className = "" }: { icon: JoyIconName; className?: string }) {
  if (icon === "wink") {
    return (
      <span className={`joy-ghost joy-ghost--wink ${className}`.trim()} aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="26" height="26" rx="7" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="13" r="1.6" fill="currentColor" />
          <path d="M18 12.5c1.2 1.4 2.8 1.4 4 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12 18c1.4 1.25 5 1.25 6.4 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
    );
  }

  const Icon = {
    heart: Heart,
    smile: Smile,
    footprints: Footprints,
    cloud: CloudSun,
    party: PartyPopper,
    rocket: Rocket,
    sparkles: Sparkles,
  }[icon];

  return (
    <span className={`joy-ghost joy-ghost--${icon} ${className}`.trim()} aria-hidden="true">
      <Icon strokeWidth={1.6} />
    </span>
  );
}

function JoyNote({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`joy-note ${className}`.trim()} aria-hidden="true">
      {children}
    </span>
  );
}

/** Home 5 — joyful accents, placed like editorial notes (never over copy) */
export function Home5Page() {
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
    <main className="min-h-screen overflow-hidden bg-background text-foreground home-page home-page--1 home-page--4 home-page--5">
      <div className="announcement-bar">
        Free shipping on orders over ₹1,499 <span>✳</span> Easy returns, always
      </div>
      <SiteHeader cartCount={cartCount} variant="light" />

      <HeroCarousel variant="1" />

      <CategoryScroll variant="1" />

      {/* Arrivals — note under heading trail (right), soft icon bottom-left */}
      <section className="content-section arrivals-section joy-section" id="new-arrivals">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Just landed</p>
            <h2>
              New <em>arrivals.</em>
            </h2>
          </div>
          <div className="section-heading__trail">
            <JoyNote className="joy-note--tilt-r joy-note--quiet">
              play
              <br />
              loud
            </JoyNote>
            <a className="text-link" href="#new-arrivals">
              Shop all <span>↗</span>
            </a>
          </div>
        </div>
        <JoyGhost icon="sparkles" className="joy-pos joy-pos--bl joy-ghost--soft" />
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

      {/* VS — honest feet beside title (top), not on the footer line */}
      <section className="joy-section joy-section--vs">
        <VsCompareSection
          titleAccent={
            <>
              <JoyGhost icon="footprints" className="joy-ghost--soft" />
              <JoyNote className="joy-note--tilt-r joy-note--quiet">honest feet</JoyNote>
            </>
          }
        />
      </section>

      {/* Offers — relevant scribble (not echoing the heading) */}
      <section className="joy-section joy-section--offers">
        <PromoBanners
          variant="1"
          headAccent={
            <JoyNote className="joy-note--tilt-r joy-note--quiet">
              little
              <br />
              treats
            </JoyNote>
          }
        />
        <JoyGhost icon="party" className="joy-pos joy-pos--bl joy-ghost--soft" />
      </section>

      {/* Best sellers — heart left / soft steps right under title */}
      <section className="content-section best-section joy-section" id="best-sellers">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The ones they reach for</p>
            <h2>
              Best <em>sellers.</em>
            </h2>
          </div>
          <div className="section-heading__trail">
            <JoyNote className="joy-note--tilt-r joy-note--quiet">soft steps</JoyNote>
            <div className="carousel-controls">
              <Button variant="outline" size="icon" aria-label="Previous products" onClick={() => scrollBestSellers("left")}>
                <ChevronLeft />
              </Button>
              <Button variant="outline" size="icon" aria-label="Next products" onClick={() => scrollBestSellers("right")}>
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
        <JoyGhost icon="heart" className="joy-pos joy-pos--bl joy-ghost--soft" />
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

      {/* Story */}
      <section className="story-section joy-section">
        <div className="story-image">
          <img src={images.story} alt="ONYC sneaker detail in a warm editorial setting" />
          <span>01 / 03</span>
          <JoyGhost icon="smile" className="joy-ghost--story-badge" />
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
          <div className="story-scribble joy-note joy-note--keep">
            keep
            <br />
            going
          </div>
        </div>
      </section>

      <div className="joy-wink-divider" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* Gallery — wild joy above Follow us (right), as in mock */}
      <section className="gallery-wrap joy-section">
        <InstagramGallery
          headAccent={
            <JoyNote className="joy-note--tilt-r joy-note--quiet">
              wild
              <br />
              joy
            </JoyNote>
          }
        />
        <JoyGhost icon="cloud" className="joy-pos joy-pos--gallery-icon" />
      </section>

      {/* CTA — soft accents clear of title */}
      <section className="joy-cta-wrap joy-section">
        <JoyGhost icon="rocket" className="joy-pos joy-pos--safe-tl joy-ghost--butter" />
        <JoyNote className="joy-pos joy-pos--safe-br joy-note--butter joy-note--tilt-r joy-note--quiet">
          run
          <br />
          free
        </JoyNote>
        <FinalCta />
      </section>

      <SiteFooter
        email={email}
        subscribed={subscribed}
        onEmailChange={setEmail}
        onSubscribe={() => email.trim() && setSubscribed(true)}
      />
    </main>
  );
}
