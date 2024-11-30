import React from "react";
import AlbumTrackItem from "./AlbumTrackItem";

function AlbumTracksDisplay() {
  return (
    <div className="border border-text/30 rounded overflow-hidden">
      <div className="divide-y divide-text/30">
        <AlbumTrackItem />
        <AlbumTrackItem />
        <AlbumTrackItem />
        <AlbumTrackItem />
        <AlbumTrackItem />
      </div>
      <div className="border-t border-text/30  w-full flex items-center">
        <button className="hover:bg-text/30 text-center w-full py-1.5">
          View 19 tracks
        </button>
      </div>
    </div>
  );
}

export default AlbumTracksDisplay;
