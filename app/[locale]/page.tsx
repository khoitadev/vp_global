import { notFound } from "next/navigation";

import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { PageShell } from "@/components/shared/layout/page-shell";
import { JsonLd } from "@/components/shared/seo/json-ld";
import { hasLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { createHomeMetadata } from "@/lib/seo/metadata";
import {
  createBreadcrumbSchema,
  createLocalBusinessSchema,
  createOrganizationSchema,
  createWebPageSchema,
  createWebsiteSchema,
} from "@/lib/seo/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    return {};
  }

  const dictionary = await getDictionary(locale);
  return createHomeMetadata({ locale, dictionary });
}

export default async function LocalizedHomePage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  return (
    <PageShell locale={locale} dictionary={dictionary}>
      <JsonLd payload={createOrganizationSchema()} />
      <JsonLd payload={createWebsiteSchema(locale)} />
      <JsonLd payload={createWebPageSchema(locale)} />
      <JsonLd payload={createBreadcrumbSchema(locale)} />
      <JsonLd payload={createLocalBusinessSchema()} />

      <HeroSection locale={locale} dictionary={dictionary} />
      <AboutSection dictionary={dictionary} />
      <ServicesSection dictionary={dictionary} />
      <ProcessSection dictionary={dictionary} />
      <WhyChooseUsSection dictionary={dictionary} />
      <ProjectsSection dictionary={dictionary} />
      <TestimonialsSection dictionary={dictionary} />
      <ContactSection dictionary={dictionary} />
    </PageShell>
  );
}

