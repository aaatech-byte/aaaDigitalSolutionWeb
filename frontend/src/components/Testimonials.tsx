import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Define Testimonial Type
interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
  category: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Emily R.",
    role: "CEO, LearnSphere Inc.",
    content:
      "We needed a high-performing, SEO-friendly website for our education platform, and they delivered exactly what we envisioned. The new design has significantly boosted engagement and trust among our users.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    category: "Web Development",
  },
  {
    name: "Jason T.",
    role: "Co-Founder, EcoVolt Systems",
    content:
      "Their team built a robust website for our renewable energy solutions company. It’s sleek, responsive, and showcases our services perfectly. Couldn’t be happier!",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    category: "Web Development",
  },
  {
    name: "Sarah K.",
    role: "Owner, HandyNest",
    content:
      "We were looking for an easy-to-use mobile app for our home services platform, and they exceeded our expectations. The app runs smoothly on both iOS and Android, and our customers are loving it.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    category: "Mobile App Development",
  },
  {
    name: "David M.",
    role: "CTO, RideWave Rentals",
    content:
      "The app they created for our bike rental business is intuitive and feature-rich. It’s helped us improve bookings and deliver a better customer experience.",
    image:
      "https://media.istockphoto.com/id/1476171646/photo/young-woman-ready-for-job-business-concept.jpg?s=612x612&w=0&k=20&c=DaYoIWA0PemBp_gwRflBhZH193puk3z-chb7N12adfY=",
    category: "Mobile App Development",
  },
  {
    name: "Lisa P.",
    role: "Founder, RadiantGlow Skincare",
    content:
      "Their team launched a stunning Shopify store for our skincare brand, and it’s been a game-changer. Sales have been consistently growing since day one!",
    image:
      "https://www.shutterstock.com/image-photo/confident-smiling-middle-aged-business-600nw-2451544833.jpg",
    category: "E-Commerce Solutions",
  },
  {
    name: "Ryan S.",
    role: "Manager, HavenLiving Interiors",
    content:
      "Our online furniture store needed an overhaul, and they delivered a platform that’s fast, secure, and optimized for sales. It’s a huge win for our business.",
    image:
      "https://www.shutterstock.com/image-photo/headshot-smiling-handsome-hindu-man-260nw-2115297203.jpg",
    category: "E-Commerce Solutions",
  },
  {
    name: "Olivia W.",
    role: "Marketing Director, UrbanScape Designs",
    content:
      "Thanks to their SEO expertise, our website now ranks on the first page for several competitive keywords. We’ve seen a 40% increase in organic traffic!",
    image:
      "https://img.freepik.com/free-photo/portrait-businesswoman-window-2_1262-1491.jpg",
    category: "SEO & Digital Marketing",
  },
  {
    name: "Brian L.",
    role: "Owner, FlexPro Fitness",
    content:
      "Their social media strategy and ad management have given us the exposure we needed. Leads are pouring in, and we’re thrilled with the results.",
    image:
      "https://i.pinimg.com/originals/37/4c/c0/374cc0b39ee69f4f2b3eb29de7aea684.jpg",
    category: "SEO & Digital Marketing",
  },
  {
    name: "Natalie H.",
    role: "Product Manager, StreamView Media",
    content:
      "Our app’s new design is a hit with our users! It’s intuitive, visually stunning, and has significantly improved retention rates.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtFvVKz3jmx8wSX7U5WiK-g6tN7pVr4lkCA&s",
    category: "UI/UX Design",
  },
  {
    name: "Kevin D.",
    role: "CEO, BistroCraft",
    content:
      "They redesigned our website with a clean, modern look, making it much easier for customers to navigate. The results have been fantastic.",
    image:
      "https://www.shutterstock.com/image-photo/headshot-satisfied-cheerful-handsome-man-260nw-793117360.jpg",
    category: "UI/UX Design",
  },
  {
    name: "Sophia G.",
    role: "Owner, LuxeNest Decor",
    content:
      "Our website’s loading time was a major issue, but after their optimization, it’s blazing fast. The improvement in user experience is incredible.",
    image:
      "https://st4.depositphotos.com/4678277/28917/i/450/depositphotos_289173464-stock-photo-close-up-photo-amazing-he.jpg",
    category: "Performance Optimization",
  },
  {
    name: "Mark P.",
    role: "Founder, AutoNext",
    content:
      "They streamlined our site’s performance, and the difference is clear. Both our traffic and conversions have seen a noticeable boost.",
    image:
      "https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg",
    category: "Performance Optimization",
  },
  {
    name: "Laura C.",
    role: "Operations Manager, FreshFields Agriculture",
    content:
      "Their custom software solution has completely transformed our supply chain operations. It’s efficient, reliable, and easy to use.",
    image:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    category: "Custom Software Solutions",
  },
  {
    name: "Ethan J.",
    role: "Director, PrimeTrack Logistics",
    content:
      "We had a complex workflow issue that required a unique solution, and they nailed it. The software has saved us countless hours and improved productivity.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
    category: "Custom Software Solutions",
  },
];


export default function Testimonials() {

  return (
    <main className="bg-cover relative bg-gradient-primary">
      <section className="mx-2 sm:mx-10 py-12">
        <div className="text-center">
          <h2 className=" text-2xl md:text-5xl font-orbitron font-semibold text-white mb-4">
            What Our <span className="text-yellow">Clients Say</span>
          </h2>
          <p className="text-base sm:textlg text-[#FFFFFF] max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients.
          </p>
        </div>

        <div className="w-full container mx-auto pt-12">
          <Swiper
            spaceBetween={1}
            centeredSlides
            loop
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              320: { slidesPerView: 1 },
              740: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialsCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
}

interface TestimonialsCardProps {
  testimonial: Testimonial;
}

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({ testimonial }) => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gradient-primary rounded-xl p-3 sm:p-6 h-full sm:h-[21rem] shadow-lg flex justify-between flex-col ">
          <div>
            <div className="flex items-center mb-4 gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <img src="/icons/star.png" className="w-6" alt="" />
              ))}
            </div>
            <p className="text-gray-200 text-left text-base pt-3 pb-6">{testimonial.content}</p>
          </div>
          <div className="flex items-center text-left pt-3">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <code className="font-semibold text-white">{testimonial.name}</code>
              <div>
                <code className="text-white text-sm">{testimonial.role}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};