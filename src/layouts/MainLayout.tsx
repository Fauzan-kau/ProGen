'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Navbar, Footer } from '@components/layout';
import { NavLink } from '@/types';

interface MainLayoutProps {
  children: React.ReactNode;
}

const navLinks: NavLink[] = [
  { label: 'Programs', href: '/programs' },
  { label: 'Features', href: '/features' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const footerSections = [
  {
    title: 'Programs',
    links: [
      { label: 'Academic Excellence', href: '/programs' },
      { label: 'Career Strategy', href: '/programs' },
      { label: 'Leadership Development', href: '/programs' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Programs', href: '/programs' },
      { label: 'Features', href: '/features' },
      { label: 'Enroll Now', href: '/contact' },
    ],
  },
];

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    const darkEls = document.querySelectorAll<HTMLElement>(
      'section.bg-background-dark, footer'
    );
    if (!darkEls.length) return;

    const visibleSet = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleSet.add(entry.target);
          else visibleSet.delete(entry.target);
        });
        setOnDark(visibleSet.size > 0);
      },
      { threshold: 0 }
    );

    darkEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">

      {/* Brand element — bottom right, switches dark/light when footer is reached */}
      <div className="fixed bottom-4 right-2 opacity-25 pointer-events-none select-none z-20 w-[180px] sm:w-[260px] md:w-[340px] lg:w-[420px]">
        <Image
          src={onDark ? '/images/brandelementlight.png' : '/images/brnadelement.png'}
          alt=""
          width={420}
          height={105}
          className="w-full h-auto transition-opacity duration-500"
        />
      </div>

      <Navbar links={navLinks} />
      <main className="relative z-10 flex-1">{children}</main>
      <Footer sections={footerSections} />
    </div>
  );
};
