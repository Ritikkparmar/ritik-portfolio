import { StaticImageData } from 'next/image';

import portviewAI from '../../public/assets/projects/portview.png';
import jobhive from '../../public/assets/projects/job.png';
import trimmr from '../../public/assets/projects/url.png';
import welfixx from '../../public/assets/projects/welfixx.png';
import mentoroAI from '../../public/assets/projects/mentoroAI.png';

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
    title: 'MentoroAI',
    description: 'AI-powered sentiment analysis tool for social media and customer feedback.',
    image: mentoroAI,
    tech: ['React', 'Python', 'TensorFlow', 'FastAPI'],
    github: 'https://github.com/Ritikkparmar/sensai',
    demo: 'https://mentoro-six.vercel.app/'
  },
  {
    title: 'Welfixx',
    description: 'Platform for AI financial analysis',
    image: welfixx,
    tech: ['NextJs', 'Clerk', 'TailwindCSS', 'Shadcn', 'Node.js'],
    github: 'https://github.com/Ritikkparmar/welfixx',
    demo:'https://welfixx.vercel.app/'
  },
  {
    title: 'PortviewAI',
    description: 'Portfolio analysis and optimization platform using AI.',
    image: portviewAI,
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Python'],
    github: 'https://github.com/Ritikkparmar/PortView-AI.git'
  },
  {
    title: 'JobHive',
    description: 'Job application tracking and management system.',
    image: jobhive,
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Ritikkparmar/jobhive'
  },
  
  {
    title: 'Trimmr',
    description: 'URL shortening service with analytics.',
    image: trimmr,
    tech: ['Next.js', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/Ritikkparmar/trimmr',
    demo: 'https://trimmr-81tn.vercel.app/'
  }
];
