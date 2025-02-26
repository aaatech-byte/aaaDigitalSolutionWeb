import { Facebook, Linkedin, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import pinterestIco from "../../public/icons/pinterestLOGO.png"

const footerData = {
  logoSrc: "/icons/logoDIGITAL.png",
  description:
    "Revolutionize your business with bold digital solutions that drive growth, enhance efficiency, and unlock limitless potential in the evolving digital landscape.",
  contactInfo: {
    email: "aaadigitalltd@gmail.com",
    addressLink: "https://www.google.com/maps/place/Pennsylvania,+USA",
  },
  address: "Headquarter: Philadelphia, Pennsylvania USA",
  address2: "Toronto, Ontario Canada",
  address3: "Lahore, Punjab Pakistan",
};

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Logo & Description */}
          <div>
            <img
              src={footerData.logoSrc}
              alt="Logo"
              className="pt-2 pl-2 h-20 w-auto object-cover"
            />
            <p className="text-gray-200 sm:pr-6 tracking-wider mt-8 text-sm">
              {footerData.description}
            </p>
            <div className="flex space-x-6 mt-6">
              <a
                href="https://www.linkedin.com/company/aaa-digital-marketing"
                className="text-gray-200 hover:text-yellow transition-transform transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61566395171281"
                className="text-gray-200 hover:text-yellow transition-transform transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/aaadigitalltd/"
                className="text-gray-200 hover:text-yellow transition-transform transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.pinterest.com/aaadigitalltd/"
                className="text-gray-200 hover:text-yellow transition-transform transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img src={pinterestIco} className="w-7" alt="" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-gray-200 font-orbitron">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Web Development",
                "App Development",
                "Custom Software Development",
                "E-Commerce Solutions",
                "Digital Marketing",
                "Social Media Marketing",
                "Email Marketing",
                "Video Marketing & Branding",
              ].map((service, index) => (
                <li key={index}>
                  <button className="text-gray-200 hover:text-yellow transition duration-300 transform hover:translate-x-2">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200 font-orbitron">
              Pages
            </h4>
            <ul className="space-y-2">
              {[
                { name: "About us", path: "/about" },
                { name: "Services", path: "/about" },
                { name: "Our Work", path: "/work" },
                { name: "Blogs", path: "/blog" },
                { name: "Careers", path: "/contact" },
                { name: "Contact Us", path: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-gray-200 hover:text-yellow transition duration-300 transform hover:translate-x-2"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4 text-gray-200 font-orbitron">
              Contact
            </h4>
            <div
              className="flex items-center cursor-pointer transition-transform transform hover:scale-105 hover:text-yellow"
              onClick={() =>
                (window.location.href = `mailto:${footerData.contactInfo.email}`)
              }
            >
              <EmailIcon className="mr-2 text-gray-200" />
              <span className="text-sm">{footerData.contactInfo.email}</span>
            </div>

            {[footerData.address, footerData.address2, footerData.address3].map(
              (address, index) => (
                <div
                  key={index}
                  className="flex items-center text-gray-200 hover:text-yellow cursor-pointer transition-transform transform hover:scale-105"
                  onClick={() =>
                    window.open(footerData.contactInfo.addressLink, "_blank")
                  }
                >
                  <LocationOnIcon className="mr-2" />
                  <span className="text-sm">{address}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>
              &copy;2024- {new Date().getFullYear()} AAA Digital, All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
