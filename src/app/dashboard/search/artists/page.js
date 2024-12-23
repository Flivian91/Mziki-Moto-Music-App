import SearchResultsFound from "@/components/search/SearchResultsFound";
import SearchArtistItem from "@/components/search/artist/SearchArtistItem";
import React from "react";

function SearchArtistPage() {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <SearchResultsFound number={350} category="Artists" />
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 sm:gap-10">
          <SearchArtistItem />
          <SearchArtistItem />
          <SearchArtistItem />
          <SearchArtistItem />
        </div>
      </div>
    </div>
  );
}

export default SearchArtistPage;
