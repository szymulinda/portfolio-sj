import Link from "next/link";
import { fraunces } from "@/lib/fonts";
import { mainNav } from "@/lib/navigation";
import NavbarChrome from "@/components/NavbarChrome";
import MobileNav from "@/components/MobileNav";
import NavLink from "@/components/NavLink";

export default function Navbar() {
  return (
    <NavbarChrome>
      <nav className="page-wrap relative flex h-16 items-center justify-between md:h-[72px]">
        <Link
          href="/"
          className={`${fraunces.className} text-[1.05rem] font-medium tracking-[-0.015em] text-[var(--text)]`}
        >
          szymonjurkun.pl
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
        <MobileNav>
          {mainNav.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </MobileNav>
      </nav>
    </NavbarChrome>
  );
}
