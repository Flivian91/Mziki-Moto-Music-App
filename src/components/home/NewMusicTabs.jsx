import React from "react";

function NewMusicTabs() {
  return (
    <div className="flex gap-4 py-3 ">
      <button className="relative text-sm font-semibold after:absolute after:content-[''] after:-top-2  after:w-full after:h-1 text-white after:left-0 after:bg-accent">
        Playlist
      </button>
      <button>Favourite</button>
      <button>Album</button>
    </div>
  );
}

export default NewMusicTabs;
