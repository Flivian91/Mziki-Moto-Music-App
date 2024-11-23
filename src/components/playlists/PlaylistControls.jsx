import React from "react";
import { FaPause, FaShuffle } from "react-icons/fa6";
import PlaylistSearchInput from "./PlaylistSearchInput";
import PlaylistFIlter from "./PlaylistFIlter";

function PlaylistControls() {
  return (
    <div className="flex items-center justify-between py-3 px-3">
      <div className="flex items-center gap-4">
        <button className="p-3 rounded-full flex items-center justify-center bg-accent text-primary">
          <FaPause fontSize={25} />
        </button>
        <button className="hover:text-accent transition-colors duration-200">
          <FaShuffle fontSize={25} />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <PlaylistSearchInput />
        <PlaylistFIlter />
      </div>
    </div>
  );
}

export default PlaylistControls;
