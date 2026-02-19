'use client';

import { useState } from 'react';
import { LoadingScreen } from '@components/ui';

export function Providers({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}
      {children}
    </>
  );
}
