'use client';

import { Container, Card, Button } from '@components/ui';
import { scrollToContact } from '@utils/helpers';

const programs = [
  {
    id: 'academic-excellence',
    title: 'Academic Excellence Program',
    description:
      'Rigorous academic tuition combining school curriculum mastery with critical thinking development and exam preparation.',
    duration: 'Year-round',
    level: 'All Grades',
    highlights: ['Subject Mastery', 'Exam Strategies', 'Critical Thinking', 'Grade Improvement'],
  },
  {
    id: 'career-strategy',
    title: 'Career Strategy Coaching',
    description:
      'Personalized career guidance aligned with Vision 2030, helping students map their professional trajectory from school to success.',
    duration: 'Continuous',
    level: 'High School & Beyond',
    highlights: ['Career Mapping', 'University Planning', 'Professional Skills', 'Vision 2030 Alignment'],
  },
  {
    id: 'leadership-development',
    title: 'Leadership & Professional Development',
    description:
      'Build essential leadership, communication, and professional skills that set you apart in the competitive job market.',
    duration: 'Semester-based',
    level: 'Advanced Students',
    highlights: ['Leadership Skills', 'Public Speaking', 'Networking', 'Professional Etiquette'],
  },
];

export const Programs = () => {
  const handleEnroll = () => {
    scrollToContact();
  };

  return (
    <section id="programs" className="section-padding bg-background-light dark:bg-background-dark">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-light dark:text-text-dark mb-4 md:mb-6">
            Our <span className="text-brand-red">Programs</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-text-light/70 dark:text-text-dark/70">
            Combining academic mastery with strategic career guidance to architect your future.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program) => (
            <Card key={program.id} hoverable padding="lg" className="flex flex-col h-full">
              {/* Program Header */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-light dark:text-text-dark mb-3">
                  {program.title}
                </h3>
                <p className="text-sm md:text-base text-text-light/70 dark:text-text-dark/70 leading-relaxed">
                  {program.description}
                </p>
              </div>

              {/* Program Meta */}
              <div className="flex flex-wrap gap-4 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-brand-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-text-light/80 dark:text-text-dark/80">
                    {program.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-brand-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span className="text-text-light/80 dark:text-text-dark/80">{program.level}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6 flex-1">
                <h4 className="font-semibold text-text-light dark:text-text-dark mb-3 text-sm md:text-base">
                  What You&apos;ll Learn:
                </h4>
                <ul className="space-y-2">
                  {program.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm md:text-base">
                      <svg
                        className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-text-light/70 dark:text-text-dark/70">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Button
                variant="primary"
                fullWidth
                onClick={handleEnroll}
              >
                Enroll Now
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
