
import React from 'react';
import { FaBook, FaLightbulb } from 'react-icons/fa';

const RulesAndTips = ({ mobileActiveTab, setMobileActiveTab }) => {
  return (
    <div className="bg-[#f8f9fa] border-b border-[#e9ecef]">
      <div className="flex border-b border-[#e9ecef]">
        {[
          { key: 'rules', label: 'Rules', icon: FaBook },
          { key: 'tips', label: 'Tips', icon: FaLightbulb },
        ].map(({ key, label, icon }) => (
          <button
            key={key}
            onClick={() => setMobileActiveTab(key)}
            className={`flex-1 flex items-center justify-center gap-1 md:gap-[6px] border-0 border-b-2 px-[10px] py-[6px] md:px-[15px] md:py-[10px] text-[0.75rem] md:text-[0.9rem] font-semibold cursor-pointer transition-all duration-200 ${
              mobileActiveTab === key
                ? 'bg-white text-[#667eea] border-[#667eea]'
                : 'bg-transparent text-[#6c757d] border-transparent'
            }`}
          >
            {React.createElement(icon, { className: 'text-[0.7rem] md:text-[0.8rem]' })}
            {label}
          </button>
        ))}
      </div>

      <div className="bg-white px-[6px] py-[5px] md:px-[10px] md:py-2 min-h-[50px] md:min-h-[70px] text-[0.7rem] md:text-[0.85rem] leading-[1.4] text-[#5a6c7d]">
        {mobileActiveTab === 'rules' ? (
            <div>
              <div className="mb-[3px] font-semibold text-[#2c3e50]">
                Rules:
              </div>
              <div className="text-[0.65rem] md:text-[0.75rem]">
                • Use BODMAS rule - left to right in rows and top to bottom in columns<br/>
                • Fill the blanks with single digits from 1 to 9 to complete the equations<br/>
                • Each digit can come only once in an equation of a row or column<br/>
                • All digits from 1 to 9 should come at least once in the overall square.<br/>
              </div>
            </div>
        ) : (
          <div>
            <div className="mb-[3px] font-semibold text-[#2c3e50]">
              Hints:
            </div>
            <div className="text-[0.65rem] md:text-[0.75rem]">
              • Use BODMAS rule to solve equations: LEFT to RIGHT in rows, TOP to BOTTOM in columns<br/>
              • First solve Division (/) or Multiplication (*) (whichever comes first from left), then Addition (+) or Subtraction (-)<br/>
              • Example: 7*5+4/2-1 = 35+4/2-1 = 35+2-1 = 37-1 = 36<br/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RulesAndTips;
