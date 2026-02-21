import type { Metadata } from 'next';
import { Hero, BrandPromise, Features, Programs, CTASection } from '@features/landing';

export const metadata: Metadata = {
  title: 'ProGen — Where Education Becomes a Career Strategy',
  description:
    "Saudi Arabia's premier career-focused academy bridging the gap between school education and professional excellence. CBSE tuition, NEET & JEE prep, and coding programs in Riyadh.",
  keywords: [
    'ProGen academy',
    'CBSE tuition Riyadh',
    'NEET coaching Saudi Arabia',
    'career academy Saudi Arabia',
    'Vision 2030 education',
    'school tuition Riyadh',
  ],
  alternates: { canonical: 'https://www.progenksa.com' },
  openGraph: {
    title: 'ProGen — Where Education Becomes a Career Strategy',
    description: "Saudi Arabia's premier career-focused academy. CBSE, NEET & JEE, and Coding programs in Riyadh.",
    url: 'https://www.progenksa.com',
  },
  twitter: {
    title: 'ProGen — Where Education Becomes a Career Strategy',
    description: "Saudi Arabia's premier career-focused academy. CBSE, NEET & JEE, and Coding programs in Riyadh.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandPromise />
      <Features />
      <Programs />
      <CTASection />
    </>
  );
}
