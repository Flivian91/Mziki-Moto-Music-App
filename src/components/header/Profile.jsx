import React from "react";
import profile from "../../../public/profile.webp";
import Image from "next/image";
function Profile() {
  return (
    <div>
      <button className="flex items-center justify-center">
        <Image
          className="h-8 w-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-accent"
          src={profile}
          alt="User profile image"
        />
      </button>
    </div>
  );
}

export default Profile;
