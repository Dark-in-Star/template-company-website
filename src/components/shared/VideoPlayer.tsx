
'use client';

import * as React from 'react';
import { X } from 'lucide-react';

interface VideoPlayerProps {
  youtubeId: string;
  onClose: () => void;
}

export function VideoPlayer({ youtubeId, onClose }: VideoPlayerProps) {
  // Prevent scrolling on the body when the modal is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in-0"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-2xl animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the video
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
          aria-label="Close video player"
        >
          <X className="h-6 w-6" />
        </button>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}
