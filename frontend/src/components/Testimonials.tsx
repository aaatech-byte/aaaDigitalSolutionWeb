import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import testimonialData from '../utils/Data/TestimonialsData'

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
  category: string;
}

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
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              320: { slidesPerView: 1 },
              740: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonialData.map((testimonial, index) => (
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