import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCrown } from "react-icons/fa";
import featuredImage from "../../../public/featured.png";
function FeaturedElement() {
  return (
    <div className="grid grid-cols-2 p-6 bg-gradient-to-tr from-[#1F2A2B] to-[#274749] rounded-md shadow-md">
      <div className="flex flex-col gap-2 place-self-center">
        <h1 className="tracking-wide font-semibold text-2xl text-stone-100">
          Your Personalized <br /> Music Journey
        </h1>
        <p className="text-lg tracking-wide text-stone-400">
          Unlock advance features with <br /> Our Streaming App
        </p>
        <div className="flex mt-5">
          <Link
            href={"/"}
            className="flex items-center gap-2 px-5 py-3 bg-accent rounded-md text-black"
          >
            <span className="text-base font-semibold tracking-wide">
              Upgrade Now
            </span>
            <FaCrown />
          </Link>
        </div>
      </div>
      <div className="relative flex items-center">
        <Image
          className="w-80 h-80 absolute transform left-0 top-0  scale-110"
          src={featuredImage}
          alt="Featured Image"
        />
      </div>
    </div>
  );
}

export default FeaturedElement;
