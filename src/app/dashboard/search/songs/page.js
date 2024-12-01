import SearchResultsFound from "@/components/search/SearchResultsFound";
import TrackItem from "@/components/search/TrackItem";
import React from "react";

function SearchSongPage() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <SearchResultsFound category="songs" number={210} />
        <div className="flex flex-col gap-10 w-full">
          <TrackItem />
          <TrackItem />
          <TrackItem />
          <TrackItem />
          <TrackItem />
        </div>
      </div>
    </div>
  );
}

export default SearchSongPage;
