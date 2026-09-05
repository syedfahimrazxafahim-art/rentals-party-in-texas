import React from 'react';
import { BUSINESS_INFO } from '../data/boatData';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group select-none">
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-full bg-[#1a0b2e] border border-[#39ff14] text-[#39ff14] text-xs font-black uppercase tracking-wider shadow-[0_0_15px_rgba(57,255,20,0.4)] opacity-0 group-hover:opacity-100 transition-all duration-200">
        Direct WhatsApp Chat
      </span>

      <a
        id="floating-whatsapp-btn"
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#39ff14] to-[#00f5ff] p-[2px] shadow-[0_0_20px_#39ff14] hover:shadow-[0_0_30px_#00f5ff] transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer"
        aria-label="Chat on WhatsApp with Texas Flo"
      >
        <div className="w-full h-full bg-[#0d0221] rounded-full flex items-center justify-center text-[#39ff14] group-hover:text-[#00f5ff] transition-colors">
          <MessageCircle className="w-7 h-7 fill-current" />
        </div>
      </a>
    </div>
  );
};
