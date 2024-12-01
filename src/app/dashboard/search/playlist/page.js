import AlbumItem from "@/components/search/album/AlbumItem";
import SearchResultsFound from "@/components/search/SearchResultsFound";
import React from "react";

function SearchPlaylistPage() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <SearchResultsFound number={458} category="playlists" />
        <div className="flex flex-col gap-10">
          <AlbumItem />
          <AlbumItem />
          <AlbumItem />
          <AlbumItem />
          <AlbumItem />
        </div>
      </div>
    </div>
  );
}

export default SearchPlaylistPage;
