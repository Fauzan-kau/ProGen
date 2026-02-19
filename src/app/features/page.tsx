import type { Metadata } from 'next';
import { Features, CTASection } from '@features/landing';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Discover what you gain at ProGen — precision learning, career trajectory mapping, academic mastery, and Vision 2030-aligned guidance.',
  alternates: {
    canonical: 'https://progen.sa/features',
  },
};

export default function FeaturesPage() {
  return (
    <>
      <Features />
      <CTASection />
    </>
  );
}
