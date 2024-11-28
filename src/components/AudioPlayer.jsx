"use client";
import { Howl } from "howler";
import React, { useState } from "react";

const AudioPlayer = ({ src, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Initialize Howl with the public URL
  const sound = new Howl({
    src: [src], // Use the URL as the source
    html5: true, // Ensure it uses HTML5 for playback
  });

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      sound.pause();
    } else {
      setIsPlaying(true);
      sound.play();
    }
  };

  return (
    <div className="flex items-center space-x-4 p-4 border rounded-md">
      <h3 className="font-bold">{title}</h3>
      <button
        className="px-4 py-2 bg-secondary text-text rounded hover:bg-primary"
        onClick={togglePlay}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default AudioPlayer;
