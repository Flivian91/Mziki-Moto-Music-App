import React from "react";

function BlurOverlay({onClose}) {
  return (
    <div onClick={onClose} className="fixed top-0 left-0 w-full h-screen backdrop-blur-[1.5px] z-20"></div>
  );
}

export default BlurOverlay;
