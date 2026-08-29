import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Sistem Pembayaran Listrik (PLN)',
    description: 'A web application based on Laravel 10 to record, calculate, and manage customer electricity bills. The system is equipped with role-based authentication, electricity usage input, automatic bill calculation, and a payment receipt printing feature.',
    imageUrl: 'https://images.pexels.com/photos/3829207/pexels-photo-3829207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    repoUrl: 'https://github.com/rahmatrix/app_pln',
    featured: true
  },
  {
    id: '2',
    title: 'Curhat Space',
    description: 'Curhat Space adalah aplikasi chatbot berbasis React + TypeScript yang dirancang sebagai "teman curhat" digital. Menggunakan AI untuk memberikan respon yang bersahabat, mendukung respons emosional, dan membantu pengguna meluapkan perasaan dalam suasana yang nyaman.',
    imageUrl: 'https://i.pinimg.com/1200x/cf/e2/4e/cfe24eb1452b37aec25e16363f765607.jpg',
    technologies: ['React', 'TypeScript', 'Supabase', 'AI', 'Tailwind CSS'],
    repoUrl: 'https://github.com/rahmatrix/curhat-space',
    demoUrl: 'https://serenity-coral.vercel.app',
    featured: true
  },
  {
    id: '3',
    title: 'Scrapbook',
    description: 'A daily streak system & portfolio for your projects. Scrapbook allows you to share updates on the things you are doing with the rest of the Hack Club community.',
    imageUrl: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Next.js', 'JavaScript', 'CSS'],
    repoUrl: 'https://github.com/rahmatrix/scrapbook',
    demoUrl: 'https://scrapbook-five.vercel.app/',
  }
];
