import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section about py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center md:text-left">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-700 mb-4 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I'm Philip Inem, a passionate full-stack developer and digital strategist. I specialize in building impactful web applications with clean, efficient code and thoughtful UI/UX design.
        </motion.p>

        <motion.p
          className="text-gray-700 mb-4 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          My experience extends beyond coding to social media growth, digital marketing strategies, and graphic design. I have successfully collaborated with organizations such as <b>Regamos Foundation</b> and <b>Sara Foundation</b>, helping them enhance their digital presence.
        </motion.p>

        <motion.div
          className="mt-6 flex justify-center md:justify-start gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="Philip_Inem_CV_Summary.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-yellow-400 text-gray-800 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Download CV
          </a>
          <a
            href="mailto:philipinem7@gmail.com"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Email Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
