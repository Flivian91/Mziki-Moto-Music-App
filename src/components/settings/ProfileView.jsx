import React from "react";
import TextInput from "../inputs/TextInput";
import TextAreaNote from "../inputs/TextAreaNote";
import UpdateArtistURL from "./UpdateArtistURL";
import UpdateProfileSettings from "../buttons/UpdateProfileSettings";

function ProfileView() {
  return (
    <form className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-3">
          <TextInput label={"Name"} />
          <TextInput label={"Hometown"} />
        </div>
        <div className="flex flex-col gap-4">
          <TextInput label={"Label"} />
          <TextInput label={"Website URL"} />
        </div>
      </div>
      <TextAreaNote />
      <UpdateArtistURL />
      <UpdateProfileSettings />
    </form>
  );
}

export default ProfileView;
