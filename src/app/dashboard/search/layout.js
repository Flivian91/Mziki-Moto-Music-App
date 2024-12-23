import MobileSearchBar from "@/components/search/MobileSearchBar";
import SearchQueryDisplay from "@/components/search/SearchQueryDisplay";
import SearchSidebar from "@/components/search/SearchSidebar";
import React from "react";

function SearchLayout({ children }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <SearchQueryDisplay />
      </div>

      {/* Main Content */}
      <div className="grid relative md:grid-cols-[150px_1fr] gap-4 py-4 flex-grow overflow-hidden">
        {/* Sticky Sidebar */}
        <div className="h-full sticky top-0 hidden md:block">
          <SearchSidebar />
        </div>

        {/* Scrollable Children */}
        <div className="overflow-y-auto mt-8 w-full">{children}</div>
      </div>
    </div>
  );
}

export default SearchLayout;
