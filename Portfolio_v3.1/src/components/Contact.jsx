import React from "react";
import { FaArrowRight, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      {/* 1. The Badge Heading */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="h-px flex-1 bg-linear-to-l from-gray-300/60 via-zinc-400/40 to-transparent"></div>

        <span className="text-sm md:text-md font-cabinet font-semibold tracking-wider text-amber-100 border border-amber-900 bg-black px-4 py-1 rounded-full">
          Contact Me
        </span>

        <div className="h-px flex-1 bg-linear-to-r from-gray-300/60 via-zinc-400/40 to-transparent"></div>
      </div>

      {/* 2. Intro Text */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-cabinet font-bold text-slate-900 mb-2 tracking-tight leading-tight">
          Have an awe
          <span className="font-melodrama font-bold text-amber-400 text-3xl md:text-4xl">
            some{" "}
          </span>
          idea? <br /> Let
          <span className="font-melodrama font-bold text-amber-400 text-3xl md:text-4xl">
            's{" "}
          </span>
          bring it to life.
        </h2>
        <p className="text-slate-500 font-cabinet">
          I am looking for freelance opportunities or internships in startups
          and agencies.
        </p>
      </div>

      {/* 3. The Form (Stacked Layout) */}
      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name Field */}
          <div className="relative group">
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-amber-500 transition-colors font-cabinet "
            />
          </div>

          {/* Email Field */}
          <div className="relative group">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-amber-600 transition-colors font-cabinet"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="relative group">
          <textarea
            placeholder="Your message"
            rows="4"
            className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-amber-600 transition-colors font-cabinet resize-none"
          ></textarea>
        </div>

        {/* 4. Action Button (Using your Premium Glass Style) */}

        <div className="flex justify-center pt-2">
          <button
            type="submit"
            className="group flex items-center gap-3 bg-black text-amber-100 px-8 py-2 rounded-full font-cabinet font-medium hover:bg-slate-800 active:scale-95 transition-all duration-500 shadow-md shadow-black/10 cursor-pointer"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              Send Message
            </span>

            {/* Icon container */}
            <span className="relative w-4 h-4 flex items-center justify-center">
              {/* Send icon (default) */}
              <FaPaperPlane className="absolute transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:-translate-x-2" />

              {/* Arrow icon (hover) */}
              <FaArrowRight className="absolute transition-all duration-500 opacity-0 translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
