import { Link } from "react-router-dom";

import { Button } from "../../components/ui/Button";
import { ArrowRight } from "lucide-react";

const AboutHero = () => {
  return (
    <>
      <section className="relative h-[95vh]  bg-[url('/images/hero_images/about_hero.jpg')] bg-cover bg-center">
      <div className="absolute z-10 w-[100%] h-[95vh] bg-gradient-primary opacity-65"></div>

        <div className="relative z-30 px-4 pt-32  mx-auto text-center max-w-7xl sm:px-6 lg:px-8 md:pt-52">
        <h1 className="my-3 md:my-4 text-2xl sm:text-4xl md:text-5xl font-orbitron font-semibold tracking-wide leading-6 text-white">
              Your Trusted Partner in <br />
              <span className="text-3xl text- md:text-6xl text-yellow">
                Digital Transformation
              </span>
            </h1>
            <p className="max-w-5xl mx-auto mt-10 mb-8 text-base text-[#FFFFFF] sm:text-lg font-clashDisplay">
              At AAA Digital, we specialize in solving your most pressing
              digital challenges with innovative IT solutions. Whether you need
              a user-friendly website, a mobile app that engages users, or a
              data-driven marketing strategy, we’re here to provide the right
              solutions that help your business grow, thrive, and succeed in
              today’s competitive landscape.
            </p>
            <div className="flex flex-col justify-center gap-4 font-clashDisplay sm:flex-row">
              <Link to="/contact">
              <Button
              variant="primary"
              size="md"
              className="group px-4 py-3 font-bold"
            >
              Let's Get Started
              <ArrowRight className="ml-3 h-7 w-7 bg-yellow text-black rounded-full p-1 group-hover:translate-x-1 transition-transform" />
            </Button>
              </Link>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent"></div>
      </section>
    </>
  );
};

export default AboutHero;