'use client';

import { Container, Card } from '@components/ui';

const features = [
  {
    id: 'precision',
    title: 'Precision',
    description:
      'Every lesson, every coaching session, every career plan is meticulously designed with precision to ensure measurable student growth and academic excellence.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 'trajectory',
    title: 'Trajectory',
    description:
      'We map clear career trajectories for each student, guiding them from school education to professional success with strategic milestones.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    id: 'potential',
    title: 'Potential',
    description:
      "We unlock each student's full potential by combining rigorous academic tuition with strategic career coaching and personalized development.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: 'strategy',
    title: 'Strategy',
    description:
      "Education becomes a career strategy. We don't just teach subjects — we architect futures with data-driven approaches and proven methodologies.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    id: 'academic-mastery',
    title: 'Academic Mastery',
    description:
      'Rigorous academic tuition that ensures students excel in their school subjects while building critical thinking and problem-solving skills.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    id: 'career-guidance',
    title: 'Career Guidance',
    description:
      'Expert career coaching aligned with Vision 2030, helping students move beyond high grades toward high-impact careers in Saudi Arabia.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export const Features = () => {
  return (
    <section id="features" className="section-padding bg-white dark:bg-gray-900">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-light dark:text-text-dark mb-4 md:mb-6">
            Our <span className="text-brand-red">Core Values</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-text-light/70 dark:text-text-dark/70">
            We bridge the gap between school education and professional excellence through strategic career coaching and academic mastery.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <Card key={feature.id} hoverable className="group">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4 md:mb-6 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-semibold text-text-light dark:text-text-dark mb-3 md:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-text-light/70 dark:text-text-dark/70 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
