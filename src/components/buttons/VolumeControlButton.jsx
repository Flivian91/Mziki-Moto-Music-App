import React from "react";

function VolumeControlButton() {
  return (
    <div className="flex flex-col gap-1 hover:bg-surface/80 py-2 px-2 rounded">
      <label htmlFor="volume">Volume</label>
      <input
        type="range"
        min={0}
        max={1}
        step={0.1}
        id="volume"
        className="cursor-pointer"
      />
    </div>
  );
}

export default VolumeControlButton;
