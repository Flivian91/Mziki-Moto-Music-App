import React from "react";
import { FaList } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa6";

function LikesFilterArea() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-base font-semibold tracking-wide">View</span>
      <button className="hover:text-accent active:text-accent transition-all duration-200">
        <FaMicrosoft />
      </button>
      <button className="hover:text-accent active:text-accent transition-all duration-200">
        <FaList />
      </button>
      <form>
        <input
          type="text"
          placeholder="Filter"
          className="text-base font-semibold bg-stone-900 text-stone-300 outline-none border-none px-2 py-1 placeholder:text-sm caret-accent rounded"
        />
      </form>
    </div>
  );
}

export default LikesFilterArea;
