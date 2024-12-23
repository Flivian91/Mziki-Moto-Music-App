import React from "react";
import FavouriteAlbumItem from "./FavouriteAlbumItem";
import MusicOffline from "./MusicOffline";

function FavoriteAlbum() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="uppercase tracking-wide font-semibold text-xl text-stone-100">
        Favorite Album
      </h1>
      <div className="flex flex-col gap-1">
        <FavouriteAlbumItem />
        <FavouriteAlbumItem />
        <FavouriteAlbumItem />
        <FavouriteAlbumItem />
        <FavouriteAlbumItem />
      </div>
      <div className="flex justify-center items-center">
        <MusicOffline />
      </div>
    </section>
  );
}

export default FavoriteAlbum;
