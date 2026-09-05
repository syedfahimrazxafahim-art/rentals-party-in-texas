import React, { useState } from 'react';
import { PageTab } from '../types';
import { OfficialLogo } from './OfficialLogo';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 h-16 sm:h-20 flex items-center justify-between px-4 sm:px-8 border-b border-white/10 bg-[#0d0221]/90 backdrop-blur-md transition-all">
      {/* Brand Logo & Company Name */}
      <button
        id="navbar-logo-btn"
        onClick={() => handleNavClick('home')}
        className="flex items-center text-left focus:outline-none hover:opacity-90 transition-opacity"
      >
        <OfficialLogo size="md" />
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider uppercase">
        {navItems.map((item) => {
          const isActive =
            activeTab === item.id ||
            (item.id === 'services' &&
              (activeTab === 'fleet' ||
                activeTab === 'experiences' ||
                activeTab === 'destinations' ||
                activeTab === 'pricing'));

          return (
            <button
              id={`nav-link-${item.id}`}
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative py-1 text-xs sm:text-sm font-bold tracking-widest transition-colors ${
                isActive
                  ? 'text-[#ff00e6] drop-shadow-[0_0_8px_#ff00e6]'
                  : 'text-gray-300 hover:text-[#00f5ff]'
              }`}
            >
              {item.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ff00e6] shadow-[0_0_6px_#ff00e6]" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Call to Action button for contact */}
      <div className="flex items-center gap-3">
        <button
          id="nav-contact-cta-btn"
          onClick={() => handleNavClick('contact')}
          className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#ff00e6] text-black font-black text-xs uppercase tracking-wider shadow-[0_0_12px_rgba(255,0,230,0.6)] hover:bg-white hover:text-black transition-all active:scale-95 cursor-pointer"
        >
          Contact Us
        </button>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-black/40 border border-white/15 text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#ff00e6]" /> : <Menu className="w-6 h-6 text-[#00f5ff]" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-[#0d0221]/98 backdrop-blur-xl border-t border-white/10 z-50 flex flex-col p-6 overflow-y-auto">
          <div className="flex flex-col gap-3 font-bold uppercase tracking-widest text-sm mb-6">
            {navItems.map((item) => (
              <button
                id={`mobile-nav-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-3 px-4 rounded-xl text-left border ${
                  activeTab === item.id
                    ? 'bg-[#1a0b2e] border-[#ff00e6] text-[#ff00e6] shadow-[0_0_15px_rgba(255,0,230,0.3)]'
                    : 'bg-black/30 border-white/10 text-gray-200 hover:border-[#00f5ff]/40'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-white/10">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3.5 rounded-xl bg-[#ff00e6] text-black font-black uppercase text-center shadow-[0_0_15px_rgba(255,0,230,0.7)]"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

