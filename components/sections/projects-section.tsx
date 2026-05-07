import type { Dictionary } from "@/lib/i18n/dictionaries";
import { SectionWrapper } from "@/components/shared/layout/section-wrapper";
import { Text } from "@/components/shared/typography/text";

type ProjectsSectionProps = {
  dictionary: Dictionary;
};

export function ProjectsSection({ dictionary }: Readonly<ProjectsSectionProps>) {
  const projects = dictionary.landing.projects;

  return (
    <SectionWrapper
      id="projects"
      tone="muted"
      title={
        <Text as="h2" variant="h2">
          {projects.title}
        </Text>
      }
      description={
        <Text variant="body" tone="secondary" className="max-w-3xl">
          {projects.description}
        </Text>
      }
    >
      <div className="reveal-stagger-alternate grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {projects.items.map((item) => (
            <article
              key={item.name}
              className="premium-card flex flex-col overflow-hidden rounded-xl border border-border-default bg-background"
            >
              <figure className="factory-figure factory-figure--3-2 rounded-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  width={1600}
                  height={1132}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="flex flex-1 flex-col p-5">
                <span
                  aria-hidden
                  className="self-start rounded-md border border-border-default bg-surface-elevated px-2 py-0.5 text-xs font-medium text-text-secondary"
                >
                  {item.industry}
                </span>
                <Text as="h3" variant="h3" className="mt-3">
                  {item.name}
                </Text>
                <Text variant="caption" tone="muted" className="mt-1 block">
                  {item.client}
                </Text>
                <Text variant="bodySm" tone="secondary" className="mt-3">
                  {item.summary}
                </Text>
                <ul className="mt-4 space-y-2 border-t border-border-default pt-3">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-xs text-text-secondary"
                    >
                      <span
                        aria-hidden
                        className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
      </div>
    </SectionWrapper>
  );
}
