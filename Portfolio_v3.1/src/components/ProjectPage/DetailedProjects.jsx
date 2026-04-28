// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaCoffee } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { projects } from "../../JsFiles/projects";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function DetailedProjects({ sectionRef }) {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4; // Adjust this number based on how many you want per page

  // Create a ref for the top of the archive section
  // const sectionTopRef = useRef(null); as i am in nesting component

  // Pagination Logic
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );

  // Scroll to top of section when page changes
  const handlePageChange = (newPage) => {
    // setCurrentPage(newPage);
    // // window.scrollTo({ top: 200, behavior: "smooth" });
    // // This will scroll the window to the top of our "Archive" header
    // if (sectionRef.current) {
    //   sectionRef.current.scrollIntoView({
    //     // top: 0,
    //     behavior: "smooth",
    //     block: "start",
    //   });
    // }

    // WITH GSAP
    // 1. Set the new page first
    setCurrentPage(newPage);

    // 2. Use GSAP to scroll to the parent ref
    if (sectionRef && sectionRef.current) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: sectionRef.current,
          offsetY: 150, // Add a little padding so it doesn't hit the very top
        },
        ease: "expo.out",
        onComplete: () => {
          // Optional: Temporarily disable ScrollTriggers to prevent "pushing"
          ScrollTrigger.refresh();
        },
      });
    }
  };

  return (
    <section className="py-24 bg-white">
      <div ref={sectionRef} className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-20">
          <h2 className="text-sm font-cabinet uppercase tracking-[0.3em] text-orange-600/80 mb-4">
            Archive — 2024 / 2026
          </h2>
          <p className="text-4xl md:text-6xl font-melodrama text-zinc-900 leading-tight max-w-4xl">
            Building takes time, a lot of coffee, and a bit of soul-crushing
            debugging.{" "}
            <span className="text-zinc-300 italic text-3xl md:text-5xl">
              Here is the proof.
            </span>
          </p>
        </div>

        {/* Projects List with Animation */}
        <div className="space-y-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "circOut" }}
            >
              {currentProjects.map((project, index) => (
                <ProjectRow
                  key={indexOfFirstProject + index}
                  project={project}
                  number={String(indexOfFirstProject + index + 1).padStart(
                    2,
                    "0",
                  )}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        <div className="mt-32 flex flex-col md:flex-row items-center justify-between border-t border-zinc-100 pt-10 gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-cabinet text-zinc-400 text-[10px] uppercase tracking-widest">
              Navigation
            </span>
            <p className="font-cabinet font-bold text-zinc-900">
              Page {currentPage} <span className="text-zinc-300 mx-2">/</span>{" "}
              {totalPages}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className={`group flex items-center gap-2 px-6 py-3 rounded-2xl font-cabinet font-bold text-sm transition-all border ${
                currentPage === 1
                  ? "border-zinc-100 text-zinc-200 cursor-not-allowed"
                  : "border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
              }`}
            >
              Previous
            </button>

            <button
              onClick={() =>
                handlePageChange(Math.min(currentPage + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`group flex items-center gap-3 px-8 py-3 rounded-2xl font-cabinet font-bold text-sm transition-all ${
                currentPage === totalPages
                  ? "bg-zinc-50 text-zinc-300 cursor-not-allowed"
                  : "bg-zinc-900 text-white hover:bg-emerald-600 shadow-xl shadow-emerald-900/10 active:scale-95"
              }`}
            >
              Next Page
              <MdOutlineArrowOutward className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, number }) {
  return (
    <div className="group flex flex-col gap-10 mb-40 last:mb-0">
      {/* 1. Number & Title Header */}
      <div className="flex items-end justify-between border-b border-zinc-100 pb-1">
        <div className="flex flex-col">
          <span className="text-5xl md:text-7xl font-cabinet font-light text-zinc-200 mb-2">
            {number}
          </span>
          <h3 className="text-2xl md:text-5xl font-melodrama text-zinc-900">
            {project.title}
          </h3>
        </div>

        <div className="hidden md:flex gap-4 mb-2">
          {project.links.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full border border-zinc-200 bg-white text-zinc-600 hover:bg-amber-50 hover:text-orange-500 transition-colors shadow-sm"
            >
              {link.type === "Source" ? (
                <FaGithub size={18} />
              ) : (
                <FaExternalLinkAlt size={16} />
              )}
            </motion.a>
          ))}
        </div>
      </div>

      {/* 2. Image Section */}
      <div className="relative w-full aspect-video md:aspect-21/9 overflow-hidden rounded-2xl md:rounded-[2.5rem] bg-zinc-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white/60 border border-white/30 -translate-x-5 group-hover:translate-x-0 transition-all duration-700">
            <FaCode size={20} />
          </div>
          <div className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white/60 border border-white/30 translate-x-5 group-hover:translate-x-0 transition-all duration-700">
            <FaCoffee size={20} />
          </div>
        </div>
      </div>

      {/* 3. Detailed Description Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-8">
          <p className="text-lg md:text-xl text-zinc-600 font-cabinet leading-relaxed">
            {project.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.tags.map((tag, i) => (
              <motion.span
                key={i}
                whileHover={{
                  y: -5,
                  backgroundColor: "#fff",
                  borderColor: "#fdba74",
                  color: "#d97706",
                }}
                className="cursor-default text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-4 py-1.5 border border-zinc-200 rounded-full transition-colors"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Secondary Info Column */}
        <div className="md:col-span-4 flex flex-col gap-8 md:pl-10 border-l border-zinc-100">
          <div>
            <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest block mb-2">
              Duration / Year
            </span>
            <p className="font-cabinet text-zinc-900 text-lg">
              {project.dates}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest block mb-1">
              Navigation
            </span>
            <div className="flex flex-col items-start gap-4">
              {project.links.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  initial="initial"
                  whileHover="hover"
                  className="group/link relative flex items-center gap-2 font-cabinet text-sm font-bold text-zinc-800 transition-colors hover:text-emerald-600"
                >
                  <span className="relative">
                    {link.type === "Source"
                      ? "GitHub Repository"
                      : "Live Preview"}
                    <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-emerald-500 transition-all duration-300 group-hover/link:w-full" />
                  </span>
                  <motion.span
                    variants={{
                      initial: { y: 0, x: 0 },
                      hover: { y: -4, x: 4 },
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <MdOutlineArrowOutward
                      size={16}
                      className="text-zinc-400 group-hover/link:text-emerald-500 transition-colors"
                    />
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
