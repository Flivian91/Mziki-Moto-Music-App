import React from "react";

function EmailInput({ label = "", isDisabled = false }) {
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
        type="email"
        id={label.toLocaleLowerCase()}
        disabled={isDisabled}
        className="w-full bg-secondary border-none outline-none text-stone-300 rounded font-mono text-lg px-2 py-1 caret-accent disabled:cursor-not-allowed disabled:bg-text/30"
      />
    </div>
  );
}

export default EmailInput;
