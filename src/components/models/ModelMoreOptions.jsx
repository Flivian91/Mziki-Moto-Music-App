import React from "react";
import { IoCopyOutline } from "react-icons/io5";
import VolumeControlButton from "../buttons/VolumeControlButton";
import PlaylistButton from "../buttons/PlaylistButton";
import GoToArtistButton from "../buttons/GoToArtistButton";
import GoToAlbumButton from "../buttons/GoToAlbumButton";
import ShareTrackURL from "../buttons/ShareTrackURL";

function ModelMoreOptions() {
  return (
    <div className="absolute bottom-full right-0 w-full py-4 px-2 bg-surface shadow-md rounded border z-30 border-primary">
      <div className="flex flex-col gap-2 text-stone-200 transition-all duration-200">
        <VolumeControlButton />
        <PlaylistButton />
        <GoToArtistButton />
        <GoToAlbumButton />
        <ShareTrackURL />
      </div>
    </div>
  );
}

export default ModelMoreOptions;
