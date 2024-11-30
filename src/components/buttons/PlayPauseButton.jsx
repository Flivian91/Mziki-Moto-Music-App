"use client";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Tooltip from "./Tooltip";

function PlayPauseButton() {
  const [isView, setIsView] = useState(false);

  return (
    <div className="relative">
      {isView && <Tooltip text="Play" />}
      <button
        onMouseEnter={() => setIsView(true)}
        onMouseLeave={() => setIsView(false)}
        className="text-2xl text-text hover:text-accent transition-all duration-200 p-2 rounded-full hover:bg-surface/85"
      >
        {/* <IoIosPause /> */}
        <FaPlay />
      </button>
    </div>
  );
}

export default PlayPauseButton;
