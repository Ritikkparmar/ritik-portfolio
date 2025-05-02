import { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact | Ritik Parmar - MERN Stack Developer",
  description:
    "Get in touch with Ritik Parmar for MERN stack projects, Next.js applications, collaborations, and job opportunities.",
  keywords: [
    "Contact Ritik Parmar",
    "Hire MERN Stack Developer",
    "Next.js Developer Contact",
    "TypeScript Developer",
    "Web Developer Consultation",
    "Freelance MERN Developer",
    "Work with Ritik Parmar",
    "JavaScript Developer for Hire",
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/YT4CHxGj/Screenshot-2025-03-29-141903.webp",
    title: "Contact | Ritik Parmar - MERN Stack Developer",
    description:
      "Get in touch with Ritik Parmar for MERN stack projects, Next.js applications, collaborations, and job opportunities.",
  },
  twitter: {
    images: "https://i.ibb.co/YT4CHxGj/Screenshot-2025-03-29-141903.webp",
    title: "Contact | Ritik Parmar - MERN Stack Developer",
    description:
      "Get in touch with Ritik Parmar for MERN stack projects, Next.js applications, collaborations, and job opportunities.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
