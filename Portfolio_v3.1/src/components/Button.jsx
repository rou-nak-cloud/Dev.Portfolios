import { FaFileDownload } from "react-icons/fa";

export default function Button() {
  return (
    <a
      href="/resume.pdf" // your resume path
      download
      data-magnetic
      className="relative inline-flex items-center gap-2 px-4 py-1 text-sm md:text-md font-cabinet font-medium text-amber-950 rounded-full bg-amber-200/80 backdrop-blur-md hover:bg-amber-200 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/30 active:scale-95"
    >
      <FaFileDownload className="text-md" />
      <span>Download Resume</span>
    </a>
  );
}
