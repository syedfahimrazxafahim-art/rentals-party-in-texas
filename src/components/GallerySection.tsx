import React, { useState } from 'react';
import { GALLERY_ITEMS, BUSINESS_INFO } from '../data/boatData';
import { GalleryItem } from '../types';
import { Sparkles, Image as ImageIcon, X, MapPin, Calendar, ExternalLink } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Vibes' },
    { id: 'glow', label: 'Neon Glow Nights' },
    { id: 'day', label: 'Day Parties & Tie-Ups' },
    { id: 'dj', label: 'DJ Experience' },
    { id: 'birthdays', label: 'Milestone Celebrations' },
    { id: 'fleet', label: 'The Boat' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section className="relative w-full py-12 px-4 sm:px-8 lg:px-10">
      {/* Header - No eyebrow label */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h2 className="text-3xl sm:text-5xl font-black italic uppercase text-white font-heading">
          #TexasFlo <span className="text-[#00f5ff]">Vibes</span> Gallery
        </h2>
        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mt-3">
          Explore real lake raft-ups, night glow sessions, themed birthday bashes, and upcoming event celebrations on Dallas waters.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold uppercase text-xs tracking-wider transition-all cursor-pointer ${
              activeFilter === f.id
                ? 'bg-[#ff00e6] text-black shadow-[0_0_15px_#ff00e6]'
                : 'bg-black/50 border border-white/10 text-gray-300 hover:border-[#00f5ff]/50'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Gallery Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedPhoto(item)}
            className="group relative rounded-3xl overflow-hidden bg-[#1a0b2e] border border-white/10 hover:border-[#00f5ff] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(0,245,255,0.3)] flex flex-col justify-between"
          >
            {/* Real Image Container */}
            <div className="relative h-56 w-full overflow-hidden bg-black/60">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] via-transparent to-black/40 pointer-events-none" />

              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/70 backdrop-blur-sm border border-white/20 text-white">
                  {item.category.toUpperCase()}
                </span>
                {item.stats && (
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase bg-[#39ff14] text-black shadow-[0_0_8px_#39ff14]">
                    {item.stats}
                  </span>
                )}
              </div>
            </div>

            {/* Card Content Description */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#ff00e6]" />
                  <span>{item.dateTag}</span>
                  <span>•</span>
                  <span className="text-[#00f5ff] truncate">{item.location}</span>
                </div>
                <h4 className="text-lg font-bold text-white font-heading group-hover:text-[#00f5ff] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 group-hover:text-white">
                <span>View Full Photo & Details</span>
                <span className="text-[#ff00e6] font-bold">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-[#1a0b2e] border-2 border-[#ff00e6] rounded-3xl p-5 sm:p-7 max-w-xl w-full shadow-[0_0_40px_rgba(255,0,230,0.4)] relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-gray-300 hover:text-white border border-white/20 cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo in Lightbox */}
            <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-4 border border-white/20 bg-black">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-[#39ff14] text-black shadow-[0_0_8px_#39ff14]">
                {selectedPhoto.category.toUpperCase()} EVENT
              </span>
              {selectedPhoto.stats && (
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase bg-[#00f5ff] text-black">
                  {selectedPhoto.stats}
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-heading mb-1">
              {selectedPhoto.title}
            </h3>

            <div className="flex items-center gap-2 text-xs text-[#00f5ff] mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>{selectedPhoto.location}</span>
              <span>•</span>
              <span>{selectedPhoto.dateTag}</span>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
              {selectedPhoto.description}
            </p>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#ff00e6] text-black font-black uppercase text-xs sm:text-sm text-center block shadow-[0_0_15px_#ff00e6] hover:bg-white transition-all"
            >
              Inquire About This Experience on WhatsApp
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

