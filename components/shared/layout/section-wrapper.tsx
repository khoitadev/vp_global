import type { ReactNode } from "react";

import { Container } from "@/components/shared/layout/container";
import { cn } from "@/lib/ui/cn";

type SectionTone = "default" | "muted";

type SectionWrapperProps = {
  id?: string;
  children: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  containerWidth?: "content" | "wide" | "full";
  tone?: SectionTone;
  className?: string;
};

const toneClasses: Record<SectionTone, string> = {
  default: "bg-transparent",
  muted: "bg-surface",
};

export function SectionWrapper({
  id,
  children,
  title,
  description,
  containerWidth = "wide",
  tone = "default",
  className,
}: Readonly<SectionWrapperProps>) {
  return (
    <section
      id={id}
      className={cn(
        "border-b border-border-default py-16 sm:py-20 lg:py-24",
        toneClasses[tone],
        className,
      )}
    >
      <Container width={containerWidth}>
        {(title ?? description) && (
          <header className="reveal-up mb-8 max-w-4xl space-y-3 sm:mb-10">
            {title}
            {description}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}

