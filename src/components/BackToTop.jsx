import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-400 text-white rounded-full shadow-xl hover:scale-110 hover:shadow-pink-500/60 backdrop-blur-lg transition-transform duration-300 z-50"
        >
          <FaArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
      }
