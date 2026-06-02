import { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Waschen Alora Indonesia',
  description: 'Reach out to Waschen Alora for partnerships, laundry services, or general support inquiries.',
  openGraph: {
    title: 'Contact Us | Waschen Alora Indonesia',
    description: 'Reach out to Waschen Alora for partnerships, laundry services, or general support inquiries.',
  }
};

export default function ContactPage() {
  return <ContactClient />;
}
