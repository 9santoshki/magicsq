// src/components/Logo.tsx
import React from 'react';
// import logoImage from '../assets/logoa.png';
import logoImage from '../assets/logoa.png';


interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img
      src={logoImage}
      alt="Magic Square Logo"
      className={`object-contain ${className ?? ''}`}
    />
  );
};

export default Logo;
