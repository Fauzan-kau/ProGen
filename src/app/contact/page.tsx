import type { Metadata } from 'next';
import { ContactForm } from '@features/contact';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with ProGen Academy in Riyadh. Fill out the form and our team will get back to you within 24 hours. Enroll in a free demo session today.',
  keywords: [
    'contact ProGen',
    'ProGen Riyadh',
    'enroll free demo session',
    'CBSE tuition inquiry',
    'NEET coaching inquiry Riyadh',
  ],
  alternates: { canonical: 'https://www.progenksa.com/contact' },
  openGraph: {
    title: 'Contact Us | ProGen',
    description: 'Get in touch with ProGen Academy in Riyadh. Enroll in a free demo session today.',
    url: 'https://www.progenksa.com/contact',
  },
  twitter: {
    title: 'Contact Us | ProGen',
    description: 'Get in touch with ProGen Academy in Riyadh. Enroll in a free demo session today.',
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
