import React from "react";

function SecurePasswordTips() {
  return (
    <ul className="mt-3">
      <h1 className="text-lg mb-1 underline tracking-wide font-bold">
        Secure Password Tips
      </h1>
      <li className="flex items-center gap-1">
        <span className="text-red-500 font-bold text-lg">*</span>
        <span>Passwords must be at least 8 characters in length.</span>
      </li>
      <li className="flex items-center gap-1">
        <span className="text-red-500 font-bold text-lg">*</span>
        <span>Have at least one uppercase character.</span>
      </li>
      <li className="flex items-center gap-1">
        <span className="text-red-500 font-bold text-lg">*</span>
        <span>Have at least one lowercase character.</span>
      </li>
      <li className="flex items-center gap-1">
        <span className="text-red-500 font-bold text-lg">*</span>
        <span>Must contain at least one digit character OR a symbol.</span>
      </li>
    </ul>
  );
}

export default SecurePasswordTips;
