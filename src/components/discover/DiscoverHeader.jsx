import React from "react";
import DiscoverPreviousButton from "../buttons/DiscoverPreviousButton";
import DiscoverItem from "./DiscoverItem";
import Link from "next/link";

function DiscoverHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="uppercase tracking-wide pt-4 text-lg font-semibold text-stone-200">
        Recommended for you
      </h1>
      <div>
        <Link
          className="bg-accent px-3 py-2 font-bold tracking-wide text-sm rounded-full text-black"
          href={"/"}
        >
          View All
        </Link>
      </div>
    </div>
  );
}

export default DiscoverHeader;
