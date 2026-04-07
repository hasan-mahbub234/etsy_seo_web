"use client";

import { useState, useEffect } from "react";
import { Menu, X, TrendingUp, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RankingModal from "./RankingModal";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Reviews", href: "/#reviews" },
    { name: "FAQ", href: "/#faq" },
    { name: "Calculator", href: "/calculator" },
  ];

  const handleOpenModal = () => {
    setIsMobileMenuOpen(false);
    setIsModalOpen(true);
  };

  const isActiveLink = (href: string) => {
    if (href === "/calculator") return pathname === "/calculator";
    // For hash links, just check if we're on the home page
    return pathname === "/";
  };

  // Smooth scroll function for hash links
  const handleHashLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.includes("#")) {
      e.preventDefault();
      const hash = href.split("#")[1];
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Update URL without causing a page jump
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <>
      <div className="fixed top-4 w-full z-50 px-4">
        <div
          className={`max-w-5xl mx-auto rounded-2xl md:rounded-full backdrop-blur-md border transition-all ${
            isScrolled
              ? "bg-black/80 border-white/40"
              : "bg-black/20 border-white/30"
          }`}
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo - Links to home */}
              <Link href="/" className="flex items-center space-x-2">
                <TrendingUp className="w-8 h-8 text-primary" />
                <span className="text-xl font-bold">RankEtsy</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleHashLinkClick(e, link.href)}
                    className={`text-gray-300 hover:text-white transition-colors ${
                      isActiveLink(link.href) ? "text-primary" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Desktop CTA */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hidden md:inline-flex hover:bg-orange-600 px-4 py-2 rounded-full font-semibold text-base transition-all transform hover:scale-105 items-center gap-2 shadow-lg"
              >
                Rank My Product <ArrowRight size={18} />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="md:hidden text-white p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <div className="md:hidden overflow-hidden border-t border-white/10">
                  <div className="py-4 space-y-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
                          handleHashLinkClick(e, link.href);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`block py-3 text-gray-300 hover:text-white transition-colors ${
                          isActiveLink(link.href) ? "text-primary" : ""
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}

                    <button
                      onClick={handleOpenModal}
                      className="w-full mt-3 bg-primary hover:bg-orange-600 px-5 py-3 rounded-lg font-semibold transition-all"
                    >
                      Rank My Product
                    </button>
                  </div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <RankingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
