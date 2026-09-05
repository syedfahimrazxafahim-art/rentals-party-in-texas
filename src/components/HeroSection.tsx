import React, { useState } from 'react';
import { BUSINESS_INFO, PRICING_PACKAGES } from '../data/boatData';
import { InteractiveBoat3D } from './InteractiveBoat3D';
import { MessageCircle, Calendar, ArrowRight, ShieldCheck, Waves, Users, Sparkles, MapPin, Check } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: (prefill?: { lake?: string; hours?: number }) => void;
  onNavigateTab: (tab: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onNavigateTab,
}) => {
  const [selectedLake, setSelectedLake] = useState('Lake Lewisville');
  const [selectedDuration, setSelectedDuration] = useState(3);

  const handleQuickBook = () => {
    onOpenBooking({ lake: selectedLake, hours: selectedDuration });
  };

  return (
    <section className="relative w-full pt-6 sm:pt-10 pb-16 px-4 sm:px-8 lg:px-10 overflow-hidden">
      {/* Background Neon Ambient Glow Spheres from Theme */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#240046] rounded-full filter blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#00f5ff] rounded-full filter blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff00e6]/10 rounded-full filter blur-[140px] pointer-events-none" />

      {/* Main Grid: Left Column Hero Typography, Right Column Glow Booking Card */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center mb-16 relative z-10">
        {/* Left Column: Display Branding & Stat Cards */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Hero Skewed Title */}
          <h1 className="text-[54px] sm:text-[80px] lg:text-[96px] leading-[0.88] font-black italic uppercase text-white mb-6 transform -skew-x-6 select-none font-heading">
            <span className="text-[#00f5ff] drop-shadow-[0_0_14px_#00f5ff]">Neon</span> <br />
            Tropical <br />
            <span className="text-[#ff00e6] drop-shadow-[0_0_14px_#ff00e6]">Vibes</span>
          </h1>

          {/* Value Prop Narrative */}
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mb-8 leading-relaxed border-l-4 border-[#39ff14] pl-5 sm:pl-6 bg-black/20 py-2 rounded-r-xl">
            Experience Dallas-Fort Worth’s ultimate lake party. Luxury 12-guest pontoon boat rentals featuring immersive neon underglow LEDs, pro Bluetooth marine audio, dual Bimini shade, and the electrifying vibe of summer beach nightlife.
          </p>

          {/* Quick Metrics Badges from Theme */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-black/60 border border-cyan-500/50 p-3.5 sm:p-4 rounded-2xl flex items-center gap-3.5 w-48 sm:w-52 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
              <div className="text-2xl sm:text-3xl">🛥️</div>
              <div>
                <p className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
                  Capacity
                </p>
                <p className="text-base sm:text-lg font-bold text-white">
                  Up to 12 Guests
                </p>
              </div>
            </div>

            <div className="bg-black/60 border border-pink-500/50 p-3.5 sm:p-4 rounded-2xl flex items-center gap-3.5 w-48 sm:w-52 shadow-[0_0_15px_rgba(255,0,230,0.2)]">
              <div className="text-2xl sm:text-3xl">🔊</div>
              <div>
                <p className="text-[10px] uppercase font-bold text-pink-400 tracking-wider">
                  Sound System
                </p>
                <p className="text-base sm:text-lg font-bold text-white">
                  Pro Marine Audio
                </p>
              </div>
            </div>

            <div className="bg-black/60 border border-[#39ff14]/50 p-3.5 sm:p-4 rounded-2xl flex items-center gap-3.5 w-48 sm:w-52 shadow-[0_0_15px_rgba(57,255,20,0.2)]">
              <div className="text-2xl sm:text-3xl">🍻</div>
              <div>
                <p className="text-[10px] uppercase font-bold text-[#39ff14] tracking-wider">
                  Party Ready
                </p>
                <p className="text-base sm:text-lg font-bold text-white">
                  100% BYOB & BYOE
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              id="hero-reserve-btn"
              onClick={() => onOpenBooking()}
              className="px-8 py-4 rounded-xl bg-[#39ff14] hover:bg-white text-black font-black uppercase text-base sm:text-lg tracking-wider shadow-[0_0_20px_#39ff14] hover:shadow-[0_0_25px_#ffffff] transition-all transform active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>Instant Reservation</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              id="hero-whatsapp-btn"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-[#00f5ff]/15 hover:bg-[#00f5ff]/25 border-2 border-[#00f5ff] text-[#00f5ff] font-bold text-sm sm:text-base uppercase tracking-wider shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-[#39ff14]" />
              <span>Chat WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Right Column: High Impact Booking Card from Vibrant Theme */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-6">
          <div className="bg-[#1a0b2e] border-2 border-[#ff00e6] rounded-3xl p-6 sm:p-8 shadow-[0_0_30px_rgba(255,0,230,0.3)] relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight flex items-center gap-2 font-heading">
                <span className="w-3 h-3 bg-[#39ff14] rounded-full shadow-[0_0_10px_#39ff14] animate-pulse" />
                Book Your Glow Party
              </h3>
              <span className="px-2.5 py-1 rounded-full bg-[#ff00e6]/20 border border-[#ff00e6] text-[#ff00e6] text-[10px] font-black tracking-wider uppercase">
                $50 Off Specials
              </span>
            </div>

            {/* Interactive Selectors */}
            <div className="space-y-4">
              {/* Lake Destination Select */}
              <div className="bg-black/50 p-3.5 rounded-xl border border-white/10">
                <label className="text-[10px] text-gray-400 uppercase font-bold mb-1.5 flex items-center justify-between">
                  <span>Select Lake Destination</span>
                  <span className="text-[#00f5ff]">Dallas Area</span>
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {['Lake Lewisville', 'Joe Pool Lake', 'Ray Hubbard'].map((lake) => (
                    <button
                      key={lake}
                      onClick={() => setSelectedLake(lake)}
                      className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                        selectedLake.includes(lake.split(' ')[0])
                          ? 'bg-[#00f5ff] text-black shadow-[0_0_10px_#00f5ff]'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {lake.replace('Lake ', '')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration Select */}
              <div className="bg-black/50 p-3.5 rounded-xl border border-white/10">
                <label className="text-[10px] text-gray-400 uppercase font-bold mb-1.5 flex items-center justify-between">
                  <span>Duration & Starting Price</span>
                  <span className="text-[#39ff14]">Save $50 Today</span>
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { hrs: 2, price: '$450' },
                    { hrs: 3, price: '$600', pop: true },
                    { hrs: 4, price: '$750' },
                  ].map((tier) => (
                    <button
                      key={tier.hrs}
                      onClick={() => setSelectedDuration(tier.hrs)}
                      className={`py-2 px-2 rounded-lg text-center transition-all relative ${
                        selectedDuration === tier.hrs
                          ? 'bg-[#ff00e6] text-black font-black shadow-[0_0_12px_#ff00e6]'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {tier.pop && (
                        <span className="absolute -top-1.5 right-1 px-1 text-[8px] bg-[#39ff14] text-black rounded font-black">
                          Top
                        </span>
                      )}
                      <div className="text-xs font-bold">{tier.hrs} Hours</div>
                      <div className="text-[11px] font-black">{tier.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* WhatsApp Direct Line */}
              <div className="bg-black/40 p-4 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <label className="text-[10px] text-gray-400 uppercase font-bold mb-0.5 block">
                    Direct WhatsApp Reservation
                  </label>
                  <p className="text-xl font-bold text-[#00f5ff] drop-shadow-[0_0_8px_#00f5ff]">
                    {BUSINESS_INFO.phone}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#00f5ff]/20 border border-[#00f5ff] flex items-center justify-center text-[#00f5ff]">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </div>

              {/* Official Email */}
              <div className="bg-black/40 p-3 rounded-xl border border-white/10">
                <label className="text-[10px] text-gray-500 uppercase font-bold mb-0.5 block">
                  Official Email Inquiries
                </label>
                <p className="text-sm font-medium text-gray-200">
                  {BUSINESS_INFO.email}
                </p>
              </div>

              {/* Check Availability CTA Button */}
              <button
                id="hero-card-check-avail-btn"
                onClick={handleQuickBook}
                className="w-full bg-[#39ff14] text-black py-4 rounded-xl font-black uppercase text-lg hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_#39ff14] cursor-pointer"
              >
                <span>Check Availability →</span>
              </button>
            </div>
          </div>

          {/* Social Proof +500 Reviews Badge */}
          <div className="flex items-center gap-4 px-5 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#0d0221] bg-gradient-to-tr from-[#ff00e6] to-[#240046] flex items-center justify-center text-xs font-bold">
                TX
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-[#0d0221] bg-gradient-to-tr from-[#00f5ff] to-[#0d0221] flex items-center justify-center text-xs font-bold">
                DFW
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-[#0d0221] bg-gradient-to-tr from-[#39ff14] to-[#0d0221] flex items-center justify-center text-xs font-bold">
                ★5
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-300">
                <span className="text-white font-bold text-base">+500 Happy Renters</span>{' '}
                from Dallas & North Texas
              </p>
              <div className="flex items-center gap-1 text-[#39ff14] text-xs">
                <span>★★★★★</span>
                <span className="text-gray-400 text-[11px]">(5.0 Star Rated Boat Experience)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded 3D Interactive Boat & Deck Amenities Tour */}
      <div className="max-w-7xl mx-auto mt-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-4xl font-black italic uppercase text-white font-heading">
            Step Aboard The <span className="text-[#00f5ff]">#TexasFlo</span> Pontoon
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mt-1">
            Click any pulsating hotspot on the boat to view amenities, sound equipment, shade biminis, and night glow systems.
          </p>
        </div>

        <InteractiveBoat3D onBookNow={() => onOpenBooking()} />
      </div>
    </section>
  );
};
