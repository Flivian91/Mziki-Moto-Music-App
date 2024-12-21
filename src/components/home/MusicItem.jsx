import React from "react";
import image from "../../../public/profile.webp";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import PlayPauseButton from "../buttons/PlayPauseButton";
import { BsPlay } from "react-icons/bs";

function MusicItem() {
  return (
    <div className="group grid text-xs sm:text-sm grid-cols-[0.3fr_0.3fr_2fr_0.8fr_0.4fr_1.5fr] gap-2 items-center transition-all duration-300 py-1 overflow-hidden">
      <span className="text-lg font-mono group-hover:hidden">1</span>
      <button className="hidden group-hover:inline-block text-xl text-accent ">
        <BsPlay />
      </button>
      {/* <div className="hidden group-hover:block">
        <PlayPauseButton />
      </div> */}
      <div className="w-8 h-8 rounded overflow-hidden">
        <Image src={image} className="w-full" alt="Album image" />
      </div>
      <span className=" font-semibold text-stone-100 truncate">
        Relax and Unwind
      </span>
      <span className="text-text truncate">Flivian M.</span>
      <span className="text-text">12:32</span>
      <div className="flex items-center justify-center gap-4">
        <button>
          <FaHeart />
        </button>
        <button>
          <HiOutlineDotsVertical />
        </button>
      </div>
    </div>
  );
}

export default MusicItem;
