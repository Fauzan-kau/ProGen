'use client';

import { useRef, useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadComplete?: () => void;
}

export const LoadingScreen = ({ onLoadComplete }: LoadingScreenProps) => {
  const [fading, setFading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.scrollbarWidth = 'none';
    return () => {
      document.documentElement.style.overflow = '';
      document.documentElement.style.scrollbarWidth = '';
    };
  }, []);

  const handleVideoEnded = () => {
    setFading(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onLoadComplete) {
        onLoadComplete();
      }
    }, 700);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-700 ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <video
        ref={videoRef}
        src="/videos/logo-animation.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnded}
        className="w-64 h-auto md:w-80 lg:w-96"
      />
    </div>
  );
};
