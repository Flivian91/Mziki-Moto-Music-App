import React from "react";
import { FaTimes } from "react-icons/fa";
import PasswordInput from "../inputs/PasswordInput";
import DeleteAccountButton from "../buttons/DeleteAccountButton";

function DeleteUserModel() {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-surface z-30">
      <form className="flex flex-col gap-2 py-3 px-4 w-full">
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-lg font-bold text-stone-300 tracking-wide">
            Delete Your Account
          </h1>
          <button className="text-xl hover:text-stone-200 transition-all duration-300">
            <FaTimes />
          </button>
        </div>
        <h3 className="text-sm font-semibold">
          This action cannot be undone. If you are sure you want to continue,
          enter your password to delete your account.
        </h3>
        <PasswordInput />
        <DeleteAccountButton />
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="text-sm font-semibold text-stone-300 tracking-wide hover:border border border-transparent hover:border-text/30 px-4 py-2 rounded-full transition-all duration-300 active:border-accent active:text-accent hover:text-stone-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeleteUserModel;
