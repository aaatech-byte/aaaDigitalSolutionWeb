const Blog2 = () => {
  const post = {
    category: "E-Commerce Optimization",
    title: "Boost Your E-Commerce Performance with These Simple Tips",
    publishDate: "Jan 22, 2025",
    image: "/images/blog_images/blog2.jpg",
    desc_p1: `
      Optimizing your e-commerce website is essential for improving user experience, boosting sales, and staying ahead of your competition. In this blog, we'll share simple but effective tips to enhance your e-commerce site's performance, drive more traffic, and increase conversions.
    `,
    desc_h1: "Top E-Commerce Optimization Tips for 2025",
    desc_h2: "Key Strategies to Boost Your Site’s Performance",
    desc_p2:
      "Here are some proven strategies that can help improve the performance of your e-commerce site:",
    desc_benefits: [
      "Faster loading times leading to higher user retention",
      "Improved mobile experience for a larger audience",
      "Better navigation and search functionalities",
      "Enhanced security measures to build customer trust",
    ],
    optimizationSection: {
      title: "Why Website Performance Matters for E-Commerce",
      content: `
        In the highly competitive world of e-commerce, performance is key to retaining customers and driving sales. A slow or unresponsive website can cause visitors to leave, which means missed opportunities for conversions. By improving site performance, you can increase user engagement, satisfaction, and ultimately, your bottom line.
      `,
      points: [
        {
          heading: "Faster Page Load Times",
          text: "A slow-loading website can cause users to leave before they make a purchase. Optimizing your website’s speed can significantly improve conversion rates.",
        },
        {
          heading: "Mobile Optimization",
          text: "More than half of online shoppers use mobile devices. Ensuring your site is fully optimized for mobile users is essential for capturing more sales.",
        },
        {
          heading: "Seamless User Experience",
          text: "A cluttered, difficult-to-navigate website will drive customers away. Streamlining the design and navigation can improve user engagement.",
        },
      ],
      howItSaves: [
        {
          heading: "Reduced Bounce Rate",
          text: "Improved site speed and design will reduce the number of visitors who leave your site quickly, helping to keep them engaged.",
        },
        {
          heading: "Increased Sales",
          text: "A smooth, optimized website leads to a better shopping experience, which can increase conversion rates and lead to more sales.",
        },
      ],
      successStory: {
        title: "Real-World Success Story",
        content: `
          We worked with an e-commerce brand that was facing challenges with slow load times and low conversions. After optimizing their site with faster image loading, responsive design, and improved mobile navigation, they saw a 35% increase in sales and a 25% reduction in bounce rate.
        `,
      },
      conclusion: {
        title: "Conclusion",
        content: `
          In today’s fast-paced e-commerce environment, website performance is critical to success. By focusing on site speed, mobile optimization, and user experience, you can ensure your customers stay engaged and complete their purchases. Start implementing these strategies today and watch your e-commerce business grow.
        `,
      },
    },
  };

  return (
    <main className="bg-gradient-primary">
      <section className="max-w-4xl m-auto pt-24 pb-10">
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-xl font-semibold italic">
            {post.publishDate}
          </p>
        </div>

        <h1 className="font-bold py-5 text-white font-orbitron text-4xl">
          {post.title}
        </h1>
        <img
          className="w-full object-cover rounded-3xl"
          src="images/blog_images/blog2.jpg"
          alt={post.title}
        />

        <div className="descriptions py-3 px-4">
          <p className="font-clashDisplay text-gray-300 text-lg leading-9 tracking-wide">
            {post.desc_p1}
          </p>

          <p className="text-white font-orbitron font-bold pt-5 text-2xl leading-9 tracking-wide">
            {post.desc_h1}
          </p>

          <p className="text-white font-orbitron font-bold pt-5 text-xl leading-9 tracking-wide">
            {post.desc_h2}
          </p>
          <p className="font-clashDisplay text-gray-300 text-lg leading-9 tracking-wide">
            {post.desc_p2}
          </p>

          {[
            {
              title: "1. Optimize Your Page Load Speed",
              desc: "A fast-loading website is essential for retaining visitors. Compress images, use caching, and minimize JavaScript to ensure your site loads quickly.",
            },
            {
              title: "2. Mobile Optimization",
              desc: "With mobile commerce on the rise, it’s crucial that your website is mobile-friendly. Use responsive design to ensure a seamless experience on all devices.",
            },
            {
              title: "3. Simplify Navigation and Search",
              desc: "A user-friendly navigation system makes it easier for customers to find products and make purchases. Ensure your site’s search and filtering capabilities are intuitive.",
            },
            {
              title: "4. Implement Secure Payment Options",
              desc: "Offering secure, reliable payment methods is essential to build customer trust. Implement SSL certificates and provide popular payment options like PayPal or Stripe.",
            },
            {
              title: "5. Focus on User Experience (UX)",
              desc: "A clean, well-organized layout can make all the difference in the shopping experience. Simplify your checkout process and ensure easy access to product information.",
            },
          ].map((tip, index) => (
            <div key={index}>
              <p className="text-white font-orbitron font-bold pt-5 text-xl leading-9 tracking-wide">
                {tip.title}
              </p>
              <p className="font-clashDisplay text-gray-300 text-lg leading-9 tracking-wide">
                {tip.desc}
              </p>
            </div>
          ))}

          <p className="text-white font-orbitron font-bold pt-5 text-xl leading-9 tracking-wide">
            How These Tips Will Benefit Your E-Commerce Site
          </p>
          <ul className="font-clashDisplay text-gray-300 text-lg leading-9 pl-5 tracking-wide">
            {post.desc_benefits.map((benefit, index) => (
              <li key={index} className="list-disc">
                {benefit}
              </li>
            ))}
          </ul>

          <p className="text-white font-orbitron font-bold pt-10 text-2xl leading-9 tracking-wide">
            {post.optimizationSection.title}
          </p>
          <p className="font-clashDisplay text-gray-300 text-lg leading-9 tracking-wide">
            {post.optimizationSection.content}
          </p>

          {post.optimizationSection.points.map((point, index) => (
            <div key={index}>
              <p className="text-white font-orbitron font-bold pt-5 text-xl leading-9 tracking-wide">
                {point.heading}
              </p>
              <p className="font-clashDisplay text-gray-300 text-lg leading-9 tracking-wide">
                {point.text}
              </p>
            </div>
          ))}

          <p className="text-white font-orbitron font-bold pt-10 text-xl leading-9 tracking-wide">
            Real-World Success Story
          </p>
          <p className="font-clashDisplay text-gray-300 text-lg leading-9 tracking-wide">
            {post.optimizationSection.successStory.content}
          </p>

          <p className="text-white font-orbitron font-bold pt-10 text-2xl leading-9 tracking-wide">
            Conclusion
          </p>
          <p className="font-clashDisplay text-gray-300 text-lg leading-9 tracking-wide">
            {post.optimizationSection.conclusion.content}
          </p>
        </div>
      </section>
    </main>
  );
};

export default Blog2;
