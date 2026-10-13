
import React from 'react';
import { FaClock, FaShare, FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import StarRating from '../StarRating';

// Static per-brand classes (literal strings so Tailwind's scanner can pick them up).
const SHARE_BUTTONS = [
  { platform: 'facebook', icon: FaFacebook, classes: 'text-[#1877f2] border-[#1877f2] hover:bg-[#1877f2] hover:shadow-[0_4px_12px_#1877f280]' },
  { platform: 'twitter', icon: FaTwitter, classes: 'text-[#1da1f2] border-[#1da1f2] hover:bg-[#1da1f2] hover:shadow-[0_4px_12px_#1da1f280]' },
  { platform: 'whatsapp', icon: FaWhatsapp, classes: 'text-[#25d366] border-[#25d366] hover:bg-[#25d366] hover:shadow-[0_4px_12px_#25d36680]' },
  { platform: 'linkedin', icon: FaLinkedin, classes: 'text-[#0077b5] border-[#0077b5] hover:bg-[#0077b5] hover:shadow-[0_4px_12px_#0077b580]' },
];

const PuzzleHeader = ({
  seconds,
  formatTime,
  difficultyStars,
  shareResult,
}) => {
  return (
    <div className="rounded-b-[10px] border-b border-[#e9ecef] bg-[#f8f9fa] px-[10px] py-3 md:px-3 md:py-[15px] text-[#495057]">
      {/* BODMAS Challenge Header Row */}
      <div className="mb-[10px] flex items-center justify-between">
        <h2 className="m-0 text-[1.4rem] md:text-[1.8rem] font-light text-[#2c3e50] [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]">
          BODMAS Challenge
        </h2>
        <div className="flex items-center gap-1.5 rounded-[20px] border border-[#e9ecef] bg-white px-2.5 py-1 text-[0.75rem] md:text-[0.85rem] font-semibold text-[#6c757d] shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
          <span>Difficulty:</span>
          <StarRating difficulty={difficultyStars} />
        </div>
      </div>

      {/* Timer and Sharing Row */}
      <div className="flex items-center justify-between gap-2 md:gap-3">
        <div className="flex items-center gap-2 rounded-[20px] border border-[#e9ecef] bg-white px-3 py-1.5 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
          <FaClock className="text-[0.9rem] text-[#6c757d]" />
          <span className="text-[0.8rem] md:text-[0.9rem] font-semibold text-[#495057]">
            {formatTime(seconds)}
          </span>
        </div>
        <div className="flex-1 flex items-center gap-2 overflow-hidden rounded-[20px] border border-[#e9ecef] bg-white px-3 py-1.5 text-[0.75rem] md:text-[0.9rem] text-[#6c757d] shadow-[0_2px_8px_rgba(0,0,0,0.05)] min-w-[120px] md:min-w-[auto]">
          <div className="flex items-center gap-[5px] font-semibold whitespace-nowrap text-[#495057]">
            <FaShare className="text-[0.9rem] text-[#495057]" />
            <span>Share challenge</span>
          </div>
          <div className="ml-2 flex gap-[3px] md:gap-[5px] overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
            {SHARE_BUTTONS.map(({ platform, icon, classes }) => (
              <button
                key={platform}
                onClick={() => shareResult(platform)}
                className={`flex shrink-0 items-center justify-center w-6 h-6 md:w-[30px] md:h-[30px] rounded-full border-2 bg-white text-[0.75rem] md:text-[0.9rem] cursor-pointer shadow-[0_2px_6px_rgba(0,0,0,0.1)] transition-all duration-300 [transition-timing-function:ease] hover:text-white hover:-translate-y-[3px] hover:scale-110 ${classes}`}
              >
                {React.createElement(icon)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuzzleHeader;
