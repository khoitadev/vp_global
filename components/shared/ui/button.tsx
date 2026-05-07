"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/ui/cn";
import { trySmoothScrollToHash } from "@/lib/ui/smooth-hash-navigation";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type CommonButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsNativeProps = CommonButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
  };

type ButtonAsLinkProps = CommonButtonProps & {
  href: string;
  ariaLabel?: string;
};

type ButtonProps = ButtonAsNativeProps | ButtonAsLinkProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-primary !text-accent-contrast hover:bg-accent-primary-hover focus-visible:ring-accent-primary shadow-[0_8px_20px_var(--accent-glow)]",
  secondary:
    "border border-border-strong bg-surface !text-foreground hover:bg-surface-elevated hover:border-border-strong focus-visible:ring-accent-primary",
  ghost:
    "bg-transparent !text-foreground hover:bg-surface-elevated focus-visible:ring-accent-primary",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors motion-safe:transition-all motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-sm motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60";

export function Button(props: Readonly<ButtonProps>) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const computedClassName = cn(
    baseClass,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (typeof (props as ButtonAsLinkProps).href === "string") {
    const linkProps = props as ButtonAsLinkProps;
    const { href, ariaLabel } = linkProps;

    if (href.includes("#")) {
      return (
        <a
          href={href}
          className={computedClassName}
          aria-label={ariaLabel}
          onClick={(event) => {
            if (trySmoothScrollToHash(href)) {
              event.preventDefault();
            }
          }}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={computedClassName} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={computedClassName} {...rest}>
      {children}
    </button>
  );
}

