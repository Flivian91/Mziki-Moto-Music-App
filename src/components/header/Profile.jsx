"use client";
import React, { useState } from "react";
import profile from "../../../public/profile.webp";
import Image from "next/image";
import ProfileModel from "../models/ProfileModel";
import TransparentOverlay from "../ovelays/TransparentOverlay";
function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-center"
      >
        <Image
          className="h-8 w-8 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-accent"
          src={profile}
          alt="User profile image"
        />
      </button>
      {isOpen && <TransparentOverlay onClose={() => setIsOpen(false)} />}
      {isOpen && <ProfileModel onClose={() => setIsOpen(false)} />}
    </div>
  );
}

export default Profile;
