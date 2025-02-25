import { useState } from "react";
import { FaHandshake, FaLightbulb, FaStar } from "react-icons/fa";

// Define Type for Core Values
interface CoreValue {
  icon: JSX.Element;
  title: string;
  description: string;
}

const CoreValues: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Core Values Data
  const values: CoreValue[] = [
    {
      icon: <FaHandshake className="text-4xl text-primary" />,
      title: "Integrity",
      description:
        "We are committed to transparency, honesty, and always acting in your best interest.",
    },
    {
      icon: <FaLightbulb className="text-4xl text-primary" />,
      title: "Innovation",
      description:
        "We embrace the latest trends and technologies to ensure your business is always at the forefront of digital transformation.",
    },
    {
      icon: <FaStar className="text-4xl text-primary" />,
      title: "Excellence",
      description:
        "Our attention to detail and dedication to high-quality work guarantees the best results for every project.",
    },
  ];

  return (
    <div className="py-12 bg-gradient-primary from-indigo-900 to-purple-900">
      <section className="mx-auto text-center max-w-7xl">
      <h2 className="mt-4 text-2xl md:text-5xl font-orbitron font-semibold text-white mb-4">
          Our <span className="text-yellow">Core Values</span>
        </h2>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 pt-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-primary p-8 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out ${
                hoveredIndex !== null && hoveredIndex !== index
                  ? "blur-sm scale-95"
                  : "hover:scale-105"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-[#FFFFFF]">{value.icon}</div>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">{value.title}</h3>
              <p className="text-white">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoreValues;