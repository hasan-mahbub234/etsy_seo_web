"use client";

import { useState, useEffect } from "react";
import { Menu, X, TrendingUp, ArrowRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import RankingModal from "./RankingModal";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Reviews", href: "/#testimonials", id: "testimonials" },
    { name: "FAQ", href: "/#faq", id: "faq" },
    { name: "Calculator", href: "/calculator" },
  ];

  const handleOpenModal = () => {
    setIsMobileMenuOpen(false);
    setIsModalOpen(true);
  };

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: (typeof navLinks)[0],
  ) => {
    e.preventDefault();

    if (link.href === "/calculator") {
      router.push("/calculator");
    } else if (link.id) {
      // If we're not on the homepage, navigate to home first then scroll
      if (pathname !== "/") {
        router.push(`/#${link.id}`);
        // Wait for navigation then scroll
        setTimeout(() => {
          scrollToSection(link.id);
        }, 100);
      } else {
        // Already on homepage, just scroll
        scrollToSection(link.id);
        window.history.pushState(null, "", `/#${link.id}`);
      }
    }

    setIsMobileMenuOpen(false);
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
              <Link href="/" className="flex items-center space-x-2">
                <TrendingUp className="w-8 h-8 text-primary" />
                <span className="text-xl font-bold">RankEtsy</span>
              </Link>

              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hidden md:inline-flex hover:bg-orange-600 px-4 py-2 rounded-full font-semibold text-base transition-all transform hover:scale-105 items-center gap-2 shadow-lg"
              >
                Rank My Product <ArrowRight size={18} />
              </button>

              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="md:hidden text-white p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <AnimatePresence>
              {isMobileMenuOpen && (
                <div className="md:hidden overflow-hidden border-t border-white/10">
                  <div className="py-4 space-y-2">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link)}
                        className="block py-3 text-gray-300 hover:text-white transition-colors cursor-pointer"
                      >
                        {link.name}
                      </a>
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
