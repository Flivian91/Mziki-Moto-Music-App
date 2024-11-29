import SearchQueryDisplay from "@/components/search/SearchQueryDisplay";
import SearchSidebar from "@/components/search/SearchSidebar";
import React from "react";

function SearchLayout({ children }) {
  return (
    <div className="flex flex-col">
      {/* Top Query Display */}
      <SearchQueryDisplay />

      {/* Main Content */}
      <div className="grid relative grid-cols-[150px_1fr] gap-4 py-4 flex-grow overflow-hidden">
        {/* Sticky Sidebar */}
        <div className="h-full sticky top-0">
          <SearchSidebar />
        </div>

        {/* Scrollable Children */}
        <div className="overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

export default SearchLayout;
