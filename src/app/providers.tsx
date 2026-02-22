'use client';

import { useState } from 'react';
import { LoadingScreen } from '@components/ui';

export function Providers({ children }: { children: React.ReactNode }) {
  // Only show the loading screen on the very first visit of the session.
  // Once played, we store a flag in sessionStorage so navigating to other
  // pages (e.g. /contact) doesn't replay the animation.
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem('progen-intro-played');
  });

  const handleLoadComplete = () => {
    sessionStorage.setItem('progen-intro-played', '1');
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      {children}
    </>
  );
}
