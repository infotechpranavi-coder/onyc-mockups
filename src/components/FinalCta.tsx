import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="final-cta" aria-label="Shop ONYC">
      <div className="final-cta__bg" aria-hidden="true">
        <span className="final-cta__blob final-cta__blob--1" />
        <span className="final-cta__blob final-cta__blob--2" />
        <span className="final-cta__ring final-cta__ring--1" />
        <span className="final-cta__ring final-cta__ring--2" />
        <span className="final-cta__star final-cta__star--1">✳</span>
        <span className="final-cta__star final-cta__star--2">★</span>
        <span className="final-cta__star final-cta__star--3">✦</span>
        <span className="final-cta__dot final-cta__dot--1" />
        <span className="final-cta__dot final-cta__dot--2" />
        <span className="final-cta__dot final-cta__dot--3" />
      </div>

      <p className="final-cta__eyebrow">The good stuff starts here</p>
      <h2 className="final-cta__title">
        Ready for their
        <br />
        <em>next adventure?</em>
      </h2>
      <p className="final-cta__sub">
        Playful pairs for park days, first steps &amp; everything in between.
      </p>
      <Button asChild size="lg" className="final-cta__btn">
        <a href="#new-arrivals">
          Shop ONYC <ArrowRight />
        </a>
      </Button>
    </section>
  );
}
