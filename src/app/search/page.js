import TrackItem from "@/components/search/TrackItem";
import Link from "next/link";
import React from "react";

function SearchPage() {
  return (
    <div className="flex flex-col gap-2">
      <div className="transition-all duration-300 text-sm font-semibold tracking-wide">
        <span>Found </span>
        <Link
          href="/search/playlist"
          className="hover:underline underline-offset-2 hover:text-accent"
        >
          4 playlists{" "}
        </Link>
        <Link
          href="/search/songs"
          className="hover:underline underline-offset-2 hover:text-accent"
        >
          20 songs
        </Link>
      </div>
      <div className="flex flex-col gap-10">
        <TrackItem />
        <TrackItem />
        <TrackItem />
        <TrackItem />
        <TrackItem />
        <TrackItem />
      </div>
    </div>
  );
}

export default SearchPage;
