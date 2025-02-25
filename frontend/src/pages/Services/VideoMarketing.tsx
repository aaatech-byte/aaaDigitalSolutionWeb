import { Video, Zap , Megaphone, Clapperboard } from "lucide-react";
import ServiceHero from "./ServiceHero";
import ProcessTimeline from "../../components/ProcessTimeline";
import ContactCTA from "../../components/ContactCTA";

const features = [
  {
    icon: Video,
    title: "Explainer Videos",
    description:
      "Simplify complex concepts with engaging and informative explainer videos.",
  },
  {
    icon: Megaphone,
    title: "Product Demos & Tutorials",
    description:
      "Showcase your products in action with compelling video demos and tutorials.",
  },
  {
    icon: Clapperboard,
    title: "Execution & Campaigns",
        description: "Implementing engaging campaigns and content strategies that resonate with your audience and drive meaningful interactions.",
  },
  {
    icon: Zap,
    title: "Brand Storytelling",
    description:
      " Build an emotional connection with your audience through powerful brand stories.",
  },
];


const process = [
  {
    title: "Video Strategy",
    description:
      "Creating a custom video marketing plan that aligns with your brand's goals, target audience, and messaging. This step involves identifying the right video types and platforms to maximize impact.",
  },
  {
    title: "Content Creation",
    description:
      "Producing high-quality, engaging video content that tells your brand’s story. This includes scripting, filming, editing, and adding elements like branding, calls-to-action, and visual effects to enhance viewer engagement.",
  },
  {
    title: "Distribution",
    description:
      "Sharing your videos across multiple platforms, including social media, YouTube, your website, and email campaigns. We ensure your videos reach the right audience at the optimal time for maximum exposure.",
  },
  {
    title: "Performance Tracking",
    description:
      "Monitoring video performance using analytics tools to measure key metrics like view count, engagement rate, and conversion. This helps us refine strategies and improve future video content for stronger branding results.",
  },
];

export default function SocialMarketing() {
  return (
    <main className="bg-white">
      <div
        className="bg-[url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
            relative h-[94vh] bg-cover bg-center pt-16 "
      >
        <div className="absolute bg-gradient-primary z-10 w-[100%] h-[91%] opacity-80"></div>
        {/* <div className="relative h-[90vh]  pt-20 bg-[url('https://thumbs.wbm.im/pw/medium/34950f1f017647cd3f8484485b040686.avif')] bg-cover bg-center"> */}
        <ServiceHero
          title="Video Marketing & Branding"
          subtitle="Craft Engaging Videos that Strengthen Your Brand"
          description="Elevate your brand with engaging video content that captures attention and drives conversions. From explainer videos to product demos, our video solutions are designed to enhance customer experience and build trust."
        />
      </div>

      <section className="py-20 bg-gradient-primary">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 transition duration-300 border border-gray-200 bg-primary rounded-xl hover:border-primary hover:shadow-lg"
              >
                <div className="flex items-center justify-center ">
                <feature.icon className="w-12 h-12 mb-4 text-yellow" />
                </div>
                <h3 className="mb-2 text-xl font-semibold font-orbitron text-center text-[#FFFFFF]">
                  {feature.title}
                </h3>
                <p className="text-[#FFFFFF]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline steps={process} />
      <ContactCTA />
    </main>
  );
}
