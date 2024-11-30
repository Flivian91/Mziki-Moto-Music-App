import React from "react";

function SearchResultsFound({ number = 0, category = "" }) {
  return (
    <h3 className="text-sm font-semibold tracking-wide">
      Found <span className="font-mono text-accent">{number}</span> {category}
    </h3>
  );
}

export default SearchResultsFound;
