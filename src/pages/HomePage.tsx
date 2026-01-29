import { Hero, Features, Programs, CTASection } from '@features/landing';
import { ContactForm } from '@features/contact';

/**
 * HomePage - Route composition only
 * No business logic, just feature composition
 */
export const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Programs />
      <CTASection />
      <ContactForm />
    </>
  );
};
