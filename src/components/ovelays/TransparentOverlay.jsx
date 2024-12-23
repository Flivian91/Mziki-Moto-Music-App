import React from "react";

function TransparentOverlay({onClose}) {
  return <div onClick={onClose} className="fixed top-0 left-0 h-screen w-full  z-30"></div>;
}

export default TransparentOverlay;
