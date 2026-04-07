"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Etsy SEO and why does it matter?",
    answer:
      "Etsy SEO is the process of optimizing your listings to rank higher in Etsy's search results. It matters because 80% of Etsy shoppers use the search bar, and higher rankings mean more visibility, more clicks, and ultimately more sales.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most clients see improvements within 7-14 days, with full page 1 rankings achieved within 30 days. Our guaranteed timeline is 7 days for initial ranking improvements.",
  },
  {
    question: "Is this safe? Will Etsy penalize my shop?",
    answer:
      "Absolutely safe! We use white-hat SEO techniques that comply with Etsy's terms of service. We focus on legitimate optimization strategies that Etsy actually encourages.",
  },
  {
    question: "Do I need to run Etsy Ads?",
    answer:
      "No! Our SEO approach is organic. While ads can complement your strategy, our method works to get you free organic traffic from Etsy search without spending on ads.",
  },
  {
    question: "What if I don't see results?",
    answer:
      "We offer a 100% money-back guarantee. If you don't see significant ranking improvements within 30 days, we'll refund your investment completely.",
  },
  {
    question: "Can I use this for multiple shops?",
    answer:
      "Yes! Our tool supports multiple Etsy shops. You can manage all your stores from a single dashboard and track performance across all your brands.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about our service
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
