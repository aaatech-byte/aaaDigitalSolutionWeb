import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

Swiper.use([Autoplay]);

const slidesData = [
    { id: 1, title: "", image: "/images/logos_imgs/1.png" },
    { id: 2, title: "", image: "/images/logos_imgs/2.png" },
    { id: 3, title: "", image: "/images/logos_imgs/3.png" },
    { id: 4, title: "", image: "/images/logos_imgs/4.png" },
    { id: 5, title: "", image: "/images/logos_imgs/5.png" },
    { id: 6, title: "", image: "/images/logos_imgs/6.png" },
    { id: 7, title: "", image: "/images/logos_imgs/7.png" },
    { id: 8, title: "", image: "/images/logos_imgs/8.png" },
    { id: 9, title: "", image: "/images/logos_imgs/9.png" },
    { id: 10, title: "", image: "/images/logos_imgs/10.png" },
    { id: 11, title: "", image: "/images/logos_imgs/11.png" },
    { id: 12, title: "", image: "/images/logos_imgs/12.png" },
    { id: 13, title: "", image: "/images/logos_imgs/13.png" },
    { id: 14, title: "", image: "/images/logos_imgs/14.png" },
    { id: 15, title: "", image: "/images/logos_imgs/15.png" },
    { id: 16, title: "", image: "/images/logos_imgs/17.png" },
    // { id: 16, title: "", image: "/images/logos_imgs/16.png" },

];

const LogosSection: React.FC = () => {
    const swiperRef = useRef<Swiper | null>(null);

    useEffect(() => {
        swiperRef.current = new Swiper(".mySwiper", {
            spaceBetween: 20,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
                1280: { slidesPerView: 6 },
            },
            on: {
                slideChangeTransitionEnd: function () {
                    document.querySelectorAll('.swiper-slide .slide-content').forEach(slide => {
                        slide.classList.remove("opacity-100", "scale-105", "shadow-inner", "shadow-[#956f31]-500/50", "border-4", "border-orange-500/50");
                        slide.classList.add("opacity-30", "scale-90", "border-2", "border-[#231e3e]");
                    });

                    const activeSlide = document.querySelector('.swiper-slide-active .slide-content');
                    if (activeSlide) {
                        activeSlide.classList.remove("opacity-30", "scale-90");
                        activeSlide.classList.add("opacity-100", "scale-105", "shadow-inner", "shadow-orange-500/50", "border-4", "border-orange-500/50" );
                    }
                }
            },
        });
    }, []);

    return (
        <section className="flex items-center justify-center py-12 bg-gradient-primary">
            <div className="relative w-full overflow-hidden">
                <div className="swiper mySwiper">
                    <div className="swiper-wrapper my-5 transition-transform duration-500 ease-in-out">
                        {slidesData.map(slide => (
                            <div key={slide.id} className="swiper-slide flex justify-center items-center">
                                <div className="slide-content w-32 h-32 flex flex-col justify-center items-center rounded-xl border-4 opacity-30 border-[#898989] transition-all duration-500 ease-linear ">
                                    <img src={slide.image} alt={slide.title} className="w-24" />
                                    <p className="text-white text-sm mt-2">{slide.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogosSection;