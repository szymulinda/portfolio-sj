import Link from "next/link";
import { footer, site } from "@/lib/content";
import { footerNav } from "@/lib/navigation";
import BrandLogo from "@/components/BrandLogo";
import { ibmPlexSans } from "@/lib/fonts";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="page-wrap flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-[20rem]">
          <BrandLogo />
          <p
            className={`${ibmPlexSans.className} mt-3 text-[12px] uppercase tracking-[0.2em] text-[var(--text-muted)]`}
          >
            strony internetowe · opole
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-[0.95rem] text-[var(--text-muted)]">
          {footerNav.map((item) => (
            <Link key={item.href} href={item.href} className="inline-flex min-h-[44px] items-center hover:text-[var(--accent)]">
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={`mailto:${site.email}`}
          className="text-[0.95rem] text-[var(--text-muted)] hover:text-[var(--accent)]"
        >
          {site.email}
        </a>
        <p className="text-[0.95rem] text-[var(--text-subtle)]">
          {footer.copyright}
          {" · "}
          <Link href="/polityka-prywatnosci" className="hover:text-[var(--accent)]">
            {footer.privacy}
          </Link>
        </p>
      </div>
    </footer>
  );
}
