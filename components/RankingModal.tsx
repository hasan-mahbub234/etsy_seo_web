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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="relative w-full max-w-lg rounded-2xl bg-[#111111] border border-[#2a2a2a] shadow-2xl p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X size={22} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-orange-500 mb-6 tracking-wide">
          RANK YOUR PRODUCT ON PAGE 1
        </h2>

        {/* Form */}
        <div className="space-y-5">
          {/* URL */}
          <div>
            <label className="text-sm text-gray-300 block mb-2">
              Etsy Listing URL
            </label>
            <input
              type="text"
              name="url"
              placeholder="www.etsy.com/listing/123456789"
              value={form.url}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <hr className="border-[#2a2a2a]" />

          {/* Section Title */}
          <p className="text-gray-300 font-medium">
            List 3 Options For Us To Choose From
          </p>

          {/* Keyword 1 */}
          <div>
            <label className="text-sm text-gray-400 block mb-2">
              Keyword Option #1
            </label>
            <input
              type="text"
              name="keyword1"
              placeholder="e.g. gold vintage necklace"
              value={form.keyword1}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Keyword 2 */}
          <div>
            <label className="text-sm text-gray-400 block mb-2">
              Keyword Option #2
            </label>
            <input
              type="text"
              name="keyword2"
              placeholder="e.g. black leather wallet"
              value={form.keyword2}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Keyword 3 */}
          <div>
            <label className="text-sm text-gray-400 block mb-2">
              Keyword Option #3
            </label>
            <input
              type="text"
              name="keyword3"
              placeholder="e.g. digital wedding planner"
              value={form.keyword3}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Button */}
          <button className="w-full mt-4 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 transition text-white font-semibold text-lg">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
