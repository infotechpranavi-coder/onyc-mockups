import { Instagram } from "lucide-react";
import { galleryPosts } from "@/lib/home-data";

export function InstagramGallery() {
  return (
    <section className="content-section gallery-section" aria-label="Instagram gallery">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Spotted in the wild</p>
          <h2 className="gallery-heading">
            Little looks, <em>big energy.</em>
          </h2>
        </div>
        <a
          className="social-link"
          href="https://instagram.com/onyc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram /> Follow us @onyc
        </a>
      </div>

      <div className="gallery-track">
        {galleryPosts.map((post, index) => (
          <a
            key={post.id}
            className={`gallery-card gallery-card--${index + 1}`}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${post.caption} on Instagram`}
          >
            <div className="gallery-card__media">
              <img src={post.image} alt={post.alt} loading="lazy" />
              <div className="gallery-card__overlay" aria-hidden="true">
                <span className="gallery-card__icon">
                  <Instagram strokeWidth={1.75} />
                </span>
              </div>
            </div>
            <div className="gallery-card__meta">
              <span className="gallery-card__tag">{post.tag}</span>
              <p className="gallery-card__caption">{post.caption}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
