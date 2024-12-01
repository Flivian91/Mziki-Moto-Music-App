import React from "react";
import { FaCamera } from "react-icons/fa";

function SettingsProfileImage() {
  return (
    <div className="flex items-center gap-4 relative">
      <label
        htmlFor="profile"
        className="w-36 h-36 cursor-pointer rounded-full bg-primary absolute -top-16 left-0 border border-accent flex items-center justify-center"
      >
        <div className="  flex items-center flex-col text-stone-200 gap-1">
          <FaCamera className="text-3xl" />
          <h3 className="text-center text-xs font-bold">
            Recommended size 800x800
          </h3>
        </div>
        <input type="file" id="profile" className="hidden" />
      </label>
      <h1 className="text-2xl font-extrabold tracking-wider ml-40 text-stone-200">
        Flivian
      </h1>
    </div>
  );
}

export default SettingsProfileImage;
