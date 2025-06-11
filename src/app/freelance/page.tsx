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
    image: "/assets/offerings/portview.png",
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
    <main className={`flex-none h-auto px-4 md:px-8 lg:px-28 relative w-full m-auto ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <section className="py-20">
        <h1 className={`text-4xl lg:text-8xl md:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Freelance<span className="text-purple-600">Services</span>
        </h1>
        <p className={`mt-8 text-xl lg:text-2xl px-2 border-l-4 lg:border-l-8 border-purple-600 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
          Transforming Ideas into Reality with Custom Web Solutions
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {offerings.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}
          >
            <div className="relative h-48">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {item.title}
              </h3>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center pb-20">
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
