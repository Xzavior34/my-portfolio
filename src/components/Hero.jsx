import React from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import { motion } from 'framer-motion';

export default function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
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
            color: { value: "#ffffff" },
            links: { enable: true, distance: 120, color: "#ffffff", opacity: 0.3, width: 1 },
            move: { enable: true, speed: 2 },
            number: { value: 50 },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      {/* Animated Content */}
      <motion.div
        className="relative z-10 px-4 max-w-3xl backdrop-blur-md bg-white/10 rounded-lg p-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Philip Inem
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Full-Stack Developer | UI/UX Designer | Digital Strategist
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
          <a
            href="mailto:philipinem7@gmail.com"
            className="px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Email Me
          </a>
          <a
            href="https://github.com/Xzavior34"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
          >
            GitHub
          </a>
          <a
            href="Philip_Inem_CV_Summary.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-yellow-400 text-gray-800 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Download CV
          </a>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="mt-8 text-white animate-bounce text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
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
