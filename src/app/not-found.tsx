import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
      <div className="text-center px-4">
        <h1 className="text-8xl font-heading font-bold text-brand-red mb-4">404</h1>
        <h2 className="text-3xl font-heading font-bold text-text-light dark:text-text-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-text-light/70 dark:text-text-dark/70 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-brand-red hover:bg-brand-red-hover text-white px-8 py-3 rounded-lg font-semibold transition-all inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
