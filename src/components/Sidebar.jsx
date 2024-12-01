import React from "react";
import Logo from "./sidebar/Logo";
import SidebarContainer from "./sidebar/SidebarContainer";
import Link from "next/link";
import { IoIosSettings } from "react-icons/io";
import SidebarLink from "./sidebar/SidebarLink";
import { FaHeart, FaHome, FaMusic, FaSearch } from "react-icons/fa";
import { IoMdMusicalNotes } from "react-icons/io";
import { IoIosAlbums } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { TbMoodSing } from "react-icons/tb";
import {
  IoHelpCircleOutline,
  IoLogOutOutline,
  IoNewspaperOutline,
  IoTimeOutline,
} from "react-icons/io5";

function Sidebar() {
  // Only apply that Pg when the music only loads
  return (
    <section className="bg-secondary h-screen flex flex-col px-4 pt-2  overflow-auto pb-[150px]">
      <SidebarContainer>
        {/* Core Links */}
        <SidebarLink name="Home" icon={<FaHome />} link="/dashboard/" />
        <SidebarLink
          name="Search"
          icon={<FaSearch />}
          link="/dashboard/search"
        />

        {/* Discovery Links */}
        <h1 className="uppercase tracking-wide pt-4 text-lg font-semibold text-text">
          Discovery
        </h1>
        <SidebarLink
          name="Discover"
          icon={<FaArrowTrendUp />}
          link="/dashboard/discover"
        />
        <SidebarLink
          name="Trending"
          icon={<FaArrowTrendUp />}
          link="/dashboard/discover/trending"
        />
        <SidebarLink
          name="New Releases"
          icon={<IoNewspaperOutline />}
          link="/dashboard/discover/new-releases"
        />
        <SidebarLink
          name="Genres & Moods"
          icon={<TbMoodSing />}
          link="/dashboard/discover/genres"
        />

        {/* Personal Links */}
        <h1 className="uppercase tracking-wide pt-4 text-lg font-semibold text-text">
          Your Library
        </h1>
        <SidebarLink
          name="Liked Songs"
          icon={<FaHeart />}
          link="/dashboard/liked-songs"
        />
        <SidebarLink
          name="My Uploads"
          icon={<IoTimeOutline />}
          link="/dashboard/uploads"
        />
        <SidebarLink
          name="My Playlists"
          icon={<IoMdMusicalNotes />}
          link="/dashboard/playlists"
        />

        {/* Utility Links */}
        <h1 className="uppercase tracking-wide pt-4 text-lg font-semibold text-text">
          Account
        </h1>
        <SidebarLink
          name="Settings"
          icon={<IoIosSettings />}
          link="/dashboard/settings"
        />
        <SidebarLink
          name="Help"
          icon={<IoHelpCircleOutline />}
          link="/dashboard/help"
        />
        <SidebarLink
          name="Log Out"
          icon={<IoLogOutOutline />}
          link="/dashboard/logout"
        />
      </SidebarContainer>
    </section>
  );
}

export default Sidebar;
