import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Qualifications', href: '#qualifications' },
  { label: 'Who Is This For', href: '#who' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-scroll py-2' : 'py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            src="/images/CTC_LOGO_TRANSPARENCY_FOR_WHITE_BG.png"
            alt="Candice the Companion"
            className="h-[4.25rem] md:h-[5.5rem] w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="font-body text-sm font-500 text-gray-600 hover:text-teal-500 transition-colors duration-200 relative group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-teal-400 rounded transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="ml-2 px-5 py-2.5 rounded-full bg-pink-500 text-white text-sm font-heading font-semibold shadow-pink-glow hover:bg-pink-600 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            Contact Candice
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-teal-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-gray-100 shadow-lg`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-left font-body text-base text-gray-700 hover:text-teal-500 transition-colors py-1"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="mt-2 px-5 py-3 rounded-full bg-pink-500 text-white font-heading font-semibold shadow-pink-glow hover:bg-pink-600 transition-all duration-200"
          >
            Contact Candice
          </button>
        </nav>
      </div>
    </header>
  );
}
