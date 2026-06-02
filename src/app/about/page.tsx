import { Metadata } from 'next';
import { AboutClient } from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us | Waschen Alora Indonesia',
  description: 'Learn more about PT Waschen Alora Indonesia, our Vision & Mission, our PRECISE corporate values, and our employee programs including Alora Award, Alora Outing, and Alora Academy.',
  openGraph: {
    title: 'About Us | Waschen Alora Indonesia',
    description: 'Discover the team, values, and vision behind PT Waschen Alora Indonesia. Dedicated to hygiene, resilience, and operational excellence.',
  }
};

export default function AboutPage() {
  return <AboutClient />;
}
