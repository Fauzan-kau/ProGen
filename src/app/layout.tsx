import type { Metadata } from 'next';
import { MainLayout } from '@layouts/MainLayout';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://progen.sa'),
  title: {
    default: 'ProGen — Where Education Becomes a Career Strategy',
    template: '%s | ProGen',
  },
  description:
    "Saudi Arabia's premier career-focused academy bridging the gap between school education and professional excellence. We don't just teach subjects — we architect futures.",
  keywords: [
    'ProGen',
    'career academy',
    'Saudi Arabia',
    'Vision 2030',
    'academic tuition',
    'career coaching',
    'Riyadh',
    'education',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://progen.sa',
    siteName: 'ProGen',
    title: 'ProGen — Where Education Becomes a Career Strategy',
    description:
      "Saudi Arabia's premier career-focused academy. We don't just teach subjects — we architect futures.",
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ProGen Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProGen — Where Education Becomes a Career Strategy',
    description: "Saudi Arabia's premier career-focused academy.",
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/favicon.png',
  },
  alternates: {
    canonical: 'https://progen.sa',
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
                "Saudi Arabia's premier career-focused academy bridging the gap between school education and professional excellence.",
              url: 'https://progen.sa',
              logo: 'https://progen.sa/images/logo-primary.png',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Riyadh',
                addressCountry: 'SA',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+966-12-345-6789',
                email: 'hello@progen.com',
                contactType: 'customer support',
              },
              sameAs: [
                'https://twitter.com/progen',
                'https://linkedin.com/company/progen',
              ],
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
