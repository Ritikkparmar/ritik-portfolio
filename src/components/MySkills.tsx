"use client";

import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    emoji: "💻",
    skills: [
      "HTML, CSS, JavaScript, TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "shadcn/ui",
      "GSAP, ScrollTrigger, Locomotive Scroll",
    ],
  },
  {
    category: "Backend",
    emoji: "⚙️",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Prisma ORM",
      "API Development",
    ],
  },
  {
    category: "Tools & Platforms",
    emoji: "🛠️",
    skills: [
      "Git & GitHub",
      "Vercel Deployment",
      "Postman (API Testing)",
      "Figma (Basic UI Understanding)",
      "VS Code",
    ],
  },
  {
    category: "AI & Soft Skills",
    emoji: "🤖",
    skills: [
      "AI Model Integration",
      "AI-Powered Web Applications",
      "Problem Solving",
      "Effective Communication",
      "Team Collaboration",
      "Continuous Learning",
    ],
  },
];

const MySkills = () => {
  return (
    <section className="pb-20 pt-8 text-center lg:text-start md:text-start">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl lg:text-6xl font-bold text-gray-800"
      >
        Skills<span className="text-purple-600">.</span>
      </motion.h1>

      <div className="mt-8 px-2 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {skillsData.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{category.emoji}</span>
              <h3 className="text-3xl font-bold text-gray-800">
                {category.category}
              </h3>
            </div>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 text-gray-800 lg:text-[20px] space-y-3"
            >
              {category.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                  viewport={{ once: true }}
                  className="hover:text-purple-600 transition-colors duration-300"
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MySkills; 