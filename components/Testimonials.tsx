"use client";

import { MessageCircle } from "lucide-react";

const chatTestimonials = [
  {
    image: "/images/section_2.1.jpeg",
  },
  {
    image: "/images/section_2.2.jpeg",
  },
  {
    image: "/images/section_2.3.jpeg",
  },
  {
    image: "/images/section_2.4.jpeg",
  },
  {
    image: "/images/section_3.1.jpeg",
  },
  {
    image: "/images/section_3.2.jpeg",
  },
  {
    image: "/images/section_3.3.jpeg",
  },
  {
    image: "/images/section_3.4.jpeg",
  },
  {
    image: "/images/section_3.5.jpeg",
  },
  {
    image: "/images/section_3.6.jpeg",
  },
  {
    image: "/images/section_3.7.jpeg",
  },
];

const reviewCards = [
  {
    name: "Alex Thompson",
    role: "Etsy Seller since 2019",
    review:
      "This SEO Ranking transformed my business. From $2k To $5.8k Monthly Revenue in less than 3 months.",
    rating: 5,
    avatar: "/images/men_1.jfif",
  },
  {
    name: "Jessica Williams",
    role: "Jewelry Shop Owner",
    review:
      "This Ranking Service Was Exactly What I Was Missing, Game Changer!",
    rating: 5,
    avatar: "/images/women_1.jfif",
  },
  {
    name: "David Martinez",
    role: "Digital Products Seller",
    review:
      "Support is amazing and results are guaranteed. Couldnt ask for more.",
    rating: 5,
    avatar: "/images/men_2.jfif",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by 318+ Sellers
          </h2>
          <p className="text-gray-400 text-lg">
            Real reviews from real Etsy entrepreneurs
          </p>
        </div>

        {/* Chat-style testimonials */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            What our clients are saying
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {chatTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-dark rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all hover:-translate-y-1"
              >
                <img
                  src={testimonial.image}
                  alt={`Client review ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Review cards */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Featured Reviews</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reviewCards.map((review, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-dark border border-white/10 hover:border-primary/50 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    <img
                      src={review.avatar}
                      alt={`Client review ${index + 1}`}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-xs text-gray-500">{review.role}</div>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3">
                  {"★".repeat(review.rating)}
                </div>
                <p className="text-gray-300">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
