"use client";
import React, { useState } from "react";
import DownloadButton from "./DownloadButton";
import Profile from "./Profile";
import { BiSearch } from "react-icons/bi";
import SearchModel from "../models/SearchModel";

function ProfileContainer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center gap-4">
      <div className="hidden md:flex">
        <DownloadButton />
      </div>
      {isOpen && <SearchModel />}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="md:hidden block p-1 sm:p-1.5 text-xl sm:text-2xl rounded shadow text-white/70 hover:text-accent active:text-accent"
      >
        <BiSearch />
      </button>
      <Profile />
    </div>
  );
}

export default ProfileContainer;
