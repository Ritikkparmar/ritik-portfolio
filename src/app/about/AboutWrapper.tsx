"use client";

import { useTheme } from "@/context/ThemeContext";
import Experience from "@/components/Experience";
import Myplace from "@/components/Myplace";
import MyStory from "@/components/MyStory";
import SpotifyPlayer from "@/components/SpotifyPlayer";
import GitHubHeatmap from "@/components/GitHubHeatmap";

const AboutWrapper = () => {
  const { darkMode } = useTheme();

  return (
    <main className={`flex-none h-auto px-4 md:px-8 lg:px-28 relative w-full m-auto ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <section className="py-20">
        <h1 className={`text-4xl lg:text-8xl md:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          About me<span className="text-purple-600">.</span>
        </h1>
        <p className={`mt-8 text-xl lg:text-2xl px-2 border-l-4 lg:border-l-8 border-purple-600 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
          Developing beautiful and functional websites is what I love doing, and
          that's why I give my all in every new challenge.
        </p>
      </section>
      <div className="pb-20">
        <Myplace />
        <SpotifyPlayer/>
        <MyStory />
        <Experience />
        <GitHubHeatmap />
      </div>
    </main>
  );
};

export default AboutWrapper; 