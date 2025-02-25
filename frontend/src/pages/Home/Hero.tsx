import {
  ArrowRight,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <main className="bg-white">
      <section className="relative h-[95vh] bg-white bg-[url('/images/hero_images/home_hero.jpg')] bg-cover bg-center">
        <div className="absolute z-10 bg-gradient-primary w-[100%] h-[100%] opacity-70"></div>

        <div className="relative max-w-6xl px-4 sm:px-6 lg:px-14 py-20 md:py-44 z-20">
          <div className="pt-24 sm:pt-0">
            <span className="text-[#F4D000] text-2xl my-5 font-semibold font-orbitron  tracking-wide uppercase">

            </span>
            <h1 className="my-3 md:my-5 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-orbitron font-bold tracking-wide leading-6 text-white">
              Let's Partner To <br />  Build Your <br />
              <span className=" text-[#F4D000]">
                {" "}
                Digital Brand{" "}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white mt-11 md:mt-14 mb-4 md:mb-7 max-w-2xl">
              We create stunning websites, build next-gen mobile apps, and
              deliver custom software solutions to transform your business online.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="md" className="group px-4 py-4 font-bold">
                Get Your Free Consultation
                <ArrowRight className="ml-3 h-7 w-7 bg-yellow text-black rounded-full p-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-80 bg-gradient-to-t from-primary to-transparent"></div>
      </section>
    </main>
  );
}