import React from "react";
import PlayPauseButton from "../buttons/PlayPauseButton";
import Link from "next/link";
import TrackArtistName from "./TrackArtistName";

function TrackItemInfo() {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="p-1 bg-accent hover:bg-primary transition-all duration-200 rounded-full flex items-center justify-center ">
        <PlayPauseButton />
      </div>
      <div className="flex-1 flex flex-col transition-all duration-200transition-all duration-200">
        <TrackArtistName />
        <Link
          href={"/"}
          className="text-stone-200 text-sm sm:text-base  tracking-wide hover:text-accent "
        >
          Best kenyan music Mix Vol 2
        </Link>
      </div>
      <div className="hidden flex-col sm:flex">
        <p className="text-xs font-bold text-text/60">2 months ago</p>
        <Link href={"/"} className="p-1 rounded-full bg-surface text-text">
          #Arbantone
        </Link>
      </div>
    </div>
  );
}

export default TrackItemInfo;
