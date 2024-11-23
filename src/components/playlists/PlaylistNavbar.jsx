import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import { PiPlaylist } from "react-icons/pi";

function PlaylistNavbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <PiPlaylist fontSize={25} />
        <span>Playlist</span>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="hover:text-accent transition-all duration-200"
          title="Add Playlist"
        >
          <IoAddCircleOutline fontSize={25} />
        </button>
        <button
          className="hover:text-accent transition-all duration-200"
          title="Back"
        >
          <IoMdArrowForward fontSize={25} />
        </button>
      </div>
    </div>
  );
}

export default PlaylistNavbar;
