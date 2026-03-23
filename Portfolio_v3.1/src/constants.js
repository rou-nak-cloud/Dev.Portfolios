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

const navList = [
  {
    label: "Home",
    icon: SiHomebridge,
    to: "/",
    type: "internal",
  },
  {
    label: "Blogs",
    icon: FaBlog,
    to: "/blogs",
    type: "external",
    badge: "Coders/",
  },
  {
    label: "Projects",
    icon: FaProjectDiagram,
    to: "/projects",
    type: "external",
  },
  {
    label: "Skills",
    icon: FaTools,
    to: "/skills",
    type: "internal",
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
  // External links with text
  {
    label: "Blogs",
    icon: null,
    to: "/blogs",
    type: "external",
    badge: "<Hi/>",
  },
  {
    label: "Projects",
    icon: null,
    to: "/projects",
    type: "external",
  },

  // Internal link with text
  {
    label: "Skills",
    icon: FaTools,
    to: "#skills",
    type: "internal",
  },

  // Social icons only
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
    title: "React & Advanced React Patterns",
    subtitle: "Component Architecture",
    description:
      "Learning scalable component architecture, compound components, render props, custom hooks and state patterns used in production React applications.",
    icon: FaReact,
    date: "2025 – Present",
  },
  {
    title: "Framer Motion",
    subtitle: "UI Animations & Micro-interactions",
    description:
      "Exploring modern animation systems including page transitions, layout animations, gesture animations, dragging elements and micro-interactions for polished UI. It's easy as compare to Gsap animations.",
    icon: SiFramer,
    date: "2025 – Present",
  },
  {
    title: "GSAP",
    subtitle: "High-performance Web Animations",
    description:
      "Currently learning timeline based animations, scroll triggers, complex motion choreography and performance optimized animation systems. Gsap makes a site from zero to hero by it's animation and interaction systems.",
    icon: SiGreensock,
    date: "Ongoing",
  },
  {
    title: "Modern UI / UX",
    subtitle: "Minimal Interfaces & Interaction Design",
    description:
      "Exploring modern UI design focused on minimal, aesthetic interfaces and refined interaction patterns. Practicing typography hierarchy, layout balance, and subtle micro-interactions to create clean, intuitive, and visually engaging web experiences with the help of daisy ui or shadcn ui components to save time and effort.",
    icon: MdDesignServices,
    date: "Ongoing",
  },
  {
    title: "Figma",
    subtitle: "UI Design & Prototyping",
    description:
      "Learning to design modern user interfaces using Figma. Practicing layout systems, design components, auto-layout, and responsive design principles while creating clean UI prototypes before development. This helps translate design ideas into structured and scalable frontend implementations.",
    icon: SiFigma,
    date: "Ongoing",
  },
];
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

export const interests = [
  {
    title: "Coding",
    desc: "Building applications, and exploring new technologies. I love turning ideas into reality through clean and efficient code.",
  },
  {
    title: "Traveling",
    desc: "Exploring new places, experiencing different cultures, and meeting people from around the world keeps me inspired and open-minded.",
  },
  {
    title: "Calisthenics",
    desc: "Bodyweight training helps me stay fit, disciplined, and constantly challenge myself to grow stronger both physically and mentally.",
  },
  {
    title: "Watching Movies",
    desc: "For me, movies are not just entertainment. Whether it’s a classic masterpiece or a thriller, I love the storytelling, the cinematography, and the reflection.",
  },
  {
    title: "Listening Music",
    desc: "I love to hear music during coding, it keeps me focused and makes the process more enjoyable. Music keeps me focused while coding.",
  },
];
