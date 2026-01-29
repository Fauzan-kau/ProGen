import { Navbar, Footer } from '@components/layout';
import { NavLink } from '@/types';

interface MainLayoutProps {
  children: React.ReactNode;
}

const navLinks: NavLink[] = [
  { label: 'Programs', href: '#programs' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
];

const footerSections = [
  {
    title: 'Programs',
    links: [
      { label: 'Web Development', href: '/programs/web-dev' },
      { label: 'Data Science', href: '/programs/data-science' },
      { label: 'Cloud Engineering', href: '/programs/cloud' },
      { label: 'AI & ML', href: '/programs/ai-ml' },
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
      { label: 'Documentation', href: '/docs' },
      { label: 'Community', href: '/community' },
      { label: 'Support', href: '/support' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
];

export const MainLayout = ({ children }: MainLayoutProps) => {
  const handleGetStarted = () => {
    // Navigate to enrollment or show modal
    console.log('Get Started clicked');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar links={navLinks} onCTAClick={handleGetStarted} />
      <main className="flex-1">{children}</main>
      <Footer sections={footerSections} />
    </div>
  );
};
