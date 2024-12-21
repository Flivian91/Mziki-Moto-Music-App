import Link from "next/link";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";

function ProfileModel({onClose}) {
  return (
    <div className="absolute top-full right-0 p-3 bg-surface w-[150px] z-30 mt-2 rounded-sm shadow">
      <div className="flex flex-col gap-2 text-white/80">
        <Link
        onClick={onClose}
          href={"/"}
          className="text-xs font-semibold hover:text-accent tracking-wider"
        >
          Profile
        </Link>
        <Link
        onClick={onClose}
          href={"/"}
          className="text-xs font-semibold hover:text-accent tracking-wider flex items-center justify-between"
        >
          <span>Creator Account</span>
          <span>
            <BiLinkExternal />
          </span>
        </Link>
        <Link
        onClick={onClose}
          href={"/"}
          className="text-xs font-semibold hover:text-accent tracking-wider flex items-center justify-between"
        >
          <span>Account Settings</span>
          <span>
            <BiLinkExternal />
          </span>
        </Link>
        <Link
        onClick={onClose}
          href={"/"}
          className="text-xs font-semibold hover:text-accent tracking-wider"
        >
          Terms&Conditions
        </Link>
        <Link
        onClick={onClose}
          href={"/"}
          className="text-xs font-semibold hover:text-accent tracking-wider"
        >
          Logout
        </Link>
      </div>
    </div>
  );
}

export default ProfileModel;
