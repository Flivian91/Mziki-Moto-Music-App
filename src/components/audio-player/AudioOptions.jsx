"use client";
import React, { useContext } from "react";
import QueueButton from "../buttons/QueueButton";
import LikeButton from "../buttons/LikeButton";
import LoopButton from "../buttons/LoopButton";
import AddPlaylistButton from "../buttons/AddPlaylistButton";
import MoreOptionButton from "../buttons/MoreOptionButton";
import { AudioContext } from "@/context/AudioContextProvider";

function AudioOptions() {
  const { isLooping, setIsLooping, volume, setVolume } =
    useContext(AudioContext);

  const handleLoopToggle = () => {
    setIsLooping(!isLooping);
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <div className="flex items-center gap-2 relative">
      <QueueButton />
      <LikeButton />
      <LoopButton isActive={isLooping} onClick={handleLoopToggle} />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="w-20 h-1 bg-gray-600 rounded-lg appearance-none accent-accent "
      />
      <AddPlaylistButton />
      <MoreOptionButton />
    </div>
  );
}

export default AudioOptions;
