import React from "react";
import { BiPlay } from "react-icons/bi";

function TrackNumberOfPlayed() {
  return (
    <div className="flex items-center gap-2">
      <BiPlay />
      <span className="font-mono">30k</span>
    </div>
  );
}

export default TrackNumberOfPlayed;
