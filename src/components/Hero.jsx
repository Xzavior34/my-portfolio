import React from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import { motion } from 'framer-motion';

export default function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Motion variants for staggered text
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 1 },
    }),
  };

  return (
    <section
      id="hero"
      className="relative h-[60vh] md:h-[65vh] flex flex-col justify-center items-center text-center text-white overflow-hidden"
      style={{
        background: 'linear-gradient(-45deg, #0a1f44, #0d1117, #1e3a8a, #273469)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 8s ease infinite alternate',
      }}
    >
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            color: { value: ["#ffffff", "#FFD700", "#00BFFF"] }, // multi-color particles
            links: { enable: true, distance: 120, color: "#ffffff", opacity: 0.3, width: 1 },
            move: { enable: true, speed: 2, random: true },
            number: { value: 60 },
            size: { value: { min: 1, max: 3 } },
            opacity: { value: { min: 0.3, max: 0.8 }, animation: { enable: true, speed: 0.5, minimumValue: 0.3, sync: false } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      {/* Animated Content */}
      <motion.div
        className="relative z-10 px-4 max-w-3xl backdrop-blur-md bg-white/10 rounded-2xl p-8 shadow-2xl"
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          custom={1}
          variants={textVariants}
        >
          Philip Inem
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-6 text-gray-200"
          custom={2}
          variants={textVariants}
        >
          Full-Stack Developer | UI/UX Designer | Digital Strategist
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap"
          custom={3}
          variants={textVariants}
        >
          <a
            href="mailto:philipinem7@gmail.com"
            className="px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 transition-transform duration-300 shadow-lg"
          >
            Email Me
          </a>
          <a
            href="https://github.com/Xzavior34"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border-2 border-white rounded-lg font-semibold hover:scale-105 hover:bg-white hover:text-blue-700 transition-transform duration-300 shadow-lg"
          >
            GitHub
          </a>
          <a
            href="Philip_Inem_CV_Summary.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-yellow-400 text-gray-800 rounded-lg font-semibold hover:scale-105 hover:bg-yellow-500 transition-transform duration-300 shadow-lg"
          >
            Download CV
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="mt-8 text-white animate-bounce text-2xl"
          custom={4}
          variants={textVariants}
        >
          ↓
        </motion.div>
      </motion.div>

      {/* Smooth Gradient Animation Keyframes */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
                    }
