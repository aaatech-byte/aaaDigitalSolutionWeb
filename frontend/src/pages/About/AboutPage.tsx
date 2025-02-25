
// import Testimonials from "../../components/Testimonials";
// import FeaturedWork from "../../components/FeaturedWork";
// import Stats from "../../components/Stats";

import TeamSec from "./TeamSec";
import WorkingProcess from "./WorkProcess";
// import WhyChooseUs from "./WhyChoose";
import Hero from './AboutHero'
import CoreValues from "./CoreValues";

export default function About() {
  return (
    <>
      <Hero />
      {/* <WhyChooseUs/> */}
      <WorkingProcess />
      <TeamSec />
      {/* <FeaturedWork/> */}
      {/* <Testimonials/> */}
      {/* <Stats/> */}
      <CoreValues />
    </>
  );
}
