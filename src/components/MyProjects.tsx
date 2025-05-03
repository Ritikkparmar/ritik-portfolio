"use client";

import { projects, Project } from "@/data/projectData";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiReact, SiNodedotjs, SiMongodb, SiExpress, SiRedux, SiFirebase, SiGooglemaps, SiRedis, SiPrisma, SiPostgresql, SiMaterialdesign } from "react-icons/si";
import { useTheme } from "@/context/ThemeContext";

const MyProjects = () => {
  const { darkMode } = useTheme();

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "next.js":
        return <SiNextdotjs className={darkMode ? "text-gray-300" : "text-gray-800"} />;
      case "typescript":
        return <SiTypescript className="text-blue-600" />;
      case "tailwind css":
        return <SiTailwindcss className="text-cyan-500" />;
      case "react":
        return <SiReact className="text-blue-500" />;
      case "node.js":
        return <SiNodedotjs className="text-green-600" />;
      case "mongodb":
        return <SiMongodb className="text-green-500" />;
      case "express":
        return <SiExpress className={darkMode ? "text-gray-300" : "text-gray-800"} />;
      case "redux":
        return <SiRedux className="text-purple-600" />;
      case "material ui":
        return <SiMaterialdesign className="text-blue-500" />;
      case "firebase":
        return <SiFirebase className="text-yellow-500" />;
      case "google maps api":
        return <SiGooglemaps className="text-red-500" />;
      case "redis":
        return <SiRedis className="text-red-600" />;
      case "prisma":
        return <SiPrisma className="text-blue-800" />;
      case "postgresql":
        return <SiPostgresql className="text-blue-700" />;
      default:
        return null;
    }
  };

  return (
    <section className={`pb-32 px-4 md:px-10 lg:px-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 via-purple-50 to-white'}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`text-4xl md:text-5xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-800'}`}
      >
        Featured <span className="text-purple-600">Projects</span>
      </motion.h2>

      <div className="space-y-32">
        {projects.map((project: Project, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-20`}
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`w-full lg:w-1/2 h-[300px] sm:h-[400px] relative rounded-xl overflow-hidden shadow-xl group ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
                priority={index === 0}
                style={{
                  objectFit: "contain",
                  backgroundColor: darkMode ? "#1f2937" : "#f8f9fa",
                  padding: "1rem"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <h3 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {project.title}
                <span className="text-purple-600">.</span>
              </h3>
              <p className={`mt-4 text-lg md:text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.description}
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
                {project.tech.map((tech: string, techIndex: number) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + techIndex * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                      darkMode ? 'bg-gray-800' : 'bg-white'
                    }`}
                    title={tech}
                  >
                    {getTechIcon(tech)}
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      darkMode 
                        ? 'bg-gray-800 text-white hover:bg-gray-700' 
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </motion.a>
                )}
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      darkMode 
                        ? "bg-purple-700 text-white hover:bg-purple-600" 
                        : "bg-purple-600 text-white hover:bg-purple-700"
                    }`}
                  >
                    <FaExternalLinkAlt />
                    <span>Live Preview</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
