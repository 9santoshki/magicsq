import React from 'react';
import { FiDownload } from 'react-icons/fi';
import usePWAInstall from '@/hooks/usePWAInstall';

/**
 * Shows an "Install App" button whenever the browser reports the app is
 * installable (Android/Chromium) and hides itself once installed or on
 * browsers that don't support the install prompt (e.g. iOS Safari).
 */
const InstallButton = () => {
  const { canInstall, promptInstall } = usePWAInstall();

  if (!canInstall) return null;

  return (
    <button
      onClick={promptInstall}
      className="flex shrink-0 items-center gap-1 rounded-[6px] border border-[#495057] bg-[#495057] px-2 py-[5px] md:px-3.5 md:py-2 text-[0.75rem] md:text-[0.9rem] font-medium tracking-[0.2px] whitespace-nowrap text-white cursor-pointer transition-all duration-200 hover:bg-[#343a40]"
      title="Install Magic Square as an app"
    >
      <FiDownload className="h-3.5 w-3.5 md:h-4 md:w-4" />
      <span>Install</span>
    </button>
  );
};

export default InstallButton;
