"use client";
import React, { useEffect, useRef, useContext, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { AudioContext } from "./AudioPlayer";

function AudioWaveForm() {
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);
  const { isPlaying, volume, currentTrack } = useContext(AudioContext);
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    if (!waveformRef.current) return;

    // Initialize WaveSurfer
    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#00E4CB",
      progressColor: "#666C6C",
      height: 30,
      responsive: true,
    });

    wavesurferRef.current.load(currentTrack);

    return () => wavesurferRef.current.destroy();
  }, [currentTrack]);

  // Control playback
  useEffect(() => {
    if (!wavesurferRef.current) return;
    isPlaying ? wavesurferRef.current.play() : wavesurferRef.current.pause();
  }, [isPlaying]);

  // Update volume
  useEffect(() => {
    if (!wavesurferRef.current) return;
    wavesurferRef.current.setVolume(volume);
  }, [volume]);
  // useEffect(() => {
  //   if (!wavesurferRef.current) return;
  //   wavesurferRef.current.audioprocess(currentTime);
  // }, [currentTime]);

  return (
    <div className="flex-grow flex items-center gap-2 text-gray-100/70">
      <span className="text-sm font-semibold tracking-wider">
        0.00
      </span>
      <div ref={waveformRef} className="w-full h-5 sm:h-7"></div>
      <span className="text-sm font-semibold tracking-wider text-gray-100/70">
        3.00
      </span>
    </div>
  );
}

export default AudioWaveForm;
