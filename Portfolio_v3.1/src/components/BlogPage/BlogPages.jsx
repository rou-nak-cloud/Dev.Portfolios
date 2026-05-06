// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { BLOG_DATA } from "../../JsFiles/BlogPosts";

// Lowering this to 4 ensures it fits comfortably on smaller laptop screens
const POSTS_PER_PAGE = 5;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(BLOG_DATA.length / POSTS_PER_PAGE);

  const currentPosts = BLOG_DATA.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  return (
    <div className="h-screen w-full max-w-2xl mx-auto px-6 flex flex-col overflow-hidden font-cabinet">
      {/* Header - Compact margins */}
      <header className="pt-19 mb-3 shrink-0">
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl md:text-5xl font-melodrama font-bold text-amber-500">
            Blog
          </h1>
          <span className="px-2.5 rounded-full border border-zinc-200 text-[14px] font-medium text-zinc-800 bg-white shadow-sm mb-4">
            {BLOG_DATA.length} posts
          </span>
        </div>
        <p className="text-zinc-500 text-base">
          My thoughts on software development, life, and more.
        </p>
      </header>

      {/* Main Content Area */}
      <div className="grow overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col h-full"
          >
            {currentPosts.map((post, index) => (
              <Link
                to={`/blogs/${post.id}`}
                key={post.id}
                className="group flex flex-col py-3 border-b border-zinc-100 last:border-0 shrink-0"
              >
                <div className="flex items-center ">
                  <h2 className="text-md md:text-lg font-bold text-slate-900/70 tracking-tight transition-all">
                    <span className="text-xs font-normal text-zinc-500 mr-2 font-mono">
                      {String(
                        (currentPage - 1) * POSTS_PER_PAGE + index + 1,
                      ).padStart(2, "0")}
                      .
                    </span>
                    {post.title}
                  </h2>
                  <FiArrowRight
                    className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-amber-500 ml-4"
                    size={20}
                  />
                </div>
                <p className="text-xs text-zinc-400 mt-1 ml-7 font-medium">
                  {post.date}
                </p>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Pagination */}
      <footer className="mt-auto mb-25 pt-4 border-t border-zinc-200/40 flex items-center justify-between shrink-0">
        <span className="text-zinc-400 text-xs italic">
          Page {currentPage} of {totalPages}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-1.5 rounded-lg border border-zinc-200 hover:border-amber-500 disabled:opacity-20 transition-all cursor-pointer font-medium text-xs bg-white"
          >
            Prev
          </button>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-1.5 rounded-lg border border-zinc-200 hover:border-amber-500 disabled:opacity-20 transition-all cursor-pointer font-medium text-xs bg-white shadow-sm"
          >
            Next
          </button>
        </div>
      </footer>
    </div>
  );
}
