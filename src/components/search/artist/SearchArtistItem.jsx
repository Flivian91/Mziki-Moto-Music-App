import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUsers } from "react-icons/fa";
import { TbUserPlus } from "react-icons/tb";

function SearchArtistItem() {
  return (
    <div className="flex gap-3 w-full">
      <Image
        src={"/profile.webp"}
        alt="Artist Profile Image"
        width={100}
        height={100}
        className="w-20 h-20 sm:w-32 sm:h-32 rounded-full"
      />
      <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-col sm:gap-1">
        <div className="flex flex-col gap-1">
          <Link
            className="text-base sm:text-lg tracking-wide font-bold text-stone-200"
            href={"/"}
          >
            Flivian Mwirigi
          </Link>
          <p className="text-xs sm:text-base font-semibold tracking-wide">Kenya, Meru</p>
          <Link
            href={"/"}
            className="text-xs sm:text-base flex items-center hover:text-stone-200 gap-2"
          >
            <FaUsers />
            <span className="font-mono">12k</span>
            <span>followers</span>
          </Link>
        </div>

        <div className="mt-2 place-content-center place-items-end sm:place-content-start sm:place-items-start">
          <button className="flex items-center gap-2 rounded py-1 px-2 sm:px-4 border border-text/30 text-text font-semibold">
            <TbUserPlus />
            <span>Follow</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchArtistItem;
