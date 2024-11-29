import React from "react";
import { HiHeart } from "react-icons/hi";

function TrackLikeButton() {
  return (
    <button className="flex items-center text-sm gap-2 px-3 py-1 border border-text rounded">
      <HiHeart />
      <span className="font-mono">99</span>
    </button>
  );
}

export default TrackLikeButton;
