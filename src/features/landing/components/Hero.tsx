'use client';

import { Button, Container } from '@components/ui';
import { scrollToContact, scrollToElement } from '@utils/helpers';

export const Hero = () => {
  const handleGetStarted = () => {
    scrollToContact();
  };

  const handleLearnMore = () => {
    scrollToElement('programs', 100);
  };

  return (
    <section className="relative bg-gradient-to-br from-background-light to-white dark:from-background-dark dark:to-gray-900 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 md:w-96 md:h-96 bg-brand-red/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 md:w-96 md:h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-brand-red/10 rounded-full mb-6 md:mb-8">
              <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></span>
              <span className="text-sm md:text-base font-semibold text-brand-red">
                Aligned with Vision 2030
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-text-light dark:text-text-dark mb-6 md:mb-8 leading-tight">
              Where Education Becomes a{' '}
              <span className="text-brand-red relative">
                Career Strategy
                <svg
                  className="absolute -bottom-2 left-0 w-full hidden md:block"
                  height="12"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C50 5 250 5 298 10"
                    stroke="#FC5B50"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl lg:text-2xl text-text-light/70 dark:text-text-dark/70 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
              Saudi Arabia&apos;s premier career-focused academy bridging the gap between school education and professional excellence.
              We don&apos;t just teach subjects — we architect futures.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 md:px-0">
              <Button variant="primary" size="lg" onClick={handleGetStarted}>
                Start Your Journey
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Button>
              <Button variant="outline" size="lg" onClick={handleLearnMore}>
                Discover Programs
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 mt-16 md:mt-20 pt-8 md:pt-12 border-t border-gray-200 dark:border-gray-700">
              <div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-red mb-2">
                  1000+
                </div>
                <div className="text-sm md:text-base text-text-light/60 dark:text-text-dark/60">
                  Students Empowered
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-red mb-2">
                  98%
                </div>
                <div className="text-sm md:text-base text-text-light/60 dark:text-text-dark/60">
                  Success Rate
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-red mb-2">
                  Vision 2030
                </div>
                <div className="text-sm md:text-base text-text-light/60 dark:text-text-dark/60">
                  Aligned Academy
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
