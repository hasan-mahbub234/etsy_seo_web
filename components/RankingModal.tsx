"use client";

import { X } from "lucide-react";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function RankingModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({
    url: "",
    keyword1: "",
    keyword2: "",
    keyword3: "",
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.url || !form.keyword1) {
      alert("Please fill the Etsy URL and at least one keyword.");
      return;
    }

    const message = `Hello, I want to rank my Etsy product:

🔗 URL: ${form.url}

🔑 Keywords:

1. ${form.keyword1}
2. ${form.keyword2}
3. ${form.keyword3}
   `;

    const phoneNumber = "+8801863360191";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#111111] border border-[#2a2a2a] shadow-2xl p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          aria-label="Close modal"
        >
          <X size={22} aria-hidden="true" />
        </button>

        <h2 className="text-2xl font-bold text-orange-500 mb-6 tracking-wide">
          RANK YOUR PRODUCT ON PAGE 1
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="etsy-url"
                className="text-sm text-gray-300 block mb-2"
              >
                Etsy Listing URL
              </label>
              <input
                type="text"
                id="etsy-url"
                name="url"
                placeholder="www.etsy.com/listing/123456789"
                value={form.url}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Etsy listing URL"
              />
            </div>

            <hr className="border-[#2a2a2a]" />

            <p className="text-gray-300 font-medium">
              List 3 Options For Us To Choose From
            </p>

            <div>
              <label
                htmlFor="keyword1"
                className="text-sm text-gray-400 block mb-2"
              >
                Keyword Option #1
              </label>
              <input
                type="text"
                id="keyword1"
                name="keyword1"
                placeholder="e.g. gold vintage necklace"
                value={form.keyword1}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="First keyword option"
              />
            </div>

            <div>
              <label
                htmlFor="keyword2"
                className="text-sm text-gray-400 block mb-2"
              >
                Keyword Option #2
              </label>
              <input
                type="text"
                id="keyword2"
                name="keyword2"
                placeholder="e.g. black leather wallet"
                value={form.keyword2}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Second keyword option"
              />
            </div>

            <div>
              <label
                htmlFor="keyword3"
                className="text-sm text-gray-400 block mb-2"
              >
                Keyword Option #3
              </label>
              <input
                type="text"
                id="keyword3"
                name="keyword3"
                placeholder="e.g. digital wedding planner"
                value={form.keyword3}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Third keyword option"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 transition text-white font-semibold text-lg"
              aria-label="Submit via WhatsApp"
            >
              Continue via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
