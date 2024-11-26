import React from "react";
import SearchInput from "./header/SearchInput";
import ProfileContainer from "./header/ProfileContainer";
import Logo from "./sidebar/Logo";

function Header() {
  return (
    <div className="flex items-center justify-between py-2 px-2">
      <Logo />
      <SearchInput />
      <ProfileContainer />
    </div>
  );
}

export default Header;
