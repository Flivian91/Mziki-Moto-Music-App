import React from "react";
import { IoFilter } from "react-icons/io5";
function PlaylistFIlter() {
  return (
    <div className="hover:text-accent transition-all duration-200">
      <button>
        <IoFilter />
      </button>
    </div>
  );
}

export default PlaylistFIlter;
