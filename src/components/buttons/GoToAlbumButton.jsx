import Link from "next/link";
import React from "react";
import { LuAlbum } from "react-icons/lu";

function GoToAlbumButton() {
  return (
    <Link
      href={"/"}
      className="flex gap-3 items-center hover:underline hover:bg-primary/60 py-2 px-2 rounded"
    >
      <LuAlbum />
      <span className="font-semibold tracking-wide">Go to album</span>
    </Link>
  );
}

export default GoToAlbumButton;
