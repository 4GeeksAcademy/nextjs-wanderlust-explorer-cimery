"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const links = [
    { href: "/experiences", label: "Experiencias" },
    { href: "/favorites", label: "Favoritos" },
    { href: "/profile", label: "Perfil" },
  ];

  return (
    <header className={`site-nav ${className}`}>
      <Link aria-current={pathname === "/" ? "page" : undefined} className="brand" href="/">
        WANDERLUST<span>.</span>
      </Link>
      <nav className="site-nav-links" aria-label="Navegación principal">
        {links.map(({ href, label }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`);

          return (
            <Link aria-current={isActive ? "page" : undefined} href={href} key={href}>
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}