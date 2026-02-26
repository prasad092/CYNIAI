import { SiYoutube, SiLinkedin, SiInstagram, SiX } from 'react-icons/si';
import { Heart } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: SiYoutube, href: '#', label: 'YouTube' },
  { icon: SiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: SiInstagram, href: '#', label: 'Instagram' },
  { icon: SiX, href: '#', label: 'X (Twitter)' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'frameai-studio');

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-deep border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/agency-logo.dim_200x200.png"
                alt="FrameAI Logo"
                className="w-9 h-9 rounded-lg object-cover"
              />
              <span className="text-xl font-bold">
                <span className="text-white">Frame</span>
                <span className="text-teal">AI</span>
              </span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              The future of video production is here. AI-powered, human-crafted, and built to make your brand unforgettable.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-teal hover:border-teal/30 hover:bg-teal/10 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/45 text-sm hover:text-teal transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Services</h4>
            <ul className="space-y-3">
              {['AI Video Production', 'Script Writing', 'Motion Graphics', 'Brand Films', 'Social Content', 'Post-Production'].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNavClick('#services')}
                    className="text-white/45 text-sm hover:text-teal transition-colors duration-200"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {year} FrameAI Studio. All rights reserved.
          </p>
          <p className="text-white/30 text-sm flex items-center gap-1.5">
            Built with <Heart size={13} className="text-teal fill-teal" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:text-teal-light transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
