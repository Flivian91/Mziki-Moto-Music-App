import Image from "next/image";
import React from "react";
import { BiCamera } from "react-icons/bi";
import FileInputButton from "../buttons/FileInputButton";

function SettingsBanner() {
  return (
    <div className=" relative h-[300px]">
      <Image
        src={"/banner.jpg"}
        alt="Banner image"
        width={100}
        height={100}
        className="w-full h-full"
      />
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-3 px-2 flex items-center flex-col">
        <div className="text-5xl font-bold text-stone-400">
          <BiCamera />
        </div>
        <h2 className="text-sm font-bold text-stone-300 tracking-wide">
          Add a banner image
        </h2>
        <p className="text-sm text-stone-400 font-semibold tracking-wide">
          Recommended image size 1500x500, jpg or png
        </p>
        <FileInputButton />
      </div>
    </div>
  );
}

export default SettingsBanner;
