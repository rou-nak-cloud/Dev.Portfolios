import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu5Line } from "react-icons/ri";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// constants
import { navList, desktopNavList } from "../constants";

export default function Navbar({ className = "" }) {
  gsap.registerPlugin(useGSAP);

  const navRef = useRef(null);
  const navItemsRef = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // NAVBAR
      gsap.fromTo(
        navRef.current,
        {
          y: 80,
          opacity: 0,
          filter: "blur(5px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          delay: 0.7,
          ease: "power3.out",
        },
      );

      // NAV ITEMS (STAGGER)
      gsap.fromTo(
        navItemsRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          delay: 0.8,
          ease: "power2.out",
          clearProps: "all", // keep this
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed bottom-4 w-full z-50 ${className}`} //  small gap from bottom
    >
      <div
        className="max-w-6xl w-[80%] mx-auto px-3 sm:px-4 py-2 flex items-center justify-between 
        border border-zinc-400/40 rounded-full 
        bg-linear-to-r from-white/20 via-white/10 to-white/20 
        backdrop-blur-xl shadow-sm shadow-amber-500/20"
      >
        {/* Logo */}
        <Link
          to="/"
          className="logo font-melodrama font-medium text-xl sm:text-2xl md:text-[2.2rem] tracking-wider"
        >
          &lt;Bakshi/&gt;
        </Link>

        {/* Mobile Menu */}
        <div className="md:hidden relative">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-xl sm:text-2xl cursor-pointer w-9 h-9 sm:w-10 sm:h-10 
            grid place-items-center bg-zinc-500/10 rounded-xl 
            ring-1 ring-zinc-100/90 backdrop-blur-2xl 
            hover:bg-amber-100/70 active:scale-95 transition-all duration-300"
          >
            {menuOpen ? <AiOutlineClose /> : <RiMenu5Line />}
          </button>

          <ul
            className={`absolute bottom-14 right-0 w-48 sm:w-52 flex flex-col 
            rounded-xl bg-amber-50 backdrop-blur-lg p-3 gap-2 shadow-lg 
            overflow-hidden transition-all duration-500 ease-out shadow-amber-500/30
            ${
              menuOpen
                ? "max-h-96 opacity-100 translate-y-0"
                : "max-h-0 opacity-0 translate-y-4"
            }`}
          >
            {navList.map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={index}
                  ref={(el) => (navItemsRef.current[index] = el)}
                  className="rounded-lg hover:bg-amber-200/40 active:scale-95 transition-all duration-300"
                >
                  {item.type === "internal" ? (
                    <Link
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-2 py-1"
                    >
                      <Icon className="text-amber-500" />
                      {item.label}
                    </Link>
                  ) : (
                    <Link
                      to={item.to}
                      className="flex items-center gap-3 px-2 py-1"
                    >
                      <Icon className="text-amber-500" />
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center text-base lg:text-lg font-cabinet gap-1 lg:gap-2">
          {desktopNavList.map((item, index) => {
            const Icon = item.icon;

            return (
              <li
                key={index}
                ref={(el) => (navItemsRef.current[index] = el)}
                className="rounded-xl px-2 py-1 transition-all duration-300 
                hover:-translate-y-1 hover:bg-(--button-hover) 
                hover:shadow-md hover:shadow-amber-500/20 
                active:scale-95 cursor-pointer"
              >
                {item.type === "route" ? (
                  <Link
                    to={item.to}
                    className={`flex items-center ${
                      item.label ? "gap-2" : "gap-1"
                    }`}
                  >
                    {Icon && <Icon />}
                    {item.label && <span>{item.label}</span>}
                  </Link>
                ) : (
                  <a
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    {Icon && <Icon />}
                    {item.label && <span>{item.label}</span>}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        {/* Divider */}
        <div className="hidden md:flex w-px h-5 bg-zinc-500/60 mx-2"></div>

        {/* Contact Button */}
        <button
          className="relative overflow-hidden text-sm sm:text-base md:text-lg 
          font-cabinet bg-(--button) hover:bg-(--button-hover) 
          active:scale-95 hover:-translate-y-1 
          transition-all duration-300 rounded-xl 
          px-3 py-1 sm:px-4 sm:py-2 cursor-pointer ml-1 sm:ml-2"
        >
          {/* Shimmer */}
          <span
            className="absolute inset-0 w-1/2 h-full translate-x-full 
          bg-linear-to-r from-transparent via-white/70 to-transparent animate-shimmer"
          ></span>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector("#contact");
              if (target && window.lenis) {
                window.lenis.scrollTo(target, {
                  duration: 1.6,
                  easing: (t) => 1 - Math.pow(1 - t, 6),
                });
              }
            }}
            className="relative z-10 font-melodrama font-bold"
          >
            Contact.
          </a>
        </button>
      </div>
    </nav>
  );
}
