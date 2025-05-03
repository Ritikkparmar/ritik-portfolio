"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { FaGithub, FaCode, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const GITHUB_USERNAME = "Ritikkparmar";

export default function GitHubHeatmap() {
  const { darkMode } = useTheme();

  return (
    <section className="w-full max-w-4xl mx-auto pb-8 mb-0">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl lg:text-6xl font-bold text-left mb-2"
        style={{
          background: darkMode
            ? "linear-gradient(90deg, #a78bfa, #f472b6, #60a5fa)"
            : "linear-gradient(90deg, #a78bfa, #f472b6, #60a5fa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        GitHub Activity<span className="text-purple-600">.</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className={`mt-6 text-lg lg:text-2xl px-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
      >
        <span className="font-semibold text-purple-500">Open Source Journey:</span> <br className="hidden md:block" />
        Here&apos;s a snapshot of my coding activities and open source passion.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className={`mt-10 p-6 rounded-2xl shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'}`}
        style={{ boxShadow: darkMode ? '0 4px 32px 0 #2d1a4a33' : '0 4px 32px 0 #a78bfa33' }}
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* GitHub Stats Card */}
          <div className={`flex-1 p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg`}>
            <div className="flex items-center mb-4">
              <FaGithub className={`text-2xl mr-3 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>GitHub Profile</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <FaCode className="inline mr-2" /> Repositories
                </span>
                <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  15+
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <FaStar className="inline mr-2" /> Top Languages
                </span>
                <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  TypeScript, JavaScript, React
                </span>
              </div>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 px-5 py-3 w-full rounded-lg shadow mt-4 transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-purple-700 to-blue-600 text-white hover:from-purple-600 hover:to-blue-500' 
                    : 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600'
                }`}
              >
                <FaGithub />
                <span>View My GitHub Profile</span>
              </motion.a>
            </div>
          </div>
          
          {/* Contribution Highlights */}
          <div className="flex-1">
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Contribution Highlights
            </h3>
            
            <div className="space-y-3">
              {[
                "Created responsive web applications with Next.js",
                "Implemented modern UI with TailwindCSS and Framer Motion",
                "Built secure and scalable backend systems",
                "Collaborated on open source projects",
                "Optimized applications for performance"
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className={`flex items-start p-3 rounded-lg ${
                    darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
                  } transition-colors duration-300`}
                >
                  <div className={`w-3 h-3 mt-1.5 mr-3 rounded-full ${getRandomColorClass()}`}></div>
                  <span className={`${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Helper function to get random color classes for the dots
function getRandomColorClass() {
  const colors = [
    'bg-green-400',
    'bg-blue-400',
    'bg-purple-400',
    'bg-pink-400',
    'bg-indigo-400'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
} 