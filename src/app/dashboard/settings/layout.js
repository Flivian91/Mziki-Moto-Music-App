import SettingsAreaDisplay from "@/components/settings/SettingsAreaDisplay";
import SettingsBanner from "@/components/settings/SettingsBanner";
import React from "react";

function SettingsLayout({ children }) {
  return (
    <div className="flex flex-col ">
      <SettingsBanner />
      <div>
        <SettingsAreaDisplay />
      </div>
    </div>
  );
}

export default SettingsLayout;
