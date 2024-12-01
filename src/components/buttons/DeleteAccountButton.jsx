import React from "react";

function DeleteAccountButton() {
  return (
    <div className="flex items-center justify-center py-2">
      <button className="text-sm font-bold tracking-wide bg-red-500 px-5 py-2 rounded-full text-black">
        Delete Account
      </button>
    </div>
  );
}

export default DeleteAccountButton;
