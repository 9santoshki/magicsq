import { useEffect, useState, useCallback } from 'react';

/**
 * Tracks the browser's "beforeinstallprompt" event (fired on Android/Chromium
 * browsers when the app meets PWA installability criteria) so the UI can
 * show a custom "Install App" button instead of relying on the browser's
 * own, easy-to-miss install affordance.
 */
function isStandalone() {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia?.('(display-mode: standalone)').matches ||
    window.navigator.standalone === true // iOS Safari
  );
}

export default function usePWAInstall() {
  const [installEvent, setInstallEvent] = useState(null);
  const [isInstalled, setIsInstalled] = useState(isStandalone);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallEvent(event);
    };

    const handleAppInstalled = () => {
      setInstallEvent(null);
      setIsInstalled(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const promptInstall = useCallback(async () => {
    if (!installEvent) return false;
    installEvent.prompt();
    const { outcome } = await installEvent.userChoice;
    setInstallEvent(null);
    return outcome === 'accepted';
  }, [installEvent]);

  return {
    canInstall: Boolean(installEvent) && !isInstalled,
    isInstalled,
    promptInstall,
  };
}
