import React from "react";
import SettingsHeader from "./SettingsHeader";
import SettingsNavigationLinnks from "./SettingsNavigationLinnks";

function SettingsAreaDisplay({ children }) {
  return (
    <div className="flex flex-col gap-2 relative ">
      <div className="w-4/5 absolute -top-7 left-1/2 transform -translate-x-1/2 bg-surface px-2 rounded shadow">
        <SettingsHeader />
        <SettingsNavigationLinnks />
        <div className="py-3">{children}</div>
      </div>
    </div>
  );
}

export default SettingsAreaDisplay;
