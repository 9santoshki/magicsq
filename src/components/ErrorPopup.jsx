import React, { useEffect, useRef } from 'react';
import { FaExclamationTriangle, FaTimes, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';

// Per-type colors: bg/text/border on the popup, plus the accent (icon + close
// button) color and its matching box-shadow and button background/hover.
const TYPE_STYLES = {
  success: {
    icon: <FaCheckCircle />,
    container: 'bg-[#d4edda] text-[#155724] border-[#28a745] shadow-[0_12px_40px_rgba(40,167,69,0.3)]',
    accent: 'text-[#28a745]',
    button: 'border-[#28a745] text-[#28a745] bg-[rgba(40,167,69,0.1)] hover:bg-[rgba(40,167,69,0.2)]',
  },
  info: {
    icon: <FaInfoCircle />,
    container: 'bg-[#d1ecf1] text-[#0c5460] border-[#17a2b8] shadow-[0_12px_40px_rgba(23,162,184,0.3)]',
    accent: 'text-[#17a2b8]',
    button: 'border-[#17a2b8] text-[#17a2b8] bg-[rgba(23,162,184,0.1)] hover:bg-[rgba(23,162,184,0.2)]',
  },
  warning: {
    icon: <FaExclamationTriangle />,
    container: 'bg-[#fff3cd] text-[#856404] border-[#ffc107] shadow-[0_12px_40px_rgba(255,193,7,0.3)]',
    accent: 'text-[#ffc107]',
    button: 'border-[#ffc107] text-[#ffc107] bg-[rgba(255,193,7,0.1)] hover:bg-[rgba(255,193,7,0.2)]',
  },
  error: {
    icon: <FaExclamationTriangle />,
    container: 'bg-[#ffffff] text-[#dc3545] border-[#dc3545] shadow-[0_12px_40px_rgba(220,53,69,0.3)]',
    accent: 'text-[#dc3545]',
    button: 'border-[#dc3545] text-[#dc3545] bg-[rgba(220,53,69,0.1)] hover:bg-[rgba(220,53,69,0.2)]',
  },
};

const ErrorPopup = ({ message, isVisible, onClose, type = 'error', timeout = 3000 }) => {
  const styles = TYPE_STYLES[type] || TYPE_STYLES.error;
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (isVisible) {
      timeoutRef.current = setTimeout(() => {
        onClose();
        timeoutRef.current = null;
      }, timeout);
    }
  }, [isVisible, onClose, timeout]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[9999] max-w-[90vw] w-auto min-w-[300px] animate-[slideDown_0.3s_ease-out]">
      <div className={`flex items-center gap-[15px] rounded-[15px] border-[3px] px-[25px] py-5 text-[1.2rem] font-bold leading-[1.4] text-left ${styles.container}`}>
        <div className={`shrink-0 text-[1.5rem] ${styles.accent}`}>
          {styles.icon}
        </div>

        <div className="flex-1 break-words">
          {message}
        </div>

        <button
          onClick={onClose}
          className={`flex shrink-0 items-center justify-center w-[30px] h-[30px] rounded-full border text-[1rem] cursor-pointer transition-colors duration-200 ${styles.button}`}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default ErrorPopup;
