import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { homeVariants, navLinks, type NavLink } from "@/lib/home-data";

function isNavLinkActive(pathname: string, link: NavLink) {
  if (link.activePrefix) {
    return pathname === link.activePrefix || pathname.startsWith(`${link.activePrefix}/`);
  }
  if (link.hash) {
    return pathname === link.to;
  }
  return pathname === link.to;
}

type SiteHeaderProps = {
  cartCount: number;
  onSearchToggle?: () => void;
  searchOpen?: boolean;
  onSearchClose?: () => void;
  variant?: "light" | "dark" | "minimal";
};

export function SiteHeader({
  cartCount,
  searchOpen = false,
  onSearchClose,
  variant = "light",
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [localSearchOpen, setLocalSearchOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const activeHome = homeVariants.find((h) => h.path === pathname);
  const isSearchOpen = searchOpen || localSearchOpen;

  const toggleSearch = () => {
    if (onSearchClose && localSearchOpen) {
      onSearchClose();
      setLocalSearchOpen(false);
    } else {
      setLocalSearchOpen((current) => !current);
    }
  };

  const closeSearch = () => {
    setLocalSearchOpen(false);
    onSearchClose?.();
  };

  return (
    <>
      <header className={`site-header site-header--${variant}`}>
        <div className="header-inner">
          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu-button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu />
          </Button>

          <BrandLogo />

          <nav className="desktop-nav" aria-label="Main navigation">
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-home-trigger" aria-label="Home page variants">
                Home
                <ChevronDown />
                {activeHome && <span className="nav-home-active">{activeHome.label.replace("Home ", "")}</span>}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="nav-home-dropdown">
                {homeVariants.map((home) => (
                  <DropdownMenuItem key={home.id} asChild>
                    <Link
                      to={home.path}
                      className={pathname === home.path ? "nav-home-option is-active" : "nav-home-option"}
                    >
                      <span className="nav-home-option-label">{home.label}</span>
                      <span className="nav-home-option-tag">{home.tagline}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                hash={link.hash}
                className={isNavLinkActive(pathname, link) ? "is-active" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Button variant="ghost" size="icon" aria-label="Search" onClick={toggleSearch}>
              <Search />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Account">
              <UserRound />
            </Button>
            <Button variant="ghost" size="icon" aria-label={`Shopping bag, ${cartCount} items`} className="bag-button">
              <ShoppingBag />
              <span>{cartCount}</span>
            </Button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="search-drawer">
            <Search />
            <input autoFocus placeholder="Search tiny adventures" aria-label="Search products" />
            <Button variant="ghost" size="icon" aria-label="Close search" onClick={closeSearch}>
              <X />
            </Button>
          </div>
        )}
      </header>

      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
          <aside className="mobile-menu" onClick={(event) => event.stopPropagation()}>
            <div className="mobile-menu-top">
              <BrandLogo onClick={() => setMenuOpen(false)} />
              <Button variant="ghost" size="icon" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                <X />
              </Button>
            </div>

            <p className="mobile-menu-label">Home mockups</p>
            {homeVariants.map((home) => (
              <Link
                to={home.path}
                onClick={() => setMenuOpen(false)}
                key={home.id}
                className={pathname === home.path ? "mobile-home-link is-active" : "mobile-home-link"}
              >
                <span>
                  {home.label}
                  <small>{home.tagline}</small>
                </span>
                <ArrowRight />
              </Link>
            ))}

            <p className="mobile-menu-label">Shop</p>
            {navLinks.map((link) => (
              <Link
                to={link.to}
                hash={link.hash}
                onClick={() => setMenuOpen(false)}
                key={link.label}
                className={isNavLinkActive(pathname, link) ? "is-active" : undefined}
              >
                {link.label}
                <ArrowRight />
              </Link>
            ))}
          </aside>
        </div>
      )}
    </>
  );
}
