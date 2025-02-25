import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";

const caseStudies = [
  {
    title: "E-commerce Revenue Growth",
    client: "Fashion Retailer",
    results: [
      "250% increase in online sales",
      "40% reduction in CAC",
      "180% ROAS",
    ],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "B2B Lead Generation",
    client: "SaaS Company",
    results: [
      "3x increase in qualified leads",
      "45% lower CPL",
      "200% pipeline growth",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
];

export function CaseStudyCard() {
  let navigate = useNavigate()
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Growth <span className="text-primary">in Action</span></h2>
          <p className="mt-4 text-base max-w-2xl mx-auto text-gray-600">
          Unlock the full potential of your business with our cutting-edge strategies. We’ve partnered with companies of all sizes to deliver customized solutions that fuel growth, improve efficiency, and drive long-term success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover hover:scale-105 cursor-pointer duration-300 "
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {study.title}
                </h3>
                <p className="text-primary font-semibold mb-4">
                  {study.client}
                </p>
                <ul className="space-y-2 mb-6">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {result}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="group"
                onClick={() => handleNavigation("/work")}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
