import React from "react";
import { IoCopyOutline } from "react-icons/io5";

function ShareTrackURL() {
  return (
    <button className="flex items-center gap-3  hover:bg-primary/60 py-2 px-2 rounded">
      <IoCopyOutline />
      <span className="font-semibold tracking-wide">Copy Track URL</span>
    </button>
  );
}

export default ShareTrackURL;
