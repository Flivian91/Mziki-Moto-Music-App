import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaMusic } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { IoAlbums } from "react-icons/io5";
import { PiPlaylist } from "react-icons/pi";

function SearchBarModel({ onClose }) {
  return (
    <div className="fixed top-[100px] sm:top-[117px] left-1 bg-surface py-2 px-3 rounded shadow z-40">
      <div className="flex flex-col gap-2 text-stone-400 font-semibold tracking-wider">
        <Link
          onClick={onClose}
          href={"/dashboard/search"}
          className="flex items-center gap-2 hover:bg-surface/80 rounded hover:text-accent p-1 "
        >
          <BsSearch />
          <span>Everything</span>
        </Link>
        <Link
          onClick={onClose}
          href={"/dashboard/search/songs"}
          className="flex items-center gap-2 hover:bg-surface/80 rounded hover:text-accent p-1 "
        >
          <FaMusic />
          <span>Songs</span>
        </Link>
        <Link
          onClick={onClose}
          href={"/dashboard/search/artists"}
          className="flex items-center gap-2 hover:bg-surface/80 rounded hover:text-accent p-1 "
        >
          <FaUser />
          <span>Artist</span>
        </Link>
        <Link
          onClick={onClose}
          href={"/dashboard/search/album"}
          className="flex items-center gap-2 hover:bg-surface/80 rounded hover:text-accent p-1 "
        >
          <IoAlbums />
          <span>Album</span>
        </Link>
        <Link
          onClick={onClose}
          href={"/dashboard/search/playlist"}
          className="flex items-center gap-2 hover:bg-surface/80 rounded hover:text-accent p-1 "
        >
          <PiPlaylist />
          <span>Playlist</span>
        </Link>
      </div>
    </div>
  );
}

export default SearchBarModel;
