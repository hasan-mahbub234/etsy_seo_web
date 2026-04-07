"use client";

import { motion } from "framer-motion";
import { Search, BarChart3, Calendar, Trophy } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Keyword Analysis",
    description:
      "We identify high-converting, low-competition keywords for your niche",
    color: "from-blue-500/20 to-transparent",
  },
  {
    icon: BarChart3,
    title: "SEO Optimization",
    description: "Optimize your listings with proven SEO strategies",
    color: "from-purple-500/20 to-transparent",
  },
  {
    icon: Calendar,
    title: "Automation Scheduling",
    description: "Automated rank tracking and optimization updates",
    color: "from-green-500/20 to-transparent",
  },
  {
    icon: Trophy,
    title: "Guaranteed Results",
    description: "Page 1 ranking or your money back",
    color: "from-primary/20 to-transparent",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 text-lg">
            4 simple steps to dominate Etsy search
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${step.color} border border-white/10 hover:border-primary/50 transition-all`}
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <step.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
