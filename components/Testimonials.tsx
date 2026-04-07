"use client";

import { Star, MessageCircle, CheckCircle } from "lucide-react";

const chatTestimonials = [
  {
    name: "Sarah Johnson",
    message:
      "My sales increased by 340% in just 2 weeks! This tool is incredible! 🚀",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Mike Chen",
    message:
      "Finally found something that actually works. Page 1 ranking achieved!",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emma Davis",
    message:
      "Best investment I've made for my Etsy shop. The ROI is insane! 💰",
    rating: 5,
    avatar: "ED",
  },
];

const reviewCards = [
  {
    name: "Alex Thompson",
    role: "Etsy Seller since 2019",
    review:
      "This SEO tool transformed my business. From $2k to $8k monthly revenue in 3 months.",
    rating: 5,
    avatar: "AT",
  },
  {
    name: "Jessica Williams",
    role: "Jewelry Shop Owner",
    review:
      "The calculator helped me understand exactly what I was missing. Game changer!",
    rating: 5,
    avatar: "JW",
  },
  {
    name: "David Martinez",
    role: "Digital Products Seller",
    review:
      "Support is amazing and results are guaranteed. Couldnt ask for more.",
    rating: 5,
    avatar: "DM",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by 1,000+ Sellers
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
                className="bg-dark rounded-2xl p-4 border border-white/10"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold">{testimonial.name}</span>
                      <div className="flex text-yellow-400">
                        {"★".repeat(testimonial.rating)}
                      </div>
                    </div>
                    <div className="bg-secondary rounded-lg p-3">
                      <p className="text-sm">{testimonial.message}</p>
                    </div>
                    <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      Verified Purchase
                    </div>
                  </div>
                </div>
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
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-lg">
                    {review.avatar}
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
