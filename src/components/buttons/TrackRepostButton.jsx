import React from "react";
import { BiRepost } from "react-icons/bi";

function TrackRepostButton() {
  return (
    <button className="flex items-center text-sm gap-2 px-3 py-1 border border-text rounded">
      <BiRepost />
      <span className="font-mono">4</span>
    </button>
  );
}

export default TrackRepostButton;
