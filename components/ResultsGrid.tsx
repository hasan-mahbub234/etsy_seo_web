"use client";

import { motion } from "framer-motion";
import { TrendingUp, Award, Users, Zap } from "lucide-react";

const results = [
  {
    title: "300% Traffic Increase",
    description: "Organic search traffic growth",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    metric: "+300%",
  },
  {
    title: "Revenue Growth",
    description: "Monthly sales increase",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    metric: "5.2x",
  },
  {
    title: "Conversion Rate",
    description: "From 1.2% to 4.8%",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    metric: "+300%",
  },
  {
    title: "Page 1 Rankings",
    description: "Keywords in top 10",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    metric: "127+",
  },
];

export const ResultsGrid = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Results Our Clients Achieved
          </h2>
          <p className="text-gray-400 text-lg">
            Real data from real Etsy sellers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={result.image}
                alt={result.title}
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {result.metric}
                </div>
                <h3 className="text-xl font-semibold mb-1">{result.title}</h3>
                <p className="text-gray-300">{result.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
