import React from "react";
import AudioController from "./AudioController";
import AudioInfo from "./AudioInfo";
import AudioWaveForm from "./AudioWaveForm";
import AudioOptions from "./AudioOptions";


function AudioPlayer() {
  return (
    <section className="fixed bg-surface w-full z-30 bottom-0 py-5 px-2">
      <div className="flex items-center justify-between gap-8">
        <AudioController />
        <AudioInfo />
        <AudioWaveForm />
        <AudioOptions />
      </div>
    </section>
  );
}

export default AudioPlayer;
