import Link from "next/link";
import React from "react";
import DeleteButton from "../buttons/DeleteButton";
import SettingsLink from "./SettingsLink";

function SettingsNavigationLinnks() {
  return (
    <div className="mt-12 border-b border-text/30 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <SettingsLink name="Profile" link="/dashboard/settings" />
        <SettingsLink
          name="Change Password"
          link="/dashboard/settings/password"
        />
        <SettingsLink name="Update Email" link="/dashboard/settings/email" />
        <SettingsLink
          name="Notifications"
          link="/dashboard/settings/notifications"
        />
      </div>
      <DeleteButton />
    </div>
  );
}

export default SettingsNavigationLinnks;
