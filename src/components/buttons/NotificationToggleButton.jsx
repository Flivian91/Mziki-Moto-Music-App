"use client";
import React, { useState } from "react";

const NotificationToggleButton = () => {
  const [isOn, setIsOn] = useState(true);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center gap-3">
      {/* Toggle Button */}
      <div
        className={`relative w-12 h-7 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${
          isOn ? "bg-[#00E4CB]" : "bg-text"
        }`}
        onClick={toggleSwitch}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isOn ? "translate-x-6" : "translate-x-1"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default NotificationToggleButton;
