import React from "react";
import MusicItem from "./MusicItem";

function NewMusicView() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <MusicItem />
      <MusicItem />
      <MusicItem />
      <MusicItem />
    </div>
  );
}

export default NewMusicView;
