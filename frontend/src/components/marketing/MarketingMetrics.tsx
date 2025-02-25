import { motion } from 'framer-motion';

const metrics = [
  { value: '200%', label: 'Average ROI' },
  { value: '150K+', label: 'Leads Generated' },
  { value: '85%', label: 'Client Retention' },
  { value: '50+', label: 'Active Campaigns' }
];

export function MarketingMetrics() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-green-100">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}