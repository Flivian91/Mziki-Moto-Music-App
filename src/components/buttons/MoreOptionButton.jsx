"use client";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import MoreOptionsModel from "../models/ModelMoreOptions";
import TransparentOverlay from "../ovelays/TransparentOverlay";

function MoreOptionButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {isOpen && <MoreOptionsModel />}
      {isOpen && <TransparentOverlay onClose={() => setIsOpen(false)} />}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-xl text-text hover:text-accent transition-all duration-200 p-2 rounded-full hover:bg-surface/85"
      >
        <BsThreeDots />
      </button>
    </div>
  );
}

export default MoreOptionButton;
