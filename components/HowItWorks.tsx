"use client";

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
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 text-lg">
            3 simple steps to dominate Etsy search
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${step.color} border border-white/10 hover:border-primary/50 transition-all`}
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <step.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
