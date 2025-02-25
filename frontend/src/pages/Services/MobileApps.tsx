import React from "react";
import { Smartphone, Cloud, Code, Zap } from "lucide-react";
import ServiceHero from "./ServiceHero";
import ProcessTimeline from "../../components/ProcessTimeline";
import ContactCTA from "../../components/ContactCTA";

const features = [
  {
    icon: Smartphone,
    title: "Native Development",
    description: "High-performance native apps for iOS and Android platforms",
  },
  {
    icon: Code,
    title: "Custom Development",
    description:
      "Build apps that reflect your brand, engage users, and enhance business growth.",
  },
  {
    icon: Cloud,
    title: "Cross-Platform",
    description:
      "Reach a wider audience with apps that run seamlessly on iOS and Android.",
  },
  {
    icon: Zap,
    title: "App Optimization",
    description:
      " Improve app performance and user retention with tailored optimization strategies.",
  },
];

const process = [
  {
    title: "Discovery",
    description:
      "We start by understanding your unique business goals, target audience, and technical requirements, ensuring every aspect is aligned with your vision.",
  },
  {
    title: "Planning",
    description:
      "We create a comprehensive strategy with detailed specifications, timelines, and a clear roadmap to ensure your project’s success from start to finish.",
  },
  {
    title: "Development",
    description:
      "Our team builds your solution using agile methodologies, ensuring rapid development cycles, flexibility, and a high-quality, scalable product.",
  },
  {
    title: "Testing",
    description:
      "Rigorous testing ensures your website performs flawlessly—optimized for speed, security, and user experience, with thorough QA checks.",
  },
  {
    title: "Launch",
    description:
      "We ensure a smooth and seamless deployment, followed by ongoing support to ensure your website remains up-to-date and fully optimized.",
  },
];

export default function MobileApps() {
  return (
    <main className="bg-gradient-primary">
      <div
        className="bg-[url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
            relative h-[94vh] bg-cover bg-center pt-16 "
      >
        <div className="absolute bg-gradient-primary z-10 w-[100%] h-[91%] opacity-80"></div>
        {/* <div className="relative h-[90vh]  pt-20 bg-[url('https://thumbs.wbm.im/pw/medium/34950f1f017647cd3f8484485b040686.avif')] bg-cover bg-center"> */}
        <ServiceHero
          title="Mobile App Development"
          subtitle="Mobile Apps Designed to Accelerate Your Growth"
          description="Elevate your mobile presence with intuitive and user-friendly mobile apps for iOS and Android. Our solutions engage users and enhance your brand's presence across mobile platforms."
        />
      </div>

      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 transition duration-300 border border-gray-200 bg-primary rounded-xl hover:border-primary hover:shadow-lg"
              >
                <div className="flex items-center justify-center">
                <feature.icon className="w-12 h-12 mb-4 text-yellow" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-center text-[#FFFFFF] font-orbitron">
                  {feature.title}
                </h3>
                <p className="text-[#FFFFFF]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline steps={process} />

      <section className="py-10 bg-gray-100"
      style={{
          background: 'linear-gradient(356deg, rgba(11, 191, 139, 0.23), transparent)'
        }}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#FFFFFF]">
              Our <span className="text-yellow font-orbitron">Technology Stack</span>
            </h2>
            <p className="mt-4 text-xl text-[#FFFFFF]">
              We leverage the latest tools and frameworks to deliver
              high-quality, robust mobile applications.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              {
                tech: "iOS (Swift)",
                description:
                  "Swift is used for building high-performance iOS applications.",
              },
              {
                tech: "Android (Kotlin)",
                description:
                  "Kotlin allows us to create modern, clean, and efficient Android apps.",
              },
              {
                tech: "React Native",
                description:
                  "React Native enables us to build cross-platform apps with native performance.",
              },
              {
                tech: "Flutter",
                description:
                  "Flutter allows for fast development of natively compiled applications across mobile, web, and desktop from a single codebase.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="px-6 py-4 text-center transition-shadow duration-300 rounded-lg shadow-sm bg-primary hover:shadow-lg"
              >
                <p className="text-xl font-semibold text-yellow">{item.tech}</p>
                <p className="mt-4 text-sm text-[#FFFFFF]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
