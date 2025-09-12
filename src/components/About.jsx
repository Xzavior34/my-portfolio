import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-br from-[#0a1f44] to-[#0d1117] text-gray-200"
    >
      <div className="max-w-5xl mx-auto px-6 text-center md:text-left">
        <motion.h2
          className="text-4xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Who I Am
        </motion.h2>

        <motion.p
          className="text-lg leading-relaxed mb-6 text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          👋 Hi, I’m <span className="text-blue-400 font-semibold">Philip Inem</span>.  
          I don’t just build websites — I craft <span className="italic">digital experiences</span> 
          that connect with people. My journey started with curiosity, grew into coding,
          and expanded into design, marketing, and strategy.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed mb-6 text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          🚀 I specialize in **full-stack development**, but I also thrive at 
          the crossroads of **UI/UX design** and **digital growth strategy**.  
          Beyond code, I’ve partnered with organizations like 
          <b className="text-yellow-400"> Regamos Foundation</b> and 
          <b className="text-yellow-400"> Sara Foundation</b>, 
          helping them amplify their impact online.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed mb-6 text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          🎯 My mission is simple: **transform ideas into products that matter**.  
          Whether it’s building scalable apps, growing communities, or 
          designing engaging visuals — I bring creativity, precision, and strategy to the table.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center md:justify-start gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href="Philip_Inem_CV_Summary.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-white/10 backdrop-blur-lg text-yellow-400 rounded-lg font-semibold hover:bg-yellow-500/20 transition"
          >
            📄 Download CV
          </a>
          <a
            href="mailto:philipinem7@gmail.com"
            className="px-6 py-3 bg-white/10 backdrop-blur-lg text-blue-400 rounded-lg font-semibold hover:bg-blue-500/20 transition"
          >
            ✉️ Email Me
          </a>
        </motion.div>
      </div>
    </section>
  );
            }
