import UploadDisplay from "@/components/uploads/UploadDisplay";
import UploadsHeader from "@/components/uploads/UploadsHeader";
import React from "react";

function UploadsPages() {
  return (
    <div className="flex flex-col gap-6">
      <UploadsHeader />
      <UploadDisplay />
    </div>
  );
}

export default UploadsPages;
