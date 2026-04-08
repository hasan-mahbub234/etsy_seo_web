"use client";

import { ArrowRight, Star, Shield } from "lucide-react";
import { useState } from "react";
import RankingModal from "./RankingModal";

export const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="py-20 bg-gradient-to-br from-primary/20 via-secondary to-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            THE TOOL THAT TOP <span className="text-primary">0.1%</span> SELLERS
            USE
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful Etsy sellers who have transformed their
            business
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center gap-2"
            >
              Rank My Product <ArrowRight size={20} />
            </button>
          </div>

          <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>30-Day Money Back</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>99.5% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-primary rounded-full" />
              <span>1,000+ Happy Clients</span>
            </div>
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
