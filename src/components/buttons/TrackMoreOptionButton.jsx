import React from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

function TrackMoreOptionButton() {
  return (
    <button className="flex items-center text-sm gap-2 px-3 py-1 border border-text rounded">
      <PiDotsThreeOutlineFill />
      <span className="font-mono">More</span>
    </button>
  );
}

export default TrackMoreOptionButton;
