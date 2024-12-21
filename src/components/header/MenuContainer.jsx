"use client";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import MobileSidebar from "../MobileSidebar";
import BlurOverlay from "../ovelays/BlurOverlay";

function MenuContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <div className="lg:hidden block">
      {isOpen && <MobileSidebar onClose={setIsOpen} />}
      {isOpen && <BlurOverlay onClose={() => setIsOpen(false)} />}
      <button
        onClick={() => setIsOpen(true)}
        className=" p-1 sm:p-1.5 border border-accent text-xl sm:text-2xl rounded shadow text-white/70 hover:text-accent active:text-accent"
      >
        <BiMenu />
      </button>
    </div>
  );
}

export default MenuContainer;
