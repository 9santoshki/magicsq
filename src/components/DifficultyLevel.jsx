import React from 'react';

const DifficultyLevel = ({ blanksLeft }) => {
  const getDifficultyInfo = (blanks) => {
    if (blanks <= 3) {
      return { level: 'Easy', colorClass: 'text-[#28a745]', emoji: '😊' };
    } else if (blanks <= 6) {
      return { level: 'Medium', colorClass: 'text-[#fd7e14]', emoji: '🤔' };
    } else {
      return { level: 'Hard', colorClass: 'text-[#dc3545]', emoji: '😤' };
    }
  };

  const { level, colorClass, emoji } = getDifficultyInfo(blanksLeft);

  return (
    <div className="flex items-center gap-[6px] rounded-[6px] bg-[rgba(255,255,255,0.15)] px-[10px] py-[6px] text-[clamp(0.8rem,3vw,0.9rem)] font-medium text-white min-w-fit">
      <span className={`text-[0.8rem] ${colorClass}`}>{emoji}</span>
      <span className={colorClass}>{level}</span>
    </div>
  );
};

export default DifficultyLevel;
