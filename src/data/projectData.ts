import { StaticImageData } from 'next/image';
import sensAI from '../../public/assets/projects/Aiapp.png';
import portviewAI from '../../public/assets/projects/portview.png';
import jobhive from '../../public/assets/projects/job.png';
import bloodDonate from '../../public/assets/projects/blood.png';
import trimmr from '../../public/assets/projects/url.png';

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
    github: 'https://github.com/Ritikkparmar/sensai',
    demo: 'https://sensai-demo.vercel.app'
  },
  {
    title: 'PortviewAI',
    description: 'Portfolio analysis and optimization platform using AI.',
    image: portviewAI,
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Python'],
    github: 'https://github.com/Ritikkparmar/portviewai'
  },
  {
    title: 'JobHive',
    description: 'Job application tracking and management system.',
    image: jobhive,
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Ritikkparmar/jobhive'
  },
  {
    title: 'Blood Donation Network',
    description: 'Platform connecting blood donors with those in need.',
    image: bloodDonate,
    tech: ['React Native', 'Firebase', 'Node.js'],
    github: 'https://github.com/Ritikkparmar/blood-donation'
  },
  {
    title: 'Trimmr',
    description: 'URL shortening service with analytics.',
    image: trimmr,
    tech: ['Next.js', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/Ritikkparmar/trimmr'
  }
];
