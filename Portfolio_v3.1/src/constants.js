// Define all navigation items in one array
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaBlog,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";
import { SiHomebridge } from "react-icons/si";

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
    label: "Instagram",
    icon: FaInstagram,
    to: "https://instagram.com/",
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
    icon: FaInstagram,
    to: "https://instagram.com/",
    type: "external",
  },
];

export { navList, desktopNavList };
