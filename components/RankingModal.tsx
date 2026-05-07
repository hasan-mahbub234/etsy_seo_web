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
  const [urlError, setUrlError] = useState("");

  if (!isOpen) return null;

  const validateEtsyUrl = (url: string): boolean => {
    if (!url) return false;

    const urlLower = url.toLowerCase().trim();

    // Check if it's an Etsy URL
    const etsyPattern = /^(https?:\/\/)?(www\.)?etsy\.com\/listing\/\d+/i;

    // Also accept etsy.me short links
    const etsyShortPattern = /^(https?:\/\/)?etsy\.me\/[a-zA-Z0-9]+/i;

    return etsyPattern.test(urlLower) || etsyShortPattern.test(urlLower);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Clear URL error when user starts typing
    if (name === "url") {
      setUrlError("");
    }
  };

  const handleUrlBlur = () => {
    if (form.url && !validateEtsyUrl(form.url)) {
      setUrlError(
        "Please enter a valid Etsy listing URL (e.g., etsy.com/listing/... or etsy.me/...)",
      );
    }
  };

  const handleSubmit = () => {
    // Reset any previous URL error
    setUrlError("");

    // Validate URL
    if (!form.url) {
      setUrlError("Please enter your Etsy listing URL");
      return;
    }

    if (!validateEtsyUrl(form.url)) {
      setUrlError(
        "Please enter a valid Etsy listing URL (e.g., etsy.com/listing/... or etsy.me/...)",
      );
      return;
    }

    if (!form.keyword1) {
      alert("Please fill at least one keyword option.");
      return;
    }

    const message = `Hello, I want to rank my Etsy product:

🔗 URL: ${form.url}

🔑 Keywords:

1. ${form.keyword1}
2. ${form.keyword2 || "N/A"}
3. ${form.keyword3 || "N/A"}
   `;

    const phoneNumber = "+447576529800";
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
                Etsy Listing URL <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                id="etsy-url"
                name="url"
                placeholder="www.etsy.com/listing/123456789"
                value={form.url}
                onChange={handleChange}
                onBlur={handleUrlBlur}
                className={`w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  urlError ? "border-red-500" : "border-[#333]"
                }`}
                aria-label="Etsy listing URL"
                aria-invalid={!!urlError}
                aria-describedby={urlError ? "url-error" : undefined}
              />
              {urlError && (
                <p
                  id="url-error"
                  className="mt-2 text-sm text-red-500"
                  role="alert"
                >
                  {urlError}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                Example: etsy.com/listing/123456789 or etsy.me/abc123
              </p>
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
                Keyword Option #1 <span className="text-orange-500">*</span>
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
                required
              />
            </div>

            <div>
              <label
                htmlFor="keyword2"
                className="text-sm text-gray-400 block mb-2"
              >
                Keyword Option #2{" "}
                <span className="text-gray-600">(Optional)</span>
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
                Keyword Option #3{" "}
                <span className="text-gray-600">(Optional)</span>
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
              className="w-full mt-4 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 transition text-white font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
