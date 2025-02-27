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
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 md:px-12 px-4">
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
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

