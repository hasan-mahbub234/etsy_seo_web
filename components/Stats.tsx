"use client";

import { motion } from "framer-motion";
import { TrendingUp, Shield, Package, Star } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "3.3x",
    label: "revenue",
    description: "Average increase",
  },
  {
    icon: Shield,
    value: "99.5%",
    label: "success rate",
    description: "Page 1 ranking",
  },
  {
    icon: Package,
    value: "7,437+",
    label: "listings optimized",
    description: "And counting",
  },
  {
    icon: Star,
    value: "210+",
    label: "reviews",
    description: "5-star rated",
  },
];

export const Stats = () => {
  return (
    <section className="py-4 sm:py-10 bg-gradient-to-b from-black to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-3 sm:p-4 md:p-6 rounded-2xl bg-dark/50 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all"
            >
              <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary mx-auto mb-2 sm:mb-3 md:mb-4" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 uppercase text-xs sm:text-sm font-semibold mb-0.5 sm:mb-1">
                {stat.label}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
