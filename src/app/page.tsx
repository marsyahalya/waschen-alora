import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { FloatingStats } from '@/components/sections/FloatingStats';
import { Trust } from '@/components/sections/Trust';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { Services } from '@/components/sections/Services';
import { Workflow } from '@/components/sections/Workflow';
import { Gallery } from '@/components/sections/Gallery';
import { TestimonialsSection } from '@/components/sections/Testimonials';
import { Sustainability } from '@/components/sections/Sustainability';
import { ContactSection } from '@/components/sections/Contact';
import { SocialMediaSection } from '@/components/sections/SocialMedia';
import { AnimatedContent } from '@/components/animations/AnimatedContent';

export const metadata: Metadata = {
  title: "Solusi Laundry Komersial & Cleaning Service Indonesia",
  description: "PT Waschen Alora Indonesia menyediakan layanan commercial laundry, sewa linen rumah sakit (healthcare linen), laundry hotel, laundry korporat, serta cleaning service rumah & kantor dengan standar higienis dan terpercaya.",
  openGraph: {
    title: "PT Waschen Alora Indonesia - Laundry Komersial & Jasa Kebersihan",
    description: "Solusi commercial laundry, manajemen linen rumah sakit, laundry hotel, laundry korporat, serta cleaning service rumah & kantor terpercaya.",
    url: "https://waschen-alora.com",
    type: "website",
  }
};

export default function Home() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://waschen-alora.com/#organization",
    "name": "PT Waschen Alora Indonesia",
    "url": "https://waschen-alora.com",
    "logo": "https://waschen-alora.com/logo-new-landscape.png",
    "sameAs": [
      "https://waschenlaundry.com/",
      "https://www.ikmalora.com/",
      "https://cleanoxindonesia.com/"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://waschen-alora.com/#local-business",
    "name": "PT Waschen Alora Indonesia",
    "image": "https://waschen-alora.com/og-image.jpg",
    "telephone": "+6285122333371",
    "email": "waschen.aloraindonesia@gmail.com",
    "url": "https://waschen-alora.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Raffles Hills Blok T.11 No. 18, Leuwinanggung, Tapos",
      "addressLocality": "Depok City",
      "addressRegion": "West Java",
      "postalCode": "16454",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.384666,
      "longitude": 106.902264
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "20:00"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />
      <FloatingStats />
      <Trust />
      <AnimatedContent><ClientLogos /></AnimatedContent>
      <AnimatedContent><Services /></AnimatedContent>
      <AnimatedContent><Gallery /></AnimatedContent>
      <AnimatedContent><TestimonialsSection /></AnimatedContent>
      <AnimatedContent><Sustainability /></AnimatedContent>
      <AnimatedContent><Workflow /></AnimatedContent>
      <AnimatedContent><SocialMediaSection /></AnimatedContent>
      <AnimatedContent><ContactSection /></AnimatedContent>
    </>
  );
}
