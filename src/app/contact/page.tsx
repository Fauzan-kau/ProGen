import type { Metadata } from 'next';
import { ContactForm } from '@features/contact';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with ProGen. Fill out the form and our team will get back to you within 24 hours.',
  alternates: {
    canonical: 'https://progen.sa/contact',
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
