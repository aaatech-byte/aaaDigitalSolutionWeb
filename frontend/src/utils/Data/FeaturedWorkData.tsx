interface Project {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  challenge: string;
  solution: string;
  result: string;
  technologiesUsed: string;
}

const projects: Project[] = [
    {
      title: "E-Commerce Website for",
      subtitle: "MountWorks Outdoors",
      category: "Web Development",
      description:
        "MountWorks Outdoors faced challenges with their sluggish and difficult-to-navigate online store, which led to a frustrating shopping experience for customers. Users found it hard to explore products and make purchases, resulting in lower engagement and sales.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      features: [
        "Advanced product categorization",
        "Mobile optimization",
        "Secure payment gateways",
      ],
      challenge: "A sluggish, difficult-to-navigate online store.",
      solution:
        "We created a custom Shopify e-commerce store with advanced product categorization, mobile optimization, and secure payment gateways.",
      result:
        "Increased sales, improved user engagement, and a streamlined shopping experience.",
      technologiesUsed: "Shopify, HTML5, CSS3, JavaScript",
    },
    {
      title: "Corporate Website for",
      subtitle: "Kinetic Systems",
      category: "Web Development",
      description:
        "Kinetic Systems struggled with a static website that failed to attract leads and engage visitors effectively. The lack of dynamic content and interactive elements meant potential clients were not engaging with the brand, leading to low conversions and missed opportunities.",
      image:
        "https://media.istockphoto.com/id/1305999733/photo/web-design-desktop.jpg?s=612x612&w=0&k=20&c=mdGnzSrhUGijPuXHR3vA_hrQyshToudcJc8A50L0a9I=",
      features: [
        "Lead-generation forms",
        "Responsive design",
        "Clean and professional design",
      ],
      challenge: "A lack of leads from a static website.",
      solution:
        "Developed a modern WordPress website, with a clean, professional design, lead-generation forms, and responsive design.",
      result:
        "Boosted lead generation and improved user experience across devices.",
      technologiesUsed: "WordPress, PHP, MySQL, Custom Theme",
    },
    {
      title: "Portfolio Website for",
      subtitle: "ArtHouse Collective",
      category: "Web Development",
      description:
        "ArtHouse Collective needed an online presence that could effectively showcase their creative work. Their previous portfolio lacked visibility and interactive features, resulting in low engagement and limited exposure for their unique projects.",
      image:
        "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Fast load times", "Smooth animations", "Engaging features"],
      challenge: "Low visibility of creative work.",
      solution:
        "Built a React.js-powered portfolio with fast load times, smooth animations, and engaging features to showcase their work.",
      result:
        "Increased visibility, improved brand reputation, and client engagement.",
      technologiesUsed: "React.js, Node.js, CSS3, JavaScript",
    },
    {
      title: "On-Demand Delivery App for",
      subtitle: "QuickDrop Logistics",
      category: "Mobile App Development",
      description:
        "QuickDrop Logistics faced challenges with managing and tracking deliveries effectively. The system was disorganized, resulting in delayed shipments and confusion for both customers and the logistics team.",
      image:
        "https://plus.unsplash.com/premium_photo-1664910033852-f1639b57cd9b?q=80&w=2070&auto=format&fit=crop",
      features: [
        "Real-time tracking",
        "Automated delivery management",
        "Customer notifications",
      ],
      challenge: "Disorganized delivery management and tracking.",
      solution:
        "Developed a cross-platform mobile app with real-time tracking, automated delivery management, and customer notifications.",
      result:
        "Enhanced operational efficiency and a smoother user experience for customers.",
      technologiesUsed: "React Native, Firebase, Google Maps API",
    },
    {
      title: "Fitness App for",
      subtitle: "MotionFit",
      category: "Mobile App Development",
      description:
        "MotionFit's existing fitness app lacked effective engagement tools, making it difficult for users to track their fitness progress and stay motivated. Users were leaving the app due to a lack of features that helped them achieve their goals.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
      features: ["Goal-setting", "Workout tracking", "Social sharing"],
      challenge: "Ineffective engagement with fitness tracking.",
      solution:
        "Created a user-friendly fitness tracking app with goal-setting, workout tracking, and social sharing.",
      result:
        "Boosted app retention and user engagement across iOS and Android.",
      technologiesUsed: "Flutter, Dart, Firebase, REST APIs",
    },
    {
      title: "Shopify Store for ",
      subtitle: "EchoCycle Sports",
      category: "Email Marketing & Automation",
      description:
        "EchoCycle Sports faced challenges with their previous e-commerce store due to low conversion rates and a poor mobile shopping experience. Customers found it difficult to complete purchases, leading to abandoned carts and lost sales.",
      image:
        "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg",
      features: [
        "Mobile optimization",
        "Integrated with inventory management",
        "Streamlined order processing",
      ],
      challenge: "Low conversion rates and poor mobile shopping experience.",
      solution:
        "Designed and developed a custom Shopify store optimized for mobile devices, integrated with inventory management, and streamlined order processing.",
      result: "Increased conversion rates and boosted sales.",
      technologiesUsed: "Shopify, Liquid, HTML5, CSS3, JavaScript",
    },
    {
      title: "WooCommerce Store for ",
      subtitle: "UrbanRoots Apparel",
      category: "E-Commerce Solutions",
      description:
        "UrbanRoots Apparel was struggling with a poor user experience on their previous WooCommerce store. Customers found the site difficult to navigate and the checkout process slow, which led to frustration and lost sales.",
      image:
        "https://cdn.dribbble.com/userupload/9089332/file/original-0f288efd42599c346a8f54adf8cde8ff.png?resize=400x0",
      features: ["Responsive design", "Secure checkout", "Easy navigation"],
      challenge: "Difficult navigation and slow checkout process.",
      solution:
        "Built a fully responsive WooCommerce store with secure checkout and easy navigation, leading to higher customer retention.",
      result: "Increased conversions and repeat customer visits.",
      technologiesUsed: "WooCommerce, WordPress, PHP, MySQL",
    },
    {
      title: "SEO Strategy for",
      subtitle: "LuxeFit Wellness",
      category: "Digital Marketing & SEO",
      description:
        "LuxeFit Wellness was facing issues with low visibility in search engine results, which made it difficult for potential clients to find their website. Despite offering great services, they were not getting enough organic traffic.",
      image:
        "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202406/666095d3dda47-top-features-to-look-for-in-learning-management-systems-054402379-16x9.jpeg?size=1200:675",
      features: ["On-page SEO", "Content creation", "Local SEO"],
      challenge: "Low visibility in search engines.",
      solution:
        "Implemented an extensive SEO strategy, including on-page SEO, content creation, and local SEO for better search engine rankings.",
      result: "40% increase in organic traffic, improved search rankings.",
      technologiesUsed:
        "Google Analytics, SEMrush, Yoast SEO, Google Search Console",
    },
    {
      title: "PPC Campaign for",
      subtitle: "GreenStar Farms",
      category: "Digital Marketing & SEO",
      description:
        "GreenStar Farms was struggling with ineffective online advertising that resulted in low lead generation. Their existing campaigns weren’t optimized for their target audience, which made it difficult to generate quality leads.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUubJ9F7OdmNGNRhZDlSZqxjZNvm0J46pFQ&s",
      features: [
        "Targeted Google Ads campaign",
        "Optimized ads for maximum reach and conversions",
      ],
      challenge: "Ineffective online advertising and low lead generation.",
      solution:
        "Managed a targeted Google Ads campaign, optimizing ads for maximum reach and conversions.",
      result: "30% increase in leads and better ad performance.",
      technologiesUsed: "Google Ads, Google Analytics, Keyword Research Tools",
    },
    {
      title: "Instagram Campaign for",
      subtitle: "PureVibe Supplements",
      category: "Social Media Marketing",
      description:
        "PureVibe Supplements had minimal brand visibility on Instagram, which hindered their ability to connect with potential customers. The brand lacked a social media strategy that could drive engagement and promote their products effectively.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsPow6UFHtIMa1u_1WQ3fo82O5xXAnEfJtoA&s",
      features: ["Influencer partnerships", "Visually appealing content"],
      challenge: "Lack of brand exposure on social media.",
      solution:
        "Launched an engaging Instagram campaign that used influencer partnerships and visually appealing content to boost brand visibility.",
      result: "Increased followers, engagement, and brand awareness.",
      technologiesUsed:
        "Instagram Ads, Influencer Partnerships, Analytics Tools",
    },
    {
      title: "Explainer Video for",
      subtitle: "CleanTech Solutions",
      category: "Video Marketing & Branding",
      description:
        "CleanTech Solutions was having trouble explaining their complex range of services to potential clients. Their website lacked clarity, which led to confusion and a low conversion rate.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRh_lcabBw83Z0WlosNURPvwmAJ0p3_kp0eQ&s",
      features: ["Simplified offerings", "Attracted more leads"],
      challenge:
        "Difficulty explaining complex services to potential customers.",
      solution:
        "Produced an engaging explainer video that simplified CleanTech Solutions’ offerings and attracted more leads.",
      result: "Increased conversions and enhanced brand awareness.",
      technologiesUsed:
        "Adobe Premiere Pro, After Effects, Video Hosting Platforms",
    },
    {
      title: "Promotional Video for",
      subtitle: "UrbanVibes Clothing",
      category: "Video Marketing & Branding",
      description:
        "UrbanVibes Clothing had low engagement on their social media platforms, particularly Instagram. Their marketing efforts lacked a dynamic approach to attracting followers and engaging with their audience.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDYPzGQWOrfy0Uo-aN3RFQ3TQm8jCtH7rJOw&s",
      features: ["Dynamic promotional video", "Showcased latest clothing line"],
      challenge: "Low social media engagement.",
      solution:
        "Created a dynamic promotional video showcasing UrbanVibes’ latest clothing line, driving social media interaction.",
      result: "Boosted product sales and social media engagement.",
      technologiesUsed:
        "Adobe Premiere Pro, Final Cut Pro, Social Media Marketing",
    },
    {
      "title": "Retail Inventory Management System",
      "subtitle": "Optimized Stock Control for Retail",
      "category": "Custom Software Solutions",
      "description": "Retail struggled with inventory discrepancies and inefficient stock management, leading to overstocking and lost sales opportunities.",
      "image": "https://www.metamodel.com.au/wp-content/uploads/2024/05/cloud-governance-1-768x424.png",
      "features": ["Real-time stock tracking", "Automated restocking alerts"],
      "challenge": "Inconsistent inventory tracking and manual errors.",
      "solution": "Developed a custom inventory management system that provides real-time tracking, reducing stock inconsistencies.",
      "result": "Improved stock accuracy by 90% and reduced manual errors.",
      "technologiesUsed": "React, Node.js, MongoDB, AWS"
    },
    {
      "title": "AI-Powered Customer Support Chatbot",
      "subtitle": "Enhancing Customer Support for Tech",
      "category": "Custom Software Solutions",
      "description": "Tech faced delays in responding to customer inquiries, leading to lower customer satisfaction and increased support costs.",
      "image": "https://www.sphinx-solution.com/blog/wp-content/uploads/2019/06/successful-software-solutions.jpg",
      "features": ["24/7 automated responses", "Seamless human-agent handoff"],
      "challenge": "High response time in customer support, leading to frustrated customers.",
      "solution": "Developed an AI-driven chatbot that handles common inquiries, reducing the load on human agents.",
      "result": "Reduced response time by 70% and improved customer satisfaction.",
      "technologiesUsed": "Python, TensorFlow, Dialogflow, Node.js"
    }        
  ];

export default projects;