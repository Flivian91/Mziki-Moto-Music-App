import LikesDisplay from "@/components/likes/LikesDisplay";
import LikesHeader from "@/components/likes/LikesHeader";
import React from "react";

function LikedSongsPage() {
  return (
    <div className="flex flex-col gap-8">
      <LikesHeader />
      <LikesDisplay />
    </div>
  );
}

export default LikedSongsPage;
