
// import duoAtelier from "../assets/projects/duo-atelier.png";
// import editor from "../assets/projects/editor.png";
// import lightMode from "../assets/projects/light-mode.png";
// import lofifyHome from "../assets/projects/lofify-home.png";
import ochi from "../assets/projects/ochi.png";
import cocktail from "../assets/projects/cocktail.png";
import chatApp2 from "../assets/projects/chat-app2.png";
import backend from "../assets/projects/youtube-backend.png";
import k72Clone from "../assets/projects/k72-clone.png";
import kanbanBoard from "../assets/projects/kanbanBoard.png";
import miranda from "../assets/projects/miranda.png";
import Sundown from "../assets/projects/Sundown.png";

export const projects = [
  {
    title: "Whispr - Real-time Chat Application",
    category: "React",
    href: "https://whispr-a-chat-app.onrender.com",
    dates: "2025",
    description:
      "A real-time chat application built for speed, clarity, and smooth interaction. Powered by Socket.IO, it handles instant messaging, chat rooms, online presence, and unread states without breaking flow. Getting real-time systems to behave nicely wasn’t exactly easy—debugging socket events at 2 AM is a different kind of character development—but the result is a clean, responsive messaging experience that just works.",
    image: chatApp2,
    performance: 94,
    challenge:
      "Handling real-time state sync across multiple clients without lag.",
    learned:
      "Deep understanding of Socket.IO events and MongoDB change streams.",
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
    category: "Backend",
    href: "https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj",
    dates: "2025",
    description:
      "A backend system inspired by YouTube’s core architecture—handling videos, likes, comments, playlists, and user flows. Built with Express and MongoDB, with Cloudinary managing media efficiently. This project was less about UI and more about thinking like a system designer—structuring APIs, handling relationships, and making sure everything scales logically. Not glamorous, but deeply satisfying.",
    image: backend,
    performance: 98,
    challenge:
      "Designing a scalable relational-style schema in a NoSQL database.",
    learned: "Mastered JWT authentication and complex Mongoose aggregations.",
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
    category: "Animations",
    href: "https://frontend-miranda19.vercel.app/",
    dates: "2025",
    description:
      "A detailed front-end recreation of the Miranda portfolio, focused on typography, layout precision, and scroll-based storytelling. This project pushed me into the world of fine UI details—where 1px matters more than you'd expect. Getting the motion and layout to feel 'just right' took more time than planned, but that’s exactly where the learning happened.",
    image: miranda,
    performance: 91,
    challenge:
      "Replicating high-fidelity typography layouts that stay responsive.",
    learned: "Mastered viewport units and CSS clamp for fluid typography.",
    tags: ["HTML", "CSS", "JavaScript", "GSAP", "Lenis"],
    links: [
      { type: "Website", href: "https://frontend-miranda19.vercel.app/" },
      {
        type: "Source",
        href: "https://github.com/rou-nak-cloud/Frontend-Projects/tree/main/Miranda(GOD)",
      },
    ],
  },
  {
    title: "Modern Animated Sundown Clone",
    category: "Animations",
    href: "https://frontend-projects-gasj.vercel.app/",
    dates: "Dec 2025",
    description:
      "A minimal yet animation-heavy clone of the Sundown website, built to explore high-end UI motion. From custom cursor behavior to loader timing and interaction feedback, everything was carefully tuned. This one was surprisingly time-consuming—animations look simple until you try to make them feel natural. A lot of tweaking, but worth it.",
    image: Sundown,
    performance: 89,
    challenge: "Optimizing heavy GSAP animations for mobile performance.",
    learned:
      "Learned to use will-change and transform: translateZ(0) for GPU acceleration.",
    tags: ["HTML5", "CSS3", "JavaScript", "GSAP", "Lenis"],
    links: [
      { type: "Website", href: "https://frontend-projects-gasj.vercel.app/" },
      {
        type: "Source",
        href: "https://github.com/rou-nak-cloud/Frontend-Projects/tree/main/Sundown",
      },
    ],
  },
  {
    title: "Ochi Website Clone",
    category: "React",
    href: "https://ochi-website.onrender.com",
    dates: "2024",
    description:
      "A clean and responsive clone of the Ochi website built with React and TailwindCSS. The focus here was on layout accuracy and subtle transitions rather than overdoing animations. A solid exercise in recreating a polished UI while keeping performance in check.",
    image: ochi,
    performance: 96,
    challenge: "Creating complex SVG paths and animating them on scroll.",
    learned: "Gained proficiency in Framer Motion variants and layout prop.",
    tags: ["React", "TailwindCSS", "Framer Motion"],
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
    category: "Animations",
    href: "https://k72-ca-clone-25y5.onrender.com/",
    dates: "2024",
    description:
      "A visually rich clone of the K72 agency website, built using React, GSAP, and Tailwind CSS. The goal was to replicate immersive interactions and smooth motion across sections. This project leaned heavily into animation timing and scroll behavior—getting everything to feel fluid took patience (and a lot of trial and error).",
    image: k72Clone,
    performance: 92,
    challenge: "Synchronizing nested ScrollTriggers across multiple sections.",
    learned: "Effective use of GSAP Timelines for complex sequencing.",
    tags: ["React", "GSAP", "TailwindCSS", "Vite"],
    links: [
      { type: "Website", href: "https://k72-ca-clone-25y5.onrender.com/" },
      { type: "Source", href: "https://github.com/rou-nak-cloud/k72.ca.clone" },
    ],
  },
  {
    title: "Kanban Board (v1)",
    category: "React",
    href: "https://kanbanboardv1.vercel.app/",
    dates: "2026",
    description:
      "A lightweight Kanban board built with vanilla JavaScript—no frameworks, just core logic. It supports drag-and-drop task management and localStorage persistence. Simple on the surface, but handling DOM updates and drag behavior cleanly without libraries was a surprisingly good challenge.",
    image: kanbanBoard,
    performance: 100,
    challenge: "Handling manual DOM manipulation without state sync bugs.",
    learned: "Deep dive into the native HTML5 Drag and Drop API.",
    tags: ["JavaScript", "localStorage", "Drag & Drop API"],
    links: [
      { type: "Website", href: "https://kanbanboardv1.vercel.app/" },
      {
        type: "Source",
        href: "https://github.com/rou-nak-cloud/JavaScript.js-Projects/tree/main/KanbanBoard",
      },
    ],
  },
  {
    title: "Cocktail Heaven",
    category: "Animations",
    href: "https://coquetel-taupe.vercel.app/",
    dates: "2025",
    description:
      "An animation-focused web experience built around a cocktail theme, using GSAP and ScrollTrigger for dynamic visuals. From masked images to motion-driven UI, this project was all about experimenting with creative interactions. It’s one of those builds where you keep tweaking animations way longer than planned—because it’s actually fun.",
    image: cocktail,
    performance: 95,
    challenge: "Implementing smooth image masking transitions on hover.",
    learned: "Using clip-path and GSAP to create unique reveal effects.",
    tags: ["React", "GSAP", "TailwindCSS", "ScrollTrigger"],
    links: [
      { type: "Website", href: "https://coquetel-taupe.vercel.app/" },
      {
        type: "Source",
        href: "https://github.com/rou-nak-cloud/Cocktail_Drink",
      },
    ],
  },
];
