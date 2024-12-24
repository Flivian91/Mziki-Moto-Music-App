"use cleint"
import React, { useContext } from "react";
import { AudioContext } from "./AudioPlayer";
import PlayPauseButton from "../buttons/PlayPauseButton";
import PreviousButton from "../buttons/PreviousButton";
import NextButton from "../buttons/NextButton";

function AudioController() {
  const { isPlaying, setIsPlaying } = useContext(AudioContext);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center gap-3">
      <PreviousButton />
      <PlayPauseButton isPlaying={isPlaying} onClick={handlePlayPause} />
      <NextButton />
    </div>
  );
}

export default AudioController;
