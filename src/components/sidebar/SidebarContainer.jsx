import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import SidebarLink from "./SidebarLink";
import { IoMdMusicalNotes } from "react-icons/io";
import { IoIosAlbums } from "react-icons/io";

function SidebarContainer({children}) {
  return (
    <div className="flex flex-col gap-2 py-4">
      {children}
    </div>
  );
}

export default SidebarContainer;
