import React from "react";
import SearchInput from "./header/SearchInput";
import ProfileContainer from "./header/ProfileContainer";

function Header() {
  return (
    <div className="flex items-center justify-between py-2 px-2">
      <SearchInput />
      <ProfileContainer />
    </div>
  );
}

export default Header;
