import Image from "next/image";
import React from "react";
import { BiUser } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { TbUserPlus } from "react-icons/tb";

function ArtistDetailsModel() {
  return (
    <div className="absolute top-full left-0  bg-surface z-30 border-text/30 py-2 px-4 rounded-sm border">
      <div className="flex flex-col gap-1 items-center">
        <Image
          src={"/profile.webp"}
          width={100}
          height={100}
          alt="artist Profile Image"
          className="w-12 h-12 rounded-full"
        />
        <p className="text-sm font-semibold tracking-wide text-center">
          Artist Name
        </p>
        <div className="flex items-center gap-2">
          <FaUsers />
          <span className="font-mono">12k</span>
        </div>
        <p className="text-sm font-semibold tracking-wide text-center">
          Meru, Kenya
        </p>
        <div className="flex items-center justify-center mt-2">
          <button className="flex items-center gap-2 rounded py-1 px-4 bg-accent text-black font-semibold">
            <TbUserPlus />
            <span>Follow</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArtistDetailsModel;
