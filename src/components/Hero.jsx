import React from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import { motion } from 'framer-motion';

export default function Hero() {
  const particlesInit = async (main) => await loadFull(main);

  const textVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="hero"
      className="relative h-[70vh] md:h-[80vh] flex flex-col justify-center items-center text-center text-white overflow-hidden"
      style={{
        background: 'linear-gradient(-45deg, #0a1f44, #0d1117, #1e3a8a, #273469)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 10s ease infinite alternate',
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
            color: { value: ["#ffffff", "#FFD700", "#00BFFF"] },
            links: { enable: true, distance: 130, color: "#ffffff", opacity: 0.25, width: 1 },
            move: { enable: true, speed: 1.5, random: true },
            number: { value: 70 },
            size: { value: { min: 1, max: 4 } },
            opacity: { value: { min: 0.3, max: 0.9 }, animation: { enable: true, speed: 0.5 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      {/* Floating shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-16 right-16 w-32 h-32 bg-blue-400/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-pink-400/20 rounded-full animate-pulse"></div>

      {/* Hero Card */}
      <motion.div
        className="relative z-10 px-6 max-w-3xl backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 flex flex-col items-center shadow-2xl"
        initial="hidden"
        animate="visible"
      >
        {/* Typing Name */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent whitespace-nowrap overflow-hidden border-r-4 border-white pr-1"
          custom={1}
          variants={textVariants}
        >
          <span className="inline-block animate-typing">Philip Inem</span>
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
          className="mt-10 text-white text-3xl animate-bounce"
          custom={4}
          variants={textVariants}
        >
          ↓
        </motion.div>
      </motion.div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          /* Typing animation */
          .animate-typing {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            animation: typing 2s steps(12, end), blink-caret 0.5s step-end infinite;
          }

          @keyframes typing {
            from { width: 0 }
            to { width: 12ch }
          }

          @keyframes blink-caret {
            0%, 100% { border-color: transparent; }
            50% { border-color: white; }
          }
        `}
      </style>
    </section>
  );
                             }
