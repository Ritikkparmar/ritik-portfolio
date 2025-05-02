"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const Skils = () => {
  const { darkMode } = useTheme();
  return (
    <section className="pb-20 pt-8 text-center lg:text-start md:text-start">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`text-5xl lg:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}
      >
        Skills<span className="text-purple-600">.</span>
      </motion.h1>

      <div className="mt-8 px-2 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Frontend Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">💻</span>
            <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Frontend</h3>
          </div>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={`mt-4 lg:text-[20px] space-y-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
          >
            {["HTML, CSS, JavaScript, TypeScript", "React.js", "Next.js", "Tailwind CSS", "Material UI", "shadcn/ui", "GSAP, ScrollTrigger, Locomotive Scroll"].map((skill, i) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
                className="hover:text-purple-600 transition-colors duration-300"
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Backend Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">⚙️</span>
            <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Backend</h3>
          </div>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className={`mt-4 lg:text-[20px] space-y-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
          >
            {["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma ORM", "API Development"].map((skill, i) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                viewport={{ once: true }}
                className="hover:text-purple-600 transition-colors duration-300"
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Tools & Platforms Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🛠️</span>
            <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Tools & Platforms</h3>
          </div>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className={`mt-4 lg:text-[20px] space-y-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
          >
            {["Git & GitHub", "Vercel Deployment", "Postman (API Testing)", "Figma (Basic UI Understanding)", "VS Code"].map((skill, i) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                viewport={{ once: true }}
                className="hover:text-purple-600 transition-colors duration-300"
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* AI & Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🤖</span>
            <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>AI & Soft Skills</h3>
          </div>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className={`mt-4 lg:text-[20px] space-y-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
          >
            {["AI Model Integration", "AI-Powered Web Applications", "Problem Solving", "Effective Communication", "Team Collaboration", "Continuous Learning"].map((skill, i) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                viewport={{ once: true }}
                className="hover:text-purple-600 transition-colors duration-300"
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skils;
