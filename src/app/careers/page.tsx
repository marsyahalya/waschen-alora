import { Metadata } from 'next';
import { CareersClient } from './CareersClient';

export const metadata: Metadata = {
  title: 'Karir',
  description: 'Bergabunglah dengan PT Waschen Alora Indonesia dan jadilah bagian dari perjalanan kami menuju keunggulan dalam layanan commercial laundry dan cleaning service.',
  openGraph: {
    title: 'Karir | Waschen Alora Indonesia',
    description: 'Temukan peluang karir menarik di PT Waschen Alora Indonesia. Tumbuh dan berkembang bersama tim profesional kami.',
    url: 'https://waschen-alora.com/careers',
    siteName: 'Waschen Alora Indonesia',
    locale: 'id_ID',
    type: 'website',
  }
};

export default function CareersPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Beranda",
        "item": "https://waschen-alora.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Karir",
        "item": "https://waschen-alora.com/careers"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CareersClient />
    </>
  );
}
