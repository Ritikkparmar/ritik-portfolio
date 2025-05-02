"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";

const SpotifyPlayer = () => {
  const { darkMode } = useTheme();
  
  return (
    <div className="w-full">
      <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Music I Love 🎵</h3>
      <div className="relative w-full h-[80px] sm:h-[120px] lg:h-[150px] overflow-hidden rounded-lg">
        <iframe
          style={{ borderRadius: "12px" }}
          src={`https://open.spotify.com/embed/track/56ShzRBsODyylHvxsMycO1?utm_source=generator&theme=${darkMode ? '1' : '0'}`}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default SpotifyPlayer;
