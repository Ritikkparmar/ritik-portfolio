"use client";

import { useTheme } from "@/context/ThemeContext";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Experience from "@/components/Experience";
import Skils from "@/components/Skils";
import MyStory from "@/components/MyStory";

interface HomeWrapperProps {
  profileImg: any;
}

const HomeWrapper = ({ profileImg }: HomeWrapperProps) => {
  const { darkMode } = useTheme();

  return (
    <main className={`flex-none h-auto px-4 md:px-8 lg:px-28 relative w-full m-auto ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <section className="py-28">
        {/* Reverse order on mobile so image shows first */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2">
            <p className={`text-2xl mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              Hey, {"I'm"} Ritik <span className="inline-block">👋🏻</span>
            </p>
            <h1 className={`text-4xl lg:text-8xl md:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              <span className="text-purple-600">Mern</span>Stack <br />
              Developer
            </h1>
            <p className={`mt-6 text-xl lg:text-2xl px-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              I&apos;m a MERN stack and Next.js (TypeScript) developer based in
              India, passionate about building powerful, scalable web
              applications that users will love.
            </p>

            {/* Button Section - Centered on Small/Mid Screens */}
            <div className="mt-6 flex flex-col md:flex-row items-center lg:items-start justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-4">
              <Link
                href="/contact"
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-bold"
              >
                Get In Touch
              </Link>
              <a
                href="https://mayurnakum-portfolio.vercel.app/mayurResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2 bg-transparent transition-all duration-300 border rounded-lg flex gap-2 font-bold ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white' 
                    : 'border-gray-600 text-gray-800 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Download className={darkMode ? 'text-gray-300' : 'text-gray-800'} /> 
                Download CV
              </a>
            </div>
          </div>
          {/* Image Section (First on Mobile) */}
          <div className={`relative flex items-center justify-center w-60 md:w-72 lg:w-[25rem] h-60 md:h-72 lg:h-[25rem] mt-10 lg:mt-0 rounded-full border-4 ${darkMode ? 'border-purple-400' : 'border-purple-300'}`}>
            <Image
              src={profileImg}
              alt="Profile Image"
              className="object-cover rounded-full w-full h-full"
            />
          </div>
        </div>
      </section>
      <Experience />
      <Skils />
      <MyStory />
    </main>
  );
};

export default HomeWrapper; 