import React from "react";
import EmailInput from "../inputs/EmailInput";
import UpdateEmailButton from "../buttons/UpdateEmailButton";

function UpdateEmailView() {
  return (
    <div className="flex flex-col gap-3">
      <EmailInput label="Current Email" isDisabled={true} />
      <EmailInput label="New Email" />
      <UpdateEmailButton />
    </div>
  );
}

export default UpdateEmailView;
