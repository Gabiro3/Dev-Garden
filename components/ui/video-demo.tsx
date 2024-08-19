// components/VideoOverlay.tsx
"use client";

import { useState } from "react";
import { Video } from "lucide-react";

const VideoOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      {/* Video Button */}
      <button
        onClick={handleOpen}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition focus:outline-none"
      >
        <Video className="h-6 w-6" />
      </button>

      {/* Video Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-4xl mx-auto p-4">
            <button
              onClick={handleClose}
              className="absolute left-0 bg-primary rounded-r-full transition-all w-[4px]"
            >
              ✕
            </button>
            <video
              className="w-full h-auto max-h-[80vh] rounded-lg"
              controls
              autoPlay
            >
              <source
                src="https://www.youtube.com/watch?v=a9__D53WsUs"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoOverlay;

