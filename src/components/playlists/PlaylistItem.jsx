import React from "react";
import playlistImage from "../../../public/profile.webp";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";
function PlaylistItem({ playlistID }) {
  return (
    <Link
      href={`/playlists/${playlistID}`}
      className="grid grid-cols-[0.3fr_1fr_0.3fr] gap-2 group hover:bg-surface py-2 px-1 rounded"
    >
      <div className="h-14 w-full">
        <Image
          className="object-cover h-full rounded"
          src={playlistImage}
          alt="Playlist Image"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-base font-semibold text-stone-200 tracking-wide">
          KSI-Think of it
        </h2>
        <p className="ml-4 text-text text-sm font-semibold tracking-wide">
          Flivian
        </p>
      </div>
      <div className="flex items-center justify-center">
        <button className="group-hover:text-accent transition-all duration-200">
          <FaPlayCircle fontSize={22} />
        </button>
      </div>
    </Link>
  );
}

export default PlaylistItem;
