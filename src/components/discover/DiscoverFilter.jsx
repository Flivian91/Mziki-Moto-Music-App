"use client";
import React, { useState } from "react";
import { BiFilter } from "react-icons/bi";
import TrendingTrackModel from "../models/TrendingTrackModel";
import TransparentOverlay from "../ovelays/TransparentOverlay";

function DiscoverFilter() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center text-base gap-2 rounded-full px-4 py-1 bg-accent text-black"
      >
        <BiFilter />
        <span>Filter</span>
      </button>
      {/* Drop down  */}
      {isOpen && <TrendingTrackModel />}
      {isOpen && <TransparentOverlay onClose={() => setIsOpen(false)} />}
    </div>
  );
}

export default DiscoverFilter;
