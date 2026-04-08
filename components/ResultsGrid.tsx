"use client";

import { motion } from "framer-motion";
import { TrendingUp, Award, Users, Zap } from "lucide-react";

const results = [
  {
    title: "300% Traffic Increase",
    description: "Organic search traffic growth",
    image: "/images/section_1.2.jpeg",
    metric: "+300%",
  },
  {
    title: "Revenue Growth",
    description: "Monthly sales increase",
    image: "/images/section_1.1.jpeg",
    metric: "5.2x",
  },
  {
    title: "Conversion Rate",
    description: "From 1.2% to 4.8%",
    image: "/images/section_1.3.jpeg",
    metric: "+300%",
  },
  {
    title: "Page 1 Rankings",
    description: "Keywords in top 10",
    image: "/images/section_1.4.jpeg",
    metric: "127+",
  },
];

export const ResultsGrid = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            THE RESULTS OUR CLIENTS ACHIEVED AFTER USING ERANKER
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="group relative overflow-hidden cursor-pointer"
            >
              <img
                src={result.image}
                alt={result.title}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
