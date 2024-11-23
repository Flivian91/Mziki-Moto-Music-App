import React from "react";
import PlaylistSearchInput from "./PlaylistSearchInput";
import PlaylistFIlter from "./PlaylistFIlter";

function PlaylistFilterArea() {
  return (
    <div className="flex items-center justify-between">
      <PlaylistSearchInput />
      <PlaylistFIlter />
    </div>
  );
}

export default PlaylistFilterArea;
