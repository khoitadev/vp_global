"use client";

import type { ReactNode } from "react";

import { trySmoothScrollToHash } from "@/lib/ui/smooth-hash-navigation";

type SmoothSectionLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export function SmoothSectionLink({
  href,
  className,
  children,
}: Readonly<SmoothSectionLinkProps>) {
  return (
    <a
      href={href}
      className={className}
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
