import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import { Dialog } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Testimonials from "../../components/Testimonials";
import OurMission from "../../components/OurMission";
import ContactForm from "../../components/ContactCTA";
import Stats from "../../components/Stats";

interface Post {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
}

const posts: Post[] = [
  {
    title: "The Future of Web Development: Top Trends to Watch in 2025",
    category: "Web Development",
    excerpt:
      "Explore the latest web development trends and technologies shaping the future of the web.",
    date: "Apr 10, 2024",
    readTime: "6 min read",
    image:
      "images/blog_images/blog1.jpg",
    link: "/blog/blog4",
  },

  {
    title: "Boost Your E-Commerce Performance with These Simple Tips",
    category: "App Development",
    excerpt:
      "Enhance your e-commerce site's performance with these proven optimization techniques.",
    date: "Feb 28, 2024",
    readTime: "7 min read",
    image:
      "images/blog_images/blog2.jpg",
    link: "/blog/blog2",
  },

  {
    title: "How to Build an E-Commerce Website That Converts in 2025",
    category: "Digital Marketing & SEO",
    excerpt:
      "Discover key features and strategies to build an e-commerce site that boosts sales in 2025.",
    date: "Mar 15, 2024",
    readTime: "4 min read",
    image:
      "images/blog_images/blog5.jpg",
    link: "/blog/blog3",
  },

  {
    title: "Responsive Web Design: Why It’s Crucial for Your Business in 2025",
    category: "Custom Software Solutions",
    excerpt:
      "Learn why responsive design is essential for business success in the mobile-first era.",
    date: "Mar 25, 2024",
    readTime: "5 min read",
    image: "images/blog_images/blog4.jpg",

    link: "/blog/blog1",
  },

  {
    title: " Game-Changing Mobile App Trends to Watch in 2025",
    category: "E-commerce Solutions",
    excerpt:
      "Stay ahead in 2025 with the top 5 mobile app development trends, including AI and more, transforming the app industry!",
    date: "Feb 10, 2024",
    readTime: "5 min read",
    image:
      "images/blog_images/blog3.jpg",
    link: "/blog/blog5",
  },
  {
    title: "Top E-Commerce Security Features You Need for 2025",
    category: "Social Media Marketing",
    excerpt:
      "Learn how SSL certificates and other security features can protect your e-commerce business.",
    date: "Mar 15, 2024",
    readTime: "4 min read",
    image:
      "images/blog_images/blog6.jpg",
    link: "/blog/blog6",
  },
];


export default function Blog() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);


  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  return (
    <main className="bg-gradient-primary">
      <section className="relative h-[95vh] bg-[url('/images/hero_images/blog_hero.jpeg')] bg-center bg-cover">
        <div className="absolute bg-primary w-[100%] h-[95vh] opacity-65"></div>

        <section className="relative pt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:pt-32">
            <div className="text-center">

              <h1 className="my-3 md:my-4 text-2xl sm:text-4xl md:text-5xl font-orbitron font-semibold tracking-wide leading-6 text-white">
                Case Studies &{" "}
                <span className="text-yellow text-2xl md:text-5xl">Blogs</span>
              </h1>
              <p className="text-base sm:text-lg text-white mt-11 md:mt-12 mb-4 md:mb-7 mx-auto max-w-4xl">
                Explore our blogs and case studies for insights on web and app development, digital marketing, and software solutions.
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
        </section>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent"></div>
      </section>

      <div className="flex justify-center flex-wrap md:flex-row flex-col pt-20 pb-10">


        <section className="sm:w-3/4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-xl hover:-translate-y-2 ease-in-out hover:shadow-2xl transition duration-300"
                >
                  {/* Image Wrapper */}
                  <div className="relative scale-100 duration-300 hover:scale-105 cursor-pointer transition">
                    {/* Image */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover "
                    />

                    {/* Overlay */}
                    {/* <div className="absolute inset-0 bg-primary bg-opacity-40 hover:bg-opacity-10 transition duration-300"></div> */}
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
