import React from "react";
import DiscoverPreviousButton from "../buttons/DiscoverPreviousButton";
import DiscoverItem from "./DiscoverItem";
import Link from "next/link";

function DiscoverHeader({heading=""}) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="uppercase tracking-wide pt-4 text-lg font-semibold text-stone-200">
        {heading}
      </h1>
      <div>
        <Link
          className="uppercase text-accent font-bold tracking-wide text-sm rounded-full "
          href={"/"}
        >
          View All
        </Link>
      </div>
    </div>
  );
}

export default DiscoverHeader;
