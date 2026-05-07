import type { ReactNode } from "react";

import { cn } from "@/lib/ui/cn";

type MotionPrimitiveProps = {
  children: ReactNode;
  className?: string;
};

export function FadeIn({ children, className }: Readonly<MotionPrimitiveProps>) {
  return <div className={cn("motion-safe-fade-in", className)}>{children}</div>;
}

export function FadeInUp({
  children,
  className,
}: Readonly<MotionPrimitiveProps>) {
  return <div className={cn("motion-safe-fade-in-up", className)}>{children}</div>;
}

