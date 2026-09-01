import { ArrowRight, Instagram } from "lucide-react";

import { BrandLogo } from "@/components/layout/BrandLogo";
import { Button } from "@/components/ui/button";

type SiteFooterProps = {
  email: string;
  subscribed: boolean;
  onEmailChange: (value: string) => void;
  onSubscribe: () => void;
  variant?: "default" | "minimal" | "dark";
};

export function SiteFooter({ email, subscribed, onEmailChange, onSubscribe, variant = "default" }: SiteFooterProps) {
  return (
    <footer className={`site-footer${variant !== "default" ? ` site-footer--${variant}` : ""}`} id="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <BrandLogo className="brand-logo--footer" linkTo="/home1" />
          <p>
            Play loudly.
            <br />
            Move freely.
          </p>
          <div className="social-icons">
            <a href="#footer" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#footer" aria-label="Pinterest">
              <span className="pinterest-icon">P</span>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h3>Shop</h3>
            <a href="#new-arrivals">New arrivals</a>
            <a href="#sneakers">Sneakers</a>
            <a href="#girls">Girls</a>
            <a href="#boys">Boys</a>
            <a href="#toddlers">Toddlers</a>
          </div>
          <div>
            <h3>About</h3>
            <a href="#footer">Our story</a>
            <a href="#footer">Journal</a>
            <a href="#footer">Stores</a>
            <a href="#footer">Careers</a>
          </div>
          <div>
            <h3>Help</h3>
            <a href="#footer">Contact us</a>
            <a href="#footer">Shipping & returns</a>
            <a href="#footer">Size guide</a>
            <a href="#footer">FAQs</a>
          </div>
        </div>
        <div className="newsletter">
          <h3>Get the good stuff</h3>
          <p>New drops, tiny joys and 10% off your first pair.</p>
          {subscribed ? (
            <p className="subscribed-message">You’re on the list. See you soon ✳</p>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                onSubscribe();
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(event) => onEmailChange(event.target.value)}
                placeholder="Your email address"
                aria-label="Your email address"
              />
              <Button size="icon" aria-label="Subscribe">
                <ArrowRight />
              </Button>
            </form>
          )}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2024 ONYC. Designed for little legends.</span>
        <div>
          <a href="#footer">Privacy</a>
          <a href="#footer">Terms</a>
          <a href="#footer">India / INR</a>
        </div>
      </div>
    </footer>
  );
}
