import React from "react";

function TextInput({ label = "" }) {
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
      <input
        type="text"
        id={label.toLocaleLowerCase()}
        className="w-full bg-secondary border-none outline-none rounded font-mono text-lg px-2 py-1 caret-accent"
      />
    </div>
  );
}

export default TextInput;
