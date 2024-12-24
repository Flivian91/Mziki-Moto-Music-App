"use client"
import React, { useState } from "react";
import AudioController from "./AudioController";
import AudioInfo from "./AudioInfo";
import AudioWaveForm from "./AudioWaveForm";
import AudioOptions from "./AudioOptions";

export const AudioContext = React.createContext();

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // Range: 0 to 1
  const [isLooping, setIsLooping] = useState(false);
  const [currentTrack, setCurrentTrack] = useState("/song.m4a"); // Default track

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
      }}
    >
      <section className="fixed bg-surface w-full z-30 bottom-0 py-5 px-2">
        <div className="flex items-center justify-between gap-8">
          <AudioController />
          <AudioInfo />
          <AudioWaveForm />
          <AudioOptions />
        </div>
      </section>
    </AudioContext.Provider>
  );
}

export default AudioPlayer;
