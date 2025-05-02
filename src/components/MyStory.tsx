"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";

const MyStory = () => {
  const { darkMode } = useTheme();
  
  return (
    <section className="pb-20">
      <h1 className={`text-5xl lg:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        My Story
        <span className="text-purple-600">.</span>
      </h1>

      <p className={`mt-8 lg:text-[20px] px-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
        <span className={`text-2xl font-bold ${darkMode 
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-purple-300 to-purple-200' 
          : 'text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-gray-400'
        }`}>
          Beginning the Journey (2022):
        </span> 
        Started my Bachelor of Technology (B.Tech) in Computer Science at Shri Vaishnav Vidyapeeth Vishwavidyalaya, driven by a strong passion for technology and innovation.
      </p>

      <p className={`mt-2 lg:text-[20px] px-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
        <span className={`text-2xl font-bold ${darkMode 
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-purple-300 to-purple-200' 
          : 'text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-gray-400'
        }`}>
          Building a Strong Foundation (2022-2023):
        </span> 
        Gained expertise in HTML, CSS, JavaScript, and React.js, developing multiple projects and strengthening my frontend development skills with modern libraries like Tailwind CSS, Material UI, and shadcn/ui.
      </p>

      <p className={`mt-2 lg:text-[20px] px-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
        <span className={`text-2xl font-bold ${darkMode 
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-purple-300 to-purple-200' 
          : 'text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-gray-400'
        }`}>
          Diving Deeper (2023-2024):
        </span> 
        Expanded my technical stack by learning Node.js, Express.js, MongoDB, PostgreSQL, Prisma, and API development. At the same time, I explored AI integrations in web applications and API testing using Postman.
      </p>

      <p className={`mt-2 lg:text-[20px] px-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
        <span className={`text-2xl font-bold ${darkMode 
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-purple-300 to-purple-200' 
          : 'text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-gray-400'
        }`}>
          Present Journey:
        </span> 
        Currently in my 3rd year (6th semester), I am actively working on enhancing my Data Structures and Algorithms (DSA) skills using C++, and exploring the fundamentals of Cloud Computing to build scalable and efficient systems.
      </p>

      <p className={`mt-2 lg:text-[20px] px-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
        <span className={`text-2xl font-bold ${darkMode 
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-purple-300 to-purple-200' 
          : 'text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-gray-400'
        }`}>
          Vision for the Future:
        </span> 
        With a strong foundation in the MERN stack, Next.js, TypeScript, AI models, and backend technologies, I aim to create powerful, user-centric web applications while continuously growing in DSA and cloud technologies. 🚀
      </p>
    </section>
  );
};

export default MyStory;
