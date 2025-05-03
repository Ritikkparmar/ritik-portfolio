import { Metadata } from "next";
import ResumeClient from "./ResumeClient";

export const metadata: Metadata = {
  title: "Resume | Ritik Parmar - MERN Stack Developer",
  description: "Professional resume of Ritik Parmar, a MERN Stack Developer specializing in Next.js, React, Node.js, and modern web technologies.",
};

export default function ResumePage() {
  return <ResumeClient />;
} 