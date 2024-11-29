import React from "react";
import TrackLikeButton from "../buttons/TrackLikeButton";
import TrackRepostButton from "../buttons/TrackRepostButton";
import TrackCopyLinkButton from "../buttons/TrackCopyLinkButton";
import TrackMoreOptionButton from "../buttons/TrackMoreOptionButton";
import TrackNumberOfPlayed from "./TrackNumberOfPlayed";
import TrackNavigateToComments from "./TrackNavigateToComments";

function TrackItemsFooter() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <TrackLikeButton />
        <TrackRepostButton />
        <TrackCopyLinkButton />
        <TrackMoreOptionButton />
      </div>
      <div className="flex items-center gap-2">
        <TrackNumberOfPlayed />
        <TrackNavigateToComments />
      </div>
    </div>
  );
}

export default TrackItemsFooter;
