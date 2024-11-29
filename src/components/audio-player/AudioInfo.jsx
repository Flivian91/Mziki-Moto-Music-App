import Image from "next/image";
import React from "react";
import artistImage from "../../../public/profile.webp";
import Link from "next/link";
function AudioInfo() {
  return (
    <section className="flex items-center gap-2">
      <div>
        <Image
          className="object-cover h-16 w-16 rounded-md shadow-sm"
          src={artistImage}
          alt="artist Profile image"
        />
      </div>
      <div className="flex flex-col text-sm font-semibold">
        <h1 className="tracking-wide truncate text-white">Music Title</h1>
        <Link
          href={"/"}
          className="hover:underline transition-all duration-200"
        >
          Artist name
        </Link>
        <Link
          href={"/"}
          className="hover:underline transition-all duration-200 text-accent"
        >
          Genre
        </Link>
      </div>
    </section>
  );
}

export default AudioInfo;
