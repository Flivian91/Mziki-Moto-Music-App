"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function SettingsLink({ name = "", link = "" }) {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={`px-2 py-2 border-b-2 text-sm font-bold tracking-wide transition-all duration-300 ${pathname === link ? " border-accent hover:text-accent text-accent": " border-b-2 border-transparent hover:text-accent" }`}
    >
      {name}
    </Link>
  );
}

export default SettingsLink;
