import React from "react";
import { IoAdd } from "react-icons/io5";

function ModelPlayListButton() {
  return (
    <button className="flex gap-3 items-center hover:bg-primary/60 py-2 px-2 rounded">
      <IoAdd />
      <span className="font-semibold tracking-wide">Add playlist</span>
    </button>
  );
}

export default ModelPlayListButton;
