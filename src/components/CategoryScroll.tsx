import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { categories } from "@/lib/home-data";

type CategoryScrollProps = {
  variant: "1" | "2" | "3";
};

export function CategoryScroll({ variant }: CategoryScrollProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const card = trackRef.current?.querySelector<HTMLElement>(".category-scroll__card");
    const step = card ? card.offsetWidth + 16 : 280;
    trackRef.current?.scrollBy({ left: direction === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <section className={`category-scroll category-scroll--${variant}`} id="categories">
      <div className="category-scroll__highlight">
        <div className="category-scroll__head">
          {variant === "1" && (
            <>
              <div>
                <p className="eyebrow">Find their pair</p>
                <h2>
                  Shop by <em>mood.</em>
                </h2>
              </div>
              <a className="text-link" href="#new-arrivals">
                View all <span>↗</span>
              </a>
            </>
          )}
          {variant === "2" && (
            <>
              <div>
                <p className="h2-label">Collections</p>
                <h2>Shop by category</h2>
              </div>
              <span className="category-scroll__count">{categories.length} pairs</span>
            </>
          )}
          {variant === "3" && (
            <div>
              <p className="h3-tag">Collections</p>
              <h2>
                Pick your
                <br />
                <em>vibe.</em>
              </h2>
            </div>
          )}
          <div className="category-scroll__controls">
            <Button variant="outline" size="icon" aria-label="Previous categories" onClick={() => scroll("left")}>
              <ChevronLeft />
            </Button>
            <Button variant="outline" size="icon" aria-label="Next categories" onClick={() => scroll("right")}>
              <ChevronRight />
            </Button>
          </div>
        </div>

        <div className="category-scroll__track" ref={trackRef} aria-label="Browse categories">
          {categories.map((category, index) => (
            <a
              className={`category-scroll__card category-scroll__card--${variant} ${category.tone ?? ""}`}
              href={`#${category.name.toLowerCase()}`}
              key={category.name}
            >
              {variant === "1" && (
                <>
                  <img src={category.image} alt={`${category.name} kids footwear collection`} />
                  <div className="category-wash" />
                  <div className="category-copy">
                    <span>{category.note}</span>
                    <h3>{category.name}</h3>
                    <ArrowRight />
                  </div>
                </>
              )}
              {variant === "2" && (
                <>
                  <span className="category-scroll__index">0{index + 1}</span>
                  <img src={category.image} alt={`${category.name} collection`} />
                  <div className="category-scroll__minimal-copy">
                    <h3>{category.name}</h3>
                    <p>{category.note}</p>
                  </div>
                  <ArrowRight className="category-scroll__arrow" />
                </>
              )}
              {variant === "3" && (
                <>
                  <img src={category.image} alt={`${category.name} collection`} />
                  <div className="h3-category-overlay" />
                  <div className="h3-category-label">
                    <span>{category.note}</span>
                    <h3>{category.name}</h3>
                  </div>
                </>
              )}
            </a>
          ))}
        </div>

        <p className="category-scroll__hint">
          <span>Swipe</span> to explore pairs →
        </p>
      </div>
    </section>
  );
}
