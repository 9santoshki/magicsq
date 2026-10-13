import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ difficulty, maxStars = 5 }) => {
  const filledStars = Math.max(1, Math.min(maxStars, difficulty));
  
  return (
    <div className="flex items-center gap-[2px]">
      {[...Array(maxStars)].map((_, index) => (
        <FaStar
          key={index}
          className={`text-[1rem] drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)] ${
            index < filledStars
              ? 'text-[#ffd700] [stroke:none] [stroke-width:0]' // gold for filled stars
              : 'text-[#e0e0e0] [stroke:#cccccc] [stroke-width:1px]' // light gray for empty stars
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;
