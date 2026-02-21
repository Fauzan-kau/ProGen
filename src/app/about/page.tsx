import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Card } from '@components/ui';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about ProGen — Saudi Arabia's premier career-focused academy in Riyadh bridging school education and professional excellence, aligned with Vision 2030.",
  keywords: [
    'about ProGen',
    'ProGen academy Riyadh',
    'education Vision 2030',
    'ProGen faculty',
    'career academy Saudi Arabia',
    'CBSE teachers Riyadh',
  ],
  alternates: { canonical: 'https://www.progenksa.com/about' },
  openGraph: {
    title: 'About Us | ProGen',
    description: "Learn about ProGen — Saudi Arabia's premier career-focused academy in Riyadh, aligned with Vision 2030.",
    url: 'https://www.progenksa.com/about',
  },
  twitter: {
    title: 'About Us | ProGen',
    description: "Learn about ProGen — Saudi Arabia's premier career-focused academy in Riyadh, aligned with Vision 2030.",
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
    photo: '/images/Hamras.jpeg',
    name: 'Hamras',
    title: 'Head of Chemistry Faculty',
    badge: 'Chemistry',
    bio: "Former Chemistry Faculty at Brilliant Study Centre, Pala with 4+ years of experience. Specializes in concept-based, exam-oriented teaching that builds student confidence and strong academic performance.",
    specialties: ['Concept-Based Teaching', 'Exam Preparation', 'Board & Entrance Coaching'],
  },
  {
    photo: '/images/anandhu.jpeg',
    name: 'Anandhu',
    title: 'Physics Faculty',
    badge: 'Physics',
    bio: "MSc in Physics with 5+ years across edtech and academic platforms. Has served as Faculty, Trainer, and Mentor — guiding students through structured concept learning and exam-focused preparation.",
    specialties: ['Physics Concepts', 'Exam-Focused Prep', 'Quality Mentorship'],
  },
  {
    photo: '/images/nafiya.jpeg',
    name: 'Nafiya',
    title: 'Mathematics Faculty',
    badge: 'Mathematics',
    bio: "MSc in Mathematics from Jamia Millia Islamia and former Assistant Professor at WIRAS College, Kannur. Teaches across online and offline platforms with a focus on conceptual clarity and logical problem-solving.",
    specialties: ['Conceptual Mathematics', 'Logical Problem-Solving', 'Step-by-Step Learning'],
  },
  {
    photo: '/images/shahira.jpeg',
    name: 'Shahira',
    title: 'Biology Faculty',
    badge: 'Biology',
    bio: "B.Sc. in Microbiology and B.Ed. in Biological Science with 3+ years of teaching experience online and offline. Creates interactive, student-centered learning environments that build confidence and strengthen fundamentals.",
    specialties: ['Concept-Oriented Teaching', 'Interactive Learning', 'Student-Centered Guidance'],
  },
  {
    photo: '/images/dhiyoof.jpeg',
    name: 'Iyyas Dhiyoof',
    title: 'Commerce Faculty',
    badge: 'Commerce',
    bio: "MSc in International Accounting & Analytics from University of Galway and B.Com from University of Delhi. 2+ years of teaching experience with 500+ students empowered. Corporate background at KPMG with expertise in CUET and CLAT preparation.",
    specialties: ['Commerce & Accounting', 'CUET & CLAT Prep', 'Corporate Finance'],
  },
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
          <div className="py-16 md:py-24 lg:py-28 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Text */}
            <div className="flex-1">
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
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg active:scale-95"
              >
                Start Your Journey
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                  <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Image */}
            <div className="flex-shrink-0 w-full max-w-sm md:max-w-md lg:max-w-lg rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about.jpg"
                alt="Students at ProGen"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

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
              Meet the <span className="text-brand-red">Faculty</span>
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70">
              Experienced educators dedicated to building conceptual clarity and academic excellence.
            </p>
          </div>
          <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.slice(0, 3).map((member) => (
              <Card key={member.name} hoverable className="flex flex-col items-center text-center p-6">
                {/* Photo */}
                <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4 shadow-lg ring-4 ring-brand-red/10 flex-shrink-0">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="112px"
                  />
                </div>
                {/* Badge */}
                <span className="inline-block text-xs font-semibold bg-brand-red/10 text-brand-red border border-brand-red/20 rounded-full px-3 py-1 mb-2">
                  {member.badge}
                </span>
                {/* Name & Title */}
                <h3 className="text-base font-heading font-bold text-text-light dark:text-text-dark mb-0.5">
                  {member.name}
                </h3>
                <p className="text-brand-red text-xs font-semibold mb-3">{member.title}</p>
                {/* Bio */}
                <p className="text-xs text-text-light/70 dark:text-text-dark/70 leading-relaxed mb-4">
                  {member.bio}
                </p>
                {/* Specialties */}
                <div className="flex flex-wrap gap-1.5 justify-center mt-auto">
                  {member.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-gray-100 dark:bg-gray-800 text-text-light/60 dark:text-text-dark/60 rounded-full px-2.5 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {team.slice(3).map((member) => (
              <Card key={member.name} hoverable className="flex flex-col items-center text-center p-6">
                <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4 shadow-lg ring-4 ring-brand-red/10 flex-shrink-0">
                  <Image src={member.photo} alt={member.name} fill className="object-cover object-top" sizes="112px" />
                </div>
                <span className="inline-block text-xs font-semibold bg-brand-red/10 text-brand-red border border-brand-red/20 rounded-full px-3 py-1 mb-2">
                  {member.badge}
                </span>
                <h3 className="text-base font-heading font-bold text-text-light dark:text-text-dark mb-0.5">{member.name}</h3>
                <p className="text-brand-red text-xs font-semibold mb-3">{member.title}</p>
                <p className="text-xs text-text-light/70 dark:text-text-dark/70 leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-1.5 justify-center mt-auto">
                  {member.specialties.map((s) => (
                    <span key={s} className="text-xs bg-gray-100 dark:bg-gray-800 text-text-light/60 dark:text-text-dark/60 rounded-full px-2.5 py-1">
                      {s}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
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
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-red hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-xl active:scale-95"
              >
                Enroll in a Free Session
              </Link>
              <Link
                href="/programs"
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
