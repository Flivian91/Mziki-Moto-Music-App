import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchModel() {
  return (
    <form className="absolute top-full right-1  w-4/5 sm:w-1/2 md:hidden block border border-accent rounded shadow">
      <div className="flex items-center gap-2 bg-stone-900 rounded shadow-sm">
        <button className="p-2 text-accent">
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

export default SearchModel;
