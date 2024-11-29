import Image from "next/image";
import Link from "next/link";
import React from "react";
import AudioWaveForm from "../audio-player/AudioWaveForm";
import { BsSend } from "react-icons/bs";
import { HiHeart } from "react-icons/hi";
import { BiPlay, BiRepost } from "react-icons/bi";
import { MdOutlineInsertLink } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { TfiComments } from "react-icons/tfi";
import TrackItemCoverImage from "./TrackItemCoverImage";
import TrackItemInfo from "./TrackItemInfo";
import TrackItemComment from "./TrackItemComment";

function TrackItem() {
  return (
    <div>
      <div className="grid grid-cols-[130px_1fr] gap-2">
        <TrackItemCoverImage />
        <div className="flex flex-col text-sm font-semibold gap-4">
          {/* Controlls */}
          <TrackItemInfo />
          {/* Wave form Component */}
          <div>
            <AudioWaveForm />
          </div>
          {/* Comment Section */}
          <TrackItemComment />
          {/* More Info things */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Like button */}
              <button className="flex items-center text-sm gap-2 px-3 py-1 border border-text rounded">
                <HiHeart />
                <span className="font-mono">99</span>
              </button>
              {/* Repost */}
              <button className="flex items-center text-sm gap-2 px-3 py-1 border border-text rounded">
                <BiRepost />
                <span className="font-mono">4</span>
              </button>
              {/* Copy Link */}
              <button className="flex items-center text-sm gap-2 px-3 py-1 border border-text rounded">
                <MdOutlineInsertLink />
                <span className="font-mono">Copy Link</span>
              </button>
              <button className="flex items-center text-sm gap-2 px-3 py-1 border border-text rounded">
                <PiDotsThreeOutlineFill />
                <span className="font-mono">More</span>
              </button>
            </div>
            {/* Review Or information page */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <BiPlay />
                <span className="font-mono">30k</span>
              </div>
              <Link href={"/"} className="flex items-center gap-2">
                <TfiComments />
                <span className="font-mono">12</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackItem;
