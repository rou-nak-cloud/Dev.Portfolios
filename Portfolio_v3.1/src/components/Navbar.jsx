import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu5Line } from "react-icons/ri";

// constants
import { navList, desktopNavList } from "../constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed bottom-0 w-full h-18 z-50">
      <div
        className="max-w-176 w-full mx-auto px-4 py-2 flex items-center justify-between border-2 border-zinc-400/40 rounded-full  bg-linear-to-r from-white/20 via-white/10 to-white/20 backdrop-blur-lg bg-blend-color-difference shadow-sm shadow-amber-500/20"
        // onClick={() => navigate("/")} BUBBLING ISSUE
      >
        {/* Logo */}
        <Link
          to="/"
          className="logo font-melodrama font-medium text-[1.8rem] md:text-[2.2rem] tracking-wider"
        >
          &lt;Bakshi/&gt;
        </Link>
        {/* Mobile Menu */}
        <div className="md:hidden relative">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-2xl cursor-pointer w-10 h-10 grid place-items-center bg-zinc-500/10 rounded-xl ring-inset ring-1 ring-zinc-100/90 backdrop-blur-2xl hover:bg-amber-100/70 active:scale-95 transition-all duration-300"
          >
            {menuOpen ? <AiOutlineClose /> : <RiMenu5Line />}
          </button>

          <ul
            className={`absolute bottom-14 -right-18 w-52 flex flex-col rounded-xl bg-amber-50 backdrop-blur-lg p-3 gap-2 shadow-lg overflow-hidden transition-all duration-700 ease-out shadow-amber-500/50
  ${menuOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 translate-y-4"}`}
          >
            {navList.map((item, index) => {
              const Icon = item.icon; // Grab the component as it is in js file
              return (
                <li
                  key={index}
                  className="rounded-xl hover:bg-amber-200/40 active:scale-95 transition-all duration-300"
                >
                  {item.type === "internal" ? (
                    <Link
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3"
                    >
                      <Icon className="text-amber-400" /> {/* Render as JSX */}
                      {item.label}
                    </Link>
                  ) : (
                    <Link to={item.to} className="flex items-center gap-3">
                      <Icon className="text-amber-400" /> {/* Render as JSX */}
                      {item.label}
                      {item.badge && (
                        <span className="badge badge-sm font-mono ml-4">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex rounded-box items-center text-lg font-cabinet font-regular gap-1">
          {desktopNavList.map((item, index) => {
            const Icon = item.icon;

            return (
              <li
                key={index}
                className="rounded-xl px-2 py-1 transform transition-all duration-400 hover:-translate-y-1 hover:bg-(--button-hover) hover:shadow-md hover:shadow-amber-500/20 active:scale-95 cursor-pointer"
              >
                {item.type === "route" ? (
                  <Link
                    to={item.to}
                    onClick={() => console.log("Navigating to:", item.to)}
                    className={`flex items-center ${item.label ? "gap-2" : "gap-1"}`}
                  >
                    {Icon && <Icon />}
                    {item.label && <span>{item.label}</span>}
                    {item.badge && (
                      <span className="badge badge-xs font-mono">
                        {item.badge}
                      </span>
                    )}
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
        <div className="hidden md:flex w-px h-6 bg-zinc-500/80 mx-2"></div>

        {/* Contact Button */}
        <button className="relative overflow-hidden text-lg font-cabinet font-regular bg-(--button) hover:bg-(--button-hover) active:scale-95 hover:-translate-y-1 transition-all duration-300 rounded-xl px-4 py-1 md:px-4 md:py-2 cursor-pointer ml-2">
          {/* Shimmer effect */}
          <span className="absolute inset-0 w-1/2 h-full translate-x-full bg-linear-to-r from-transparent via-white/70 to-transparent animate-shimmer"></span>
          <a
            href="#contact"
            className="relative z-10 text-md md:text-lg font-melodrama font-bold"
          >
            Contact.
          </a>
        </button>
      </div>
    </nav>
  );
}
