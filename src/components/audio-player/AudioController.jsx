import React from "react";
import { FaFastBackward, FaFastForward } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { IoIosPause } from "react-icons/io";
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
