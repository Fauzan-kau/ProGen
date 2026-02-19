import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Card } from '@components/ui';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about ProGen — Saudi Arabia's premier career-focused academy bridging the gap between school education and professional excellence, aligned with Vision 2030.",
  alternates: {
    canonical: 'https://progen.sa/about',
  },
};

const values = [
  {
    title: 'Precision',
    description:
      'Every lesson and coaching session is meticulously designed to ensure measurable student growth and real academic results.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Purpose',
    description:
      'We go beyond grades. Every program is built around a clear purpose: equipping students for high-impact careers aligned with Vision 2030.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Partnership',
    description:
      'We treat every student as a long-term partner — investing in their journey from school through university and into the professional world.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Progress',
    description:
      'We continuously evolve our programs to stay ahead of the Saudi job market, ensuring students are always prepared for what comes next.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const team = [
  {
    initials: 'DA',
    gradient: 'from-blue-500 to-blue-700',
    name: 'Dr. Ahmad Al-Rashidi',
    title: 'Academic Excellence Director',
    bio: 'With over 14 years of experience in Saudi education and curriculum development, Dr. Ahmad has helped thousands of students excel academically and gain admission to top universities across the Kingdom.',
  },
  {
    initials: 'FZ',
    gradient: 'from-brand-red to-brand-red-hover',
    name: 'Fatima Al-Zahra',
    title: 'Career Strategy Coach',
    bio: 'A certified career coach and Vision 2030 specialist, Fatima has guided over 500 students in mapping their professional trajectories — from choosing the right major to landing their dream internships.',
  },
  {
    initials: 'OH',
    gradient: 'from-green-500 to-green-700',
    name: 'Omar Hassan',
    title: 'Leadership Development Mentor',
    bio: 'Former corporate trainer and leadership development specialist, Omar brings real-world professional skills into the classroom, preparing students for the modern Saudi workplace.',
  },
];

const stats = [
  { number: '1,000+', label: 'Students Empowered' },
  { number: '98%', label: 'Success Rate' },
  { number: '14+', label: 'Years Experience' },
  { number: '3', label: 'Flagship Programs' },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-background-light to-white dark:from-background-dark dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
        </div>
        <Container className="relative">
          <div className="py-16 md:py-24 lg:py-32 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-red rounded-full" />
              <span className="text-sm font-semibold text-brand-red">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-light dark:text-text-dark mb-6 leading-tight">
              We Don&apos;t Just Teach.{' '}
              <span className="text-brand-red">We Architect Futures.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-light/70 dark:text-text-dark/70 leading-relaxed mb-8">
              ProGen was founded on a single belief: high grades alone are no longer enough. Saudi Arabia&apos;s rapidly evolving economy — driven by Vision 2030 — demands professionals who combine academic excellence with strategic career thinking, leadership, and real-world skills.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg active:scale-95"
            >
              Start Your Journey
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* Stats */}
      {/* <section className="bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-700">
        <Container>
          <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-heading font-bold text-brand-red mb-2">{s.number}</div>
                <div className="text-sm text-text-light/60 dark:text-text-dark/60">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section> */}

      {/* Mission */}
      <section className="section-padding bg-background-light dark:bg-background-dark">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-light dark:text-text-dark mb-6">
                Our <span className="text-brand-red">Mission</span>
              </h2>
              <div className="space-y-4 text-text-light/70 dark:text-text-dark/70 leading-relaxed">
                <p>
                  ProGen bridges the gap between school education and professional excellence. We combine rigorous academic tuition with strategic career coaching so students move beyond marks and toward high-impact futures.
                </p>
                <p>
                  Our approach is built around the realities of the Saudi job market. We don&apos;t follow a generic curriculum — every program is tailored to align with Vision 2030 priorities, industry demand, and the individual strengths of each student.
                </p>
                <p>
                  From our first session to a student&apos;s career breakthrough, ProGen is the partner that stays in the journey — not just the classroom.
                </p>
              </div>
            </div>
            <div className="bg-brand-red/5 dark:bg-brand-red/10 rounded-2xl p-8 md:p-10 border border-brand-red/20">
              <blockquote className="text-xl md:text-2xl font-heading font-semibold text-text-light dark:text-text-dark leading-relaxed">
                &ldquo;Education is not preparation for life — it is the vehicle that drives the life you design.&rdquo;
              </blockquote>
              <p className="mt-4 text-brand-red font-semibold">— ProGen Founding Principle</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-light dark:text-text-dark mb-4">
              What We <span className="text-brand-red">Stand For</span>
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70">
              Four principles guide everything we do at ProGen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <Card key={v.title} hoverable>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0 text-brand-red">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-text-light dark:text-text-dark mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-text-light/70 dark:text-text-dark/70 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="section-padding bg-background-light dark:bg-background-dark">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-light dark:text-text-dark mb-4">
              Meet the <span className="text-brand-red">Team</span>
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70">
              World-class educators and career specialists dedicated to your success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} hoverable padding="lg" className="text-center">
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <span className="text-white text-xl font-bold font-heading">{member.initials}</span>
                </div>
                <p className="text-brand-red text-sm font-semibold mb-1">{member.title}</p>
                <h3 className="text-lg font-heading font-bold text-text-light dark:text-text-dark mb-3">
                  {member.name}
                </h3>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70 leading-relaxed">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-brand-red to-brand-red-hover text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Ready to Join ProGen?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Take the first step toward architecting your future. Enroll in a free demo session today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-red hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-xl active:scale-95"
              >
                Enroll in a Free Session
              </Link>
              <Link
                href="/#programs"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand-red px-8 py-4 rounded-lg font-semibold transition-all active:scale-95"
              >
                View Programs
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
