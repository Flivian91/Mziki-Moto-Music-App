import React from "react";
import { IoCaretBackOutline, IoCaretForward } from "react-icons/io5";

function UploadPagination() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-lg font-semibold tracking-wide">1 - 0 of 0 tracks</span>
      <div className="flex items-center gap-0 bg-surface rounded divide-x divide-text/30 overflow-hidden">
        <button className="px-2 py-1 text-2xl">
          <IoCaretBackOutline />
        </button>
        <button className="px-2 py-1 text-2xl">
          <IoCaretForward />
        </button>
      </div>
    </div>
  );
}

export default UploadPagination;
