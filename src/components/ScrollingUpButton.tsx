"use client";
import Image from "next/image";
import upArrowIcon from "../../public/icon/upArrow.svg";
import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

const ScrollButtons = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);
  const { darkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Show Scroll Up button after scrolling past 100vh
      setShowScrollUp(scrollY > windowHeight);

      // Hide Scroll Down button permanently after scrolling past 10vh
      if (scrollY > windowHeight * 0.1) {
        setShowScrollDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = () => {
    window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" });
    setShowScrollDown(false); // Hide Scroll Down button permanently
  };

  return (
    <>
      {/* Scroll Up Button */}
      <div
        className={`fixed bottom-8 right-10 z-50 transition-opacity duration-500 ${
          showScrollUp ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={scrollToTop}
      >
        <div className={`w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer group transition-all duration-300 ${
          darkMode ? "bg-purple-700" : "bg-purple-600"
        }`}>
          <Image
            alt="upArrow"
            src={upArrowIcon}
            className="w-[20px] transition-transform duration-300 group-hover:-translate-y-1"
          />
        </div>
      </div>

      {/* Scroll Down Button */}
      <div
        className={`fixed bottom-9 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-500 ${
          showScrollDown ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={scrollToSection}
      >
        <div className="flex flex-col items-center cursor-pointer">
          {/* Animated Scroll Container */}
          <div className={`w-10 h-16 rounded-full border-2 flex justify-center items-end p-1 relative overflow-hidden animate-pulse ${
            darkMode ? "border-purple-500" : "border-purple-600"
          }`}>
            <div className={`w-5 h-5 rounded-full animate-bounce ${
              darkMode ? "bg-purple-500" : "bg-purple-600"
            }`}></div>
          </div>
          {/* Scroll Text */}
          <p className={`mt-2 text-sm md:text-base animate-pulse ${
            darkMode ? "text-purple-500" : "text-purple-600"
          }`}>
            Scroll down
          </p>
        </div>
      </div>
    </>
  );
};
export default ScrollButtons;
