import React from "react";

function Tooltip({text=""}) {
  return (
    <div className="absolute -top-7 left-1/2 transform select-none -translate-x-1/2 bg-accent text-black transition-all duration-200 px-2 py-1 rounded-full text-sm font-bold tracking-wide">
      {text}
    </div>
  );
}

export default Tooltip;
