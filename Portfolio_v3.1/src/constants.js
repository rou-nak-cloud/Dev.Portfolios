// Define all navigation items in one array
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaBlog,
  FaProjectDiagram,
  FaTools,
  FaLinkedin,
} from "react-icons/fa";
import { SiHomebridge } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiFramer, SiGreensock } from "react-icons/si";
import { MdDesignServices, MdOutlineArrowOutward } from "react-icons/md";
import { SiFigma } from "react-icons/si";
import { FaCode } from "react-icons/fa";

const navList = [
  {
    label: "Home",
    icon: SiHomebridge,
    to: "/",
    type: "route",
  },
  {
    label: "Blogs",
    icon: FaBlog,
    to: "/blogs",
    type: "route",
  },
  {
    label: "Projects",
    icon: FaProjectDiagram,
    to: "/projects",
    type: "route",
  },
  {
    label: "Skills",
    icon: FaTools,
    to: "/skill",
    type: "hash",
  },
  {
    label: "GitHub",
    icon: FaGithub,
    to: "https://github.com/rou-nak-cloud",
    type: "external",
  },
  {
    label: "Twitter",
    icon: FaTwitter,
    to: "https://twitter.com/",
    type: "external",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    to: "https://www.linkedin.com/in/rounak-bakshi/",
    type: "external",
  },
];

// desktopNavLinks
const desktopNavList = [
  {
    label: "Blogs",
    icon: null,
    to: "/blogs",
    type: "route",
    badge: "<Hi/>",
  },
  {
    label: "Projects",
    icon: null,
    to: "/projects",
    type: "route",
  },
  {
    label: "Skills",
    icon: null,
    to: "/skill",
    type: "route",
  },
  {
    icon: FaGithub,
    to: "https://github.com/rou-nak-cloud",
    type: "external",
  },
  {
    icon: FaTwitter,
    to: "https://twitter.com/",
    type: "external",
  },
  {
    icon: FaLinkedin,
    to: "https://www.linkedin.com/in/rounak-bakshi/",
    type: "external",
  },
];

const aboutItems = [
  {
    label: "github projects total",
    icon: FaGithub,
    number: 35,
  },
  {
    label: "Blog posts ",
    icon: FaBlog,
    number: 0,
  },
];
const learningItems = [
  {
    title: "HTML, CSS & JavaScript",
    subtitle: "Core Web Fundamentals",
    content: {
      leftTitle: "THE FOUNDATION",
      leftText:
        "Built a strong base in frontend development using semantic HTML, modern CSS (Flexbox, Grid), and JavaScript fundamentals. Focused on writing clean, accessible markup and responsive layouts while understanding how the browser works under the hood.",

      rightTitle: "KEY HIGHLIGHTS",
      points: [
        "Semantic and accessible HTML structure",
        "Responsive layouts using Flexbox & Grid",
        "Tailwind CSS for scalable UI",
        "DOM manipulation & events",
        "Async JavaScript (Promises, Fetch, APIs)",
      ],
    },
    icon: FaCode,
    date: "2023 – Present",
  },
  {
    title: "React & Advanced Patterns",
    subtitle: "Component Architecture",
    content: {
      leftTitle: "THE APPROACH",
      leftText:
        "Focused on building scalable React applications using reusable component patterns and clean state management. Exploring modern practices that make apps maintainable and production-ready.",

      rightTitle: "KEY HIGHLIGHTS",
      points: [
        "Reusable component architecture",
        "Custom hooks & abstraction",
        "State & prop management patterns",
        "Performance optimization techniques",
        "Clean and modular folder structure",
      ],
    },
    icon: FaReact,
    date: "2025 – Present",
  },
  {
    title: "GSAP + Framer Motion",
    subtitle: "Advanced Web Animations & Interactions",
    content: {
      leftTitle: "THE APPROACH",
      leftText:
        "Combining GSAP and Framer Motion to craft smooth, meaningful animations that enhance user experience. Focused on motion that feels natural, responsive, and purposeful rather than decorative.",

      rightTitle: "KEY HIGHLIGHTS",
      points: [
        "Scroll-triggered animations",
        "Timeline-based motion choreography",
        "Page & layout transitions",
        "Gesture-based interactions",
        "Performance-focused animation design",
      ],
    },
    icon: SiGreensock,
    date: "2025 – Present",
  },
  {
    title: "Modern UI/UX & Figma",
    subtitle: "Design Systems & Interaction",
    content: {
      leftTitle: "THE PROCESS",
      leftText:
        "Designing clean, minimal, and user-focused interfaces using proper spacing, typography, and layout systems. Using Figma to prototype and translate ideas into structured frontend implementations.",

      rightTitle: "KEY HIGHLIGHTS",
      points: [
        "Typography & spacing systems",
        "Component-based design in Figma",
        "Auto-layout & responsive design",
        "Design-to-code workflow",
        "Micro-interactions for better UX",
      ],
    },
    icon: MdDesignServices,
    date: "Ongoing",
  },
];
// {
//   title: "Modern UI / UX",
//   subtitle: "Minimal Interfaces & Interaction Design",
//   description:
//     "Exploring modern UI design focused on minimal, aesthetic interfaces and refined interaction patterns. Practicing typography hierarchy, layout balance, and subtle micro-interactions to create clean, intuitive, and visually engaging web experiences with the help of daisy ui or shadcn ui components to save time and effort.",
//   icon: MdDesignServices,
//   date: "Ongoing",
// },
// {
//   title: "Figma",
//   subtitle: "UI Design & Prototyping",
//   description:
//     "Learning to design modern user interfaces using Figma. Practicing layout systems, design components, auto-layout, and responsive design principles while creating clean UI prototypes before development. This helps translate design ideas into structured and scalable frontend implementations.",
//   icon: SiFigma,
//   date: "Ongoing",
// },
export { navList, desktopNavList, aboutItems, learningItems };

export const educations = [
  {
    title: "Madhyamik Examination (Matriculation)",
    institution: "West Bengal Board of Secondary Education",
    link: "https://wbbse.wb.gov.in/",
    icon: MdOutlineArrowOutward,
    date: "2019",
    contents: [
      "Completed secondary education with a strong foundation in Science, Mathematics, and English.",
      "Participated in school-level science exhibitions and extracurricular activities.",
    ],
  },
  {
    title: "Higher Secondary Examination (HS)",
    institution: "West Bengal Council of Higher Secondary Education",
    link: "https://wbchse.wb.gov.in/",
    icon: MdOutlineArrowOutward,
    date: "2019-2021",
    contents: [
      "Specialized in Science stream with subjects including Physics, Chemistry, Mathematics. Fall in love for Electronics as well as in Computer Science from this period.",
      "Engaged in coding workshops during this period.",
    ],
  },
  {
    title:
      "Bachelor of Technology (B.Tech) in Electronics and Telecommunication Engineering",
    institution: "Guru Nanak Institute of Technology, Kolkata",
    icon: MdOutlineArrowOutward,
    link: "https://gnit.ac.in/",
    date: "2021-2025",
    contents: [
      "Pursuing a degree in Electronics and Telecommunication Engineering with coursework in Data Structures, Algorithms, Web Development, and Database Management System",
      "Worked on personal and academic projects using technologies like React, Node.js, MongoDB, and Three.js.",
      "Learn various frontend technologies to make better workflow with Motion, Aceternity ui, Daisy ui, and Magic ui.",
      "Currently participating in hackathons, coding contests to enhance practical skills.",
    ],
  },
];

export const skills = [
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
  // { name: "Three.js", icon: "https://cdn.simpleicons.org/threedotjs/000000" },
  // { name: "Next.js", icon: "https://simpleicons.org/icons/nextdotjs.svg" }, //
  // { name: "Typescript", icon: "https://simpleicons.org/icons/typescript.svg" },

  { name: "GSAP", icon: "https://cdn.simpleicons.org/greensock/88CE02" },
  { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/0055FF" },

  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },

  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },

  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
];

// constants/index.js or constants.js
export const interests = [
  {
    step: "01",
    title: "Coding",
    date: "Current Passion", // This can appear in the top-right metadata
    desc: "Building applications and exploring new technologies. I love turning ideas into reality through clean and efficient code. My focus is on React and modern CSS frameworks.",
  },
  // {
  //   step: "02",
  //   title: "Traveling",
  //   date: "Soul Searching",
  //   desc: "Exploring new places, experiencing different cultures, and meeting people from around the world keeps me inspired and open-minded about design and life.",
  // },
  {
    step: "03",
    title: "Calisthenics",
    date: "Daily Discipline",
    desc: "Bodyweight training helps me stay fit and disciplined. It challenges me to grow stronger both physically and mentally, much like solving a complex bug.",
  },
  {
    step: "04",
    title: "Watching YouTube",
    date: "Digital Horizon",
    desc: "Beyond just entertainment, YouTube is my personal university. I use it to master new development frameworks, stay updated on tech trends, and explore diverse perspectives—all while appreciating the high-quality storytelling and creative editing of modern content creators.",
  },
  {
    step: "05",
    title: "Listening Music",
    date: "Deep Focus",
    desc: "I love to hear music during coding; it keeps me focused and makes the creative process more enjoyable. It's the rhythm behind my development workflow.",
  },
];

import { LuArrowUpRight, LuPhone } from "react-icons/lu";
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
  // {
  //   title: "Ochi Website Clone",
  //   href: "https://ochi-website.onrender.com",
  //   dates: "2024",
  //   description:
  //     "A faithful replica of the award-winning Ochi website built with React and TailwindCSS, focusing on pixel-perfect layout, modern UI design, smooth transitions, and responsive performance.",
  //   image: ochi,
  //   tags: ["React", "TailwindCSS", "UI/UX", "Responsive Design"],
  //   links: [
  //     { type: "Website", href: "https://ochi-website.onrender.com" },
  //     {
  //       type: "Source",
  //       href: "https://github.com/rou-nak-cloud/Ochi_C-Website",
  //     },
  //   ],
  // },
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
  // {
  //   title: "Cocktail Heaven - GSAP Animation Project",
  //   href: "https://coquetel-taupe.vercel.app/",
  //   dates: "2025",
  //   description:
  //     "An interactive cocktail-themed web experience built to explore modern web animations using GSAP. The project features smooth scroll-triggered effects, animated UI elements, masked imagery, and a dynamic cocktail carousel. Designed with React and Tailwind CSS, it focuses on creating a visually engaging interface inspired by award-winning cocktail websites.",
  //   image: cocktail,
  //   tags: [
  //     "React",
  //     "GSAP",
  //     "TailwindCSS",
  //     "ScrollTrigger",
  //     "UI Animation",
  //     "Responsive Design",
  //   ],
  //   links: [
  //     {
  //       type: "Website",
  //       href: "https://coquetel-taupe.vercel.app/",
  //     },
  //     {
  //       type: "Source",
  //       href: "https://github.com/rou-nak-cloud/Cocktail_Drink",
  //     },
  //   ],
  // },
];

export const interest = [
  {
    title: "Reading Books",
    desc: "Reading is one of the ways I expand my perspective and keep my curiosity alive. I enjoy exploring motivational books that inspire growth, knowledge-driven books that help me understand new ideas, and biographies that offer insights into the journeys of remarkable people. I also love diving into horror stories for the thrill and imagination they bring. Each book gives me a different lens to see the world, fueling both my creativity and my mindset.",
  },
  // {
  //   title: "Traveling",
  //   desc: "Traveling allows me to step outside my routine and experience the world from different perspectives. Exploring new places, cultures, and environments fuels my creativity and curiosity. Every journey teaches me something new, whether it's understanding different ways of life or simply appreciating the beauty of unfamiliar landscapes.",
  // },
  {
    title: "Calisthenics",
    desc: "Calisthenics has become an important part of my daily life. Training with bodyweight exercises not only helps me stay physically fit but also builds discipline, patience, and mental resilience. Progress in calisthenics requires consistency and focus, and the process of gradually mastering new movements motivates me to push my limits and improve every day.",
  },
  // {
  //   title: "Watching Movies",
  //   desc: "Movies are a powerful form of storytelling that I deeply enjoy. From visually stunning cinematography to meaningful narratives, films inspire me in many ways. I appreciate how directors and creators bring emotions and ideas to life through visuals, music, and storytelling. Watching movies often sparks creativity and sometimes even influences how I think about design and user experiences.",
  // },
  {
    title: "Listening Music",
    desc: "Music plays a big role in my daily routine, especially while coding or working on creative projects. The right music helps me stay focused, relaxed, and productive. Different genres bring different moods — sometimes energizing me during intense work sessions and other times helping me unwind and think more creatively.",
  },
];

export const stats = [
  {
    number: "2+",
    label: "Full Stack Projects",
    desc: "Developed complete web applications with modern frontend and backend technologies, focusing on clean architecture and scalable design.",
  },
  {
    number: "10+",
    label: "Reusable UI Components",
    desc: "Designed modular and reusable components using React and TailwindCSS to create consistent and maintainable user interfaces like Magic ui and Shadcn ui.",
  },
  {
    number: "600+",
    label: "GitHub Commits last year",
    desc: "Consistently pushing improvements, features, and experiments while actively maintaining and refining personal development projects.",
  },
  {
    number: "5+",
    label: "Technologies Used",
    desc: "Comfortable working with modern tools including React, Node.js, Express, MongoDB, framer motion, GSAP and TailwindCSS to build efficient applications.",
  },
  {
    number: "2nd",
    label: "Ranked 2nd in 3rd Year College Examination",
    desc: "Achieved the second position in my third-year university examinations, reflecting consistent dedication and a disciplined approach to learning.",
  },
];
import {
  LuGithub,
  LuLinkedin,
  LuYoutube,
  LuMapPin,
  LuMail,
} from "react-icons/lu";

export const digitalSpaces = [
  { label: "Github", icon: LuGithub, href: "https://github.com/rou-nak-cloud" },
  {
    label: "LinkedIn",
    icon: LuLinkedin,
    href: "https://www.linkedin.com/in/rounak-bakshi/",
  },
  { label: "YouTube", icon: LuYoutube, href: "#" },
];

export const contactInfo = [
  {
    label: "github.rounak.19@gmail.com",
    icon: LuMail,
    href: "mailto:github.rounak.19@gmail.com",
  },
  {
    label: "+91 8509061321",
    icon: LuPhone,
    // href: "null",
  },
  { label: "Kolkata(WB), India", icon: LuMapPin, href: "#" },
];
