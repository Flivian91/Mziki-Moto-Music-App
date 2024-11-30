import React from "react";
import DiscoverPreviousButton from "../buttons/DiscoverPreviousButton";
import DiscoverItem from "./DiscoverItem";
import DiscoverNextButton from "../buttons/DiscoverNextButton";

function DiscoverBody() {
  return (
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
    </div>
  );
}

export default DiscoverBody;
