const Blog1 = () => {
  const post = {
    category: "Web Development",
    title: "Why Your Website Needs a Mobile-First Design in 2025",
    publishDate: "Jan 12, 2025",
    image: "/images/blog_images/blog4.jpg",
    desc_h1: "Introduction:",
    desc_p1: `
        The digital landscape is shifting rapidly, and mobile-first design has become a necessity for websites in 2025. With over half of all global web traffic coming from mobile devices, it’s more important than ever for businesses to prioritize mobile optimization. Discover how this design strategy can enhance SEO, user experience, and conversion rates.
      `,
    desc_h2: "Why Mobile-First Design Matters in 2025:",
    desc_h3: "Google’s Mobile-First Indexing:",
    desc_p2:
      "Google now primarily uses mobile versions of content for indexing and ranking. A mobile-friendly site boosts your SEO rankings, driving more organic traffic to your business.",
    desc_h4: "Better User Experience:",
    desc_p3:
      "Mobile-first design ensures that visitors on smartphones and tablets enjoy a seamless, fast, and intuitive browsing experience, which can reduce bounce rates and increase engagement.",
    desc_h5: "Improved Conversion Rates:",
    desc_p4:
      "By reducing friction in the user experience and making your website easy to navigate on smaller screens, mobile-first design increases the likelihood of conversions—leading to more sales or leads for your business.",
    desc_h6: "Key Benefits of Mobile-First Design:",
    desc_h7: "SEO Advantages:",
    desc_p5:
      "A mobile-friendly website improves your search rankings and makes your business more discoverable.",
    desc_h8: "Increased User Engagement::",
    desc_p6: `With faster loading speeds and responsive layouts, users spend more time on your website, resulting in increased engagement.`,
    desc_h9: "Boosted Conversions:",
    desc_p7: `An optimized mobile site streamlines the customer journey, making it easier for potential customers to convert.`,
    desc_h10: "How We Helped a Client Achieve Massive Results:",
    desc_p8: `We recently helped a leading e-commerce brand redesign their website with a mobile-first approach. As a result, their mobile traffic increased by 30%, and they saw a 20% boost in sales within just three months!`,
    desc_h11: "Test on Mobile Devices:",
    desc_p9: ` Ensure your design is fully responsive across various mobile devices.`,
    desc_h12: "Focus on Speed:",
    desc_p10: ` Mobile users want fast-loading sites. Compress images and minify code to improve loading times.`,
    desc_h13: "Simplify Navigation:",
    desc_p11: ` Mobile users prefer simple, easy-to-follow navigation to access what they need quickly.`,
    desc_h14: "Conclusion",
    desc_p12: `If you want to ensure that your website remains competitive and provides a seamless experience for mobile users, now is the time to adopt mobile-first design. Reach out to us today, and we’ll help you create a mobile-friendly website that boosts both your SEO rankings and conversion rates.`,
  };

  return (
    <>
    <main className="bg-gradient-primary">
      <section className="max-w-4xl m-auto pt-24 pb-10">
        <div className="flex justify-between items-center">
          {/* <span className="bg-primary text-white font-bold text-sm px-3 py-2 cursor-pointer shadow-md hover:shadow-lg rounded-2xl ">{post.category}</span> */}
          {/* <p className="text-white font-bold text-xl cursor-pointer rounded-2xl ">
            {post.category}
          </p> */}
          <p className="text-gray-300 text-xl font-semibold italic">
            {post.publishDate}
          </p>
        </div>

        <h1 className="font-bold py-5 font-serif text-white  text-4xl">{post.title}</h1>

        <img className="w-full rounded-2xl" src={post.image} alt={post.title} />

        <div className="descriptions py-3 px-4">
          <p className="text-white font-bold pt-5 text-2xl leading-9 tracking-wide">
            {post.desc_h1}
          </p>
          <p className="text-gray-300  text-lg leadiang-9 tracking-wide">
            {post.desc_p1}
          </p>
          <p className="text-white font-bold pt-5 text-2xl leading-9 tracking-wide">
            {post.desc_h2}
          </p>
          <p className="text-white font-bold pt-5 text-xl leading-9 tracking-wide">
            {post.desc_h3}
          </p>
          <p className="text-gray-300 text-lg leading-9 tracking-wide">
            {post.desc_p2}
          </p>
          <p className="text-white font-bold pt-5 text-xl leading-9 tracking-wide">
            {post.desc_h4}
          </p>
          <p className="text-gray-300 text-lg leading-9 tracking-wide">
            {post.desc_p3}
          </p>
          <p className="text-white font-bold pt-5 text-xl leading-9 tracking-wide">
            {post.desc_h5}
          </p>
          <p className="text-gray-300 text-lg leading-9 tracking-wide">
            {post.desc_p4}
          </p>
          <p className="text-white font-bold pt-5 text-2xl leading-9 tracking-wide">
            {post.desc_h6}
          </p>
          <p className="text-white font-bold pt-5 text-xl leading-9 tracking-wide">
            {post.desc_h7}
          </p>
          <p className="text-gray-300 text-lg leading-9 tracking-wide">
            {post.desc_p5}
          </p>
          <p className="text-white font-bold pt-5 text-xl leading-9 tracking-wide">
            {post.desc_h8}
          </p>
          <p className="text-gray-300 text-lg leading-9 tracking-wide">
            {post.desc_p6}
          </p>
          <p className="text-white font-bold pt-5 text-xl leading-9 tracking-wide">
            {post.desc_h9}
          </p>
          <p className="text-gray-300 text-lg leading-9 tracking-wide"></p>
          {post.desc_p7}
          <p className="text-white font-bold pt-5 text-xl leading-9 tracking-wide">
            {post.desc_h10}
          </p>
          <p className="text-gray-300 text-lg leading-9 tracking-wide">
            {post.desc_p8}
          </p>
          <p className="text-white font-bold pt-5 text-xl leading-9 tracking-wide">
            {post.desc_h11}
          </p>
          <p className="text-gray-300 text-lg leading-9 tracking-wide">
            {post.desc_p9}
          </p>
          <p className="text-white font-bold pt-5 text-xl leading-9 tracking-wide">
            {post.desc_h12}
          </p>
          <p className="text-gray-300 text-lg leading-9 tracking-wide">
            {post.desc_p10}
          </p>
          <p className="text-white font-bold pt-5 text-xl leading-9 tracking-wide">
            {post.desc_h13}
          </p>
          <p className="text-gray-300 text-lg leading-9 tracking-wide">
            {post.desc_p11}
          </p>
          <p className="text-white font-bold pt-5 text-2xl leading-9 tracking-wide">
            {post.desc_h14}
          </p>
          <p className="text-gray-300 text-lg leading-9 tracking-wide">
            {post.desc_p12}
          </p>
        </div>
      </section>
      </main>
    </>
  );
};

export default Blog1;


