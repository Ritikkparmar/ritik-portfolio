"use client";

import { Star } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";
import { useTheme } from "@/context/ThemeContext";

const MyPlace = () => {
  const { darkMode } = useTheme();
  
  return (
    <section className="pb-20">
      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[40%_60%]">
        {/* My Stack Section */}
        <div className="w-full">
          <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>My Tech Stack.</h3>
          <div className={`flex flex-col flex-nowrap justify-center gap-5 items-baseline w-full h-64 sm:h-80 lg:h-[250px] overflow-hidden rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-[#b8b8b8]'}`}>
            <Marquee speed={30}>
              <div className="flex gap-5 items-center">
                <div className={`py-2 px-4 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-800 text-white'}`}>HTML5/CSS3 Mastery</div>
                <Star className="text-purple-600" />
                <div className={`py-2 px-4 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-800 text-white'}`}>JavaScript Proficiency</div>
                <Star className="text-purple-600" />
                <div className={`py-2 px-4 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-800 text-white'}`}>React.js </div>
                <Star className="text-purple-600" />
              </div>
            </Marquee>
            <Marquee direction="right" speed={30}>
              <div className="flex gap-5 items-center">
                <div className={`py-2 px-4 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-800 text-white'}`}>Node.js & Express.js</div>
                <Star className="text-purple-600" />
                <div className={`py-2 px-4 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-800 text-white'}`}>MongoDB & PostgreSQL</div>
                <Star className="text-purple-600" />
                <div className={`py-2 px-4 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-800 text-white'}`}>Prisma ORM</div>
                <Star className="text-purple-600" />
              </div>
            </Marquee>
            <Marquee speed={30}>
              <div className="flex gap-5 items-center">
                <div className={`py-2 px-4 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-800 text-white'}`}>Next.js & TypeScript</div>
                <Star className="text-purple-600" />
                <div className={`py-2 px-4 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-800 text-white'}`}>Postman API Testing</div>
                <Star className="text-purple-600" />
                <div className={`py-2 px-4 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-800 text-white'}`}>AI Integrations</div>
                <Star className="text-purple-600" />
              </div>
            </Marquee>
          </div>
        </div>

        {/* My Place Section */}
        <div className="w-full">
          <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>My Place.</h3>
          <div className="relative w-full h-64 sm:h-80 lg:h-[250px] overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.18800900166!2d75.8264465!3d22.7195682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f439bc37ed51%3A0x6090a2b0975e7f82!2sIndore%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1682212565281!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPlace;
