"use client";
import React from "react";
import DeleteUserModel from "../models/DeleteUserModel";
import BlurOverlay from "../ovelays/BlurOverlay";

function DeleteButton() {
  return (
    <div>
      {/* <DeleteUserModel />
      <BlurOverlay /> */}
      <button className="text-sm font-bold text-red-500 tracking-wide">
        Delete Account
      </button>
    </div>
  );
}

export default DeleteButton;
