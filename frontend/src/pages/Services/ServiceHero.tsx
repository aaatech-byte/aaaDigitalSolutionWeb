import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function ServiceHero({
  title,
  subtitle,
  description,
}: ServiceHeroProps) {
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    // <div className="relative pt-20 bg-gradient-to-br from-gray-50 to-green-50">

    <div className="relative z-20 px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 md:py-32">
      <div className="text-center">
        <span className="text-xl font-bold tracking-wide uppercase text-yellow font-orbitron">
          {title}
        </span>
        <h1 className="py-2 text-xl font-bold md:text-3xl font-orbitron text-yellow">
          {subtitle}
        </h1>
        <p className="max-w-3xl py-2 mx-auto mb-2 text-base text-[#FFFFFF]">
          {description}
        </p>
        <div className="flex flex-col justify-center gap-3 pt-3 sm:flex-row">
          <Button
            onClick={() => handleNavigation("/contact")}
            variant="outline"
            size="md"
            className="px-4 py-2 rounded-full text-[#FFFFFF]"
          >
            Get Started
          </Button>
          <Button variant="outline" className="text-[#FFFFFF] px-4 py-2 rounded-full" size="md">
            View Portfolio
          </Button>
        </div>
      </div>
       {/* <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent"></div> */}

    </div>
    // </div>
  );
}
