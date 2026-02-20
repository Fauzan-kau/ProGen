import type { Metadata } from 'next';
import { Programs, CBSEOffer, CTASection } from '@features/landing';

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'Explore ProGen\'s career-focused programs — Academic Excellence, Career Strategy Coaching, and Leadership & Professional Development — aligned with Vision 2030.',
  alternates: {
    canonical: 'https://progen.sa/programs',
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
