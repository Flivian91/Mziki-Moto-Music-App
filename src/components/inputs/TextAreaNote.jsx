import React from "react";

function TextAreaNote() {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-sm font-bold tracking-wide cursor-pointer"
        htmlFor="biography"
      >
        Short Biography
      </label>
      <textarea
        name="biography"
        id="biography"
        className="w-full bg-secondary border-none outline-none rounded font-mono text-lg px-2 py-1 caret-accent"
      ></textarea>
      <i className="text-sm font-semibold">You have 300 characters left</i>
    </div>
  );
}

export default TextAreaNote;
