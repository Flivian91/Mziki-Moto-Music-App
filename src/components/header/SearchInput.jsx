import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchInput() {
  return (
    // Width to be changed by the media query
    <form className="lg:w-1/2 md:w-1/3 hidden md:block ">
      <div className="flex items-center gap-2 bg-stone-900 rounded shadow-sm">
        <button className="text-text p-2">
          <FaSearch />
        </button>
        <input
          placeholder="Search by artist, songs or albums"
          className="w-full bg-transparent text-lg caret-accent p-1 font-mono placeholder:text-sm border-none outline-none placeholder:text-text "
          type="text"
        />
      </div>
    </form>
  );
}

export default SearchInput;
