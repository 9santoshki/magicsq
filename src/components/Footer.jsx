import React from 'react';
import { FaHeart, FaGithub, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

// Static per-brand classes (literal strings so Tailwind's scanner can pick them up).
const SOCIAL_LINKS = [
  {
    icon: FaFacebook,
    url: 'https://www.facebook.com/profile.php?id=61580108717050',
    classes: 'bg-[#1877f2] shadow-[0_2px_6px_#1877f280] hover:shadow-[0_6px_12px_#1877f2cc]',
  },
  {
    icon: FaTwitter,
    url: '#',
    classes: 'bg-[#1da1f2] shadow-[0_2px_6px_#1da1f280] hover:shadow-[0_6px_12px_#1da1f2cc]',
  },
  {
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/company/108687992',
    classes: 'bg-[#0077b5] shadow-[0_2px_6px_#0077b580] hover:shadow-[0_6px_12px_#0077b5cc]',
  },
  {
    icon: FaGithub,
    url: '#',
    classes: 'bg-[#333333] shadow-[0_2px_6px_#33333380] hover:shadow-[0_6px_12px_#333333cc]',
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-[#e9ecef] bg-[#f8f9fa] px-5 pt-[25px] pb-[15px] text-[#495057] mt-auto">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Footer Content */}
        <div className="mb-5 flex flex-col md:flex-row items-start justify-start gap-10">
          {/* Logo and Description */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <img
                src="/magicsqlogo.png"
                alt="Magic SQ Logo"
                className="h-6 w-auto"
              />
              <h3 className="m-0 text-base font-semibold tracking-[0.2px] text-[#343a40]">
                Magic Square
              </h3>
            </div>
            <p className="m-0 text-[0.85rem] leading-[1.5] opacity-90 text-[#6c757d]">
              A quick, fun puzzle that'll test your logic, speed, and pattern recognition.
              Challenge your friends to beat your time.
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-3 text-[0.9rem] font-semibold text-[#495057]">
              Follow us on:
            </h4>
            <div className="mb-[15px] flex gap-[10px]">
              {SOCIAL_LINKS.map(({ icon, url, classes }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-8 h-8 rounded-full border border-[rgba(255,255,255,0.2)] text-white no-underline transition-all duration-300 [transition-timing-function:ease] hover:-translate-y-[3px] hover:scale-110 ${classes}`}
                >
                  {React.createElement(icon, { className: 'text-[0.9rem]' })}
                </a>
              ))}
            </div>
            <p className="m-0 text-xs opacity-80 leading-[1.4] text-[#6c757d]">
              Follow us for daily puzzle updates!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-wrap items-center justify-between gap-[10px] border-t border-[#e9ecef] pt-[15px]">
          <p className="m-0 flex items-center gap-1 text-xs opacity-80 text-[#6c757d]">
            Made with <FaHeart className="text-[0.7rem] text-[#e74c3c]" /> for math enthusiasts
          </p>
          <p className="m-0 text-xs opacity-80 text-[#6c757d]">
            © 2024 Magic Square. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
