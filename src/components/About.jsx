import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const paragraphs = [
    `I’m Philip Inem, a passionate developer and designer dedicated to building meaningful digital products. My journey began with curiosity for technology, which quickly grew into a full career blending creativity, problem-solving, and strategy.`,
    `My expertise lies in full-stack development, with strong foundations in UI/UX design and digital growth strategy. I’ve collaborated with organizations such as Regamos Foundation and Sara Foundation, helping them strengthen their online presence and connect with their communities.`,
    `My mission is to transform ideas into impactful digital experiences. Whether developing scalable web apps, creating intuitive interfaces, or driving digital engagement, I aim to deliver solutions that combine technical precision with creative vision.`
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, type: "spring", stiffness: 100 },
    }),
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-[#0a1f44] to-[#0d1117] text-gray-200 relative overflow-hidden"
    >
      {/* Optional floating decorative circles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full animate-pulse"></div>

      <div className="max-w-5xl mx-auto px-6 text-center md:text-left relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {paragraphs.map((para, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl mb-6 shadow-2xl"
          >
            <p className="text-lg leading-relaxed text-gray-200">
              {para
                .replace("Philip Inem", "<span class='text-blue-400 font-semibold'>Philip Inem</span>")
                .replace("Regamos Foundation", "<span class='text-yellow-400 font-medium'>Regamos Foundation</span>")
                .replace("Sara Foundation", "<span class='text-yellow-400 font-medium'>Sara Foundation</span>")
                .replace("transform ideas into impactful digital experiences", "<span class='font-semibold text-white'>transform ideas into impactful digital experiences</span>")
              }
            </p>
          </motion.div>
        ))}

        <motion.div
          className="mt-10 flex justify-center md:justify-start gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <a
            href="Philip_Inem_CV_Summary.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-yellow-400/20 backdrop-blur-lg text-yellow-400 rounded-lg font-semibold hover:bg-yellow-500/40 hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Download CV
          </a>
          <a
            href="mailto:philipinem7@gmail.com"
            className="px-6 py-3 bg-blue-400/20 backdrop-blur-lg text-blue-400 rounded-lg font-semibold hover:bg-blue-500/40 hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Email Me
          </a>
        </motion.div>
      </div>
    </section>
  );
                        }
