import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

type DifficultyProps = {
  blanksLeft: number; // e.g., 2 blanks left
};

const DifficultyLevel: React.FC<DifficultyProps> = ({ blanksLeft }) => {
  const stars = Math.min(Math.max(blanksLeft, 0), 5); // Clamp 0–5
  const fullStars = Array(stars).fill(<FaStar className="text-yellow-500" />);
  const emptyStars = Array(5 - stars).fill(<FaRegStar className="text-gray-300" />);

  return (
    <div className="right-4 flex items-center gap-0">
      <span className="text-sm text-black-700">Difficulty:</span>
      {fullStars.map((icon, i) => (
        <span key={`full-${i}`}>{icon}</span>
      ))}
      {emptyStars.map((icon, i) => (
        <span key={`empty-${i}`}>{icon}</span>
      ))}
    </div>
  );
};

export default DifficultyLevel;
