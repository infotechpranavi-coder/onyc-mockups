import { Sparkles } from "lucide-react";

import { comparisonRows } from "@/lib/home-data";

type VsCompareSectionProps = {
  variant?: "light" | "dark";
};

export function VsCompareSection({ variant = "light" }: VsCompareSectionProps) {
  return (
    <section className={`vs-compare vs-compare--${variant}`} aria-label="ONYC vs others">
      <div className="vs-compare__inner">
        <div className="vs-compare__intro">
          <p className="vs-compare__eyebrow type-eyebrow">The ONYC difference</p>
          <h2 className="type-heading">
            <em>Us vs</em> the rest — built for little feet.
          </h2>
          <p className="vs-compare__lead type-lead">Playful where it counts — premium where it matters.</p>
        </div>

        <div className="vs-compare__card">
          <div className="vs-compare__header">
            <span className="vs-compare__brand">ONYC</span>
            <span className="vs-compare__vs" aria-hidden="true">
              vs
            </span>
            <span className="vs-compare__others-head">Others</span>
          </div>

          <ul className="vs-compare__list">
            {comparisonRows.map((row) => (
              <li className="vs-compare__item" key={row.label}>
                <span className="vs-compare__pill">{row.label}</span>
                <div className="vs-compare__matchup">
                  <div className="vs-compare__side vs-compare__side--win">
                    <span className="vs-compare__side-label">
                      <Sparkles aria-hidden="true" />
                      ONYC
                    </span>
                    <p>{row.onyc}</p>
                  </div>
                  <div className="vs-compare__side vs-compare__side--other">
                    <span className="vs-compare__side-label">Others</span>
                    <p>{row.others}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="vs-compare__footer-note">
          <span>✳</span> Little feet deserve better than stiff, slippery, lace-up drama.
        </p>
      </div>
    </section>
  );
}
