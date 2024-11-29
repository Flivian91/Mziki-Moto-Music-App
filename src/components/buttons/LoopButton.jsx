"use client";
import React, { useState } from "react";
import { FaFastBackward } from "react-icons/fa";
import Tooltip from "./Tooltip";
import { LuRepeat } from "react-icons/lu";

function LoopButton() {
  const [isView, setIsView] = useState(false);
  return (
    <div className="relative">
      {isView && <Tooltip text="Loop" />}
      <button
        onMouseEnter={() => setIsView(true)}
        onMouseLeave={() => setIsView(false)}
        className="text-xl text-text hover:text-accent transition-all duration-200 p-2 rounded-full hover:bg-surface/85"
      >
        <LuRepeat />
        {/* <LuRepeat1 /> */}
      </button>
    </div>
  );
}

export default LoopButton;
