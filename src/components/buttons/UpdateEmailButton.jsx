import React from "react";

function UpdateEmailButton() {
  return (
    <div className="flex items-center justify-center  py-1">
      <button className="px-5 py-2 font-bold text-black bg-accent rounded-full active:bg-accent/70 hover:scale-105 active:scale-95 transition-all duration-300">
        Update Email
      </button>
    </div>
  );
}

export default UpdateEmailButton;
