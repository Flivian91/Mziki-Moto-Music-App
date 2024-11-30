import React from "react";
import DiscoverPreviousButton from "../buttons/DiscoverPreviousButton";
import DiscoverItem from "./DiscoverItem";
import DiscoverNextButton from "../buttons/DiscoverNextButton";

function DiscoverBody() {
  return (
    <div>
      <div>
        <DiscoverPreviousButton />
        <div className="">
          <DiscoverItem />
        </div>
        <DiscoverNextButton/>
      </div>
    </div>
  );
}

export default DiscoverBody;
