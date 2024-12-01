import React from "react";
import { BiFilter } from "react-icons/bi";
import DiscoverFilter from "./DiscoverFilter";

function TrendingHeader({ heading = "" }) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="uppercase tracking-wide pt-4 text-lg font-semibold text-stone-200">
        {heading}
      </h1>
      <DiscoverFilter />
    </div>
  );
}

export default TrendingHeader;
