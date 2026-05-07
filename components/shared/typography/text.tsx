import type { ReactNode } from "react";

import { cn } from "@/lib/ui/cn";

type TextVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "bodyLg"
  | "body"
  | "bodySm"
  | "caption";

type TextTone = "default" | "secondary" | "muted";
type TextTag = "p" | "span" | "h1" | "h2" | "h3" | "cite";

type TextProps = {
  as?: TextTag;
  variant?: TextVariant;
  tone?: TextTone;
  className?: string;
  children: ReactNode;
};

const variantClasses: Record<TextVariant, string> = {
  display:
    "text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl",
  h1: "text-3xl font-semibold leading-tight tracking-tight sm:text-4xl",
  h2: "text-2xl font-semibold leading-tight tracking-tight sm:text-3xl",
  h3: "text-xl font-semibold leading-tight tracking-tight sm:text-2xl",
  bodyLg: "text-lg leading-8 tracking-normal",
  body: "text-base leading-7",
  bodySm: "text-sm leading-6",
  caption: "text-xs leading-5 tracking-wide",
};

const toneClasses: Record<TextTone, string> = {
  default: "text-foreground",
  secondary: "text-text-secondary",
  muted: "text-text-muted",
};

export function Text({
  as: Component = "p",
  variant = "body",
  tone = "default",
  className,
  children,
}: Readonly<TextProps>) {
  return (
    <Component className={cn(variantClasses[variant], toneClasses[tone], className)}>
      {children}
    </Component>
  );
}

