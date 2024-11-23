import Link from "next/link";
import React from "react";
import { PiCrownSimpleFill } from "react-icons/pi";
function MusicOffline() {
  return (
    <Link
      href={"/"}
      className="flex flex-col gap-2 items-center py-6 px-4 rounded-md shadow-sm shadow-accent bg-accent mt-5"
    >
      <span className="text-primary text-4xl">
        <PiCrownSimpleFill />
      </span>
      <h1 className="text-center text-xl tracking-wide leading-6 text-primary font-bold">
        Listening to Music{" "}
        <span className="inline-block mt-2 bg-gradient-to-t from-primary to-secondary font-mono font-bold text-accent px-2 py-1 transform -rotate-3">
          offline
        </span>
      </h1>
      <p className="text-center text-sm font-medium tracking-wide text-stone-800 leading-6">
        Experince listening to music offline with the best quality
      </p>
      <div className="py-4 flex items-center justify-center w-full">
        <Link
          className="bg-primary text-accent font-semibold text-base tracking-wide px-4 py-3 text-center rounded-md w-full"
          href={"/"}
        >
          Try for free
        </Link>
      </div>
    </Link>
  );
}

export default MusicOffline;
