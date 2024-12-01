import Link from "next/link";
import React from "react";

function SettingsNavigationLinnks() {
  return (
    <div className="mt-12 border-b border-text/30 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link
          href={"/dashboard/settings"}
          className="px-2 py-2 border-b-2 text-sm font-bold tracking-wide border-accent hover:text-accent transition-all duration-300"
        >
          Profile
        </Link>
        <Link
          href={"/dashboard/settings/password"}
          className="px-2 py-2 border-b-2 border-transparent text-sm font-bold tracking-wide hover:text-accent transition-all duration-300"
        >
          Change Password
        </Link>
        <Link
          href={"/dashboard/settings/email"}
          className="px-2 py-2 border-b-2 border-transparent text-sm font-bold tracking-wide hover:text-accent transition-all duration-300"
        >
          Update Email
        </Link>
        <Link
          href={"/dashboard/settings/notifications"}
          className="px-2 py-2 border-b-2 border-transparent text-sm font-bold tracking-wide hover:text-accent transition-all duration-300"
        >
          Notifications
        </Link>
      </div>
      <div>
        <button className="text-sm font-bold text-red-500 tracking-wide">
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default SettingsNavigationLinnks;
