import React from "react";
import { IoCaretBackSharp } from "react-icons/io5";

function SettingsFollower() {
  return (
    <div className="flex items-center gap-1">
      <button className="text-base font-bold tracking-wide border-2 rounded-full px-4 py-1 border-accent">
        Follow
      </button>
      <div className="flex items-center gap-0">
        <IoCaretBackSharp className="-mr-[5.3px] text-xl" />
        <span className="px-2 py-1.5 font-mono border border-text">200</span>
      </div>
    </div>
  );
}

export default SettingsFollower;
