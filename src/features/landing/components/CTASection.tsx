'use client';

import { Container, Button } from '@components/ui';
import { scrollToContact } from '@utils/helpers';

export const CTASection = () => {
  const handleGetStarted = () => {
    scrollToContact();
  };

  return (
    <section className="section-padding bg-gradient-to-br from-brand-red to-brand-red-hover text-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-4 md:mb-6">
            Ready to Architect Your Future?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-white/90 leading-relaxed px-4 md:px-0">
            Join Saudi Arabia&apos;s most trusted career-focused academy. Move beyond high grades toward high-impact careers aligned with Vision 2030.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 md:px-0">
            <Button
              variant="secondary"
              size="lg"
              onClick={handleGetStarted}
              className="!bg-white !text-brand-red hover:!bg-white/90 shadow-xl font-semibold"
            >
              Enroll Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleGetStarted}
              className="!border-2 !border-white !text-white hover:!bg-white hover:!text-brand-red font-semibold"
            >
              Book Consultation
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-heading font-bold mb-1">1,000+</div>
                <div className="text-sm md:text-base text-white/80">Students</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-heading font-bold mb-1">98%</div>
                <div className="text-sm md:text-base text-white/80">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-heading font-bold mb-1">Saudi Arabia</div>
                <div className="text-sm md:text-base text-white/80">Premier Academy</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-heading font-bold mb-1">Vision 2030</div>
                <div className="text-sm md:text-base text-white/80">Aligned</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
