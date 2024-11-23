import React from "react";

function TrackHeader() {
  return (
    <div className="grid grid-cols-[0.1fr_1fr_0.7fr_0.4fr_1fr] py-2 px-1 font-semibold tracking-wide border-b border-surface">
      <span>#</span>
      <span>Title</span>
      <span>Album</span>
      <span>Duration</span>
      <span className="text-center">Actions</span>
    </div>
  );
}

export default TrackHeader;
