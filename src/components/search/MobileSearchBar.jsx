"use client";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import SearchBarModel from "../models/SearchBarModel";
import BlurOverlay from "../ovelays/BlurOverlay";

function MobileSearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      {isOpen && <SearchBarModel onClose={() => setIsOpen(false)} />}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-0.5 sm:p-1.5 border border-accent text-lg sm:text-2xl rounded shadow text-white/70 hover:text-accent active:text-accent"
      >
        <BiMenu />
      </button>
    </div>
  );
}

export default MobileSearchBar;
