import type { Dictionary } from "@/lib/i18n/dictionaries";
import { SectionWrapper } from "@/components/shared/layout/section-wrapper";
import { Text } from "@/components/shared/typography/text";

type TestimonialsSectionProps = {
  dictionary: Dictionary;
};

export function TestimonialsSection({
  dictionary,
}: Readonly<TestimonialsSectionProps>) {
  const testimonials = dictionary.landing.testimonials;

  return (
    <SectionWrapper
      id="testimonials"
      title={
        <Text as="h2" variant="h2">
          {testimonials.title}
        </Text>
      }
      description={
        <Text variant="body" tone="secondary" className="max-w-3xl">
          {testimonials.description}
        </Text>
      }
    >
      <div className="reveal-stagger-fade grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.partnerCategories.map((category) => (
          <div
            key={category.name}
            className="premium-card rounded-xl border border-border-default bg-surface p-5"
          >
            <Text variant="caption" tone="muted" className="uppercase tracking-wider">
              {category.name}
            </Text>
            <ul className="mt-3 space-y-1.5">
              {category.partners.map((partner) => (
                <li
                  key={partner}
                  className="text-sm font-medium text-text-secondary"
                >
                  {partner}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
