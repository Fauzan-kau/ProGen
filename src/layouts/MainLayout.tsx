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
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar links={navLinks} />
      <main className="flex-1">{children}</main>
      <Footer sections={footerSections} />
    </div>
  );
};
