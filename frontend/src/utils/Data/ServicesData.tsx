import { Code, Smartphone, Megaphone, Gauge, Users, Clapperboard, ShoppingBag, Rss } from "lucide-react";

interface Service {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  li1: string;
  li2: string;
  li3: string;
  li4: string;
  li5: string;
  bg_link: string;
}

const services: Service[] = [
    {
      icon: Code,
      title: "Web",
      subtitle: " Development",
      description:
        "Build high-performance, responsive websites tailored to your business needs, providing seamless user experiences and secure platforms.",
      li1: "Custom Web Development",
      li2: "E-Commerce Development",
      li3: "WordPress Development",
      li4: "Shopify Store Setup",
      li5: "Website Redesign",
      bg_link: "/images/services/web.jpg",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      subtitle: " Development",
      description:
        "Develop innovative, user-friendly mobile apps for iOS and Android that engage users and enhance your business presence on mobile platforms.",
      li1: "Custom Mobile App Development",
      li2: "Cross-Platform Development",
      li3: "App Maintenance & Updates",
      li4: "Mobile App UI/UX Design",
      li5: "App Optimization",
      bg_link: "/images/services/mobile_dev.jpg",
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce",
      subtitle: " Solutions",
      description:
        "Create scalable, secure, and conversion-optimized online stores that provide a seamless shopping experience and drive sales.",
      li1: "Custom E-Commerce Platforms",
      li2: "Payment Gateway Integration",
      li3: "E-Commerce App Development",
      li4: "Product Management Systems",
      li5: "E-Commerce Analytics",
      bg_link: "/images/services/ecom2.jpg",
    },
    {
      icon: Users,
      title: "Custom Software ",
      subtitle: " Solutions",
      description:
        "Develop tailored software solutions to automate business processes, integrate systems, and enhance operational efficiency.",
      li1: "Bespoke Business Software",
      li2: "CRM Development",
      li3: "ERP Systems",
      li4: "API Integrations",
      li5: "Cloud-Based Software",
      bg_link: "/images/services/software_sol.jpg",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing &",
      subtitle: " SEO",
      description:
        "Increase visibility, drive traffic, and improve rankings with targeted SEO strategies and digital marketing campaigns that bring high ROI.",
      li1: "On-Page & Off-Page SEO",
      li2: "Local SEO",
      li3: "PPC Management (Google Ads)",
      li4: "Content Marketing & Strategy",
      li5: "SEO Audits",
      bg_link: "/images/services/digital_mar.jpg",
    },
    {
      icon: Rss,
      title: "Social Media",
      subtitle: " Marketing",
      description:
        "Boost your brand’s presence with targeted social media campaigns, content creation, and community engagement across key platforms.",
      li1: "Social Media Strategy Development",
      li2: "Social Media Advertising",
      li3: "Content Creation & Scheduling",
      li4: "Community Management",
      li5: "Influencer Marketing",
      bg_link: "/images/services/social_mar_2.jpg",
    },
    {
      icon: Clapperboard,
      title: "Video Marketing &",
      subtitle: " Branding",
      description:
        "Create engaging video content that drives brand awareness, builds trust, and enhances customer conversions.",
      li1: "Explainer Videos",
      li2: "Brand Storytelling",
      li3: "Product Demos & Tutorials",
      li4: "Video Ads & Social Media Clips",
      li5: "Video SEO",
      bg_link: "images/services/video_mar.jpg",
    },
    {
      icon: Gauge,
      title: "Email Marketing &",
      subtitle: " Automation",
      description:
        "Engage and convert your audience with personalized, automated email campaigns and lead generation strategies.",
      li1: "Email Campaign Management",
      li2: "Marketing Automation",
      li3: "Lead Generation Campaigns",
      li4: "List Segmentation",
      li5: "A/B Testing & Optimization",
      bg_link: "/images/services/email.jpg",
    }
  ];

export default services;