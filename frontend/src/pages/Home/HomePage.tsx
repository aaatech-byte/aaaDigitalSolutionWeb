import Hero from './Hero';
import Services from '../../components/Services';
import Stats from '../../components/Stats';
import FeaturedWork from '../../components/FeaturedWork';
import Testimonials from '../../components/Testimonials';
import ContactForm from '../../components/ContactCTA';
import OurMission from '../../components/OurMission';
import OurWork from '../../components/OurWork';
import LogosSection from '../../components/Logos';
import FeaturedInsights from '../../components/FeaturedInsights';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <LogosSection />
      <OurWork />
      <Services />
      <Testimonials />
      <FeaturedInsights />
      <FeaturedWork />
      <OurMission />
      <Stats />
      <ContactForm />
     
    </main>
  );
}