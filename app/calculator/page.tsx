import Calculator from "@/components/Calculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Etsy SEO Calculator | Calculate Your Ranking Potential",
  description:
    "Use our free Etsy SEO calculator to see exactly how many rankings you need to hit your revenue goals. Calculate AOV, conversion rates, and ROI for your Etsy shop.",
  keywords:
    "Etsy calculator, Etsy SEO calculator, Etsy revenue calculator, Etsy ranking calculator, Etsy profit calculator",
  openGraph: {
    title: "Free Etsy SEO Calculator - ListMagic",
    description:
      "Calculate how many rankings you need to reach your Etsy revenue goals. Free tool for Etsy sellers.",
    url: "https://listmagic.shop/calculator",
    type: "website",
  },
  twitter: {
    title: "Free Etsy SEO Calculator | ListMagic",
    description:
      "Calculate your Etsy ranking needs and revenue potential. Free SEO calculator.",
  },
  alternates: {
    canonical: "https://listmagic.shop/calculator",
  },
};

export default function CalculatorPage() {
  return (
    <main className="pt-20">
      <Calculator isFullPage={true} />
    </main>
  );
}
