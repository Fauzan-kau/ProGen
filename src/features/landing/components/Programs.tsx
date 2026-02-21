'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { Container, Card, Button } from '@components/ui';

type Program = {
  id: string;
  cardIcon: React.ReactNode;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  meta: { icon: string; label: string }[];
  highlights: string[];
  extras?: {
    targets: string[];
    offered: string[];
    standard: string;
    availability: string;
  };
};

const programs: Program[] = [
  {
    id: 'cbse-tuition',
    cardIcon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-3.5 2.5M12 20l-9-5" />
      </svg>
    ),
    image: '/images/tutor.png',
    title: 'CBSE Tuition Program',
    subtitle: 'Class 8–12',
    description:
      'Comprehensive CBSE-focused tuition designed to build strong academic foundations, improve grades, and prepare students for board examinations with confidence.',
    meta: [
      { icon: 'calendar', label: 'Year-round batches' },
      { icon: 'target', label: 'Class 8 to Class 12' },
      { icon: 'book', label: 'CBSE Curriculum' },
    ],
    highlights: [
      'Complete syllabus coverage',
      'Concept clarity & fundamentals',
      'Board exam preparation strategies',
      'Weekly tests & performance analysis',
      'Doubt-solving sessions',
    ],
    extras: {
      targets: ['Students of Grades 6–10', 'Students of Grades 11–12 (Science & Commerce)'],
      offered: [
        'Free Subject Notes',
        'Exam-Oriented Question Banks',
        'Important Previous Year Questions',
        'Concept Summary Sheets',
        'Practice Worksheets & Revision Material',
      ],
      standard: 'Designed as per CBSE & exam standards',
      availability: 'Limited Seats | Limited Time Only',
    },
  },
  {
    id: 'neet-jee',
    cardIcon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    image: '/images/dreng.jpg',
    title: 'NEET & JEE Preparation',
    subtitle: 'Regular + Crash Courses',
    description:
      'Intensive preparation program for NEET and JEE aspirants with structured study plans, expert mentorship, and exam-oriented practice.',
    meta: [
      { icon: 'calendar', label: '1-Year & 2-Year Programs' },
      { icon: 'bolt', label: 'Fast-Track Crash Courses' },
      { icon: 'target', label: 'Expert Faculty & Mentorship' },
    ],
    highlights: [
      'Physics, Chemistry & Mathematics (JEE)',
      'Physics, Chemistry & Biology (NEET)',
      'Advanced problem-solving techniques',
      'Mock tests & All-India test series',
      'Time management strategies',
    ],
  },
  {
    id: 'coding',
    cardIcon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    image: '/images/coding.webp',
    title: 'Coding & Software Development',
    subtitle: 'Beginner to Advanced',
    description:
      'Future-ready coding program designed to build programming skills, logical thinking, and real-world software development expertise.',
    meta: [
      { icon: 'bolt', label: 'Beginner to Advanced Levels' },
      { icon: 'target', label: 'Web & App Development' },
      { icon: 'book', label: 'Project-Based Learning' },
    ],
    highlights: [
      'Programming fundamentals (Python / C++ / Java)',
      'Data Structures & Algorithms',
      'Web Development (HTML, CSS, JavaScript, React)',
      'App Development Basics',
      'AI & Future Tech Foundations',
    ],
  },
];

const MetaIcon = ({ icon }: { icon: string }) => (
  <svg className="w-4 h-4 text-brand-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    {icon === 'calendar' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />}
    {icon === 'target' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
    {icon === 'book' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />}
    {icon === 'bolt' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />}
  </svg>
);

const ProgramModal = ({ program, onClose }: { program: Program; onClose: () => void }) => {
  const router = useRouter();

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-background-dark rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero Image */}
        <div className="relative w-full h-56 md:h-72 rounded-t-2xl overflow-hidden">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Title overlay on image */}
          <div className="absolute bottom-5 left-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-red mb-1">{program.subtitle}</p>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">{program.title}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <p className="text-sm md:text-base text-text-light/70 dark:text-text-dark/70 leading-relaxed mb-6">
            {program.description}
          </p>

          {/* Meta + Highlights side by side on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Meta */}
            <div>
              <h4 className="font-semibold text-text-light dark:text-text-dark mb-3 text-sm uppercase tracking-wide">
                Program Highlights
              </h4>
              <div className="flex flex-col gap-3">
                {program.meta.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <MetaIcon icon={item.icon} />
                    <span className="text-text-light/80 dark:text-text-dark/80">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="font-semibold text-text-light dark:text-text-dark mb-3 text-sm uppercase tracking-wide">
                What You&apos;ll Learn
              </h4>
              <ul className="flex flex-col gap-2">
                {program.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-light/70 dark:text-text-dark/70">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Extras — CBSE only */}
          {program.extras && (
            <div className="mb-8 space-y-6">
              {/* Who It's For */}
              <div className="flex flex-wrap gap-2">
                {program.extras.targets.map((t, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-xs font-semibold">
                    {t}
                  </span>
                ))}
              </div>

              {/* What Is Offered */}
              <div>
                <h4 className="font-semibold text-text-light dark:text-text-dark mb-3 text-sm uppercase tracking-wide">
                  What Is Offered
                </h4>
                <ul className="flex flex-col gap-2">
                  {program.extras.offered.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-light/70 dark:text-text-dark/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Standard + Availability */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 bg-background-light dark:bg-white/5 rounded-xl px-4 py-3 text-sm text-text-light/80 dark:text-text-dark/80">
                  <span className="font-semibold text-text-light dark:text-text-dark block mb-0.5">Academic Standard</span>
                  {program.extras.standard}
                </div>
                <div className="flex-1 bg-brand-red/10 rounded-xl px-4 py-3 text-sm text-brand-red font-semibold flex items-center justify-center text-center">
                  {program.extras.availability}
                </div>
              </div>
            </div>
          )}

          {/* Enroll Button */}
          <Button variant="primary" fullWidth onClick={() => router.push('/contact')}>
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Programs = () => {
  const [selected, setSelected] = useState<Program | null>(null);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <section id="programs" className="bg-background-light dark:bg-background-dark">

      {/* Hero — two column */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left — text */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-brand-red">Trusted Programs</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-light dark:text-text-dark mb-5 leading-tight">
              Our <span className="text-brand-red">Programs</span>
            </h2>
            <p className="text-base md:text-lg text-text-light/70 dark:text-text-dark/70 leading-relaxed mb-8">
              Every program at ProGen is built with a single goal — to move students beyond high grades and toward high-impact futures. Our curriculum is expert-designed, exam-aligned, and career-focused.
            </p>

            {/* Bullet programs */}
            <ul className="space-y-4">
              {programs.map((p) => (
                <li key={p.id} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-light dark:text-text-dark">{p.title}</p>
                    <p className="text-sm text-brand-red">{p.subtitle}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — image */}
          <div className="flex-shrink-0 w-72 md:w-96 lg:w-[420px]">
            <Image
              src="/images/corevalues.png"
              alt="Programs illustration"
              width={420}
              height={420}
              className="w-full h-auto"
            />
          </div>

        </div>
      </div>

      {/* Cards */}
      <div className="section-padding pt-0">
      <Container>
        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program) => (
            <Card
              key={program.id}
              hoverable
              padding="lg"
              className="flex flex-col h-full cursor-pointer"
              onClick={() => setSelected(program)}
            >
              <div className="flex-1">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                    <div className="w-10 h-10 [&>svg]:w-full [&>svg]:h-full">
                      {program.cardIcon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-text-light dark:text-text-dark mb-1">
                  {program.title}
                </h3>
                <p className="text-sm font-semibold text-brand-red mb-3">{program.subtitle}</p>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70 leading-relaxed">
                  {program.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-brand-red">
                View Details
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Card>
          ))}
        </div>
      </Container>
      </div>

      {/* Modal */}
      {selected && <ProgramModal program={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};
