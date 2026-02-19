import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@components/ui';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  sections?: FooterSection[];
}

export const Footer = ({ sections }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-dark text-text-dark border-t border-gray-700">
      <Container>
        <div className="py-12 md:py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <Image
                src="/images/logo-light-bg.png"
                alt="ProGen"
                width={200}
                height={48}
                className="h-10 md:h-12 w-auto mb-4"
              />
              <p className="text-text-dark/80 text-sm md:text-base leading-relaxed">
                Empowering the next generation of professionals with cutting-edge education
                and career development aligned with Vision 2030.
              </p>
            </div>

            {/* Footer Sections */}
            {sections?.map((section) => (
              <div key={section.title}>
                <h4 className="font-heading font-semibold text-lg mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith('/') ? (
                        <Link
                          href={link.href}
                          className="text-text-dark/80 hover:text-brand-red transition-colors text-sm md:text-base"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-text-dark/80 hover:text-brand-red transition-colors text-sm md:text-base"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-text-dark/60 text-sm text-center md:text-left">
                © {currentYear} ProGen. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link
                  href="/contact"
                  className="text-text-dark/60 hover:text-brand-red transition-colors text-sm"
                >
                  Contact Us
                </Link>
                <Link
                  href="/about"
                  className="text-text-dark/60 hover:text-brand-red transition-colors text-sm"
                >
                  About ProGen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
