import { Metadata } from 'next';
import { CareersClient } from './CareersClient';

export const metadata: Metadata = {
  title: 'Careers | Waschen Alora Indonesia',
  description: 'Join Waschen Alora and be part of our journey towards excellence.',
  openGraph: {
    title: 'Careers | Waschen Alora Indonesia',
    description: 'Join Waschen Alora and be part of our journey towards excellence.',
  }
};

export default function CareersPage() {
  return <CareersClient />;
}
