import Image from "next/image";
import Link from "next/link";
import React from "react";
import PlayPauseButton from "../buttons/PlayPauseButton";

function DiscoverItem() {
  return (
    <div className="flex flex-col relative group/minor">
      <Link href={"/"}>
        <Image
          src={"/profile.webp"}
          width={100}
          height={100}
          alt="recommentded pic"
          className="w-full h-56"
        />
      </Link>
      <div className="absolute invisible group-hover/minor:visible bottom-14 right-1 p-1 rounded-full transition-all duration-200 bg-surface hover:bg-surface/85">
        <PlayPauseButton />
      </div>
      <div className="flex flex-col items-center mt-2">
        <Link
          href={"/"}
          className="text-sm font-bold tracking-wide text-stone-300 hover:text-accent transition-all duration-300"
        >
          Title
        </Link>
        <Link
          href={"/"}
          className="text-sm font-bold tracking-wide hover:text-accent transition-all duration-300"
        >
          Artist Name
        </Link>
      </div>
    </div>
  );
}

export default DiscoverItem;
