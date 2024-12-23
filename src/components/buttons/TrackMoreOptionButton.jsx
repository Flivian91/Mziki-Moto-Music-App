"use client";
import React, { useState } from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import TransparentOverlay from "../ovelays/TransparentOverlay";
import ModelTrackItemOptions from "../models/ModelTrackItemOptions";

function TrackMoreOptionButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      {isOpen && <ModelTrackItemOptions />}
      {isOpen && <TransparentOverlay onClose={() => setIsOpen(false)} />}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className=" flex items-center text-base sm:text-sm gap-2 px-1 sm:px-3 py-1 sm:py-1 border border-text rounded"
      >
        <PiDotsThreeOutlineFill />
        <span className="font-mono hidden sm:block">More</span>
      </button>
    </div>
  );
}

export default TrackMoreOptionButton;
