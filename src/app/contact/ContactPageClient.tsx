'use client';
import { Contact, Mail, Phone } from "lucide-react";
import profileImg from "../../../public/profile.jpg";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { useTheme } from "@/context/ThemeContext";

const ContactPageClient = () => {
  const { darkMode } = useTheme();
  return (
    <main className={`flex-none h-auto px-4 md:px-8 lg:px-28 relative w-full m-auto ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <section className="py-28">
        {/* Reverse order on mobile so image shows first */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-8 gap-10">
          {/* Text Section */}
          <div className="text-center lg:text-left md:w-1/2 lg:w-1/2 p-5">
            <h1 className={`text-4xl lg:text-6xl md:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Get In Touch<span className="text-purple-600">.</span></h1>
            <p className={`mt-6 text-xl lg:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Looking to partner or work together? Reach out through the form and I&apos;ll get back to you within 24 hours.</p>
            {/* Email Link */}
            <Link href="mailto:ritikparmar255@gmail.com" className="mt-6 flex gap-5 items-center">
              <div className={`p-3 border-2 rounded-full font-bold ${darkMode ? 'border-gray-600 text-gray-300' : 'border-gray-400 text-gray-600'}`}> <Mail /> </div>
              <p className={`text-[18px] ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>ritikparmar255@gmail.com</p>
            </Link>
            {/* Phone Link */}
            <Link href="tel:+919691875770" className="mt-6 flex gap-5 items-center">
              <div className={`p-3 border-2 rounded-full font-bold ${darkMode ? 'border-gray-600 text-gray-300' : 'border-gray-400 text-gray-600'}`}> <Phone /> </div>
              <p className={`text-[18px] ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>+91 96918-75770</p>
            </Link>
          </div>
          {/* Image Section (First on Mobile) */}
          <div className={`relative flex items-center justify-center w-60 md:w-72 lg:w-[25rem] h-60 md:h-72 lg:h-[25rem] mt-10 lg:mt-0 rounded-full border-4 ${darkMode ? 'border-purple-400' : 'border-purple-300'}`}>
            <Image src={profileImg} alt="Profile Image" className="object-cover rounded-full w-full h-full" />
          </div>
        </div>
      </section>
      <ContactForm />
    </main>
  );
};

export default ContactPageClient; 