import React from "react";
import LikesFilterArea from "./LikesFilterArea";

function LikesHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-base font-semibold tracking-wide">
        Here the tracks you`ve Liked
      </h1>
      <LikesFilterArea />
    </div>
  );
}

export default LikesHeader;
