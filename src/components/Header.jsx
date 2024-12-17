import React from "react";
import SearchInput from "./header/SearchInput";
import ProfileContainer from "./header/ProfileContainer";
import Logo from "./sidebar/Logo";
import { BiMenu } from "react-icons/bi";
function Header() {
  return (
    <div className="flex items-center justify-between py-2 px-2 transition-all duration-300 shadow relative">
      <button className="lg:hidden block p-1 sm:p-1.5 border border-accent text-xl sm:text-2xl rounded shadow text-white/70 hover:text-accent active:text-accent">
        <BiMenu />
      </button>
      <Logo />
      <SearchInput />
      <ProfileContainer />
    </div>
  );
}

export default Header;
