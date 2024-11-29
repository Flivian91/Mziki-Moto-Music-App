"use client";
import React, { useState } from "react";
import { FaFastBackward, FaRegHeart } from "react-icons/fa";
import Tooltip from "./Tooltip";
import { PiQueueBold } from "react-icons/pi";

function LikeButton() {
  const [isView, setIsView] = useState(false);
  return (
    <div className="relative">
      {isView && <Tooltip text="Like" />}
      <button
        onMouseEnter={() => setIsView(true)}
        onMouseLeave={() => setIsView(false)}
        className="text-xl text-text hover:text-accent transition-all duration-200 p-2 rounded-full hover:bg-surface/85"
      >
        <FaRegHeart />
        {/*<FaHeart />  */}
      </button>
    </div>
  );
}

export default LikeButton;
