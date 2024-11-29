"use client";
import React, { useState } from "react";
import { FaFastForward } from "react-icons/fa";
import Tooltip from "./Tooltip";

function NextButton() {
  const [isView, setIsView] = useState(false);
  return (
    <div className="relative">
      {isView && <Tooltip text="Next" />}
      <button
        onMouseEnter={() => setIsView(true)}
        onMouseLeave={() => setIsView(false)}
        className="text-xl text-text hover:text-accent transition-all duration-200 p-2 rounded-full hover:bg-surface/85"
      >
        <FaFastForward />
      </button>
    </div>
  );
}

export default NextButton;
