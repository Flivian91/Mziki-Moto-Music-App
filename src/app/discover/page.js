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
          <DiscoverHeader />
          <DiscoverBody />
        </DiscoverView>
        {/* Next Category */}
      </div>
    </div>
  );
}

export default DiscoverPage;
