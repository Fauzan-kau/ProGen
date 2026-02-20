import type { Metadata } from 'next';
import { MainLayout } from '@layouts/MainLayout';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.progenksa.com'),
  title: {
    default: 'ProGen — Where Education Becomes a Career Strategy',
    template: '%s | ProGen',
  },
  description:
    "Saudi Arabia's premier career-focused academy bridging the gap between school education and professional excellence. We don't just teach subjects — we architect futures.",
  keywords: [
    'ProGen',
    'career academy Saudi Arabia',
    'CBSE tuition Riyadh',
    'NEET preparation Saudi Arabia',
    'JEE coaching Riyadh',
    'coding classes Saudi Arabia',
    'Vision 2030 education',
    'academic tuition Riyadh',
    'career coaching Saudi Arabia',
    'school tuition Riyadh',
    'online tuition Saudi Arabia',
    'ProGen academy Riyadh',
  ],
  authors: [{ name: 'ProGen', url: 'https://www.progenksa.com' }],
  creator: 'ProGen',
  publisher: 'ProGen',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.progenksa.com',
    siteName: 'ProGen',
    title: 'ProGen — Where Education Becomes a Career Strategy',
    description:
      "Saudi Arabia's premier career-focused academy. We don't just teach subjects — we architect futures.",
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ProGen Academy — Saudi Arabia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProGen — Where Education Becomes a Career Strategy',
    description: "Saudi Arabia's premier career-focused academy. We architect futures.",
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  alternates: {
    canonical: 'https://www.progenksa.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent dark-mode flash by reading localStorage before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var s=JSON.parse(localStorage.getItem('theme-storage')||'{}');var t=s.state&&s.state.theme||'light';document.documentElement.classList.add(t==='dark'?'dark':'light')}catch(e){}`,
          }}
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'ProGen',
              description:
                "Saudi Arabia's premier career-focused academy bridging the gap between school education and professional excellence, aligned with Vision 2030.",
              url: 'https://www.progenksa.com',
              logo: 'https://www.progenksa.com/images/logo-primary.png',
              image: 'https://www.progenksa.com/images/og-image.png',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Abi Talib Ibn Abduljabbar, Al Murabba Dist., P.O. Box 12612',
                addressLocality: 'Riyadh',
                addressCountry: 'SA',
                postalCode: '12612',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+966546306023',
                email: 'hello@progen.com',
                contactType: 'customer support',
                availableLanguage: ['English', 'Arabic'],
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'ProGen Programs',
                itemListElement: [
                  { '@type': 'Course', name: 'CBSE Tuition Program', description: 'CBSE tuition for Class 6–12 students in Saudi Arabia' },
                  { '@type': 'Course', name: 'NEET & JEE Preparation', description: 'NEET and JEE exam coaching with regular and crash courses' },
                  { '@type': 'Course', name: 'Coding & Software Development', description: 'Practical coding and software development training' },
                ],
              },
            }),
          }}
        />
      </head>
      <body>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
