import React from "react";
import PlayPauseButton from "../buttons/PlayPauseButton";
import Link from "next/link";

function TrackItemInfo() {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="p-1 bg-accent hover:bg-primary transition-all duration-200 rounded-full flex items-center justify-center ">
        <PlayPauseButton />
      </div>
      <div className=" flex-1 flex flex-col transition-all duration-200transition-all duration-200">
        <Link href={"/"} className="hover:underline tracking-wide">
          Dj FLivo
        </Link>
        <Link
          href={"/"}
          className="text-stone-200 tracking-wide hover:text-accent "
        >
          Best kenyan music Mix Vol 2
        </Link>
      </div>
      <div className="flex flex-col">
        <p className="text-xs font-bold text-text/60">2 months ago</p>
        <Link href={"/"} className="p-1 rounded-full bg-surface text-text">
          #Arbantone
        </Link>
      </div>
    </div>
  );
}

export default TrackItemInfo;
