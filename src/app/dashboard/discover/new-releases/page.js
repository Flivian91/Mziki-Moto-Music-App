import TrendingHeader from "@/components/discover/TrendingHeader";
import TrendingTrackDisplay from "@/components/discover/TrendingTrackDisplay";
import React from "react";

function NewReleasesPage() {
  return (
    <div className="flex flex-col gap-4">
      <TrendingHeader heading="Latest Releases Tracks" />
      <TrendingTrackDisplay />
    </div>
  );
}

export default NewReleasesPage;
