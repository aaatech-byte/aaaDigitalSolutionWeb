import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const slides = [
    { desktop: "/images/work_images/desktop_work_1.png", mobile: "/images/work_images/mobile_1.jpeg" },
    { desktop: "/images/work_images/desktop_work_3.png", mobile: "/images/work_images/mobile_3.jpeg" },
    { desktop: "/images/work_images/desktop_work_4.png", mobile: "/images/work_images/mobile_4.jpeg" },
    { desktop: "/images/work_images/desktop_work_5.png", mobile: "/images/work_images/mobile_5.jpeg" },
    { desktop: "/images/work_images/desktop_work_2.png", mobile: "/images/work_images/mobile_2.jpeg" },
    { desktop: "/images/work_images/desktop_work_6.png", mobile: "/images/work_images/mobile_6.jpeg" },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const updateCarousel = (index: number) => {
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="work" className="relative bg-gradient-primary w-full px-4 sm:px-6 lg:px-8 pt-12 pb-12">
            <div className="text-center px-4">
                <h2 className=" text-2xl md:text-5xl font-orbitron font-semibold text-white mb-4">
                    Our <span className="text-yellow">Work</span>
                </h2>
                <p className="text-base sm:text-lg text-white max-w-3xl mx-auto">
                Transforming Ideas into Impactful Digital Experiences That Drive Growth and Innovation
                </p>
            </div>
            <div className="relative w-full mx-auto max-w-7xl overflow-hidden">
                <div
                    className="flex h-[15rem] sm:h-[20rem] md:h-[30rem] lg:h-[40rem] xl:h-[49rem] transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div 
                            key={index}
                            className="w-full shrink-0 flex justify-center items-center duration-700 ease-in-out"
                        >
                            <div className="relative w-[90%] sm:w-[85%] h-[75%] sm:h-[80%]">
                                <img src="/images/work_images/desktop_top.png" className="w-full" alt="Browser Frame" />
                                <img
                                    className="absolute w-full h-full"
                                    src={slide.desktop}
                                    alt="Desktop View"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute top-[80%] sm:top-[79%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 z-30 w-[80px] sm:w-[130px] md:w-[170px] lg:w-[270px]">
                <img src="/images/work_images/phone_body.png" className="mx-auto relative" alt="Phone" />
                <div className="absolute top-[11.5%] left-[24%] w-[52%] h-[76%] overflow-hidden">
                    <img className="h-full w-full" src={slides[currentIndex].mobile} alt="Mobile View" />
                </div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-500"}`}
                        onClick={() => updateCarousel(index)}
                    />
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute top-[58%] left-4 sm:left-6 lg:left-10 xl:left-48 transform -translate-y-1/2 text-yellow font-bold  bg-white/30 p-2 sm:p-3 rounded-full"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-[58%] right-4 sm:right-6 lg:right-10 xl:right-48 transform -translate-y-1/2 text-yellow font-bold bg-white/30 p-2 sm:p-3 rounded-full"
            >
                &#10095;
            </button>
        </section>
    );
};

export default Carousel;
