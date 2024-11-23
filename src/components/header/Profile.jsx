import React from "react";
import profile from "../../../public/profile.webp";
import Image from "next/image";
function Profile() {
  return (
    <div>
      <button className="flex items-center justify-center">
        <Image
          className="w-12 h-12 rounded-full border-2 border-accent"
          src={profile}
          alt="User profile image"
        />
      </button>
    </div>
  );
}

export default Profile;
