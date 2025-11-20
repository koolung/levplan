'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set all attributes
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'none';

    // Function to attempt play
    const attemptPlay = () => {
      if (video.paused) {
        video.play().then(() => {
          console.log('Video started playing');
        }).catch((error) => {
          console.log('Play failed:', error.message);
        });
      }
    };

    // Wait a bit for the video to be ready
    setTimeout(() => {
      attemptPlay();
    }, 500);

    // Listen for loadedmetadata event
    video.addEventListener('loadedmetadata', attemptPlay);
    video.addEventListener('canplay', attemptPlay);

    // Also listen for user interaction as fallback
    const handleInteraction = () => {
      attemptPlay();
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };

    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('scroll', handleInteraction, { once: true });

    return () => {
      video.removeEventListener('loadedmetadata', attemptPlay);
      video.removeEventListener('canplay', attemptPlay);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ backgroundImage: 'url(/images/bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'left 20%' }}>
      {/* Video layer */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover md:object-center"
        style={{ objectPosition: '25% center' }}
      >
        <source src="/videos/background.webm" type="video/webm" />
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.55)] to-[rgba(21,9,103,0.15)] pointer-events-none" />
    </div>
  );
}
