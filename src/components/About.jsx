import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-[#0a1f44] to-[#0d1117] text-gray-200"
    >
      <div className="max-w-5xl mx-auto px-6 text-center md:text-left">
        <motion.h2
          className="text-4xl font-bold mb-10 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg leading-relaxed mb-6 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I’m <span className="text-blue-400 font-semibold">Philip Inem</span>, 
          a passionate developer and designer dedicated to building meaningful digital products.  
          My journey began with curiosity for technology, which quickly grew into a full career 
          blending <span className="italic">creativity, problem-solving, and strategy</span>.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed mb-6 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          My expertise lies in <span className="text-blue-400">full-stack development</span>, 
          with strong foundations in UI/UX design and digital growth strategy.  
          I’ve collaborated with organizations such as 
          <span className="text-yellow-400 font-medium"> Regamos Foundation</span> 
          and <span className="text-yellow-400 font-medium"> Sara Foundation</span>, 
          helping them strengthen their online presence and connect with their communities.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed mb-6 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          My mission is to <span className="font-semibold text-white">transform ideas into impactful digital experiences</span>.  
          Whether developing scalable web apps, creating intuitive interfaces, or driving digital engagement,  
          I aim to deliver solutions that combine technical precision with creative vision.
        </motion.p>

        <motion.div
          className="mt-10 flex justify-center md:justify-start gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href="Philip_Inem_CV_Summary.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-white/10 backdrop-blur-lg text-yellow-400 rounded-lg font-semibold hover:bg-yellow-500/20 transition"
          >
            Download CV
          </a>
          <a
            href="mailto:philipinem7@gmail.com"
            className="px-6 py-3 bg-white/10 backdrop-blur-lg text-blue-400 rounded-lg font-semibold hover:bg-blue-500/20 transition"
          >
            Email Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
