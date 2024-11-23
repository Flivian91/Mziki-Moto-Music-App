import Link from "next/link";
import React from "react";

function SidebarLink({ icon, name = "", link = "/" }) {
  return (
    <Link
      href={`${link}`}
      className="group transition-all duration-300 hover:text-accent flex items-center gap-2"
    >
      <span className="font-bold">{icon}</span>
      <span className="text-lg font-medium tracking-wide">{name}</span>
    </Link>
  );
}

export default SidebarLink;
