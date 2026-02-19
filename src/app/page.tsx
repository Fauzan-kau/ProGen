import type { Metadata } from 'next';
import { Hero, Features, Programs, CTASection } from '@features/landing';
import { ContactForm } from '@features/contact';

export const metadata: Metadata = {
  title: 'ProGen — Where Education Becomes a Career Strategy',
  description:
    "Saudi Arabia's premier career-focused academy bridging the gap between school education and professional excellence. Where education becomes a career strategy.",
  alternates: {
    canonical: 'https://progen.sa',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Programs />
      <CTASection />
      <ContactForm />
    </>
  );
}
