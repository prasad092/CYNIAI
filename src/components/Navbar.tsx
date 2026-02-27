import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import icons from '../shared/assets/Icons';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
 // { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const openMenu = () => {
    setMenuOpen(true);
    // Trigger enter animation on next frame
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
    setAnimating(true);
  };

  const closeMenu = () => {
    setVisible(false);
    setAnimating(true);
    setTimeout(() => {
      setMenuOpen(false);
      setAnimating(false);
    }, 400);
  };

  const handleNavClick = (href: string) => {
    closeMenu();
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 420);
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 transition-all duration-500 ease-out ${scrolled
          ? 'left-10 right-10 top-3 rounded-3xl bg-gradient-to-r from-white/20 via-white/20 to-white/20 border border-white/20 shadow-xl'
          : 'left-0 right-0 bg-transparent'
          }`}
      >
        <div className="max-w-7x mx-auto px-2 lg:px-4">
          <div className="flex items-center justify-between h-16 py-4">
            {/* Logo */}
            <button
              onClick={() => {
                closeMenu();
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 420);
              }}
              className="flex items-center gap-3 group z-[60] relative"
            >
              <img
                src={scrolled ? icons.logo4 : icons.logo1}
                alt="CYNI AI Logo"
                className={`object-contain transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
      ${scrolled ? 'w-32= h-32' : 'w-15 h-15'}
    `}
              />
            </button>

            {/* Desktop Nav */}
            {/* <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button     
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-teal transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav> */}

            {/* Right side: CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNavClick('#contact')}
                className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-[#672ddb] text-white text-sm font-semibold hover:bg-[#5a25c2] transition-all duration-200 hover:shadow-lg hover:shadow-[#672ddb]/30 hover:scale-105"
              >
                Let’s Talk
              </button>

              {/* Hamburger — visible on ALL screen sizes */}
              <button
                className="relative z-[60] flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
                onClick={menuOpen ? closeMenu : openMenu}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                <span
                  className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[3px]' : '-translate-y-[3px]'
                    }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                    }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[3px]' : 'translate-y-[3px]'
                    }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      {(menuOpen || animating) && (
        <div
          className={`fixed inset-0 z-[55] flex flex-col transition-all duration-400 ${visible ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ transitionDuration: '400ms' }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, oklch(0.12 0.02 240 / 0.97) 0%, oklch(0.10 0.03 200 / 0.98) 50%, oklch(0.08 0.04 180 / 0.99) 100%)',
              backdropFilter: 'blur(24px)',
            }}
          />
          {/* Close Icon Top Right */}
          <button
            onClick={() => {
              closeMenu();
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 420);
            }}
            className="absolute top-6 right-6 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300"
            aria-label="Close menu"
          >
            <X size={28} className="text-white" />
          </button>


          {/* Decorative ambient orbs */}
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, oklch(0.65 0.18 185 / 0.08) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, oklch(0.75 0.15 60 / 0.06) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
            {/* Nav links */}
            <nav className="flex flex-col items-center gap-6 md:gap-8">
              {navLinks.map((link, i) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="group relative text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white/80 hover:text-white transition-all duration-300"
                  style={{
                    transitionDelay: visible ? `${i * 60 + 80}ms` : '0ms',
                    transform: visible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.97)',
                    opacity: visible ? 1 : 0,
                    transition: `transform 400ms cubic-bezier(0.22,1,0.36,1) ${i * 60 + 80}ms, opacity 400ms ease ${i * 60 + 80}ms, color 200ms ease`,
                  }}
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#672ddb] transition-all duration-300 group-hover:w-full rounded-full" />
                  </span>

                  <span
                    className="absolute -left-8 top-1/2 -translate-y-1/2 text-[#672ddb] text-2xl opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:-translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>
              ))}
            </nav>

            {/* CTA button */}
            <div
              className="mt-12 md:mt-16"
              style={{
                transitionDelay: visible ? `${navLinks.length * 60 + 120}ms` : '0ms',
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                opacity: visible ? 1 : 0,
                transition: `transform 400ms cubic-bezier(0.22,1,0.36,1) ${navLinks.length * 60 + 120}ms, opacity 400ms ease ${navLinks.length * 60 + 120}ms`,
              }}
            >
              <button
                onClick={() => handleNavClick('#contact')}
                className="px-8 py-4 rounded-full bg-[#672ddb] text-white text-base font-semibold hover:bg-[#5a25c2] transition-all duration-200 hover:shadow-xl hover:shadow-[#672ddb]/30 hover:scale-105"
              >
                Let’s Talk
              </button>
            </div>

            {/* Divider line */}
            <div
              className="mt-12 w-16 h-px bg-white/10 rounded-full"
              style={{
                opacity: visible ? 1 : 0,
                transition: `opacity 400ms ease ${navLinks.length * 60 + 200}ms`,
              }}
            />

            {/* Subtle tagline */}
            {/* <p
              className="mt-4 text-sm text-white/30 tracking-widest uppercase"
              style={{
                opacity: visible ? 1 : 0,
                transition: `opacity 400ms ease ${navLinks.length * 60 + 240}ms`,
              }}
            >
              AI-Powered Video Agency
            </p> */}
          </div>
        </div>
      )}
    </>
  );
}
