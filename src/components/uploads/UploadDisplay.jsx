import Image from "next/image";
import Link from "next/link";
import React from "react";

function UploadDisplay() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <Link href={'/'} className="p-4 rounded shadow-md w-64 h-56 border border-text/30">
          <Image
            width={100}
            height={100}
            src={"/no-music.webp"}
            alt="logo image"
            className="w-full h-full"
          />
        </Link>
        <h1 className="text-center mt-2 text-sm font-semibold tracking-wide">
          Seems a little Quiet over here
        </h1>
        <Link
          href={"/"}
          className="text-base font-bold tracking-wide text-center text-accent hover:text-text transition-all duration-200"
        >
          Upload a track to share it with your followers
        </Link>
      </div>
    </div>
  );
}

export default UploadDisplay;
