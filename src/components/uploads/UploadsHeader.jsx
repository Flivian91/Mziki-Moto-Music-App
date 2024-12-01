import React from "react";
import UploadControls from "./UploadControls";
import UploadPagination from "./UploadPagination";

function UploadsHeader() {
  return (
    <div className="flex flex-col gap-3 border-b border-text/30 pb-3">
      <h1 className="text-xl font-bold tracking-wide text-stone-300">
        Your tracks
      </h1>
      <div className="flex items-center justify-between">
        <UploadControls />
        <UploadPagination />
      </div>
    </div>
  );
}

export default UploadsHeader;
