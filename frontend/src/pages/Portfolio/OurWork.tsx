import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/Button";
import Testimonials from "../../components/Testimonials";
import Stats from "../../components/Stats";
import ContactForm from "../../components/ContactCTA";
import projects from "../../utils/Data/FeaturedWorkData"; // Import projects data

interface Project {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  challenge: string;
  solution: string;
  result: string;
  technologiesUsed: string;
}

const truncateDescription = (text: string, wordLimit: number) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + " ..."
    : text;
};

export default function OurWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const handleCaseStudyClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedProject(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main className="bg-gradient-primary">
      <section className="relative h-[95vh] bg-[url('/images/hero_images/work_hero.jpg')] bg-center bg-cover">
        <div className="absolute bg-primary z-10 w-full h-[95vh] opacity-65"></div>

        <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:pt-36">
          <div className="text-center pt-32">
            <h1 className="my-3 md:my-4 text-2xl sm:text-4xl md:text-5xl font-orbitron font-semibold tracking-wide leading-6 text-white">
              Projects We've{" "}
              <span className="text-yellow text-2xl md:text-5xl">
                Delivered
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#FFFFFF] mt-11 md:mt-12 mb-4 md:mb-7 mx-auto max-w-4xl">
              Explore our recent projects to discover how we've empowered
              businesses to achieve their digital goals, enhance their online
              presence, and drive long-term growth.
            </p>
            <Button
              variant="primary"
              size="md"
              className="group px-4 py-3 font-bold"
              onClick={() => navigate("/contact")}
            >
              Let's Get Started
              <ArrowRight className="ml-3 h-7 w-7 bg-yellow text-black rounded-full p-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent"></div>
      </section>

      <section className="py-12 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-xl scale-95 hover:-translate-y-2 hover:shadow-2xl transition cursor-pointer"
                onClick={() => handleCaseStudyClick(project)}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 duration-300 ease-in-out"
                  />
                  <div className="absolute top-0 z-50 bg-primary w-full h-full opacity-60"></div>
                </div>
                <div className="flex flex-col">
                  <div className="p-6">
                    <span className="bg-gradient-to-br from-[#13072E] to-[#3D1794] px-3 py-1 text-xs text-white font-bold rounded-full uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-50 my-3 font-orbitron">
                      {project.title} <br />
                      <span className="text-yellow">{project.subtitle}</span>
                    </h3>
                    <p className="text-gray-200 my-3">
                      {truncateDescription(project.description, 18)}
                      <button
                        className="text-black font-semibold"
                        onClick={() => handleCaseStudyClick(project)}
                      >
                        <span className="text-gray-200 font-bold text-xl">
                          .....{" "}
                        </span>
                      </button>
                    </p>
                  </div>
                  <div className="text-gray-50 text-sm font-medium sticky p-6 bottom-0 font-orbitron">
                    Technologies:
                    <br />
                    <span className="text-gray-300 font-semibold">
                      {project.technologiesUsed}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div
            ref={modalRef}
            className="max-w-7xl w-full bg-white shadow-xl rounded-lg p-6"
          >
            <h3 className="text-2xl font-bold text-primary font-orbitron mb-3">
              {selectedProject.title}{" "}
              <span className="text-yellow">{selectedProject.subtitle}</span>
            </h3>
            <p className="text-primary mb-4">{selectedProject.description}</p>
            <ul className="text-left text-gray-800 space-y-2">
              {selectedProject.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-primary">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h4 className="font-bold text-primary font-orbitron">Challenge</h4>
              <p className="text-primary">{selectedProject.challenge}</p>
            </div>
            <div className="mt-4">
              <h4 className="font-bold text-primary font-orbitron">Solution</h4>
              <p className="text-primary">{selectedProject.solution}</p>
            </div>
            <div className="mt-4">
              <h4 className="font-bold text-primary font-orbitron">Result</h4>
              <p className="text-primary">{selectedProject.result}</p>
            </div>

            <p className="text-gray-500 font-semibold mt-4">
              <span className="font-bold text-primary font-orbitron">
                Technologies Used
              </span>{" "}
              <br />
              {selectedProject.technologiesUsed}
            </p>
            <button
              onClick={handleCloseModal}
              className="mt-6 bg-primary text-white px-4 py-2 cursor-pointer rounded-md hover:bg-primary-dark transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Testimonials />
      <Stats />
      <ContactForm />
    </main>
  );
}
