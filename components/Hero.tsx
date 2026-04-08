"use client";

import { Play, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import RankingModal from "./RankingModal";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <section className="relative sm:min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "ListMagic Etsy SEO Tool",
              description:
                "Rank your Etsy products on Page 1 in 7 days guaranteed",
              brand: {
                "@type": "Brand",
                name: "ListMagic",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "318",
              },
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                availability: "https://schema.org/OnlineOnly",
              },
            }),
          }}
        />

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="flex flex-col items-center text-center space-y-6 sm:space-y-10">
            <div className="w-full max-w-6xl">
              <h1 className="text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                WE'LL RANK YOUR ETSY PRODUCT LISTING ON PAGE 1 IN 7 DAYS
              </h1>
              <p className="text-lg sm:text-3xl font-bold mb-6 sm:mb-8">
                Rank Higher → Get More Visitors → Make More Sales
              </p>
            </div>

            {/* Video Section */}
            <div className="relative group w-full max-w-7xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black">
                {!isPlaying && (
                  <img
                    src="/images/thumbnail.png"
                    alt="Etsy SEO tutorial video thumbnail - Learn how to rank your Etsy products on page 1"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    loading="eager"
                  />
                )}

                <video
                  ref={videoRef}
                  src="/ETSY LISTMAGIC.mp4"
                  className="w-full h-full object-cover relative z-10"
                  preload="metadata"
                  playsInline
                  controls={isPlaying}
                  aria-label="Etsy SEO ranking tutorial video"
                />

                {!isPlaying && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition cursor-pointer z-20"
                    onClick={handlePlayClick}
                    role="button"
                    aria-label="Play video"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Play
                        size={24}
                        className="ml-1 text-white"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Glow effect */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hover:bg-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
                aria-label="Start ranking your Etsy product - Open form"
              >
                Rank My Product{" "}
                <ArrowRight
                  size={18}
                  className="sm:w-5 sm:h-5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      <RankingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
