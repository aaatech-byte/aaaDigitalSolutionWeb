interface Post {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
}

const posts: Post[] = [
  {
    title: "The Future of Web Development: Top Trends to Watch in 2025",
    category: "Web Development",
    excerpt:
      "Explore the latest web development trends and technologies shaping the future of the web.",
    date: "Apr 10, 2024",
    readTime: "6 min read",
    image: "images/blog_images/blog1.jpg",
    link: "/blog/blog4",
  },
  {
    title: "Boost Your E-Commerce Performance with These Simple Tips",
    category: "App Development",
    excerpt:
      "Enhance your e-commerce site's performance with these proven optimization techniques.",
    date: "Feb 28, 2024",
    readTime: "7 min read",
    image: "images/blog_images/blog2.jpg",
    link: "/blog/blog2",
  },
  {
    title: "How to Build an E-Commerce Website That Converts in 2025",
    category: "Digital Marketing & SEO",
    excerpt:
      "Discover key features and strategies to build an e-commerce site that boosts sales in 2025.",
    date: "Mar 15, 2024",
    readTime: "4 min read",
    image: "images/blog_images/blog3.jpg",
    link: "/blog/blog3",
  },
  {
    title: "Responsive Web Design: Why It’s Crucial for Your Business in 2025",
    category: "Custom Software Solutions",
    excerpt:
      "Learn why responsive design is essential for business success in the mobile-first era.",
    date: "Mar 25, 2024",
    readTime: "5 min read",
    image: "images/blog_images/blog4.jpg",
    link: "/blog/blog1",
  },
  {
    title: "Game-Changing Mobile App Trends to Watch in 2025",
    category: "E-commerce Solutions",
    excerpt:
      "Stay ahead in 2025 with the top 5 mobile app development trends, including AI and more, transforming the app industry!",
    date: "Feb 10, 2024",
    readTime: "5 min read",
    image: "images/blog_images/blog5.jpg",
    link: "/blog/blog5",
  },
  {
    title: "Top E-Commerce Security Features You Need for 2025",
    category: "Social Media Marketing",
    excerpt:
      "Learn how SSL certificates and other security features can protect your e-commerce business.",
    date: "Mar 15, 2024",
    readTime: "4 min read",
    image: "images/blog_images/blog6.jpg",
    link: "/blog/blog6",
  },
];

export default posts;