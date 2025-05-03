"use client";

import { useTheme } from "@/context/ThemeContext";

const Resume = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Ritik Parmar</h1>
          <p className="text-xl mt-2">MERN Stack Developer</p>
          <div className="mt-4 space-y-1">
            <p>📧 ritikparmar255@gmail.com</p>
            <p>📱 +91 96918-75770</p>
            <p>📍 Indore, Madhya Pradesh, India</p>
          </div>
        </div>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Education</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Bachelor of Technology in Computer Science</h3>
            <p>Shri Vaishnav Vidyapeeth Vishwavidyalaya</p>
            <p>2022 - Present</p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>HTML5, CSS3, JavaScript</li>
                <li>React.js, Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS, Material UI</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Node.js, Express.js</li>
                <li>MongoDB, PostgreSQL</li>
                <li>Prisma ORM</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Experience</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Freelance Web Developer</h3>
            <p className="italic">2023 - Present</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Developed responsive web applications using MERN stack</li>
              <li>Created custom e-commerce solutions and content management systems</li>
              <li>Implemented modern UI/UX designs with Tailwind CSS and Material UI</li>
              <li>Integrated AI features and third-party APIs</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Key Projects</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Personal Portfolio</h3>
              <p className="italic">Next.js, TypeScript, Tailwind CSS</p>
              <p>Modern, responsive portfolio website with dark mode and animations</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">E-commerce Platform</h3>
              <p className="italic">MERN Stack, Redux, Stripe</p>
              <p>Full-featured online store with payment integration and admin dashboard</p>
            </div>
          </div>
        </section>

        {/* Additional Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Additional Skills</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Version Control (Git)</li>
            <li>API Testing (Postman)</li>
            <li>Cloud Platforms (Vercel)</li>
            <li>UI/UX Design Principles</li>
            <li>Problem Solving & DSA</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume; 