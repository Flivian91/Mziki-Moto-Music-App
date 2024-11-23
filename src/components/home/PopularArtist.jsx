import React from "react";
import PopularArtistItems from "./PopularArtistItems";

function PopularArtist() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="uppercase tracking-wide font-semibold text-xl text-stone-100">
        Popular Artist
      </h1>
      <div className="grid grid-cols-5 gap-5">
        <PopularArtistItems />
        <PopularArtistItems />
        <PopularArtistItems />
        <PopularArtistItems />
        <PopularArtistItems />
      </div>
    </div>
  );
}

export default PopularArtist;
