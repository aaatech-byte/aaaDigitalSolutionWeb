// import React from "react";
// import { Search, TrendingUp, Globe, FileText } from "lucide-react";
// import ServiceHero from "./ServiceHero";
// import ProcessTimeline from "../../components/ProcessTimeline";
// import ContactCTA from "../../components/ContactCTA";

// const features = [
//   {
//     icon: "Search", // Example icon
//     title: "Social Media Strategy Development",
//     description: "Create a roadmap for growing your brand on social platforms",
//   },
//   {
//     icon: "TrendingUp", // Example icon
//     title: "Social Media Advertising",
//     description: "Reach the right audience with targeted ad campaigns on Facebook, Instagram, LinkedIn, and more",
//   },
//   {
//     icon: "Globe", // Example icon
//     title: "Content Creation & Scheduling",
//     description: "Keep your social media active and engaging with high-quality content",
//   },
//   {
//     icon: "FileText", // Example icon
//     title: "Community Management",
//     description: "Foster relationships with your audience and build a loyal community",
//   },
// ];


// const process = [
//   {
//     title: "Social Media Audit",
//     description: "In-depth analysis of your current social media presence, identifying strengths, weaknesses, and opportunities for improvement.",
//   },
//   {
//     title: "Custom Strategy Development",
//     description: "Crafting a unique social media marketing strategy tailored to your brand's goals, audience, and industry trends.",
//   },
//   {
//     title: "Execution & Campaigns",
//     description: "Implementing engaging campaigns and content strategies that resonate with your audience and drive meaningful interactions.",
//   },
//   {
//     title: "Performance Tracking & Optimization",
//     description: "Constantly monitoring key metrics to assess success and refine strategies for maximum engagement and growth.",
//   },
// ];



// export default function SocialMarketing() {
//   return (
//     <main className="bg-white">
//       <div
//         className="bg-[url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
//             relative h-[94vh] bg-cover bg-center pt-20 "
//       >
//         <div className="absolute bg-[#434343] z-10 w-[100%] h-[88%] opacity-80"></div>
//         {/* <div className="relative h-[90vh]  pt-20 bg-[url('https://thumbs.wbm.im/pw/medium/34950f1f017647cd3f8484485b040686.avif')] bg-cover bg-center"> */}
        // <ServiceHero
        //   title="Social Media Marketing"
        //   subtitle="Boost Engagement with Targeted Social Media Strategies"
        //   description="Build brand awareness and engage your audience with targeted social media campaigns. From strategy development to influencer marketing, we help you grow your online community and drive results."
        // />
//       </div>

//       <section className="py-20">
//         <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="p-6 transition duration-300 bg-white border border-gray-200 rounded-xl hover:border-primary hover:shadow-lg"
//               >
//                 <feature.icon className="w-12 h-12 mb-4 text-primary" />
//                 <h3 className="mb-2 text-xl font-semibold text-gray-900">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <ProcessTimeline steps={process} />
//       <ContactCTA />
//     </main>
//   );
// }






























import React from "react";
import { Codesandbox, Megaphone , Cloud, Zap } from "lucide-react";
import ServiceHero from "./ServiceHero";
import ProcessTimeline from "../../components/ProcessTimeline";
import ContactCTA from "../../components/ContactCTA";

const features = [
  {
    icon: Codesandbox,
    title: "Social Media Strategy Development",
    description: "Create a roadmap for growing your brand on social platforms",
  },
  {
    icon: Megaphone,
    title: "Social Media Advertising",
        description: "Reach the right audience with targeted ad campaigns on Facebook, Instagram, LinkedIn, and more",
  },
  {
    icon: Cloud,
    title: "Execution & Campaigns",
        description: "Implementing engaging campaigns and content strategies that resonate with your audience and drive meaningful interactions.",
  },
  {
    icon: Zap,
    title: "Community Management",
    description: "Foster relationships with your audience and build a loyal community",
  },
];

const process = [
  {
    title: "Social Media Audit",
    description: "In-depth analysis of your current social media presence, identifying strengths, weaknesses, and opportunities for improvement.",
  },
  {
    title: "Custom Strategy Development",
    description: "Crafting a unique social media marketing strategy tailored to your brand's goals, audience, and industry trends.",
  },
  {
    title: "Execution & Campaigns",
    description: "Implementing engaging campaigns and content strategies that resonate with your audience and drive meaningful interactions.",
  },
  {
    title: "Performance Tracking & Optimization",
    description: "Constantly monitoring key metrics to assess success and refine strategies for maximum engagement and growth.",
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
          title="Social Media Marketing"
          subtitle="Boost Engagement with Targeted Social Media Strategies"
          description="Build brand awareness and engage your audience with targeted social media campaigns. From strategy development to influencer marketing, we help you grow your online community and drive results."
        />
      </div>

      <section className="py-16 bg-gradient-primary">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 transition duration-300 border border-gray-200 bg-primary rounded-xl hover:border-primary hover:shadow-lg"
              >
                <div className="flex items-start justify-center">
                <feature.icon className="w-12 h-12 mb-4 text-yellow" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-center font-orbitron text-[#FFFFFF]">
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
            <h2 className="text-3xl font-bold font-orbitron text-[#FFFFFF]">
              Our <span className="text-yellow">Technology Stack</span>
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
                className="px-6 py-4 text-center transition-shadow duration-300 rounded-lg shadow-sm bg-primary bg-we hover:shadow-lg"
              >
                <p className="text-xl font-semibold text-[#FFFFFF]">{item.tech}</p>
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
