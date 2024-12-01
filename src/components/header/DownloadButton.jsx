import Link from "next/link";
import React from "react";
// import { FaDownload } from "react-icons/fa";
import { LuUploadCloud } from "react-icons/lu";

function DownloadButton() {
  return (
    <Link
      href={"/"}
      className="flex items-center gap-2 px-5 py-2.5 bg-accent rounded-md text-black"
    >
      <LuUploadCloud />
      <span className="text-sm font-semibold tracking-wide">Upload Track</span>
    </Link>
  );
}

export default DownloadButton;
