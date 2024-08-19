// components/VideoOverlay.tsx
"use client";

import { useState } from "react";
import { Video,YoutubeIcon } from "lucide-react";


const VideoOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      {/* Video Button */}
      <button
        onClick={handleOpen}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition focus:outline-none"
      >
        <YoutubeIcon className="h-6 w-6" />
      </button>

      {/* Video Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-4xl mx-auto p-4">
          <button
  onClick={handleClose}
  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-all shadow-lg"
>
  X
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


