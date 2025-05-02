"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const offerings = [
  {
    title: "E-Commerce Platforms",
    description:
      "Custom-built online stores with modern UI, secure payment gateways, and scalable product management systems.",
    image: "/assets/offerings/eccommerce.png",
  },
  {
    title: "Education & Training Platforms",
    description:
      "Create LMS systems, course dashboards, quizzes, and video content delivery for online education businesses.",
    image: "/assets/offerings/lms.png",
  },
  {
    title: "AI-Integrated Applications",
    description:
      "Smart apps with integrated AI features like chatbot support, resume analysis, and automated insights.",
    image: "/assets/offerings/Aiapp.png",
  },
  {
    title: "Portfolio Websites",
    description:
      "Build modern, responsive portfolios to highlight personal projects, resume, and social presence.",
    image: "/assets/offerings/potfolio.png",
  },
  {
    title: "SaaS Product Dashboards",
    description:
      "Craft powerful dashboards with analytics, charts, subscriptions, and admin features.",
    image: "/assets/offerings/saas.png",
  },
  {
    title: "Booking & Appointment Apps",
    description:
      "Set up appointment systems for tutors, doctors, and service businesses with calendar sync.",
    image: "/assets/offerings/booking.png",
  },
];

const FreelancePage = () => {
  const { darkMode } = useTheme();
  
  return (
    <main className={`min-h-screen w-full px-4 md:px-8 lg:px-28 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-4xl md:text-6xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}
      >
        Let's Build Something <span className="text-purple-500">Together</span>
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {offerings.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform shadow-xl ${darkMode ? 'bg-gray-800 shadow-gray-800/50' : 'bg-white shadow-gray-200/70'}`}
          >
            <div className={`relative w-full aspect-[5/3] ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h2 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {offer.title}
              </h2>
              <p className={`mt-3 text-[17px] ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {offer.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`text-2xl font-medium ${darkMode ? 'text-purple-400' : 'bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent'}`}
        >
          Pricing varies based on project scope and complexity.
        </motion.p>

        <Link
          href="https://wa.me/919691875770?text=Hi%20Ritik%2C%20I%20want%20to%20discuss%20a%20freelance%20project."
          target="_blank"
          className={`inline-block mt-6 font-semibold px-6 py-3 rounded-full shadow-lg transition ${darkMode 
            ? 'bg-green-600 text-white hover:bg-green-700 shadow-green-700/20' 
            : 'bg-green-500 text-white hover:bg-green-600 shadow-green-500/20'}`}
        >
          Contact Me on WhatsApp
        </Link>
      </div>
    </main>
  );
};

export default FreelancePage;
