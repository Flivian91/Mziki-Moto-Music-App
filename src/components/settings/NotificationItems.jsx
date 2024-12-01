import React from "react";
import NotificationToggleButton from "../buttons/NotificationToggleButton";

function NotificationItems({text=""}) {
  return (
    <div className="flex items-center justify-between py-4">
      <p className="text-base font-bold tracking-wide text-stone-300">{text}</p>
      <NotificationToggleButton />
    </div>
  );
}

export default NotificationItems;
