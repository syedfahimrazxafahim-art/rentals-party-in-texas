import React from 'react';

interface OfficialLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const OfficialLogo: React.FC<OfficialLogoProps> = ({
  size = 'md',
  className = '',
}) => {
  const imgSizes = {
    sm: 'w-9 h-9 sm:w-10 sm:h-10',
    md: 'w-10 h-10 sm:w-12 sm:h-12',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
    xl: 'w-20 h-20 sm:w-24 sm:h-24',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-5xl',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Logo Image provided */}
      <img
        src="https://res.cloudinary.com/fzobzdco/image/upload/v1788567884/486946759_653264017684514_5143295968474924537_n.jpg"
        alt="Texas Flo Boat Rental Logo"
        className={`${imgSizes[size]} rounded-full object-cover border border-[#ff00e6]/70 shadow-[0_0_12px_rgba(255,0,230,0.4)] shrink-0`}
        referrerPolicy="no-referrer"
      />

      {/* Official Company Name */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-0.5">
          <span className="text-[#ff00e6] font-black italic text-base sm:text-lg">
            #
          </span>
          <span
            className={`font-black italic tracking-tight uppercase font-heading ${textSizes[size]} text-white`}
          >
            Texas<span className="text-[#ff00e6]">Flo</span>
          </span>
        </div>
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#00f5ff] mt-0.5">
          Boat Rental
        </span>
      </div>
    </div>
  );
};

