import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import Socket from './assets/Socket.png'
import FoodVision from './assets/FoodVision.png'
import Comfy_store from './assets/Comfy_store.png'
import SocialMedia from './assets/SocialMedia.png'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-sky-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-sky-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-sky-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://github.com/anuPhoenixbis/Medical-Chatbot',
    github: 'https://github.com/anuPhoenixbis/Medical-Chatbot',
    title: 'AI-Powered Medical Chatbot',
    text: 'This project strongly demonstrates your AI + backend systems thinking. You designed an LLM-powered chatbot with vector search, efficient data ingestion, and real-world query handling—showing you understand how AI systems are actually built and deployed, not just models in isolation.',
  },
  {
    id: nanoid(),
    img: Comfy_store,
    url: 'https://anubhavcomfystore.netlify.app/',
    github: 'https://github.com/anuPhoenixbis/Comfy-Store',
    title: 'Comfy Store',
    text: 'This project represents a practical frontend application, built to understand how modern React apps are structured, scaled, and maintained in real-world scenarios.',
  },
  {
    id: nanoid(),
    img: FoodVision,
    url: 'https://foodvisionmini-anubhavstream.streamlit.app/',
    github: 'https://github.com/anuPhoenixbis/Food_Vision_Mini',
    title: 'FoodVisionMini – Image Classification App',
    text: 'This project proves the core machine learning competence end-to-end: model selection, training, optimization, and deployment into a usable web interface. It shows that can take a deep learning model from research to a user-facing product.',
  },
  {
    id: nanoid(),
    img: Socket,
    url: 'https://chat-app-anubhav-1fd5a99cfb1e.herokuapp.com/',
    github: 'https://github.com/anuPhoenixbis/ChatApp_SocketIO',
    title: 'Real-Time Chat Application (Socket.IO)',
    text: 'This project showcases your move beyond CRUD APIs into real-time, event-driven backend systems. It proves you understand WebSockets, persistent connections, message broadcasting, and backend scalability—skills many juniors don’t have.',
  },
  {
    id: nanoid(),
    img: SocialMedia,
    url: 'https://sociableanubhav.netlify.app/',
    github: 'https://github.com/anuPhoenixbis/Sociable_server',
    title: 'Social Media App',
    text: 'Sociable is a full-stack social media application built with React, Node.js, Express, and MongoDB, featuring secure JWT authentication and media uploads.Deployed a production-ready client–server architecture using Netlify (frontend) and Render (backend), handling real-world challenges like CORS, environment configuration, and dependency conflicts.',
  },
];
