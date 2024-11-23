import React from "react";
import PlaylistItem from "./PlaylistItem";

function PlaylistList() {
  return (
    <div className="flex flex-col gap-3">
      <PlaylistItem playlistID={1} />
      <PlaylistItem playlistID={2} />
      <PlaylistItem playlistID={3} />
      <PlaylistItem playlistID={4} />
      <PlaylistItem playlistID={5} />
    </div>
  );
}

export default PlaylistList;
