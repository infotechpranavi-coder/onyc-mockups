import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Award,
  Check,
  ChevronRight,
  Footprints,
  Heart,
  MapPin,
  Minus,
  Package,
  Plus,
  RotateCcw,
  Shield,
  Sparkles,
  Star,
  Truck,
  Wallet,
} from "lucide-react";
import { useMemo, useState, type CSSProperties } from "react";

import { ProductCard } from "@/components/ProductCard";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/home-data";
import { lifestyleImages, products } from "@/lib/home-data";
import {
  bundleOffers,
  customerReviews,
  deliveryPoints,
  enrichProduct,
  getStockUrgency,
  pdpFeatures,
  ratingDistribution,
  refundPolicy,
  reviewPhotos,
  reviewSortOptions,
  trustBadges,
} from "@/lib/pdp-data";

const featureIcons = {
  foot: Footprints,
  slip: Sparkles,
  clean: Sparkles,
  daily: Package,
};

const trustIcons = {
  return: RotateCcw,
  trophy: Award,
  cod: Wallet,
};

type ProductDetailPageProps = {
  product: Product;
};

export function ProductDetailPage({ product: rawProduct }: ProductDetailPageProps) {
  const product = useMemo(() => enrichProduct(rawProduct), [rawProduct]);
  const stockUrgency = useMemo(() => getStockUrgency(product.slug), [product.slug]);
  const [cartCount, setCartCount] = useState(0);
  const [wishlisted, setWishlisted] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [selectedColorId, setSelectedColorId] = useState(
    () => product.colors.find((color) => color.available)?.id ?? product.colors[0]?.id ?? "",
  );
  const selectedColorOption = product.colors.find((color) => color.id === selectedColorId) ?? product.colors[0];
  const [selectedSize, setSelectedSize] = useState(
    () => product.sizes.find((size) => size.available)?.label ?? product.sizes[0]?.label ?? "",
  );
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState("");
  const [reviewSort, setReviewSort] = useState<(typeof reviewSortOptions)[number]>("Most recent");
  const [relatedIndex, setRelatedIndex] = useState(0);

  const related = products.filter((item) => item.slug !== product.slug);
  const relatedVisible = related.slice(relatedIndex, relatedIndex + 1);
  const maxRatingCount = Math.max(...ratingDistribution.map((row) => row.count), 1);

  const toggleWishlist = (name: string) => {
    setWishlisted((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    );
  };

  const addToCart = () => setCartCount((count) => count + quantity);

  return (
    <main className="min-h-screen bg-background text-foreground home-page home-page--2 home-page--shop pdp-page">
      <div className="shop-announcement">
        Free shipping on orders over ₹1,499 · Easy returns, always
      </div>
      <SiteHeader cartCount={cartCount} variant="minimal" />

      <section className="product-detail">
        <Link to="/shop" className="product-detail__back">
          <ArrowLeft /> Back to shop
        </Link>

        <div className="product-detail__layout">
          <div className="product-detail__gallery">
            <div
              className="product-detail__main-image"
              style={{ "--pdp-color-tint": selectedColorOption?.hex } as CSSProperties}
            >
              {product.onSale && <span className="product-detail__sale-pill">Sale</span>}
              <img src={product.image} alt={`${product.name} kids shoes — ${selectedColorOption?.name ?? product.color}`} />
            </div>
            <div className="product-detail__thumbs">
              <button type="button" className="is-active" aria-label="Product view">
                <img src={product.image} alt="" />
              </button>
              <button type="button" aria-label="Lifestyle view">
                <img src={lifestyleImages.bunnyKids} alt="" />
              </button>
            </div>
          </div>

          <div className="product-detail__info">
            <div className="pdp-buy-box">
            <p className="pdp-eyebrow">ONYC kids</p>
            <h1>{product.name}</h1>
            {product.tagline && <p className="product-detail__tagline">{product.tagline}</p>}

            <div className="pdp-price-block">
              <div className="product-detail__meta">
                <div className="product-detail__price">
                  <strong>{product.price}</strong>
                  {product.originalPrice && <s>{product.originalPrice}</s>}
                </div>
                <span className="product-detail__rating">
                  <Star fill="currentColor" /> {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <div className={`pdp-urgency pdp-urgency--${stockUrgency.level}`}>
                <p className="pdp-urgency__message">{stockUrgency.message}</p>
                <div className="pdp-urgency__track" aria-hidden="true">
                  <div className="pdp-urgency__fill" style={{ width: `${stockUrgency.barPercent}%` }} />
                </div>
              </div>

              <div className="pdp-qty-row">
                <span className="pdp-qty-label">Qty</span>
                <div className="pdp-qty">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  >
                    <Minus />
                  </button>
                  <span>{quantity}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((value) => value + 1)}
                  >
                    <Plus />
                  </button>
                </div>
              </div>
            </div>

            <p className="product-detail__description">{product.description}</p>

            <div className="pdp-age-note">
              <Heart aria-hidden="true" />
              <p>Just choose your little one&apos;s age, and we&apos;ll deliver the perfect size!</p>
            </div>

            <p className="pdp-shipping-tag">
              <Truck aria-hidden="true" /> Free shipping on all prepaid orders
            </p>

            <div className="pdp-color">
              <div className="pdp-color-header">
                <span className="pdp-field-label">
                  Color: <strong>{selectedColorOption?.name ?? product.color}</strong>
                </span>
                <span className="pdp-color-count">{product.colors.length} options</span>
              </div>
              <div className="pdp-color-options" role="listbox" aria-label="Choose color">
                {product.colors.map((swatch) => (
                  <button
                    key={swatch.id}
                    type="button"
                    role="option"
                    aria-selected={selectedColorId === swatch.id}
                    aria-disabled={!swatch.available}
                    disabled={!swatch.available}
                    className={[
                      "pdp-color-option",
                      selectedColorId === swatch.id ? "is-active" : "",
                      !swatch.available ? "is-unavailable" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => swatch.available && setSelectedColorId(swatch.id)}
                  >
                    <span
                      className="pdp-color-option__preview"
                      style={{ backgroundColor: `color-mix(in srgb, ${swatch.hex} 28%, white)` }}
                    >
                      <img src={swatch.image} alt="" />
                      <span
                        className="pdp-color-option__dot"
                        style={{ backgroundColor: swatch.hex }}
                        aria-hidden="true"
                      />
                    </span>
                    <span className="pdp-color-option__meta">
                      <strong>{swatch.name}</strong>
                      <span>{swatch.available ? "In stock" : "Sold out"}</span>
                    </span>
                    {selectedColorId === swatch.id && (
                      <span className="pdp-color-option__check" aria-hidden="true">
                        <Check />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="pdp-size">
              <div className="pdp-size-header">
                <span className="pdp-field-label">Size:</span>
                <button type="button" className="pdp-size-chart">
                  Size chart
                </button>
              </div>
              <div className="pdp-size-grid">
                {product.sizes.map((size) => (
                  <button
                    key={size.label}
                    type="button"
                    className={[
                      selectedSize === size.label ? "is-active" : "",
                      !size.available ? "is-unavailable" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    disabled={!size.available}
                    onClick={() => size.available && setSelectedSize(size.label)}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            <ul className="pdp-features">
              {pdpFeatures.map((feature) => {
                const Icon = featureIcons[feature.icon];
                return (
                  <li key={feature.label}>
                    <span className="pdp-feature-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    {feature.label}
                  </li>
                );
              })}
            </ul>

            <div className="pdp-offers">
              {bundleOffers.map((offer) => (
                <article key={offer.title} className="pdp-offer-card">
                  <h3>{offer.title}</h3>
                  <p>{offer.detail}</p>
                  <button type="button">Auto Applies at Checkout</button>
                </article>
              ))}
            </div>

            <div className="pdp-pincode">
              <div className="pdp-pincode-head">
                <MapPin aria-hidden="true" />
                <span>Check Delivery Date</span>
              </div>
              <div className="pdp-pincode-row">
                <input
                  value={pincode}
                  onChange={(event) => setPincode(event.target.value)}
                  placeholder="Check Pincode Availability ex. 110001"
                  aria-label="Pincode"
                />
                <button type="button">Check</button>
              </div>
            </div>

            <p className="pdp-secure">
              <Shield aria-hidden="true" /> 100% Secure Transaction
            </p>

            <div className="pdp-desktop-actions">
              <Button className="button-primary pdp-btn-cart" onClick={addToCart}>
                Add to cart
              </Button>
              <Button className="pdp-btn-buy" onClick={addToCart}>
                Buy now
              </Button>
              <Button
                variant="outline"
                size="icon"
                className={wishlisted.includes(product.name) ? "product-detail__wish is-wishlisted" : "product-detail__wish"}
                aria-label={wishlisted.includes(product.name) ? "Remove from wishlist" : "Add to wishlist"}
                onClick={() => toggleWishlist(product.name)}
              >
                <Heart fill={wishlisted.includes(product.name) ? "currentColor" : "none"} />
              </Button>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pdp-trust">
        <h2>Why moms trust ONYC</h2>
        <div className="pdp-trust-grid">
          {trustBadges.map((badge) => {
            const Icon = trustIcons[badge.icon];
            return (
              <div key={badge.label}>
                <Icon aria-hidden="true" />
                <span>{badge.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="pdp-delivery">
        <h2>Delivery</h2>
        <ul>
          {deliveryPoints.map((point) => (
            <li key={point}>
              <Check aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="pdp-accordions">
        <Accordion type="multiple" defaultValue={["refunds"]}>
          <AccordionItem value="refunds" className="pdp-accordion-item">
            <AccordionTrigger className="pdp-accordion-trigger">Refunds &amp; Timeline</AccordionTrigger>
            <AccordionContent className="pdp-accordion-content">
              <p>
                <strong>Prepaid Orders:</strong> {refundPolicy.prepaid}
              </p>
              <p>
                <strong>COD Orders:</strong> {refundPolicy.cod}
              </p>
              <p>
                <em>Note:</em> {refundPolicy.note}
              </p>
              <p>{refundPolicy.condition}</p>
              <p>
                <strong>Exclusions:</strong>
              </p>
              <ul>
                {refundPolicy.exclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                <strong>Contact Us:</strong>
              </p>
              <p>
                WhatsApp: {refundPolicy.contact.whatsapp} · Instagram: {refundPolicy.contact.instagram}
              </p>
              <p>
                <em>{refundPolicy.contact.hours}</em>
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="additional" className="pdp-accordion-item">
            <AccordionTrigger className="pdp-accordion-trigger">Additional Info</AccordionTrigger>
            <AccordionContent className="pdp-accordion-content">
              <p>
                <strong>SKU:</strong> {product.sku}
              </p>
              <p>
                <strong>Country of Origin:</strong> {product.additionalInfo.countryOfOrigin}
              </p>
              <p>
                <strong>Manufacturer &amp; Marketer:</strong>
              </p>
              <p>{product.additionalInfo.manufacturer}</p>
              <p>{product.additionalInfo.address}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="pdp-reviews">
        <div className="pdp-reviews-head">
          <div>
            <h2>Customer Reviews</h2>
            <p className="pdp-reviews-score">
              <strong>{product.rating}</strong> {product.reviewCount} reviews
            </p>
          </div>
          <Button className="pdp-write-review">Write a review</Button>
        </div>

        <div className="pdp-review-photos">
          {reviewPhotos.map((photo) => (
            <img key={photo} src={photo} alt="Customer photo" />
          ))}
          <button type="button" className="pdp-review-photos-more" aria-label="More photos">
            <ChevronRight />
          </button>
        </div>

        <div className="pdp-rating-bars">
          {ratingDistribution.map((row) => (
            <div key={row.stars} className="pdp-rating-row">
              <span>{row.stars}</span>
              <div className="pdp-rating-track">
                <div
                  className="pdp-rating-fill"
                  style={{ width: `${(row.count / maxRatingCount) * 100}%` }}
                />
              </div>
              <span>{row.count}</span>
            </div>
          ))}
        </div>

        <div className="pdp-review-filters">
          <button type="button" className="pdp-filter-btn" aria-label="Filter reviews">
            Filter
          </button>
          <select value={reviewSort} onChange={(event) => setReviewSort(event.target.value as typeof reviewSort)}>
            {reviewSortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="pdp-review-list">
          {customerReviews.map((review) => (
            <article key={review.id} className="pdp-review-card">
              <div className="pdp-review-avatar">{review.author[0]}</div>
              <div>
                <p className="pdp-review-author">{review.author}</p>
                <p className="pdp-review-title">
                  {review.title}{" "}
                  <span aria-hidden="true">{"★".repeat(review.rating)}</span>
                </p>
                <p className="pdp-review-body">{review.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section pdp-pairs">
        <h2>
          Pairs well <em>with</em>
        </h2>
        <div className="pdp-pairs-carousel">
          {relatedVisible.map((item) => (
            <ProductCard
              key={item.slug}
              product={item}
              variant="minimal"
              linkToDetail
              wishlisted={wishlisted.includes(item.name)}
              onWishlist={() => toggleWishlist(item.name)}
              onAdd={() => setCartCount((count) => count + 1)}
            />
          ))}
        </div>
        <div className="pdp-pairs-dots">
          {related.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              className={relatedIndex === index ? "is-active" : undefined}
              aria-label={`Show ${item.name}`}
              onClick={() => setRelatedIndex(index)}
            />
          ))}
        </div>
      </section>

      <SiteFooter
        email={email}
        subscribed={subscribed}
        onEmailChange={setEmail}
        onSubscribe={() => email.trim() && setSubscribed(true)}
      />

      <div className="pdp-sticky-bar">
        <Button className="pdp-btn-cart" onClick={addToCart}>
          Add to cart
        </Button>
        <Button className="pdp-btn-buy" onClick={addToCart}>
          Buy now
        </Button>
      </div>
    </main>
  );
}
