import Link from "next/link";
import type { ReactNode } from "react";

export const inlineLinkClass =
  "text-[var(--text)] underline decoration-[var(--line)] underline-offset-4 hover:text-[var(--accent)]";

export function InlineLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={inlineLinkClass}>
      {children}
    </Link>
  );
}

export function LinkedText({
  text,
  href,
  anchor,
}: {
  text: string;
  href: string;
  anchor: string;
}) {
  const index = text.indexOf(anchor);
  if (index === -1) {
    throw new Error(`Kotwica "${anchor}" nie występuje w tekście.`);
  }

  return (
    <>
      {text.slice(0, index)}
      <InlineLink href={href}>{anchor}</InlineLink>
      {text.slice(index + anchor.length)}
    </>
  );
}
