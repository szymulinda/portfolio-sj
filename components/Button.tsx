import type { ReactNode } from "react";
import Link from "next/link";
import { fraunces } from "@/lib/fonts";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  target?: string;
  rel?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary: "btn-primary bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent-hover)]",
  secondary:
    "btn-secondary border-2 border-[rgba(26,26,23,0.22)] bg-transparent text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
};

const base = `${fraunces.className} inline-flex min-h-12 items-center justify-center rounded-[8px] px-8 py-4 text-center text-[16px] font-semibold leading-none`;

export default function Button({
  href,
  children,
  variant = "primary",
  type = "button",
  className = "",
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${disabled ? "pointer-events-none opacity-60" : ""} ${className}`;
  const content =
    variant === "primary" ? (
      <>
        {children}
        <span className="btn-arrow" aria-hidden="true">
          →
        </span>
      </>
    ) : (
      children
    );

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {content}
    </button>
  );
}
