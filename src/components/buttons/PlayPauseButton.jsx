"use client";
import React, { useContext, useState } from "react";
import { FaPlay } from "react-icons/fa";
import Tooltip from "./Tooltip";
import { IoIosPause } from "react-icons/io";
import { AudioContext } from "@/context/AudioContextProvider";

function PlayPauseButton() {
  const { isPlaying, setIsPlaying } = useContext(AudioContext);
  const [isView, setIsView] = useState(false);

  return (
    <div className="relative">
      {isView && <Tooltip text={isPlaying ? "Pause" : "Play"} />}
      <button
        onClick={() => setIsPlaying((prev) => !prev)}
        onMouseEnter={() => setIsView(true)}
        onMouseLeave={() => setIsView(false)}
        className="text-base md:text-2xl text-text hover:text-accent transition-all duration-200 p-2 rounded-full "
      >
        {isPlaying ? <IoIosPause /> : <FaPlay />}
        {/* <IoIosPause /> */}
        {/* <FaPlay /> */}
      </button>
    </div>
  );
}

export default PlayPauseButton;
