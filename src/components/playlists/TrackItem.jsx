import React from "react";
import image from "../../../public/profile.webp";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Link from "next/link";
import { IoIosAddCircleOutline } from "react-icons/io";

function TrackItems() {
  return (
    <div className="grid text-sm grid-cols-[0.1fr_1fr_0.7fr_0.4fr_1fr] items-center py-2 hover:bg-surface rounded px-1">
      <span className="text-lg font-mono">1</span>
      <div className="flex items-center gap-1">
        <Image src={image} className="w-8 h-8 rounded-md" alt="Album image" />
        <div className="flex flex-col ">
          <span className=" font-semibold text-stone-100 truncate">
            Relax and Unwind
          </span>
          <Link
            className="text-xs font-bold text-stone-500 tracking-wide hover:underline transition-all duration-200"
            href={"/"}
          >
            KSI
          </Link>
        </div>
      </div>
      <span className="text-text truncate">Flivian M. lorem</span>
      <span className="text-text">12:32</span>
      <div className="flex items-center justify-center gap-4">
        <button className="hover:text-accent transition-colors duration-300">
          <FaHeart fontSize={20} />
        </button>
        <button className="hover:text-accent transition-colors duration-300">
          <IoIosAddCircleOutline fontSize={22} />
        </button>
      </div>
    </div>
  );
}

export default TrackItems;
