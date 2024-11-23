import React from "react";
import image from "../../../public/profile.webp";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";

function MusicItem() {
  return (
    <div className="grid text-sm grid-cols-[30px_0.3fr_1fr_0.8fr_0.4fr_1.5fr] items-center">
      <span className="text-lg font-mono">1</span>
      <Image src={image} className="w-8 h-8 rounded-md" alt="Album image" />
      <span className=" font-semibold text-stone-100">Relax and Unwind</span>
      <span className="text-text">Flivian M.</span>
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
