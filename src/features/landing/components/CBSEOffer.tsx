'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const offered = [
  'Free Subject Notes',
  'Exam-Oriented Question Banks',
  'Important Previous Year Questions',
  'Concept Summary Sheets',
  'Practice Worksheets & Revision Material',
];

export const CBSEOffer = () => {
  const router = useRouter();

  return (
    <section className="bg-background-light dark:bg-background-dark section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Image */}
          <div className="flex-shrink-0 w-64 md:w-80 lg:w-96">
            <Image
              src="/images/books.png"
              alt="Study Materials"
              width={400}
              height={480}
              className="w-full h-auto drop-shadow-xl"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Grade badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-sm font-semibold">
                Students of Grades 6–10
              </span>
              <span className="px-4 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-sm font-semibold">
                Students of Grades 11–12 (Science &amp; Commerce)
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-light dark:text-text-dark mb-2">
              What Is <span className="text-brand-red">Offered?</span>
            </h2>
            <p className="text-text-light/60 dark:text-text-dark/60 text-sm mb-6">
              Study materials included with the CBSE Tuition Program
            </p>

            {/* Offered list */}
            <ul className="space-y-3 mb-8">
              {offered.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm md:text-base">
                  <svg className="w-5 h-5 text-brand-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-light/80 dark:text-text-dark/80">{item}</span>
                </li>
              ))}
            </ul>

            {/* Standard + Availability */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="flex-1 bg-background-dark border border-white/10 rounded-xl px-4 py-3 text-sm">
                <span className="font-semibold text-text-dark block mb-0.5">Academic Standard</span>
                <span className="text-text-dark/70">Designed as per CBSE &amp; exam standards</span>
              </div>
              <div className="flex-1 bg-brand-red/10 border border-brand-red/20 rounded-xl px-4 py-3 text-sm text-brand-red font-semibold flex items-center justify-center text-center">
                Limited Seats | Limited Time Only
              </div>
            </div>

            {/* Enroll */}
            <button
              onClick={() => router.push('/contact')}
              className="bg-brand-red hover:bg-brand-red-hover text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg active:scale-95"
            >
              Enroll Now →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
