import React from "react";

function SearchQueryDisplay() {
  return (
    <div className="py-2 fixed left-[260] z-30 top-[64px] w-full border-b bg-primary border-surface">
      <h1 className="text-xl font-semibold tracking-wide">
        Search results for &quot;
        <span className="font-mono text-stone-200">anguka nayo</span>&quot;
      </h1>
    </div>
  );
}

export default SearchQueryDisplay;
