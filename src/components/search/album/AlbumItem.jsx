
import React from "react";
import TrackItemCoverImage from "../TrackItemCoverImage";
import TrackItemInfo from "../TrackItemInfo";
import AudioWaveForm from "@/components/audio-player/AudioWaveForm";
import TrackItemsFooter from "../TrackItemsFooter";
import AlbumTracksDisplay from "./AlbumTracksDisplay";


function AlbumItem() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-[60px_1fr] sm:grid-cols-[130px_1fr] sm:gap-2">
        <TrackItemCoverImage />
        <div className="flex flex-col text-sm font-semibold gap-4">
          <TrackItemInfo />
          <div>
            <AudioWaveForm />
          </div>
          <AlbumTracksDisplay/>
          <TrackItemsFooter />
        </div>
      </div>
    </div>
  );
}

export default AlbumItem;
