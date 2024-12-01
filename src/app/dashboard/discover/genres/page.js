import TrendingHeader from "@/components/discover/TrendingHeader";
import TrendingTrackDisplay from "@/components/discover/TrendingTrackDisplay";
import React from "react";

function GenrePage() {
  return (
    <div className="flex flex-col gap-4">
      <TrendingHeader heading="Genres & Moods" />
      <TrendingTrackDisplay />
    </div>
  );
}

export default GenrePage;
