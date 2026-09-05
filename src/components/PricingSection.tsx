import React, { useState } from 'react';
import { PRICING_PACKAGES, FAQS, BUSINESS_INFO } from '../data/boatData';
import { Check, Shield, ChevronDown, ChevronUp, Sparkles, MessageCircle, AlertCircle } from 'lucide-react';

interface PricingSectionProps {
  onOpenBooking: (prefill?: { hours?: number }) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="relative w-full py-12 px-4 sm:px-8 lg:px-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-3xl sm:text-5xl font-black italic uppercase text-white font-heading">
          Pricing & <span className="text-[#ff00e6]">Specials</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mt-3">
          Transparent rates for up to 12 guests. Take advantage of our limited-time $50 OFF promotional pricing on all packages!
        </p>
      </div>

      {/* Promotional Banner: Early Bird Special */}
      <div className="max-w-7xl mx-auto mb-10 bg-gradient-to-r from-[#240046] via-[#1a0b2e] to-[#240046] border-2 border-[#39ff14]/70 rounded-2xl p-4 sm:p-6 shadow-[0_0_25px_rgba(57,255,20,0.3)] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#39ff14] text-black font-black flex items-center justify-center text-xl shadow-[0_0_15px_#39ff14] shrink-0">
            ☀️
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[9px] bg-[#39ff14] text-black font-black uppercase rounded">
                Early Bird Morning Deal
              </span>
              <span className="text-xs text-[#00f5ff] font-bold">Departures Before 12:00 PM</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black uppercase text-white font-heading mt-0.5">
              Beat The Heat. Beat The Crowd. Save Money.
            </h3>
            <p className="text-xs text-gray-300">
              Calm, glassy waters and cooler morning temperatures. Extra discounts available on all morning time slots!
            </p>
          </div>
        </div>

        <button
          onClick={() => onOpenBooking({ hours: 3 })}
          className="px-6 py-3 rounded-xl bg-[#39ff14] text-black font-black uppercase text-xs sm:text-sm tracking-wider hover:bg-white transition-all shadow-[0_0_15px_#39ff14] cursor-pointer whitespace-nowrap"
        >
          Book Early Bird Slot →
        </button>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {PRICING_PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-2 transition-all duration-300 relative overflow-hidden ${
              pkg.popular
                ? 'bg-[#1a0b2e] border-[#ff00e6] shadow-[0_0_35px_rgba(255,0,230,0.3)] transform md:-translate-y-2'
                : 'bg-black/50 border-white/10 hover:border-[#00f5ff]/40 shadow-xl'
            }`}
          >
            {/* Top Badge */}
            {pkg.popular && (
              <div className="absolute top-0 right-0 bg-[#ff00e6] text-black font-black text-[10px] tracking-wider uppercase px-4 py-1.5 rounded-bl-xl shadow-[0_0_10px_#ff00e6]">
                Most Popular
              </div>
            )}

            <div>
              <div className="text-xs font-bold text-[#00f5ff] uppercase tracking-wider mb-1">
                {pkg.hours}-Hour Experience
              </div>
              <h3 className="text-2xl sm:text-3xl font-black italic uppercase text-white font-heading mb-4">
                {pkg.title}
              </h3>

              {/* Price Line */}
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl sm:text-6xl font-black text-white font-heading">
                  ${pkg.price}
                </span>
                {pkg.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    ${pkg.originalPrice}
                  </span>
                )}
              </div>

              {pkg.savings && (
                <div className="inline-block px-2.5 py-1 rounded-full bg-[#39ff14]/20 border border-[#39ff14] text-[#39ff14] text-xs font-black mb-6">
                  Save ${pkg.savings} Today
                </div>
              )}

              <p className="text-xs text-gray-300 mb-6 italic">
                {pkg.recommendedFor}
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-200">
                    <div className="w-4 h-4 rounded-full bg-[#ff00e6]/20 border border-[#ff00e6] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#ff00e6]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div>
              <button
                onClick={() => onOpenBooking({ hours: pkg.hours })}
                className={`w-full py-4 rounded-xl font-black uppercase text-sm tracking-wider transition-all cursor-pointer ${
                  pkg.popular
                    ? 'bg-[#ff00e6] text-black hover:bg-white shadow-[0_0_20px_rgba(255,0,230,0.8)]'
                    : 'bg-[#00f5ff] text-black hover:bg-white shadow-[0_0_15px_rgba(0,245,255,0.5)]'
                }`}
              >
                Reserve {pkg.hours} Hours Now
              </button>

              <div className="text-center mt-3 text-[11px] text-gray-400">
                + Extra hours only $125/hr (Reg. $175)
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* What to Bring vs What's Included */}
      <div className="max-w-7xl mx-auto bg-black/50 border border-white/10 rounded-3xl p-6 sm:p-10 mb-16">
        <h3 className="text-2xl font-black uppercase text-white font-heading text-center mb-8">
          Lake Day Preparation Checklist
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Included */}
          <div className="bg-[#1a0b2e]/60 border border-[#39ff14]/40 rounded-2xl p-6">
            <h4 className="text-lg font-black uppercase text-[#39ff14] font-heading flex items-center gap-2 mb-4">
              <span>✓</span> What We Provide (Included)
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-200">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#39ff14]" />
                <span>Luxury 12-passenger pontoon boat in pristine condition</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#39ff14]" />
                <span>Dual Bimini tops covering both front and rear decks</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#39ff14]" />
                <span>Commercial Bluetooth marine sound system with bass</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#39ff14]" />
                <span>Underdeck & interior night glow multi-color LED lighting</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#39ff14]" />
                <span>US Coast Guard certified life vests for all passengers</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#39ff14]" />
                <span>Heavy-duty stainless rear swim ladder & safety gear</span>
              </li>
            </ul>
          </div>

          {/* What to bring */}
          <div className="bg-[#1a0b2e]/60 border border-[#00f5ff]/40 rounded-2xl p-6">
            <h4 className="text-lg font-black uppercase text-[#00f5ff] font-heading flex items-center gap-2 mb-4">
              <span>★</span> What You Bring (BYOB & BYOE)
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-200">
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00f5ff]" />
                <span>Your favorite canned beverages, seltzers, beer, or cocktails</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00f5ff]" />
                <span>Bags of ice and snacks / finger food for your group</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00f5ff]" />
                <span>Beach towels, sunglasses, sunscreen, and swimwear</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00f5ff]" />
                <span>Your phone with downloaded party playlists</span>
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#ff00e6]" />
                <span className="text-[#ff00e6] font-bold">NO GLASS BOTTLES allowed on board for lake safety</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-black italic uppercase text-white font-heading text-center mb-6">
          Frequently Asked <span className="text-[#00f5ff]">Questions</span>
        </h3>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-black/50 border border-white/10 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between font-bold text-sm sm:text-base text-white hover:text-[#00f5ff] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#ff00e6]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
