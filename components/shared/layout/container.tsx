import type { ReactNode } from "react";

import { cn } from "@/lib/ui/cn";

type ContainerWidth = "content" | "wide" | "full";

type ContainerProps = {
  children: ReactNode;
  width?: ContainerWidth;
  className?: string;
};

const widthClasses: Record<ContainerWidth, string> = {
  content: "max-w-5xl",
  wide: "max-w-7xl",
  full: "max-w-none",
};

export function Container({
  children,
  width = "wide",
  className,
}: Readonly<ContainerProps>) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        widthClasses[width],
        className,
      )}
    >
      {children}
    </div>
  );
}

