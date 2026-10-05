import Link from "next/link";
import { fraunces } from "@/lib/fonts";

export default function BrandLogo() {
  return (
    <Link href="/" aria-label="szymon jurkun - strona główna" className="inline-flex min-h-[44px] items-center">
      <span
        className={`${fraunces.className} lowercase text-[1.05rem] font-semibold tracking-[-0.02em] text-[var(--text)]`}
      >
        szymon <span className="text-[var(--accent)]">jurkun</span>
      </span>
    </Link>
  );
}
