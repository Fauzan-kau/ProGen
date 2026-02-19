import { Navbar, Footer } from '@components/layout';
import { NavLink } from '@/types';

interface MainLayoutProps {
  children: React.ReactNode;
}

const navLinks: NavLink[] = [
  { label: 'Programs', href: '#programs' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '#contact' },
];

const footerSections = [
  {
    title: 'Programs',
    links: [
      { label: 'Academic Excellence', href: '/programs/academic-excellence' },
      { label: 'Career Strategy', href: '/programs/career-strategy' },
      { label: 'Leadership Development', href: '/programs/leadership' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Community', href: '/community' },
      { label: 'Support', href: '/support' },
      { label: 'FAQ', href: '/faq' },
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
