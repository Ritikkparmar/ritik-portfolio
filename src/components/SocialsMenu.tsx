"use client";

import { Github, Linkedin, Instagram } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const SocialsMenu = () => {
  const { darkMode } = useTheme();
  
  return (
    <nav>
      <ul className={`flex space-x-6 font-bold text-[20px] ${darkMode ? 'text-gray-300' : 'text-[#4e525a]'}`}>
        <li className="hover:text-purple-500 transition-colors">
          <a 
            href="https://www.instagram.com/ritiikkkk_?igsh=NmZ6dnlnbDlyazQx" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </li>
        <li className="hover:text-purple-500 transition-colors">
          <a
            href="https://www.linkedin.com/in/ritik-parmar-661781259"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        </li>
        <li className="hover:text-purple-500 transition-colors">
          <a 
            href="https://github.com/Ritikkparmar" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialsMenu;
