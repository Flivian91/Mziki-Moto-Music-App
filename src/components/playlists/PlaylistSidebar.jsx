import React from "react";
import PlaylistNavbar from "./PlaylistNavbar";
import PlaylistFilterArea from "./PlaylistFilterArea";
import PlaylistList from "./PlaylistList";

function PlaylistSidebar() {
  return (
    <aside className="bg-secondary rounded-md shadow py-4 px-2 shadow-secondary flex flex-col gap-5">
      <PlaylistNavbar />
      <PlaylistFilterArea />
      <PlaylistList />
    </aside>
  );
}

export default PlaylistSidebar;
