// app/calculator/page.tsx
import Calculator from "@/components/Calculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Etsy SEO Calculator - Calculate Your Ranking Potential",
  description:
    "Use our free calculator to see how many rankings you need to hit your revenue goals on Etsy.",
};

export default function CalculatorPage() {
  return (
    <main className="pt-20">
      <Calculator isFullPage={true} />
    </main>
  );
}
