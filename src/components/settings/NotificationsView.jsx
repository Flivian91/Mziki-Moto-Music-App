import React from "react";
import NotificationToggle from "../buttons/NotificationToggleButton";
import NotificationItems from "./NotificationItems";

function NotificationsView() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-base font-semibold tracking uppercase text-stone-300">
        All Notifications Settings
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-0 divide-y divide-text/30">
          <NotificationItems text="New follower" />
          <NotificationItems text="Repost of your post" />
          <NotificationItems text="New post by followed user" />
          <NotificationItems text="Likes and plays on your post" />
        </div>
        <div className="flex flex-col gap-0 divide-y divide-text/30">
          <NotificationItems text="New message" />
          <NotificationItems text="Comment on your post" />
          <NotificationItems text="MzikiMoto offers" />
          <NotificationItems text="MzikiMoto newsletter" />
        </div>
      </div>
    </div>
  );
}

export default NotificationsView;
