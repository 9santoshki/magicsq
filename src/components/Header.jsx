import React from 'react';

const Header = ({ currentPage, onNavigate }) => {
  return (
    <header className="sticky top-0 z-[100] border-b border-[#e9ecef] bg-[#f8f9fa] px-[15px] py-2 md:px-5 text-[#343a40] shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
      <div className="mx-auto flex max-w-full md:max-w-[1200px] flex-wrap md:flex-nowrap items-center justify-between gap-1.5 md:gap-2">
        {/* Logo and Title */}
        <div
          onClick={() => onNavigate('home')}
          className="flex flex-1 md:flex-none min-w-0 items-center gap-1.5 md:gap-2 cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
        >
          <img
            src="/magicsqlogo.png"
            alt="Magic SQ Logo"
            className="h-7 md:h-8 w-auto shrink-0"
          />
          <div className="min-w-0">
            <h1 className="m-0 text-[1.1rem] md:text-[1.4rem] font-semibold tracking-[0.3px] text-[#343a40] whitespace-normal md:whitespace-nowrap overflow-hidden text-ellipsis leading-[1.2] md:leading-normal break-words md:break-normal">
              Magic Square
            </h1>
            <p className="m-0 text-[0.6rem] md:text-[0.7rem] font-medium opacity-90 text-[#495057] whitespace-normal md:whitespace-nowrap overflow-hidden text-ellipsis tracking-[0.5px] leading-[1.1] md:leading-normal break-words md:break-normal">
              Boost your Brainpower!
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex shrink-0 flex-wrap md:flex-nowrap items-center justify-end md:justify-normal gap-1.5 md:gap-[15px]">
          {[
            { key: 'home', label: 'Home' },
            { key: 'about', label: 'About' },
            { key: 'contact', label: 'Contact' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => onNavigate(key)}
              className={`rounded-[6px] border px-2 py-[5px] md:px-3.5 md:py-2 text-[0.75rem] md:text-[0.9rem] font-medium tracking-[0.2px] whitespace-nowrap cursor-pointer transition-all duration-200 ${
                currentPage === key
                  ? 'bg-[#e9ecef] text-[#495057] border-[#dee2e6]'
                  : 'bg-transparent text-[#6c757d] border-transparent hover:bg-[#f1f3f4] hover:text-[#495057]'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
