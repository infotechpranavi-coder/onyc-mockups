import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroSlidesByVariant, type HeroBannerSlide } from "@/lib/home-data";

type HeroCarouselProps = {
  variant: "1" | "2" | "3";
};

function BannerSlide({ slide }: { slide: HeroBannerSlide }) {
  return (
    <article className="hero-banner-card">
      <img src={slide.image} alt="" className="hero-banner-card__bg" />
      <div className="hero-banner-card__overlay" />
      <div className="hero-banner-card__content">
        <p className="hero-banner-card__tag">{slide.tag}</p>
        <h2>
          {slide.title}
          {slide.titleEm && (
            <>
              <br />
              <em>{slide.titleEm}</em>
            </>
          )}
        </h2>
        <Button asChild className="button-light hero-banner-card__cta">
          <a href={slide.ctaHref}>
            {slide.cta} <ArrowRight />
          </a>
        </Button>
      </div>
      <span className="hero-banner-card__caption">{slide.caption}</span>
    </article>
  );
}

export function HeroCarousel({ variant }: HeroCarouselProps) {
  const slides = heroSlidesByVariant[variant];
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const next = Math.min(slides.length - 1, Math.max(0, index));
      track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
      setActive(next);
    },
    [slides.length],
  );

  const scrollBy = (direction: "left" | "right") => {
    scrollTo(direction === "left" ? active - 1 : active + 1);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const width = track.clientWidth;
      if (!width) return;
      const index = Math.round(track.scrollLeft / width);
      setActive(Math.min(slides.length - 1, Math.max(0, index)));
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [slides.length]);

  return (
    <section
      className={`hero-carousel hero-carousel--${variant}`}
      id="top"
      aria-roledescription="carousel"
      aria-label="Hero banners"
    >
      <div className="hero-carousel__viewport">
        <div className="hero-carousel__track" ref={trackRef}>
          {slides.map((slide, index) => (
            <div
              className="hero-carousel__slide"
              key={slide.id}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
            >
              <BannerSlide slide={slide} />
            </div>
          ))}
        </div>
      </div>

      <div className="hero-carousel__chrome">
        <div className="hero-carousel__dots" role="tablist" aria-label="Choose banner">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-label={`Banner ${index + 1}`}
              className={active === index ? "is-active" : undefined}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
        <div className="hero-carousel__nav">
          <Button
            variant="outline"
            size="icon"
            aria-label="Previous banner"
            onClick={() => scrollBy("left")}
            disabled={active === 0}
          >
            <ChevronLeft />
          </Button>
          <span className="hero-carousel__count">
            {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <Button
            variant="outline"
            size="icon"
            aria-label="Next banner"
            onClick={() => scrollBy("right")}
            disabled={active === slides.length - 1}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
