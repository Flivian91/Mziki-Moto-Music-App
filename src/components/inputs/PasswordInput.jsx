"use client";
import React, { useState } from "react";
import { BsEye } from "react-icons/bs";
import { IoEye, IoEyeOff } from "react-icons/io5";

function PasswordInput({ label = "" }) {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={label.toLocaleLowerCase()}
        className={`text-sm font-bold tracking-wide cursor-pointer ${
          label.length === 0 ? " hidden" : ""
        }`}
      >
        {label}
      </label>
      <div className="flex items-center bg-secondary rounded">
        <input
          type={`${isShow ? "text" : "password"}`}
          id={label.toLocaleLowerCase()}
          className="w-full  border-none flex-1 bg-transparent outline-none text-stone-300  font-mono text-lg px-2 py-1 caret-accent"
        />
        <button
          onClick={() => setIsShow((prev) => !prev)}
          className="p-1 text-xl"
        >
          {isShow ? <IoEyeOff title="Hide" /> : <IoEye title="Show" />}
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;
