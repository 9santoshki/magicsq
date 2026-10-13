import React from 'react';

const DragInstructions = ({ isMobileView }) => {
  if (!isMobileView) {
    return null;
  }

  return (
    <div className="mb-2 rounded-[6px] border border-[#b8daff] bg-[#e7f3ff] p-2 text-center text-[0.8rem] text-[#004085]">
      <span>💡 Drag numbers from below and place them on the grid</span>
    </div>
  );
};

export default DragInstructions;