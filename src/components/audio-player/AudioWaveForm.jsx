"use client";
import React, { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
function AudioWaveForm() {
  const waveformRef = useRef(null);

  useEffect(() => {
    // Ensure the waveform container exists
    if (!waveformRef.current) return;

    // Initialize WaveSurfer
    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current, // Use the div ref
      waveColor: "#00E4CB", // Waveform color
      progressColor: "#666C6C", // Progress bar color
      height: 60, // Height of the waveform
      responsive: true, // Make it responsive
      interact: false, // Disable interaction (static waveform)
    });

    // Load audio
    wavesurfer.load("/song.m4a"); // Replace with your audio file path in the public folder

    // Cleanup on unmount
    return () => wavesurfer.destroy();
  }, []);

  return (
    <div className="flex-grow flex items-center">
      <div ref={waveformRef} className="w-full h-12"></div>
    </div>
  );
}

export default AudioWaveForm;
