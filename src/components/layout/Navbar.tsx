'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@components/ui';
import { NavLink } from '@/types';
import { scrollToContact } from '@utils/helpers';

interface NavbarProps {
  links: NavLink[];
  onCTAClick?: () => void;
}

export const Navbar = ({ links, onCTAClick }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const linkClass = (href: string) =>
    `transition-colors font-medium ${
      isActive(href)
        ? 'text-brand-red'
        : 'text-text-light dark:text-text-dark hover:text-brand-red'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-primary.png"
                alt="ProGen"
                width={160}
                height={40}
                className="h-8 md:h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) =>
              link.href.startsWith('/') ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClass(link.href)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={linkClass(link.href)}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </a>
              )
            )}
            <button
              onClick={onCTAClick || scrollToContact}
              className="bg-brand-red hover:bg-brand-red-hover text-white px-6 py-2.5 rounded-lg font-semibold transition-all hover:shadow-lg active:scale-95"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-text-light dark:text-text-dark hover:bg-background-light dark:hover:bg-background-dark/50"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              {links.map((link) =>
                link.href.startsWith('/') ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${linkClass(link.href)} py-2`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`${linkClass(link.href)} py-2`}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              )}
              <button
                onClick={() => {
                  (onCTAClick || scrollToContact)();
                  setMobileMenuOpen(false);
                }}
                className="bg-brand-red hover:bg-brand-red-hover text-white px-6 py-3 rounded-lg font-semibold transition-all w-full"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};
