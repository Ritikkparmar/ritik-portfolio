import { Metadata } from "next";
import ProjectsWrapper from "./ProjectsWrapper";

export const metadata: Metadata = {
  title: "Projects & Skills | Ritik Parmar - MERN Stack Developer",
  description:
    "Explore Ritik Parmar's portfolio of MERN stack projects, Next.js applications, and technical skills.",
  keywords: [
    "Ritik Parmar Projects",
    "MERN Stack Projects",
    "Next.js Projects",
    "Web Development Portfolio",
    "Full Stack Developer",
    "React Projects",
    "Node.js Projects",
    "TypeScript Projects",
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/YT4CHxGj/Screenshot-2025-03-29-141903.webp",
    title: "Projects & Skills | Ritik Parmar - MERN Stack Developer",
    description:
      "Explore Ritik Parmar's portfolio of MERN stack projects, Next.js applications, and technical skills.",
  },
  twitter: {
    images: "https://i.ibb.co/YT4CHxGj/Screenshot-2025-03-29-141903.webp",
    title: "Projects & Skills | Ritik Parmar - MERN Stack Developer",
    description:
      "Explore Ritik Parmar's portfolio of MERN stack projects, Next.js applications, and technical skills.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
};

export default function Projects() {
  return <ProjectsWrapper />;
}
