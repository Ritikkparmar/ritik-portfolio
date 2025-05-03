"use client";

import { useTheme } from "@/context/ThemeContext";
import MyProjects from "@/components/MyProjects";
import Skils from "@/components/Skils";

const ProjectsWrapper = () => {
  const { darkMode } = useTheme();

  return (
    <main className={`flex-none h-auto px-4 md:px-8 lg:px-28 relative w-full m-auto ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <section className="py-20">
        <h1 className={`text-4xl lg:text-8xl md:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          My<span className="text-purple-600">Best</span>
          Creations
        </h1>
        <p className={`mt-8 text-xl lg:text-2xl px-2 border-l-4 lg:border-l-8 border-purple-600 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
          Designing and Developing Robust and Stylish Web Applications for a
          Decade and Counting
        </p>
      </section>
      <div className="pb-20">
        <MyProjects />
        <Skils />
      </div>
    </main>
  );
};

export default ProjectsWrapper; 