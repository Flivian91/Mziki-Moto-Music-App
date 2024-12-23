import DiscoverBody from "@/components/discover/DiscoverBody";
import DiscoverHeader from "@/components/discover/DiscoverHeader";
import DiscoverView from "@/components/discover/DiscoverView";
import React from "react";

function DiscoverPage() {
  return (
    <div>
      <div className="flex flex-col gap-8">
        {/* Recommended Category */}
        <DiscoverView>
          <DiscoverHeader heading="Recommended for you" />
          <DiscoverBody />
          {/* THIS IS THE CONTENT ON THE DiscoverBody component */}
          {/* 
          <div>
      <div className="relative group">
        <DiscoverPreviousButton />
        <div className="grid grid-cols-4 gap-3">
          <DiscoverItem />
          <DiscoverItem />
          <DiscoverItem />
          <DiscoverItem />
        </div>
        <DiscoverNextButton />
      </div>
    </div> */}
        </DiscoverView>
        {/* Next Category */}
        <DiscoverView>
          <DiscoverHeader heading="TRENDING SONGS" />
          <DiscoverBody />
        </DiscoverView>

        {/* Next Category */}
        <DiscoverView>
          <DiscoverHeader heading="TRENDING ALBUMS" />
          <DiscoverBody />
        </DiscoverView>
        {/* Next Category */}
        <DiscoverView>
          <DiscoverHeader heading="Top MzikiMoto Playlists" />
          <DiscoverBody />
        </DiscoverView>
      </div>
    </div>
  );
}

export default DiscoverPage;
