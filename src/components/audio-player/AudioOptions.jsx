import React from "react";
import QueueButton from "../buttons/QueueButton";
import LikeButton from "../buttons/LikeButton";
import LoopButton from "../buttons/LoopButton";
import AddPlaylistButton from "../buttons/AddPlaylistButton";
import MoreOptionButton from "../buttons/MoreOptionButton";

function AudioOptions() {
  return (
    <div className="flex items-center gap-2 relative">
      <QueueButton />
      <LikeButton />
      <LoopButton />
      <AddPlaylistButton />
      <MoreOptionButton />
    </div>
  );
}

export default AudioOptions;
