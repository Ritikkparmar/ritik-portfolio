import { Metadata } from "next";
import AboutWrapper from "./AboutWrapper";

export const metadata: Metadata = {
  title: "About | Ritik Parmar - MERN Stack Developer",
  description:
    "Learn about Ritik Parmar, a MERN Stack Developer with expertise in Next.js, React, Node.js, and modern web technologies.",
  keywords: [
    "About Ritik Parmar",
    "MERN Stack Developer Bio",
    "Next.js Developer Background",
    "React Developer Experience",
    "Full Stack Developer Skills",
    "Web Developer Journey",
    "TypeScript Developer Portfolio",
    "Ritik Parmar Experience",
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/YT4CHxGj/Screenshot-2025-03-29-141903.webp",
    title: "About | Ritik Parmar - MERN Stack Developer",
    description:
      "Learn about Ritik Parmar, a MERN Stack Developer with expertise in Next.js, React, Node.js, and modern web technologies.",
  },
  twitter: {
    images: "https://i.ibb.co/YT4CHxGj/Screenshot-2025-03-29-141903.webp",
    title: "About | Ritik Parmar - MERN Stack Developer",
    description:
      "Learn about Ritik Parmar, a MERN Stack Developer with expertise in Next.js, React, Node.js, and modern web technologies.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
};

export default function About() {
  return <AboutWrapper />;
}
