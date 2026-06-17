import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/site";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import JsonLd from "@/components/JsonLd";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://tbpm.com.au/${service.slug}`,
      images: [{ url: service.heroImage, alt: service.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.heroImage],
    },
  };
}

export default async function ServiceRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    serviceType: service.navLabel,
    url: `https://tbpm.com.au/${service.slug}`,
    areaServed: { "@type": "City", name: "Sydney" },
    provider: { "@id": "https://tbpm.com.au/#organization" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://tbpm.com.au" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://tbpm.com.au/services" },
      {
        "@type": "ListItem",
        position: 3,
        name: service.navLabel,
        item: `https://tbpm.com.au/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ServicePageTemplate service={service} />
    </>
  );
}
