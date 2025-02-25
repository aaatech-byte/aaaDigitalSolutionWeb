export const defaultMetaTags = {
  title: 'AAA Digital - Leading Digital Marketing Agency',
  description: 'Transform your digital presence with AAA Digital. Expert web development, mobile apps, and digital marketing solutions for businesses.',
  keywords: 'digital marketing, web development, mobile apps, SEO, digital transformation',
};

export function generateMetaTags(page: string) {
  const tags = { ...defaultMetaTags };
  
  switch (page) {
    case 'digital-marketing':
      return {
        ...tags,
        title: 'Digital Marketing Services | AAA Digital',
        description: 'Drive growth with data-driven digital marketing strategies. SEO, PPC, Social Media, and Content Marketing services.',
      };
    case 'web-development':
      return {
        ...tags,
        title: 'Web Development Services | AAA Digital',
        description: 'Custom web development solutions built with modern technologies. React, Node.js, and more.',
      };
    default:
      return tags;
  }
}