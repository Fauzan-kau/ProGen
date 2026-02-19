'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  onLoadComplete?: () => void;
}

export const LoadingScreen = ({ onLoadComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            if (onLoadComplete) {
              onLoadComplete();
            }
          }, 500);
          return 100;
        }
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] transition-opacity duration-700 ${
        progress >= 100 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo Container with Glow Effect */}
      <div className="relative mb-12 animate-pulse-slow">
        {/* Glow Effect */}
        <div className="absolute inset-0 blur-3xl opacity-40 bg-brand-red rounded-full scale-150"></div>

        {/* Logo */}
        <Image
          src="/images/logo-secondary.png"
          alt="ProGen"
          width={400}
          height={200}
          className="relative w-64 h-auto md:w-80 lg:w-96 animate-float"
          priority
        />
      </div>

      {/* Loading Text */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 animate-pulse">
          Loading ProGen
        </h2>
        <p className="text-sm md:text-base text-white/60 text-center">
          Where Education Becomes a Career Strategy
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-64 md:w-80 lg:w-96">
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-red via-brand-red-hover to-brand-red rounded-full transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>
        <div className="text-center mt-4">
          <span className="text-white/80 text-sm font-medium">{Math.round(progress)}%</span>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl animate-float-slow-delay"></div>
      </div>
    </div>
  );
};
