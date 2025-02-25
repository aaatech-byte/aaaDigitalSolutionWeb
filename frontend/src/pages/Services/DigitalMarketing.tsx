import { Target, TrendingUp, BarChart, Users } from "lucide-react";
import ServiceHero from "./ServiceHero";
import ProcessTimeline from "../../components/ProcessTimeline";
import ContactCTA from "../../components/ContactCTA";
import { MarketingMetrics } from "../../components/marketing/MarketingMetrics";
import { CaseStudyCard } from "../../components/marketing/CaseStudyCard";

const features = [
  {
    icon: Target,
    title: "On-Page & Off-Page SEO",
    description:
      "Optimize your site’s performance and rankings on search engines with SEO best practices.",
  },
  {
    icon: TrendingUp,
    title: "Local SEO",
    description: "Target local customers with location-based SEO strategies.",
  },
  {
    icon: BarChart,
    title: "PPC Management (Google Ads)",
    description:
      "Maximize your ad spend with expertly managed Google Ads campaigns.",
  },
  {
    icon: Users,
    title: "Content Marketing & Strategy ",
    description:
      "Drive engagement and build authority with content that resonates with your audience.",
  },
];

const process = [
  {
    title: "Research",
    description:
      "Comprehensive digital market and competitor analysis to identify opportunities and trends.",
  },
  {
    title: "Strategy",
    description:
      "Creation of a customized digital marketing plan focusing on SEO, SEM, social media, and content marketing.",
  },
  {
    title: "Implementation",
    description:
      "Execution of digital campaigns across platforms including Google Ads, Facebook, Instagram, and email marketing.",
  },
  {
    title: "Optimization",
    description:
      "Ongoing performance tracking and data-driven adjustments to improve campaign effectiveness and ROI.",
  },
];

export default function DigitalMarketing() {
  return (
    <main className="bg-white">
      <div
        className="bg-[url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
            relative h-[94vh] bg-cover bg-center pt-16 "
      >
        <div className="absolute bg-primary z-10 w-[100%] h-[89.5%] opacity-80"></div>
        {/* <div className="relative h-[90vh]  pt-20 bg-[url('https://thumbs.wbm.im/pw/medium/34950f1f017647cd3f8484485b040686.avif')] bg-cover bg-center"> */}
        <ServiceHero
          title="Digital Marketing & SEO"
          subtitle="Custom Web Applications Built for Growth"
          description="Drive traffic, increase visibility, and improve rankings with our expert digital marketing and SEO services. Our strategies are designed to provide you with the highest ROI, helping your business grow online."
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent"></div>
      </div>

      <section className="py-20 bg-gradient-primary">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="p-5 text-center transition duration-300 ease-in-out border border-gray-200 cursor-pointer hover:border-none hover:scale-105 rounded-xl hover:shadow-lg">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-yellow" />
              <h3 className="mb-2 text-lg font-semibold text-white font-orbitron">{feature.title}</h3>
                <p className="text-gray-200 font-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarketingMetrics />
      <ProcessTimeline steps={process} />
      <CaseStudyCard />
      <ContactCTA />
    </main>
  );
}
