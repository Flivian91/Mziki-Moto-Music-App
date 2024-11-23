import Image from "next/image";
import React from "react";
import playlistImage from "../../../public/profile.webp";
import Link from "next/link";
function PlaylistInfo() {
  return (
    <div className="bg-surface w-full py-4 px-2 grid grid-cols-[0.2fr_1fr] gap-4">
      <div className="h-32">
        <Image
          className="object-fill h-full rounded border border-accent"
          src={playlistImage}
          alt="Playlist Image"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-bold tracking-wide text-stone-200">
          Playlist Title
        </h1>
        <p className="text-sm font-semibold text-stone-400 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ratione
          aliquid consequuntur...
        </p>
        <div className="flex items-center justify-start gap-2 mt-2">
          <Link href={"/"} className="flex items-center gap-1 group ">
            <div className="w-5 h-5 rounded-full overflow-hidden">
              <Image
                className="h-full"
                src={playlistImage}
                alt="Artist Image"
              />
            </div>
            <span className="text-sm font-bold group-hover:underline transition-all duration-300">Flivian</span>
          </Link>
          <span className="text-sm font-mono tracking-wide">35 songs,</span>
          <span className="text-sm font-mono">1h 32min</span>
        </div>
      </div>
    </div>
  );
}

export default PlaylistInfo;
