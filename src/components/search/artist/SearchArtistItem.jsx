import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUsers } from "react-icons/fa";
import { TbUserPlus } from "react-icons/tb";

function SearchArtistItem() {
  return (
    <div className="flex gap-3">
      <Image
        src={"/profile.webp"}
        alt="Artist Profile Image"
        width={100}
        height={100}
        className="w-32 h-32 rounded-full"
      />
      <div className="flex flex-col gap-1">
        <Link
          className="text-lg tracking-wide font-bold text-stone-200"
          href={"/"}
        >
          Flivian Mwirigi
        </Link>
        <p className="text-base font-semibold tracking-wide">Kenya, Meru</p>
        <Link
          href={"/"}
          className="flex items-center hover:text-stone-200 gap-2"
        >
          <FaUsers />
          <span className="font-mono">12k</span>
          <span>followers</span>
        </Link>
        <div className="mt-2">
          <button className="flex items-center gap-2 rounded py-1 px-4 border border-text/30 text-text font-semibold">
            <TbUserPlus />
            <span>Follow</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchArtistItem;
