'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const LoadingAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Start animation after 1.5seconds
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1500);

    // Remove from DOM after animation completes (2s delay + 1s animation)
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className="fixed inset-0 bg-[#031931] flex items-center justify-center z-[9999]"
      style={{
        opacity: isAnimating ? 1 : 0,
        transform: isAnimating ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: isAnimating ? '0s' : '0s',
      }}
    >
      {/* Animation container with curtain lift effect */}
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{
          transform: isAnimating ? 'scaleY(1)' : 'scaleY(0)',
          transformOrigin: 'top',
          transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Image
          src="/images/animation.gif"
          alt="Loading Animation"
          width={350}
          height={350}
          priority
          unoptimized
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default LoadingAnimation;
