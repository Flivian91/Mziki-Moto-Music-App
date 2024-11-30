import React from "react";
import DiscoverHeader from "./DiscoverHeader";
import DiscoverBody from "./DiscoverBody";

function DiscoverView({ children }) {
  return <div className="flex flex-col gap-3">{children}</div>;
}

export default DiscoverView;
