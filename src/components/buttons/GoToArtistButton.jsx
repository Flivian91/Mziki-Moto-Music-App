import Link from "next/link";
import React from "react";
import { RiUserVoiceLine } from "react-icons/ri";

function GoToArtistButton() {
  return (
    <Link
      href={"/"}
      className="flex gap-3 items-center hover:underline hover:bg-primary/60 py-2 px-2 rounded"
    >
      <RiUserVoiceLine />
      <span className="font-semibold tracking-wide">Go to artist</span>
    </Link>
  );
}

export default GoToArtistButton;
