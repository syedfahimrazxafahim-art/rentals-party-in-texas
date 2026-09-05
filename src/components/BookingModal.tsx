import React, { useState, useEffect } from 'react';
import { DESTINATIONS, EXPERIENCES, PRICING_PACKAGES, BUSINESS_INFO } from '../data/boatData';
import { BookingFormState } from '../types';
import { X, Calendar, Clock, MapPin, Users, Sparkles, Check, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefill?: {
    lake?: string;
    hours?: number;
    experience?: string;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefill,
}) => {
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState<BookingFormState>({
    destination: prefill?.lake || 'Lake Lewisville',
    experienceType: prefill?.experience || 'Sunset & Party Cove Experience',
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    timeSlot: 'Afternoon (1:00 PM – 4:00 PM)',
    durationHours: prefill?.hours || 3,
    guestCount: 8,
    addOnIslandDock: true,
    addOnLiveDJ: false,
    addOnGlowPack: false,
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    notes: '',
  });

  useEffect(() => {
    if (prefill) {
      setFormState((prev) => ({
        ...prev,
        destination: prefill.lake || prev.destination,
        durationHours: prefill.hours || prev.durationHours,
        experienceType: prefill.experience || prev.experienceType,
      }));
    }
  }, [prefill]);

  if (!isOpen) return null;

  // Calculate prices
  const getBaseRate = (hours: number) => {
    if (hours === 2) return 450;
    if (hours === 3) return 600;
    if (hours === 4) return 750;
    return 750 + (hours - 4) * 125;
  };

  const basePrice = getBaseRate(formState.durationHours);
  const addOnLilyPadCost = formState.addOnIslandDock ? 75 : 0;
  const addOnGlowCost = formState.addOnGlowPack ? 50 : 0;
  const addOnDJCost = formState.addOnLiveDJ ? 200 : 0;
  const totalCost = basePrice + addOnLilyPadCost + addOnGlowCost + addOnDJCost;

  const handleWhatsAppBooking = () => {
    const summary = `*Texas Flo Boat Rental Reservation Request*
Name: ${formState.customerName || 'Guest'}
Phone: ${formState.customerPhone || 'N/A'}
Email: ${formState.customerEmail || 'N/A'}
Lake: ${formState.destination}
Experience: ${formState.experienceType}
Date: ${formState.date}
Time Slot: ${formState.timeSlot}
Duration: ${formState.durationHours} Hours
Guests: ${formState.guestCount} (Max 12)
Add-ons: ${formState.addOnIslandDock ? '18ft Lily Pad Mat, ' : ''}${formState.addOnGlowPack ? 'Glow Light Package, ' : ''}${formState.addOnLiveDJ ? 'Live DJ Tie-Up' : 'None'}
Estimated Total: $${totalCost}
Special Notes: ${formState.notes || 'None'}`;

    const url = `https://wa.me/12146702648?text=${encodeURIComponent(summary)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-lg flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#1a0b2e] border-2 border-[#ff00e6] rounded-3xl max-w-2xl w-full shadow-[0_0_50px_rgba(255,0,230,0.4)] relative my-8 overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#39ff14] shadow-[0_0_10px_#39ff14]" />
            <div>
              <h3 className="text-xl font-black uppercase text-white font-heading">
                Instant Reservation Engine
              </h3>
              <p className="text-xs text-[#00f5ff] font-bold">
                Texas Flo • Dallas, TX • +1 (214) 670-2648
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-step progress bar */}
        <div className="flex border-b border-white/10 bg-black/20 text-xs font-bold text-center">
          <button
            onClick={() => setStep(1)}
            className={`flex-1 py-3 border-b-2 transition-colors ${
              step === 1
                ? 'border-[#ff00e6] text-[#ff00e6] bg-[#ff00e6]/10'
                : 'border-transparent text-gray-400'
            }`}
          >
            1. Lake & Time
          </button>
          <button
            onClick={() => setStep(2)}
            className={`flex-1 py-3 border-b-2 transition-colors ${
              step === 2
                ? 'border-[#00f5ff] text-[#00f5ff] bg-[#00f5ff]/10'
                : 'border-transparent text-gray-400'
            }`}
          >
            2. Hours & Add-Ons
          </button>
          <button
            onClick={() => setStep(3)}
            className={`flex-1 py-3 border-b-2 transition-colors ${
              step === 3
                ? 'border-[#39ff14] text-[#39ff14] bg-[#39ff14]/10'
                : 'border-transparent text-gray-400'
            }`}
          >
            3. Confirmation
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 max-h-[70vh] overflow-y-auto">
          {/* STEP 1: Lake, Date, Time Slot */}
          {step === 1 && (
            <div className="space-y-5">
              {/* Destination */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                  Select Dallas Lake
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {DESTINATIONS.map((dest) => (
                    <button
                      key={dest.id}
                      onClick={() =>
                        setFormState({ ...formState, destination: dest.name })
                      }
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        formState.destination === dest.name
                          ? 'bg-[#240046] border-[#00f5ff] text-white shadow-[0_0_12px_#00f5ff]'
                          : 'bg-black/50 border-white/10 text-gray-300 hover:border-white/30'
                      }`}
                    >
                      <div className="text-xs font-black">{dest.name}</div>
                      <div className="text-[10px] text-gray-400 truncate mt-0.5">
                        {dest.tagline.split(' ')[0]}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Picker */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                  Reservation Date
                </label>
                <input
                  type="date"
                  value={formState.date}
                  onChange={(e) =>
                    setFormState({ ...formState, date: e.target.value })
                  }
                  className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00f5ff]"
                />
              </div>

              {/* Time Slot Picker */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                  Select Time Slot
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Morning Early Bird (10 AM – 1 PM)', desc: 'Beat the heat & crowd' },
                    { label: 'Afternoon Peak (1 PM – 4 PM)', desc: 'High energy party cove' },
                    { label: 'Sunset Cruise (4 PM – 7 PM)', desc: 'Golden hour drinks' },
                    { label: 'Night Glow Party (7 PM – 10 PM+)', desc: 'Neon lights & lasers' },
                  ].map((slot) => (
                    <button
                      key={slot.label}
                      onClick={() =>
                        setFormState({ ...formState, timeSlot: slot.label })
                      }
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        formState.timeSlot === slot.label
                          ? 'bg-[#240046] border-[#ff00e6] text-white shadow-[0_0_12px_#ff00e6]'
                          : 'bg-black/50 border-white/10 text-gray-300 hover:border-white/20'
                      }`}
                    >
                      <div className="text-xs font-bold">{slot.label}</div>
                      <div className="text-[10px] text-gray-400">{slot.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={() => setStep(2)}
                className="w-full py-4 rounded-xl bg-[#00f5ff] text-black font-black uppercase text-sm tracking-wider shadow-[0_0_15px_#00f5ff] hover:bg-white transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Continue To Duration & Add-ons</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* STEP 2: Duration, Guests, Add-Ons */}
          {step === 2 && (
            <div className="space-y-5">
              {/* Duration Hours */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                  Select Duration ($50 Promo Discount Applied)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[2, 3, 4].map((hrs) => (
                    <button
                      key={hrs}
                      onClick={() =>
                        setFormState({ ...formState, durationHours: hrs })
                      }
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        formState.durationHours === hrs
                          ? 'bg-[#240046] border-[#ff00e6] text-white shadow-[0_0_12px_#ff00e6]'
                          : 'bg-black/50 border-white/10 text-gray-300'
                      }`}
                    >
                      <div className="text-sm font-black">{hrs} Hours</div>
                      <div className="text-xs font-bold text-[#39ff14]">
                        ${getBaseRate(hrs)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Count Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Guest Count (Max 12 Guests)
                  </label>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#39ff14] text-black font-black text-xs">
                    {formState.guestCount} People
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={formState.guestCount}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      guestCount: parseInt(e.target.value),
                    })
                  }
                  className="w-full accent-[#ff00e6]"
                />
              </div>

              {/* Add-ons */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                  Add-On Water Extras
                </label>
                <div className="space-y-2">
                  <button
                    onClick={() =>
                      setFormState({
                        ...formState,
                        addOnIslandDock: !formState.addOnIslandDock,
                      })
                    }
                    className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      formState.addOnIslandDock
                        ? 'bg-[#240046] border-[#00f5ff] text-white'
                        : 'bg-black/50 border-white/10 text-gray-400'
                    }`}
                  >
                    <span className="text-xs font-bold">
                      18-Ft Giant Floating Lily Pad Mat (+$75)
                    </span>
                    <span className="text-xs font-bold text-[#00f5ff]">
                      {formState.addOnIslandDock ? 'Added ✓' : '+ Add'}
                    </span>
                  </button>

                  <button
                    onClick={() =>
                      setFormState({
                        ...formState,
                        addOnGlowPack: !formState.addOnGlowPack,
                      })
                    }
                    className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      formState.addOnGlowPack
                        ? 'bg-[#240046] border-[#ff00e6] text-white'
                        : 'bg-black/50 border-white/10 text-gray-400'
                    }`}
                  >
                    <span className="text-xs font-bold">
                      VIP Neon Glow Package & Accessories (+$50)
                    </span>
                    <span className="text-xs font-bold text-[#ff00e6]">
                      {formState.addOnGlowPack ? 'Added ✓' : '+ Add'}
                    </span>
                  </button>

                  <button
                    onClick={() =>
                      setFormState({
                        ...formState,
                        addOnLiveDJ: !formState.addOnLiveDJ,
                      })
                    }
                    className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      formState.addOnLiveDJ
                        ? 'bg-[#240046] border-[#39ff14] text-white'
                        : 'bg-black/50 border-white/10 text-gray-400'
                    }`}
                  >
                    <span className="text-xs font-bold">
                      Live DJ Tie-Up Experience (DJ Prez Taino) (+$200)
                    </span>
                    <span className="text-xs font-bold text-[#39ff14]">
                      {formState.addOnLiveDJ ? 'Added ✓' : '+ Add'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3 rounded-xl bg-white/10 text-white font-bold text-xs uppercase hover:bg-white/20 transition-all cursor-pointer"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="w-2/3 py-3 rounded-xl bg-[#00f5ff] text-black font-black uppercase text-sm tracking-wider shadow-[0_0_15px_#00f5ff] hover:bg-white transition-all cursor-pointer"
                >
                  Review Quote & Confirm →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Customer Details & Final Summary */}
          {step === 3 && (
            <div className="space-y-5">
              {/* Quote Breakdown Card */}
              <div className="p-4 rounded-2xl bg-black/60 border border-white/15">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-400 uppercase font-bold">
                    Reservation Total Quote
                  </span>
                  <span className="text-2xl font-black text-[#39ff14] font-heading">
                    ${totalCost}
                  </span>
                </div>
                <div className="text-xs text-gray-300 space-y-1 border-t border-white/10 pt-2">
                  <div>
                    {formState.destination} • {formState.durationHours} Hours •{' '}
                    {formState.guestCount} Guests
                  </div>
                  <div>Date: {formState.date} • {formState.timeSlot}</div>
                </div>
              </div>

              {/* Customer Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] text-gray-400 uppercase font-bold mb-1 block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.customerName}
                    onChange={(e) =>
                      setFormState({ ...formState, customerName: e.target.value })
                    }
                    placeholder="Full Name"
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f5ff]"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-gray-400 uppercase font-bold mb-1 block">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formState.customerPhone}
                    onChange={(e) =>
                      setFormState({ ...formState, customerPhone: e.target.value })
                    }
                    placeholder="(214) 000-0000"
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f5ff]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-gray-400 uppercase font-bold mb-1 block">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formState.customerEmail}
                  onChange={(e) =>
                    setFormState({ ...formState, customerEmail: e.target.value })
                  }
                  placeholder="name@gmail.com"
                  className="w-full bg-black/60 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f5ff]"
                />
              </div>

              <div>
                <label className="text-[10px] text-gray-400 uppercase font-bold mb-1 block">
                  Notes / Celebration Type (Optional)
                </label>
                <input
                  type="text"
                  value={formState.notes}
                  onChange={(e) =>
                    setFormState({ ...formState, notes: e.target.value })
                  }
                  placeholder="e.g. 30th Birthday, Bachelorette, BYOB seltzers"
                  className="w-full bg-black/60 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f5ff]"
                />
              </div>

              {/* Submit CTA */}
              <div className="space-y-2">
                <button
                  onClick={handleWhatsAppBooking}
                  className="w-full py-4 rounded-xl bg-[#ff00e6] hover:bg-white text-black font-black uppercase text-base tracking-wider shadow-[0_0_25px_rgba(255,0,230,0.8)] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 text-black" />
                  <span>Send & Confirm on WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-gray-400">
                  Direct booking connection to +1 (214) 670-2648. No deposit required to check date availability!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
