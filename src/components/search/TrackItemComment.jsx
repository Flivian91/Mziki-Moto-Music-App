import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsSend } from "react-icons/bs";

function TrackItemComment() {
  return (
    <form className="flex items-center gap-4 transition-all duration-200">
      <Link href={"/"} className="flex items-center">
        <Image
          src={"/profile.webp"}
          alt="profile image"
          height={100}
          width={100}
          className="w-12 h-12 rounded-full"
        ></Image>
      </Link>
      <div className="flex-1 w-full">
        <input
          type="text"
          placeholder="Write a comment"
          className="w-full bg-stone-900 text-white placeholder:text-text placeholder:font-mono border-none outline-none caret-accent rounded-full px-2 py-1 font-mono text-lg"
        />
      </div>
      <div>
        <button className="w-10 h-10 font-bold text-xl rounded-full border border-text flex items-center justify-center hover:text-accent hover:border-accent">
          <BsSend />
        </button>
      </div>
    </form>
  );
}

export default TrackItemComment;
