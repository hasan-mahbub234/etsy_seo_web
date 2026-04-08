"use client";

import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { ResultsGrid } from "@/components/ResultsGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import RankingModal from "@/components/RankingModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener("openRankingModal", handleOpenModal);
    return () =>
      window.removeEventListener("openRankingModal", handleOpenModal);
  }, []);

  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <Stats />
        <ResultsGrid />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <RankingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
