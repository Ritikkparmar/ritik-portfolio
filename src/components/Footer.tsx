"use client";

import { Download } from "lucide-react";
import Menubar from "./Menubar";
import SocialsMenu from "./SocialsMenu";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer className={`w-full min-h-[140px] relative z-10 transition-colors duration-300 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-200'}`}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-28 py-8 flex flex-col items-center justify-center text-center gap-4">
        <blockquote className={`text-lg md:text-2xl font-semibold italic leading-relaxed ${darkMode ? 'text-purple-200' : 'text-purple-700'} drop-shadow-md`}>
          "Code is like humor. When you have to explain it, it's bad. <span className='text-purple-500'>Keep it simple, keep it creative.</span>"
        </blockquote>
        <div className="flex gap-4 justify-center items-center mt-2">
          <SocialsMenu />
        </div>
        <a
          href="/contact"
          className={`mt-2 inline-block px-6 py-2 rounded-lg font-bold transition-colors duration-300 text-center shadow-md ${darkMode ? 'bg-purple-700 text-white hover:bg-purple-800' : 'bg-purple-600 text-white hover:bg-purple-700'}`}
        >
          Get In Touch
        </a>
        <h3 className={`text-[15px] md:text-[17px] text-center mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>©2025 All Rights Reserved.<br />Made with 💜 by Ritik Parmar</h3>
      </div>
    </footer>
  );
};

export default Footer;
