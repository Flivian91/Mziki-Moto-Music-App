import TrendingHeader from "@/components/discover/TrendingHeader";
import TrendingTrackDisplay from "@/components/discover/TrendingTrackDisplay";
import React from "react";

function TrendingPage() {
  return (
    <div className="flex flex-col gap-4">
      <TrendingHeader heading="Top Tending Tracks" />
      <TrendingTrackDisplay />
    </div>
  );
}

export default TrendingPage;
