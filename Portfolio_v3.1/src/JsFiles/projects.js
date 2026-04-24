// import chatApp from "./projects/chat-app.png";
import duoAtelier from "../assets/projects/duo-atelier.png";
import editor from "../assets/projects/editor.png";
import lightMode from "../assets/projects/light-mode.png";
import lofifyHome from "../assets/projects/lofify-home.png";
// import mernHome from "../assets/projects/mern-home.png";
import ochi from "../assets/projects/ochi.png";
import cocktail from "../assets/projects/cocktail.png";
// import youtubeBackend from "./assets/projects/youtube-backend.png";

import chatApp2 from "../assets/projects/chat-app2.png";
import backend from "../assets/projects/youtube-backend.png";
import k72Clone from "../assets/projects/k72-clone.png";
import kanbanBoard from "../assets/projects/kanbanBoard.png";
import miranda from "../assets/projects/miranda.png";
import Sundown from "../assets/projects/Sundown.png";
// import codeInspector from "../assets/projects/editor.png";
// import ochi from "../assets/projects/ochi.png";
// import lofifyHome from "../assets/projects/lofify-home.png";
// import mernHome from "../assets/projects/mern-home.png";

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
      "A real-time chat application built for speed, clarity, and smooth interaction. Powered by Socket.IO, it handles instant messaging, chat rooms, online presence, and unread states without breaking flow. Getting real-time systems to behave nicely wasn’t exactly easy—debugging socket events at 2 AM is a different kind of character development—but the result is a clean, responsive messaging experience that just works.",
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
      "A backend system inspired by YouTube’s core architecture—handling videos, likes, comments, playlists, and user flows. Built with Express and MongoDB, with Cloudinary managing media efficiently. This project was less about UI and more about thinking like a system designer—structuring APIs, handling relationships, and making sure everything scales logically. Not glamorous, but deeply satisfying.",
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
      "A detailed front-end recreation of the Miranda portfolio, focused on typography, layout precision, and scroll-based storytelling. This project pushed me into the world of fine UI details—where 1px matters more than you'd expect. Getting the motion and layout to feel 'just right' took more time than planned, but that’s exactly where the learning happened.",
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
      "A minimal yet animation-heavy clone of the Sundown website, built to explore high-end UI motion. From custom cursor behavior to loader timing and interaction feedback, everything was carefully tuned. This one was surprisingly time-consuming—animations look simple until you try to make them feel natural. A lot of tweaking, but worth it.",
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
      "A clean and responsive clone of the Ochi website built with React and TailwindCSS. The focus here was on layout accuracy and subtle transitions rather than overdoing animations. A solid exercise in recreating a polished UI while keeping performance in check.",
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
      "A visually rich clone of the K72 agency website, built using React, GSAP, and Tailwind CSS. The goal was to replicate immersive interactions and smooth motion across sections. This project leaned heavily into animation timing and scroll behavior—getting everything to feel fluid took patience (and a lot of trial and error).",
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
  {
    title: "Kanban Board (v1)",
    href: "https://kanbanboardv1.vercel.app/",
    dates: "2026",
    description:
      "A lightweight Kanban board built with vanilla JavaScript—no frameworks, just core logic. It supports drag-and-drop task management and localStorage persistence. Simple on the surface, but handling DOM updates and drag behavior cleanly without libraries was a surprisingly good challenge.",
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
        href: "https://github.com/rou-nak-cloud/JavaScript.js-Projects/tree/main/KanbanBoard",
      },
    ],
  },
  {
    title: "Cocktail Heaven - GSAP Animation Project",
    href: "https://coquetel-taupe.vercel.app/",
    dates: "2025",
    description:
      "An animation-focused web experience built around a cocktail theme, using GSAP and ScrollTrigger for dynamic visuals. From masked images to motion-driven UI, this project was all about experimenting with creative interactions. It’s one of those builds where you keep tweaking animations way longer than planned—because it’s actually fun.",
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
// New js file
