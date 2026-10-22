"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/articles", label: "Writing" },
] as const;

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="flex flex-wrap items-center gap-1">
      {links.map(({ href, label }) => {
        const isActive =
          href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`inline-flex min-h-11 items-center px-3 text-[15px] font-medium transition-colors ${
              isActive
                ? "text-accent underline decoration-2 underline-offset-8"
                : "text-ink hover:text-accent"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
