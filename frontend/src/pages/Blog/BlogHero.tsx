import { ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Link } from "react-router-dom";


function BlogHero() {
    return (
        <>
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
                            <Link to="/contact">
                                <Button
                                    variant="primary"
                                    size="md"
                                    className="group px-4 py-3 font-bold"
                                >
                                    Let's Get Started
                                    <ArrowRight className="ml-3 h-7 w-7 bg-yellow text-black rounded-full p-1 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent"></div>
            </section>
        </>
    )
}

export default BlogHero