"use client";

import { useState } from "react";

interface Calculator {
  isFullPage?: boolean;
}

export default function Calculator({ isFullPage = false }: Calculator) {
  const [aov, setAov] = useState(35);
  const [sales, setSales] = useState(40);
  const [conversion, setConversion] = useState(2);
  const [products, setProducts] = useState(25);
  const [cpc, setCpc] = useState(0.3);
  const [target, setTarget] = useState(6000);

  // Calculations
  const currentRevenue = sales * aov;
  const neededRevenue = Math.max(target - currentRevenue, 0);
  const extraOrders = neededRevenue / aov || 0;
  const extraViews = conversion > 0 ? extraOrders / (conversion / 100) : 0;
  const keywords = products > 0 ? Math.ceil(extraViews / 60) : 0;
  const revenuePerKeyword = keywords > 0 ? target / keywords : 0;
  const adsCost = extraViews * cpc;
  const roas = adsCost > 0 ? target / adsCost : 0;

  const Input = ({ label, value, setValue, prefix, suffix }: any) => (
    <div>
      <label className="text-xs text-gray-400 block mb-2 uppercase tracking-wide">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full px-4 py-3 rounded-lg bg-[#0f0f0f] border border-[#2a2a2a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <section
      className={`bg-black text-white ${isFullPage ? "min-h-screen py-16" : "py-16"} px-4`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
            Rankings Calculator
          </h2>
          <p className="text-gray-400 mt-2">
            Calculate how many rankings you need to hit your revenue goals
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* LEFT PANEL */}
          <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-6 space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="w-6 h-[2px] bg-orange-500 inline-block"></span>
                Your Store Metrics
              </h3>

              <button
                onClick={() => {
                  setAov(35);
                  setSales(40);
                  setConversion(2);
                  setProducts(25);
                  setCpc(0.3);
                  setTarget(6000);
                }}
                className="text-sm px-3 py-1 rounded-md bg-[#1a1a1a] border border-[#333] hover:bg-[#222]"
              >
                Reset
              </button>
            </div>

            <Input
              label="Average Order Value"
              value={aov}
              setValue={setAov}
              prefix="$ "
            />
            <Input
              label="Current Monthly Sales"
              value={sales}
              setValue={setSales}
            />
            <Input
              label="Conversion Rate"
              value={conversion}
              setValue={setConversion}
              suffix="%"
            />
            <Input
              label="Number of Products"
              value={products}
              setValue={setProducts}
            />
            <Input
              label="Cost Per Click (CPC) For Ads"
              value={cpc}
              setValue={setCpc}
              prefix="$"
            />

            {/* Target box */}
            <div className="bg-[#1a0d05] border border-orange-500/30 rounded-xl p-4">
              <label className="text-xs text-orange-400 uppercase block mb-2">
                Target Monthly Revenue
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  $
                </span>
                <input
                  type="number"
                  value={target}
                  onChange={(e) => setTarget(Number(e.target.value))}
                  className="w-full px-4 py-3 pl-7 rounded-lg bg-black border border-[#333] text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="space-y-6">
            {/* Top big card */}
            <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-6">
              <p className="text-xs text-gray-400 uppercase">
                Total Keywords Needed
              </p>
              <h3 className="text-5xl font-bold text-orange-500 mt-2">
                {keywords}
                <span className="text-lg text-gray-400 ml-2">rankings</span>
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Split these rankings across your top-selling listings.
              </p>
            </div>

            {/* Grid cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-4">
                <p className="text-xs text-gray-400 uppercase">
                  Extra Views/Mo
                </p>
                <h4 className="text-2xl font-bold mt-1">
                  {Math.round(extraViews).toLocaleString()}
                </h4>
              </div>

              <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-4">
                <p className="text-xs text-gray-400 uppercase">
                  Extra Orders/Mo
                </p>
                <h4 className="text-2xl font-bold mt-1">
                  {Math.round(extraOrders)}
                </h4>
              </div>

              <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-4">
                <p className="text-xs text-gray-400 uppercase">
                  Revenue Per Keyword
                </p>
                <h4 className="text-xl font-bold text-orange-400 mt-1">
                  ${revenuePerKeyword.toFixed(2)}
                </h4>
                <p className="text-xs text-gray-400">monthly average</p>
              </div>

              <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-4">
                <p className="text-xs text-gray-400 uppercase">
                  Organic vs Ads (ROAS)
                </p>
                <h4 className="text-xl font-bold text-orange-400 mt-1">
                  {roas.toFixed(1)}x
                </h4>
                <p className="text-xs text-gray-400">better ROI</p>
              </div>
            </div>

            {/* Ads cost */}
            <div className="bg-[#1a0d05] border border-orange-500/30 rounded-2xl p-6">
              <p className="text-sm text-gray-400">
                If You Used Etsy Ads Instead
              </p>
              <h3 className="text-3xl font-bold text-orange-500 mt-2">
                ${adsCost.toFixed(2)}
                <span className="text-lg text-gray-400"> /month</span>
              </h3>
            </div>

            {/* Tip */}
            <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-4 flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm">
                💡
              </div>
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-white">Pro tip:</span> Focus
                your rankings on your best-selling products for faster results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
