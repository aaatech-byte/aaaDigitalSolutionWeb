import { useEffect } from "react";
import { Button } from "./ui/Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function FeaturedInsights() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const col1 = document.querySelector('.col1') as HTMLElement;
            const col2 = document.querySelector('.col2') as HTMLElement;
    
            if (col1) {
                const col1Translate = 510 - scrollPosition * 0.15;
                col1.style.transform = `translateY(${col1Translate}px)`;
            }
    
            if (col2) {
                const col2Translate = 580 - scrollPosition * 0.15;
                col2.style.transform = `translateY(${col2Translate}px)`;
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    

    return (
        <main className="relative bg-gradient-primary w-full px-4 sm:px-6 lg:px-8 pt-12 pb-16">
            <section className="mx-auto max-w-7xl overflow-hidden flex flex-col lg:flex-row justify-between items-center sm:gap-2 gap-40 ">
                <article className='w-full lg:w-1/3 mb-8 lg:mb-0 '>
                    <h2 className="text-2xl md:text-5xl font-orbitron font-semibold text-white mb-4">
                        Featured <span className="text-yellow">Insights</span>
                    </h2>
                    <p className="sm:text-base text-white max-w-md mt-7 text-sm">
                        Our journey of transforming businesses across services and industries from Concept to completion.
                    </p>
                    <Link to="/contact">
                        <Button variant="primary" size="md" className="group px-3.5 py-2.5 border border-gray-400 font-bold sm:mt-12 mt-9 md:mt-16">
                            Explore Now
                            <ArrowRight className="ml-3 h-7 w-7 bg-yellow text-black rounded-full p-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </article>

                <article className="w-full lg:w-2/3 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 sm:gap-4">
                        <div className="flex flex-col justify-center items-center col1">
                            <div className="cardBox ">
                                <div className="card bg-[url('/images/insight_images/insight_1.jpg')] bg-cover bg-center">
                                    <h3 className="text-base text-left px-2 text-white font-orbitron">2025 Web Development Trends: <span className="text-yellow font-semibold">AI, 5G & PWAs Dominate</span></h3>
                                    <button className="group font-bold mt-4 mx-2 inline-flex justify-start items-start w-full">
                                        <span className="w-24 px-2.5 font-medium tracking-wide cursor-pointer transition-all duration-500 ease-in-out rounded-lg py-2 bg-secondary hover:bg-primary">Explore</span>
                                    </button>
                                    <div className="content absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center text-white p-2 text-center z-20">
                                        <h3 className="text-sm text-left text-white font-orbitron">2025 Web Development Trends: <span className="text-yellow font-semibold">AI, 5G & PWAs Dominate</span></h3>
                                        <p className="text-white text-xs">AI automates, 5G accelerates, and PWAs redefine user experiences—stay ahead or get left behind!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cardBox">
                                <div className="card bg-[url('/images/insight_images/insight_2.jpg')] bg-cover bg-center">
                                    <h3 className="text-base text-left px-2 text-white font-orbitron">AI E-Commerce Personalization 2025: <span className="text-yellow font-semibold">Boost Sales by 40%</span></h3>
                                    <button className="group font-bold mt-4 mx-2 inline-flex justify-start items-start w-full">
                                        <span className="w-24 px-2.5 font-medium tracking-wide cursor-pointer transition-all duration-500 ease-in-out rounded-lg py-2 bg-secondary hover:bg-primary">Explore</span>
                                    </button>
                                    <div className="content absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center text-white p-2 text-center z-20">
                                        <h3 className="text-sm text-left text-white font-orbitron">AI E-Commerce Personalization 2025: <span className="text-yellow font-semibold">Boost Sales by 40%</span></h3>
                                        <p className="text-white text-xs">AI-driven personalization boosts engagement, conversions, and profits like never before.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center pb-0 md:pb-16 col2">
                            <div className="cardBox">
                                <div className="card bg-[url('/images/insight_images/insight_3.jpg')] bg-cover bg-center">
                                    <h3 className="text-base text-left px-2 text-white font-orbitron">Cross-Platform Apps 2025: <span className="text-yellow font-semibold">Save 50% on Development Costs</span></h3>
                                    <button className="group font-bold mt-4 mx-2 inline-flex justify-start items-start w-full">
                                        <span className="w-24 px-2.5 font-medium tracking-wide cursor-pointer transition-all duration-500 ease-in-out rounded-lg py-2 bg-secondary hover:bg-primary">Explore</span>
                                    </button>
                                    <div className="content absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center text-white p-2 text-center z-20">
                                        <h3 className="text-sm text-left text-white font-orbitron">Cross-Platform Apps 2025: <span className="text-yellow font-semibold">Save 50% on Development Costs</span></h3>
                                        <p className="text-white text-xs">Build once, run everywhere—AI-powered tools make app development faster and cheaper.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cardBox">
                                <div className="card bg-[url('/images/insight_images/insight_4.jpg')] bg-cover bg-center">
                                    <h3 className="text-base text-left px-2 text-white font-orbitron">E-Commerce SEO 2025: <span className="text-yellow font-semibold">Rank #1 with Voice & Visual Hacks</span></h3>
                                    <button className="group font-bold mt-4 mx-2 inline-flex justify-start items-start w-full">
                                        <span className="w-24 px-2.5 font-medium tracking-wide cursor-pointer transition-all duration-500 ease-in-out rounded-lg py-2 bg-secondary hover:bg-primary">Explore</span>
                                    </button>
                                    <div className="content absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center text-white p-2 text-center z-20">
                                        <h3 className="text-sm text-left text-white font-orbitron">E-Commerce SEO 2025: <span className="text-yellow font-semibold">Rank #1 with Voice & Visual Hacks</span></h3>
                                        <p className="text-white text-xs">Voice & visual search dominate—adapt or disappear from top search results!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cardBox">
                                <div className="card bg-[url('/images/insight_images/insight_5.jpg')] bg-cover bg-center">
                                    <h3 className="text-base text-left px-2 text-white font-orbitron">Website Redesign 2025:<span className="text-yellow font-semibold"> Boost SEO & Conversions by 50% </span></h3>
                                    <button className="group font-bold mt-4 mx-2 inline-flex justify-start items-start w-full">
                                        <span className="w-24 px-2.5 font-medium tracking-wide cursor-pointer transition-all duration-500 ease-in-out rounded-lg py-2 bg-secondary hover:bg-primary">Explore</span>
                                    </button>
                                    <div className="content absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center text-white p-2 text-center z-20">
                                        <h3 className="text-sm text-left text-white font-orbitron">Website Redesign 2025:<span className="text-yellow font-semibold"> Boost SEO & Conversions by 50% </span></h3>
                                        <p className="text-white text-xs">Faster, smarter, and AI-optimized—your website needs a 2025 upgrade!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="cardBox">
                                <div className="card bg-[url('/images/insight_images/insight_6.jpg')] bg-cover bg-center">
                                    <h3 className="text-base text-left px-2 text-white font-orbitron">AI Marketing 2025: <span className="text-yellow font-semibold">Automate Ads, Content & Analytics </span></h3>
                                    <button className="group font-bold mt-4 mx-2 inline-flex justify-start items-start w-full">
                                        <span className="w-24 px-2.5 font-medium tracking-wide cursor-pointer transition-all duration-500 ease-in-out rounded-lg py-2 bg-secondary hover:bg-primary">Explore</span>
                                    </button>
                                    <div className="content absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center text-white p-2 text-center z-20">
                                        <h3 className="text-sm text-left text-white font-orbitron">AI Marketing 2025: <span className="text-yellow font-semibold">Automate Ads, Content & Analytics</span></h3>
                                        <p className="text-white text-xs">Smarter AI, better targeting—maximize ROI with automated marketing magic!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cardBox">
                                <div className="card bg-[url('/images/insight_images/insight_7.jpg')] bg-cover bg-center">
                                    <h3 className="text-base text-left px-2 text-white font-orbitron">Social Media Trends 2025: <span className="text-yellow font-semibold">Go Viral or Get Forgotten </span></h3>
                                    <button className="group font-bold mt-4 mx-2 inline-flex justify-start items-start w-full">
                                        <span className="w-24 px-2.5 font-medium tracking-wide cursor-pointer transition-all duration-500 ease-in-out rounded-lg py-2 bg-secondary hover:bg-primary">Explore</span>
                                    </button>
                                    <div className="content absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center text-white p-2 text-center z-20">
                                        <h3 className="text-sm text-left text-white font-orbitron">Social Media Trends 2025: <span className="text-yellow font-semibold">Go Viral or Get Forgotten</span></h3>
                                        <p className="text-white text-xs">AI-driven trends shape engagement—get noticed or get forgotten!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cardBox">
                                <div className="card bg-[url('/images/insight_images/insight_8.jpg')] bg-cover bg-center">
                                    <h3 className="text-base text-left px-2 text-white font-orbitron">Video Marketing 2025:<span className="text-yellow font-semibold">Live Streams Drive 80% of Sales</span></h3>
                                    <button className="group font-bold mt-4 mx-2 inline-flex justify-start items-start w-full">
                                        <span className="w-24 px-2.5 font-medium tracking-wide cursor-pointer transition-all duration-500 ease-in-out rounded-lg py-2 bg-secondary hover:bg-primary">Explore</span>
                                    </button>
                                    <div className="content absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center text-white p-2 text-center z-20">
                                        <h3 className="text-sm text-left text-white font-orbitron">Video Marketing 2025:<span className="text-yellow font-semibold">Live Streams Drive 80% of Sales</span></h3>
                                        <p className="text-white text-xs">Real-time video builds trust, boosts sales, and keeps audiences hooked!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default FeaturedInsights;