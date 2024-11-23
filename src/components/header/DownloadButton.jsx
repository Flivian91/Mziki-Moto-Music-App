import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa";

function DownloadButton() {
  return (
    <Link
      href={"/"}
      className="flex items-center gap-2 px-5 py-2.5 bg-accent rounded-md text-black"
    >
      <FaDownload />
      <span className="text-sm font-semibold tracking-wide">Download Now</span>
    </Link>
  );
}

export default DownloadButton;
