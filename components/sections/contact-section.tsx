import type { Dictionary } from "@/lib/i18n/dictionaries";
import { SectionWrapper } from "@/components/shared/layout/section-wrapper";
import { Text } from "@/components/shared/typography/text";
import { Button } from "@/components/shared/ui/button";

type ContactSectionProps = {
  dictionary: Dictionary;
};

export function ContactSection({ dictionary }: Readonly<ContactSectionProps>) {
  const contact = dictionary.landing.contact;
  const fieldClass =
    "mt-1 w-full rounded-md border border-border-default bg-background px-3 py-2 text-sm text-foreground transition-colors focus-visible:border-border-strong";

  return (
    <SectionWrapper
      id="contact"
      title={
        <Text as="h2" variant="h2">
          {contact.title}
        </Text>
      }
      description={
        <Text variant="body" tone="secondary" className="max-w-3xl">
          {contact.description}
        </Text>
      }
    >
      <div className="grid gap-6 lg:grid-cols-5">
          <form
            className="premium-card reveal-from-left space-y-4 rounded-xl border border-border-default bg-surface p-5 lg:col-span-3"
            action={`mailto:${dictionary.ui.footer.emailValue}`}
            method="post"
            encType="text/plain"
            aria-label={contact.title}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="text-sm font-medium">
                  {contact.fields.name}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  autoComplete="name"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="contact-company" className="text-sm font-medium">
                  {contact.fields.company}
                </label>
                <input
                  id="contact-company"
                  name="company"
                  autoComplete="organization"
                  className={fieldClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-email" className="text-sm font-medium">
                {contact.fields.email}
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="contact-requirements" className="text-sm font-medium">
                {contact.fields.requirements}
              </label>
              <textarea
                id="contact-requirements"
                name="requirements"
                rows={5}
                required
                minLength={20}
                placeholder={contact.placeholders.requirements}
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" size="lg">
                {contact.submit}
              </Button>
              <Text variant="caption" tone="muted">
                {contact.responseTime}
              </Text>
            </div>
            <Text variant="caption" tone="muted">
              {contact.disclaimer}
            </Text>
          </form>
          <aside className="reveal-from-right space-y-4 lg:col-span-2">
            <div className="premium-card rounded-xl border border-border-default bg-surface p-5">
              <Text as="h3" variant="h3">
                {contact.contactInfoTitle}
              </Text>
              <ul className="mt-3 space-y-2">
                {contact.contactInfo.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-text-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border-default bg-surface-elevated p-5">
              <Text variant="caption" tone="muted" className="uppercase tracking-wider">
                {contact.ceoLabel}
              </Text>
              <Text variant="bodySm" className="mt-1 block font-semibold">
                {contact.ceoValue}
              </Text>
            </div>
            <div className="premium-card rounded-xl border border-border-default bg-surface p-5">
              <Text
                variant="caption"
                tone="muted"
                className="uppercase tracking-wider"
              >
                {contact.scheduleBox.title}
              </Text>
              <dl className="mt-3 space-y-3">
                {contact.scheduleBox.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-1 border-b border-border-default pb-3 last:border-b-0 last:pb-0"
                  >
                    <dt className="text-xs uppercase tracking-wider text-text-muted">
                      {item.label}
                    </dt>
                    <dd className="text-sm font-semibold text-foreground">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
      </div>
    </SectionWrapper>
  );
}
