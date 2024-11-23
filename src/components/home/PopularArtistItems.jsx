import Image from "next/image";
import React from "react";
import artistImage from "../../../public/profile.webp";
import Link from "next/link";

function PopularArtistItems() {
  return (
    <Link href={"/"} className="hover:scale-105 duration-200 transition-all">
      <Image
        className="h-24 object-fill rounded-md shadow"
        src={artistImage}
        alt="Artist Image"
      />
    </Link>
  );
}

export default PopularArtistItems;
