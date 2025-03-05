import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import projects from "../utils/Data/FeaturedWorkData";

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
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const FeaturedWork: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Web Development");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const categories = [
    "Web Development",
    "Mobile App Development",
    "E-Commerce Solutions",
    "Custom Software Solutions",
    "Digital Marketing & SEO",
    "Social Media Marketing",
    "Video Marketing & Branding",
    "Email Marketing & Automation",
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects.slice(0, 3);

  const handleViewAllClick = () => {
    navigate("/work");
  };

  const handleCaseStudyClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setSelectedProject(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main className="bg-gradient-primary ">

      <div className="text-center mb-8 px-4">
        <h2 className=" text-2xl md:text-5xl font-orbitron font-semibold text-white mb-4">
          Featured <span className="text-yellow">Projects</span>
        </h2>
        <p className="text-base sm:text-lg text-white max-w-3xl mx-auto">
          Explore Our Success Stories: Transforming Businesses Through Innovative Strategies
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-2 px-4">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-secondary rounded-2xl shadow-md p-1 sm:p-3 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 text-center font-orbitron text-white hover:text-yellow hover:font-bold font-semibold cursor-pointer hover:shadow-xl transition hover:scale-100 scale-95"
            onClick={() => handleCategoryClick(category)}
          >
            <h2 className="text-xs sm:text-sm">{category}</h2>
          </div>
        ))}
      </div>

      <div className="mt-8 max-w-6xl mx-auto px-4">
        {selectedCategory && <h2 className="text-2xl font-orbitron text-yellow font-bold mb-4">{selectedCategory}</h2>}
      </div>

      <section className=" bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-xl scale-95 hover:-translate-y-2 hover:shadow-2xl transition cursor-pointer"
                onClick={() => handleCaseStudyClick(project)}
              >
                <div className="relative ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 duration-300 ease-in-out"
                  />
                  <div className="absolute top-0 z-50 bg-primary w-full h-full opacity-60"></div>
                </div>
                <div className="flex flex-col">
                  <div className="p-6">
                    <span
                      className="bg-gradient-to-br from-[#13072E] to-[#3D1794] px-3 py-1 text-xs text-white font-bold rounded-full uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-50 my-3 font-orbitron">
                      {project.title} <span className="text-yellow">{project.subtitle}</span>
                    </h3>
                    <p className="text-gray-200 my-3">
                      {truncateDescription(project.description, 20)}
                      <button
                        className="text-black font-semibold"
                        onClick={() => handleCaseStudyClick(project)}
                      >
                        <span className="text-gray-200 font-bold text-xl">
                          {" "}
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

      <section className="container max-7xl mx-auto p-4">
        {selectedProject && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div
              ref={modalRef}
              className="max-w-7xl w-full bg-white shadow-xl rounded-lg p-4 sm:p-6 mt-80 md:mt-32"
            >
              <h3 className="text-2xl font-bold text-primary font-orbitron mb-3">
                {selectedProject.title} <span className="text-yellow">{selectedProject.subtitle}</span>
              </h3>
              <p className="text-primary mb-4">{selectedProject.description}</p>
              <ul className="text-left text-gray-800 space-y-2">
                {selectedProject.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center font-orbitron text-sm text-primary">
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
                <span className="font-bold text-primary font-orbitron">Technologies Used</span> <br />
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

        {selectedCategory && (
          <div className="text-center mt-6">
            <Button
              variant="primary"
              size="md"
              className="group px-3 py-2 hover:border-2 border-white"
              onClick={handleViewAllClick}
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform " />
            </Button>
          </div>
        )}
      </section>
    </main>
  );
};

export default FeaturedWork;
