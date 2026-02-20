import type { Metadata } from 'next';
import { Programs, CBSEOffer, CTASection } from '@features/landing';

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'Explore ProGen programs in Riyadh — CBSE Tuition (Class 6–12), NEET & JEE Preparation, and Coding & Software Development. Aligned with Vision 2030.',
  keywords: [
    'CBSE tuition Riyadh',
    'NEET preparation Saudi Arabia',
    'JEE coaching Riyadh',
    'coding classes Riyadh',
    'Class 11 12 tuition Saudi Arabia',
    'NEET crash course Saudi Arabia',
  ],
  alternates: { canonical: 'https://www.progenksa.com/programs' },
  openGraph: {
    title: 'Programs | ProGen',
    description: 'CBSE Tuition, NEET & JEE Preparation, and Coding programs in Riyadh, Saudi Arabia.',
    url: 'https://www.progenksa.com/programs',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'ProGen Programs' }],
  },
  twitter: {
    title: 'Programs | ProGen',
    description: 'CBSE Tuition, NEET & JEE Preparation, and Coding programs in Riyadh, Saudi Arabia.',
    images: ['/images/og-image.png'],
  },
};

export default function ProgramsPage() {
  return (
    <>
      <Programs />
      <CBSEOffer />
      <CTASection />
    </>
  );
}
