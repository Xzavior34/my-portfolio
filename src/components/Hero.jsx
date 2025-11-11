import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Download } from 'lucide-react'; 

export default function Hero() {
  // Component for ambient background movement (light and soft)
  const DynamicBackground = () => (
    <div className="absolute inset-0 z-0 overflow-hidden" style={{
      // Soft, light gradient background
      background: 'radial-gradient(circle at 100% 100%, #f0f8ff, #ffffff 40%, #e6f0ff)',
    }}>
      {/* Visual elements to create soft, moving color effect */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-300/10 rounded-full animate-float-slow filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-300/10 rounded-full animate-float-medium filter blur-3xl"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-400/10 rounded-full animate-float-fast filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-amber-400/10 rounded-full animate-float-slow filter blur-3xl"></div>
    </div>
  );

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
      className="relative h-[95vh] flex flex-col justify-center items-center text-center text-gray-800 overflow-hidden font-inter"
    >
      <DynamicBackground />
      
      {/* Hero Content Card - Opaque/Glass Light Mode */}
      <motion.div
        className="relative z-10 px-6 max-w-5xl w-full backdrop-blur-md bg-white/90 border border-gray-200 rounded-3xl p-10 md:p-16 
                   flex flex-col items-center shadow-2xl shadow-blue-200/50"
        initial="hidden"
        animate="visible"
      >
        {/* Name - Massive and GOLDEN/AMBER for primary focus */}
        <motion.h1
          className="text-7xl lg:text-8xl font-black mb-4 text-amber-600 whitespace-nowrap overflow-hidden pr-1"
          custom={1}
          variants={textVariants}
        >
          <span className="inline-block animate-typing">Philip Inem</span>
        </motion.h1>

        {/* Professional Tagline - Clearer delineation, using Full-Stack */}
        <motion.div
          className="mb-12"
          custom={2}
          variants={textVariants}
        >
            <p className="text-2xl md:text-4xl text-gray-900 font-bold tracking-wide border-b-2 border-blue-500 pb-1">
              Full-Stack Developer
            </p>
            <p className="text-xl md:text-2xl text-gray-600 mt-2 tracking-widest uppercase">
              UI/UX Architect | FinTech Specialist
            </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 flex-wrap"
          custom={3}
          variants={textVariants}
        >
          {/* Button 1: Download CV (Primary - Filled Amber) */}
          <a
            href="Philip_Inem_CV_Summary.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-10 py-4 bg-amber-500 text-gray-900 rounded-xl font-bold text-lg tracking-wide shadow-xl shadow-amber-300/50 hover:bg-amber-600 hover:scale-[1.05] transition-transform duration-300"
          >
            <Download className="w-5 h-5 mr-3"/> Download CV
          </a>
          {/* Button 2: Email Me (Secondary - Filled Blue) */}
          <a
            href="mailto:philipinem7@gmail.com"
            className="flex items-center px-10 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg tracking-wide shadow-xl shadow-blue-400/50 hover:bg-blue-700 hover:scale-[1.05] transition-transform duration-300"
          >
            <Mail className="w-5 h-5 mr-3"/> Email Me
          </a>
          {/* Button 3: GitHub (Tertiary - Outlined Blue) */}
          <a
            href="https://github.com/Xzavior34"
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-10 py-4 bg-transparent border-2 border-blue-500 text-blue-600 rounded-xl font-bold text-lg tracking-wide hover:bg-blue-50 hover:scale-[1.05] transition-transform duration-300"
          >
            <Github className="w-5 h-5 mr-3"/> GitHub
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="mt-20 text-gray-400 text-5xl animate-bounce"
          custom={4}
          variants={textVariants}
        >
          ↓
        </motion.div>
      </motion.div>

      {/* CSS Animations */}
      <style>
        {`
          /* Floating Shapes */
          @keyframes float-slow {
            0% { transform: translate(0, 0); }
            50% { transform: translate(50px, -50px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes float-medium {
            0% { transform: translate(0, 0); }
            50% { transform: translate(-80px, 80px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes float-fast {
            0% { transform: translate(0, 0); }
            50% { transform: translate(100px, 0); }
            100% { transform: translate(0, 0); }
          }
          .animate-float-slow { animation: float-slow 20s infinite ease-in-out; }
          .animate-float-medium { animation: float-medium 15s infinite alternate; }
          .animate-float-fast { animation: float-fast 12s infinite ease; }


          /* Typing animation */
          .animate-typing {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            animation: typing 2.5s steps(15, end), blink-caret 0.75s step-end infinite;
          }

          @keyframes typing {
            from { width: 0 }
            to { width: 15ch }
          }

          @keyframes blink-caret {
            0%, 100% { border-color: transparent; }
            50% { border-color: #f59e0b; /* Amber-500 */ }
          }
        `}
      </style>
    </section>
  );
}
