import React from "react";
import { MdNavigateNext } from "react-icons/md";

function DiscoverNextButton({onScroll}) {
  return (
    <button
    onClick={onScroll}
      className="absolute z-10 shadow right-1 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-accent text-black  items-center justify-center text-4xl flex invisible group-hover:visible"
      role="button"
    >
      <MdNavigateNext />
    </button>
  );
}

export default DiscoverNextButton;
