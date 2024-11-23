import React from "react";
import TrackHeader from "./TrackHeader";
import TrackItem from "./TrackItem";

function TrackDispay() {
  return (
    <div className="flex flex-col px-4 py-2">
      <TrackHeader />
      <div>
        <TrackItem />
        <TrackItem />
        <TrackItem />
        <TrackItem />
        <TrackItem />
      </div>
    </div>
  );
}

export default TrackDispay;
