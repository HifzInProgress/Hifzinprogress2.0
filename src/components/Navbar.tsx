import React, { useState } from 'react';
import { Search, Menu, X, BookOpen, Compass, Sparkles, Instagram, Youtube } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenGetInTouch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenGetInTouch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'My Journey', href: '#my-journey' },
    { label: 'Hifz Guide', href: '#learning-center' },
    { label: 'Videos', href: '#videos' },
    { label: 'Resources', href: '#resources' },
    { label: 'Tracker', href: '#tracker' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#031C17]/95 backdrop-blur-md border-b border-gold-subtle transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Zone 1: Brand Wordmark & Icon */}
        <a 
          href="#hero" 
          className="flex items-center gap-3 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A052] rounded-lg p-1"
          aria-label="Hifz In Progress Home"
        >
          {/* Stylized Islamic Arch & Book Icon */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#073B30] to-[#04241e] border border-gold-subtle flex items-center justify-center text-[#C8A052] group-hover:border-[#C8A052] transition-colors shadow-sm">
            <svg 
              className="w-5 h-5 text-[#C8A052]" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.8" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {/* Islamic geometric arch with open book */}
              <path d="M12 3v18" />
              <path d="M5 6.5C7.5 5 10 5.5 12 7c2-1.5 4.5-2 7-.5v12.5c-2.5-1.5-5-1-7 .5-2-1.5-4.5-2-7-.5V6.5z" />
              <path d="M12 3C8 3 5 5 5 8" />
              <path d="M12 3C16 3 19 5 19 8" />
            </svg>
          </div>
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#F3EBDD] whitespace-nowrap">
            Hifz In Progress
          </span>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#F3EBDD]/80">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#C8A052] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C8A052] hover:after:w-full after:transition-all whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Functional Search & Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSearch}
            className="w-10 h-10 rounded-full border border-gold-subtle hover:border-[#C8A052] text-[#F3EBDD]/80 hover:text-[#C8A052] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A052]"
            aria-label="Search guides, videos, and resources"
            title="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#031C17] bg-[#C8A052] hover:bg-[#D8B062] active:scale-95 transition-all rounded-full shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A052]"
          >
            Follow Journey
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg border border-gold-subtle text-[#F3EBDD] flex items-center justify-center hover:border-[#C8A052] transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#062D24] border-b border-gold-subtle px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-gold-subtle/40">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#F3EBDD]/90 hover:text-[#C8A052] hover:bg-[#073B30] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#031C17] bg-[#C8A052] hover:bg-[#D8B062] rounded-full transition-colors text-center"
            >
              <Instagram className="w-4 h-4" />
              Follow on Instagram
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGetInTouch();
              }}
              className="w-full py-2 text-xs text-[#F3EBDD]/80 hover:text-[#C8A052] text-center"
            >
              Support / Get In Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
