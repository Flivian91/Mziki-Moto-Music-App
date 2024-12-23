import Image from "next/image";
import Link from "next/link";
import React from "react";

function TrackItemCoverImage() {
  return (
    <Link href={"/"} className="flex">
      <Image
        src={"/profile.webp"}
        alt="profile image"
        width={"100"}
        height={"100"}
        className="h-12 w-12 sm:h-32 sm:w-32 rounded-sm"
      />
    </Link>
  );
}

export default TrackItemCoverImage;
