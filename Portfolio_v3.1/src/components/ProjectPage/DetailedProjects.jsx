// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaCoffee } from "react-icons/fa";
import { projects } from "../../JsFiles/projects"; // Assuming you save your array there
import { MdOutlineArrowOutward } from "react-icons/md";

export default function DetailedProjects() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
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

        {/* Projects List */}
        <div className="space-y-40">
          {projects.map((project, index) => (
            <ProjectRow
              key={index}
              project={project}
              number={String(index + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, number }) {
  return (
    <div className="group flex flex-col gap-10 ">
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

        {/* NEW: Scalable & Rotating Links */}
        <div className="hidden md:flex gap-4 mb-2">
          {project.links.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full border border-zinc-200 bg-white text-zinc-600 hover:bg-amber-50 hover:text-orange-500 hover:border-zinc-200 transition-colors duration-300 shadow-sm"
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

      {/* 2. Image Section (Keep your existing code here) */}
      <div className="relative w-full aspect-video md:aspect-21/9 overflow-hidden rounded-2xl md:rounded-[2.5rem] bg-zinc-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Floating Aesthetic Icons */}
        <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white/60 shadow-2xl border border-white/30 -translate-x-5 group-hover:translate-x-0 transition-transform duration-700">
            <FaCode size={20} />
          </div>
          <div className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white/60 shadow-2xl border border-white/30 translate-x-5 group-hover:translate-x-0 transition-transform duration-700">
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

          {/* NEW: Moving Tags with Framer Motion */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.tags.map((tag, i) => (
              <motion.span
                key={i}
                whileHover={{
                  y: -5,
                  backgroundColor: "#fff",
                  borderColor: "#fdba74", // Amber-500
                  color: "#d97706", // amber-800
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="cursor-default text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-4 py-1.5 border border-zinc-200 rounded-full transition-colors duration-300"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Secondary Info Column */}
        <div className="md:col-span-4 flex flex-col gap-8 md:pl-10 border-l border-zinc-100">
          {/* Year Info */}
          <div>
            <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest block mb-2">
              Duration / Year
            </span>
            <p className="font-cabinet text-zinc-900 text-lg">
              {project.dates}
            </p>
          </div>

          {/* Project Links */}
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
                  whileHover="hover" // This triggers all children with the "hover" variant
                  className="group/link relative flex items-center gap-2 font-cabinet text-sm font-bold text-zinc-800 transition-colors duration-300 hover:text-emerald-600"
                >
                  {/* Link Text */}
                  <span className="relative">
                    {link.type === "Source"
                      ? "GitHub Repository"
                      : "Live Preview"}

                    {/* Underline Animation */}
                    <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-emerald-500 transition-all duration-300 group-hover/link:w-full" />
                  </span>

                  {/* Animated Arrow - Now triggers when the whole link is hovered */}
                  <motion.span
                    variants={{
                      initial: { y: 0, x: 0 },
                      hover: { y: -4, x: 4 }, // Moves diagonally
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <MdOutlineArrowOutward
                      size={16}
                      className="text-zinc-400 group-hover/link:text-emerald-500 transition-colors duration-300"
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
