"use client";

import Link from "next/link";
import React from "react";
import { useTheme } from "@/context/ThemeContext";

const Experience = () => {
  const { darkMode } = useTheme();
  
  return (
    <section className="pb-20 pt-8">
      <h1 className={`text-5xl lg:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        Experience<span className="text-purple-600">.</span>
      </h1>
      <div className="mt-8 px-2 flex flex-col md:flex-row items-start">
        {/* Company Name */}
        <div className="w-full md:w-[30%]">
          <Link
            href="https://disolutions.net"
            target="_blank"
            className="text-3xl border-l-4 border-purple-600 px-3 leading-[55px] text-purple-600"
          >
            Pixel Tech
          </Link>
        </div>
        {/* Company Details */}
        <div className="w-full md:w-[70%] p-2 rounded-lg">
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-gray-200' : ''}`}>
            Frontend Developer Intern{" "}
            <span className="text-purple-600">@ Pixel Tech (Remote)</span>
          </h3>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            A 6-month impactful experience shaping real-world projects.
          </p>

          <ul className={`mt-4 space-y-3 lg:text-[20px] ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✔</span>
              Worked remotely as a Frontend Developer focusing on building and
              maintaining live production projects using Next.js and TypeScript.
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✔</span>
              Developed dynamic and responsive web interfaces with Tailwind CSS,
              ensuring high performance and seamless user experiences.
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✔</span>
              Collaborated closely with cross-functional teams to integrate
              APIs, debug complex issues, and enhance project scalability and
              maintainability.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
