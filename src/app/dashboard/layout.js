import AudioPlayer from "@/components/audio-player/AudioPlayer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";
export const metadata ={title:"Client Dashboard"}

function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-primary text-text">
      {/* Sidebar */}
      <aside className="lg:block hidden w-[230px] bg-secondary fixed mt-[60px] ">
        <Sidebar />
      </aside>

      {/* Main content wrapper */}
      <div className="flex flex-col flex-grow lg:ml-[230px]">
        {/* Header */}
        <header className="fixed w-full  top-0 left-0  bg-primary shadow z-10">
          <Header />
        </header>

        {/* Scrollable content */}
        <main className="mt-[60px] p-4 overflow-y-auto flex-grow pb-[125px]">
          {children}
        </main>
      </div>

      <AudioPlayer />
    </div>
  );
}

export default DashboardLayout;
