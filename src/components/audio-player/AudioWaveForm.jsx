"use client";
import { AudioContext } from "@/context/AudioContextProvider";
import React, { useEffect, useRef, useContext } from "react";
import WaveSurfer from "wavesurfer.js";

function AudioWaveForm() {
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);
  const {
    isPlaying,
    volume,
    currentTrack,
    currentTime,
    setCurrentTime,
    duration,
    setDuration,
  } = useContext(AudioContext);

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

    // Event listener for duration
    wavesurferRef.current.on("ready", () => {
      setDuration(wavesurferRef.current.getDuration());
    });

    // Event listener for playback progress
    wavesurferRef.current.on("audioprocess", () => {
      setCurrentTime(wavesurferRef.current.getCurrentTime());
    });

    // Load the track
    if (currentTrack) {
      wavesurferRef.current.load(currentTrack);
    }

    return () => wavesurferRef.current.destroy();
  }, [currentTrack]);

  useEffect(() => {
    if (!wavesurferRef.current) return;
    isPlaying ? wavesurferRef.current.play() : wavesurferRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    if (!wavesurferRef.current) return;
    wavesurferRef.current.setVolume(volume);
  }, [volume]);

  // Format time for display
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="flex-grow flex items-center gap-2 text-gray-100/70">
      <span className="text-sm font-semibold tracking-wider">
        {formatTime(currentTime)}
      </span>
      <div
        ref={waveformRef}
        aria-label="Audio Waveform"
        className="w-full h-5 sm:h-7"
      ></div>
      <span className="text-sm font-semibold tracking-wider text-gray-100/70">
        {formatTime(duration)}
      </span>
    </div>
  );
}

export default AudioWaveForm;
