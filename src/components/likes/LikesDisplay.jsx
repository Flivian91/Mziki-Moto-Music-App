import React from "react";
import DiscoverItem from "../discover/DiscoverItem";

function LikesDisplay() {
  return (
    <div className="grid grid-cols-4 gap-3">
      <DiscoverItem />
      <DiscoverItem />
      <DiscoverItem />
      <DiscoverItem />
    </div>
  );
}

export default LikesDisplay;
