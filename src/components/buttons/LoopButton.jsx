"use client";
import React, { useState } from "react";
import { FaFastBackward } from "react-icons/fa";
import Tooltip from "./Tooltip";
import { LuRepeat, LuRepeat1 } from "react-icons/lu";

function LoopButton({ isActive, onClick }) {
  const [isView, setIsView] = useState(false);
  return (
    <div className="relative">
      {isView && <Tooltip text="Loop" />}
      <button
        onClick={onClick}
        onMouseEnter={() => setIsView(true)}
        onMouseLeave={() => setIsView(false)}
        className={`${
          isActive
            ? " text-accent hover:text-accent "
            : " text-text hover:text-accent "
        } text-xl  transition-all duration-200 p-2 rounded-full hover:bg-surface/85`}
      >
        {isActive ? <LuRepeat1 /> : <LuRepeat />}
        {/* <LuRepeat /> */}
        {/* <LuRepeat1 /> */}
      </button>
    </div>
  );
}

export default LoopButton;
