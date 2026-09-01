import { Link } from "@tanstack/react-router";

import { brandLogo } from "@/lib/home-data";

type BrandLogoProps = {
  className?: string;
  linkTo?: string;
  onClick?: () => void;
};

export function BrandLogo({ className = "", linkTo = "/home1", onClick }: BrandLogoProps) {
  const image = (
    <img src={brandLogo} alt="ONYC" className={`brand-logo ${className}`.trim()} width={120} height={40} />
  );

  if (onClick) {
    return (
      <Link to={linkTo} className="brand-logo-link" onClick={onClick} aria-label="ONYC home">
        {image}
      </Link>
    );
  }

  return (
    <Link to={linkTo} className="brand-logo-link" aria-label="ONYC home">
      {image}
    </Link>
  );
}
