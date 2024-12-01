import React from "react";
import TextInput from "../inputs/TextInput";

function UpdateArtistURL() {
  return (
    <div className="flex flex-col gap-2 mt-2">
      <h2 className="text-xs tracking-wide font-bold ">
        Note: When you change your artist URL, refences to your music the old
        URL automatically changes to the New URL
      </h2>
      <div className="flex items-center gap-0">
        <span className="bg-stone-900 py-2 px-4 text-sm font-bold tracking-wider">mzikimoto.com/</span>
        <div className="flex-1">
          <TextInput />
        </div>
      </div>
    </div>
  );
}

export default UpdateArtistURL;
