import React, { useState } from 'react';
import { FLEET_AMENITIES, BUSINESS_INFO } from '../data/boatData';
import { Check, Shield, Zap, Sparkles, Volume2, Users, SunDim, Beer, Anchor, Plus, CheckCircle2 } from 'lucide-react';

interface FleetSectionProps {
  onOpenBooking: () => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onOpenBooking }) => {
  const [selectedAddons, setSelectedAddons] = useState<{ [key: string]: boolean }>({
    floatingPad: true,
    glowPack: false,
    liveDj: false,
  });

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Addon pricing
  const basePrice = 600; // 3-hour popular
  const addonPrices: { [key: string]: number } = {
    floatingPad: 75,
    glowPack: 50,
    liveDj: 200,
  };

  const calculateTotal = () => {
    let total = basePrice;
    if (selectedAddons.floatingPad) total += addonPrices.floatingPad;
    if (selectedAddons.glowPack) total += addonPrices.glowPack;
    if (selectedAddons.liveDj) total += addonPrices.liveDj;
    return total;
  };

  return (
    <section className="relative w-full py-12 px-4 sm:px-8 lg:px-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h2 className="text-3xl sm:text-5xl font-black italic uppercase text-white font-heading">
          The <span className="text-[#ff00e6] drop-shadow-[0_0_12px_#ff00e6]">#TexasFlo</span> Pontoon Fleet
        </h2>
        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mt-3">
          Custom-rigged for Dallas lake parties, daytime sunbathing, and vibrant night glow cove tie-ups. Crafted for comfort, safety, and maximum sound performance.
        </p>
      </div>

      {/* Featured Real Pontoon Craft Banner */}
      <div className="max-w-7xl mx-auto mb-12 rounded-3xl overflow-hidden border-2 border-[#00f5ff]/40 relative bg-black/60 shadow-[0_0_30px_rgba(0,245,255,0.2)]">
        <div className="relative h-64 sm:h-96 w-full overflow-hidden">
          <img
            src="https://res.cloudinary.com/fzobzdco/image/upload/v1788568033/778486109_1092568680420710_8820108875930322956_n.jpg"
            alt="Official #TexasFlo Luxury Party Pontoon"
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0221] via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-[#39ff14] text-black shadow-[0_0_10px_#39ff14]">
                Official #TexasFlo Craft
              </span>
              <h3 className="text-2xl sm:text-4xl font-black italic uppercase text-white font-heading mt-2">
                24-Foot Luxury High-Capacity Pontoon
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 mt-1 max-w-xl">
                Features pro Bluetooth marine audio, double bimini canopy shade, plush wraparound seating, underwater LED lighting & swim platform.
              </p>
            </div>
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-3 rounded-xl bg-[#ff00e6] hover:bg-white text-black font-black uppercase text-xs sm:text-sm shadow-[0_0_15px_#ff00e6] transition-all cursor-pointer"
            >
              Reserve This Boat
            </button>
          </div>
        </div>
      </div>

      {/* Specifications & Amenity Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {FLEET_AMENITIES.map((amenity) => (
          <div
            key={amenity.id}
            className={`p-6 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
              amenity.highlight
                ? 'bg-[#1a0b2e] border-[#ff00e6]/50 shadow-[0_0_20px_rgba(255,0,230,0.2)] hover:border-[#ff00e6]'
                : 'bg-black/50 border-white/10 hover:border-[#00f5ff]/40 shadow-lg'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-black/60 border border-[#00f5ff]/40 flex items-center justify-center text-[#00f5ff] mb-4 group-hover:scale-110 group-hover:text-[#ff00e6] group-hover:border-[#ff00e6] transition-all">
              {amenity.icon === 'Users' && <Users className="w-6 h-6" />}
              {amenity.icon === 'Volume2' && <Volume2 className="w-6 h-6" />}
              {amenity.icon === 'SunDim' && <SunDim className="w-6 h-6" />}
              {amenity.icon === 'Beer' && <Beer className="w-6 h-6" />}
              {amenity.icon === 'Zap' && <Zap className="w-6 h-6" />}
              {amenity.icon === 'Anchor' && <Anchor className="w-6 h-6" />}
              {amenity.icon === 'ShieldCheck' && <Shield className="w-6 h-6" />}
              {amenity.icon === 'Layers' && <Sparkles className="w-6 h-6" />}
            </div>

            <h3 className="text-lg font-bold text-white mb-2 font-heading flex items-center justify-between">
              <span>{amenity.name}</span>
              {amenity.highlight && (
                <span className="w-2 h-2 rounded-full bg-[#39ff14] shadow-[0_0_6px_#39ff14]" />
              )}
            </h3>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {amenity.description}
            </p>
          </div>
        ))}
      </div>

      {/* Interactive Add-On Configurator */}
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#1a0b2e] via-[#0d0221] to-[#1a0b2e] border-2 border-[#00f5ff]/50 rounded-3xl p-6 sm:p-10 shadow-[0_0_35px_rgba(0,245,255,0.2)] relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h3 className="text-2xl sm:text-4xl font-black italic uppercase text-white font-heading mb-4">
              Interactive Party Add-On Configurator
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
              Take your party pontoon to the next level. Select premium extras like our huge 18ft floating water lily pad, neon glow light upgrade, or partner with our live lake DJ tie-up!
            </p>

            <div className="space-y-3">
              {/* Option 1: Floating Pad */}
              <button
                onClick={() => toggleAddon('floatingPad')}
                className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                  selectedAddons.floatingPad
                    ? 'bg-[#240046] border-[#ff00e6] shadow-[0_0_15px_rgba(255,0,230,0.4)]'
                    : 'bg-black/40 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center border ${
                      selectedAddons.floatingPad
                        ? 'bg-[#ff00e6] border-white text-black'
                        : 'border-gray-500 text-transparent'
                    }`}
                  >
                    <Check className="w-4 h-4 font-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-white">
                      18-Foot Floating Island Lily Pad Mat
                    </h4>
                    <p className="text-xs text-gray-400">
                      Unrolls on the water for up to 6 people to lounge, sunbathe & sip drinks.
                    </p>
                  </div>
                </div>
                <span className="font-black text-[#00f5ff] text-sm sm:text-base whitespace-nowrap ml-2">
                  +$75
                </span>
              </button>

              {/* Option 2: Glow Pack */}
              <button
                onClick={() => toggleAddon('glowPack')}
                className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                  selectedAddons.glowPack
                    ? 'bg-[#240046] border-[#00f5ff] shadow-[0_0_15px_rgba(0,245,255,0.4)]'
                    : 'bg-black/40 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center border ${
                      selectedAddons.glowPack
                        ? 'bg-[#00f5ff] border-white text-black'
                        : 'border-gray-500 text-transparent'
                    }`}
                  >
                    <Check className="w-4 h-4 font-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-white">
                      VIP Neon Glow Package & Accessories
                    </h4>
                    <p className="text-xs text-gray-400">
                      Underglow LED synchronization, neon glow sticks, body paint & party accessories.
                    </p>
                  </div>
                </div>
                <span className="font-black text-[#ff00e6] text-sm sm:text-base whitespace-nowrap ml-2">
                  +$50
                </span>
              </button>

              {/* Option 3: Live DJ Experience */}
              <button
                onClick={() => toggleAddon('liveDj')}
                className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                  selectedAddons.liveDj
                    ? 'bg-[#240046] border-[#39ff14] shadow-[0_0_15px_rgba(57,255,20,0.4)]'
                    : 'bg-black/40 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center border ${
                      selectedAddons.liveDj
                        ? 'bg-[#39ff14] border-white text-black'
                        : 'border-gray-500 text-transparent'
                    }`}
                  >
                    <Check className="w-4 h-4 font-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-white">
                      Lake Boat Live DJ Tie-Up (DJ Prez Taino)
                    </h4>
                    <p className="text-xs text-gray-400">
                      Commercial marine sound system tie-up with live DJ performance on the water.
                    </p>
                  </div>
                </div>
                <span className="font-black text-[#39ff14] text-sm sm:text-base whitespace-nowrap ml-2">
                  +$200
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Summary Box */}
          <div className="lg:col-span-5 bg-black/60 border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                Estimated Experience Total
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl sm:text-5xl font-black text-white font-heading">
                  ${calculateTotal()}
                </span>
                <span className="text-xs text-gray-400">
                  / 3-Hour Package + Extras
                </span>
              </div>

              <div className="space-y-2 py-3 border-y border-white/10 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>3-Hour Luxury Pontoon (12 Guests)</span>
                  <span className="font-bold text-white">$600</span>
                </div>
                {selectedAddons.floatingPad && (
                  <div className="flex justify-between text-[#00f5ff]">
                    <span>+ 18ft Floating Lily Pad</span>
                    <span className="font-bold">+$75</span>
                  </div>
                )}
                {selectedAddons.glowPack && (
                  <div className="flex justify-between text-[#ff00e6]">
                    <span>+ VIP Neon Glow Pack</span>
                    <span className="font-bold">+$50</span>
                  </div>
                )}
                {selectedAddons.liveDj && (
                  <div className="flex justify-between text-[#39ff14]">
                    <span>+ Live DJ Tie-Up Experience</span>
                    <span className="font-bold">+$200</span>
                  </div>
                )}
              </div>

              <div className="text-[11px] text-gray-400 mt-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#39ff14]" />
                Includes $50 promotional discount already applied!
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-6 w-full py-4 rounded-xl bg-[#ff00e6] hover:bg-white text-black font-black uppercase text-base tracking-wider shadow-[0_0_20px_rgba(255,0,230,0.8)] transition-all cursor-pointer"
            >
              Lock In This Custom Build →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
