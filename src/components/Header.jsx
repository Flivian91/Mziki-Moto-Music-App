import React from "react";
import SearchInput from "./header/SearchInput";
import ProfileContainer from "./header/ProfileContainer";
import Logo from "./sidebar/Logo";
import { BiMenu } from "react-icons/bi";
import MenuContainer from "./header/MenuContainer";
function Header() {
  return (
    <div className="flex items-center justify-between py-2 px-2 transition-all duration-300 shadow relative">
      <MenuContainer />
      <Logo />
      <SearchInput />
      <ProfileContainer />
    </div>
  );
}

export default Header;
