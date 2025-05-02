"use client";

import Image from "next/image";
import Menubar from "./Menubar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      if (menuOpen && target && !target.closest("#mobile-menu")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <header
      className={`fixed w-full transition-colors duration-300 z-50 ${
        darkMode 
          ? (!menuOpen ? "backdrop-blur-xl bg-gray-900/80" : "bg-gray-900") 
          : (!menuOpen ? "backdrop-blur-xl" : "bg-white")
      } shadow-md`}
    >
      <main className="max-w-screen-xl mx-auto flex-none h-auto px-4 md:px-8 w-full py-4">
        <section className="flex justify-between items-center w-full">
          {/* Logo */}
          <a href="/" className={`text-[20px] font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
            Ritik<span className="text-purple-600">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex lg:flex flex-1 justify-center">
            <Menubar home={true} />
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Contact Button */}
            <Link
              href="/contact"
              className={`hidden md:flex lg:flex bg-black p-2 rounded-full hover:bg-gray-700 ${
                pathname === "/contact" && "bg-purple-600"
              } ${darkMode && pathname !== "/contact" && "bg-gray-700 hover:bg-gray-600"}`}
            >
              <Image
                src="https://framerusercontent.com/images/y7AJDvszhzacJVCt3lE8xkNyDY.svg"
                alt="contact"
                width={20}
                height={20}
              />
            </Link>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 sm:p-2.5 rounded-full transition-colors duration-300 ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            {/* Menu Button for Mobile/Tablet */}
            <button
              className="lg:hidden md:hidden p-3 rounded-md focus:outline-none border border-gray-300 dark:border-gray-700"
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }}
              aria-label="Open menu"
            >
              {menuOpen ? (
                <X className={darkMode ? 'text-white' : 'text-black'} />
              ) : (
                <AlignJustify className={darkMode ? 'text-white' : 'text-black'} />
              )}
            </button>
          </div>
        </section>

        {/* Mobile/Tablet Menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className={`fixed top-16 left-0 w-full shadow-2xl border-t border-gray-200 dark:border-gray-800 p-4 md:hidden lg:hidden z-[100] ${
              darkMode ? 'bg-gray-900 text-white' : 'bg-white text-[#4e525a]'
            }`}
          >
            <nav>
              <ul className="flex flex-col space-y-4 font-bold text-[20px]">
                <Link
                  href="/"
                  className={`hover:text-purple-600 ${
                    pathname === "/" && "text-purple-600"
                  }`}
                >
                  <li>Home</li>
                </Link>
                <Link
                  href="/projects"
                  className={`hover:text-purple-600 ${
                    pathname === "/projects" && "text-purple-600"
                  }`}
                >
                  <li>Projects</li>
                </Link>
                <Link
                  href="/about"
                  className={`hover:text-purple-600 ${
                    pathname === "/about" && "text-purple-600"
                  }`}
                >
                  <li>About</li>
                </Link>
                <Link
                  href="/freelance"
                  className={`hover:text-purple-600 ${
                    pathname === "/freelance" && "text-purple-600"
                  }`}
                >
                  <li>Freelance</li>
                </Link>
                <Link
                  href="/contact"
                  className={`hover:text-purple-600 ${
                    pathname === "/contact" && "text-purple-600"
                  }`}
                >
                  <li>Get In Touch</li>
                </Link>
              </ul>
            </nav>
          </div>
        )}
      </main>
    </header>
  );
};

export default Header;
