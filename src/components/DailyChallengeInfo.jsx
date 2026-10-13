import React from 'react';
import { MdInfo } from 'react-icons/md';

const DailyChallengeInfo = () => {
  return (
    <div className="mt-3 md:mt-4 block">
      <div className="flex items-center gap-[0.4rem] md:gap-[0.5rem] rounded-[0.4rem] md:rounded-[0.5rem] border border-[#bfdbfe] bg-[linear-gradient(to_right,#eff6ff,#dbeafe)] px-3 py-2 md:px-4 md:py-3 text-[#1e3a8a]">
        <MdInfo className="text-[0.9rem] md:text-[1rem]" />
        <div className="flex-1">
          <h3 className="m-0 text-[0.8rem] md:text-[0.875rem] font-medium tracking-[-0.025em]">
            Daily Challenge
          </h3>
          <p className="mt-[0.2rem] mb-0 text-[0.65rem] md:text-[0.75rem] opacity-90 leading-[1.4] tracking-[-0.05em]">
            Test your brainpower. Return tomorrow for a new challenge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DailyChallengeInfo;
