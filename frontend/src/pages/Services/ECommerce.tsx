import { ShoppingBag, Shield, Zap, BarChart } from 'lucide-react';
import ServiceHero from './ServiceHero';
import ProcessTimeline from '../../components/ProcessTimeline';
import ContactCTA from '../../components/ContactCTA';

const features = [
  {
    icon: ShoppingBag,
    title: 'Custom E-Commerce Solutions',
    description: 'Build secure, scalable, and user-friendly online stores that drive revenue.'
  },
  {
    icon: Shield,
    title: 'Payment Gateway Integration ',
    description: 'Seamlessly integrate secure payment gateways for smooth transactions.'
  },
  {
    icon: BarChart,
    title: 'E-Commerce Analytics',
    description: 'Gain valuable insights with powerful analytics tools to track performance and optimize strategies.'
  },
  {
    icon: Zap,
    title: 'Product Management Systems ',
    description: 'Streamline your product management to save time and improve efficiencys'
  }
];

const process = [
  {
    title: 'Discovery',
    description: 'We begin by understanding your business, target audience, and goals. This phase includes in-depth market research, competitor analysis, and defining key features that will drive your e-commerce store’s success.'
  },
  {
    title: 'Design',
    description: 'Our design team creates intuitive, visually appealing, and mobile-responsive store layouts. We focus on crafting seamless navigation, ensuring your customers have an enjoyable shopping experience.'
  },
  {
    title: 'Development',
    description: 'We bring your vision to life by developing a custom e-commerce platform tailored to your business needs. From product catalogs to customer accounts, our development process ensures robust performance and scalability.'
  },
  {
    title: 'Testing',
    description: 'Quality assurance is key. We rigorously test the platform across different devices and browsers to ensure functionality, speed, and security. We fine-tune the user experience to ensure everything runs smoothly before launch.'
  },
  {
    title: 'Launch',
    description: 'Once everything is polished, we launch your e-commerce store to the public. We ensure a smooth transition with minimal downtime and provide support as your business begins to grow and attract customers.'
  }
];


export default function ECommerce() {
  return (
    <main className="bg-white">
      <div className="bg-[url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
           relative h-[94vh] bg-cover bg-center pt-16 ">
             <div className="absolute bg-primary z-10 w-[100%] h-[91%] opacity-80"></div>
           {/* <div className="relative h-[90vh]  pt-20 bg-[url('https://thumbs.wbm.im/pw/medium/34950f1f017647cd3f8484485b040686.avif')] bg-cover bg-center"> */}
           <ServiceHero 
             title="E-Commerce Solutions"
             subtitle="Scalable E-Commerce Solutions for Seamless Shopping Experiences"
             description="Maximize your online sales with custom e-commerce platforms designed to deliver a seamless shopping experience and boost conversions. From secure payment integrations to powerful product management systems, we provide end-to-end solutions."
             />
                     <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent"></div>
             </div>
      
      <section className="py-20 bg-gradient-primary ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="p-5 text-center transition duration-300 ease-in-out border border-gray-200 cursor-pointer hover:border-none hover:scale-105 rounded-xl hover:shadow-lg">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-yellow" />
                <h3 className="mb-2 text-xl font-semibold text-white font-orbitron">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
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