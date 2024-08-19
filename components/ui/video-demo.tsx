// components/VideoOverlay.tsx
import React, { useState } from 'react';

const VideoOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenVideo = () => {
    setIsOpen(true);
  };

  const handleCloseVideo = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="text-gray-600 hover:text-gray-800 focus:outline-none"
        onClick={handleOpenVideo}
      >
        <i className="fas fa-video text-3xl"></i> {/* Video Icon */}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl bg-black rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-white text-2xl focus:outline-none"
              onClick={handleCloseVideo}
            >
              &times;
            </button>
            <video controls autoPlay className="w-full rounded-b-lg">
              <source src="https://www.youtube.com/watch?v=a9__D53WsUs" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoOverlay;
