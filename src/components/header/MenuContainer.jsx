"use client";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import MobileSidebar from "../MobileSidebar";

function MenuContainer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {isOpen && <MobileSidebar onClose={setIsOpen} />}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden block p-1 sm:p-1.5 border border-accent text-xl sm:text-2xl rounded shadow text-white/70 hover:text-accent active:text-accent"
      >
        <BiMenu />
      </button>
    </div>
  );
}

export default MenuContainer;
