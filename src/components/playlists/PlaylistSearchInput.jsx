import React from "react";
import { FaSearch } from "react-icons/fa";

function PlaylistSearchInput() {
  return (
    <form>
      <div className="flex items-center gap-2 bg-stone-900 rounded shadow-sm">
        <button className="text-text p-2">
          <FaSearch />
        </button>
        <input
          placeholder="Search Playlists..."
          className="bg-transparent text-lg caret-accent p-1 font-mono placeholder:text-sm border-none outline-none placeholder:text-text "
          type="text"
        />
      </div>
    </form>
  );
}

export default PlaylistSearchInput;
