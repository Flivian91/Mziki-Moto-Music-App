import React from "react";

function TrendingTrackModel() {
  return (
    <div className="absolute top-full -left-6 flex flex-col gap-2 bg-surface border w-32 border-secondary py-2 px-2 rounded shadow z-30">
      <button className="hover:bg-primary transition-all duration-200 border border-transparent px-4 py-1 rounded active:text-accent text-stone-200 text-sm font-bold tracking-wide active:border active:border-accent/60">
        Pop Music
      </button>
      <button className="hover:bg-primary transition-all duration-200 border border-transparent px-4 py-1 rounded active:text-accent text-stone-200 text-sm font-bold tracking-wide active:border active:border-accent/60">
        Hip Hop
      </button>
      <button className="hover:bg-primary transition-all duration-200 border border-transparent px-4 py-1 rounded active:text-accent text-stone-200 text-sm font-bold tracking-wide active:border active:border-accent/60">
        Bongo
      </button>
      <button className="hover:bg-primary transition-all duration-200 border border-transparent px-4 py-1 rounded active:text-accent text-stone-200 text-sm font-bold tracking-wide active:border active:border-accent/60">
        RNB`s
      </button>
    </div>
  );
}

export default TrendingTrackModel;
