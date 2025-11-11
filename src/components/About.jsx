import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const paragraphs = [
    <>
      I’m <span className="text-blue-600 font-bold">Philip Inem</span>, a <span className="font-extrabold text-amber-500">Quantitative Systems Engineer</span> with three years of high-impact, cumulative experience specializing in mission-critical, low-latency architectures. My professional mandate is clear: to engineer systems that deliver zero-downtime reliability and exceptional throughput. I thrive at the intersection of complex financial modeling and scalable software infrastructure, consistently driving solutions that translate directly into business performance gains.
    </>,
    <>
      My expertise was sharply developed during my tenure at <span className="font-extrabold text-amber-500">Springer Capital</span>, where I was integral to a team managing low-latency FinTech systems. I actively contributed to optimizing data feeds for algorithmic models, successfully pioneering solutions that resulted in a calculated <span className="font-extrabold text-amber-500">20% reduction in trade execution latency</span> across high-frequency data streams. This rigorous environment is complemented by extensive, high-fidelity project experience via Forage, where I oversaw the end-to-end design and deployment of a secure, API-driven microservice mesh using containers.
    </>,
    <>
      Possessing mastery of the modern stack (React/TypeScript, Python/Node.js) and advanced cloud integration patterns (AWS/GCP), my primary value is strategic. I serve as the bridge between technical debt and future-proof architecture, specializing in optimizing complex database operations (PostgreSQL/MongoDB) and migrating monolithic systems into efficient, modular components. I am not just a contributor; I am a dedicated engineering leader prepared to take ownership of challenging technical domains and deliver high-certainty, scalable outcomes.
    </>
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
      // Light background
      className="py-24 bg-gray-100 text-gray-800 relative overflow-hidden font-inter"
    >
      {/* Decorative circles - Light and subtle */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-blue-200/50 rounded-full animate-pulse blur-md"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-100/70 rounded-full animate-pulse blur-md"></div>

      <div className="max-w-5xl mx-auto px-6 text-center md:text-left relative z-10">
        <motion.h2
          // Deep blue header with subtle border
          className="text-4xl lg:text-5xl font-extrabold mb-12 text-blue-900 border-b-4 border-blue-500 inline-block pb-1"
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
            // Glassmorphism effect for light mode
            className="bg-white/70 backdrop-blur-md p-6 rounded-2xl mb-8 shadow-xl border border-gray-200 transform hover:scale-[1.01] hover:shadow-2xl hover:border-blue-500 transition duration-300 ease-in-out"
          >
            <p className="text-lg leading-relaxed text-gray-700">{para}</p>
          </motion.div>
        ))}

        <motion.div
          className="mt-12 flex justify-center md:justify-start gap-6 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <a
            href="Philip_Inem_CV_Summary.pdf"
            target="_blank"
            rel="noreferrer"
            // Primary action button (filled blue)
            className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold tracking-wide shadow-lg hover:bg-blue-700 hover:scale-[1.03] transition-transform duration-300"
          >
            Download CV
          </a>
          <a
            href="mailto:philipinem7@gmail.com"
            // Secondary action button (outlined blue) with subtle hover
            className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 rounded-xl font-bold tracking-wide hover:bg-blue-50 hover:scale-[1.03] transition-transform duration-300"
          >
            Email Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
