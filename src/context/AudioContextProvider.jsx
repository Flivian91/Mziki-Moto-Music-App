"use client";
import React, { createContext, useState } from "react";
export const AudioContext = createContext();
function AudioContextProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // Range: 0 to 1
  const [isLooping, setIsLooping] = useState(false);
  const [currentTrack, setCurrentTrack] = useState("/song.m4a"); // Default track
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        volume,
        setVolume,
        isLooping,
        setIsLooping,
        currentTrack,
        setCurrentTrack,
        currentTime,
        setCurrentTime,
        duration,
        setDuration,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export default AudioContextProvider;
