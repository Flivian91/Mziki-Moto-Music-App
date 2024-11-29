
import React from "react";
import AudioWaveForm from "../audio-player/AudioWaveForm";

import TrackItemCoverImage from "./TrackItemCoverImage";
import TrackItemInfo from "./TrackItemInfo";
import TrackItemComment from "./TrackItemComment";
import TrackItemsFooter from "./TrackItemsFooter";

function TrackItem() {
  return (
    <div>
      <div className="grid grid-cols-[130px_1fr] gap-2">
        <TrackItemCoverImage />
        <div className="flex flex-col text-sm font-semibold gap-4">
          <TrackItemInfo />
          <div>
            <AudioWaveForm />
          </div>
          {/* The component Component should only appear when the song is playing */}
          {/* <TrackItemComment /> */}
          <TrackItemsFooter />
        </div>
      </div>
    </div>
  );
}

export default TrackItem;
