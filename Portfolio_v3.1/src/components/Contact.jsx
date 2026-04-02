import React, { useState } from "react";
import { FaArrowRight, FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import ContactLinks from "../utilities/ContactLinks";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, //'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsLoading(true);
    setSubmitStatus({
      type: null,
      message: "",
    });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        setSubmitStatus({
          type: "error",
          message:
            "Email service is not configured properly. Please try again later.",
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
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error.text ||
          "An error occurred while sending the message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name Field */}
          <div className="relative group">
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Your name"
              className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-amber-500 transition-colors font-cabinet "
            />
          </div>

          {/* Email Field */}
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

        {/* Message Field */}
        <div className="relative group">
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

        {/* 4. Action Button (Using your Premium Glass Style) */}

        <div className="flex flex-col items-center justify-center gap-4 pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="group flex items-center gap-3 bg-black text-amber-100 px-8 py-2 rounded-full font-cabinet font-medium hover:bg-slate-800 active:scale-95 transition-all duration-500 shadow-md shadow-black/10 cursor-pointer"
          >
            {isLoading ? (
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                Sending...
              </span>
            ) : (
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                Send Message
              </span>
            )}

            {/* Icon container */}
            <span className="relative w-4 h-4 flex items-center justify-center">
              {/* Send icon (default) */}
              <FaPaperPlane className="absolute transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:-translate-x-2" />

              {/* Arrow icon (hover) */}
              <FaArrowRight className="absolute transition-all duration-500 opacity-0 translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-1" />
            </span>
          </button>
          {/* Submit Status Check */}
          {submitStatus.type && (
            <div
              className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-500 w-full max-w-md ${
                submitStatus.type === "success"
                  ? "bg-green-500/10 border border-green-500/20 text-green-600"
                  : "bg-red-500/10 border border-red-500/20 text-red-600"
              }`}
            >
              {submitStatus.type === "success" ? (
                <FaCheckCircle className="w-5 h-5 shrink-0" />
              ) : (
                <IoMdAlert className="w-5 h-5 shrink-0" />
              )}
              <p className="text-sm font-medium">{submitStatus.message}</p>
            </div>
          )}
        </div>
      </form>

      {/* Contact Links */}
      <ContactLinks />
    </section>
  );
};

export default Contact;
