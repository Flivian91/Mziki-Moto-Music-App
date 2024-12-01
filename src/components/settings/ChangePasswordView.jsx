import React from "react";
import PasswordInput from "../inputs/PasswordInput";
import SecurePasswordTips from "./SecurePasswordTips";
import ChangePasswordButton from "../buttons/ChangePasswordButton";

function ChangePasswordView() {
  return (
    <div className="flex flex-col gap-3">
      <PasswordInput label="Current Password" />
      <PasswordInput label="New Password" />
      <PasswordInput label="Confirm New Password" />
      <SecurePasswordTips />
      <ChangePasswordButton />
    </div>
  );
}

export default ChangePasswordView;
