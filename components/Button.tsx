import type { ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--accent)]",
  secondary:
    "bg-transparent text-[var(--text)] ring-1 ring-inset ring-[var(--line)] hover:ring-[var(--line-strong)]",
};

const base =
  "inline-flex items-center justify-center rounded-[8px] px-6 py-3 text-[0.95rem] font-medium";

export default function Button({
  href,
  children,
  variant = "primary",
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${disabled ? "pointer-events-none opacity-60" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
