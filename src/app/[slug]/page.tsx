import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { keywordsData } from '@/lib/keywords-data';
import { KeywordLandingClient } from './KeywordLandingClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(keywordsData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = keywordsData[slug];

  if (!data) {
    return {};
  }

  const url = `https://wascenalora.com/${slug}`;

  return {
    title: data.title.id, // Primary title in Indonesian for local SEO
    description: data.description.id,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: data.title.id,
      description: data.description.id,
      url: url,
      siteName: 'Waschen Alora Indonesia',
      locale: 'id_ID',
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: data.title.id,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title.id,
      description: data.description.id,
      images: ['/og-image.jpg'],
    },
  };
}

export default async function KeywordPage({ params }: Props) {
  const { slug } = await params;
  const data = keywordsData[slug];

  if (!data) {
    notFound();
  }

  // Define structured data (JSON-LD)
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://wascenalora.com/#local-business-${slug}`,
    name: 'PT Waschen Alora Indonesia',
    image: 'https://wascenalora.com/og-image.jpg',
    url: `https://wascenalora.com/${slug}`,
    telephone: '+6285122333371',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Raffles Hills Blok T.11 No. 18, Leuwinanggung, Tapos',
      addressLocality: 'Depok City',
      addressRegion: 'West Java',
      postalCode: '16454',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.384666,
      longitude: 106.902264,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    sameAs: [
      'https://waschenlaundry.com/',
      'https://www.ikmalora.com/',
      'https://cleanoxindonesia.com/',
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: data.serviceName.id,
    provider: {
      '@type': 'LocalBusiness',
      name: 'PT Waschen Alora Indonesia',
      telephone: '+6285122333371',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: data.locationName.id,
    },
    description: data.descriptionDetailed.id,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q.id,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a.id,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Beranda',
        item: 'https://wascenalora.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: data.serviceName.id,
        item: `https://wascenalora.com/${slug}`,
      },
    ],
  };

  return (
    <>
      {/* Inject Schema Markups */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <KeywordLandingClient data={data} slug={slug} />
    </>
  );
}
