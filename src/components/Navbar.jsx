import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-blue-900/90 backdrop-blur-md shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:px-8">
        {/* Logo */}
        <div className="text-2xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-text">
          Philip Inem
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative group transition-all duration-300 hover:text-yellow-400"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white text-3xl focus:outline-none"
          >
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-gradient-to-r from-blue-900/95 via-blue-800/70 to-blue-900/95 backdrop-blur-md shadow-xl flex flex-col items-center space-y-6 py-6 text-white font-medium overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-lg hover:text-yellow-400 transition-colors duration-300"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
                         }
