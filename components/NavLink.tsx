"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { ReactNode } from "react";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className="nav-link inline-flex min-h-[44px] items-center text-[0.95rem] font-medium text-[var(--text)] hover:text-[var(--accent)]"
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
