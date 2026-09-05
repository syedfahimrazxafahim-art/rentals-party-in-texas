import React, { useState } from 'react';
import { DESTINATIONS, BUSINESS_INFO } from '../data/boatData';
import { MapPin, Waves, Navigation, Clock, Sparkles, ArrowRight } from 'lucide-react';

interface DestinationsSectionProps {
  onOpenBooking: (prefill?: { lake?: string }) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ onOpenBooking }) => {
  const [selectedId, setSelectedId] = useState(DESTINATIONS[0].id);
  const activeDest = DESTINATIONS.find((d) => d.id === selectedId) || DESTINATIONS[0];

  return (
    <section className="relative w-full py-12 px-4 sm:px-8 lg:px-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-3xl sm:text-5xl font-black italic uppercase text-white font-heading">
          Dallas Lake <span className="text-[#ff00e6]">Destinations</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mt-3">
          We operate across the premier recreational and party lakes in the Dallas-Fort Worth metroplex.
        </p>
      </div>

      {/* Lake Tabs Selector */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3 mb-8">
        {DESTINATIONS.map((lake) => {
          const isSelected = selectedId === lake.id;
          return (
            <button
              key={lake.id}
              onClick={() => setSelectedId(lake.id)}
              className={`px-5 py-3 rounded-2xl font-black uppercase text-xs sm:text-sm tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 border ${
                isSelected
                  ? lake.color === 'pink'
                    ? 'bg-[#ff00e6] text-black border-white shadow-[0_0_20px_rgba(255,0,230,0.8)]'
                    : lake.color === 'cyan'
                    ? 'bg-[#00f5ff] text-black border-white shadow-[0_0_20px_rgba(0,245,255,0.8)]'
                    : 'bg-[#39ff14] text-black border-white shadow-[0_0_20px_rgba(57,255,20,0.8)]'
                  : 'bg-black/50 border-white/10 text-gray-300 hover:border-[#00f5ff]/40'
              }`}
            >
              <Waves className="w-4 h-4" />
              <span>{lake.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Lake Showcase Card */}
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#1a0b2e] via-[#0d0221] to-[#150a26] border-2 border-[#ff00e6]/40 rounded-3xl p-6 sm:p-10 shadow-[0_0_35px_rgba(255,0,230,0.2)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Lake Details & Launch Points */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#39ff14] shadow-[0_0_8px_#39ff14]" />
              <span className="text-xs font-bold tracking-widest text-[#39ff14] uppercase">
                {activeDest.location}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black italic uppercase text-white font-heading">
              {activeDest.name}
            </h3>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00f5ff] mb-4">
              {activeDest.tagline}
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              {activeDest.description}
            </p>

            {/* Launch & Vibe Spec Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-black/50 p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase mb-1">
                  <Navigation className="w-3.5 h-3.5 text-[#00f5ff]" />
                  <span>Primary Launch Area</span>
                </div>
                <p className="text-sm font-bold text-white">
                  {activeDest.launchPoint}
                </p>
              </div>

              <div className="bg-black/50 p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#ff00e6]" />
                  <span>Best Time To Cruise</span>
                </div>
                <p className="text-sm font-bold text-white">
                  {activeDest.bestTime}
                </p>
              </div>
            </div>

            {/* Signature Events at This Lake */}
            <div className="p-4 rounded-xl bg-black/40 border border-[#39ff14]/30 mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#39ff14] block mb-1">
                Signature #TexasFlo Events Here:
              </span>
              <p className="text-xs sm:text-sm font-medium text-gray-200">
                {activeDest.popularEvents}
              </p>
            </div>

            <button
              onClick={() => onOpenBooking({ lake: activeDest.name })}
              className="px-8 py-4 rounded-xl bg-[#39ff14] hover:bg-white text-black font-black uppercase text-sm tracking-wider shadow-[0_0_20px_#39ff14] transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Book {activeDest.name} Cruise</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Real Lake Photo + Launch Details */}
          <div className="lg:col-span-5 bg-black/60 border border-[#00f5ff]/40 rounded-2xl overflow-hidden flex flex-col shadow-lg">
            {activeDest.imageUrl && (
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={activeDest.imageUrl}
                  alt={activeDest.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase bg-[#ff00e6] text-black shadow-[0_0_10px_#ff00e6]">
                    {activeDest.name}
                  </span>
                  <span className="text-[11px] font-bold text-white bg-black/70 px-2.5 py-1 rounded-md border border-white/20">
                    {activeDest.name === 'Lake Lewisville' ? 'Party Cove Tie-Up' : activeDest.name === 'Joe Pool Lake' ? 'Lynn Creek Marina' : 'Wind Surf Bay'}
                  </span>
                </div>
              </div>
            )}
            <div className="p-5 flex flex-col justify-center">
              <span className="text-xs font-bold text-gray-200 block mb-1">
                Official Launch Directions Provided Post-Booking
              </span>
              <span className="text-[11px] text-gray-400">
                Easy ramp access, ample vehicle parking & dockside host greeting for your whole group.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
