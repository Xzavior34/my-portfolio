import React, { useState, useEffect } from "react";

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

  // Smooth scroll handler
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // close mobile menu after click
  };

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-500 ${
        scrolled
          ? "bg-blue-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:px-8">
        {/* Logo / Name */}
        <div className="text-2xl font-extrabold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
          Philip Inem
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <a href="#hero" onClick={(e) => handleLinkClick(e, "#hero")}>
            Home
          </a>
          <a href="#about" onClick={(e) => handleLinkClick(e, "#about")}>
            About
          </a>
          <a href="#projects" onClick={(e) => handleLinkClick(e, "#projects")}>
            Projects
          </a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")}>
            Contact
          </a>
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
      {open && (
        <div className="md:hidden bg-blue-900/95 backdrop-blur-md shadow-lg flex flex-col items-center space-y-6 py-6 text-white font-medium">
          <a href="#hero" onClick={(e) => handleLinkClick(e, "#hero")}>
            Home
          </a>
          <a href="#about" onClick={(e) => handleLinkClick(e, "#about")}>
            About
          </a>
          <a href="#projects" onClick={(e) => handleLinkClick(e, "#projects")}>
            Projects
          </a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
      }
