
import React from 'react';
import { MdDelete, MdRefresh, MdCheck } from 'react-icons/md';
import DraggableNumber from '../ui/DraggableNumber';

// Static per-action classes (literal strings so Tailwind's scanner can pick them up).
const ACTION_BUTTON_CLASSES =
  'flex items-center justify-center gap-[2px] px-[2px] py-[5px] md:px-[3px] md:py-[6px] text-[0.65rem] md:text-[0.75rem] ' +
  'font-semibold text-white border-0 rounded-[4px] cursor-pointer transition-all duration-200 [touch-action:manipulation] ' +
  'h-[26px] md:h-[28px] hover:-translate-y-px';

const ControlPanel = ({
  handleNumberClick,
  handleDelete,
  handleReset,
  checkSolution,
  isMobileView,
  setDragOverCell,
}) => {
  const isMobile = isMobileView; // Use isMobileView prop instead of local state

  const actionButtons = [
    {
      label: 'Clear',
      icon: MdDelete,
      onClick: handleDelete,
      classes: 'bg-[linear-gradient(135deg,#dc3545_0%,#c82333_100%)] shadow-[0_1px_3px_rgba(220,53,69,0.2)] hover:bg-[linear-gradient(135deg,#c82333_0%,#a71e2a_100%)]',
    },
    {
      label: 'Reset',
      icon: MdRefresh,
      onClick: handleReset,
      classes: 'bg-[linear-gradient(135deg,#ffc107_0%,#e0a800_100%)] shadow-[0_1px_3px_rgba(108,117,125,0.2)] hover:bg-[linear-gradient(135deg,#e0a800_0%,#d39e00_100%)]',
    },
    {
      label: 'Submit',
      icon: MdCheck,
      onClick: checkSolution,
      classes: 'bg-[linear-gradient(135deg,#28a745_0%,#1e7e34_100%)] shadow-[0_1px_3px_rgba(40,167,69,0.2)] hover:bg-[linear-gradient(135deg,#1e7e34_0%,#155724_100%)]',
    },
  ];

  return (
    <div className="bg-[#f8f9fa] rounded-[6px] p-[5px] md:p-[10px] mb-2 md:mb-3 border border-[#e9ecef]">
      <div className="flex gap-[3px] md:gap-1 mb-[5px] md:mb-2 justify-center flex-wrap relative">
        {isMobile ? (
          // Draggable numbers for mobile
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <div key={num} className="relative inline-block">
              <DraggableNumber
                number={num.toString()}
                onDrop={(number, cellId) => {
                  // Call the handleNumberClick function with the target cell ID
                  handleNumberClick(number, cellId);
                }}
                isMobile={isMobile}
                setDragOverCell={setDragOverCell}
              />
            </div>
          ))
        ) : (
          // Regular buttons for desktop
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="flex-1 min-w-6 md:min-w-7 h-6 md:h-7 text-[0.7rem] md:text-[0.8rem] font-semibold text-white border-0 rounded-[4px] cursor-pointer transition-all duration-200 [touch-action:manipulation] bg-[linear-gradient(135deg,#007bff_0%,#0056b3_100%)] shadow-[0_1px_3px_rgba(0,123,255,0.2)] hover:bg-[linear-gradient(135deg,#0056b3_0%,#004085_100%)] hover:-translate-y-px hover:shadow-[0_2px_5px_rgba(0,123,255,0.2)] active:scale-95"
            >
              {num}
            </button>
          ))
        )}
      </div>

      <div className="grid grid-cols-3 gap-1 md:gap-1.5">
        {actionButtons.map(({ label, icon, onClick, classes }) => (
          <button
            key={label}
            onClick={onClick}
            className={`${ACTION_BUTTON_CLASSES} ${classes}`}
          >
            {React.createElement(icon, { className: 'text-[0.7rem] md:text-[0.8rem]' })}
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ControlPanel;
