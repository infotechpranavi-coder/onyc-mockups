import { useState } from "react";

import { ProductCard } from "@/components/ProductCard";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { products } from "@/lib/home-data";

export function ShopPage() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlisted, setWishlisted] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const toggleWishlist = (name: string) => {
    setWishlisted((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    );
  };

  return (
    <main className="min-h-screen bg-background text-foreground home-page home-page--2 home-page--shop">
      <div className="shop-announcement">
        Free shipping on orders over ₹1,499 · Easy returns, always
      </div>
      <SiteHeader cartCount={cartCount} variant="minimal" />

      <section className="shop-hero">
        <p className="eyebrow">The full collection</p>
        <h1>
          Shop all <em>pairs</em>
        </h1>
        <p className="shop-hero__lead">Premium kids footwear — playful colour, featherlight comfort, built for little adventures.</p>
      </section>

      <section className="content-section shop-grid-section" id="shop-grid">
        <div className="shop-product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              variant="minimal"
              linkToDetail
              wishlisted={wishlisted.includes(product.name)}
              onWishlist={() => toggleWishlist(product.name)}
              onAdd={() => setCartCount((count) => count + 1)}
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
    </main>
  );
}
