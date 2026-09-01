import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { offerBanners } from "@/lib/home-data";

type PromoBannersProps = {
  variant?: "1" | "2" | "3";
};

export function PromoBanners({ variant = "1" }: PromoBannersProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = Math.min(offerBanners.length - 1, Math.max(0, index));
    const slide = track.children[next] as HTMLElement | undefined;
    if (!slide) return;
    track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    setActive(next);
  }, []);

  const scrollBy = (direction: "left" | "right") => {
    scrollTo(direction === "left" ? active - 1 : active + 1);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const slides = Array.from(track.children) as HTMLElement[];
      if (!slides.length) return;
      const center = track.scrollLeft + track.clientWidth / 2;
      const index = slides.findIndex((slide) => {
        const start = slide.offsetLeft;
        const end = start + slide.offsetWidth;
        return center >= start && center < end;
      });
      if (index >= 0) setActive(index);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={`offers-section offers-section--${variant}`} id="offers" aria-label="Offers and perks">
      <div className="offers-section__head">
        <div>
          <p className="offers-section__eyebrow">Perks & offers</p>
          <h2>
            A little extra <em>joy</em>
          </h2>
        </div>
        <div className="offers-section__controls">
          <Button variant="outline" size="icon" aria-label="Previous offer" onClick={() => scrollBy("left")} disabled={active === 0}>
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Next offer"
            onClick={() => scrollBy("right")}
            disabled={active === offerBanners.length - 1}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>

      <div className="offers-section__viewport">
        <div className="offers-section__track" ref={trackRef}>
          {offerBanners.map((offer) => (
            <a className={`offer-card offer-card--${offer.tone}`} href={offer.href} key={offer.id}>
              <div className="offer-card__copy">
                {offer.tag && <span className="offer-card__tag">{offer.tag}</span>}
                <h3>{offer.title}</h3>
                <p>{offer.detail}</p>
                <span className="offer-card__cta">
                  Shop now <ArrowRight />
                </span>
              </div>
              <div className="offer-card__media">
                <img src={offer.image} alt="" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="offers-section__dots" role="tablist" aria-label="Choose offer">
        {offerBanners.map((offer, index) => (
          <button
            key={offer.id}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-label={`Offer ${index + 1}`}
            className={active === index ? "is-active" : undefined}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
