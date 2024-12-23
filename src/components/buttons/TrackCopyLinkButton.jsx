import React from "react";
import { MdOutlineInsertLink } from "react-icons/md";

function TrackCopyLinkButton() {
  return (
    <button className="hidden sm:flex items-center text-sm gap-2 px-3 py-1 border border-text rounded">
      <MdOutlineInsertLink />
      <span className="font-mono">Copy Link</span>
    </button>
  );
}

export default TrackCopyLinkButton;
