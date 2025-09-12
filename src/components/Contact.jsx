import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-[#0a1f44] to-[#0d1117] text-gray-200"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-gray-300 mb-4 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I’d love to hear from you! Whether it’s a project collaboration,
          freelance opportunity, or just a hello, feel free to reach out.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="mailto:philipinem7@gmail.com"
            className="px-6 py-3 bg-white/10 backdrop-blur-lg text-blue-400 rounded-lg font-semibold hover:bg-blue-500/20 transition"
          >
            Email Me
          </a>
          <a
            href="tel:09064513390"
            className="px-6 py-3 bg-white/10 backdrop-blur-lg text-green-400 rounded-lg font-semibold hover:bg-green-500/20 transition"
          >
            Call Me
          </a>
          <a
            href="https://github.com/Xzavior34"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-white/10 backdrop-blur-lg text-gray-200 rounded-lg font-semibold hover:bg-gray-400/20 transition"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
