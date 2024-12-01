import React from "react";
import { FaEdit } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlinePlaylistAdd } from "react-icons/md";

function UploadControls() {
  return (
    <div className="flex items-center gap-3">
      <input type="checkbox" disabled className="disabled:bg-surface" />
      <button className="flex items-center disabled:cursor-not-allowed gap-2 bg-surface px-2 py-1 rounded">
        <FaEdit />
        <span>Edit tracks</span>
        <IoIosArrowDown />
      </button>
      <button className="flex items-center disabled:cursor-not-allowed gap-2 bg-surface px-2 py-1 rounded">
        <MdOutlinePlaylistAdd />
        <span>Add to playlist</span>
      </button>
    </div>
  );
}

export default UploadControls;
