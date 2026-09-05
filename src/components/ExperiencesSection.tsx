import React from 'react';
import { EXPERIENCES, BUSINESS_INFO } from '../data/boatData';
import { Sparkles, Calendar, Music, Flame, Users, Check, ArrowRight, MessageCircle } from 'lucide-react';

interface ExperiencesSectionProps {
  onOpenBooking: (prefill?: { experience?: string }) => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full py-12 px-4 sm:px-8 lg:px-10">
      {/* Atmosphere Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#ff00e6]/15 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00f5ff]/15 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center relative z-10">
        <h2 className="text-3xl sm:text-5xl font-black italic uppercase text-white font-heading">
          Curated Lake <span className="text-[#00f5ff]">Experiences</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mt-3">
          From bohemian Mexican beach club energy at Tulum on the Water to neon blacklight glow cove parties, we redefine Dallas lake recreation.
        </p>
      </div>

      {/* Experiences Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className={`rounded-3xl p-6 sm:p-8 border-2 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group ${
              exp.color === 'pink'
                ? 'bg-[#1a0b2e] border-[#ff00e6]/60 shadow-[0_0_30px_rgba(255,0,230,0.2)] hover:border-[#ff00e6]'
                : exp.color === 'cyan'
                ? 'bg-[#0f1035] border-[#00f5ff]/60 shadow-[0_0_30px_rgba(0,245,255,0.2)] hover:border-[#00f5ff]'
                : exp.color === 'green'
                ? 'bg-[#0a1f14] border-[#39ff14]/60 shadow-[0_0_30px_rgba(57,255,20,0.2)] hover:border-[#39ff14]'
                : 'bg-[#1e0f35] border-purple-500/60 shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:border-purple-500'
            }`}
          >
            {/* Top Tag & Price */}
            <div>
              {/* Experience Real Image Banner */}
              {exp.imageUrl && (
                <div className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-5 border border-white/15 relative">
                  <img
                    src={exp.imageUrl}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              )}

              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                    exp.color === 'pink'
                      ? 'bg-[#ff00e6] text-black shadow-[0_0_10px_#ff00e6]'
                      : exp.color === 'cyan'
                      ? 'bg-[#00f5ff] text-black shadow-[0_0_10px_#00f5ff]'
                      : exp.color === 'green'
                      ? 'bg-[#39ff14] text-black shadow-[0_0_10px_#39ff14]'
                      : 'bg-purple-500 text-black'
                  }`}
                >
                  {exp.tag}
                </span>

                <div className="flex items-baseline gap-2">
                  {exp.originalPrice && (
                    <span className="text-xs text-gray-500 line-through">
                      ${exp.originalPrice}
                    </span>
                  )}
                  <span className="text-2xl font-black text-white font-heading">
                    ${exp.price}
                  </span>
                  <span className="text-[11px] text-gray-400">/ {exp.duration}</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl sm:text-3xl font-black italic uppercase text-white font-heading">
                {exp.title}
              </h3>
              <p
                className={`text-xs font-bold uppercase tracking-wider mt-1 mb-3 ${
                  exp.color === 'pink'
                    ? 'text-[#ff00e6]'
                    : exp.color === 'cyan'
                    ? 'text-[#00f5ff]'
                    : exp.color === 'green'
                    ? 'text-[#39ff14]'
                    : 'text-purple-400'
                }`}
              >
                {exp.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Inclusions / Highlights */}
              <div className="space-y-2 mb-6">
                <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                  Experience Highlights:
                </div>
                {exp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-200">
                    <Check
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        exp.color === 'pink'
                          ? 'text-[#ff00e6]'
                          : exp.color === 'cyan'
                          ? 'text-[#00f5ff]'
                          : 'text-[#39ff14]'
                      }`}
                    />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Footer: Ideal For & CTA */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
              <div className="text-[11px] text-gray-400">
                <span className="font-bold text-gray-300">Perfect For:</span> {exp.idealFor}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenBooking({ experience: exp.title })}
                  className={`px-5 py-2.5 rounded-xl font-black uppercase text-xs tracking-wider text-black transition-all cursor-pointer flex items-center gap-1.5 ${
                    exp.color === 'pink'
                      ? 'bg-[#ff00e6] hover:bg-white shadow-[0_0_15px_#ff00e6]'
                      : exp.color === 'cyan'
                      ? 'bg-[#00f5ff] hover:bg-white shadow-[0_0_15px_#00f5ff]'
                      : 'bg-[#39ff14] hover:bg-white shadow-[0_0_15px_#39ff14]'
                  }`}
                >
                  <span>Book This</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Flyer Callout: Lake Boat DJ Experience */}
      <div className="max-w-7xl mx-auto mt-12 bg-black/70 border border-[#00f5ff]/40 rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#ff00e6] to-[#00f5ff] flex items-center justify-center text-black font-black text-2xl shrink-0 shadow-[0_0_20px_#00f5ff]">
            DJ
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[9px] bg-[#39ff14] text-black rounded font-black uppercase">
                Featured Partner
              </span>
              <span className="text-xs text-[#00f5ff] font-bold">In Partnership with DJ Prez Taino</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-heading mt-1">
              Need A Live DJ On The Water?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl mt-1">
              Link up with 10+ boats on our island floating dock. We bring commercial marine sound, pro mixing, and crowd-pleasing lake energy.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#00f5ff] text-black font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_15px_#00f5ff] flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Inquire DJ Package</span>
          </a>
        </div>
      </div>
    </section>
  );
};
