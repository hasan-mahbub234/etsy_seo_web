"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { useState } from "react";
import RankingModal from "./RankingModal";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative sm:min-h-screen flex items-center pt-20 sm:pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-8">
          <div className="w-full max-w-6xl">
            <h1 className="text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              WE'LL RANK YOUR ETSY PRODUCT LISTING ON PAGE 1 IN 7 DAYS
            </h1>
            <p className="text-lg sm:text-3xl font-bold mb-6 sm:mb-8">
              Rank Higher → Get More Visitors → Make More Sales
            </p>
          </div>

          {/* Video Preview - Centered */}
          <div className="relative group cursor-pointer w-full max-w-7xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=450&fit=crop"
                alt="Video preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-all">
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={28} className="sm:w-8 sm:h-8 ml-0.5 sm:ml-1" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>

          {/* Button - Centered */}
          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              Rank My Product <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
      <RankingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
