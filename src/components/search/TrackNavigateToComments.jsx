import Link from "next/link";
import React from "react";
import { TfiComments } from "react-icons/tfi";

function TrackNavigateToComments() {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <TfiComments />
      <span className="font-mono">12</span>
    </Link>
  );
}

export default TrackNavigateToComments;
