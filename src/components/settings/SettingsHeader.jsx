import React from "react";
import SettingsProfileImage from "./SettingsProfileImage";
import SettingsFollower from "./SettingsFollower";

function SettingsHeader() {
  return (
    <div className="flex items-center justify-between">
      <SettingsProfileImage />
      <SettingsFollower />
    </div>
  );
}

export default SettingsHeader;
