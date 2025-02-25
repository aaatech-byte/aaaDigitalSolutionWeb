import { Link, NavLink, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface NavLink {
  name: string;
  to: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navbarRef = useRef<HTMLDivElement>(null);

  const navLinks: NavLink[] = [
    { name: "Home", to: "/" },
    { name: "About us", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Our Work", to: "/work" },
    { name: "Blogs", to: "/blog" },
    { name: "Careers", to: "/career" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 md:px-0 px-4">
      <div className="max-w-[86rem] mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center">
            <Link to="/">
              <figure className="text-5xl flex justify-center items-center mt-3 font-bold cursor-pointer text-primary">
                <img src={'/icons/logoDIGITAL.png'} className="w-16 pb-3 object-cover" />
              </figure>
            </Link>
          </div>

          <div className="hidden md:flex  items-center space-x-11 font- justify-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={`${location.pathname === link.to
                  ? "text-yellow font-semibold font-orbitron "
                  : "text-white font-semibold font-orbitron"
                  } hover:-translate-y-1 duration-200 ease-linear hover:text-[#F4D000] transition`}
              >
                {link.name}
              </NavLink>
            ))}

          </div>

          <div>
            <Link to="/contact">
              <button
                type="submit"
                className="md:flex hidden justify-center gap-2 items-center mx-auto shadow-xl text- bg-[#F4D000] backdrop-blur-md  isolation-auto text-black before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-primary hover:border-emerald-600 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2.5 overflow-hidden rounded-xl group font-medium"
              >
                Get Started
                {/* <svg
                  className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-200 ease-linear duration-300 rounded-full border border-gray-900 group-hover:border-none p-2 rotate-45 bg-yellow"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-00 group-hover:fill-yellow"
                  />
                </svg> */}
              </button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ?
              <X size={24} color="white" /> : <img src="icons/hemburger-menu.png" className="w-14" alt="" />
            }
          </button>
        </div>
      </div>

      {isOpen && (
        <div ref={navbarRef} className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`${location.pathname === link.to
                  ? "text-yellow font-semibold"
                  : "text-white font-semibold"
                  } block px-3 py-2 hover:-translate-y-0.5 duration-300 hover:text-black transition`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Link to="/contact">
                <button
                  type="submit"
                  className="flex  justify-center gap-2 items-center mx-auto shadow-xl text- bg-[#F4D000] backdrop-blur-md  isolation-auto text-black before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-primary hover:border-emerald-600 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2.5 overflow-hidden rounded-xl group font-semibold"
                >
                  Get Started
                  {/* <svg
                  className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-200 ease-linear duration-300 rounded-full border border-gray-900 group-hover:border-none p-2 rotate-45 bg-yellow"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-900 group-hover:fill-yellow"
                  />
                </svg> */}
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}







































