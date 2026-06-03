import { Metadata } from 'next';
import { AboutClient } from './AboutClient';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Kenali lebih dekat PT Waschen Alora Indonesia, visi & misi kami, nilai-nilai korporat PRECISE, serta program peningkatan kualitas tim seperti Alora Award, Alora Outing, dan Alora Academy.',
  openGraph: {
    title: 'Tentang Kami | Waschen Alora Indonesia',
    description: 'Kenali lebih dekat PT Waschen Alora Indonesia, visi & misi kami, nilai-nilai korporat PRECISE, serta program peningkatan kualitas tim.',
    url: 'https://waschen-alora.com/about',
    siteName: 'Waschen Alora Indonesia',
    locale: 'id_ID',
    type: 'website',
  }
};

export default function AboutPage() {
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
        "name": "Tentang Kami",
        "item": "https://waschen-alora.com/about"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutClient />
    </>
  );
}
