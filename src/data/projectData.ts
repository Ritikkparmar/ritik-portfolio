import { StaticImageData } from 'next/image';
import sensAI from '../../public/assets/projects/sensai.png';
import portviewAI from '../../public/assets/projects/portviewai.png';
import jobhive from '../../public/assets/projects/jobhive.png';
import bloodDonate from '../../public/assets/projects/blooddonate.png';
import trimmr from '../../public/assets/projects/trimmr.png';
import devThreads from '../../public/assets/projects/devthreads.png';

export interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  tech: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'SensAI',
    description: 'AI-powered sentiment analysis tool for social media and customer feedback.',
    image: sensAI,
    tech: ['React', 'Python', 'TensorFlow', 'FastAPI'],
    github: 'https://github.com/yourusername/sensai',
    demo: 'https://sensai-demo.vercel.app'
  },
  {
    title: 'PortviewAI',
    description: 'Portfolio analysis and optimization platform using AI.',
    image: portviewAI,
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Python'],
    github: 'https://github.com/yourusername/portviewai'
  },
  {
    title: 'JobHive',
    description: 'Job application tracking and management system.',
    image: jobhive,
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    demo: 'https://jobhive.vercel.app'
  },
  {
    title: 'Blood Donation Network',
    description: 'Platform connecting blood donors with those in need.',
    image: bloodDonate,
    tech: ['React Native', 'Firebase', 'Node.js'],
    github: 'https://github.com/yourusername/blood-donation'
  },
  {
    title: 'Trimmr',
    description: 'URL shortening service with analytics.',
    image: trimmr,
    tech: ['Next.js', 'PostgreSQL', 'Prisma'],
    demo: 'https://trimmr.vercel.app'
  },
  {
    title: 'DevThreads',
    description: 'Developer community platform for sharing knowledge.',
    image: devThreads,
    tech: ['Vue.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/devthreads'
  }
];
