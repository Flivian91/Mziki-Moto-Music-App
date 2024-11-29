"use client";
import Link from "next/link";
import React, { useState } from "react";
import ArtistDetailsModel from "../models/ArtistDetailsModel";
import TransparentOverlay from "../ovelays/TransparentOverlay";

function TrackArtistName() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      {isOpen && <ArtistDetailsModel />}
      {isOpen && <TransparentOverlay onClose={() => setIsOpen(false)} />}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="hover:underline tracking-wide"
      >
        Dj FLivo
      </button>
    </div>
  );
}

export default TrackArtistName;
