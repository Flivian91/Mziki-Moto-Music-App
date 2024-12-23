import React from "react";
import MobileSearchBar from "./MobileSearchBar";

function SearchQueryDisplay() {
  return (
    <div className="py-2 fixed lg:left-[260px] z-10 top-[60px] w-full border-b bg-primary border-surface">
      <div className="flex items-center gap-2">
        <MobileSearchBar />
        <h1 className="text-sm sm:text-xl font-semibold tracking-wide">
          Search results for &quot;
          <span className="font-mono text-stone-200">anguka nayo</span>&quot;
        </h1>
      </div>
    </div>
  );
}

export default SearchQueryDisplay;
