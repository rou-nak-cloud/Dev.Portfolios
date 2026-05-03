import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu5Line } from "react-icons/ri";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useNavigate, useLocation } from "react-router-dom";

// constants
import { navList, desktopNavList } from "../constants";

export default function Navbar({ className = "" }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    if (location.pathname === "/") {
      // already on home → scroll
      const target = document.querySelector("#contact");
      if (target && window.lenis) {
        window.lenis.scrollTo(target, {
          duration: 1.6,
          easing: (t) => 1 - Math.pow(1 - t, 6),
        });
      }
    } else {
      // not on home → go + scroll
      navigate("/#contact");
    }
  };

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
        className="max-w-2xl md:w-[80%] w-[70%] mx-auto px-3 sm:px-4 py-1 flex items-center justify-between 
  border border-purple-500/20 rounded-full 
  bg-amber-100 md:bg-orange-50 backdrop-blur-2xl shadow-sm shadow-amber-500/20"
      >
        {/* Logo */}
        <Link
          to="/"
          className="logo font-melodrama font-medium text-xl sm:text-2xl md:text-[2.2rem] tracking-wider group relative"
        >
          <span className="text-orange-600">&lt;</span>

          <span className="relative inline-block">
            {/* Default text */}
            <span className="text-black">Bakshi/</span>

            {/* Gradient overlay */}
            <span
              className="
               absolute inset-0
                bg-linear-to-r from-orange-500 via-amber-400 to-orange-600
               bg-clip-text text-transparent
                opacity-0 group-hover:opacity-100
                transition-all duration-500
               "
            >
              Bakshi/
            </span>
          </span>

          <span className="text-orange-600">&gt;</span>
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
            className={`absolute bottom-16 left-[50%] -translate-x-[50%] w-48 sm:w-52 flex flex-col items-start 
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
        <ul className="hidden md:flex items-center text-base lg:text-lg font-cabinet gap-1 lg:gap-1">
          {desktopNavList.map((item, index) => {
            const Icon = item.icon;

            return (
              <li
                key={index}
                ref={(el) => (navItemsRef.current[index] = el)}
                className="rounded-lg px-2 py-1 transition-all duration-400 
                hover:-translate-y-1 hover:bg-(--button-hover) 
                hover:shadow-md hover:shadow-amber-400/20
                active:scale-95 cursor-pointer"
              >
                {item.type === "route" ? (
                  <Link
                    to={item.to}
                    className={`flex items-center ${
                      item.label ? "gap-1" : "gap-0.5"
                    }`}
                  >
                    {Icon && <Icon />}
                    {item.label && <span>{item.label}</span>}
                    {item.badge && (
                      <span className="pb-2 pl-.5 text-[12px] text-orange-600 font-mono">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ) : (
                  <a
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-.5 py-.5 gap-.5"
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
        <div className="hidden md:flex w-px h-5 bg-zinc-800/60 mx-1"></div>

        {/* Contact Button */}
        <button
          onClick={handleContactClick}
          className="relative overflow-hidden text-sm sm:text-base md:text-lg 
  font-cabinet bg-(--button) hover:bg-(--button-hover) 
  active:scale-95 hover:-translate-x-2 
  transition-all duration-400 rounded-xl 
  px-3 py-1 sm:px-4 sm:py-2 cursor-pointer ml-1 sm:ml-1"
        >
          <span
            className="absolute inset-0 w-1/2 h-full translate-x-full 
  bg-linear-to-r from-transparent via-white/70 to-transparent animate-shimmer"
          ></span>

          <span className="relative z-10 font-melodrama font-bold">
            Contact.
          </span>
        </button>
      </div>
    </nav>
  );
}
