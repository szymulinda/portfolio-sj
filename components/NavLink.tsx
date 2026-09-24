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
      className={`text-[0.95rem] font-medium hover:text-[var(--accent)] ${
        active
          ? "text-[var(--text)] underline decoration-[var(--accent)] underline-offset-4"
          : "text-[var(--text)]"
      }`}
    >
      {children}
    </Link>
  );
}
