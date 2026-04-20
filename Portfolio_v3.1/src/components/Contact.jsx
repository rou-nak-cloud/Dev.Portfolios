import React, { useState, useRef } from "react";
import { FaArrowRight, FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import ContactLinks from "../utilities/ContactLinks";
import emailjs from "@emailjs/browser";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  // GSAP PREMIUM ENTRANCE
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%", // Starts when 85% of the section is visible
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".contact-reveal", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.25,
        clearProps: "all",
      });
    },
    { scope: containerRef },
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        setIsLoading(false);
        setSubmitStatus({
          type: "error",
          message: "Email service is not configured properly.",
        });
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending error:", error);
      setSubmitStatus({
        type: "error",
        message: error.text || "An error occurred. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="max-w-2xl mx-auto px-6 pt-16 -pb-10"
    >
      {/* 1. Badge (contact-reveal) */}
      <div className="contact-reveal flex items-center justify-center gap-2 mb-6">
        <div className="h-px flex-1 bg-linear-to-l from-gray-300/60 via-zinc-400/40 to-transparent"></div>
        <span className="text-sm md:text-md font-cabinet font-semibold tracking-wider text-amber-100 border border-amber-900 bg-black px-4 py-1 rounded-full">
          Contact Me
        </span>
        <div className="h-px flex-1 bg-linear-to-r from-gray-300/60 via-zinc-400/40 to-transparent"></div>
      </div>

      {/* 2. Intro Text (contact-reveal) */}
      <div className="contact-reveal text-center mb-12">
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
          I am looking for freelance opportunities or internships.
        </p>
      </div>

      {/* 3. The Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="contact-reveal grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group">
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Your name"
              className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-amber-500 transition-colors font-cabinet"
            />
          </div>

          <div className="relative group">
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Your email"
              className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-amber-600 transition-colors font-cabinet"
            />
          </div>
        </div>

        {/* Message Field (contact-reveal) */}
        <div className="contact-reveal relative group">
          <textarea
            placeholder="Your message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows="4"
            className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-amber-600 transition-colors font-cabinet resize-none"
          ></textarea>
        </div>

        {/* 4. Action Button (contact-reveal) */}
        <div className="contact-reveal flex flex-col items-center justify-center gap-4 pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="group flex items-center gap-3 bg-black text-amber-100 px-8 py-2 rounded-full font-cabinet font-medium hover:bg-slate-800 active:scale-95 transition-all duration-500 shadow-md shadow-black/10 cursor-pointer"
          >
            <span>{isLoading ? "Sending..." : "Send Message"}</span>
            <span className="relative w-4 h-4 flex items-center justify-center">
              <FaPaperPlane className="absolute transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:-translate-x-2" />
              <FaArrowRight className="absolute transition-all duration-500 opacity-0 translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-1" />
            </span>
          </button>

          {submitStatus.type && (
            <div
              className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-500 w-full max-w-md ${
                submitStatus.type === "success"
                  ? "bg-green-500/10 border-green-500/20 text-green-600"
                  : "bg-red-500/10 border-red-500/20 text-red-600"
              }`}
            >
              {submitStatus.type === "success" ? (
                <FaCheckCircle />
              ) : (
                <IoMdAlert />
              )}
              <p className="text-sm font-medium">{submitStatus.message}</p>
            </div>
          )}
        </div>
      </form>

      {/* Links (contact-reveal) */}
      <div className="contact-reveal mt-10">
        <ContactLinks />
      </div>
    </section>
  );
};

export default Contact;
