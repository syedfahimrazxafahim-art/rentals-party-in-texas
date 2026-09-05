import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/boatData';
import { MessageCircle, Phone, Mail, MapPin, Facebook, Instagram, ShieldCheck, Send, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formLake, setFormLake] = useState('Lake Lewisville');
  const [formMessage, setFormMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message link
    const msg = `Hello Texas Flo! My name is ${formName}. I am inquiring about a boat rental on ${formLake}. Phone: ${formPhone}. Details: ${formMessage}`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/12146702648?text=${encoded}`, '_blank');
    setSent(true);
  };

  return (
    <section className="relative w-full py-12 px-4 sm:px-8 lg:px-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-3xl sm:text-5xl font-black italic uppercase text-white font-heading">
          Contact <span className="text-[#ff00e6]">#TexasFlo</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mt-3">
          Have questions about lake launching, group sizes, tie-ups, or special requests? Reach out directly via WhatsApp, phone, or email.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* WhatsApp Direct */}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-[#1a0b2e] border-2 border-[#00f5ff]/60 hover:border-[#00f5ff] shadow-[0_0_25px_rgba(0,245,255,0.2)] transition-all flex items-center gap-4 group block"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#00f5ff]/20 border border-[#00f5ff] flex items-center justify-center text-[#00f5ff] group-hover:scale-110 transition-transform">
              <MessageCircle className="w-7 h-7 text-[#39ff14]" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                Fastest Response
              </span>
              <h3 className="text-xl font-black text-white font-heading">
                WhatsApp Reservation
              </h3>
              <p className="text-sm font-bold text-[#00f5ff]">
                {BUSINESS_INFO.phone}
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${BUSINESS_INFO.email}`}
            className="p-6 rounded-3xl bg-[#1a0b2e] border border-white/10 hover:border-[#ff00e6] transition-all flex items-center gap-4 group block"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#ff00e6]/20 border border-[#ff00e6] flex items-center justify-center text-[#ff00e6] group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                Official Inquiries
              </span>
              <h3 className="text-xl font-black text-white font-heading">
                Email Dispatch
              </h3>
              <p className="text-sm text-gray-300">
                {BUSINESS_INFO.email}
              </p>
            </div>
          </a>

          {/* Location & Coverage */}
          <div className="p-6 rounded-3xl bg-black/50 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-6 h-6 text-[#39ff14]" />
              <h4 className="text-lg font-bold text-white font-heading">
                Dallas Lake Coverage
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              We service <strong className="text-white">Lake Lewisville</strong> (Party Cove), <strong className="text-white">Joe Pool Lake</strong> (Lynn Creek), and <strong className="text-white">Lake Ray Hubbard</strong> (Wind Surf Bay). Specific ramp launch instructions and GPS pins are delivered immediately after reservation confirmation.
            </p>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-[#00f5ff]/20 text-xs font-bold text-[#00f5ff] border border-white/10 flex items-center gap-1.5 transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-[#ff00e6]/20 text-xs font-bold text-[#ff00e6] border border-white/10 flex items-center gap-1.5 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Lake Safety Motto */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#240046] to-[#0d0221] border border-[#39ff14]/40 text-center">
            <span className="text-[10px] uppercase font-black tracking-widest text-[#39ff14] block mb-0.5">
              The Texas Flo Code
            </span>
            <p className="text-xs font-bold text-white italic">
              "{BUSINESS_INFO.motto}"
            </p>
          </div>
        </div>

        {/* Right Column: Direct Lake Inquiry Form */}
        <div className="lg:col-span-7 bg-[#1a0b2e] border-2 border-[#ff00e6] rounded-3xl p-6 sm:p-10 shadow-[0_0_35px_rgba(255,0,230,0.25)]">
          <h3 className="text-2xl font-black uppercase text-white font-heading mb-2">
            Send Quick Inquiry
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mb-6">
            Submit below to instantly connect with our reservation desk on WhatsApp or email.
          </p>

          {sent ? (
            <div className="p-6 rounded-2xl bg-[#39ff14]/20 border border-[#39ff14] text-center">
              <Check className="w-10 h-10 text-[#39ff14] mx-auto mb-2" />
              <h4 className="text-lg font-bold text-white">Opening WhatsApp Chat!</h4>
              <p className="text-xs text-gray-300 mt-1">
                Your message has been pre-formatted. We reply within minutes!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-gray-400 uppercase font-bold mb-1 block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Marcus Vance"
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00f5ff]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-gray-400 uppercase font-bold mb-1 block">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="e.g. (214) 555-0199"
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00f5ff]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-gray-400 uppercase font-bold mb-1 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="e.g. marcus@gmail.com"
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00f5ff]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-gray-400 uppercase font-bold mb-1 block">
                    Preferred Lake
                  </label>
                  <select
                    value={formLake}
                    onChange={(e) => setFormLake(e.target.value)}
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00f5ff]"
                  >
                    <option value="Lake Lewisville">Lake Lewisville (Party Cove)</option>
                    <option value="Joe Pool Lake">Joe Pool Lake</option>
                    <option value="Lake Ray Hubbard">Lake Ray Hubbard</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] text-gray-400 uppercase font-bold mb-1 block">
                  Event Details / Date Request
                </label>
                <textarea
                  rows={3}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Date, estimated guest count (up to 12), time of day (Early Bird, Sunset, Night Glow), or special celebration..."
                  className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00f5ff]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#39ff14] hover:bg-white text-black font-black uppercase text-base tracking-wider shadow-[0_0_20px_#39ff14] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send to WhatsApp Reservation Desk</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
