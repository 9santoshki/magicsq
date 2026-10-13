
import React from 'react';

const ResultDisplay = ({ result, resultColor }) => {
  if (!result) return null;

  const isSuccess = resultColor === '#28a745';

  return (
    <div
      className={`text-center p-[6px] md:p-[10px] rounded-[5px] md:rounded-[6px] text-[0.7rem] md:text-[0.85rem] font-semibold border ${
        isSuccess ? 'bg-[#d4edda] border-[#c3e6cb]' : 'bg-[#f8d7da] border-[#f5c6cb]'
      }`}
      style={{ color: resultColor }}
    >
      {result}
    </div>
  );
};

export default ResultDisplay;
