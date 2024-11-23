import React from "react";
import NewMusicTabs from "./NewMusicTabs";
import NewMusicView from "./NewMusicView";

function NewMusic() {
  return (
    <div className="border-t border-text">
      <NewMusicTabs />
      <NewMusicView/>
    </div>
  );
}

export default NewMusic;
