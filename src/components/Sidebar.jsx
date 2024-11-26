import React from "react";
import Logo from "./sidebar/Logo";
import SidebarContainer from "./sidebar/SidebarContainer";
import Link from "next/link";
import { IoIosSettings } from "react-icons/io";
import SidebarLink from "./sidebar/SidebarLink";
import { FaHome } from "react-icons/fa";
import { IoMdMusicalNotes } from "react-icons/io";
import { IoIosAlbums } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { TbMoodSing } from "react-icons/tb";

function Sidebar() {
  return (
    <aside className="bg-secondary h-screen flex flex-col px-4 py-5 overflow-auto">
      <div className="flex-grow flex flex-col divide-y gap-5 divide-text">
        <SidebarContainer>
          <SidebarLink name={"Home"} icon={<FaHome />} link={"/"} />
          <SidebarLink
            name={"Playlist"}
            icon={<IoMdMusicalNotes />}
            link={"/playlists"}
          />
        </SidebarContainer>
        <div className="flex flex-col">
          <h1 className="uppercase tracking-wide pt-2 font-semibold text-lg text-text">
            Discovery
          </h1>
          <SidebarContainer>
            <SidebarLink
              name={"Popular"}
              icon={<FaArrowTrendUp />}
              link={"/"}
            />
            <SidebarLink name={"My Track"} icon={<FaUserTie />} link={"/"} />
          </SidebarContainer>
        </div>
        <div className="flex flex-col">
          <h1 className="uppercase tracking-wide pt-2 font-semibold text-lg text-text">
            My PlayList
          </h1>
          <SidebarContainer>
            <SidebarLink name={"Love"} icon={<FaHome />} link={"/"} />
            <SidebarLink
              name={"Morinig"}
              icon={<IoMdMusicalNotes />}
              link={"/"}
            />
            <SidebarLink name={"Travel"} icon={<IoIosAlbums />} link={"/"} />
            <SidebarLink name={"Afternoon"} icon={<IoIosAlbums />} link={"/"} />
            <SidebarLink name={"Liked"} icon={<IoIosAlbums />} link={"/"} />
          </SidebarContainer>
        </div>
      </div>
      <div className="">
        <SidebarLink name="Settings" link="settings" icon={<IoIosSettings />} />
      </div>
    </aside>
  );
}

export default Sidebar;
