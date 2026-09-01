import { Link } from "@tanstack/react-router";
import { Heart, Search, ShoppingBag, Star } from "lucide-react";
import type { ReactNode } from "react";

import type { Product } from "@/lib/home-data";

type ProductCardProps = {
  product: Product;
  wishlisted: boolean;
  onWishlist: () => void;
  onAdd: () => void;
  variant?: "default" | "minimal" | "dark";
  layout?: "default" | "premium" | "editorial";
  linkToDetail?: boolean;
};

function ProductPricing({
  product,
  layout = "default",
}: {
  product: Product;
  layout?: "default" | "premium" | "editorial";
}) {
  if (layout === "premium") {
    return (
      <div className="product-card__price-block">
        <strong>{product.price}</strong>
        {product.originalPrice && <s>{product.originalPrice}</s>}
      </div>
    );
  }

  if (layout === "editorial") {
    return (
      <div className="product-card__editorial-price">
        <strong>{product.price}</strong>
        {product.originalPrice && <s>{product.originalPrice}</s>}
      </div>
    );
  }

  return (
    <div className="product-pricing">
      <strong>{product.price}</strong>
      {product.originalPrice && <s>{product.originalPrice}</s>}
    </div>
  );
}

export function ProductCard({
  product,
  wishlisted,
  onWishlist,
  onAdd,
  variant = "default",
  layout = "default",
  linkToDetail = false,
}: ProductCardProps) {
  const variantClass = variant !== "default" ? ` product-card--${variant}` : "";
  const layoutClass =
    layout === "premium" ? " product-card--premium" : layout === "editorial" ? " product-card--editorial" : "";

  const wrapLink = (node: ReactNode) => {
    if (!linkToDetail) return node;
    return (
      <Link to="/shop/$slug" params={{ slug: product.slug }} className="product-card-link">
        {node}
      </Link>
    );
  };

  if (layout === "editorial") {
    return wrapLink(
      <article className={`product-card${variantClass}${layoutClass}`}>
        <div className="product-card__editorial-visual">
          {product.onSale && <span className="product-card__editorial-tag">Sale</span>}
          <button
            type="button"
            className={wishlisted ? "product-card__editorial-wish is-wishlisted" : "product-card__editorial-wish"}
            aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onWishlist();
            }}
          >
            <Heart fill={wishlisted ? "currentColor" : "none"} strokeWidth={1.75} />
          </button>
          <img src={product.image} alt={`${product.name} kids shoes`} loading="lazy" />
          <div className="product-card__editorial-overlay">
            <h3>{product.name}</h3>
            <ProductPricing product={product} layout="editorial" />
          </div>
        </div>
      </article>,
    );
  }

  if (layout === "premium") {
    return wrapLink(
      <article className={`product-card${variantClass}${layoutClass}`}>
        <div className="product-card__media">
          {product.onSale && <span className="product-card__sale-pill">Sale</span>}
          <button
            type="button"
            className={wishlisted ? "product-card__wish is-wishlisted" : "product-card__wish"}
            aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onWishlist();
            }}
          >
            <Heart fill={wishlisted ? "currentColor" : "none"} strokeWidth={1.75} />
          </button>
          <img src={product.image} alt={`${product.name} kids shoes`} loading="lazy" />
        </div>
        <div className="product-card__footer">
          <h3>{product.name}</h3>
          <ProductPricing product={product} layout="premium" />
        </div>
      </article>,
    );
  }

  return wrapLink(
    <article className={`product-card${variantClass}`}>
      <div className="product-image">
        {product.onSale && <span className="product-sale-badge">Sale</span>}
        <img src={product.image} alt={`${product.name} ${product.color} kids shoes`} loading="lazy" />
        <div className="product-image-dots" aria-hidden="true">
          <span className="is-active" />
          <span />
          <span />
        </div>
        <div className="product-actions">
          <button
            type="button"
            className="product-action-btn"
            aria-label={`Add ${product.name} to bag`}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onAdd();
            }}
          >
            <ShoppingBag />
          </button>
          <button type="button" className="product-action-btn" aria-label={`Quick view ${product.name}`}>
            <Search />
          </button>
          <button
            type="button"
            className={wishlisted ? "product-action-btn is-wishlisted" : "product-action-btn"}
            aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onWishlist();
            }}
          >
            <Heart fill={wishlisted ? "currentColor" : "none"} />
          </button>
        </div>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <ProductPricing product={product} />
        <p className="product-color">{product.color}</p>
        <div className="product-rating">
          <span>
            <Star fill="currentColor" /> {product.rating}
          </span>
          <span className="product-play-tag">Kids pick</span>
        </div>
      </div>
    </article>,
  );
}
