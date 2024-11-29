"use client";
import React, { useState } from "react";
import Tooltip from "./Tooltip";
import { RiPlayListAddFill } from "react-icons/ri";

function AddPlaylistButton() {
  const [isView, setIsView] = useState(false);
  return (
    <div className="relative">
      {isView && <Tooltip text="Add" />}
      <button
        onMouseEnter={() => setIsView(true)}
        onMouseLeave={() => setIsView(false)}
        className="text-xl text-text hover:text-accent transition-all duration-200 p-2 rounded-full hover:bg-surface/85"
      >
       <RiPlayListAddFill />
        {/* <MdPlaylistAddCheck /> */}
      </button>
    </div>
  );
}

export default AddPlaylistButton;
