import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const buttonData = [
    { label: "Email Me", href: "mailto:philipinem7@gmail.com", color: "blue" },
    { label: "Call Me", href: "tel:09064513390", color: "green" },
    { label: "GitHub", href: "https://github.com/Xzavior34", color: "yellow" },
  ];

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-[#0a1f44] to-[#0d1117] text-gray-200 relative overflow-hidden"
    >
      {/* Floating circles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400/20 rounded-full animate-pulse"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-gray-300 mb-8 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I’d love to hear from you! Whether it’s a project collaboration,
          freelance opportunity, or just a hello, feel free to reach out.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {buttonData.map((btn, i) => (
            <a
              key={i}
              href={btn.href}
              target={btn.label === "GitHub" ? "_blank" : "_self"}
              rel="noreferrer"
              className={`px-6 py-3 bg-white/10 backdrop-blur-lg text-${btn.color}-400 rounded-lg font-semibold hover:scale-105 hover:bg-${btn.color}-500/30 transition-transform duration-300 shadow-lg`}
            >
              {btn.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
                    }
