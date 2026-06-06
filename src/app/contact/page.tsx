import { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Hubungi Kami',
  description: 'Hubungi PT Waschen Alora Indonesia untuk kebutuhan kerja sama, kemitraan B2B laundry komersial, sewa linen, cleaning service kantor, maupun pertanyaan umum.',
  openGraph: {
    title: 'Hubungi Kami | Waschen Alora Indonesia',
    description: 'Hubungi tim khusus kami untuk kemitraan korporat, laundry rumah sakit & hotel, atau jasa pembersihan komersial.',
    url: 'https://wascenalora.com/contact',
    siteName: 'Waschen Alora Indonesia',
    locale: 'id_ID',
    type: 'website',
  }
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Beranda",
        "item": "https://wascenalora.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Hubungi Kami",
        "item": "https://wascenalora.com/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactClient />
    </>
  );
}
