import React from "react";
import PlayPauseButton from "../buttons/PlayPauseButton";
import PreviousButton from "../buttons/PreviousButton";
import NextButton from "../buttons/NextButton";

function AudioController() {
  return (
    <div className="flex items-center gap-3">
      <PreviousButton />
      <PlayPauseButton />
      <NextButton />
    </div>
  );
}

export default AudioController;
