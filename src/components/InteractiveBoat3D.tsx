import React, { useState, useRef, useEffect } from 'react';
import { DECK_HOTSPOTS } from '../data/boatData';
import { DeckHotspot } from '../types';
import { Sparkles, Moon, Sun, RotateCw, Volume2, VolumeX, Shield, Compass, Music, Users, Waves } from 'lucide-react';

interface InteractiveBoat3DProps {
  onSelectHotspot?: (hotspot: DeckHotspot) => void;
  onBookNow?: () => void;
}

export const InteractiveBoat3D: React.FC<InteractiveBoat3DProps> = ({
  onSelectHotspot,
  onBookNow,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [nightMode, setNightMode] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<DeckHotspot | null>(DECK_HOTSPOTS[1]);
  const [soundPlaying, setSoundPlaying] = useState(false);

  // Mouse parallax tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const rotateBoat = (deg: number) => {
    setRotationAngle((prev) => (prev + deg) % 360);
  };

  // Hotspot icons helper
  const renderHotspotIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-3.5 h-3.5" />;
      case 'Music':
        return <Music className="w-3.5 h-3.5" />;
      case 'Users':
        return <Users className="w-3.5 h-3.5" />;
      case 'Sun':
        return <Sun className="w-3.5 h-3.5" />;
      case 'Waves':
        return <Waves className="w-3.5 h-3.5" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full rounded-3xl overflow-hidden transition-all duration-700 border-2 ${
        nightMode
          ? 'bg-gradient-to-b from-[#0d0221] via-[#1a0b2e] to-[#05010f] border-[#ff00e6]/40 shadow-[0_0_40px_rgba(255,0,230,0.2)]'
          : 'bg-gradient-to-b from-[#1a1440] via-[#240046] to-[#0d0221] border-[#00f5ff]/40 shadow-[0_0_40px_rgba(0,245,255,0.2)]'
      }`}
      style={{ minHeight: '520px' }}
    >
      {/* Ambient Neon Atmosphere Background Orbs */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#ff00e6]/20 rounded-full filter blur-[90px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-[#00f5ff]/15 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-[#39ff14]/10 rounded-full filter blur-[80px] pointer-events-none" />

      {/* Top Floating Controls Bar */}
      <div className="relative z-20 flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-black/30 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#39ff14] rounded-full shadow-[0_0_8px_#39ff14] animate-ping" />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#00f5ff] drop-shadow-[0_0_6px_#00f5ff]">
                Interactive 3D Fleet Experience
              </span>
              <span className="px-2 py-0.5 text-[9px] bg-[#ff00e6] text-black font-black rounded uppercase">
                360° Deck Tour
              </span>
            </div>
            <p className="text-[11px] text-gray-400">
              Hover & rotate to explore Texas Flo’s 12-passenger luxury pontoon
            </p>
          </div>
        </div>

        {/* View mode toggle controls */}
        <div className="flex items-center gap-2">
          {/* Night / Sunset glow mode */}
          <button
            id="toggle-night-mode-btn"
            onClick={() => setNightMode(!nightMode)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all ${
              nightMode
                ? 'bg-[#240046] border-[#ff00e6] text-[#ff00e6] shadow-[0_0_10px_rgba(255,0,230,0.5)]'
                : 'bg-black/50 border-[#00f5ff] text-[#00f5ff] shadow-[0_0_10px_rgba(0,245,255,0.4)]'
            }`}
            title="Toggle Night Glow Lighting"
          >
            {nightMode ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
            <span>{nightMode ? 'Night Glow On' : 'Sunset Day Mode'}</span>
          </button>

          {/* 360 Rotation button */}
          <button
            id="rotate-360-btn"
            onClick={() => rotateBoat(45)}
            className="p-2 rounded-xl bg-black/50 border border-white/20 text-gray-300 hover:text-[#39ff14] hover:border-[#39ff14] transition-all shadow-[0_0_8px_rgba(57,255,20,0.2)]"
            title="Rotate 45°"
          >
            <RotateCw className="w-4 h-4" />
          </button>

          {/* Audio Beats Simulator */}
          <button
            id="toggle-audio-beats-btn"
            onClick={() => setSoundPlaying(!soundPlaying)}
            className={`p-2 rounded-xl border transition-all ${
              soundPlaying
                ? 'bg-[#39ff14]/20 border-[#39ff14] text-[#39ff14] shadow-[0_0_10px_#39ff14]'
                : 'bg-black/50 border-white/20 text-gray-400 hover:text-white'
            }`}
            title={soundPlaying ? 'Mute Marine Audio' : 'Play Lake Party Beats'}
          >
            {soundPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* 3D Perspective Stage Container */}
      <div
        className="relative w-full h-[380px] sm:h-[440px] flex items-center justify-center p-4"
        style={{ perspective: '1200px' }}
      >
        {/* Animated 3D Floating Vessel Wrapper */}
        <div
          className="relative w-full max-w-2xl transition-transform duration-300 ease-out animate-boat-float select-none"
          style={{
            transform: `rotateX(${15 + mousePos.y * -18}deg) rotateY(${-10 + mousePos.x * 25 + rotationAngle}deg) translateZ(20px)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Under-deck Neon Water Glow Pool */}
          <div
            className={`absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-24 rounded-full filter blur-[35px] transition-all duration-700 pointer-events-none ${
              nightMode
                ? 'bg-gradient-to-r from-[#ff00e6]/60 via-[#00f5ff]/70 to-[#39ff14]/50'
                : 'bg-[#00f5ff]/30'
            }`}
          />

          {/* Realistic Stylized Pontoon Boat Vector Visualization */}
          <div className="relative mx-auto w-full aspect-[16/9] max-h-[300px] flex items-center justify-center">
            <svg
              viewBox="0 0 800 450"
              className="w-full h-full filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
            >
              <defs>
                {/* Metallic Aluminum Pontoon Tube Gradients */}
                <linearGradient id="pontoonTubeGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="25%" stopColor="#94a3b8" />
                  <stop offset="50%" stopColor="#e2e8f0" />
                  <stop offset="75%" stopColor="#64748b" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>

                {/* Neon Night Underglow Filter */}
                <linearGradient id="neonWaterGlow" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ff00e6" />
                  <stop offset="50%" stopColor="#00f5ff" />
                  <stop offset="100%" stopColor="#39ff14" />
                </linearGradient>

                {/* Boat Rail Accent */}
                <linearGradient id="blackRailGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1e1e24" />
                  <stop offset="50%" stopColor="#0f0e17" />
                  <stop offset="100%" stopColor="#050508" />
                </linearGradient>

                {/* Canopy Fabric */}
                <linearGradient id="canopyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2d3748" />
                  <stop offset="70%" stopColor="#1a202c" />
                  <stop offset="100%" stopColor="#111827" />
                </linearGradient>
              </defs>

              {/* Water Surface Ripples (Behind Boat) */}
              <g opacity="0.6">
                <ellipse cx="400" cy="360" rx="350" ry="40" fill="none" stroke="#00f5ff" strokeWidth="1.5" strokeDasharray="12 8" opacity="0.4" />
                <ellipse cx="400" cy="375" rx="280" ry="30" fill="none" stroke="#ff00e6" strokeWidth="1.5" strokeDasharray="20 10" opacity="0.3" />
                <ellipse cx="400" cy="390" rx="200" ry="20" fill="none" stroke="#39ff14" strokeWidth="1" strokeDasharray="10 15" opacity="0.4" />
              </g>

              {/* Dual Aluminum Pontoon Logs (Base Tubes) */}
              {/* Starboard Pontoon Tube (Back) */}
              <g id="starboard-pontoon" opacity="0.85">
                <rect x="140" y="325" width="520" height="34" rx="17" fill="url(#pontoonTubeGrad)" />
                {/* Nose Cone */}
                <path d="M 140,325 C 100,332 80,342 60,330 C 80,350 110,359 140,359 Z" fill="#64748b" />
              </g>

              {/* Port Pontoon Tube (Front Log) */}
              <g id="port-pontoon">
                <rect x="110" y="345" width="550" height="42" rx="21" fill="url(#pontoonTubeGrad)" stroke="#334155" strokeWidth="2" />
                {/* Nose Cone */}
                <path d="M 110,345 C 70,353 45,363 25,350 C 50,375 80,387 110,387 Z" fill="#94a3b8" />
                {/* Water splash lines */}
                <path d="M 10,360 Q 35,355 60,375" stroke="#00f5ff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M 30,375 Q 70,370 100,388" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.8" />
              </g>

              {/* Under-deck LED Strip Lighting */}
              {nightMode && (
                <g id="underglow-leds">
                  <path d="M 110,344 L 660,344" stroke="url(#neonWaterGlow)" strokeWidth="6" filter="drop-shadow(0 0 8px #ff00e6)" />
                  <ellipse cx="400" cy="385" rx="260" ry="18" fill="url(#neonWaterGlow)" opacity="0.35" filter="blur(6px)" />
                </g>
              )}

              {/* Deck Substructure & Crossbeams */}
              <rect x="120" y="318" width="540" height="18" fill="#1e293b" stroke="#475569" strokeWidth="1" />

              {/* Luxury Boat Enclosure / Rails (Black Powder Coat) */}
              <g id="boat-rails">
                <rect x="130" y="240" width="520" height="80" rx="10" fill="url(#blackRailGrad)" stroke="#475569" strokeWidth="2" />
                
                {/* Silver Metal Rail Trim Top */}
                <rect x="125" y="236" width="530" height="6" rx="3" fill="#cbd5e1" />

                {/* Vertical Support Stanchions */}
                <line x1="220" y1="240" x2="220" y2="320" stroke="#475569" strokeWidth="3" />
                <line x1="340" y1="240" x2="340" y2="320" stroke="#475569" strokeWidth="3" />
                <line x1="480" y1="240" x2="480" y2="320" stroke="#475569" strokeWidth="3" />
                <line x1="580" y1="240" x2="580" y2="320" stroke="#475569" strokeWidth="3" />

                {/* Side Branding Graphic: Exact #TexasFlo and Texas State Badge */}
                <g transform="translate(360, 275)">
                  {/* Texas Outline Badge Box */}
                  <rect x="0" y="0" width="80" height="34" rx="4" fill="#0d0221" stroke="#00f5ff" strokeWidth="1.5" />
                  {/* Texas Map Outline */}
                  <path d="M 12,6 L 22,6 L 22,14 L 32,14 L 32,20 L 28,26 L 24,30 L 18,31 L 14,28 L 12,24 L 8,20 L 8,15 L 12,15 Z" fill="#39ff14" opacity="0.9" />
                  <text x="36" y="16" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="sans-serif">TEXAS FLO</text>
                  <text x="36" y="26" fill="#00f5ff" fontSize="6" fontWeight="700" fontFamily="sans-serif">DALLAS, TX</text>
                </g>

                {/* Prominent #TexasFlo Script On Main Hull Panel */}
                <text
                  x="200"
                  y="298"
                  fill="#ffffff"
                  fontSize="36"
                  fontWeight="900"
                  fontStyle="italic"
                  fontFamily="'Syne', sans-serif"
                  letterSpacing="-1"
                  filter={nightMode ? "drop-shadow(0 0 8px #00f5ff)" : undefined}
                >
                  <tspan fill="#ff00e6">#</tspan>Texas<tspan fill="#00f5ff">Flo</tspan>
                </text>

                {/* State Registration TX ID */}
                <text x="590" y="295" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="monospace">TX 4337 AJ</text>
              </g>

              {/* Wrap-Around Luxury Marine Seating (Interior Lounges) */}
              <g id="deck-lounges">
                {/* Front Bow Lounge (Grey & White Marine Vinyl) */}
                <path d="M 140,240 C 140,210 180,210 240,215 L 240,240 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
                <path d="M 170,225 L 230,228" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />

                {/* Center / Stern Lounge Seating */}
                <rect x="490" y="218" width="130" height="24" rx="6" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
                <path d="M 500,226 L 610,226" stroke="#00f5ff" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
              </g>

              {/* Captain's Steering Console / Helm */}
              <g id="captain-helm">
                <rect x="360" y="205" width="45" height="38" rx="4" fill="#334155" stroke="#64748b" strokeWidth="1.5" />
                {/* Tinted Windshield */}
                <path d="M 360,205 L 375,185 L 405,185 L 405,205 Z" fill="#00f5ff" opacity="0.45" stroke="#00f5ff" strokeWidth="1" />
                {/* Steering Wheel */}
                <circle cx="375" cy="216" r="8" fill="none" stroke="#e2e8f0" strokeWidth="2.5" />
                {/* Night Illuminated Gauges */}
                <circle cx="395" cy="214" r="3" fill={nightMode ? '#39ff14' : '#64748b'} />
                <circle cx="395" cy="222" r="3" fill={nightMode ? '#ff00e6' : '#64748b'} />
              </g>

              {/* Dual Bimini Sun Shade Canopies (Front & Rear) */}
              <g id="dual-bimini-tops">
                {/* Stainless Frame Struts (Support Poles) */}
                <line x1="210" y1="236" x2="270" y2="135" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
                <line x1="330" y1="236" x2="270" y2="135" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
                <line x1="470" y1="236" x2="530" y2="135" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
                <line x1="590" y1="236" x2="530" y2="135" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />

                {/* Front Heavy Duty Bimini Canvas */}
                <path
                  d="M 180,145 Q 270,110 360,145 L 345,155 Q 270,125 195,155 Z"
                  fill="url(#canopyGrad)"
                  stroke="#475569"
                  strokeWidth="1.5"
                  filter="drop-shadow(0 4px 6px rgba(0,0,0,0.5))"
                />

                {/* Rear Heavy Duty Bimini Canvas */}
                <path
                  d="M 440,145 Q 530,110 620,145 L 605,155 Q 530,125 455,155 Z"
                  fill="url(#canopyGrad)"
                  stroke="#475569"
                  strokeWidth="1.5"
                  filter="drop-shadow(0 4px 6px rgba(0,0,0,0.5))"
                />
              </g>

              {/* Outboard Marine Motor (Mercury High-Output) */}
              <g id="outboard-engine">
                <path d="M 660,285 L 705,295 C 720,305 725,325 715,350 L 685,385 L 665,370 Z" fill="#0f172a" stroke="#475569" strokeWidth="2" />
                <rect x="675" y="300" width="30" height="12" rx="2" fill="#ef4444" />
                <text x="680" y="309" fill="#ffffff" fontSize="7" fontWeight="900" fontFamily="sans-serif">MERCURY</text>
                {/* Propeller Wash / Wake */}
                <path d="M 700,380 Q 750,385 790,410" stroke="#00f5ff" strokeWidth="3" fill="none" opacity="0.7" strokeLinecap="round" />
                <path d="M 710,390 Q 760,400 785,425" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.6" />
              </g>

              {/* Stainless Steel Rear Boarding Swim Ladder */}
              <g id="swim-ladder">
                <line x1="640" y1="315" x2="655" y2="375" stroke="#e2e8f0" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="648" y1="315" x2="663" y2="375" stroke="#e2e8f0" strokeWidth="3.5" strokeLinecap="round" />
                {/* Rungs */}
                <line x1="643" y1="330" x2="651" y2="330" stroke="#94a3b8" strokeWidth="3" />
                <line x1="647" y1="345" x2="655" y2="345" stroke="#94a3b8" strokeWidth="3" />
                <line x1="651" y1="360" x2="659" y2="360" stroke="#94a3b8" strokeWidth="3" />
              </g>

              {/* Water Motion Waves (Foreground) */}
              <g opacity="0.8">
                <path d="M 40,390 Q 200,375 360,395 T 680,390" stroke="#00f5ff" strokeWidth="2" fill="none" opacity="0.7" />
                <path d="M 120,410 Q 300,395 480,415 T 760,405" stroke="#ff00e6" strokeWidth="1.5" fill="none" opacity="0.6" />
              </g>
            </svg>

            {/* Interactive Amenity Hotspots On Boat */}
            {DECK_HOTSPOTS.map((spot) => {
              const isSelected = activeHotspot?.id === spot.id;
              return (
                <button
                  id={`hotspot-${spot.id}`}
                  key={spot.id}
                  onClick={() => {
                    setActiveHotspot(spot);
                    if (onSelectHotspot) onSelectHotspot(spot);
                  }}
                  className={`absolute z-30 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-300 ${
                    isSelected ? 'scale-125' : 'hover:scale-110'
                  }`}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                >
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 transition-all shadow-lg ${
                      spot.badgeColor === 'pink'
                        ? 'bg-[#ff00e6] border-white text-black shadow-[0_0_15px_#ff00e6]'
                        : spot.badgeColor === 'cyan'
                        ? 'bg-[#00f5ff] border-white text-black shadow-[0_0_15px_#00f5ff]'
                        : spot.badgeColor === 'green'
                        ? 'bg-[#39ff14] border-white text-black shadow-[0_0_15px_#39ff14]'
                        : 'bg-amber-400 border-white text-black shadow-[0_0_15px_#f59e0b]'
                    }`}
                  >
                    {renderHotspotIcon(spot.icon)}
                  </div>
                  {/* Pulsing Outer Ping Ring */}
                  <span
                    className={`absolute inset-0 rounded-full animate-ping opacity-60 pointer-events-none ${
                      spot.badgeColor === 'pink'
                        ? 'bg-[#ff00e6]'
                        : spot.badgeColor === 'cyan'
                        ? 'bg-[#00f5ff]'
                        : 'bg-[#39ff14]'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dynamic Hotspot Information Drawer / Card */}
      {activeHotspot && (
        <div className="relative z-20 mx-4 sm:mx-8 mb-6 p-4 sm:p-5 rounded-2xl bg-[#1a0b2e]/90 border border-[#ff00e6]/40 backdrop-blur-md shadow-[0_0_25px_rgba(255,0,230,0.25)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-black/60 border border-[#00f5ff]/50 flex items-center justify-center text-[#00f5ff]">
              {renderHotspotIcon(activeHotspot.icon)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base sm:text-lg font-black uppercase tracking-tight text-white font-heading">
                  {activeHotspot.title}
                </h4>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#39ff14]/20 border border-[#39ff14] text-[#39ff14] font-bold">
                  {activeHotspot.feature}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl mt-0.5">
                {activeHotspot.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => onBookNow && onBookNow()}
              className="px-4 py-2 rounded-xl bg-[#00f5ff] hover:bg-white text-black font-black text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(0,245,255,0.6)] transition-all cursor-pointer whitespace-nowrap"
            >
              Book This Boat →
            </button>
          </div>
        </div>
      )}

      {/* Bottom Features Ticker */}
      <div className="relative z-10 px-6 py-3 bg-black/70 border-t border-white/10 flex items-center justify-between flex-wrap gap-3 text-xs">
        <div className="flex items-center gap-4 text-gray-300">
          <span className="flex items-center gap-1.5 text-[#39ff14] font-bold">
            <Shield className="w-3.5 h-3.5" />
            USCG Safety Certified
          </span>
          <span className="text-gray-600">•</span>
          <span className="flex items-center gap-1.5 text-[#00f5ff] font-bold">
            <Users className="w-3.5 h-3.5" />
            12 Guests Max
          </span>
          <span className="text-gray-600">•</span>
          <span className="flex items-center gap-1.5 text-[#ff00e6] font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            Night Glow LEDs
          </span>
        </div>

        <div className="text-[11px] text-gray-400">
          Lake Lewisville • Joe Pool Lake • Lake Ray Hubbard
        </div>
      </div>
    </div>
  );
};
