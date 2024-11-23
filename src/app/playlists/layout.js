import PlaylistSidebar from "@/components/playlists/PlaylistSidebar";
import React from "react";

function PlayListLayout({ children }) {
  return (
    <main className="grid grid-cols-[0.5fr_1fr] gap-4">
      <PlaylistSidebar />
      <section className="w-full bg-secondary rounded-md">{children}</section>
    </main>
  );
}

export default PlayListLayout;
