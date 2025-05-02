import { Metadata } from "next";
import profileImg from "../../public/profile.jpg";
import HomeWrapper from "./HomeWrapper";

export const metadata: Metadata = {
  title: "Ritik Parmar - MERN Stack Developer Portfolio",
  description:
    "Portfolio of Ritik Parmar, a MERN Stack and Next.js Developer specializing in React, Node.js, TypeScript, and modern web development.",
  keywords: [
    "Ritik Parmar",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Web Developer Portfolio",
    "Full Stack Developer",
    "JavaScript Developer",
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/YT4CHxGj/Screenshot-2025-03-29-141903.webp",
    title: "Ritik Parmar - MERN Stack Developer Portfolio",
    description:
      "Portfolio of Ritik Parmar, a MERN Stack and Next.js Developer specializing in React, Node.js, TypeScript, and modern web development.",
  },
  twitter: {
    images: "https://i.ibb.co/YT4CHxGj/Screenshot-2025-03-29-141903.webp",
    title: "Ritik Parmar - MERN Stack Developer Portfolio",
    description:
      "Portfolio of Ritik Parmar, a MERN Stack and Next.js Developer specializing in React, Node.js, TypeScript, and modern web development.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
};

export default function Home() {
  return <HomeWrapper profileImg={profileImg} />;
}
