// import chatApp from "./projects/chat-app.png";
import duoAtelier from "./assets/projects/duo-atelier.png";
import editor from "./assets/projects/editor.png";
import lightMode from "./assets/projects/light-mode.png";
import lofifyHome from "./assets/projects/lofify-home.png";
// import mernHome from "./assets/projects/mern-home.png";
import ochi from "./assets/projects/ochi.png";
import cocktail from "./assets/projects/cocktail.png";
// import youtubeBackend from "./assets/projects/youtube-backend.png";

import chatApp2 from "./assets/projects/chat-app2.png";
import backend from "./assets/projects/youtube-backend.png";
import k72Clone from "./assets/projects/k72-clone.png";
import kanbanBoard from "./assets/projects/kanbanBoard.png";
import miranda from "./assets/projects/miranda.png";
import Sundown from "./assets/projects/Sundown.png";
// import codeInspector from "./assets/projects/editor.png";
// import ochi from "./assets/projects/ochi.png";
// import lofifyHome from "./assets/projects/lofify-home.png";
// import mernHome from "./assets/projects/mern-home.png";

export const projectImages = [
  // chatApp,
  duoAtelier,
  editor,
  lightMode,
  lofifyHome,
  // mernHome,
  ochi,
  cocktail,
  backend,
  k72Clone,
  kanbanBoard,
  miranda,
  Sundown,
  // youtubeBackend,
];

export const projects = [
  {
    title: "Whispr - Real-time Chat Application",
    href: "https://whispr-a-chat-app.onrender.com",
    dates: "2025",
    description:
      "A modern real-time chat platform enabling instant messaging with WebSocket communication using Socket.IO. Built with React, Node.js, Express, and MongoDB with features like chat rooms, online status, unread notifications, and multi-user messaging.",
    image: chatApp2,
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "TailwindCSS",
    ],
    links: [
      { type: "Website", href: "https://whispr-a-chat-app.onrender.com" },
      { type: "Source", href: "https://github.com/rou-nak-cloud/Whispr" },
    ],
  },
  {
    title: "YouTube Backend Clone",
    href: "https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj",
    dates: "2025",
    description:
      "A backend system replicating core YouTube functionalities including video uploads, likes, comments, playlists, and user interactions. Built using Express.js with MongoDB and Cloudinary for scalable media storage.",
    image: backend,
    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "REST API",
    ],
    links: [
      {
        type: "Website",
        href: "https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj",
      },
      {
        type: "Source",
        href: "https://github.com/rou-nak-cloud/Backend-Youtube",
      },
    ],
  },
  {
    title: "Miranda - Creative Portfolio Clone",
    href: "https://frontend-miranda19.vercel.app/",
    dates: "2025",
    description:
      "A front-end clone of the Miranda creative portfolio website, focusing on smooth typography, motion design, and an interactive scrolling experience. Built to master layout structuring with CSS and advanced DOM manipulation.",
    image: miranda,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "GSAP Animation Library",
      "Lenis Smooth Scrolling",
      "UI/UX Workflow",
    ],
    links: [
      {
        type: "Website",
        href: "https://frontend-miranda19.vercel.app/",
      },
      {
        type: "Source",
        href: "https://github.com/rou-nak-cloud/Frontend-Projects/tree/main/Miranda(GOD)",
      },
    ],
  },
  {
    title: "Modern Animated Sundown Clone",
    href: "https://frontend-projects-gasj.vercel.app/",
    dates: "Dec 2025",
    description:
      "A clean, minimal, and animation-driven cloning of the Sundown Website. This project focuses on delivering a high-end visual experience through custom cursor effects, optimized loader animations, and a fixed image interaction system.",
    image: Sundown,
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "GSAP",
      "Lenis",
      "Responsive Design",
    ],
    links: [
      {
        type: "Website",
        href: "https://frontend-projects-gasj.vercel.app/",
      },
      {
        type: "Source",
        href: "https://github.com/rou-nak-cloud/Frontend-Projects/tree/main/Sundown",
      },
    ],
  },
  {
    title: "Ochi Website Clone",
    href: "https://ochi-website.onrender.com",
    dates: "2024",
    description:
      "A faithful replica of the award-winning Ochi website built with React and TailwindCSS, focusing on pixel-perfect layout, modern UI design, smooth transitions, and responsive performance.",
    image: ochi,
    tags: ["React", "TailwindCSS", "UI/UX", "Responsive Design"],
    links: [
      { type: "Website", href: "https://ochi-website.onrender.com" },
      {
        type: "Source",
        href: "https://github.com/rou-nak-cloud/Ochi_C-Website",
      },
    ],
  },
  {
    title: "K72 Creative Agency Website Clone",
    href: "https://k72-ca-clone-25y5.onrender.com/",
    dates: "2024",
    description:
      "A sleek and fully responsive clone of the K72 Creative Agency website built using React, GSAP, and Tailwind CSS. This project recreates the immersive interactions and animations of the original award-winning site, focusing on smooth scrolling effects, dynamic visuals, and a modern component-based frontend architecture.",
    image: k72Clone,
    tags: [
      "React",
      "GSAP",
      "TailwindCSS",
      "Vite",
      "Responsive Design",
      "Frontend Animation",
    ],
    links: [
      {
        type: "Website",
        href: "https://k72-ca-clone-25y5.onrender.com/",
      },
      {
        type: "Source",
        href: "https://github.com/rou-nak-cloud/k72.ca.clone",
      },
    ],
  },
  // {
  //   title: "Lofify - Music Streaming Platform",
  //   href: "",
  //   dates: "2025",
  //   description:
  //     "A full-stack music streaming platform with a Spotify-like UI and admin dashboard for managing songs, albums, and media files with responsive playback controls.",
  //   image: lofifyHome,
  //   tags: [
  //     "React",
  //     "Node.js",
  //     "Express",
  //     "MongoDB",
  //     "Music Player",
  //     "Dashboard",
  //   ],
  //   links: [
  //     { type: "Source", href: "https://github.com/rou-nak-cloud/Lofiify" },
  //   ],
  // },
  {
    title: "Kanban Board (v1)",
    href: "https://kanbanboardv1.vercel.app/",
    dates: "2026",
    description:
      "A simple Kanban Board built with Vanilla JavaScript, supporting drag-and-drop task management, task persistence using localStorage, and dynamic UI updates. This version focuses on core Kanban functionality without any frameworks.",
    image: kanbanBoard,
    tags: [
      "Vanilla JavaScript",
      "localStorage",
      "Drag & Drop API",
      "Dynamic UI",
      "CSS3",
      "HTML5",
    ],
    links: [
      {
        type: "Website",
        href: "https://kanbanboardv1.vercel.app/",
      },
      {
        type: "Source",
        // Adding a placeholder based on your previous GitHub link style
        href: "https://github.com/rou-nak-cloud/JavaScript.js-Projects/tree/main/KanbanBoard",
      },
    ],
  },
  {
    title: "Cocktail Heaven - GSAP Animation Project",
    href: "https://coquetel-taupe.vercel.app/",
    dates: "2025",
    description:
      "An interactive cocktail-themed web experience built to explore modern web animations using GSAP. The project features smooth scroll-triggered effects, animated UI elements, masked imagery, and a dynamic cocktail carousel. Designed with React and Tailwind CSS, it focuses on creating a visually engaging interface inspired by award-winning cocktail websites.",
    image: cocktail,
    tags: [
      "React",
      "GSAP",
      "TailwindCSS",
      "ScrollTrigger",
      "UI Animation",
      "Responsive Design",
    ],
    links: [
      {
        type: "Website",
        href: "https://coquetel-taupe.vercel.app/",
      },
      {
        type: "Source",
        href: "https://github.com/rou-nak-cloud/Cocktail_Drink",
      },
    ],
  },
];
