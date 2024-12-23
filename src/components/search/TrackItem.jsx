
import React from "react";
import AudioWaveForm from "../audio-player/AudioWaveForm";

import TrackItemCoverImage from "./TrackItemCoverImage";
import TrackItemInfo from "./TrackItemInfo";
import TrackItemComment from "./TrackItemComment";
import TrackItemsFooter from "./TrackItemsFooter";

function TrackItem() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-[60px_1fr] sm:grid-cols-[130px_1fr] sm:gap-2">
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
