import React from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 text-white overflow-hidden"
    >
      {/* Particle background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            color: { value: "#ffffff" },
            links: {
              enable: true,
              distance: 120,
              color: "#ffffff",
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 1.5 },
            number: { value: 60 },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
            Philip Inem
          </span>
        </h1>

        <TypeAnimation
          sequence={[
            "Full-Stack Developer 💻", 2000,
            "UI/UX Designer 🎨", 2000,
            "Digital Strategist 🚀", 2000,
          ]}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
          className="text-xl md:text-2xl font-medium mb-8"
        />

        {/* Call-to-action buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:philipinem7@gmail.com"
            className="px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold shadow-md hover:shadow-lg hover:bg-gray-100 transition"
          >
            Email Me
          </a>
          <a
            href="https://github.com/Xzavior34"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition shadow-md"
          >
            GitHub
          </a>
          <a
            href="Philip_Inem_CV_Summary.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold shadow-md hover:bg-yellow-500 transition"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
                }
