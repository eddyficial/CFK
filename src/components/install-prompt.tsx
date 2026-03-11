'use client';

import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';
import { Button } from './ui/button';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if iOS
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

    if (ios && !isStandalone) {
      setIsIOS(true);
      // Show iOS banner after 3 seconds
      const timer = setTimeout(() => setShowBanner(true), 3000);
      return () => clearTimeout(timer);
    }

    // Chrome/Edge install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowBanner(false);
    }
    setDeferredPrompt(null);
  };

  const dismiss = () => setShowBanner(false);

  if (!showBanner) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-40 animate-fade-in-up">
      <div className="container px-4">
        <div className="bg-card/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-4 flex items-center gap-4 max-w-lg mx-auto">
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Download className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-headline font-bold text-sm">Install CFK App</p>
            <p className="text-xs text-muted-foreground">
              {isIOS
                ? 'Tap the share button, then "Add to Home Screen"'
                : 'Install for quick access and offline support'}
            </p>
          </div>
          {!isIOS && (
            <Button
              onClick={handleInstall}
              size="sm"
              className="bg-primary hover:bg-primary/90 flex-shrink-0"
            >
              Install
            </Button>
          )}
          <button onClick={dismiss} className="text-muted-foreground hover:text-foreground flex-shrink-0">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
