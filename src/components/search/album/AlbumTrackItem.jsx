import Image from "next/image";
import React from "react";
import { BiPlay } from "react-icons/bi";

function AlbumTrackItem() {
  return (
    <div className="grid grid-cols-[20px_40px_1fr_80px] cursor-pointer hover:bg-surface items-center py-1.5 px-1 gap-1 text-sm w-full">
      <span className="font-mono">1</span>
      <Image
        src={"/profile.webp"}
        width={100}
        height={100}
        alt="track Image"
        className="h-6 w-6 rounded-sm"
      />
      <h1 className="text-stone-300 sm:text-sm text-xs font-semibold tracking-wide">
        Lorem ipsum dolor sit amet.
      </h1>
      <div className="flex items-center gap-1 justify-center">
        <BiPlay />
        <span className="font-mono">2000</span>
      </div>
    </div>
  );
}

export default AlbumTrackItem;
