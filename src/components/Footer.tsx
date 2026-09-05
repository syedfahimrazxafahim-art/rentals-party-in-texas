import React from 'react';
import { BUSINESS_INFO } from '../data/boatData';
import { PageTab } from '../types';
import { OfficialLogo } from './OfficialLogo';
import { MessageCircle, Phone, Mail, MapPin, Facebook, Instagram, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigateTab: (tab: PageTab) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab, onOpenBooking }) => {
  return (
    <footer className="w-full bg-black/90 border-t-2 border-[#ff00e6]/40 pt-12 pb-8 px-4 sm:px-8 lg:px-10 text-gray-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Col 1: Brand & Bio */}
        <div className="space-y-4">
          <OfficialLogo size="md" />
          <p className="text-xs text-gray-300 leading-relaxed">
            Dallas-Fort Worth’s premier luxury party pontoon boat rentals. Specializing in high-energy Party Cove tie-ups, sunset cruises, and neon night glow lake experiences.
          </p>
          <div className="p-3 rounded-xl bg-[#1a0b2e] border border-[#39ff14]/30">
            <p className="text-[11px] font-bold text-white italic">
              "{BUSINESS_INFO.motto}"
            </p>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest text-[#00f5ff] mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs font-bold uppercase">
            <li>
              <button
                onClick={() => onNavigateTab('home')}
                className="hover:text-[#ff00e6] transition-colors"
              >
                Home & 3D Tour
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateTab('fleet')}
                className="hover:text-[#ff00e6] transition-colors"
              >
                The Fleet & Amenities
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateTab('experiences')}
                className="hover:text-[#ff00e6] transition-colors"
              >
                Glow Parties & Nightlife
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateTab('destinations')}
                className="hover:text-[#ff00e6] transition-colors"
              >
                Dallas Lakes Guide
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateTab('pricing')}
                className="hover:text-[#ff00e6] transition-colors"
              >
                Pricing & $50 Off Specials
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateTab('gallery')}
                className="hover:text-[#ff00e6] transition-colors"
              >
                #TexasFlo Vibes Gallery
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Lake Operating Areas */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest text-[#ff00e6] mb-4">
            DFW Lakes Covered
          </h4>
          <ul className="space-y-3 text-xs">
            <li>
              <strong className="text-white block">Lake Lewisville</strong>
              <span className="text-[11px] text-gray-400">
                Party Cove • Pier 121 • Sneaky Pete's area
              </span>
            </li>
            <li>
              <strong className="text-white block">Joe Pool Lake</strong>
              <span className="text-[11px] text-gray-400">
                Lynn Creek Marina • Scenic Bluffs
              </span>
            </li>
            <li>
              <strong className="text-white block">Lake Ray Hubbard</strong>
              <span className="text-[11px] text-gray-400">
                Wind Surf Bay • Laser & Fog Glow Nights
              </span>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact & Social */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest text-[#39ff14] mb-4">
            Reservation Desk
          </h4>
          <div className="space-y-2.5 text-xs">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#00f5ff]" />
              <span className="text-white font-bold">{BUSINESS_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#ff00e6]" />
              <span>{BUSINESS_INFO.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#39ff14]" />
              <span>Dallas, Texas</span>
            </div>

            <div className="pt-2 flex gap-3 text-sm font-bold uppercase">
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00f5ff] hover:text-white transition-colors"
              >
                Facebook
              </a>
              <span>•</span>
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff00e6] hover:text-white transition-colors"
              >
                Instagram
              </a>
              <span>•</span>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#39ff14] hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-3 w-full py-2.5 rounded-xl bg-[#ff00e6] text-black font-black uppercase text-xs shadow-[0_0_15px_#ff00e6] hover:bg-white transition-all cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar from Theme */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="text-gray-500 uppercase tracking-widest text-[11px]">
          &copy; {new Date().getFullYear()} TEXAS FLO BOAT RENTAL LLC • DALLAS, TX
        </div>

        <div className="text-[11px] text-gray-500 uppercase tracking-widest">
          Luxury • Adventure • Freedom • Lake Life
        </div>
      </div>
    </footer>
  );
};
