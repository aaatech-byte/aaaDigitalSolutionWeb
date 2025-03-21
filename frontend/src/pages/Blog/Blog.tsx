import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import { Dialog } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Testimonials from "../../components/Testimonials";
import OurMission from "../../components/OurMission";
import ContactForm from "../../components/ContactCTA";
import Stats from "../../components/Stats";
import BlogHero from "./BlogHero";
import posts from "../../utils/Data/BlogData"; 

export default function Blog() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <main className="bg-gradient-primary">
      {/* Hero Section */}
      <BlogHero />

      <div className="flex justify-center flex-wrap md:flex-row flex-col pt-20 pb-10">
        <section className="sm:w-3/4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-xl hover:-translate-y-2 ease-in-out hover:shadow-2xl transition duration-300 cursor-pointer"
                  onClick={() => handleNavigation(post.link)}
                >
                  {/* Image Wrapper */}
                  <div className="relative scale-100 duration-300 hover:scale-105 transition">
                    {/* Image */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover "
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex items-center text-sm text-gray-300 mb-4">
                      <Calendar className="h-4 w-4 mr-2 text-yellow" />
                      <span className="mr-4">{post.date}</span>
                      <Clock className="h-4 w-4 mr-2 text-yellow" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold font-orbitron text-white mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 font-sm">{post.excerpt}</p>
                    <Button
                      variant="primary"
                      size="md"
                      className="group px-3 py-2 font-bold mt-4"
                      onClick={() => handleNavigation(post.link)}
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
      </div>

      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="p-6 text-center">
          <Sparkles className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-lg font-bold mb-2">Coming Soon!</h3>
          <p className="text-gray-200">
            This page will be available shortly. Stay tuned for exciting
            updates!{" "}
          </p>
        </div>
      </Dialog>

      <Testimonials />
      <OurMission />
      <Stats />
      <ContactForm />
    </main>
  );
}
