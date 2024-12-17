"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function SidebarLink({ icon, name = "", link = "/" }) {
  const pathName = usePathname();
  // /dashboard/search
  const isActive = pathName === link;
  return (
    <Link
      href={`${link}`}
      className={` ${
        isActive ? "bg-surface text-accent" : " "
      } group transition-all duration-300 hover:text-accent flex items-center gap-3 hover:bg-surface rounded py-1 px-2 hover:shadow`}
    >
      <span className="font-bold">{icon}</span>
      <span className="text-lg font-medium tracking-wide">{name}</span>
    </Link>
  );
}

export default SidebarLink;
