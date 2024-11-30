import React from "react";
import { IoIosArrowBack } from "react-icons/io";
function DiscoverPreviousButton() {
  return (
    <button
      className="absolute z-10 shadow left-1 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-accent text-black  items-center justify-center text-2xl flex invisible group-hover:visible"
      role="button"
    >
      <IoIosArrowBack />
    </button>
  );
}

export default DiscoverPreviousButton;
