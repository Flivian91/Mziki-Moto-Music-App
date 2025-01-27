import Image from "next/image";
import React from "react";
import albumImage from "../../../public/profile.webp";
import { FaLink } from "react-icons/fa";
import Link from "next/link";
function FavouriteAlbumItem() {
  return (
    <Link
      href={"/"}
      className="grid grid-cols-[0.3fr_1fr] gap-3 transition-all duration-300 rounded hover:shadow hover:bg-surface p-1"
    >
      <div className="h-16  shadow-md overflow-hidden">
        <Image
          className="object-fill w-full rounded"
          src={albumImage}
          alt="Album Image"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-xs tracking-wide text-stone-200">
          SoundScapes from Beyond
        </h2>
        <div className="flex text-xs items-center justify-between">
          <p>421K followers</p>
          <button className="mr-2">
            <FaLink />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default FavouriteAlbumItem;
