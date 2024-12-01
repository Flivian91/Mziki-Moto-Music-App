import React from "react";
import { FaCamera } from "react-icons/fa";

const FileInputButton = () => {
  return (
    <div className="flex flex-col items-center mt-3">
      {/* Label for styling */}
      <label
        htmlFor="fileInput"
        className="flex items-center justify-center gap-2 bg-accent text-black font-semibold px-4 py-2 rounded-full cursor-pointer transition duration-300 hover:bg-accent active:scale-95"
      >
        <FaCamera className="text-xl" />
        Add Banner
      </label>
      {/* Hidden Input */}
      <input id="fileInput" type="file" className="hidden" />
    </div>
  );
};

export default FileInputButton;
