"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useTheme } from "@/context/ThemeContext";

interface menuInterface {
  home?: boolean;
  isContactVisible?: boolean;
}

const Menubar = ({ home, isContactVisible = false }: menuInterface) => {
  const pathname = usePathname();
  const { darkMode } = useTheme();
  
  return (
    <nav className={`${home && "hidden lg:block md:block"}`}>
      <ul className={`flex space-x-6 font-bold text-[20px] ${darkMode ? 'text-gray-200' : 'text-[#4e525a]'}`}>
        <li
          className={`hover:text-purple-500 transition-colors ${
            pathname === "/" && "text-purple-600"
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`hover:text-purple-500 transition-colors ${
            pathname === "/projects" && "text-purple-600"
          }`}
        >
          <Link href="/projects">Projects</Link>
        </li>
        <li
          className={`hover:text-purple-500 transition-colors ${
            pathname === "/about" && "text-purple-600"
          }`}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`hover:text-purple-500 transition-colors ${
            pathname === "/freelance" && "text-purple-600"
          }`}
        >
          <Link href="/freelance">Freelance</Link>
        </li>
        {isContactVisible && (
          <li
            className={`hover:text-purple-500 transition-colors ${
              pathname === "/contact" && "text-purple-600"
            }`}
          >
            <Link href="/contact">Contact</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Menubar;
