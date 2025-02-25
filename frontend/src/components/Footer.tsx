import { Facebook, Linkedin, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

type SocialLink = {
  name: string;
  url: string;
  icon: JSX.Element;
};

type Service = {
  name: string;
};

type CompanyLink = {
  name: string;
  path: string;
};

type ContactInfo = {
  email: string;
  addressLink: string;
};

type FooterData = {
  logoSrc: string;
  description: string;
  socialLinks: SocialLink[];
  services: Service[];
  companyLinks: CompanyLink[];
  contactInfo: ContactInfo;
  address: string;
  address2: string;
  address3: string;
};

const footerData: FooterData = {
  logoSrc: "/icons/logoDIGITAL.png", 
  description:
    "Revolutionize your business with bold digital solutions that drive growth, enhance efficiency, and unlock limitless potential in the evolving digital landscape.",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/aaa-digital-marketing",
      icon: <Linkedin size={24} />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61566395171281",
      icon: <Facebook size={24} />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/aaadigitalltd/",
      icon: <Instagram size={24} />,
    },
  ],
  services: [
    { name: "Web Development" },
    { name: "App Development" },
    { name: "Custom Software Development" },
    { name: "E-Commerce Solutions"},
    { name: "Digital Marketing"},
    { name: "Social Media Marketing" },
    { name: "Email Marketing"},
    { name: "Video Marketing & Branding" },
  ],
  companyLinks: [
    { name: "About us", path: "/about" },
    { name: "Services", path: "/about" },
    { name: "Our Work", path: "/work" },
    { name: "Blogs", path: "/blog" },
    { name: "Careers", path: "/contact" },
    { name: "Contact Us", path: "/contact" },
  ],
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

  const handleNavigation = (path: string) => {
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
              {footerData.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-gray-200 hover:text-yellow transition-transform transform hover:scale-110"
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
               </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-gray-200 font-orbitron">
              Services
            </h4>
            <ul className="space-y-2">
              {footerData.services.map((service, index) => (
                <li key={index}>
                  <button
                    // onClick={() => handleNavigation(service)}
                    className="text-gray-200 hover:text-yellow transition duration-300 transform hover:translate-x-2"
                  >
                    {service.name}
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
              {footerData.companyLinks.map((link, index) => (
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

            <div
              className="flex items-center text-gray-200 hover:text-yellow cursor-pointer transition-transform transform hover:scale-105"
              onClick={() =>
                window.open(footerData.contactInfo.addressLink, "_blank")
              }
            >
              <LocationOnIcon className="mr-2" />
              <span className="text-sm">{footerData.address}</span>
            </div>
            <div
              className="flex items-center text-gray-200 hover:text-yellow cursor-pointer transition-transform transform hover:scale-105"
              onClick={() =>
                window.open(footerData.contactInfo.addressLink, "_blank")
              }
            >
              <LocationOnIcon className="mr-2" />
              <span className="text-sm">{footerData.address2}</span>
            </div>
            <div
              className="flex items-center text-gray-200 hover:text-yellow cursor-pointer transition-transform transform hover:scale-105"
              onClick={() =>
                window.open(footerData.contactInfo.addressLink, "_blank")
              }
            >
              <LocationOnIcon className="mr-2" />
              <span className="text-sm">{footerData.address3}</span>
            </div>
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
